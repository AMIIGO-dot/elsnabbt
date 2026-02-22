import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '@/lib/blog-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} – Elblixten`,
    description: post.description,
    alternates: { canonical: `https://elblixten.se/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://elblixten.se/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

const C = {
  bg: '#f9f7f2', bgCard: '#ffffff', bgMuted: '#f3f0e8', border: '#e2ddd4',
  text: '#1c1917', textMuted: '#78716c', textLight: '#a8a29e',
  green: '#15803d', greenLight: '#dcfce7', greenText: '#166534',
  shadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05)',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Elblixten' },
    publisher: { '@type': 'Organization', name: 'Elblixten', url: 'https://elblixten.se' },
    url: `https://elblixten.se/blog/${slug}`,
  };

  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.text }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: 13, color: C.textMuted, marginBottom: 24, display: 'flex', gap: 6, alignItems: 'center' }}>
          <Link href="/" style={{ color: C.textMuted, textDecoration: 'none' }}>Hem</Link>
          <span>›</span>
          <Link href="/blog" style={{ color: C.textMuted, textDecoration: 'none' }}>Guider</Link>
          <span>›</span>
          <span style={{ color: C.text }}>{post.category}</span>
        </nav>

        {/* Article header */}
        <header style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 12, fontWeight: 700, background: C.greenLight, color: C.greenText, borderRadius: 999, padding: '4px 12px', display: 'inline-block', marginBottom: 16 }}>
            {post.category}
          </span>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, letterSpacing: '-0.8px', lineHeight: 1.2, marginBottom: 16 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 17, color: C.textMuted, lineHeight: 1.65, marginBottom: 20 }}>
            {post.description}
          </p>
          <div style={{ display: 'flex', gap: 16, fontSize: 13, color: C.textLight }}>
            <span>📅 {new Date(post.publishedAt).toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>⏱ {post.readMinutes} min läsning</span>
          </div>
        </header>

        {/* CTA box */}
        <div style={{ background: C.greenLight, border: `1px solid ${C.greenText}22`, borderRadius: 14, padding: '20px 24px', marginBottom: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: C.greenText, marginBottom: 4 }}>Jämför elavtal nu – gratis</div>
            <div style={{ fontSize: 14, color: C.greenText, opacity: 0.8 }}>Ange postnummer och förbrukning. Ser bästa avtalen på 30 sekunder.</div>
          </div>
          <Link href="/" style={{ background: C.green, color: '#fff', borderRadius: 10, padding: '12px 20px', fontWeight: 800, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Jämför avtal →
          </Link>
        </div>

        {/* Article content */}
        <article
          style={{ lineHeight: 1.8, fontSize: 16, color: C.text }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom CTA */}
        <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: '24px', marginTop: 48, textAlign: 'center', boxShadow: C.shadow }}>
          <div style={{ fontWeight: 900, fontSize: 20, marginBottom: 8 }}>Redo att spara pengar?</div>
          <p style={{ color: C.textMuted, marginBottom: 20 }}>Jämför hundratals elavtal på 30 sekunder. Inget konto behövs.</p>
          <Link href="/" style={{ background: C.green, color: '#fff', borderRadius: 12, padding: '14px 28px', fontWeight: 800, fontSize: 16, textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 14px rgba(21,128,61,0.3)' }}>
            Jämför elavtal gratis →
          </Link>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 20 }}>Fler guider</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 20px', gap: 16 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: C.textMuted, marginTop: 2 }}>{r.readMinutes} min</div>
                  </div>
                  <span style={{ color: C.green, fontWeight: 700, flexShrink: 0 }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
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
