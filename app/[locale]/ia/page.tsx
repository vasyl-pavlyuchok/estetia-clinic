import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ia' });
  return { title: t('metaTitle'), description: t('metaDesc') };
}

const blueGlow = 'rgba(44,95,111,0.18)';
const blueBorder = 'rgba(127,175,194,0.2)';
const goldBorder = 'rgba(201,169,110,0.2)';
const whiteMid = 'rgba(255,255,255,0.75)';
const whiteDim = 'rgba(255,255,255,0.5)';
const blueDim = 'rgba(44,95,111,0.14)';

const capIcons = [
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M3 18l9 3 9-3"/><line x1="3" y1="12" x2="21" y2="12"/></svg>,
  <svg key="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  <svg key="5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
  <svg key="6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
];

export default async function IAPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ia' });

  const capabilities = [
    { num: '01', icon: capIcons[0], title: t('cap1Title'), description: t('cap1Desc'), tag: t('cap1Tag') },
    { num: '02', icon: capIcons[1], title: t('cap2Title'), description: t('cap2Desc'), tag: null },
    { num: '03', icon: capIcons[2], title: t('cap3Title'), description: t('cap3Desc'), tag: null },
    { num: '04', icon: capIcons[3], title: t('cap4Title'), description: t('cap4Desc'), tag: t('cap4Tag') },
    { num: '05', icon: capIcons[4], title: t('cap5Title'), description: t('cap5Desc'), tag: null },
    { num: '06', icon: capIcons[5], title: t('cap6Title'), description: t('cap6Desc'), tag: t('cap6Tag') },
  ];

  const pillars = [
    { num: '01', title: t('pillar1Title'), copy: t('pillar1Copy') },
    { num: '02', title: t('pillar2Title'), copy: t('pillar2Copy') },
    { num: '03', title: t('pillar3Title'), copy: t('pillar3Copy') },
  ];

  const complianceItems = [
    { name: t('compliance1Name'), sub: t('compliance1Sub'), content: t('compliance1Content'), badge: t('compliance1Badge') },
    { name: t('compliance2Name'), sub: t('compliance2Sub'), content: t('compliance2Content'), badge: t('compliance2Badge') },
    { name: t('compliance3Name'), sub: t('compliance3Sub'), content: t('compliance3Content'), badge: t('compliance3Badge') },
    { name: t('compliance4Name'), sub: t('compliance4Sub'), content: t('compliance4Content'), badge: t('compliance4Badge') },
    { name: t('compliance5Name'), sub: t('compliance5Sub'), content: t('compliance5Content'), badge: t('compliance5Badge') },
  ];

  return (
    <main className="bg-[#0D1418] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-[1400px] px-15 py-28" style={{ padding: '110px 60px 90px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div className="pointer-events-none absolute -right-24 -top-20 h-[600px] w-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${blueGlow} 0%, transparent 65%)` }} aria-hidden="true" />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-6 bg-[#7FAFC2]/70" />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#7FAFC2]">{t('heroEyebrow')}</span>
          </div>
          <h1 className="font-heading text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[1.07]" style={{ marginBottom: '28px' }}>
            {t('heroH1Line1')}{' '}
            <em className="font-normal not-italic text-[#7FAFC2]">{t('heroH1Emphasis')}</em>
          </h1>
          <p className="text-[1rem] leading-[1.75]" style={{ color: whiteMid, maxWidth: '500px' }}>
            {t('heroP')}
          </p>
        </div>

        <div className="relative rounded-none" style={{ background: 'linear-gradient(135deg, rgba(17,26,31,0.72) 0%, rgba(44,95,111,0.18) 100%)', backdropFilter: 'blur(34px) saturate(1.4) brightness(0.98)', border: `1px solid ${blueBorder}`, boxShadow: 'inset 0 1px 0 rgba(127,175,194,0.12), 0 8px 32px rgba(13,20,24,0.4)', padding: '28px' }}>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#7FAFC2]" style={{ animation: 'blink 2s ease-in-out infinite' }} aria-hidden="true" />
            <span className="text-[0.56rem] font-bold uppercase tracking-[0.3em] text-[#7FAFC2]">{t('agentActiveBadge')}</span>
          </div>
          <p className="text-[0.82rem] leading-[1.6]" style={{ color: whiteMid }}>
            {t('agentActiveP')}
          </p>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: `1px solid ${blueBorder}` }} />

      {/* ── POSICIÓN ── */}
      <section style={{ padding: '96px 60px', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-px w-[22px] bg-[#7FAFC2]/65" />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#7FAFC2]">{t('positionEyebrow')}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', marginTop: '12px' }}>
          <h2 className="font-heading text-[2.8rem] font-semibold leading-[1.1]" style={{ gridColumn: '1 / -1' }}>
            {t('positionH2Line1')}{' '}
            <em className="font-normal not-italic text-[#7FAFC2]">{t('positionH2Emphasis')}</em>{' '}
            {t('positionH2Suffix')}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              {t('positionP1')}
            </p>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              {t('positionP2')}
            </p>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              {t('positionP3')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              {t('positionP4')}
            </p>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              {t('positionP5')}
            </p>
            <blockquote style={{ marginTop: '10px', padding: '24px 28px', background: 'linear-gradient(135deg, rgba(201,169,110,0.10) 0%, rgba(201,169,110,0.04) 100%)', borderLeft: '3px solid #C9A96E', boxShadow: 'inset 0 1px 0 rgba(213,184,132,0.15)' }}>
              <p className="font-heading text-[1.25rem] italic leading-[1.55]" style={{ color: '#D5B884' }}>
                {t('positionQuote').split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: `1px solid ${blueBorder}` }} />

      {/* ── CAPACIDADES ── */}
      <section style={{ background: '#111A1F', borderTop: `1px solid ${goldBorder}`, borderBottom: `1px solid ${blueBorder}`, padding: '96px 60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '56px', alignItems: 'end' }}>
            <h2 className="font-heading text-[2.75rem] font-semibold leading-[1.1]">
              {t('capH2Line1')}{' '}
              <em className="font-normal not-italic text-[#7FAFC2]">{t('capH2Emphasis')}</em>
            </h2>
            <p className="text-[0.94rem] leading-[1.72]" style={{ color: whiteMid }}>
              {t('capP')}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: blueBorder, border: `1px solid ${blueBorder}` }}>
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="group relative overflow-hidden transition-all duration-300"
                style={{ background: 'linear-gradient(160deg, rgba(17,26,31,0.82) 0%, rgba(13,20,24,0.64) 100%)', backdropFilter: 'blur(34px) saturate(1.4) brightness(0.98)', padding: '36px 30px', boxShadow: 'inset 0 1px 0 rgba(127,175,194,0.08)' }}
              >
                <p className="mb-3.5 text-[0.68rem] font-bold uppercase tracking-[0.4em] text-[#7FAFC2]/50">{cap.num}</p>
                <span className="mb-3.5 flex items-center text-[#7FAFC2]" aria-hidden="true">{cap.icon}</span>
                <h3 className="font-ui mb-2.5 text-[0.94rem] font-semibold text-white">{cap.title}</h3>
                <p className="text-[0.82rem] leading-[1.65]" style={{ color: whiteDim }}>{cap.description}</p>
                {cap.tag && (
                  <span className="mt-3.5 inline-block px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#7FAFC2]" style={{ background: blueDim, border: `1px solid ${blueBorder}` }}>
                    {cap.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILARES ── */}
      <section style={{ padding: '96px 60px', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-px w-[22px] bg-[#7FAFC2]/65" />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#7FAFC2]">{t('pillarEyebrow')}</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginTop: '56px' }}>
          {pillars.map((p) => (
            <div key={p.num} style={{ borderTop: `1px solid ${blueBorder}`, paddingTop: '28px' }}>
              <p className="font-heading mb-4 text-[3.25rem] font-bold leading-none text-[#7FAFC2]/20">{p.num}</p>
              <h3 className="font-heading mb-3.5 text-[1.38rem] font-semibold leading-[1.25] text-white">{p.title}</h3>
              <p className="text-[0.88rem] leading-[1.7]" style={{ color: whiteDim }}>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: `1px solid ${blueBorder}` }} />

      {/* ── COMPLIANCE ── */}
      <section style={{ background: '#111A1F', borderTop: `1px solid ${blueBorder}`, padding: '96px 60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '52px', alignItems: 'end' }}>
            <h2 className="font-heading text-[2.75rem] font-semibold leading-[1.1]">
              {t('complianceH2Line1')}{' '}
              <em className="font-normal not-italic text-[#7FAFC2]">{t('complianceH2Emphasis')}</em>
            </h2>
            <p className="text-[0.94rem] leading-[1.72]" style={{ color: whiteMid }}>
              {t('complianceP')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: blueBorder, border: `1px solid ${blueBorder}` }}>
            {complianceItems.map((item) => (
              <div
                key={item.name}
                className="transition-all duration-300 hover:bg-[rgba(44,95,111,0.18)]"
                style={{ display: 'grid', gridTemplateColumns: '260px 1fr', background: 'linear-gradient(135deg, rgba(17,26,31,0.75) 0%, rgba(13,20,24,0.55) 100%)', backdropFilter: 'blur(24px) saturate(1.3)' }}
              >
                <div style={{ padding: '24px 28px', borderRight: `1px solid ${blueBorder}`, display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center' }}>
                  <span className="text-[0.88rem] font-bold uppercase tracking-[0.1em] text-[#7FAFC2]">{item.name}</span>
                  <span className="text-[0.75rem]" style={{ color: whiteDim }}>{item.sub}</span>
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <p className="text-[0.88rem] leading-[1.7]" style={{ color: whiteMid }}>{item.content}</p>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-[#7FAFC2]" style={{ background: blueDim, border: `1px solid ${blueBorder}` }}>
                    ✓ {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="relative overflow-hidden text-center" style={{ borderTop: `1px solid ${blueBorder}`, padding: '120px 60px' }}>
        <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(44,95,111,0.12) 0%, transparent 70%)' }} aria-hidden="true" />
        <p className="mb-5 text-[0.56rem] font-bold uppercase tracking-[0.5em]" style={{ color: '#C9A96E', opacity: 0.7 }}>{t('ctaEyebrow')}</p>
        <h2 className="font-heading mb-11 text-[clamp(2.4rem,4.5vw,3.25rem)] font-semibold leading-[1.1]">
          {t('ctaH2Line1')}<br />
          {t('ctaH2Line2')} <em className="font-normal not-italic" style={{ color: '#D5B884' }}>{t('ctaH2Emphasis')}</em>.
        </h2>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full border border-white/20 bg-[linear-gradient(145deg,rgba(8,13,16,0.58)_0%,rgba(11,18,23,0.46)_58%,rgba(20,34,43,0.32)_100%)] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-[linear-gradient(145deg,rgba(8,13,16,0.72)_0%,rgba(11,18,23,0.60)_58%,rgba(20,34,43,0.46)_100%)]"
          >
            {t('ctaPrimary')}
          </a>
          <Link
            href="/servicios"
            className="rounded-full border border-white/[0.22] bg-[linear-gradient(150deg,rgba(255,255,255,0.18)_0%,rgba(250,253,255,0.12)_56%,rgba(246,249,252,0.08)_100%)] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-[34px] backdrop-saturate-[1.4] backdrop-brightness-[0.98] transition-all duration-300 hover:bg-[linear-gradient(150deg,rgba(255,255,255,0.26)_0%,rgba(250,253,255,0.18)_56%,rgba(246,249,252,0.13)_100%)]"
          >
            {t('ctaSecondary')}
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </main>
  );
}
