'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function PeelingQuimicoPage() {
  const t = useTranslations('peelingQuimico');
  const tC = useTranslations('serviciosCommon');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const acids = [
    { name: t('acid1Name'), type: t('acid1Type'), desc: t('acid1Desc') },
    { name: t('acid2Name'), type: t('acid2Type'), desc: t('acid2Desc') },
    { name: t('acid3Name'), type: t('acid3Type'), desc: t('acid3Desc') },
    { name: t('acid4Name'), type: t('acid4Type'), desc: t('acid4Desc') },
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc') },
    { title: t('step2Title'), desc: t('step2Desc') },
    { title: t('step3Title'), desc: t('step3Desc') },
    { title: t('step4Title'), desc: t('step4Desc') },
    { title: t('step5Title'), desc: t('step5Desc') },
  ];

  const timeline = [
    { when: t('timeline1Month'), num: '01', desc: t('timeline1Desc') },
    { when: t('timeline2Month'), num: '02', desc: t('timeline2Desc') },
    { when: t('timeline3Month'), num: '03', desc: t('timeline3Desc') },
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'),
    t('indication4'), t('indication5'), t('indication6'),
  ];

  const contra = [
    t('contra1'), t('contra2'), t('contra3'),
    t('contra4'), t('contra5'), t('contra6'),
  ];

  const xIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  );

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <img src="/images/services/peeling-quimico-personalizado.webp" alt="Peeling Químico Personalizado — Estetia" />
          <div className={styles['acid-badge']}>
            <div className={styles['acid-badge-label']}>{t('acidsTitle')}</div>
            <div className={styles['acid-pills']}>
              <span className={styles['acid-pill']}>{t('acid1Name')}</span>
              <span className={styles['acid-pill']}>{t('acid2Name')}</span>
              <span className={styles['acid-pill']}>{t('acid3Name')}</span>
              <span className={`${styles['acid-pill']} ${styles['gold']}`}>{t('acid4Name')}</span>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>
          <h1>{t('heroH1')}</h1>
          <p className={styles['hero-desc']}>{t('heroP')}</p>

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

      {/* SCROLL SECTION */}
      <div className={styles['scroll-section']} id="protocolo">
        <div className={styles['scroll-inner']}>

          <div className={`${styles['acids-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('acidsTitle')}</div>
            <div className={`${styles['acids-grid']} ${styles['reveal-stagger']}`}>
              {acids.map((a, i) => (
                <div key={i} className={styles['acid-card']}>
                  <div className={styles['acid-name']}>{a.name}</div>
                  <div className={styles['acid-type']}>{a.type}</div>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.reveal}>
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
              {timeline.map((m, i) => (
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
                <div key={i} className={styles['indication-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {ind}
                </div>
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
