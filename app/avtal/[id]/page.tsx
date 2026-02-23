'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, ExternalLink, Sun, Wind, Droplets, Flame, Atom, CheckCircle } from 'lucide-react';
import type { ScrapedOffer } from '@/lib/types';

const C = {
  bg: '#f9f7f2',
  bgCard: '#ffffff',
  bgMuted: '#f3f0e8',
  border: '#e2ddd4',
  text: '#1c1917',
  textMuted: '#78716c',
  textLight: '#a8a29e',
  green: '#15803d',
  greenLight: '#dcfce7',
  greenText: '#166534',
  greenBorder: '#86efac',
  amber: '#d97706',
  amberLight: '#fef3c7',
  amberText: '#92400e',
  shadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
};

const ELSKATT = 36; // Energiskatt fr.o.m. 1 jan 2026: 36 öre/kWh exkl. moms (45,0 öre/kWh inkl. moms)

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 16, padding: '24px 28px', marginBottom: 16, boxShadow: C.shadow }}>
      <h2 style={{ fontSize: 14, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>{title}</h2>
      {children}
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: React.ReactNode; highlight?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
      <span style={{ fontSize: 14, color: C.textMuted }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: highlight ? 800 : 600, color: highlight ? C.text : C.textMuted }}>{value}</span>
    </div>
  );
}

