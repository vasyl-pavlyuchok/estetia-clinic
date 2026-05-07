'use client';

import { useTranslations } from 'next-intl';

export default function TechnologySection() {
  const t = useTranslations('technology');

  const STANDARDS = [
    { label: t('std1Label'), title: t('std1Title'), body: t('std1Body') },
    { label: t('std2Label'), title: t('std2Title'), body: t('std2Body') },
    { label: t('std3Label'), title: t('std3Title'), body: t('std3Body') },
    { label: t('std4Label'), title: t('std4Title'), body: t('std4Body') },
    { label: t('std5Label'), title: t('std5Title'), body: t('std5Body') },
    { label: t('std6Label'), title: t('std6Title'), body: t('std6Body') },
  ];

  return (
    <section
      id="estandares"
      className="relative overflow-hidden bg-[#0D1418] py-20 md:py-24 text-white"
      aria-label={t('h2')}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(127,175,194,0.2),transparent_46%),radial-gradient(circle_at_80%_82%,rgba(201,169,110,0.14),transparent_44%),linear-gradient(180deg,rgba(9,14,18,0.97)_0%,rgba(13,20,24,0.99)_100%)]" />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="rounded-[2rem] border border-white/14 bg-[linear-gradient(148deg,rgba(20,32,39,0.9)_0%,rgba(15,24,30,0.94)_46%,rgba(12,19,24,0.97)_100%)] p-7 shadow-[0_24px_58px_-40px_rgba(0,0,0,0.8)] md:p-10">
          <div className="grid gap-7 md:grid-cols-[1.08fr_0.92fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7FAFC2]">
                {t('eyebrow')}
              </p>
              <h2 className="font-heading mt-4 max-w-[18ch] text-4xl leading-tight text-white md:text-5xl">
                {t('h2')}
              </h2>
            </div>
            <p className="max-w-[50ch] text-[0.98rem] leading-relaxed text-white/74 md:justify-self-end">
              {t('sub')}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-px bg-white/8 md:grid-cols-2 xl:grid-cols-3" role="list">
          {STANDARDS.map((item) => (
            <article
              key={item.title}
              className="bg-[#0D1418] p-7 transition-colors duration-300 hover:bg-[#111A1F] text-white"
              role="listitem"
            >
              <span className="inline-flex rounded-full border border-[#C9A96E]/36 bg-[#C9A96E]/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#D5B884]">
                {item.label}
              </span>
              <h3 className="font-heading mt-4 text-[1.22rem] leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
