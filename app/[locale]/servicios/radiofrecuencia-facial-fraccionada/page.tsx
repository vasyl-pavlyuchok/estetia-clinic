'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function RadiofrecuenciaFacialPage() {
  const t = useTranslations('radiofrecuenciaFacialFraccionada');
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
    { title: t('benefit1Title'), desc: t('benefit1Desc') },
    { title: t('benefit2Title'), desc: t('benefit2Desc') },
    { title: t('benefit3Title'), desc: t('benefit3Desc') },
    { title: t('benefit4Title'), desc: t('benefit4Desc') },
    { title: t('benefit5Title'), desc: t('benefit5Desc') },
    { title: t('benefit6Title'), desc: t('benefit6Desc') },
  ];

  const mechanisms = [
    { title: t('mec1Title'), desc: t('mec1Desc') },
    { title: t('mec2Title'), desc: t('mec2Desc') },
    { title: t('mec3Title'), desc: t('mec3Desc') },
    { title: t('mec4Title'), desc: t('mec4Desc') },
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc') },
    { title: t('step2Title'), desc: t('step2Desc') },
    { title: t('step3Title'), desc: t('step3Desc') },
    { title: t('step4Title'), desc: t('step4Desc') },
    { title: t('step5Title'), desc: t('step5Desc') },
  ];

  const timeline = [
    { month: t('timeline1Month'), desc: t('timeline1Desc') },
    { month: t('timeline2Month'), desc: t('timeline2Desc') },
    { month: t('timeline3Month'), desc: t('timeline3Desc') },
    { month: t('timeline4Month'), desc: t('timeline4Desc') },
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'),
    t('indication4'), t('indication5'), t('indication6'),
  ];

  const contras = [
    t('contra1'), t('contra2'), t('contra3'), t('contra4'),
  ];

  return (
    <>
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <img src="/images/services/radiofrecuencia-facial-fraccionada.webp" alt="Radiofrecuencia Facial Fraccionada — Estetia" />
          <div className={styles['depth-badge']}>
            <div className={styles['depth-label']}>{t('depthBadgeLabel')}</div>
            <div className={styles['depth-layers']}>
              <div className={styles['depth-layer']}>
                <div className={styles['layer-bar']} style={{ width: '28px' }}></div>
                {t('depthLayer1')}
              </div>
              <div className={styles['depth-layer']}>
                <div className={styles['layer-bar']} style={{ width: '44px' }}></div>
                {t('depthLayer2')}
              </div>
              <div className={`${styles['depth-layer']} ${styles['active']}`}>
                <div className={styles['layer-bar']} style={{ width: '64px' }}></div>
                {t('depthLayer3')} ✦
              </div>
              <div className={styles['depth-layer']}>
                <div className={styles['layer-bar']} style={{ width: '36px' }}></div>
                {t('depthLayer4')}
              </div>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>
          <h1>{t('heroH1')}</h1>
          <p className={styles['hero-desc']}>{t('heroP')}</p>
          <div className={styles['highlight-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['highlight-notice-text']}>
              <strong>{tC('warnRecovery')}</strong>
              {t('metaRecoveryVal')}
            </div>
          </div>
          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>{tC('metaDuration')}</div><div className={styles['m-value']}>{t('metaDurationVal')}</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>{tC('metaRecovery')}</div><div className={`${styles['m-value']} ${styles['ok']}`}>{t('metaRecoveryVal')}</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>{tC('metaSessions')}</div><div className={styles['m-value']}>{t('metaSessionsVal')}</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>{tC('metaPrice')}</div><div className={`${styles['m-value']} ${styles['highlight']}`}>{t('metaPriceVal')}</div></div>
          </div>
          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>{tC('ctaPrimary')}</a>
            <a href="#protocolo" className={styles['btn-ghost']}>{tC('protocolTitle')}</a>
          </div>
        </div>
      </div>

      <div className={styles['scroll-section']} id="protocolo">
        <div className={styles['scroll-inner']}>

          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>{tC('benefitsTitle')}</div>
          </div>
          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            {benefits.map((b, i) => (
              <div key={i} className={styles['benefit-card']}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          <div className={`${styles['how-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Mecanismo de acción</div>
            <div className={`${styles['how-grid']} ${styles['reveal-stagger']}`}>
              {mechanisms.map((m, i) => (
                <div key={i} className={styles['how-card']}>
                  <div className={styles['how-num']}>{String(i + 1).padStart(2, '0')}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>{tC('protocolTitle')}</div>
          </div>
          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {steps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles['ps-body']}><h4>{s.title}</h4><p>{s.desc}</p></div>
              </div>
            ))}
          </div>

          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{tC('timelineTitle')}</div>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              {timeline.map((item, i) => (
                <div key={i} className={styles['result-milestone']}>
                  <div className={styles['milestone-when']}>{item.month}</div>
                  <div className={styles['milestone-num']}>{String(i + 1).padStart(2, '0')}</div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{tC('indicationsTitle')}</div>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((item, i) => (
                <div key={i} className={styles['indication-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>{tC('contraindicationsTitle')}</h4>
            </div>
            <div className={styles['contra-list']}>
              {contras.map((item, i) => (
                <div key={i} className={styles['contra-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

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
