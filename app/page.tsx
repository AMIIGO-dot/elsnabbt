'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MotionLink = motion(Link);
import { Leaf, Star, TrendingDown, Lock, Trophy, ChevronRight } from 'lucide-react';
import type { ScrapedOffer } from '@/lib/types';
import { blogPosts } from '@/lib/blog-data';

export default function Home() {
  const [postnr, setPostnr] = useState('');
  const [kwh, setKwh] = useState(15000);
  const [results, setResults] = useState<ScrapedOffer[]>([]);
  const [avtalstyp, setAvtalstyp] = useState('KVARTSPRIS');
  const [kundtyp, setKundtyp] = useState<'privat' | 'foretag'>('privat');
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [dataSource, setDataSource] = useState('');
  const [hämtadTid, setHämtadTid] = useState('');
  const [prisTypNote, setPrisTypNote] = useState('');
  const [showHousing, setShowHousing] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const avtalstyper = [
    { key: 'KVARTSPRIS',   label: 'Kvartspris',   desc: 'Rörligt, sätts kvartalsvis' },
    { key: 'TIMPRIS',       label: 'Timpris',      desc: 'Följer börsen per timme' },
    { key: 'MÅNADSPRIS',   label: 'Månadspris',   desc: 'Rörligt, sätts månadsvis' },
    { key: 'FAST PRIS',    label: 'Fast pris',    desc: 'Låst pris, förutsägbart' },
    { key: 'MIXPRIS 1 ÅR', label: 'Mixpris 1 år', desc: 'Del fast, del rörligt' },
  ];

  const handleSearch = async () => {
    if (postnr.length !== 5) return;
    setLoading(true);
    setSearched(false);
    try {
      const res = await fetch(`/api/compare?postnr=${postnr}&kwh=${kwh}&typ=${encodeURIComponent(avtalstyp)}&kundtyp=${kundtyp}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      const offers: ScrapedOffer[] = data.offers ?? [];
      setResults(offers);
      setDataSource(data.källa ?? '');
      setPrisTypNote(data.prisTypNote ?? '');
      setHämtadTid(data.hämtadTid ? new Date(data.hämtadTid).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' }) : '');
      // Spara för detalj-sida
      if (typeof window !== 'undefined') {
        localStorage.setItem('elsnabbt_results', JSON.stringify(offers));
        localStorage.setItem('elsnabbt_postnr', postnr);
        localStorage.setItem('elsnabbt_kwh', String(kwh));
      }
    } catch (err) {
      console.error('Sökning misslyckades:', err);
      setResults([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  // Design tokens
  const C = {
    bg: '#f9f7f2',
    bgCard: '#ffffff',
    bgMuted: '#f3f0e8',
    border: '#e2ddd4',
    borderFocus: '#15803d',
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
    shadowHover: '0 4px 8px rgba(0,0,0,0.07), 0 12px 32px rgba(0,0,0,0.08)',
  };

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Hur jämför jag elavtal?', acceptedAnswer: { '@type': 'Answer', text: 'Ange ditt postnummer och din årsförbrukning i formuläret på Elblixten. Vi hämtar alla tillgängliga avtal från Energimarknadsinspektionens databas och sorterar dem billigast först – helt gratis.' } },
          { '@type': 'Question', name: 'Vad är skillnaden mellan timpris och fast pris?', acceptedAnswer: { '@type': 'Answer', text: 'Timpris innebär att du betalar marknadens elpris varje timme. Fast pris låser din elproduktionskostnad under avtalsperioden (1–3 år). Rörligt pris är historiskt billigare i snitt men innebär mer osäkerhet.' } },
          { '@type': 'Question', name: 'Kostar det något att byta elavtal?', acceptedAnswer: { '@type': 'Answer', text: 'Nej, det är helt gratis att byta elavtal i Sverige. Det är en lagstadgad rättighet. Din nya leverantör hanterar bytet åt dig.' } },
          { '@type': 'Question', name: 'Vad ingår i det totala elpriset?', acceptedAnswer: { '@type': 'Answer', text: 'Det totala elpriset består av elproduktion (det jämförbara priset), elnätsavgift till ditt nätbolag, och statlig elskatt (54,875 öre/kWh 2025). Allt inklusive 25% moms.' } },
          { '@type': 'Question', name: 'Hur ofta bör jag jämföra elavtal?', acceptedAnswer: { '@type': 'Answer', text: 'Minst en gång per år – och alltid när ditt avtal är på väg att löpa ut. Med Elblixten tar en jämförelse bara 30 sekunder.' } },
        ],
      }) }} />

      {/* ── NAV ── */}
      <header style={{ borderBottom: `1px solid ${C.border}`, background: 'rgba(249,247,242,0.92)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Elblixten" style={{ height: 56 }} />
          </div>
          <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Link href="/tips" style={{ fontSize: 14, fontWeight: 600, color: C.textMuted, textDecoration: 'none' }}>Tips</Link>
            <Link href="/blog" style={{ fontSize: 14, fontWeight: 600, color: C.textMuted, textDecoration: 'none' }}>Guider</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">

        {/* ── HERO ── */}
        <motion.div
          className="text-center"
          style={{ paddingTop: 72, paddingBottom: 40 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: C.greenLight, border: `1px solid ${C.greenBorder}`, borderRadius: 999, padding: '5px 14px', fontSize: 13, color: C.greenText, fontWeight: 700, marginBottom: 24 }}>
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            Jämför elavtal – helt gratis
          </div>

          <h1 style={{ fontSize: 'clamp(34px, 6vw, 62px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.08, marginBottom: 18, color: C.text }}>
            Hitta billigaste elavtalet<br />
            <span style={{ color: C.green }}>på 30 sekunder</span>
          </h1>

          <p style={{ fontSize: 17, color: C.textMuted, maxWidth: 460, margin: '0 auto 28px', lineHeight: 1.65 }}>
            Ange postnummer och förbrukning – vi visar de bästa avtalen direkt. Inget konto behövs.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
            {['Ingen registrering', 'Alltid uppdaterat', 'Helt gratis'].map((t) => (
              <span key={t} style={{ fontSize: 13, fontWeight: 600, color: C.textMuted, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 999, padding: '5px 14px', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                ✓ {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── FORM ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45 }}
          style={{ maxWidth: 640, margin: '0 auto 72px', background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 20, padding: '36px 40px', boxShadow: C.shadow }}
        >
          {/* Postnummer */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: C.textMuted, marginBottom: 8, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Ditt postnummer
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="t.ex. 11122"
              maxLength={5}
              value={postnr}
              onChange={e => setPostnr(e.target.value.replace(/\D/g, '').slice(0, 5))}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              style={{
                width: '100%', padding: '14px 16px', fontSize: 16, fontWeight: 600,
                border: `2px solid ${postnr.length === 5 ? C.green : C.border}`,
                borderRadius: 12, outline: 'none', background: C.bg, color: C.text,
                transition: 'border-color 0.2s', boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Kundtyp */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: C.textMuted, marginBottom: 10, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Jag är
            </label>
            <div style={{ display: 'flex', gap: 8 }}>
              {([{ key: 'privat', label: 'Privatperson' }, { key: 'foretag', label: 'Företag' }] as const).map(k => (
                <button
                  key={k.key}
                  onClick={() => setKundtyp(k.key)}
                  style={{
                    flex: 1, padding: '10px 16px', fontSize: 14, fontWeight: 700, borderRadius: 10, cursor: 'pointer', transition: 'all 0.15s',
                    background: kundtyp === k.key ? C.green : C.bgMuted,
                    color: kundtyp === k.key ? '#fff' : C.text,
                    border: `1.5px solid ${kundtyp === k.key ? C.green : C.border}`,
                    boxShadow: kundtyp === k.key ? '0 2px 8px rgba(21,128,61,0.25)' : 'none',
                  }}
                >
                  {k.label}
                </button>
              ))}
            </div>
          </div>

          {/* Avtalstyp */}
          <div style={{ marginBottom: 28 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: C.textMuted, marginBottom: 10, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Avtalstyp
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {avtalstyper.map(a => (
                <button
                  key={a.key}
                  onClick={() => setAvtalstyp(a.key)}
                  title={a.desc}
                  style={{
                    padding: '8px 16px', fontSize: 13, fontWeight: 700, borderRadius: 10, cursor: 'pointer', transition: 'all 0.15s',
                    background: avtalstyp === a.key ? C.green : C.bgMuted,
                    color: avtalstyp === a.key ? '#fff' : C.text,
                    border: `1.5px solid ${avtalstyp === a.key ? C.green : C.border}`,
                    boxShadow: avtalstyp === a.key ? '0 2px 8px rgba(21,128,61,0.25)' : 'none',
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>
            <p style={{ fontSize: 12, color: C.textLight, marginTop: 6 }}>
              {avtalstyper.find(a => a.key === avtalstyp)?.desc}
            </p>
          </div>

          {/* kWh slider */}
          <div style={{ marginBottom: 32 }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: 13, fontWeight: 700, color: C.textMuted, marginBottom: 10, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              <span>Årsförbrukning</span>
              <span style={{ fontSize: 17, fontWeight: 800, color: C.text }}>{kwh.toLocaleString('sv-SE')} kWh</span>
            </label>
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={kwh}
              onChange={e => { setKwh(Number(e.target.value)); setShowHousing(false); }}
              style={{ width: '100%', accentColor: C.green }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: C.textLight, marginTop: 8 }}>
              <span>1 000 kWh</span>
              <button
                onClick={() => setShowHousing(v => !v)}
                style={{ fontSize: 12, fontWeight: 700, color: C.green, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
              >
                {showHousing ? 'Dölj guide' : 'Hjälp, jag vet inte!'}
              </button>
              <span>50 000 kWh</span>
            </div>

            {/* Housing picker */}
            <AnimatePresence>
              {showHousing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 16 }}>
                    {[
                      { label: 'Lägenhet', kwh: 2000, emoji: '🏢', desc: '2 000 kWh/år' },
                      { label: 'Villa', kwh: 5000, emoji: '🏠', desc: '5 000 kWh/år' },
                      { label: 'Villa med elvärme', kwh: 20000, emoji: '🔌', desc: '20 000 kWh/år' },
                    ].map(opt => {
                      const selected = kwh === opt.kwh;
                      return (
                        <button
                          key={opt.label}
                          onClick={() => { setKwh(opt.kwh); setShowHousing(false); }}
                          style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                            padding: '14px 8px', borderRadius: 12, cursor: 'pointer', transition: 'all 0.15s',
                            background: selected ? C.greenLight : C.bgMuted,
                            border: `2px solid ${selected ? C.green : C.border}`,
                            boxShadow: selected ? '0 2px 8px rgba(21,128,61,0.2)' : 'none',
                          }}
                        >
                          <span style={{ fontSize: 26 }}>{opt.emoji}</span>
                          <span style={{ fontSize: 12, fontWeight: 800, color: selected ? C.greenText : C.text }}>{opt.label}</span>
                          <span style={{ fontSize: 11, color: C.textMuted, fontWeight: 600 }}>{opt.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sök-knapp */}
          <button
            onClick={handleSearch}
            disabled={loading || postnr.length !== 5}
            style={{
              width: '100%', padding: '16px', fontSize: 16, fontWeight: 800, borderRadius: 14, border: 'none',
              background: postnr.length === 5 ? C.green : C.border,
              color: postnr.length === 5 ? '#fff' : C.textLight,
              cursor: postnr.length === 5 ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s', letterSpacing: '-0.2px',
              boxShadow: postnr.length === 5 ? '0 4px 14px rgba(21,128,61,0.3)' : 'none',
            }}
          >
            {loading ? 'Söker bästa avtal…' : 'Jämför elavtal →'}
          </button>

          {postnr.length > 0 && postnr.length < 5 && (
            <p style={{ textAlign: 'center', fontSize: 13, color: C.amber, marginTop: 10, fontWeight: 600 }}>
              Ange alla 5 siffror i postnumret
            </p>
          )}
        </motion.div>

        {/* ── RESULTS ── */}
        <AnimatePresence>
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ maxWidth: 800, margin: '0 auto', paddingBottom: 80 }}
            >
              {dataSource && (
                <div style={{ textAlign: 'center', marginBottom: 16, display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, color: C.textMuted, background: C.bgMuted, border: `1px solid ${C.border}`, borderRadius: 999, padding: '5px 14px', fontWeight: 600 }}>
                    Källa: {dataSource}
                  </span>
                  {hämtadTid && (
                    <span style={{ fontSize: 13, color: C.textMuted, background: C.bgMuted, border: `1px solid ${C.border}`, borderRadius: 999, padding: '5px 14px', fontWeight: 600 }}>
                      Hämtades: {hämtadTid} (uppdateras varje timme)
                    </span>
                  )}
                </div>
              )}
              {prisTypNote && (
                <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 12, padding: '12px 16px', marginBottom: 20, fontSize: 13, color: '#92400e', lineHeight: 1.5 }}>
                  <strong>ℹ️ Om priserna:</strong> {prisTypNote}
                </div>
              )}

              {results.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px 0', color: C.textMuted }}>
                  <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Inga avtal hittades</p>
                  <p style={{ fontSize: 15 }}>Prova ett annat postnummer eller avtalstyp.</p>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px' }}>
                      {results.length} avtal för {postnr}
                    </h2>
                    <span style={{ fontSize: 13, color: C.textMuted, fontWeight: 600 }}>Sorterat billigast först</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {results.map((offer, i) => (
                      <MotionLink
                        key={i}
                        href={offer.id ? `/avtal/${offer.id}` : '#'}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        style={{
                          background: C.bgCard,
                          border: `1.5px solid ${i === 0 ? C.green : C.border}`,
                          borderRadius: 16,
                          padding: '20px 24px',
                          boxShadow: i === 0 ? '0 2px 12px rgba(21,128,61,0.12)' : C.shadow,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 16,
                          flexWrap: 'wrap',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'box-shadow 0.15s, transform 0.15s',
                        }}
                        whileHover={{ boxShadow: C.shadowHover, y: -2 }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 180 }}>
                          <div style={{
                            width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 15, flexShrink: 0,
                            background: i === 0 ? C.green : C.bgMuted,
                            color: i === 0 ? '#fff' : C.textMuted,
                          }}>
                            {i === 0 ? <Trophy className="w-4 h-4" /> : i + 1}
                          </div>
                          <div>
                            <div style={{ fontWeight: 800, fontSize: 16, color: C.text }}>{offer.leverantor}</div>
                            <div style={{ fontSize: 13, color: C.textMuted, marginTop: 2 }}>{offer.avtalNamn}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                              {offer.gron && (
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: C.greenLight, color: C.greenText, borderRadius: 999, padding: '1px 8px', fontSize: 11, fontWeight: 700 }}>
                                  <Leaf className="w-3 h-3" /> Grön
                                </span>
                              )}
                              {offer.kampanj && (
                                <span style={{ background: C.amberLight, color: C.amberText, borderRadius: 999, padding: '1px 8px', fontSize: 11, fontWeight: 700 }}>
                                  {offer.kampanj}
                                </span>
                              )}
                              {offer.uppsTid && (
                                <span style={{ color: C.textLight, fontSize: 11 }}>Uppsägn: {offer.uppsTid}</span>
                              )}
                              {offer.energiKalla && (
                                <span style={{ color: C.textLight, fontSize: 11 }}>{offer.energiKalla}</span>
                              )}
                            </div>
                          </div>
                        </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                          {offer.besparing > 500 && (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: 12, color: C.green, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Spara</div>
                              <div style={{ fontSize: 15, fontWeight: 800, color: C.green }}>
                                {Math.round(offer.besparing / 100) * 100} kr/år
                              </div>
                            </div>
                          )}
                          <div style={{ textAlign: 'right' }}>
                            {offer.prisOre !== undefined && (
                              <>
                                <div style={{ fontSize: 12, color: C.green, fontWeight: 700, marginBottom: 1 }}>{(offer.prisOre + 45.0).toFixed(2)} öre/kWh</div>
                                <div style={{ fontSize: 10, color: C.textLight, marginBottom: 4 }}>inkl. elskatt & moms</div>
                              </>
                            )}
                            <div style={{ fontSize: 12, color: C.textMuted, fontWeight: 600 }}>Per månad</div>
                            <div style={{ fontSize: 18, fontWeight: 900, color: C.text }}>{offer.totalMan.toLocaleString('sv-SE')} kr</div>
                            <div style={{ fontSize: 12, color: C.textLight }}>{offer.totalAr.toLocaleString('sv-SE')} kr/år</div>
                          </div>
                          <ChevronRight style={{ color: C.textLight, flexShrink: 0 }} />
                        </div>
                      </MotionLink>
                    ))}
                  </div>

                  <p style={{ textAlign: 'center', fontSize: 12, color: C.textLight, marginTop: 24, lineHeight: 1.6 }}>
                    Örespriset inkl. elskatt och moms (exkl. elnätsavgift). Månadskostnaden inkluderar även elnätsavgift. Data från Energimarknadsinspektionen.
                  </p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── TIPS SEKTION ── */}
      <section style={{ background: C.bgMuted, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 10 }}>Spara el – enkla tips</h2>
            <p style={{ fontSize: 16, color: C.textMuted, maxWidth: 500, margin: '0 auto' }}>Små förändringar kan spara tusentals kronor per år.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: 16, marginBottom: 28 }}>
            {[
              { emoji: '💡', title: 'Byt till LED', desc: 'Spara 80–90% på belysning. Snabb payback.' },
              { emoji: '🌙', title: 'Tvätta på natten', desc: 'Elpriset är lägst kl. 22–06 med timpris.' },
              { emoji: '🌡️', title: 'Sänk 1 grad', desc: '1 grad lägre inomhustemperatur = 5–10% besparing.' },
              { emoji: '🏆', title: 'Byt elavtal', desc: 'Det enklaste tipset – byt till billigaste avtal.' },
            ].map(tip => (
              <div key={tip.title} style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: '20px', boxShadow: C.shadow }}>
                <span style={{ fontSize: 26, display: 'block', marginBottom: 8 }}>{tip.emoji}</span>
                <div style={{ fontWeight: 800, fontSize: 15, color: C.text, marginBottom: 4 }}>{tip.title}</div>
                <div style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.5 }}>{tip.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/tips" style={{ fontSize: 14, fontWeight: 700, color: C.green, textDecoration: 'none', borderBottom: `2px solid ${C.greenBorder}`, paddingBottom: 2 }}>Se alla 12 spartips →</Link>
          </div>
        </div>
      </section>

      {/* ── GUIDER / BLOGG ── */}
      <section style={{ padding: '72px 24px', background: C.bg }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.5px' }}>Guider om el &amp; elavtal</h2>
            <Link href="/blog" style={{ fontSize: 14, fontWeight: 700, color: C.green, textDecoration: 'none' }}>Se alla guider →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {blogPosts.slice(0, 3).map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 16, padding: '22px', boxShadow: C.shadow, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, background: C.greenLight, color: C.greenText, borderRadius: 999, padding: '3px 10px', display: 'inline-block', marginBottom: 12 }}>{post.category}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: 8, flex: 1 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.55, marginBottom: 12 }}>{post.description.slice(0, 90)}…</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.green }}>Läs guide →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '72px 24px', background: C.bgMuted, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 10 }}>Vanliga frågor om elavtal</h2>
            <p style={{ fontSize: 16, color: C.textMuted }}>Svar på det du undrar över.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {([
              { q: 'Hur jämför jag elavtal?', a: 'Ange ditt postnummer och din årsförbrukning (finns på elfakturan) i formuläret ovan. Vi hämtar alla tillgängliga avtal från Energimarknadsinspektionens (ei.se) databas och sorterar dem billigast först – helt gratis.' },,
              { q: 'Vad är skillnaden mellan timpris och fast pris?', a: 'Timpris innebär att du betalar marknadens elpris varje timme – det varierar hela dygnet. Fast pris låser din elproduktionskostnad under avtalsperioden (1–3 år). Rörligt pris är historiskt billigare i snitt, men innebär mer osäkerhet.' },
              { q: 'Kostar det något att byta elavtal?', a: 'Nej, det är helt gratis att byta elavtal i Sverige (konsumentverket.se). Det är en lagstadgad rättighet. Din nya leverantör hanterar bytet åt dig – du behöver inte säga upp det gamla avtalet själv.' },
              { q: 'Hur lång är uppsägningstiden?', a: 'De flesta rörliga avtal har 1 månads uppsägningstid. Fasta avtal (1–3 år) kan ha längre bindningstid. Kolla ditt avtal under "Villkor" eller kontakta din nuvarande leverantör.' },
              { q: 'Vad ingår i det totala elpriset?', a: 'Det totala elpriset består av: (1) elproduktion – det pris du jämför, (2) elnätsavgift till ditt nätbolag (kan inte väljas bort), och (3) statlig elskatt (54,875 öre/kWh 2025). Allt beräknas inklusive 25% moms.' },
              { q: 'Hur ofta bör jag jämföra elavtal?', a: 'Minst en gång per år – och alltid när ditt avtal är på väg att löpa ut. Med Elblixten tar en jämförelse bara 30 sekunder.' },
              { q: 'Är grön el bättre för miljön?', a: 'Grön el innebär att din leverantör köper ursprungsgarantier för förnybar energi. Bra Miljöval-certifierade avtal ställer hårdare krav. I Sverige är elnätet redan relativt rent (~45% vattenkraft, ~30% kärnkraft).' },
            ] as { q: string; a: string }[]).map((item, i) => (
              <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden', boxShadow: C.shadow }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, fontWeight: 700, fontSize: 15, color: C.text }}
                >
                  {item.q}
                  <span style={{ flexShrink: 0, fontSize: 20, color: C.textMuted, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 20px 18px', fontSize: 15, color: C.textMuted, lineHeight: 1.65 }}>{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '40px 24px', textAlign: 'center', color: C.textLight, fontSize: 13, background: C.bg }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.png" alt="Elblixten" style={{ height: 40, opacity: 0.6 }} />
          </div>
          <nav style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: C.textMuted, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>Jämför elavtal</Link>
            <Link href="/tips" style={{ color: C.textMuted, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>Spartips</Link>
            <Link href="/blog" style={{ color: C.textMuted, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>Guider</Link>
          </nav>
          <p style={{ marginBottom: 4 }}>Prisuppgifter från <a href="https://www.ei.se" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Energimarknadsinspektionen</a>. Ingen ansvarighet för aktualitet.</p>
          <p style={{ marginBottom: 4 }}>Kontakt: <a href="mailto:hej@elblixten.se" style={{ color: C.textMuted, textDecoration: 'none' }}>hej@elblixten.se</a></p>
          <p>© 2026 Elblixten – Gratis jämförelsetjänst för elavtal i Sverige.</p>
        </div>
      </footer>
    </div>
  );
}
