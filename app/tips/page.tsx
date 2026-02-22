import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tips för att spara el – Elblixten',
  description: 'Praktiska och enkla tips för att minska din elförbrukning och sänka elräkningen. Från smarta vanor till tekniska lösningar.',
  alternates: { canonical: 'https://elblixten.se/tips' },
  openGraph: {
    title: 'Tips för att spara el – Elblixten',
    description: 'Praktiska och enkla tips för att minska din elförbrukning och sänka elräkningen.',
    url: 'https://elblixten.se/tips',
  },
};

const C = {
  bg: '#f9f7f2', bgCard: '#ffffff', bgMuted: '#f3f0e8', border: '#e2ddd4',
  text: '#1c1917', textMuted: '#78716c', textLight: '#a8a29e',
  green: '#15803d', greenLight: '#dcfce7', greenText: '#166534', greenBorder: '#86efac',
  amber: '#d97706', amberLight: '#fef3c7', amberText: '#92400e',
  shadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
};

interface Tip {
  emoji: string;
  title: string;
  desc: string;
  saving: string;
  effort: 'Enkelt' | 'Medel' | 'Kräver investering';
}

const tips: Tip[] = [
  {
    emoji: '🌡️',
    title: 'Sänk temperaturen 1 grad',
    desc: 'Sänk inomhustemperaturen från 22°C till 21°C. Det märks knappt i komfort men ger direkt besparing.',
    saving: '5–10% på uppvärmning',
    effort: 'Enkelt',
  },
  {
    emoji: '🌙',
    title: 'Tvätta och diska på natten',
    desc: 'Elpriset (timpris) är som lägst kl. 22–06. Starta tvätt och diskmaskin med timer om natten.',
    saving: '30–60% lägre elpris per kWh',
    effort: 'Enkelt',
  },
  {
    emoji: '💡',
    title: 'Byt till LED-belysning',
    desc: 'LED förbrukar 80–90% mindre energi än glödlampor och har 15–25× längre livslängd.',
    saving: '500–1 500 kr/år (fullsatt hem)',
    effort: 'Enkelt',
  },
  {
    emoji: '🔌',
    title: 'Stäng av stand-by',
    desc: 'TV, spelkonsol, laddare och router i stand-by kan stå för 5–10% av din totala förbrukning.',
    saving: 'Upp till 500 kr/år',
    effort: 'Enkelt',
  },
  {
    emoji: '🚿',
    title: 'Duscha 2 minuter kortare',
    desc: 'Varmvatten är en av de största elposterna i ett hem. 2 minuter kortare dusch per person per dag.',
    saving: '300–800 kr/år',
    effort: 'Enkelt',
  },
  {
    emoji: '🪟',
    title: 'Täta fönster och dörrar',
    desc: 'Drag är en dold värmeboov. Enkel tätningslist kostar 200–500 kr och ger omedelbara besparingar.',
    saving: '500–2 000 kr/år',
    effort: 'Enkelt',
  },
  {
    emoji: '🏅',
    title: 'Jämför och byt elavtal',
    desc: 'Det mest effektiva tipset av alla. Skillnaden mellan bästa och sämsta avtal är ofta 20–40 öre/kWh.',
    saving: '2 000–8 000 kr/år beroende på förbrukning',
    effort: 'Enkelt',
  },
  {
    emoji: '🌡️',
    title: 'Sänk varmvattentemperatur till 55°C',
    desc: '55°C är rätt temperatur – varmt nog att stoppa bakterier, men inte slösaktigt. De flesta har 65–70°C.',
    saving: '200–500 kr/år',
    effort: 'Enkelt',
  },
  {
    emoji: '🔧',
    title: 'Smarta termostater på elementen',
    desc: 'Smarta radiatortermostatventiler stänger ner automatiskt när du inte är hemma och öppnar när du kommer.',
    saving: '1 000–3 000 kr/år',
    effort: 'Kräver investering',
  },
  {
    emoji: '☀️',
    title: 'Solpaneler',
    desc: 'En genomsnittlig villa minskar sin nettokostnad med 50–80% med solpaneler. Payback-tid 8–12 år.',
    saving: '8 000–20 000 kr/år (beroende)',
    effort: 'Kräver investering',
  },
  {
    emoji: '🏠',
    title: 'Tilläggsisolering av vind',
    desc: 'Upp till 30% av husets värmeförlust sker via taket. Tilläggsisolering av vinden är lönsammast per insatt krona.',
    saving: '3 000–8 000 kr/år',
    effort: 'Kräver investering',
  },
  {
    emoji: '🚗',
    title: 'Ladda elbilen smart',
    desc: 'Ladda elbilen med timer eller smart laddbox som väljer billiga timmar automatiskt. Spara 30–50% på laddkostnaden.',
    saving: '2 000–5 000 kr/år',
    effort: 'Medel',
  },
];

