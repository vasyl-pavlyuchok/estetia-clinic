'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function CriolipolisCoolSculptingPage() {
  const t = useTranslations('criolipolis');
  const tC = useTranslations('serviciosCommon');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const mechanisms = [
    { title: t('mech1Title'), desc: t('mech1Desc'), temp: t('mech1Temp') },
    { title: t('mech2Title'), desc: t('mech2Desc'), temp: t('mech2Temp') },
    { title: t('mech3Title'), desc: t('mech3Desc'), temp: t('mech3Temp') },
    { title: t('mech4Title'), desc: t('mech4Desc'), temp: t('mech4Temp') },
  ];

  const steps = [
    { title: t('proto1Title'), desc: t('proto1Desc') },
    { title: t('proto2Title'), desc: t('proto2Desc') },
    { title: t('proto3Title'), desc: t('proto3Desc') },
    { title: t('proto4Title'), desc: t('proto4Desc') },
    { title: t('proto5Title'), desc: t('proto5Desc') },
    { title: t('proto6Title'), desc: t('proto6Desc') },
    { title: t('proto7Title'), desc: t('proto7Desc') },
    { title: t('proto8Title'), desc: t('proto8Desc') },
  ];

  const timeline = [
    { week: t('timeline1Week'), desc: t('timeline1Desc') },
    { week: t('timeline2Week'), desc: t('timeline2Desc') },
    { week: t('timeline3Week'), desc: t('timeline3Desc') },
    { week: t('timeline4Week'), desc: t('timeline4Desc') },
  ];

  const zones = [
    t('zone1'), t('zone2'), t('zone3'), t('zone4'),
    t('zone5'), t('zone6'), t('zone7'), t('zone8'),
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'), t('indication4'),
    t('indication5'), t('indication6'), t('indication7'), t('indication8'),
  ];

  const contras = [
    t('contra1'), t('contra2'), t('contra3'), t('contra4'), t('contra5'),
  ];

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>

        <div className={styles['hero-image-col']}>
          <img src="/images/services/criolipolisis-coolsculpting.webp" alt="Criolipólisis CoolSculpting® — Estetia" />

          <div className={styles['cryo-badge']}>
            <div className={styles['cryo-badge-label']}>{t('vsBadge')}</div>
            <div className={styles['cryo-stat']}>
              <span className={styles['cryo-stat-num']}>25%</span>
            </div>
            <div className={styles['cryo-stat-label']}>{t('vsItem1Label')}</div>
            <div className={styles['cryo-badge-divider']}></div>
            <div className={styles['cryo-cert']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              FDA &amp; CE aprobado
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>{t('heroEyebrow')}</div>

          <h1>{t('heroH1')}</h1>

          <p className={styles['hero-desc']}>{t('heroP')}</p>

          <div className={styles['vs-block']}>
            <div className={styles['vs-cell']}>
              <div className={styles['vs-cell-label']}>{t('vsItem2Label')}</div>
              <div className={styles['vs-cell-value']}>{t('vsItem2Lipo')}</div>
            </div>
            <div className={`${styles['vs-cell']} ${styles['active']}`}>
              <div className={styles['vs-cell-label']}>{t('vsItem2Crio')} ✦</div>
              <div className={styles['vs-cell-value']}>{t('vsItem3Crio')}</div>
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>{t('metaRecoveryVal')}</strong>
              {t('vsItem4Crio')}
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
            <a href="#mecanismo" className={styles['btn-ghost']}>{tC('protocolTitle')}</a>
          </div>

        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="mecanismo">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>{tC('benefitsTitle')}</div>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
              <h3>{t('mech1Title')}</h3>
              <p>{t('mech1Desc')}</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <h3>{t('mech2Title')}</h3>
              <p>{t('mech2Desc')}</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <h3>{t('mech3Title')}</h3>
              <p>{t('mech3Desc')}</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
              <h3>{t('mech4Title')}</h3>
              <p>{t('mech4Desc')}</p>
            </div>
          </div>

          {/* MECANISMO */}
          <div className={`${styles['mechanism-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Mecanismo de acción</div>
            <div className={`${styles['mechanism-steps']} ${styles['reveal-stagger']}`}>
              {mechanisms.map((m, i) => (
                <div key={i} className={styles['mech-step']}>
                  <div className={styles['mech-num']}>{String(i + 1).padStart(2, '0')}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                  <span className={styles['mech-temp']}>{m.temp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{tC('zonesTitle')}</div>
            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {zones.map((z, i) => (
                <div key={i} className={styles['zone-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {z}
                </div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles['reveal']} id="protocolo">
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

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{tC('timelineTitle')}</div>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              {timeline.map((item, i) => (
                <div key={i} className={styles['result-milestone']}>
                  <div className={styles['milestone-when']}>{item.week}</div>
                  <div className={styles['milestone-num']}>{String(i + 1).padStart(2, '0')}</div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{tC('indicationsTitle')}</div>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((item, i) => (
                <div key={i} className={styles['indication-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
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
