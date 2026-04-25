'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function HilosTensoresPDOPage() {
  const t = useTranslations('hilosTensores');
  const tC = useTranslations('serviciosCommon');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: t('benefit4Title'), desc: t('benefit4Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: t('benefit5Title'), desc: t('benefit5Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: t('benefit6Title'), desc: t('benefit6Desc') },
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc') },
    { title: t('step2Title'), desc: t('step2Desc') },
    { title: t('step3Title'), desc: t('step3Desc') },
    { title: t('step4Title'), desc: t('step4Desc') },
    { title: t('step5Title'), desc: t('step5Desc') },
    { title: t('step6Title'), desc: t('step6Desc') },
    { title: t('step7Title'), desc: t('step7Desc') },
    { title: t('step8Title'), desc: t('step8Desc') },
  ];

  const milestones = [
    { when: t('milestone1Week'), num: '60%', desc: t('milestone1Desc') },
    { when: t('milestone2Week'), num: '01', desc: t('milestone2Desc') },
    { when: t('milestone3Week'), num: '06', desc: t('milestone3Desc') },
    { when: t('milestone4Week'), num: '18', desc: t('milestone4Desc') },
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'), t('indication4'),
    t('indication5'), t('indication6'), t('indication7'), t('indication8'),
  ];

  const contra = [
    t('contra1'), t('contra2'), t('contra3'), t('contra4'), t('contra5'),
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
          <img src="/images/services/hilos-tensores-pdo.webp" alt="Hilos Tensores PDO — Estetia" />
          <div className={styles['thread-badge']}>
            <div className={styles['thread-badge-label']}>{t('threadTypesTitle')}</div>
            <div className={styles['thread-types']}>
              <div className={`${styles['thread-type']} ${styles['main']}`}>
                <div className={styles['thread-dot']}></div>
                <div className={styles['thread-type-text']}>
                  <div className={styles['thread-type-name']}>{t('thread2Title')}</div>
                  <div className={styles['thread-type-desc']}>{t('thread2Desc')}</div>
                </div>
              </div>
              <div className={styles['thread-type']}>
                <div className={styles['thread-dot']}></div>
                <div className={styles['thread-type-text']}>
                  <div className={styles['thread-type-name']}>{t('thread1Title')}</div>
                  <div className={styles['thread-type-desc']}>{t('thread1Desc')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>
          <h1>{t('heroH1')}</h1>
          <p className={styles['hero-desc']}>{t('heroP')}</p>

          <div className={styles['dual-effect']}>
            <div className={styles['effect-cell']}>
              <div className={styles['effect-cell-value']}>{t('dual1Label')}</div>
              <div className={styles['effect-cell-sub']}>{t('dual1Desc')}</div>
            </div>
            <div className={`${styles['effect-cell']} ${styles['gold-cell']}`}>
              <div className={styles['effect-cell-value']}>{t('dual2Label')}</div>
              <div className={styles['effect-cell-sub']}>{t('dual2Desc')}</div>
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaDuration')}</div>
              <div className={styles['m-value']}>{t('metaDurationVal')}</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaRecovery')}</div>
              <div className={`${styles['m-value']} ${styles.warn}`}>{t('metaRecoveryVal')}</div>
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
            <a href="#protocolo" className={styles['btn-ghost']}>{tC('protocolTitle')}</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="protocolo">
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

          <div className={`${styles['thread-types-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('threadTypesTitle')}</div>
            <div className={styles['thread-types-grid']}>
              <div className={styles['thread-card']}>
                <h3>{t('thread2Title')}</h3>
                <p>{t('thread2Desc')}</p>
              </div>
              <div className={`${styles['thread-card']} ${styles['gold-card']}`}>
                <h3>{t('thread1Title')}</h3>
                <p>{t('thread1Desc')}</p>
              </div>
            </div>
          </div>

          <div className={styles.reveal} id="protocolo-steps">
            <div className={styles.eyebrow}>{tC('protocolTitle')}</div>
          </div>
          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {steps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>0{i + 1}</div>
                <div className={styles['ps-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('timelineTitle')}</div>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              {milestones.map((m, i) => (
                <div key={i} className={styles['result-milestone']}>
                  <div className={styles['milestone-when']}>{m.when}</div>
                  <div className={styles['milestone-num']}>{m.num}</div>
                  <p>{m.desc}</p>
                </div>
              ))}
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