const effortColor: Record<string, { bg: string; text: string }> = {
  'Enkelt': { bg: C.greenLight, text: C.greenText },
  'Medel': { bg: C.amberLight, text: C.amberText },
  'Kräver investering': { bg: '#e0e7ff', text: '#3730a3' },
};

export default function TipsPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text }}>
      {/* NAV */}
      <header style={{ borderBottom: `1px solid ${C.border}`, background: 'rgba(249,247,242,0.95)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="Elblixten" style={{ height: 52 }} />
          </Link>
          <nav style={{ display: 'flex', gap: 24, fontSize: 14, fontWeight: 600 }}>
            <Link href="/" style={{ color: C.textMuted, textDecoration: 'none' }}>Jämför avtal</Link>
            <Link href="/tips" style={{ color: C.green, textDecoration: 'none' }}>Tips</Link>
            <Link href="/blog" style={{ color: C.textMuted, textDecoration: 'none' }}>Guider</Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' }}>
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 12 }}>
            Tips för att spara el
          </h1>
          <p style={{ fontSize: 17, color: C.textMuted, maxWidth: 560, lineHeight: 1.65 }}>
            Enkla och effektiva åtgärder som minskar din elräkning – utan att du behöver offra komforten.
          </p>
        </div>

        {/* Quick stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 48 }}>
          {[
            { label: 'Potentiell besparing', value: '10 000+ kr/år', desc: 'för en villa med elvärme' },
            { label: 'Snabbaste åtgärd', value: '30 sek', desc: 'byt elavtal på Elblixten' },
            { label: 'Genomsnittlig besparing', value: '3 000 kr', desc: 'vid elavtalsbyte' },
          ].map(s => (
            <div key={s.label} style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: '20px', textAlign: 'center', boxShadow: C.shadow }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: C.green, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: C.textMuted }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Tips grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {tips.map((tip, i) => {
            const ec = effortColor[tip.effort];
            return (
              <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 16, padding: '22px', boxShadow: C.shadow, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 28 }}>{tip.emoji}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, background: ec.bg, color: ec.text, borderRadius: 999, padding: '3px 9px' }}>{tip.effort}</span>
                </div>
                <h2 style={{ fontSize: 15, fontWeight: 800, color: C.text, lineHeight: 1.3 }}>{tip.title}</h2>
                <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.55 }}>{tip.desc}</p>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.green, marginTop: 'auto' }}>
                  💰 {tip.saving}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderRadius: 16, padding: '32px', marginTop: 48, textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: C.greenText, marginBottom: 8 }}>
            Det snabbaste tipset: byt elavtal
          </div>
          <p style={{ color: C.greenText, opacity: 0.8, marginBottom: 24, fontSize: 15 }}>
            Jämförelse tar 30 sekunder. Genomsnittlig besparing 2 000–5 000 kr/år.
          </p>
          <Link href="/" style={{ background: C.green, color: '#fff', borderRadius: 12, padding: '14px 28px', fontWeight: 800, fontSize: 16, textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 14px rgba(21,128,61,0.3)' }}>
            Jämför elavtal gratis →
          </Link>
        </div>
      </main>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '32px 24px', textAlign: 'center', color: C.textLight, fontSize: 13 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <img src="/logo.png" alt="Elblixten" style={{ height: 32, opacity: 0.5, marginBottom: 12 }} />
          <p>© 2025 Elblixten. Alla tips baseras på branschfakta och rekommendationer.</p>
        </div>
      </footer>
    </div>
  );
}
