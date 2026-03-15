'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function BioestimulacionAcidoHialurónicoPage() {
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
      {/* ══════════════════ HERO ══════════════════ */}
      <div className={styles['hero-wrapper']}>

        <div className={styles['hero-image-col']}>
          <img src="/images/services/bioestimulacion-acido-hialuronico.webp" alt="Bioestimulación con Ácido Hialurónico — Estetia" />

          {/* Badge — duración del efecto hidratante */}
          <div className={styles['duration-badge']}>
            <div className={styles['badge-title']}>Duración del efecto</div>
            <div className={styles['badge-stat']}>
              <span className={styles['badge-stat-num']}>6</span>
              <span className={styles['badge-stat-unit']}>meses</span>
            </div>
            <div className={styles['badge-stat-label']}>de hidratación profunda por ciclo</div>
            <div className={styles['key-diff']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
              No añade volumen — mejora la calidad de la piel desde dentro
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 05 — Hidratación Profunda</div>

          <h1>Bioestimulación con <em>Ácido Hialurónico</em></h1>
          <div className={styles['service-tagline']}>Piel de porcelana. Sin alterar tus rasgos.</div>

          <p className={styles['hero-desc']}>
            Microinyecciones de ácido hialurónico de baja densidad que hidratan en profundidad y activan la producción natural de colágeno y elastina. No rellena ni cambia la morfología — mejora la calidad intrínseca de la piel de forma progresiva y absolutamente natural.
          </p>

          {/* Diferenciador conceptual clave: bioestimulación ≠ relleno */}
          <div className={styles['concept-block']}>
            <div className={styles['concept-cell']}>
              <div className={styles['concept-cell-label']}>Relleno dérmico</div>
              <div className={styles['concept-cell-value']}>Añade volumen</div>
            </div>
            <div className={`${styles['concept-cell']} ${styles.active}`}>
              <div className={styles['concept-cell-label']}>Bioestimulación ✦</div>
              <div className={styles['concept-cell-value']}>Mejora calidad de piel</div>
            </div>
          </div>

          {/* Aviso recuperación mínima */}
          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Recuperación mínima</strong>
              Posibles pequeños hematomas 2–3 días. Evitar ejercicio intenso 24h. Sin restricciones sociales significativas.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>30–45 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.ok}`}>Mínima</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>2–3 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>250€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Sin volumen</span>
            <span className={styles.tag}>Resultados naturales</span>
            <span className={styles.tag}>Prevención anti-edad</span>
            <span className={`${styles.tag} ${styles.gold}`}>Hasta 6 meses</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#protocolo" className={styles['btn-ghost']}>Ver protocolo completo</a>
          </div>

        </div>
      </div>

      {/* ══════════════════ SCROLL ══════════════════ */}
      <div className={styles['scroll-section']} id="protocolo">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que la bioestimulación<br /><em>despierta en tu piel</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="18" cy="6" r="3" fill="currentColor" opacity="0.3"/></svg>
              </div>
              <h3>Hidratación profunda</h3>
              <p>El ácido hialurónico de baja densidad actúa en las capas más profundas de la dermis, captando agua desde el interior. Efecto hidratante durable hasta 6 meses.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3>Firmeza y elasticidad</h3>
              <p>La hidratación profunda y la estimulación de fibroblastos mejora la elasticidad cutánea de forma progresiva. La piel recupera su capacidad de "rebote".</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h3>Luminosidad — piel de porcelana</h3>
              <p>La hidratación intracelular transforma la calidad óptica de la piel. El efecto luminosidad es uno de los resultados más comentados por los pacientes desde la primera semana.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Colágeno endógeno</h3>
              <p>Las microinyecciones activan los fibroblastos para producir colágeno propio. A diferencia del relleno, el cuerpo genera sus propias fibras de sostén de forma natural.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3>Arrugas finas atenuadas</h3>
              <p>Las líneas de deshidratación y arrugas superficiales se rellenan naturalmente al recuperar el volumen de agua intracelular. Resultado sutil y completamente natural.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Prevención anti-edad</h3>
              <p>Ideal desde los 25 años como tratamiento preventivo. Mantener la hidratación dérmica retrasa la aparición de los primeros signos de envejecimiento de forma significativa.</p>
            </div>
          </div>

          {/* ZONAS TRATABLES */}
          <div className={`${styles['zones-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Zonas de aplicación</div>
            <h2 className={styles['section-title']}>Rostro, cuello<br /><em>y escote</em></h2>

            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['zone-card']}>
                <div className={styles['zone-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="44" height="44"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
                </div>
                <h3>Rostro</h3>
                <p>Tratamiento global de frente, mejillas, zona periocular y perioral. Rejuvenecimiento uniforme sin alterar proporciones ni expresión.</p>
              </div>
              <div className={styles['zone-card']}>
                <div className={styles['zone-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="44" height="44"><path d="M12 2C6 2 4 6 4 10c0 4 2 6 4 8"/><path d="M12 2c6 0 8 4 8 8 0 4-2 6-4 8"/><path d="M8 18c1 2 2 3 4 4 2-1 3-2 4-4"/></svg>
                </div>
                <h3>Cuello</h3>
                <p>Una de las zonas que más evidencia el envejecimiento y menos recibe atención. La bioestimulación en cuello devuelve firmeza y luminosidad con resultados muy llamativos.</p>
              </div>
              <div className={styles['zone-card']}>
                <div className={styles['zone-icon']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="44" height="44"><path d="M4 10c0 6 4 10 8 12 4-2 8-6 8-12V6l-8-4-8 4v4z"/></svg>
                </div>
                <h3>Escote</h3>
                <p>El escote presenta características dérmicas específicas con tendencia a arrugas horizontales. Tratamiento especialmente eficaz en esta zona con resultados duraderos.</p>
              </div>
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles.reveal} id="protocolo-steps">
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>7 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>01</div>
              <div className={styles['ps-body']}>
                <h4>Consulta médica y evaluación</h4>
                <p>Análisis de la calidad, hidratación y elasticidad cutánea. Definición de las zonas a tratar y diseño del protocolo de sesiones personalizado.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>02</div>
              <div className={styles['ps-body']}>
                <h4>Limpieza y desinfección</h4>
                <p>Protocolo estéril completo de la zona a tratar. Eliminación de cualquier resto cosmético o contaminante antes de las inyecciones.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>03</div>
              <div className={styles['ps-body']}>
                <h4>Anestesia tópica (opcional)</h4>
                <p>Aplicación opcional de crema anestésica para pacientes con mayor sensibilidad. La mayoría de pacientes tolera el tratamiento sin anestesia por el calibre fino de la aguja.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>04</div>
              <div className={styles['ps-body']}>
                <h4>Microinyecciones en técnica nappage o retrotrazado</h4>
                <p>Inyecciones superficiales de pequeños depósitos de ácido hialurónico en puntos estratégicos. La técnica y profundidad se adaptan a cada zona y objetivo específico.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>05</div>
              <div className={styles['ps-body']}>
                <h4>Masaje de distribución</h4>
                <p>Masaje suave para homogeneizar la distribución del producto y garantizar un resultado uniforme sin irregularidades visibles.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>06</div>
              <div className={styles['ps-body']}>
                <h4>Aplicación de hielo o mascarilla calmante</h4>
                <p>Reducción del enrojecimiento y los posibles microhematomas. La piel queda calmada y preparada para el inicio del proceso de bioestimulación.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>07</div>
              <div className={styles['ps-body']}>
                <h4>Recomendaciones post-tratamiento</h4>
                <p>Indicaciones sobre hidratación, protección solar, evitar ejercicio intenso 24h y uso de cosméticos específicos durante los primeros días.</p>
              </div>
            </div>
          </div>

          {/* RESULTADOS TIMELINE */}
          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Mejora progresiva<br /><em>desde la primera semana</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Semana 1</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Luminosidad visible</h3>
                <p>La hidratación inmediata transforma la calidad óptica de la piel. El efecto luminosidad es el primero en aparecer.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 2–3</div>
                <div className={styles['milestone-num']}>02</div>
                <h3>Firmeza creciente</h3>
                <p>La estimulación de fibroblastos empieza a mostrar resultados. Mejora de elasticidad y atenuación de líneas finas.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 2–3</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>Resultado óptimo</h3>
                <p>Máxima producción de colágeno endógeno. Piel visiblemente más joven, firme y luminosa al completar el protocolo.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mantenimiento</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Cada 6–9 meses</h3>
                <p>Una sesión de mantenimiento preserva y potencia los resultados. El protocolo preventivo se adapta a cada paciente.</p>
              </div>
            </div>
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>

            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Pieles deshidratadas y apagadas
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Primeros signos de envejecimiento (25–40 años)
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Piel fina con arrugas superficiales
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Prevención anti-edad desde los 25 años
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Pacientes que buscan mejoría sin volumen
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Complemento post-peeling o láser
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Cuello y escote con signos de envejecimiento
              </div>
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles.reveal}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — consultar antes del tratamiento</h4>
            </div>
            <div className={styles['contra-list']}>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo y lactancia
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Alergia conocida al ácido hialurónico
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Infecciones cutáneas activas en zona a tratar
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Enfermedades autoinmunes activas
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Tratamiento anticoagulante
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos la calidad e hidratación de tu piel, definimos las zonas prioritarias y diseñamos el protocolo de sesiones antes de hablar de presupuesto.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
