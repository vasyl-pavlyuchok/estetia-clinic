'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type FooterSectionProps = {
  categories: { id: string; label: string }[];
};

export default function FooterSection({ categories }: FooterSectionProps) {
  const t = useTranslations('footer');
  const tS = useTranslations('services');

  const FOOTER_LINKS = [
    { href: '/#servicios', label: t('link1') },
    { href: '/ia', label: t('link2') },
    { href: '/#dream-team', label: t('link3') },
    { href: '/#faq', label: t('link4') },
    { href: '/#contacto', label: t('link5') },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0D1418] text-white" aria-label="Footer">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(127,175,194,0.14),transparent_42%),radial-gradient(circle_at_82%_84%,rgba(201,169,110,0.10),transparent_44%)]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 pt-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7FAFC2]">
              {t('clinic')}
            </p>
            <h2 className="font-heading mt-4 max-w-[14ch] text-4xl leading-tight text-white md:text-5xl">
              {t('h2')}
            </h2>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-white/72">
              {t('sub')}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label={t('navLabel')}>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D5B884]">
                {t('navLabel')}
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/76 transition-colors duration-300 hover:text-[#D8ECF5]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D5B884]">
                {t('catLabel')}
              </p>
              <ul className="mt-4 space-y-2.5">
                {categories.slice(0, 6).map(({ id }) => (
                  <li key={id}>
                    <Link
                      href={`/servicios?categoria=${encodeURIComponent(id)}`}
                      className="text-sm text-white/76 transition-colors duration-300 hover:text-[#D8ECF5]"
                    >
                      {(() => { try { return tS(`category.${id}` as Parameters<typeof tS>[0]); } catch { return id; } })()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10" />
        <div className="flex flex-col gap-3 px-1 pt-6 text-xs text-white/56 md:flex-row md:items-center md:justify-between">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition-colors duration-300 hover:text-white/78">
              {t('privacy')}
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white/78">
              {t('terms')}
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white/78">
              {t('consent')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
