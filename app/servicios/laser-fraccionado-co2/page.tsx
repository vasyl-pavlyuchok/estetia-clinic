'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function LaserFraccionadoCO2Page() {
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
            src="/images/services/laser-fraccionado-co2-para-rejuvenecimiento.webp"
            alt="Láser CO2 Fraccionado"
            className={styles.heroImg}
          />

          {/* Badge CO2 */}
          <div className={styles.co2Badge}>
            <div className={styles.co2BadgeLabel}>Remodelación cutánea</div>
            <div className={styles.co2StatNum}>
              <span>70</span>
              <span className={styles.co2StatUnit}>%</span>
            </div>
            <div className={styles.co2StatSub}>reducción de arrugas documentada</div>
            <div className={styles.co2Divider}></div>
            <div className={styles.co2Gold}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
              Gold Standard
            </div>
          </div>
        </div>

        <div className={styles.heroContentCol}>

          <div className={styles.protocolLabel}>Protocolo 19 — Remodelación Cutánea Avanzada</div>

          <h1>Láser CO2 <em>Fraccionado</em></h1>
          <div className={styles.serviceTagline}>Ablación controlada. Colágeno nuevo. Piel redefinida.</div>

          <p className={styles.heroDesc}>
            El láser CO2 fraccionado es el gold standard mundial para la remodelación cutánea profunda. Microcolumnas de energía ablativa penetran hasta la dermis reticular, generando una respuesta de curación que produce colágeno nuevo, reorganiza la matriz extracelular y elimina capas superficiales dañadas. Resultado: textura refinada, arrugas reducidas y firmeza restaurada desde una sola sesión.
          </p>

          <div className={styles.goldNotice}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
            <div className={styles.goldNoticeText}>
              <strong>Gold Standard — Remodelación cutánea</strong>
              El CO2 fraccionado es el tratamiento con mayor nivel de evidencia clínica para rejuvenecimiento, cicatrices de acné, manchas y laxitud. Resultados documentados en miles de estudios controlados durante más de 20 años de uso clínico.
            </div>
          </div>

          <div className={styles.recoveryWarn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <div className={styles.recoveryWarnText}>
              <strong>Recuperación real: 5–7 días</strong>
              El láser CO2 es un tratamiento médico con recuperación. Eritema, costras superficiales y descamación durante 5–7 días. Resultados que ningún tratamiento no ablativo puede igualar. Consulta médica previa obligatoria.
            </div>
          </div>

          <div className={styles.metaStrip}>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Duración</div>
              <div className={styles.mValue}>45–90 min</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Recuperación</div>
              <div className={`${styles.mValue} ${styles.warn}`}>5–7 días</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Frecuencia</div>
              <div className={styles.mValue}>1–3 sesiones</div>
            </div>
            <div className={styles.metaCell}>
              <div className={styles.mLabel}>Precio desde</div>
              <div className={`${styles.mValue} ${styles.highlight}`}>450€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Gold Standard</span>
            <span className={styles.tag}>Ablativo fraccionado</span>
            <span className={styles.tag}>Colágeno nuevo</span>
            <span className={`${styles.tag} ${styles.gold}`}>Resultados desde sesión 1</span>
          </div>

          <div className={styles.heroCtas}>
            <a href="#reservar" className={styles.btnPrimary}>Reservar consulta gratuita</a>
            <a href="#mecanismo" className={styles.btnGhost}>Cómo actúa el láser CO2</a>
          </div>

        </div>
      </div>

      {/* SCROLL SECTION */}
      <div className={styles.scrollSection} id="mecanismo">
        <div className={styles.scrollInner}>

          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles.sectionTitle}>Lo que el láser CO2<br/><em>transforma en tu piel</em></h2>
          </div>

          <div className={`${styles.benefitsGrid} ${styles.revealStagger}`}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <h3>–70% arrugas superficiales</h3>
              <p>Reducción documentada de arrugas finas y líneas de expresión de hasta un 70%. La ablación controlada elimina la epidermis dañada y estimula la producción de nuevo colágeno dérmico.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3>Textura redefinida</h3>
              <p>Eliminación de irregularidades superficiales, poros dilatados y textura áspera. La nueva epidermis que emerge tras la curación es más uniforme, refinada y luminosa.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3>Cicatrices de acné corregidas</h3>
              <p>Remodelación profunda de cicatrices atróficas tipo boxcar y rolling. Las microcolumnas ablativas destruyen el tejido cicatricial y activan la síntesis de colágeno nativo en su lugar.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                </svg>
              </div>
              <h3>Manchas y melasma</h3>
              <p>Eliminación eficaz de manchas solares, léntigos seniles y melasma refractario. La ablación precisa elimina los queratinocitos hiperpigmentados capa por capa.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>Firmeza y laxitud facial</h3>
              <p>El calor fraccionado contrae las fibras de colágeno existentes de forma inmediata y estimula la neocolagénesis durante meses. Efecto lifting documentado en tejidos laxos.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <polyline points="23 4 23 10 17 10"/>
                  <polyline points="1 20 1 14 7 14"/>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
              </div>
              <h3>Poros minimizados</h3>
              <p>La contracción térmica del tejido perifolicular reduce el diámetro de los poros dilatados. Efecto inmediato por contracción y sostenido por la remodelación del colágeno.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Luminosidad restaurada</h3>
              <p>Eliminación de la capa superficial de células muertas y queratinocitos envejecidos. La nueva epidermis que emerge tiene una refracción lumínica cualitativamente diferente.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h3>Resultados desde sesión 1</h3>
              <p>A diferencia de tratamientos no ablativos, el CO2 fraccionado produce resultados visibles desde la primera sesión. El 80% de los pacientes logra su objetivo en 1–2 sesiones.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Durabilidad superior</h3>
              <p>Los resultados del láser CO2 duran 2–5 años con fotoprotección adecuada. La remodelación del colágeno continúa durante 6–12 meses después de la sesión.</p>
            </div>
          </div>

          <div className={`${styles.mecSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Mecanismo de acción</div>
            <h2 className={styles.sectionTitle}>Cómo el CO2 fraccionado<br/><em>reconstruye la dermis</em></h2>
            <div className={`${styles.mecGrid} ${styles.revealStagger}`}>
              <div className={styles.mecCard}>
                <div className={styles.mecNum}>10.600</div>
                <div className={styles.mecLabel}>Longitud de onda · nm</div>
                <h3>Ablación precisa</h3>
                <p>La longitud de onda de 10.600 nm es absorbida con máxima eficiencia por el agua tisular. Vaporización controlada de microcolumnas de tejido con mínimo daño térmico colateral.</p>
                <span className={styles.mecTag}>Selectividad tisular óptima</span>
              </div>
              <div className={styles.mecCard}>
                <div className={styles.mecNum}>MTZ</div>
                <div className={styles.mecLabel}>Zonas de tratamiento</div>
                <h3>Fraccionamiento térmico</h3>
                <p>Miles de microzonas de tratamiento (MTZ) dejan tejido sano entre ellas. El tejido no tratado actúa como reservorio celular para una curación rápida y completa en 5–7 días.</p>
                <span className={styles.mecTag}>Curación acelerada</span>
              </div>
              <div className={styles.mecCard}>
                <div className={styles.mecNum}>Col I</div>
                <div className={styles.mecLabel}>Colágeno tipo I</div>
                <h3>Neocolagénesis</h3>
                <p>La zona de coagulación térmica activa fibroblastos dérmicos que producen nuevo colágeno tipo I y III durante 6–12 meses post-sesión. La piel se vuelve progresivamente más firme.</p>
                <span className={styles.mecTag}>Remodelación 12 meses</span>
              </div>
              <div className={styles.mecCard}>
                <div className={styles.mecNum}>ECM</div>
                <div className={styles.mecLabel}>Matriz extracelular</div>
                <h3>Remodelación matricial</h3>
                <p>Reorganización de la red de colágeno y elastina en la dermis reticular. La nueva matriz extracelular tiene una arquitectura más joven, con fibras más densas y mejor orientadas.</p>
                <span className={styles.mecTag}>Arquitectura dérmica nueva</span>
              </div>
            </div>
          </div>

          <div className={`${styles.indicSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Indicaciones clínicas</div>
            <h2 className={styles.sectionTitle}>Qué trata<br/><em>con mayor eficacia</em></h2>
            <div className={`${styles.indicGrid} ${styles.revealStagger}`}>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Rejuvenecimiento</div>
                <h3>Arrugas y líneas finas</h3>
                <p>Arrugas periorbitales, peribucales y código de barras. Líneas de expresión superficiales y moderadas. Arrugas solares en mejillas y frente.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●●</div>
              </div>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Cicatrices</div>
                <h3>Acné · Quirúrgicas · Traumáticas</h3>
                <p>Cicatrices atróficas tipo boxcar, rolling e icepick del acné. Cicatrices quirúrgicas y traumáticas con más de 12 meses de evolución.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●○</div>
              </div>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Pigmentación</div>
                <h3>Manchas · Melasma · Léntigos</h3>
                <p>Manchas solares y por edad, léntigos seniles y melasma superficial y dérmico. Hiperpigmentación post-inflamatoria resistente a otros tratamientos.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●○</div>
              </div>
              <div className={styles.indicCard}>
                <div className={styles.indicType}>Textura</div>
                <h3>Poros · Irregularidades · Laxitud</h3>
                <p>Piel de naranja facial, poros dilatados, textura irregular y laxitud moderada. Piel envejecida con pérdida de tersura y elasticidad.</p>
                <div className={styles.indicEficacia} style={{ color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' }}>Eficacia ●●●●●</div>
              </div>
            </div>
          </div>

          <div className={styles.reveal} id="protocolo">
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles.sectionTitle}>Las <em>8 fases</em> de cada sesión</h2>
          </div>

          <div className={`${styles.protocolList} ${styles.revealStagger}`}>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>01</div>
              <div className={styles.psBody}>
                <h4>Consulta médica y fototipos</h4>
                <p>Evaluación del fototipo de Fitzpatrick, historial de tratamientos previos, medicación activa y contraindicaciones. Fotografías de base con estandarización de luz para comparativa post-tratamiento.</p>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>02</div>
              <div className={styles.psBody}>
                <h4>Diseño del protocolo personalizado</h4>
                <p>Selección de parámetros: densidad de MTZ (%), profundidad de ablación (μm) y fluencia en función del área anatómica, la indicación y la tolerancia del paciente.</p>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>03</div>
              <div className={styles.psBody}>
                <h4>Preparación y anestesia tópica</h4>
                <p>Limpieza del área de tratamiento con solución antiséptica. Aplicación de crema anestésica tópica (EMLA o lidocaína 5%) bajo oclusión durante 45–60 minutos para máximo confort.</p>
                <span className={styles.psTag}>Anestesia tópica incluida</span>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>04</div>
              <div className={styles.psBody}>
                <h4>Protección ocular obligatoria</h4>
                <p>Colocación de protectores oculares específicos para láser CO2 en paciente y operador. Protocolo de seguridad obligatorio en cualquier procedimiento con láser de alta potencia.</p>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>05</div>
              <div className={styles.psBody}>
                <h4>Aplicación del láser CO2 fraccionado</h4>
                <p>Pases sistemáticos sobre el área de tratamiento con handpiece fraccionado. Sensación de calor intenso controlado. Duración variable según área: 20 min (peri-ocular) a 60 min (cara completa).</p>
                <span className={`${styles.psTag} ${styles.blue}`}>Protocolo zona por zona</span>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>06</div>
              <div className={styles.psBody}>
                <h4>Crioterapia post-ablación</h4>
                <p>Aplicación inmediata de frío localizado para reducir el eritema agudo y el edema. Aplicación de barrera protectora hidratante no comedogénica sobre el área tratada.</p>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>07</div>
              <div className={styles.psBody}>
                <h4>Instrucciones post-tratamiento</h4>
                <p>Protocolo detallado de cuidados en los 7 días siguientes: limpieza suave, hidratación intensiva, fotoprotección total SPF 50+ desde el día 8 y restricciones de exposición solar por 4 semanas.</p>
                <span className={styles.psTag}>Protocolo escrito de cuidados</span>
              </div>
            </div>
            <div className={styles.protocolStep}>
              <div className={styles.psNum}>08</div>
              <div className={styles.psBody}>
                <h4>Revisión a los 30 días</h4>
                <p>Evaluación fotográfica comparativa a los 30 días post-sesión. Valoración de la respuesta individual, decidir si se necesita una segunda sesión y planificación del mantenimiento a largo plazo.</p>
                <span className={styles.psTag}>Seguimiento fotográfico incluido</span>
              </div>
            </div>
          </div>

          <div className={`${styles.resultsSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles.sectionTitle}>Recuperación real,<br/><em>resultados reales</em></h2>
            <div className={`${styles.resultsTimeline} ${styles.revealStagger}`}>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Días 1–3</div>
                <div className={styles.milestoneNum}>01</div>
                <h3>Eritema y costra</h3>
                <p>Eritema intenso, edema moderado y formación de microcostra sobre las MTZ. Sensación de piel tensa y caliente. Período de mayor incomodidad pero absolutamente normal.</p>
              </div>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Días 4–7</div>
                <div className={styles.milestoneNum}>02</div>
                <h3>Descamación</h3>
                <p>Descamación progresiva de las microcostra. La piel nueva comienza a emerger. Eritema residual. No rascar ni forzar la descamación para evitar pigmentación post-inflamatoria.</p>
              </div>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Semana 2–4</div>
                <div className={styles.milestoneNum}>03</div>
                <h3>Primera transformación</h3>
                <p>La piel nueva muestra ya textura mejorada, manchas más claras y arrugas reducidas. Eritema leve que se resuelve con maquillaje. Primeros resultados de la remodelación visibles.</p>
              </div>
              <div className={styles.resultMilestone}>
                <div className={styles.milestoneWhen}>Mes 3–12</div>
                <div className={styles.milestoneNum}>04</div>
                <h3>Resultado máximo</h3>
                <p>La neocolagénesis continúa durante 6–12 meses post-sesión. La piel sigue mejorando progresivamente en firmeza, luminosidad y textura. Resultado máximo alcanzado a los 6 meses.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.indicationsSection} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Candidatos ideales</div>
            <h2 className={styles.sectionTitle}>¿Es este tu<br/><em>tratamiento?</em></h2>
            <div className={`${styles.indicationsGrid} ${styles.revealStagger}`}>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Fototipo I–III (Fitzpatrick)
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Arrugas superficiales y moderadas
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Cicatrices de acné atróficas
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Manchas solares y léntigos
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Laxitud facial moderada
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Poros dilatados y textura irregular
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Melasma superficial refractario
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Pacientes con tiempo de recuperación
              </div>
              <div className={styles.indicationItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Resultados máximos en 1–2 sesiones
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
                Fototipo IV–VI (alto riesgo PIH)
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Isotretinoína en los últimos 6 meses
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Herpes labial activo o recurrente sin profilaxis
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo y lactancia
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Trastornos de cicatrización (queloides)
              </div>
              <div className={styles.contraItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Exposición solar reciente en la zona
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles.finalCta} id="reservar">
        <div>
          <h2>Primera consulta<br/><em>con diagnóstico incluido</em></h2>
          <p>Evaluación completa de tu piel, fotografías de base estandarizadas y diseño del protocolo personalizado antes de hablar de presupuesto. Consulta gratuita sin compromiso.</p>
        </div>
        <div className={styles.finalCtaBtns}>
          <a href="#" className={styles.btnGold}>Reservar ahora</a>
          <Link href="/servicios" className={styles.btnOutlineWhite}>Ver otros tratamientos</Link>
        </div>
      </div>
    </>
  );
}
