'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function LaserBajaIntensidadLLLTCapilarPage() {
  const t = useTranslations('laserCapilar');
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
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: t('benefit4Title'), desc: t('benefit4Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: t('benefit5Title'), desc: t('benefit5Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: t('benefit6Title'), desc: t('benefit6Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: t('benefit7Title'), desc: t('benefit7Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: t('benefit8Title'), desc: t('benefit8Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: t('benefit9Title'), desc: t('benefit9Desc') },
  ];

  const mecItems = [
    { wavelength: t('mec1Wavelength'), label: t('mec1Label') },
    { wavelength: t('mec2Wavelength'), label: t('mec2Label') },
    { wavelength: t('mec3Wavelength'), label: t('mec3Label') },
    { wavelength: t('mec4Wavelength'), label: t('mec4Label') },
  ];

  const techItems = [
    { title: t('tech1Title'), desc: t('tech1Desc') },
    { title: t('tech2Title'), desc: t('tech2Desc') },
    { title: t('tech3Title'), desc: t('tech3Desc') },
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc'), tag: null },
    { title: t('step2Title'), desc: t('step2Desc'), tag: null },
    { title: t('step3Title'), desc: t('step3Desc'), tag: null },
    { title: t('step4Title'), desc: t('step4Desc'), tag: null },
    { title: t('step5Title'), desc: t('step5Desc'), tag: null },
    { title: t('step6Title'), desc: t('step6Desc'), tag: null },
    { title: t('step7Title'), desc: t('step7Desc'), tag: t('step7Tag') },
    { title: t('step8Title'), desc: t('step8Desc'), tag: t('step8Tag') },
  ];

  const milestones = [
    { when: t('milestone1Week'), num: '01', desc: t('milestone1Desc') },
    { when: t('milestone2Week'), num: '02', desc: t('milestone2Desc') },
    { when: t('milestone3Week'), num: '04', desc: t('milestone3Desc') },
    { when: t('milestone4Week'), num: '∞', desc: t('milestone4Desc') },
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'),
    t('indication4'), t('indication5'), t('indication6'),
    t('indication7'), t('indication8'), t('indication9'),
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
          <img src="/images/services/laser-de-baja-intensidad-lllt-capilar.webp" alt="Láser de Baja Intensidad LLLT Capilar — Estetia" />

          <div className={styles['lllt-badge']}>
            <div className={styles['lllt-badge-label']}>{t('llltBadge')}</div>
            <div className={styles['lllt-stat']}>
              <span className={styles['lllt-stat-num']}>+30</span>
              <span className={styles['lllt-stat-unit']}>%</span>
            </div>
            <div className={styles['lllt-stat-sub']}>grosor capilar documentado</div>
            <div className={styles['lllt-divider']}></div>
            <div className={styles['lllt-fda']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              FDA Cleared
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
            <a href="#mecanismo" className={styles['btn-ghost']}>{tC('protocolTitle')}</a>
          </div>
        </div>
      </div>

      {/* SCROLL SECTION */}
      <div className={styles['scroll-section']} id="mecanismo">
        <div className={styles['scroll-inner']}>

          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>{tC('benefitsTitle')}</div>
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

          <div className={`${styles['mec-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{t('mecTitle')}</div>
            <div className={`${styles['mec-grid']} ${styles['reveal-stagger']}`}>
              {mecItems.map((m, i) => (
                <div key={i} className={styles['mec-card']}>
                  <div className={styles['mec-wavelength']}>{m.wavelength}</div>
                  <div className={styles['mec-label']}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles['tech-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{t('techTitle')}</div>
            <div className={`${styles['tech-grid']} ${styles['reveal-stagger']}`}>
              {techItems.map((tech, i) => (
                <div key={i} className={styles['tech-card']}>
                  <h3>{tech.title}</h3>
                  <p>{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles['reveal']} id="protocolo">
            <div className={styles['eyebrow']}>{tC('protocolTitle')}</div>
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

          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{tC('timelineTitle')}</div>
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

          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{tC('indicationsTitle')}</div>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((ind, i) => (
                <div key={i} className={styles['indication-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {ind}
                </div>
              ))}
            </div>
            {t('indicationFootnote') && (
              <p style={{fontSize:'10px',color:'var(--text-muted)',marginTop:'10px',fontStyle:'italic'}}>{t('indicationFootnote')}</p>
            )}
          </div>

          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
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
          <h2>{tC('ctaH2Line1')}<br/><em>{tC('ctaH2Line2')}</em></h2>
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
