'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function MesoterapiaFacialRegenerativaPage() {
  const t = useTranslations('mesoterapiaFacial');
  const tC = useTranslations('serviciosCommon');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const zones = [
    t('zone1'), t('zone2'), t('zone3'),
    t('zone4'), t('zone5'), t('zone6'),
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'),
    t('indication4'), t('indication5'), t('indication6'),
    t('indication7'), t('indication8'),
  ];

  const contras = [
    t('contra1'), t('contra2'), t('contra3'),
    t('contra4'), t('contra5'),
  ];

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>

        <div className={styles['hero-image-col']}>
          <img src="/images/services/mesoterapia-facial-regenerativa.webp" alt="Mesoterapia Facial Regenerativa — Estetia" />

          <div className={styles['cocktail-badge']}>
            <div className={styles['cocktail-badge-label']}>{t('cocktailBadge')}</div>
            <div className={styles['cocktail-ingredients']}>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#4a9d8f'}}></div>
                  <span className={styles['ingredient-name']}>{t('ingredient1Title')}</span>
                </div>
                <span className={styles['ingredient-action']}>{t('ingredient1Desc')}</span>
              </div>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#d4890a'}}></div>
                  <span className={styles['ingredient-name']}>{t('ingredient2Title')}</span>
                </div>
                <span className={styles['ingredient-action']}>{t('ingredient2Desc')}</span>
              </div>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#2C5F6F'}}></div>
                  <span className={styles['ingredient-name']}>{t('ingredient3Title')}</span>
                </div>
                <span className={styles['ingredient-action']}>{t('ingredient3Desc')}</span>
              </div>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#8a5fa8'}}></div>
                  <span className={styles['ingredient-name']}>{t('ingredient4Title')}</span>
                </div>
                <span className={styles['ingredient-action']}>{t('ingredient4Desc')}</span>
              </div>
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
              <div className={`${styles['m-value']} ${styles['ok']}`}>{t('metaRecoveryVal')}</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaSessions')}</div>
              <div className={styles['m-value']}>{t('metaSessionsVal')}</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>{tC('metaPrice')}</div>
              <div className={`${styles['m-value']} ${styles['highlight']}`}>{t('metaPriceVal')}</div>
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

          {/* INGREDIENTES ACTIVOS */}
          <div className={`${styles['ingredients-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{t('cocktailBadge')}</div>

            <div className={`${styles['ingredients-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['ingredient-card']}>
                <div className={`${styles['ing-molecule']} ${styles['ing-teal']}`}>{t('ingredient1Title')}</div>
                <p>{t('ingredient1Desc')}</p>
              </div>
              <div className={styles['ingredient-card']}>
                <div className={`${styles['ing-molecule']} ${styles['ing-orange']}`}>{t('ingredient2Title')}</div>
                <p>{t('ingredient2Desc')}</p>
              </div>
              <div className={styles['ingredient-card']}>
                <div className={styles['ing-molecule']}>{t('ingredient3Title')}</div>
                <p>{t('ingredient3Desc')}</p>
              </div>
              <div className={styles['ingredient-card']}>
                <div className={`${styles['ing-molecule']} ${styles['ing-purple']}`}>{t('ingredient4Title')}</div>
                <p>{t('ingredient4Desc')}</p>
              </div>
            </div>
          </div>

          {/* BENEFICIOS */}
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>{tC('benefitsTitle')}</div>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
              <h3>{t('indication1')}</h3>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
              <h3>{t('indication2')}</h3>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div>
              <h3>{t('indication3')}</h3>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <h3>{t('indication4')}</h3>
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>{t('zonesTitle')}</div>
            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {zones.map((z, i) => (
                <div key={i} className={styles['zone-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                  {z}
                </div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles['reveal']} id="protocolo-steps">
            <div className={styles['eyebrow']}>{tC('protocolTitle')}</div>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {steps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles['ps-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
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
