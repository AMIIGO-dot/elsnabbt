import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ElSnabbt – Billigaste elavtalet på 10 sekunder',
  description: 'Ange postnummer och förbrukning. Få snygga deals direkt. Inga inlogg.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        {children}
      </body>
    </html>
  );
}