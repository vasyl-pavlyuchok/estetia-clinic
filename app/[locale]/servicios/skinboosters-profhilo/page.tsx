'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function SkinboostersPage() {
  const t = useTranslations('skinboostersProfhilo');
  const tC = useTranslations('serviciosCommon');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: t('benefit4Title'), desc: t('benefit4Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: t('benefit5Title'), desc: t('benefit5Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: t('benefit6Title'), desc: t('benefit6Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: t('benefit7Title'), desc: t('benefit7Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: t('benefit8Title'), desc: t('benefit8Desc') },
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc'), tag: null },
    { title: t('step2Title'), desc: t('step2Desc'), tag: null },
    { title: t('step3Title'), desc: t('step3Desc'), tag: null },
    { title: t('step4Title'), desc: t('step4Desc'), tag: null },
    { title: t('step5Title'), desc: t('step5Desc'), tag: t('step5Tag') },
    { title: t('step6Title'), desc: t('step6Desc'), tag: null },
    { title: t('step7Title'), desc: t('step7Desc'), tag: null },
    { title: t('step8Title'), desc: t('step8Desc'), tag: t('step8Tag') },
  ];

  const zones = [
    t('zone1'), t('zone2'), t('zone3'),
    t('zone4'), t('zone5'), t('zone6'),
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'),
    t('indication4'), t('indication5'), t('indication6'),
    t('indication7'), t('indication8'), t('indication9'),
  ];

  const contra = [
    t('contra1'), t('contra2'), t('contra3'),
    t('contra4'), t('contra5'),
  ];

  const checkIcon = (size = 14) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size}><polyline points="20 6 9 17 4 12"/></svg>
  );

  const xIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  );

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <img src="/images/services/skinboosters-profhilo-seventy-hyal.webp" alt="Skinboosters — Estetia" />

          <div className={styles['skin-badge']}>
            <div className={styles['skin-badge-label']}>{t('bapTitle')}</div>
            <div className={styles['skin-stat']}>
              <span className={styles['skin-stat-num']}>10</span>
            </div>
            <div className={styles['skin-stat-sub']}>{t('bapSubtitle')}</div>
            <div className={styles['skin-divider']}></div>
            <div className={styles['skin-pack']}>{t('packTag')}</div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>

          <h1>{t('heroH1')}</h1>

          <p className={styles['hero-desc']}>{t('heroP')}</p>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>{t('benefit6Title')}</strong>
              {t('benefit6Desc')}
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
            <a href="#tecnica-bap" className={styles['btn-ghost']}>{t('bapTitle')}</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="tecnica-bap">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>{tC('benefitsTitle')}</div>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            {benefits.map((b, i) => (
              <div key={i} className={styles['benefit-card']}>
                <div className={styles['benefit-icon']}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* TÉCNICA BAP */}
          <div className={`${styles['bap-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('bapTitle')}</div>

            <div className={`${styles['bap-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['bap-explanation']}>
                <h3>{t('bapTitle')}</h3>
                <p>{t('bapSubtitle')}</p>
                <div className={styles['bap-points']}>
                  {[
                    { point: t('bap1Point'), zone: t('bap1Zone'), goal: t('bap1Goal') },
                    { point: t('bap2Point'), zone: t('bap2Zone'), goal: t('bap2Goal') },
                    { point: t('bap3Point'), zone: t('bap3Zone'), goal: t('bap3Goal') },
                    { point: t('bap4Point'), zone: t('bap4Zone'), goal: t('bap4Goal') },
                    { point: t('bap5Point'), zone: t('bap5Zone'), goal: t('bap5Goal') },
                  ].map((p, i) => (
                    <div key={i} className={styles['bap-point']}><span className={styles['bap-num']}>{i + 1}</span>{p.zone}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('zonesTitle')}</div>

            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {zones.map((z, i) => (
                <div key={i} className={styles['zone-item']}>{checkIcon()}{z}</div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles.reveal} id="protocolo">
            <div className={styles.eyebrow}>{tC('protocolTitle')}</div>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {steps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>0{i + 1}</div>
                <div className={styles['ps-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  {s.tag && <span className={styles['ps-tag']}>{s.tag}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('indicationsTitle')}</div>

            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((ind, i) => (
                <div key={i} className={styles['indication-item']}>{checkIcon()}{ind}</div>
              ))}
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles.reveal}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>{tC('contraindicationsTitle')}</h4>
            </div>
            <div className={styles['contra-list']}>
              {contra.map((c, i) => (
                <div key={i} className={styles['contra-item']}>{xIcon}{c}</div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>{tC('ctaH2Line1')}<br /><em>{tC('ctaH2Line2')}</em></h2>
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
