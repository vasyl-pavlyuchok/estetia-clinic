'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function HilosTensoresPDOPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>

        <div className={styles['hero-image-col']}>
          <img src="/images/services/hilos-tensores-pdo.webp" alt="Hilos Tensores PDO — Estetia" />

          {/* Badge tipos de hilo */}
          <div className={styles['thread-badge']}>
            <div className={styles['thread-badge-label']}>Tipos de hilo utilizados</div>
            <div className={styles['thread-types']}>
              <div className={`${styles['thread-type']} ${styles['main']}`}>
                <div className={styles['thread-dot']}></div>
                <div className={styles['thread-type-text']}>
                  <div className={styles['thread-type-name']}>Espiculados con conos</div>
                  <div className={styles['thread-type-desc']}>Tracción y lifting inmediato</div>
                </div>
              </div>
              <div className={styles['thread-type']}>
                <div className={styles['thread-dot']}></div>
                <div className={styles['thread-type-text']}>
                  <div className={styles['thread-type-name']}>Lisos PDO</div>
                  <div className={styles['thread-type-desc']}>Bioestimulación de colágeno</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 07 — Lifting Mínimamente Invasivo</div>

          <h1>Hilos Tensores <em>PDO</em></h1>
          <div className={styles['service-tagline']}>Lifting inmediato. Colágeno duradero.</div>

          <p className={styles['hero-desc']}>
            Hilos de polidioxanona reabsorbibles — el mismo material utilizado en cirugía cardíaca — que se insertan bajo la piel mediante microcánulas para crear un efecto lifting inmediato y estimular la producción de colágeno durante 6–12 meses. El tratamiento de mayor impacto sin cirugía.
          </p>

          {/* Efecto doble: inmediato + progresivo */}
          <div className={styles['dual-effect']}>
            <div className={styles['effect-cell']}>
              <div className={styles['effect-cell-label']}>Efecto inmediato</div>
              <div className={styles['effect-cell-value']}>60% lifting</div>
              <div className={styles['effect-cell-sub']}>desde la primera sesión</div>
            </div>
            <div className={`${styles['effect-cell']} ${styles['gold-cell']}`}>
              <div className={styles['effect-cell-label']}>Efecto progresivo</div>
              <div className={styles['effect-cell-value']}>12–18 meses</div>
              <div className={styles['effect-cell-sub']}>duración total del resultado</div>
            </div>
          </div>

          {/* Recuperación moderada */}
          <div className={styles['recovery-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div className={styles['recovery-notice-text']}>
              <strong>Periodo de adaptación 3–7 días</strong>
              Inflamación y hematomas leves. Evitar gestos bruscos 2 semanas. Tratamiento ambulatorio con anestesia local — sin hospitalización.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>60–90 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles['warn']}`}>3–7 días</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>1 sesión</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles['highlight']}`}>600€</div>
            </div>
          </div>

          <div className={styles['tags']}>
            <span className={styles['tag']}>Sin cirugía</span>
            <span className={styles['tag']}>Anestesia local</span>
            <span className={styles['tag']}>Reabsorbible</span>
            <span className={`${styles['tag']} ${styles['gold']}`}>12–18 meses</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#protocolo" className={styles['btn-ghost']}>Ver protocolo completo</a>
          </div>

        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="protocolo">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que los hilos PDO<br /><em>redefinen en tu rostro</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h3>Lifting inmediato</h3>
              <p>El 60% del efecto lifting es visible desde el momento del tratamiento. Los hilos espiculados crean una red de soporte que reposiciona los tejidos caídos de forma mecánica.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>
              </div>
              <h3>Óvalo y mandíbula</h3>
              <p>Redefinición visible de la línea mandibular y el óvalo facial. Los tejidos descendidos recuperan su posición anatómica original con un resultado completamente natural.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3>Elevación de cejas</h3>
              <p>Los hilos en la zona temporal elevan las cejas y abren la mirada de forma natural. Alternativa eficaz a la blefaroplastia para ptosis leve-moderada sin cirugía.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Colágeno 6–12 meses</h3>
              <p>La reabsorción del PDO activa la producción de colágeno durante 6–12 meses. El resultado mejora progresivamente incluso después de que los hilos se han reabsorbido.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h3>Papada y cuello</h3>
              <p>Tratamiento eficaz de la papada incipiente y la flacidez cervical. Los hilos submentonianos redefinen la transición entre el mentón y el cuello sin necesidad de cirugía.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Material médico certificado</h3>
              <p>El PDO es el mismo material utilizado en sutura cardíaca durante décadas. Biocompatibilidad y seguridad clínicamente demostrada. Se reabsorbe completamente en 6–8 meses.</p>
            </div>
          </div>

          {/* TIPOS DE HILO */}
          <div className={`${styles['thread-types-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Tecnología</div>
            <h2 className={styles['section-title']}>Dos tipos de hilo,<br /><em>un resultado combinado</em></h2>

            <div className={styles['thread-types-grid']}>
              <div className={styles['thread-card']}>
                <div className={styles['tc-label']}>Tracción mecánica</div>
                <h3>Hilos espiculados con conos</h3>
                <p>Los mini-conos distribuidos a lo largo del hilo se anclan en el tejido subcutáneo creando puntos de tracción múltiples. Generan el efecto lifting inmediato al tirar y fijar los tejidos en su nueva posición.</p>
                <span className={styles['thread-use']}>Efecto lifting inmediato</span>
              </div>
              <div className={`${styles['thread-card']} ${styles['gold-card']}`}>
                <div className={styles['tc-label']}>Bioestimulación</div>
                <h3>Hilos lisos PDO</h3>
                <p>Sin elementos de tracción, actúan como andamio biológico bajo la piel. La presencia del PDO estimula la producción de colágeno y elastina durante su proceso de reabsorción progresiva de 6–8 meses.</p>
                <span className={styles['thread-use']}>Estímulo de colágeno</span>
              </div>
            </div>
          </div>

          {/* PROTOCOLO — 8 pasos */}
          <div className={styles['reveal']} id="protocolo-steps">
            <div className={styles['eyebrow']}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>8 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>01</div>
              <div className={styles['ps-body']}>
                <h4>Planificación de vectores de tracción</h4>
                <p>Diseño personalizado del mapa de hilos según la anatomía y el descolgamiento específico de cada paciente. La planificación vectorial determina el resultado final.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>02</div>
              <div className={styles['ps-body']}>
                <h4>Marcación de puntos de entrada y salida</h4>
                <p>Marcación precisa de los puntos de inserción y los vectores de tracción sobre el rostro del paciente. Esta fase es tan importante como el propio tratamiento.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>03</div>
              <div className={styles['ps-body']}>
                <h4>Desinfección y anestesia local</h4>
                <p>Anestesia local en los puntos de inserción para un procedimiento completamente indoloro. El tratamiento es ambulatorio — no requiere sedación ni hospitalización.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>04</div>
              <div className={styles['ps-body']}>
                <h4>Inserción de hilos con microcánulas</h4>
                <p>Las microcánulas romas introducen los hilos bajo la piel siguiendo los vectores planificados. Técnica que minimiza el trauma tisular y reduce los hematomas.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>05</div>
              <div className={styles['ps-body']}>
                <h4>Tracción y fijación</h4>
                <p>Tensado de los hilos para lograr el efecto lifting deseado y fijación en el punto de anclaje. El médico evalúa la simetría y el resultado en tiempo real durante esta fase.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>06</div>
              <div className={styles['ps-body']}>
                <h4>Corte de extremos y masaje</h4>
                <p>Corte de los extremos de los hilos al nivel de la piel. Masaje de acomodación para homogeneizar el tejido y eliminar posibles irregularidades superficiales.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>07</div>
              <div className={styles['ps-body']}>
                <h4>Aplicación de hielo y vendaje compresivo</h4>
                <p>Aplicación de frío para reducir la inflamación inmediata. Vendaje compresivo durante 24 horas para facilitar la adaptación del tejido a la nueva posición.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>08</div>
              <div className={styles['ps-body']}>
                <h4>Control a las 48–72 horas</h4>
                <p>Revisión obligatoria para evaluar la evolución, descartar irregularidades y realizar ajustes menores si fuera necesario. Parte fundamental del protocolo de seguridad.</p>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Inmediato hoy,<br /><em>mejor en 6 meses</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Día 1</div>
                <div className={styles['milestone-num']}>60%</div>
                <h3>Lifting visible</h3>
                <p>El 60% del efecto es inmediato. La inflamación inicial puede enmascarar parte del resultado durante los primeros días.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Semana 2–4</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Resultado consolidado</h3>
                <p>La inflamación desaparece y el resultado lifting se estabiliza. Momento de máxima valoración del efecto mecánico.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 3–6</div>
                <div className={styles['milestone-num']}>06</div>
                <h3>Mejora progresiva</h3>
                <p>La producción de colágeno mejora progresivamente la calidad y firmeza de la piel. El resultado global supera al efecto lifting inicial.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>12–18 meses</div>
                <div className={styles['milestone-num']}>18</div>
                <h3>Retoque opcional</h3>
                <p>Duración total del resultado. Retoque opcional en este momento para mantener el efecto. Los hilos se han reabsorbido completamente.</p>
              </div>
            </div>
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>

            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Flacidez facial leve a moderada (35–60 años)
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Pérdida de definición del óvalo facial
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Descolgamiento de mejillas (jowls)
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Cejas caídas y párpados pesados
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Surcos nasogenianos muy marcados
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Papada y flacidez cervical
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Alternativa a cirugía de lifting
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Mantenimiento post-lifting quirúrgico
              </div>
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — evaluación médica obligatoria</h4>
            </div>
            <div className={styles['contra-list']}>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo y lactancia
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Infecciones activas en zona de tratamiento
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Trastornos de coagulación
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Enfermedades autoinmunes activas
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Alergia al material PDO
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos el grado de flacidez, definimos el mapa de vectores y el número de hilos necesarios antes de hablar de presupuesto. Sin compromisos.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