export default function AvtalPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [offer, setOffer] = useState<ScrapedOffer | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('elsnabbt_results');
      if (!raw) return;
      const offers: ScrapedOffer[] = JSON.parse(raw);
      const found = offers.find(o => String(o.id) === id);
      if (found) setOffer(found);
    } catch {}
  }, [id]);

  if (!offer) {
    return (
      <div style={{ background: C.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: C.textMuted, marginBottom: 16 }}>Avtalet hittades inte.</p>
          <button onClick={() => router.push('/')} style={{ padding: '10px 20px', background: C.green, color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 700 }}>
            ← Tillbaka till sökning
          </button>
        </div>
      </div>
    );
  }

  const kwh = offer.kwh ?? 15000;
  // offer.prisOre (AvtalJamforPris) är redan inkl. moms (25%)
  const prisInklMoms = offer.prisOre ?? 0;
  // Elskatt är exkl. moms → lägg på 25%
  const elskatInklMoms = ELSKATT * 1.25;
  const totaltInklMoms = prisInklMoms + elskatInklMoms;

  const typLabel: Record<string, string> = {
    timpris: 'Rörligt timpris',
    månadspris: 'Rörligt månadspris',
    kvartspris: 'Rörligt kvartspris',
    'fast pris': 'Fast pris',
    'mixpris 1 år': 'Mixpris 1 år',
  };
  const typFormatted = typLabel[offer.typ] ?? offer.typ;

  const elpriskollénUrl = offer.leverantorUrl || `https://www.elpriskollen.se/elavtal/${offer.id}`;

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text }}>

      {/* NAV */}
      <header style={{ borderBottom: `1px solid ${C.border}`, background: 'rgba(249,247,242,0.95)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={() => router.back()}
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: C.text, background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka
          </button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Elblixten" style={{ height: 52 }} />
          </div>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{ maxWidth: 760, margin: '0 auto', padding: '32px 24px 80px' }}
      >

        {/* HERO */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 13, fontWeight: 700, background: C.bgMuted, border: `1px solid ${C.border}`, borderRadius: 999, padding: '4px 12px', color: C.textMuted }}>
              {typFormatted}
            </span>
            {offer.elArea && (
              <span style={{ fontSize: 13, fontWeight: 700, background: C.bgMuted, border: `1px solid ${C.border}`, borderRadius: 999, padding: '4px 12px', color: C.textMuted }}>
                Elområde {offer.elArea}
              </span>
            )}
            {offer.gron && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 700, background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderRadius: 999, padding: '4px 12px', color: C.greenText }}>
                <Leaf className="w-3.5 h-3.5" /> Grön el
              </span>
            )}
            {offer.kampanj && (
              <span style={{ fontSize: 13, fontWeight: 700, background: C.amberLight, border: `1px solid #fcd34d`, borderRadius: 999, padding: '4px 12px', color: C.amberText }}>
                {offer.kampanj}
              </span>
            )}
          </div>

          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, letterSpacing: '-0.8px', lineHeight: 1.15, marginBottom: 4 }}>
            {offer.leverantor}
          </h1>
          <p style={{ fontSize: 16, color: C.textMuted, fontWeight: 500 }}>{offer.avtalNamn}</p>
        </div>

        {/* PRIS BIG */}
        <div style={{ background: C.bgCard, border: `2px solid ${C.green}`, borderRadius: 20, padding: '28px 32px', marginBottom: 16, boxShadow: '0 4px 20px rgba(21,128,61,0.1)' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.textMuted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            Totalpris
          </div>
          <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, color: C.green, letterSpacing: '-1px', lineHeight: 1.1 }}>
            {totaltInklMoms.toFixed(2)} <span style={{ fontSize: 18, fontWeight: 700, color: C.textMuted }}>öre/kWh</span>
          </div>
          <div style={{ fontSize: 13, color: C.textLight, marginTop: 6 }}>
            inkl. moms &amp; elskatt
          </div>
          <div style={{ fontSize: 12, color: C.textLight, marginTop: 4, background: C.bgMuted, borderRadius: 8, padding: '6px 10px', display: 'inline-block' }}>
            Elbolagets jämförpris: {offer.prisOre?.toFixed(2)} öre/kWh (exkl. elskatt)
          </div>

          <div style={{ display: 'flex', gap: 32, marginTop: 20, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 12, color: C.textMuted, fontWeight: 600 }}>Per månad</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: C.text }}>{offer.totalMan.toLocaleString('sv-SE')} kr</div>
              <div style={{ fontSize: 12, color: C.textLight }}>inkl. elnät, skatt & moms</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: C.textMuted, fontWeight: 600 }}>Per år</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: C.text }}>{offer.totalAr.toLocaleString('sv-SE')} kr</div>
              <div style={{ fontSize: 12, color: C.textLight }}>inkl. elnät, skatt & moms</div>
            </div>
          </div>
        </div>

        {/* PRISUPPDELNING */}
        <Section title="Prisuppdelning per kWh">
          <Row label="Elbolagets pris inkl. moms" value={`${prisInklMoms.toFixed(2)} öre/kWh`} />
          <Row label={`Statlig elskatt inkl. moms (${ELSKATT.toFixed(3)} × 1,25)`} value={`${elskatInklMoms.toFixed(2)} öre/kWh`} />
          <Row label="Elpris + elskatt inkl. moms" value={`${totaltInklMoms.toFixed(2)} öre/kWh`} highlight />
          <p style={{ fontSize: 12, color: C.textLight, marginTop: 12, lineHeight: 1.6 }}>
            Elnätsavgiften ({(offer.elArea === 'SE1' ? 7200 : offer.elArea === 'SE2' ? 8100 : offer.elArea === 'SE4' ? 11700 : 9900).toLocaleString('sv-SE')} kr/år för {offer.elArea}) tillkommer och ingår i månadskostnaden ovan men syns inte i örespriset — den beror på ditt lokala nätbolag och kan inte väljas bort.
          </p>
        </Section>

        {/* ENERGIKÄLLOR */}
        {(offer.sol || offer.vind || offer.vatten || offer.bio || offer.karnkraft) && (
          <Section title="Energikällor">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {offer.sol && <EnergiChip icon={<Sun className="w-4 h-4" />} label="Sol" />}
              {offer.vind && <EnergiChip icon={<Wind className="w-4 h-4" />} label="Vind" />}
              {offer.vatten && <EnergiChip icon={<Droplets className="w-4 h-4" />} label="Vatten" />}
              {offer.bio && <EnergiChip icon={<Flame className="w-4 h-4" />} label="Biobränsle" />}
              {offer.karnkraft && <EnergiChip icon={<Atom className="w-4 h-4" />} label="Kärnkraft" />}
            </div>
            {offer.braMiljoval && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 13, color: C.greenText, fontWeight: 600 }}>
                <CheckCircle className="w-4 h-4" /> Märkt med Bra Miljöval
              </div>
            )}
          </Section>
        )}

        {/* VILLKOR */}
        <Section title="Villkor">
          {offer.uppsTid && <Row label="Uppsägningstid" value={offer.uppsTid} />}
          {offer.fakturering && <Row label="Faktureringsalternativ" value={offer.fakturering} />}
          {offer.betalning && <Row label="Betalningsalternativ" value={offer.betalning} />}
          {offer.nyttaKunder && (
            <Row label="Kampanj" value="Gäller endast nya kunder" />
          )}
        </Section>

        {/* CTA */}
        <div style={{ position: 'sticky', bottom: 24, marginTop: 8 }}>
          <a
            href={elpriskollénUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              width: '100%',
              padding: '18px 24px',
              background: C.green,
              color: '#fff',
              borderRadius: 16,
              fontWeight: 800,
              fontSize: 18,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(21,128,61,0.35)',
              letterSpacing: '-0.2px',
            }}
          >
            Teckna avtal hos {offer.leverantor}
            <ExternalLink className="w-5 h-5" />
          </a>
          {(offer.leverantorTelefon || offer.leverantorEpost) && (
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 14, flexWrap: 'wrap' }}>
              {offer.leverantorTelefon && (
                <a href={`tel:${offer.leverantorTelefon.replace(/\s/g,'')}`} style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none', fontWeight: 600 }}>
                  📞 {offer.leverantorTelefon}
                </a>
              )}
              {offer.leverantorEpost && (
                <a href={`mailto:${offer.leverantorEpost}`} style={{ fontSize: 13, color: C.textMuted, textDecoration: 'none', fontWeight: 600 }}>
                  ✉️ {offer.leverantorEpost}
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function EnergiChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '8px 14px', fontSize: 13, fontWeight: 600, color: '#166534' }}>
      {icon} {label}
    </div>
  );
}
