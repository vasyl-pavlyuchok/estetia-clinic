'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';

export default function FAQSection() {
  const t = useTranslations('faq');
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  const categories = [
    {
      title: t('cat1Title'),
      entries: [
        { question: t('cat1q1'), answer: t('cat1a1') },
        { question: t('cat1q2'), answer: t('cat1a2') },
        { question: t('cat1q3'), answer: t('cat1a3') },
      ],
    },
    {
      title: t('cat2Title'),
      entries: [
        { question: t('cat2q1'), answer: t('cat2a1') },
        { question: t('cat2q2'), answer: t('cat2a2') },
        { question: t('cat2q3'), answer: t('cat2a3') },
      ],
    },
    {
      title: t('cat3Title'),
      entries: [
        { question: t('cat3q1'), answer: t('cat3a1') },
        { question: t('cat3q2'), answer: t('cat3a2') },
        { question: t('cat3q3'), answer: t('cat3a3') },
      ],
    },
    {
      title: t('cat4Title'),
      entries: [
        { question: t('cat4q1'), answer: t('cat4a1') },
        { question: t('cat4q2'), answer: t('cat4a2') },
        { question: t('cat4q3'), answer: t('cat4a3') },
      ],
    },
  ];

  return (
    <section id="faq" className="bg-white py-20 md:py-24" aria-label={t('h2')}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-7 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">{t('eyebrow')}</p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
              {t('h2')}
            </h2>
          </div>
          <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-black/72 md:justify-self-end">
            {t('sub')}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-5 md:p-6"
            >
              <h3 className="font-heading text-[1.55rem] leading-tight text-black">
                {category.title}
              </h3>
              <div className="mt-4 space-y-2">
                {category.entries.map((entry, i) => {
                  const key = `${category.title}-${i}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold leading-snug text-black">
                          {entry.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 text-lg font-light text-black/40"
                          aria-hidden
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <p className="px-4 pb-4 text-sm leading-relaxed text-black/68">
                              {entry.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
