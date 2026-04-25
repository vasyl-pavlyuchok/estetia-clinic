'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const surfaceBorder = 'rgba(0,0,0,0.06)';
const blueBorder = 'rgba(44,95,111,0.15)';
const blueDim = 'rgba(44,95,111,0.07)';

const commitmentIcons = [
  <svg key="c1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  <svg key="c2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  <svg key="c3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M3 18l9 3 9-3"/><line x1="3" y1="12" x2="21" y2="12"/></svg>,
  <svg key="c4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M7 9H5"/><path d="M7 12H5"/><path d="M7 15H5"/><path d="M17 9h2"/><path d="M17 12h2"/><path d="M17 15h2"/><path d="M9 7V5"/><path d="M12 7V5"/><path d="M15 7V5"/><path d="M9 19v-2"/><path d="M12 19v-2"/><path d="M15 19v-2"/></svg>,
  <svg key="c5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  <svg key="c6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
];

export default function MetodologiaPage() {
  const t = useTranslations('metodo');

  const steps = [
    { num: '01', tag: t('step1Tag'), title: t('step1Title'), primary: t('step1Primary'), secondary: t('step1Secondary'), full: true },
    { num: '02', tag: t('step2Tag'), title: t('step2Title'), primary: t('step2Primary'), secondary: t('step2Secondary'), full: false },
    { num: '03', tag: t('step3Tag'), title: t('step3Title'), primary: t('step3Primary'), secondary: t('step3Secondary'), full: false },
    { num: '04', tag: t('step4Tag'), title: t('step4Title'), primary: t('step4Primary'), secondary: t('step4Secondary'), full: false },
    { num: '05', tag: t('step5Tag'), title: t('step5Title'), primary: t('step5Primary'), secondary: t('step5Secondary'), full: false },
  ];

  const commitments = [
    { title: t('c1Title'), claim: t('c1Claim'), body: t('c1Body'), icon: commitmentIcons[0] },
    { title: t('c2Title'), claim: t('c2Claim'), body: t('c2Body'), icon: commitmentIcons[1] },
    { title: t('c3Title'), claim: t('c3Claim'), body: t('c3Body'), icon: commitmentIcons[2] },
    { title: t('c4Title'), claim: t('c4Claim'), body: t('c4Body'), icon: commitmentIcons[3] },
    { title: t('c5Title'), claim: t('c5Claim'), body: t('c5Body'), icon: commitmentIcons[4] },
    { title: t('c6Title'), claim: t('c6Claim'), body: t('c6Body'), icon: commitmentIcons[5] },
  ];

  return (
    <main className="bg-white text-[#000000]">

      {/* ── HERO ── */}
      <section className="overflow-hidden" style={{ background: '#F6F7F8', borderBottom: `1px solid ${surfaceBorder}`, padding: '96px 60px 80px' }}>
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3.5 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-[#2C5F6F]">
            <span className="h-px w-7 bg-[#2C5F6F]/45" />
            {t('heroEyebrow')}
            <span className="h-px w-7 bg-[#2C5F6F]/45" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(2.8rem,6vw,4rem)] font-semibold leading-[1.08]">
            {t('heroH1Line1')}{' '}
            <em className="font-normal not-italic text-[#2C5F6F]">{t('heroH1Emphasis')}</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-[540px] text-[1.06rem] leading-[1.78] text-[#3a4147]">
            {t('heroP')}
          </motion.p>
        </motion.div>
      </section>

      {/* ── JOURNEY ── */}
      <section style={{ background: '#0D1418' }}>
        <div className="mx-auto max-w-[1400px] px-[60px] py-[100px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <div className="mb-4 inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-[#7FAFC2]">
            <span className="h-px w-[22px] bg-[#7FAFC2]/50" />
            {t('journeyEyebrow')}
          </div>
          <h2 className="font-heading mt-1 text-[2.75rem] font-semibold leading-[1.1] text-white">
            {t('journeyH2Line1')}<br />
            <em className="font-normal not-italic text-[#7FAFC2]">{t('journeyH2Emphasis')}</em>
          </h2>
          <p className="mt-4 max-w-[560px] text-[0.94rem] leading-[1.7] text-white/50" style={{ marginBottom: '64px' }}>
            {t('journeyP')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2"
          style={{ gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className={`group relative overflow-hidden bg-[#111A1F] px-11 py-12 transition-colors duration-300 hover:bg-[#141E24]${step.full ? ' col-span-2' : ''}`}
            >
              <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#7FAFC2] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <span className="pointer-events-none absolute right-8 top-6 font-heading text-[72px] font-bold leading-none text-[#7FAFC2] opacity-[0.10] transition-opacity duration-300 group-hover:opacity-[0.18]">
                {step.num}
              </span>
              <div className="mb-5 inline-flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.35em] text-[#7FAFC2]">
                <span className="h-px w-4 bg-[#7FAFC2]/50" />
                {step.tag}
              </div>
              <h3 className="font-heading mb-4 text-[1.62rem] font-semibold leading-[1.2] text-white">{step.title}</h3>
              <p className="mb-2.5 text-[0.94rem] font-medium leading-[1.6] text-white/80">{step.primary}</p>
              <p className="text-[0.82rem] leading-[1.65] text-white/45">{step.secondary}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* ── COMPROMISOS ── */}
      <section style={{ background: '#F6F7F8', borderTop: `1px solid ${surfaceBorder}`, borderBottom: `1px solid ${surfaceBorder}`, padding: '100px 60px' }}>
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            className="mb-16 grid gap-[60px] lg:grid-cols-2"
            style={{ alignItems: 'end' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <div>
              <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-[#2C5F6F]">
                <span className="h-px w-[22px] bg-[#2C5F6F]/50" />
                {t('commitmentsEyebrow')}
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-heading text-[2.75rem] font-semibold leading-[1.1]">
                {t('commitmentsH2Line1')}{' '}
                <em className="font-normal not-italic text-[#2C5F6F]">{t('commitmentsH2Emphasis')}</em>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-[0.94rem] leading-[1.72] text-[#3a4147]">
              {t('commitmentsP')}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3"
            style={{ gap: '1px', background: surfaceBorder, border: `1px solid ${surfaceBorder}` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {commitments.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="group relative overflow-hidden bg-white px-8 py-9 transition-[background,box-shadow] duration-300 hover:bg-white hover:shadow-[0_4px_32px_rgba(44,95,111,0.08)]"
                style={{ zIndex: 0 }}
              >
                <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#2C5F6F] to-[#7FAFC2] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full text-[#2C5F6F] transition-[background,border-color,color] duration-300 group-hover:bg-[#7FAFC2] group-hover:text-[#0D1418]"
                  style={{ border: `1px solid ${blueBorder}`, background: blueDim }}
                >
                  {c.icon}
                </div>
                <h3 className="font-heading mb-2 text-[1.25rem] font-semibold leading-[1.25]">{c.title}</h3>
                <p className="mb-3 text-[0.75rem] font-semibold leading-[1.4] text-[#2C5F6F]">{c.claim}</p>
                <p className="text-[0.82rem] leading-[1.65] text-[#3a4147]">{c.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#0D1418', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <motion.div
        className="mx-auto grid max-w-[1400px] items-center gap-[60px] px-[60px] py-[100px] lg:grid-cols-[1fr_auto]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <h2 className="font-heading mb-3 text-[2.5rem] font-semibold leading-[1.15] text-white">
            {t('ctaH2Line1')}<br />
            <em className="font-normal not-italic text-[#7FAFC2]">{t('ctaH2Emphasis')}</em>
          </h2>
          <p className="max-w-[480px] text-[0.88rem] leading-[1.65] text-white/50">
            {t('ctaP')}
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col items-end gap-3">
          <Link
            href="/#contacto"
            className="rounded-full bg-[#2C5F6F] px-9 py-4 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#7FAFC2]"
          >
            {t('ctaPrimary')}
          </Link>
          <Link
            href="/servicios"
            className="rounded-full border border-white/15 px-9 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/40 transition-all duration-300 hover:border-[#7FAFC2]/50 hover:text-[#7FAFC2]"
          >
            {t('ctaSecondary')}
          </Link>
        </motion.div>
      </motion.div>
      </section>

    </main>
  );
}
