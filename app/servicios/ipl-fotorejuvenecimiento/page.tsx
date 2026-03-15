'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function IplFotorejuvenecimientoPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles.revealStagger}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

          {/* IPL Badge */}
          <div className={styles.iplBadge}>
            <div className={styles.iplBadgeLabel}>Fotorejuvenecimiento</div>
            <div className={styles.iplStatNum}>
              <span>95</span>
              <span className={styles.iplStatUnit}>%</span>
            </div>
            <div className={styles.iplStatSub}>satisfacción en manchas y rojeces</div>
            <div className={styles.iplDivider}></div>
            <div className={styles.iplMulti}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              Multidianas simultáneas
            </div>
          </div>
        </div>

        <div className={styles.heroContentCol}>

          <div className={styles.protocolLabel}>Protocolo 20 — Fotorejuvenecimiento Selectivo</div>

          <h1>IPL <em>Fotorejuvenecimiento</em></h1>
          <div className={styles.serviceTagline}>Luz pulsada. Multidiana. Piel unificada.</div>

          <p className={styles.heroDesc}>
            La Luz Pulsada Intensa (IPL) es el estándar de referencia para el tratamiento simultáneo de manchas, rojeces, telangiectasias y fotoenvejecimiento. Mediante pulsos de luz poliCromática filtrada, actúa sobre melanina y hemoglobina en una sola sesión: elimina irregularidades del color, unifica el tono y estimula la producción de colágeno dérmico sin ablación ni tiempo de recuperación significativo.
          </p>

          <div className={styles.cafeNotice}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <div className={styles.cafeNoticeText}>
              <strong>Ideal para pieles con daño solar acumulado</strong>
              La IPL es el tratamiento de primera elección para el fotoenvejecimiento: manchas solares, rosácea, telangiectasias y pérdida de tono global. Sin tiempo de recuperación real, con resultados visibles desde la primera sesión.
            </div>
          </div>

          <div className={styles.metaStrip}>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Duración</div>
              <div className={styles.mValue}>30–60 min</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Recuperación</div>
              <div className={styles.mValue}>Mínima</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Sesiones</div>
              <div className={styles.mValue}>3–5 sesiones</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Precio desde</div>
              <div className={`${styles.mValue} ${styles.highlight}`}>180€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Luz Pulsada Intensa</span>
            <span className={styles.tag}>No ablativo</span>
            <span className={styles.tag}>Multidiana</span>
            <span className={`${styles.tag} ${styles.gold}`}>Sin recuperación</span>
          </div>

          <div className={styles.heroCtas}>
            <a href="#reservar" className={styles.btnPrimary}>Reservar consulta gratuita</a>
            <a href="#cromoforos" className={styles.btnGhost}>Cómo actúa la IPL</a>
          </div>

        </div>
      </div>

      {/* SCROLL SECTION */}
      <div className={styles.scrollSection} id="cromoforos">
        <div className={styles.scrollInner}>

          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles.sectionTitle}>Lo que la IPL<br/><em>transforma en tu piel</em></h2>
          </div>

          <div className={`${styles.benefitsGrid} ${styles.revealStagger}`}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <h3>Manchas solares eliminadas</h3>
              <p>La luz IPL es absorbida selectivamente por la melanina superficial de las manchas solares y léntigos. Las lesiones se oscurecen transitoriamente y descaman en 7–14 días, dejando la piel uniformizada.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Rojeces y rosácea controladas</h3>
              <p>La hemoglobina oxigenada de los vasos superficiales dilatados absorbe la longitud de onda específica. Las telangiectasias y la eritrosis difusa de la rosácea se reducen visiblemente sesión a sesión.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <h3>Tono unificado</h3>
              <p>Acción simultánea sobre melanina y hemoglobina en una sola pasada. El resultado es una piel más homogénea, con reducción del contraste entre manchas, rojeces y zonas sanas.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3>Colágeno estimulado</h3>
              <p>El calor dérmico generado por la IPL activa los fibroblastos y estimula la síntesis de nuevo colágeno. Con cada sesión, la piel gana firmeza, tersura y luminosidad progresivas.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Telangiectasias tratadas</h3>
              <p>Los vasos capilares dilatados visibles en mejillas, nariz y escote responden de forma excelente a la IPL. La hemoglobina absorbe la energía, el vaso se colapsa y es reabsorbido de forma natural.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Sin recuperación real</h3>
              <p>A diferencia del láser ablativo, la IPL no requiere tiempo de recuperación. Leve eritema las primeras horas, posible oscurecimiento transitorio de manchas. Vida normal desde el mismo día del tratamiento.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h3>Fotodaño global revertido</h3>
              <p>El tratamiento IPL es la herramienta más eficaz para revertir el fotodaño acumulado: manchas, vasos, textura irregular y pérdida de luminosidad abordados en una sola modalidad de tratamiento.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Resultados acumulativos</h3>
              <p>Cada sesión potencia los resultados de la anterior. El protocolo de 3–5 sesiones produce una transformación progresiva y natural de la piel con mantenimiento anual sencillo.</p>
            </div>
          </div>

          <div className={`${styles.cromSection} ${styles.reveal}`} id="mecanismo">
            <div className={styles.eyebrow}>Cromóforos diana</div>
            <h2 className={styles.sectionTitle}>Cómo la IPL actúa<br/><em>sobre cada diana</em></h2>
            <div className={`${styles.cromGrid} ${styles.revealStagger}`}>
              <div className={styles.cromCard}>
                <div className={styles.cromSymbol}>Mel</div>
                <div className={styles.cromLabel}>Melanina · Cromóforo 1</div>
                <h3>Manchas y léntigos</h3>
                <p>La melanina absorbida en queratinocitos superficiales capta la energía lumínica y se calienta. Las células pigmentadas se destruyen selectivamente y son eliminadas por descamación natural en 7–14 días.</p>
                <span className={styles.cromTag}>515–590 nm</span>
              </div>
              <div className={styles.cromCard}>
                <div className={styles.cromSymbol}>Hgb</div>
                <div className={styles.cromLabel}>Hemoglobina · Cromóforo 2</div>
                <h3>Vasos y rojeces</h3>
                <p>La oxihemoglobina de los vasos superficiales dilatados absorbe eficientemente entre 540–590 nm. El calor generado coagula el vaso, que se colapsa y es reabsorbido gradualmente por el organismo.</p>
                <span className={styles.cromTag}>540–590 nm</span>
              </div>
              <div className={styles.cromCard}>
                <div className={styles.cromSymbol}>Col</div>
                <div className={styles.cromLabel}>Colágeno · Efecto térmico</div>
                <h3>Firmeza y textura</h3>
                <p>El calor dérmico residual activa fibroblastos y estimula la neocolagénesis. La piel gana firmeza y tersura progresivamente durante las semanas posteriores a cada sesión del protocolo.</p>
                <span className={styles.cromTag}>Efecto dérmico</span>
              </div>
              <div className={styles.cromCard}>
                <div className={styles.cromSymbol}>H₂O</div>
                <div className={styles.cromLabel}>Agua tisular · Seguridad</div>
                <h3>Epitelio protegido</h3>
                <p>Los filtros de corte y el sistema de enfriamiento de contacto protegen la epidermis durante el tratamiento. La IPL actúa en dermis superficial sin dañar el tejido epitelial circundante.</p>
                <span className={styles.cromTag}>Sistema de enfriamiento</span>
              </div>
            </div>
          </div>

          <div className={`${styles.indicSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Indicaciones clínicas</div>
            <h2 className={styles.sectionTitle}>Qué trata<br/><em>con mayor eficacia</em></h2>
            <div className={`${styles.indicGrid} ${styles.revealStagger}`}>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Pigmentación</div>
                <h3>Manchas solares · Léntigos · Efélides</h3>
                <p>Manchas solares en cara, manos, escote y hombros. Léntigos seniles y efélides. Hiperpigmentación post-inflamatoria superficial en fototipos I–III.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●●</div>
              </div>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Vascular</div>
                <h3>Rosácea · Telangiectasias · Eritrosis</h3>
                <p>Rosácea eritematosa y telangiectásica. Telangiectasias faciales, nasales y del escote. Eritrosis persistente y eritema difuso del fotodaño.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●●</div>
              </div>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Fotodaño global</div>
                <h3>Envejecimiento solar · Tono irregular</h3>
                <p>Fotodaño acumulado con alteración mixta del tono: manchas y rojeces simultáneas. Piel opaca con daño solar crónico. Pérdida de uniformidad del color en cara, cuello y escote.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●○</div>
              </div>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Mantenimiento</div>
                <h3>Piel tratada · Protocolo preventivo</h3>
                <p>Mantenimiento anual de pieles tratadas con láser CO2 u otros procedimientos. Protocolo preventivo para pieles con alta exposición solar o tendencia al fotodaño.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●○</div>
              </div>
            </div>
          </div>

          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles.sectionTitle}>Las <em>6 fases</em> de cada sesión</h2>
          </div>

          <div className={`${styles.protocolList} ${styles.revealStagger}`}>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>01</div>
              <div className={styles.psBody}>
                <h4>Consulta y análisis del fotodaño</h4>
                <p>Evaluación del fototipo de Fitzpatrick, mapeo de lesiones pigmentadas y vasculares, historial de exposición solar y tratamientos previos. Fotografías de base estandarizadas para comparativa fotográfica post-tratamiento.</p>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>02</div>
              <div className={styles.psBody}>
                <h4>Selección de filtros y parámetros</h4>
                <p>Configuración del equipo IPL según las dianas a tratar: filtro de corte, fluencia (J/cm²), duración del pulso y sistema de enfriamiento. Parámetros individualizados por zona anatómica y tipo de lesión.</p>
                <span className={styles.psTag}>Personalización por zona</span>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>03</div>
              <div className={styles.psBody}>
                <h4>Preparación y protección ocular</h4>
                <p>Limpieza del área con solución micelar. Aplicación de gel conductor frío para maximizar el contacto y el confort. Colocación de gafas protectoras opacas específicas para IPL en paciente y operador.</p>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>04</div>
              <div className={styles.psBody}>
                <h4>Aplicación sistemática de la IPL</h4>
                <p>Pases secuenciales sobre el área de tratamiento con superposición controlada. Sensación de calor puntual y ligero chasquido en cada pulso. Duración: 30 min (cara) a 60 min (cara, cuello y escote).</p>
                <span className={`${styles.psTag} ${styles.blue}`}>Protocolo zona por zona</span>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>05</div>
              <div className={styles.psBody}>
                <h4>Calming post-IPL</h4>
                <p>Aplicación de suero calmante con niacinamida y ácido hialurónico de bajo peso molecular sobre el área tratada. Crioterapia localizada si persiste eritema. Fotoprotección mineral SPF 50+ obligatoria antes de salir.</p>
                <span className={styles.psTag}>Hidratación + fotoprotección incluidas</span>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>06</div>
              <div className={styles.psBody}>
                <h4>Seguimiento y próxima sesión</h4>
                <p>Instrucciones de cuidados post-IPL: no exfoliar, fotoprotección total por 4 semanas, no sacar las costras de las manchas. Programación de la siguiente sesión en 3–4 semanas para optimizar resultados del protocolo.</p>
                <span className={styles.psTag}>Protocolo escrito de cuidados</span>
              </div>
            </div>
          </div>

          <div className={`${styles.resultsSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles.sectionTitle}>Progresión sesión<br/><em>a sesión</em></h2>
            <div className={`${styles.resultsTimeline} ${styles.revealStagger}`}>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Días 1–3</div>
                <div className={styles.milestoneNum}>01</div>
                <h3>Reacción inmediata</h3>
                <p>Eritema leve y oscurecimiento de las manchas tratadas ("efecto café"). Las manchas se vuelven más oscuras antes de descamar. Normal y esperado. Vida normal con fotoprotección.</p>
              </div>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Días 7–14</div>
                <div className={styles.milestoneNum}>02</div>
                <h3>Descamación natural</h3>
                <p>Las manchas oscurecidas descaman de forma natural. La piel revela zonas más uniformes por debajo. Reducción visible de rojeces y telangiectasias. No forzar la descamación.</p>
              </div>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Sesión 3–4</div>
                <div className={styles.milestoneNum}>03</div>
                <h3>Transformación acumulativa</h3>
                <p>Tono global significativamente más uniforme. Manchas residuales, rojeces reducidas y primera mejora de textura visible. El 80% de pacientes consigue sus objetivos en este punto del protocolo.</p>
              </div>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Post protocolo</div>
                <div className={styles.milestoneNum}>04</div>
                <h3>Resultado consolidado</h3>
                <p>Piel con tono uniforme, manchas eliminadas o muy reducidas, rojeces controladas y textura mejorada. Mantenimiento con 1–2 sesiones anuales para sostener el resultado frente al fotodaño.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.indicationsSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Candidatos ideales</div>
            <h2 className={styles.sectionTitle}>¿Es este tu<br/><em>tratamiento?</em></h2>
            <div className={`${styles.indicationsGrid} ${styles.revealStagger}`}>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Fototipo I–IV (Fitzpatrick)
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Manchas solares y léntigos
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Rosácea y eritrosis facial
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Telangiectasias visibles
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Fotodaño acumulado mixto
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Tono desunificado por sol
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Sin tiempo de recuperación
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Mantenimiento post-láser CO2
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Protocolo preventivo anual
              </div>
            </div>
          </div>

          <div className={`${styles.contraBlock} ${styles.reveal}`}>
            <div className={styles.contraHeader}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <h4>Contraindicaciones — consultar antes</h4>
            </div>
            <div className={styles.contraList}>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Piel bronceada o exposición solar reciente
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Fototipo V–VI (riesgo de hipopigmentación)
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo y lactancia
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Medicación fotosensibilizante activa
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Melasma hormonal activo (requiere evaluación)
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Isotretinoína en los últimos 6 meses
              </div>
            </div>
            <p style={{fontSize:'10px', color:'rgba(120,40,40,0.6)', marginTop:'12px', fontStyle:'italic'}}>La IPL requiere piel sin bronceado activo. El tratamiento debe planificarse en otoño-invierno o con protección solar estricta previa de 4 semanas.</p>
          </div>

          <div className={`${styles.vsBlock} ${styles.reveal}`}>
            <div className={styles.eyebrow}>IPL vs Láser CO2</div>
            <h2 className={styles.sectionTitle}>Elige según<br/><em>tu objetivo</em></h2>
            <div className={`${styles.revealStagger}`} style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:'var(--border)', border:'1px solid var(--border)', marginTop:'32px', marginBottom:'80px'}}>
              <div className={`${styles.vsCell} ${styles.active}`}>
                <div className={styles.vsCellLabel}>IPL Fotorejuvenecimiento</div>
                <div className={styles.vsCellValue}>Manchas + rojeces + tono · Sin recuperación · 3–5 sesiones · Resultado progresivo</div>
              </div>
              <div className={styles.vsCell}>
                <div className={styles.vsCellLabel}>Láser CO2 Fraccionado</div>
                <div className={styles.vsCellValue}>Arrugas + cicatrices + laxitud · 5–7 días recuperación · 1–3 sesiones · Resultado intenso</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles.finalCta} id="reservar">
        <div>
          <h2>Primera consulta<br/><em>con diagnóstico incluido</em></h2>
          <p>Evaluación completa del fotodaño, mapa de lesiones y diseño del protocolo IPL personalizado antes de hablar de presupuesto. Consulta gratuita sin compromiso.</p>
        </div>
        <div className={styles.finalCtaBtns}>
          <a href="#" className={styles.btnGold}>Reservar ahora</a>
          <Link href="/servicios" className={styles.btnOutlineWhite}>Ver otros tratamientos</Link>
        </div>
      </div>
    </>
  );
}
