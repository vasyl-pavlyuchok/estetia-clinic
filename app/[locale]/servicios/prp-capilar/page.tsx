'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';

export default function PRPCapilarPage() {
  const t = useTranslations('prpCapilar');
  const tC = useTranslations('serviciosCommon');

  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: t('benefit1Title'), text: t('benefit1Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: t('benefit2Title'), text: t('benefit2Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: t('benefit3Title'), text: t('benefit3Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: t('benefit4Title'), text: t('benefit4Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: t('benefit5Title'), text: t('benefit5Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: t('benefit6Title'), text: t('benefit6Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: t('benefit7Title'), text: t('benefit7Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: t('benefit8Title'), text: t('benefit8Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: t('benefit9Title'), text: t('benefit9Desc') },
  ];

  const factors = [
    { abbr: 'PDGF', title: t('factor1Title'), text: t('factor1Desc') },
    { abbr: 'VEGF', title: t('factor2Title'), text: t('factor2Desc') },
    { abbr: 'EGF', title: t('factor3Title'), text: t('factor3Desc') },
    { abbr: 'TGF-β', title: t('factor4Title'), text: t('factor4Desc') },
  ];

  const procSteps = [
    { num: '01', title: t('procStep1Title'), text: t('procStep1Desc'), tag: null },
    { num: '02', title: t('procStep2Title'), text: t('procStep2Desc'), tag: null },
    { num: '03', title: t('procStep3Title'), text: t('procStep3Desc'), tag: null },
    { num: '04', title: t('procStep4Title'), text: t('procStep4Desc'), tag: t('procStep4Tag') },
  ];

  const protocolSteps = [
    { num: '01', title: t('step1Title'), text: t('step1Desc'), tag: null },
    { num: '02', title: t('step2Title'), text: t('step2Desc'), tag: null },
    { num: '03', title: t('step3Title'), text: t('step3Desc'), tag: null },
    { num: '04', title: t('step4Title'), text: t('step4Desc'), tag: null },
    { num: '05', title: t('step5Title'), text: t('step5Desc'), tag: null },
    { num: '06', title: t('step6Title'), text: t('step6Desc'), tag: null },
    { num: '07', title: t('step7Title'), text: t('step7Desc'), tag: null },
    { num: '08', title: t('step8Title'), text: t('step8Desc'), tag: null },
    { num: '09', title: t('step9Title'), text: t('step9Desc'), tag: null },
  ];

  const milestones = [
    { when: t('milestone1Month'), num: '01', title: t('benefit1Title'), text: t('milestone1Desc') },
    { when: t('milestone2Month'), num: '03', title: t('benefit2Title'), text: t('milestone2Desc') },
    { when: t('milestone3Month'), num: '06', title: t('benefit3Title'), text: t('milestone3Desc') },
    { when: t('milestone4Month'), num: '∞', title: t('benefit4Title'), text: t('milestone4Desc') },
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'), t('indication4'),
    t('indication5'), t('indication6'), t('indication7'), t('indication8'),
  ];

  const contras = [
    t('contra1'), t('contra2'), t('contra3'),
    t('contra4'), t('contra5'), t('contra6'),
  ];

  return (
    <>
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <Image src="/images/services/plasma-rico-en-plaquetas-capilar-prp.webp" alt="PRP Capilar — Estetia" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
          <div className={styles['prp-badge']}>
            <div className={styles['prp-badge-label']}>{t('heroEyebrow')}</div>
            <div className={styles['prp-stat']}>
              <span className={styles['prp-stat-num']}>+20</span>
              <span className={styles['prp-stat-unit']}>%</span>
            </div>
            <div className={styles['prp-stat-sub']}>{t('benefit1Title')}</div>
            <div className={styles['prp-divider']}></div>
            <div className={styles['prp-autologous']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              {t('benefit2Title')}
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>
          <h1>{t('heroH1')}</h1>
          <p className={styles['hero-desc']}>{t('heroP')}</p>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>{tC('warnRecovery')}</strong>
              {t('metaRecoveryVal')}
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaDuration')}</div>
              <div className={styles['m-value']}>{t('metaDurationVal')}</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaRecovery')}</div>
              <div className={`${styles['m-value']} ${styles.ok}`}>{t('metaRecoveryVal')}</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaSessions')}</div>
              <div className={styles['m-value']}>{t('metaSessionsVal')}</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaPrice')}</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>{t('metaPriceVal')}</div>
            </div>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>{tC('ctaPrimary')}</a>
            <a href="#factores" className={styles['btn-ghost']}>{t('factor1Title')}</a>
          </div>
        </div>
      </div>

      <div className={styles['scroll-section']} id="factores">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div ref={addReveal} className={styles.reveal}>
            <div className={styles.eyebrow}>{tC('benefitsTitle')}</div>
          </div>

          <div ref={addReveal} className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            {benefits.map((b, i) => (
              <div key={i} className={styles['benefit-card']}>
                <div className={styles['benefit-icon']}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>

          {/* FACTORES DE CRECIMIENTO */}
          <div ref={addReveal} className={`${styles['factors-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('factor1Title')}</div>

            <div ref={addReveal} className={`${styles['factors-grid']} ${styles['reveal-stagger']}`}>
              {factors.map((f, i) => (
                <div key={i} className={styles['factor-card']}>
                  <div className={styles['factor-abbr']}>{f.abbr}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROCESO */}
          <div ref={addReveal} className={`${styles['process-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('procStep1Title')}</div>

            <div ref={addReveal} className={`${styles['process-steps']} ${styles['reveal-stagger']}`}>
              {procSteps.map((s, i) => (
                <div key={i} className={styles['proc-step']}>
                  <div className={styles['proc-num']}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.tag && <span className={styles['proc-tag']}>{s.tag}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div ref={addReveal} className={styles.reveal} id="protocolo">
            <div className={styles.eyebrow}>{tC('protocolTitle')}</div>
          </div>

          <div ref={addReveal} className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {protocolSteps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>{s.num}</div>
                <div className={styles['ps-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                  {s.tag && <span className={styles['ps-tag']}>{s.tag}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div ref={addReveal} className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('timelineTitle')}</div>

            <div ref={addReveal} className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              {milestones.map((m, i) => (
                <div key={i} className={styles['result-milestone']}>
                  <div className={styles['milestone-when']}>{m.when}</div>
                  <div className={styles['milestone-num']}>{m.num}</div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* INDICACIONES */}
          <div ref={addReveal} className={`${styles['indications-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('indicationsTitle')}</div>

            <div ref={addReveal} className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((ind, i) => (
                <div key={i} className={styles['indication-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {ind}
                </div>
              ))}
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div ref={addReveal} className={`${styles['contra-block']} ${styles.reveal}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>{tC('contraindicationsTitle')}</h4>
            </div>
            <div className={styles['contra-list']}>
              {contras.map((c, i) => (
                <div key={i} className={styles['contra-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {c}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>{t('ctaH2Line1')}<br /><em>{t('ctaH2Line2')}</em></h2>
          <p>{tC('ctaP')}</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>{tC('ctaPrimary')}</a>
          <Link href="/servicios" className={styles['btn-outline-white']}>{tC('ctaSecondary')}</Link>
        </div>
      </div>
    </>
  );
}
