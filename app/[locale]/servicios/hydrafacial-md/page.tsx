'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function HydrafacialPage() {
  const t = useTranslations('hydrafacialMd');
  const tC = useTranslations('serviciosCommon');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    { title: t('benefit1Title'), desc: t('benefit1Desc'), icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg> },
    { title: t('benefit2Title'), desc: t('benefit2Desc'), icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/><path d="M12 8v4l3 3"/><circle cx="18" cy="6" r="3"/></svg> },
    { title: t('benefit3Title'), desc: t('benefit3Desc'), icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
    { title: t('benefit4Title'), desc: t('benefit4Desc'), icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
    { title: t('benefit5Title'), desc: t('benefit5Desc'), icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
    { title: t('benefit6Title'), desc: t('benefit6Desc'), icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc') },
    { title: t('step2Title'), desc: t('step2Desc') },
    { title: t('step3Title'), desc: t('step3Desc') },
    { title: t('step4Title'), desc: t('step4Desc') },
  ];

  const indications = [
    t('indication1'), t('indication2'), t('indication3'),
    t('indication4'), t('indication5'), t('indication6'),
  ];

  return (
    <>
      {/* ══════════════════════════════════════
          HERO — imagen sticky + contenido
      ══════════════════════════════════════ */}
      <div className={styles['hero-wrapper']}>

        {/* IMAGEN STICKY */}
        <div className={styles['hero-image-col']}>
          <img
            src="/images/services/hydrafacial-md.webp"
            alt="Hydrafacial MD® — Estetia"
          />
          <div className={styles['image-badge']}>
            <div className={styles['badge-dot']}></div>
            <div className={styles['badge-text']}>{t('badge')}</div>
          </div>
        </div>

        {/* CONTENIDO */}
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
              <div className={styles['m-value']}>{t('metaRecoveryVal')}</div>
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


      {/* ══════════════════════════════════════
          SCROLL SECTION
      ══════════════════════════════════════ */}
      <div className={styles['scroll-section']} id="protocolo">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
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

          {/* PROTOCOLO */}
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>{tC('protocolTitle')}</div>
          </div>

          <div className={`${styles['protocol-grid']} ${styles['reveal-stagger']}`}>
            {steps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['step-num']}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles['step-body']}>
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-icon']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div>
              <h4>{tC('contraindicationsTitle')}</h4>
              <p>{tC('ctaP')}</p>
            </div>
          </div>

        </div>
      </div>


      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
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
