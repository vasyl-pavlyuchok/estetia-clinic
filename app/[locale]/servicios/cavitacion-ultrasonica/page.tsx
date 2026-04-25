'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function CavitacionPage() {
  const t = useTranslations('cavitacion');
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
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: t('benefit4Title'), desc: t('benefit4Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: t('benefit5Title'), desc: t('benefit5Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: t('benefit6Title'), desc: t('benefit6Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, title: t('benefit7Title'), desc: t('benefit7Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: t('benefit8Title'), desc: t('benefit8Desc') },
  ];

  const mechSteps = [
    { num: t('mech1Num'), title: t('mech1Title'), desc: t('mech1Desc'), tag: t('mech1Tag') },
    { num: t('mech2Num'), title: t('mech2Title'), desc: t('mech2Desc'), tag: t('mech2Tag') },
    { num: t('mech3Num'), title: t('mech3Title'), desc: t('mech3Desc'), tag: t('mech3Tag') },
  ];

  const zones = [
    t('zone1'), t('zone2'), t('zone3'), t('zone4'),
    t('zone5'), t('zone6'), t('zone7'), t('zone8'),
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc'), tag: null },
    { title: t('step2Title'), desc: t('step2Desc'), tag: null },
    { title: t('step3Title'), desc: t('step3Desc'), tag: null },
    { title: t('step4Title'), desc: t('step4Desc'), tag: null },
    { title: t('step5Title'), desc: t('step5Desc'), tag: t('step5Tag') },
    { title: t('step6Title'), desc: t('step6Desc'), tag: t('step6Tag') },
    { title: t('step7Title'), desc: t('step7Desc'), tag: null },
    { title: t('step8Title'), desc: t('step8Desc'), tag: null },
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'), t('indication4'),
    t('indication5'), t('indication6'), t('indication7'), t('indication8'),
  ];

  const contra = [
    t('contra1'), t('contra2'), t('contra3'), t('contra4'),
    t('contra5'), t('contra6'), t('contra7'),
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
          <img src="/images/services/cavitacion-ultrasonica.webp" alt="Cavitación Ultrasónica — Estetia" />
          <div className={styles['cav-badge']}>
            <div className={styles['cav-badge-label']}>Frecuencia de trabajo</div>
            <div className={styles['cav-stat']}>
              <span className={styles['cav-stat-num']}>40</span>
              <span className={styles['cav-stat-unit']}>kHz</span>
            </div>
            <div className={styles['cav-stat-sub']}>ultrasonidos de baja frecuencia</div>
            <div className={styles['cav-divider']}></div>
            <div className={styles['cav-reduction']}>–2 a –4 cm por ciclo</div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>
          <h1>{t('heroH1')}</h1>
          <p className={styles['hero-desc']}>{t('heroP')}</p>

          <div className={styles['combo-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <div className={styles['combo-notice-text']}>{t('comboNotice')}</div>
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
            <a href="#mecanismo" className={styles['btn-ghost']}>{t('mech1Title')}</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="mecanismo">
        <div className={styles['scroll-inner']}>

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

          <div className={`${styles['mechanism-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Mecanismo de acción</div>
            <div className={`${styles['mechanism-steps']} ${styles['reveal-stagger']}`}>
              {mechSteps.map((s, i) => (
                <div key={i} className={styles['mech-step']}>
                  <div className={styles['mech-num']}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className={styles['mech-tag']}>{s.tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles['zones-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('zonesTitle')}</div>
            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {zones.map((z, i) => (
                <div key={i} className={styles['zone-item']}>{checkIcon()}{z}</div>
              ))}
            </div>
          </div>

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

          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('timelineTitle')}</div>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>{t('timeline1Week')}</div>
                <div className={styles['milestone-num']}>03</div>
                <p>{t('timeline1Desc')}</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>{t('timeline2Week')}</div>
                <div className={styles['milestone-num']}>06</div>
                <p>{t('timeline2Desc')}</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>{t('timeline3Week')}</div>
                <div className={styles['milestone-num']}>∞</div>
                <p>{t('timeline3Desc')}</p>
              </div>
            </div>
          </div>

          <div className={`${styles['indications-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('indicationsTitle')}</div>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((ind, i) => (
                <div key={i} className={styles['indication-item']}>{checkIcon()}{ind}</div>
              ))}
            </div>
          </div>

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
