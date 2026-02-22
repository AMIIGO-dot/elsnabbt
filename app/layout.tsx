import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = 'https://elblixten.se';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Elblixten – Jämför elavtal och hitta billigaste priset',
    template: '%s – Elblixten',
  },
  description: 'Jämför hundratals elavtal på 30 sekunder. Ange postnummer och förbrukning – se billigaste elavtalet direkt. Gratis, utan konto.',
  keywords: ['jämför elavtal', 'billigaste elavtal', 'elpris', 'byta elavtal', 'elavtal jämförelse', 'timpris', 'fast elpris', 'elpriskollen alternativ'],
  authors: [{ name: 'Elblixten', url: siteUrl }],
  creator: 'Elblixten',
  publisher: 'Elblixten',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: siteUrl,
    siteName: 'Elblixten',
    title: 'Elblixten – Jämför elavtal och hitta billigaste priset',
    description: 'Jämför hundratals elavtal på 30 sekunder. Gratis, utan konto.',
    images: [{ url: '/logo.png', width: 500, height: 200, alt: 'Elblixten logotyp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elblixten – Jämför elavtal',
    description: 'Jämför hundratals elavtal på 30 sekunder. Gratis, utan konto.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: { icon: '/icon.png', apple: '/icon.png' },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Elblixten',
      description: 'Jämförelsesajt för elavtal i Sverige',
      inLanguage: 'sv-SE',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/?postnr={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Elblixten',
      url: siteUrl,
      logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.png` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="sv" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZHSV73KXF2" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZHSV73KXF2');
        `}</Script>
      </body>
    </html>
  );
}