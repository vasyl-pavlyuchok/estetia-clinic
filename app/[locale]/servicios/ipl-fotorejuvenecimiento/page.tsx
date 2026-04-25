'use client';
import { useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';

export default function IplFotorejuvenecimientoPage() {
  const t = useTranslations('iplFotorejuvenecimiento');
  const tC = useTranslations('serviciosCommon');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles.revealStagger}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>, title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: t('benefit4Title'), desc: t('benefit4Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: t('benefit5Title'), desc: t('benefit5Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: t('benefit6Title'), desc: t('benefit6Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: t('benefit7Title'), desc: t('benefit7Desc') },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: t('benefit8Title'), desc: t('benefit8Desc') },
  ];

  const croms = [
    { symbol: t('crom1Symbol'), label: t('crom1Label') },
    { symbol: t('crom2Symbol'), label: t('crom2Label') },
    { symbol: t('crom3Symbol'), label: t('crom3Label') },
    { symbol: t('crom4Symbol'), label: t('crom4Label') },
  ];

  const indics = [
    { title: t('indic1Title'), desc: t('indic1Desc') },
    { title: t('indic2Title'), desc: t('indic2Desc') },
    { title: t('indic3Title'), desc: t('indic3Desc') },
    { title: t('indic4Title'), desc: t('indic4Desc') },
  ];

  const steps = [
    { title: t('step1Title'), desc: t('step1Desc'), tag: null },
    { title: t('step2Title'), desc: t('step2Desc'), tag: null },
    { title: t('step3Title'), desc: t('step3Desc'), tag: null },
    { title: t('step4Title'), desc: t('step4Desc'), tag: null },
    { title: t('step5Title'), desc: t('step5Desc'), tag: null },
    { title: t('step6Title'), desc: t('step6Desc'), tag: null },
  ];

  const milestones = [
    { when: t('milestone1Week'), num: '01', desc: t('milestone1Desc') },
    { when: t('milestone2Week'), num: '02', desc: t('milestone2Desc') },
    { when: t('milestone3Week'), num: '03', desc: t('milestone3Desc') },
    { when: t('milestone4Week'), num: '04', desc: t('milestone4Desc') },
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

  const vsRows = [
    { label: t('vsRow1Label'), ipl: t('vsRow1Ipl'), co2: t('vsRow1Co2') },
    { label: t('vsRow2Label'), ipl: t('vsRow2Ipl'), co2: t('vsRow2Co2') },
    { label: t('vsRow3Label'), ipl: t('vsRow3Ipl'), co2: t('vsRow3Co2') },
    { label: t('vsRow4Label'), ipl: t('vsRow4Ipl'), co2: t('vsRow4Co2') },
    { label: t('vsRow5Label'), ipl: t('vsRow5Ipl'), co2: t('vsRow5Co2') },
    { label: t('vsRow6Label'), ipl: t('vsRow6Ipl'), co2: t('vsRow6Co2') },
  ];

  return (
    <>
      {/* HERO */}
      <div className={styles.heroWrapper}>
        <div className={styles.heroImageCol}>
          <img
            src="/images/services/ipl-luz-pulsada-intensa-fotorrejuvenecimiento.webp"
            alt="IPL Fotorrejuvenecimiento"
            className={styles.heroImg}
          />
          <div className={styles.iplBadge}>
            <div className={styles.iplBadgeLabel}>Fotorejuvenecimiento</div>
            <div className={styles.iplStatNum}>
              <span>95</span>
              <span className={styles.iplStatUnit}>%</span>
            </div>
            <div className={styles.iplStatSub}>satisfacción en manchas y rojeces</div>
            <div className={styles.iplDivider}></div>
            <div className={styles.iplMulti}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              Multidianas simultáneas
            </div>
          </div>
        </div>

        <div className={styles.heroContentCol}>
          <div className={styles.protocolLabel}>{t('heroEyebrow')}</div>
          <h1>{t('heroH1')}</h1>
          <p className={styles.heroDesc}>{t('heroP')}</p>

          <div className={styles.metaStrip}>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>{tC('metaDuration')}</div>
              <div className={styles.mValue}>{t('metaDurationVal')}</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>{tC('metaRecovery')}</div>
              <div className={styles.mValue}>{t('metaRecoveryVal')}</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>{tC('metaSessions')}</div>
              <div className={styles.mValue}>{t('metaSessionsVal')}</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>{tC('metaPrice')}</div>
              <div className={`${styles.mValue} ${styles.highlight}`}>{t('metaPriceVal')}</div>
            </div>
          </div>

          <div className={styles.heroCtas}>
            <a href="#reservar" className={styles.btnPrimary}>{tC('ctaPrimary')}</a>
            <a href="#cromoforos" className={styles.btnGhost}>{tC('protocolTitle')}</a>
          </div>
        </div>
      </div>

      {/* SCROLL SECTION */}
      <div className={styles.scrollSection} id="cromoforos">
        <div className={styles.scrollInner}>

          <div className={styles.reveal}>
            <div className={styles.eyebrow}>{tC('benefitsTitle')}</div>
          </div>

          <div className={`${styles.benefitsGrid} ${styles.revealStagger}`}>
            {benefits.map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          <div className={`${styles.cromSection} ${styles.reveal}`} id="mecanismo">
            <div className={styles.eyebrow}>Cromóforos diana</div>
            <div className={`${styles.cromGrid} ${styles.revealStagger}`}>
              {croms.map((c, i) => (
                <div key={i} className={styles.cromCard}>
                  <div className={styles.cromSymbol}>{c.symbol}</div>
                  <div className={styles.cromLabel}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.indicSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('indicationsTitle')}</div>
            <div className={`${styles.indicGrid} ${styles.revealStagger}`}>
              {indics.map((ind, i) => (
                <div key={i} className={styles.indicCard}>
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.reveal}>
            <div className={styles.eyebrow}>{tC('protocolTitle')}</div>
          </div>

          <div className={`${styles.protocolList} ${styles.revealStagger}`}>
            {steps.map((s, i) => (
              <div key={i} className={styles.protocolStep}>
                <div className={styles.psNum}>0{i + 1}</div>
                <div className={styles.psBody}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.resultsSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('timelineTitle')}</div>
            <div className={`${styles.resultsTimeline} ${styles.revealStagger}`}>
              {milestones.map((m, i) => (
                <div key={i} className={styles.resultMilestone}>
                  <div className={styles.milestoneWhen}>{m.when}</div>
                  <div className={styles.milestoneNum}>{m.num}</div>
                  <p>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.indicationsSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{tC('indicationsTitle')}</div>
            <div className={`${styles.indicationsGrid} ${styles.revealStagger}`}>
              {indications.map((ind, i) => (
                <div key={i} className={styles.indicationItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {ind}
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.contraBlock} ${styles.reveal}`}>
            <div className={styles.contraHeader}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>{tC('contraindicationsTitle')}</h4>
            </div>
            <div className={styles.contraList}>
              {contra.map((c, i) => (
                <div key={i} className={styles.contraItem}>{xIcon}{c}</div>
              ))}
            </div>
          </div>

          <div className={`${styles.vsBlock} ${styles.reveal}`}>
            <div className={styles.eyebrow}>{t('vsTitle')}</div>
            <div className={`${styles.revealStagger}`} style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'1px', background:'var(--border)', border:'1px solid var(--border)', marginTop:'32px', marginBottom:'80px'}}>
              <div className={styles.vsCell} style={{fontWeight:600}}>
                <div className={styles.vsCellLabel}>{t('vsCol1')}</div>
              </div>
              <div className={`${styles.vsCell} ${styles.active}`}>
                <div className={styles.vsCellLabel}>{t('vsCol2')}</div>
              </div>
              <div className={styles.vsCell}>
                <div className={styles.vsCellLabel}>{t('vsCol3')}</div>
              </div>
              {vsRows.map((row, i) => (
                <>
                  <div key={`l${i}`} className={styles.vsCell}><div className={styles.vsCellValue}>{row.label}</div></div>
                  <div key={`i${i}`} className={`${styles.vsCell} ${styles.active}`}><div className={styles.vsCellValue}>{row.ipl}</div></div>
                  <div key={`c${i}`} className={styles.vsCell}><div className={styles.vsCellValue}>{row.co2}</div></div>
                </>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles.finalCta} id="reservar">
        <div>
          <h2>{t('ctaH2Line1')}<br/><em>{t('ctaH2Line2')}</em></h2>
          <p>{tC('ctaP')}</p>
        </div>
        <div className={styles.finalCtaBtns}>
          <a href="#" className={styles.btnGold}>{tC('ctaPrimary')}</a>
          <Link href="/servicios" className={styles.btnOutlineWhite}>{tC('ctaSecondary')}</Link>
        </div>
      </div>
    </>
  );
}
