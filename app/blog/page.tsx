import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Elguider & tips – Elblixten',
  description: 'Lär dig allt om elavtal, elpris och hur du sparar pengar på el. Guider, tips och förklaringar skrivna av experter.',
  alternates: { canonical: 'https://elblixten.se/blog' },
  openGraph: {
    title: 'Elguider & tips – Elblixten',
    description: 'Lär dig allt om elavtal, elpris och hur du sparar pengar på el.',
    url: 'https://elblixten.se/blog',
  },
};

const C = {
  bg: '#f9f7f2', bgCard: '#ffffff', bgMuted: '#f3f0e8', border: '#e2ddd4',
  text: '#1c1917', textMuted: '#78716c', textLight: '#a8a29e',
  green: '#15803d', greenLight: '#dcfce7', greenText: '#166534', greenBorder: '#86efac',
  shadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Avtalsguider':    { bg: '#dbeafe', text: '#1d4ed8' },
  'Spara el':        { bg: '#dcfce7', text: '#166534' },
  'Hållbarhet':      { bg: '#d1fae5', text: '#065f46' },
  'Förstå elpriset': { bg: '#fef3c7', text: '#92400e' },
  'Elbil & laddning':{ bg: '#ede9fe', text: '#5b21b6' },
  'Grunderna':       { bg: '#fee2e2', text: '#991b1b' },
};

export default function BlogPage() {
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
            <Link href="/tips" style={{ color: C.textMuted, textDecoration: 'none' }}>Tips</Link>
            <Link href="/blog" style={{ color: C.green, textDecoration: 'none' }}>Guider</Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px 80px' }}>
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: 12 }}>
            Elguider & förklaringar
          </h1>
          <p style={{ fontSize: 17, color: C.textMuted, maxWidth: 560, lineHeight: 1.65 }}>
            Allt du behöver veta om elavtal, elpris och hur du sparar pengar på el – förklarat på ett enkelt sätt.
          </p>
        </div>

        <style>{`.blog-card { transition: box-shadow 0.15s, transform 0.15s; } .blog-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.1) !important; transform: translateY(-2px); }`}</style>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {blogPosts.map(post => {
            const cat = categoryColors[post.category] ?? { bg: C.bgMuted, text: C.textMuted };
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                <article className="blog-card" style={{
                  background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 16,
                  padding: '24px', boxShadow: C.shadow, flex: 1, display: 'flex', flexDirection: 'column',
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, background: cat.bg, color: cat.text, borderRadius: 999, padding: '3px 10px' }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: 12, color: C.textLight }}>{post.readMinutes} min</span>
                  </div>
                  <h2 style={{ fontSize: 17, fontWeight: 800, color: C.text, lineHeight: 1.35, marginBottom: 10, flex: 1 }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6, marginBottom: 16 }}>
                    {post.description}
                  </p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.green }}>
                    Läs guide →
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </main>

      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '32px 24px', textAlign: 'center', color: C.textLight, fontSize: 13 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <img src="/logo.png" alt="Elblixten" style={{ height: 32, opacity: 0.5, marginBottom: 12 }} />
          <p>© 2025 Elblixten. Prisuppgifter från Energimarknadsinspektionen.</p>
        </div>
      </footer>
    </div>
  );
}
