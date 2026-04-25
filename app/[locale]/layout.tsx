import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import SiteHeader from '@/components/layout/SiteHeader';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en' | 'it' | 'fr')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[300] flex h-9 items-center justify-center gap-3 bg-[#0D1418] px-4 pt-0">
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
      <NextIntlClientProvider messages={messages}>
        <div className="pt-9">
          <SiteHeader />
          {children}
        </div>
      </NextIntlClientProvider>
    </>
  );
}
