import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Mappning: UI-knapp → AvtalsTypId hos www1.ei.se
const TYP_MAP: Record<string, number[]> = {
  'TIMPRIS':       [19],
  'KVARTSPRIS':    [27],
  'MÅNADSPRIS':    [9, 10],
  'FAST PRIS':     [1, 2, 4, 5, 6, 7],
  'MIXPRIS 1 ÅR':  [13],
};

function postnrToElArea(postnr: string): string {
  const n = parseInt(postnr);
  if (n >= 90000) return 'SE1';
  if (n >= 80000) return 'SE2';
  if (n >= 60000) return 'SE3';
  return 'SE4';
}

// Schablonvärde för elnätsavgift per år inkl moms
function natAvgiftAr(area: string): number {
  return ({ SE1: 7200, SE2: 8100, SE3: 9900, SE4: 11700 } as Record<string, number>)[area];
}

// Avkoda eventuell mojibake (UTF-8 feltolkat som Latin-1)
function fixEncoding(str: string): string {
  try { return decodeURIComponent(escape(str)); } catch { return str; }
}

interface EiContract {
  AvtalId: number;
  ElLeverantorNamn: string;
  AvtalBenamning: string;
  AvtalJamforPris: number;
  AvtalTypId: number;
  AvtalUppsagningstid: number;
  AvtalUppsagningstidEnhet: string;
  Sol: boolean;
  Vind: boolean;
  Vatten: boolean;
  Bio: boolean;
  Karnkraft: boolean;
  BraMiljoval: boolean;
  Rabattavtal: boolean;
  RabattEndastNyaKunder: boolean;
}

function energiKallor(c: EiContract): string {
  const k: string[] = [];
  if (c.Sol)       k.push('Sol');
  if (c.Vind)      k.push('Vind');
  if (c.Vatten)    k.push('Vatten');
  if (c.Bio)       k.push('Bio');
  if (c.Karnkraft) k.push('Kärnkraft');
  return k.join(', ');
}

function isGron(c: EiContract): boolean {
  return c.BraMiljoval || ((c.Sol || c.Vind || c.Vatten) && !c.Karnkraft);
}

export async function GET(request: NextRequest) {
  const postnr   = request.nextUrl.searchParams.get('postnr') ?? '';
  const kwh      = parseInt(request.nextUrl.searchParams.get('kwh') ?? '15000');
  const typParam = (request.nextUrl.searchParams.get('typ') ?? 'TIMPRIS').toUpperCase();

  if (postnr.length !== 5 || !/^\d{5}$/.test(postnr)) {
    return NextResponse.json({ error: 'Ogiltigt postnummer' }, { status: 400 });
  }

  const typIds = TYP_MAP[typParam] ?? TYP_MAP['TIMPRIS'];
  const elArea = postnrToElArea(postnr);
  const natKr  = natAvgiftAr(elArea);

  // Hämta avtal direkt från Energimarknadsinspektionens öppna API
  const apiUrl = `https://www1.ei.se/elinservices/api/json/SokAvtal?postNummer=${postnr}&forbrukning=${kwh}`;
  const res = await fetch(apiUrl, {
    headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0' },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: `EI-API svarade ${res.status}` }, { status: 502 });
  }

  const allContracts: EiContract[] = await res.json();

  // Filtrera på vald avtalstyp
  const filtered = allContracts.filter(c => typIds.includes(c.AvtalTypId));

  if (filtered.length === 0) {
    return NextResponse.json({ error: 'Inga avtal hittades för vald typ' }, { status: 404 });
  }

  // Sortera på jämförpris (lägst öre/kWh först)
  const sorted = [...filtered].sort((a, b) => a.AvtalJamforPris - b.AvtalJamforPris);

  // Beräkna ungefärlig totalkostnad per år inkl elnät, elskatt (54,875 öre/kWh), moms (25 %)
  const ELSKATT = 54.875;
  const medianOre = sorted[Math.floor(sorted.length / 2)]?.AvtalJamforPris ?? sorted[0].AvtalJamforPris;
  const medianAr  = Math.round((((medianOre + ELSKATT) * kwh) / 100) * 1.25 + natKr);

  const offers = sorted.slice(0, 20).map(c => {
    const totalAr  = Math.round((((c.AvtalJamforPris + ELSKATT) * kwh) / 100) * 1.25 + natKr);
    const besparing = Math.max(0, medianAr - totalAr);
    const uppsTid  = c.AvtalUppsagningstid === 0
      ? 'Löpande'
      : `${c.AvtalUppsagningstid} ${c.AvtalUppsagningstidEnhet === 'D' ? 'dagar' : 'mån'}`;

    return {
      id:          c.AvtalId,
      leverantor:  fixEncoding(c.ElLeverantorNamn),
      avtalNamn:   fixEncoding(c.AvtalBenamning),
      prisOre:     Math.round(c.AvtalJamforPris * 100) / 100,
      totalAr,
      totalMan:    Math.round(totalAr / 12),
      besparing,
      typ:         typParam.toLowerCase(),
      gron:        isGron(c),
      energiKalla: energiKallor(c),
      uppsTid,
      kampanj:     c.Rabattavtal
        ? (c.RabattEndastNyaKunder ? 'Rabatt nya kunder' : 'Rabatterat pris')
        : '',
      källa:       'live' as const,
    };
  });

  // Förklaringstext per avtalstyp
  const prisTypNote: Record<string, string> = {
    'TIMPRIS':       'Jämförpris = 12-månaders genomsnittligt spotpris + påslag. Ditt faktiska timpris varierar varje timme med elbörsen (Nordpool).',
    'KVARTSPRIS':    'Jämförpris baserat på rullande genomsnitt. Priset sätts kvartalsvis efter föregående periods spotpris.',
    'MÅNADSPRIS':    'Jämförpris baserat på rullande genomsnitt. Priset sätts månadsvis efter föregående periods spotpris.',
    'FAST PRIS':     'Fast örespris under hela bindningstiden — exakt vad du betalar per kWh, oavsett hur börsen rör sig.',
    'MIXPRIS 1 ÅR':  'En del av priset är fast, en del rörligt. Se avtalets detaljer för exakt fördelning.',
  };

  return NextResponse.json({
    offers,
    källa:        'Energimarknadsinspektionen (ei.se)',
    spotAreaNote: `Elområde: ${elArea} · ${filtered.length} avtal`,
    hämtadTid:   new Date().toISOString(),
    prisTypNote:  prisTypNote[typParam] ?? '',
  });
}