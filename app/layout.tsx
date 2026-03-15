import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import SiteHeader from '@/components/layout/SiteHeader';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Estetia — Clínica de Medicina Estética',
  description:
    'Tratamientos estéticos avanzados con tecnología de última generación. Consulta personalizada con asistente IA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jakarta.variable} ${dmSans.variable}`}>
      <body className="font-body bg-background text-foreground antialiased pt-9">
        <div className="fixed inset-x-0 top-0 z-[300] flex h-9 items-center justify-center gap-3 bg-[#0D1418] px-4">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/40">Demo Concept</span>
          <span className="text-white/20">·</span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#D5B884]">100% AI-Generated</span>
          <span className="text-white/20">·</span>
          <a
            href="https://vasylpavlyuchok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-[#7FAFC2]"
          >
            Designed by Vasyl Pavlyuchok →
          </a>
        </div>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
