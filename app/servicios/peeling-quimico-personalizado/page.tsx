'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function PeelingQuimicoPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`)
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>

        <div className={styles['hero-image-col']}>
          <img
            src="/images/services/peeling-quimico-personalizado.webp"
            alt="Peeling Químico Personalizado — Estetia"
          />
          <div className={styles['acid-badge']}>
            <div className={styles['acid-badge-label']}>Ácidos disponibles</div>
            <div className={styles['acid-pills']}>
              <span className={styles['acid-pill']}>Glicólico</span>
              <span className={styles['acid-pill']}>Salicílico</span>
              <span className={styles['acid-pill']}>Mandélico</span>
              <span className={`${styles['acid-pill']} ${styles['gold']}`}>TCA</span>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 02 — Renovación Celular</div>

          <h1>Peeling Químico <em>Personalizado</em></h1>
          <div className={styles['service-tagline']}>Renovación profunda. Resultado progresivo.</div>

          <p className={styles['hero-desc']}>
            Aplicación controlada de ácidos dermatológicos para exfoliar las capas superficiales de la piel y activar su renovación celular. Concentración y tipo de ácido seleccionados a medida según tu piel, desde superficial hasta medio.
          </p>

          <div className={styles['recovery-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div className={styles['recovery-notice-text']}>
              <strong>Periodo de adaptación</strong>
              Este tratamiento conlleva descamación visible durante 3–7 días. Planifica la sesión con margen antes de compromisos importantes.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>30–45 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles['warn']}`}>3–7 días</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>3–6 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio</div>
              <div className={`${styles['m-value']} ${styles['highlight']}`}>80€</div>
            </div>
          </div>

          <div className={styles['tags']}>
            <span className={styles['tag']}>Renovación celular</span>
            <span className={styles['tag']}>Anti-manchas</span>
            <span className={styles['tag']}>Anti-acné</span>
            <span className={`${styles['tag']} ${styles['gold']}`}>Protocolo progresivo</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#protocolo" className={styles['btn-ghost']}>Ver protocolo completo</a>
          </div>

        </div>
      </div>

      {/* SCROLL SECTION */}
      <div className={styles['scroll-section']} id="protocolo">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que el peeling<br /><em>activa en tu piel</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h3>Renovación celular</h3>
              <p>Acelera el ciclo natural de renovación de la piel, eliminando células dañadas y estimulando la producción de células nuevas y sanas.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              </div>
              <h3>Reducción de manchas</h3>
              <p>Tratamiento eficaz de hiperpigmentación, manchas solares y melasma hormonal. Resultados visibles a partir de la segunda sesión.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3>Mejora de cicatrices</h3>
              <p>Atenuación de cicatrices superficiales de acné mediante la exfoliación controlada de las capas dañadas y estimulación del colágeno.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Textura uniforme</h3>
              <p>Suavizado de irregularidades y mejora de la textura general. La piel gana uniformidad y finura desde las primeras sesiones.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
              </div>
              <h3>Control del acné</h3>
              <p>El ácido salicílico regula la producción de sebo y actúa sobre el acné activo y los puntos negros de forma eficaz y duradera.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3>Arrugas atenuadas</h3>
              <p>Disminución de arrugas finas y líneas de expresión superficiales. El peeling activa la síntesis natural de colágeno y elastina.</p>
            </div>
          </div>

          {/* TIPOS DE ÁCIDO */}
          <div className={`${styles['acids-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Formulación</div>
            <h2 className={styles['section-title']}>El ácido correcto<br /><em>para cada piel</em></h2>
            <div className={`${styles['acids-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['acid-card']}>
                <div className={styles['acid-name']}>Glicólico</div>
                <div className={styles['acid-type']}>AHA — Alpha Hidroxi</div>
                <p>Indicado para manchas, arrugas finas y piel apagada. Alta penetración y efecto renovador global. El más polivalente.</p>
                <span className={styles['acid-depth']}>Superficial — Medio</span>
              </div>
              <div className={styles['acid-card']}>
                <div className={styles['acid-name']}>Salicílico</div>
                <div className={styles['acid-type']}>BHA — Beta Hidroxi</div>
                <p>Específico para pieles grasas y acné. Penetra el folículo piloso, regula el sebo y elimina puntos negros con precisión.</p>
                <span className={styles['acid-depth']}>Superficial</span>
              </div>
              <div className={styles['acid-card']}>
                <div className={styles['acid-name']}>Mandélico</div>
                <div className={styles['acid-type']}>AHA — Molécula grande</div>
                <p>Acción suave y uniforme. Ideal para pieles sensibles, melasma hormonal y fototipos oscuros con riesgo de hiperpigmentación.</p>
                <span className={styles['acid-depth']}>Superficial</span>
              </div>
              <div className={styles['acid-card']}>
                <div className={styles['acid-name']}>TCA</div>
                <div className={styles['acid-type']}>Tricloroacético</div>
                <p>Mayor potencia y profundidad. Reservado para cicatrices, fotoenvejecimiento moderado y queratosis actínicas bajo supervisión médica.</p>
                <span className={styles['acid-depth']}>Medio</span>
              </div>
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>5 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>01</div>
              <div className={styles['ps-body']}>
                <h4>Evaluación y selección del peeling</h4>
                <p>Análisis del tipo de piel, fototipos, afecciones a tratar y tolerancia esperada. Selección del ácido, concentración y profundidad adecuados para cada paciente.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>02</div>
              <div className={styles['ps-body']}>
                <h4>Limpieza y desengrase</h4>
                <p>Preparación de la piel para garantizar una penetración uniforme del ácido. Eliminación completa de sebo, maquillaje y residuos.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>03</div>
              <div className={styles['ps-body']}>
                <h4>Aplicación controlada del ácido</h4>
                <p>Aplicación en capas uniformes bajo control médico continuo. Monitorización de la reacción cutánea en tiempo real para ajustar el tiempo de exposición.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>04</div>
              <div className={styles['ps-body']}>
                <h4>Neutralización</h4>
                <p>Detención controlada de la reacción química mediante solución neutralizante. Paso crítico para garantizar la seguridad y el resultado esperado.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>05</div>
              <div className={styles['ps-body']}>
                <h4>Sueros calmantes y protección solar</h4>
                <p>Aplicación de sueros regeneradores y calmantes. Protección solar obligatoria al finalizar. Indicaciones post-tratamiento personalizadas.</p>
              </div>
            </div>
          </div>

          {/* RESULTADOS */}
          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Resultados esperados</div>
            <h2 className={styles['section-title']}>Mejora <em>progresiva</em>,<br />resultado acumulativo</h2>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 1–2</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Renovación inicial</h3>
                <p>Descamación visible 3–7 días post-tratamiento. Primera mejora de textura y luminosidad una vez completada la renovación.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 3–4</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>Reducción de manchas</h3>
                <p>Atenuación visible de hiperpigmentación y manchas solares. Mejora progresiva de cicatrices de acné y uniformidad del tono.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>4–6 semanas post</div>
                <div className={styles['milestone-num']}>06</div>
                <h3>Resultado máximo</h3>
                <p>Máxima eficacia del ciclo completo. Piel visiblemente renovada, uniforme y con textura notablemente mejorada.</p>
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
                Hiperpigmentación y manchas solares
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Cicatrices superficiales de acné
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Fotoenvejecimiento leve a moderado
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Piel grasa con tendencia acneica
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Melasma hormonal
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Queratosis actínicas (supervisión médica)
              </div>
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — evaluación médica obligatoria</h4>
            </div>
            <div className={styles['contra-list']}>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo y lactancia
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Herpes activo
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Retinoides recientes
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Exposición solar reciente
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Piel con heridas abiertas
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Alergia a ácidos conocida
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos tu piel, seleccionamos el ácido adecuado y diseñamos el protocolo de sesiones antes de hablar de presupuesto. Sin compromisos.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
