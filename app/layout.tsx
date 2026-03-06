import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import SiteHeader from '@/components/layout/SiteHeader';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
