'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function MesoterapiaCapilarPage() {
  const t = useTranslations('mesoterapiaCapilar');
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
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: t('benefit4Title'), desc: t('benefit4Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: t('benefit5Title'), desc: t('benefit5Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: t('benefit6Title'), desc: t('benefit6Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: t('benefit7Title'), desc: t('benefit7Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: t('benefit8Title'), desc: t('benefit8Desc') },
  ];

  const activos = [
    { name: t('activo1Name'), title: t('activo1Title'), desc: t('activo1Desc'), tag: t('activo1Tag') },
    { name: t('activo2Name'), title: t('activo2Title'), desc: t('activo2Desc'), tag: t('activo2Tag') },
    { name: t('activo3Name'), title: t('activo3Title'), desc: t('activo3Desc'), tag: t('activo3Tag') },
    { name: t('activo4Name'), title: t('activo4Title'), desc: t('activo4Desc'), tag: t('activo4Tag') },
    { name: t('activo5Name'), title: t('activo5Title'), desc: t('activo5Desc'), tag: t('activo5Tag') },
    { name: t('activo6Name'), title: t('activo6Title'), desc: t('activo6Desc'), tag: t('activo6Tag') },
  ];

  const alopecias = [
    { type: t('alopecia1Type'), title: t('alopecia1Title'), desc: t('alopecia1Desc'), tag: t('alopecia1Tag'), tagStyle: {} },
    { type: t('alopecia2Type'), title: t('alopecia2Title'), desc: t('alopecia2Desc'), tag: t('alopecia2Tag'), tagStyle: { color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' } },
    { type: t('alopecia3Type'), title: t('alopecia3Title'), desc: t('alopecia3Desc'), tag: t('alopecia3Tag'), tagStyle: { color: '#4a9d8f', background: 'rgba(74,157,143,0.07)', borderColor: 'rgba(74,157,143,0.2)' } },
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

  const indications = [
    t('indication1'), t('indication2'), t('indication3'),
    t('indication4'), t('indication5'), t('indication6'),
    t('indication7'), t('indication8'),
  ];

  const contra = [
    t('contra1'), t('contra2'), t('contra3'),
    t('contra4'), t('contra5'), t('contra6'),
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
          <img src="/images/services/mesoterapia-capilar-regenerativa.webp" alt="Mesoterapia Capilar — Estetia" />

          <div className={styles['cap-badge']}>
            <div className={styles['cap-badge-label']}>{t('capBadge')}</div>
            <div className={styles['cap-stat']}>
              <span className={styles['cap-stat-num']}>80</span>
              <span className={styles['cap-stat-unit']}>%</span>
            </div>
            <div className={styles['cap-stat-sub']}>{t('heroEyebrow')}</div>
            <div className={styles['cap-divider']}></div>
            <div className={styles['cap-bono']}>{t('metaPriceVal')}</div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>

          <h1>{t('heroH1')}</h1>

          <p className={styles['hero-desc']}>{t('heroP')}</p>

          <div className={styles['custom-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <div className={styles['custom-notice-text']}>
              <strong>{t('customNoticeTitle')}</strong>
              {t('customNoticeDesc')}
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
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
            <a href="#activos" className={styles['btn-ghost']}>{tC('protocolTitle')}</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="activos">
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

          {/* ACTIVOS */}
          <div className={`${styles['activos-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('activosEyebrow')}</div>

            <div className={`${styles['activos-grid']} ${styles['reveal-stagger']}`}>
              {activos.map((a, i) => (
                <div key={i} className={styles['activo-card']}>
                  <div className={styles['activo-name']}>{a.name}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className={styles['activo-tag']}>{a.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TIPOS DE ALOPECIA */}
          <div className={`${styles['alopecia-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('alopeciasEyebrow')}</div>

            <div className={`${styles['alopecia-grid']} ${styles['reveal-stagger']}`}>
              {alopecias.map((a, i) => (
                <div key={i} className={`${styles['alop-card']} ${styles[`alop-${i + 1}`]}`}>
                  <div className={styles['alop-type']}>{a.type}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className={styles['alop-eficacia']} style={a.tagStyle}>{a.tag}</span>
                </div>
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
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('timelineTitle')}</div>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>{t('milestone1When')}</div>
                <div className={styles['milestone-num']}>04</div>
                <h3>{t('milestone1Title')}</h3>
                <p>{t('milestone1Desc')}</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>{t('milestone2When')}</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>{t('milestone2Title')}</h3>
                <p>{t('milestone2Desc')}</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>{t('milestone3When')}</div>
                <div className={styles['milestone-num']}>06</div>
                <h3>{t('milestone3Title')}</h3>
                <p>{t('milestone3Desc')}</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>{t('milestone4When')}</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>{t('milestone4Title')}</h3>
                <p>{t('milestone4Desc')}</p>
              </div>
            </div>
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
