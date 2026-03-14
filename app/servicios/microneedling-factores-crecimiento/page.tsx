'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function MicroneedlingFactoresCrecimientoPage() {
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
          <img src="/images/services/microneedling-con-factores-de-crecimiento.webp" alt="Microneedling con Factores de Crecimiento — Estetia" />

          {/* Badge — dos modalidades con precio */}
          <div className={styles['modality-badge']}>
            <div className={styles['modality-label']}>Modalidades disponibles</div>
            <div className={styles['modality-options']}>
              <div className={styles['modality-row']}>
                <span>Sueros específicos</span>
                <span className={styles['modality-price']}>180€</span>
              </div>
              <div className={`${styles['modality-row']} ${styles.featured}`}>
                <span>Con PRP autólogo</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className={styles['modality-price']}>250€</span>
                  <span className={styles['modality-tag']}>Recomendado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 04 — Regeneración Avanzada</div>

          <h1>Microneedling con <em>Factores de Crecimiento</em></h1>
          <div className={styles['service-tagline']}>Regeneración celular. Cicatrices transformadas.</div>

          <p className={styles['hero-desc']}>
            Microcanales controlados que activan los mecanismos naturales de reparación de la piel, combinados con factores de crecimiento derivados de tu propio plasma. El tratamiento de referencia para cicatrices de acné, estrías y envejecimiento avanzado.
          </p>

          {/* Stat 3000% absorción — diferenciador único */}
          <div className={styles['stat-highlight']}>
            <div className={styles['stat-num']}>3000%</div>
            <div className={styles['stat-desc-text']}>
              <strong>Mayor absorción de activos</strong>
              Los microcanales multiplican la penetración de factores de crecimiento y sueros respecto a la aplicación tópica convencional.
            </div>
          </div>

          {/* Aviso recuperación moderada */}
          <div className={styles['recovery-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div className={styles['recovery-notice-text']}>
              <strong>Periodo de adaptación</strong>
              Enrojecimiento moderado 24–72 horas. Evitar maquillaje las primeras 24h. Planifica con margen si tienes compromisos.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>60–90 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.warn}`}>24–72 horas</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>3–6 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>180€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Cicatrices acné</span>
            <span className={styles.tag}>Estrías</span>
            <span className={styles.tag}>Regeneración</span>
            <span className={`${styles.tag} ${styles.gold}`}>Con PRP autólogo</span>
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
            <h2 className={styles['section-title']}>Lo que el microneedling<br /><em>transforma en tu piel</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <h3>Cicatrices de acné</h3>
              <p>Reducción de hasta el 70% en cicatrices atróficas tipo icepick, rolling y boxcar. El tratamiento más eficaz disponible sin cirugía para este tipo de secuelas.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h3>Estrías y marcas</h3>
              <p>Atenuación visible de estrías rojas y blancas mediante la activación del proceso natural de reparación tisular. Eficaz donde otros tratamientos no llegan.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3>Textura transformada</h3>
              <p>Mejora profunda de la textura e irregularidades cutáneas. La piel gana suavidad, uniformidad y calidad óptica desde las primeras sesiones.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3>Poros minimizados</h3>
              <p>Reducción visible de poros muy dilatados. La estimulación de colágeno y elastina remodela la arquitectura dérmica alrededor del folículo piloso.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Colágeno profundo</h3>
              <p>Estimulación de la producción de colágeno y elastina en capas dérmicas profundas. Efecto rejuvenecedor global que mejora la calidad estructural de la piel.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h3>Absorción 3000% mayor</h3>
              <p>Los microcanales permiten una penetración exponencialmente superior de factores de crecimiento y sueros activos respecto a cualquier aplicación tópica convencional.</p>
            </div>
          </div>

          {/* MODALIDADES */}
          <div className={`${styles['modalities-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Modalidades</div>
            <h2 className={styles['section-title']}>Suero específico<br /><em>o PRP autólogo</em></h2>

            <div className={styles['modalities-grid']}>
              <div className={styles['modality-card']}>
                <div className={styles['mc-label']}>Modalidad estándar</div>
                <h3 className={styles['mc-title']}>Microneedling con sueros</h3>
                <p className={styles['mc-desc']}>Combinación del microneedling con sueros de alta concentración de ácido hialurónico, vitamina C, péptidos o factores de crecimiento sintéticos. Resultados excelentes para rejuvenecimiento y textura.</p>
                <div className={styles['mc-price']}>180€ <span style={{ fontSize: '14px', opacity: 0.6 }}>/sesión</span></div>
                <div className={styles['mc-price-sub']}>Ideal para primera aproximación al tratamiento</div>
              </div>
              <div className={`${styles['modality-card']} ${styles['featured-card']}`}>
                <div className={styles['mc-label']}>Modalidad premium</div>
                <h3 className={styles['mc-title']}>Microneedling con PRP</h3>
                <p className={styles['mc-desc']}>Se extrae una pequeña muestra de tu propia sangre para concentrar las plaquetas y factores de crecimiento naturales. Al aplicarlos sobre los microcanales, la regeneración es exponencialmente superior — son tus propias células reparando tu piel.</p>
                <div className={styles['mc-price']}>250€ <span style={{ fontSize: '14px', opacity: 0.5 }}>/sesión</span></div>
                <div className={styles['mc-price-sub']}>Máxima eficacia para cicatrices y estrías</div>
                <div className={styles['mc-badge']}>Recomendado para cicatrices</div>
              </div>
            </div>
          </div>

          {/* PROTOCOLO — 7 pasos */}
          <div className={styles.reveal} id="protocolo-steps">
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>7 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>01</div>
              <div className={styles['ps-body']}>
                <h4>Limpieza y desinfección</h4>
                <p>Limpieza profunda y desinfección completa de la zona a tratar. Protocolo estéril obligatorio antes de cualquier procedimiento con microagujas.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>02</div>
              <div className={styles['ps-body']}>
                <h4>Anestesia tópica</h4>
                <p>Aplicación de crema anestésica durante 30 minutos. El tratamiento es indoloro o mínimamente molesto con la anestesia correctamente aplicada.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>03</div>
              <div className={styles['ps-body']}>
                <h4>Extracción de sangre para PRP</h4>
                <p>Solo en la modalidad con PRP: extracción de 10–20 ml de sangre venosa y centrifugación para concentrar las plaquetas y factores de crecimiento autólogos.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>04</div>
              <div className={styles['ps-body']}>
                <h4>Tratamiento con microneedling</h4>
                <p>Aplicación del dispositivo con microagujas estériles a la profundidad indicada para cada zona (0.5–2.5 mm). Los microcanales se crean en tiempo real de forma controlada.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>05</div>
              <div className={styles['ps-body']}>
                <h4>Aplicación de factores de crecimiento</h4>
                <p>Inmediatamente tras crear los microcanales, se aplican los factores de crecimiento o PRP. La ventana de máxima absorción dura apenas 15–20 minutos.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>06</div>
              <div className={styles['ps-body']}>
                <h4>Mascarilla calmante y regeneradora</h4>
                <p>Aplicación de mascarilla con ingredientes antiinflamatorios y regeneradores. Reduce el enrojecimiento inmediato y potencia la fase inicial de reparación tisular.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>07</div>
              <div className={styles['ps-body']}>
                <h4>Protocolo post-tratamiento</h4>
                <p>Entrega de cremas específicas para las 72 horas siguientes. Indicaciones detalladas sobre limpieza, hidratación y protección solar durante el periodo de recuperación.</p>
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
                Cicatrices atróficas de acné
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Estrías rojas o blancas
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Textura irregular o áspera
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Poros muy dilatados
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Rejuvenecimiento global del rostro
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Manchas resistentes a otros tratamientos
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Cicatrices post-quirúrgicas superficiales
              </div>
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles.reveal}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — evaluación médica obligatoria</h4>
            </div>
            <div className={styles['contra-list']}>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Acné activo severo
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Tendencia a queloides
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Infecciones cutáneas activas
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Isotretinoína reciente (últimos 6 meses)
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo y lactancia
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos el tipo y profundidad de tus cicatrices, definimos si PRP o sueros es tu opción óptima y diseñamos el protocolo antes de hablar de presupuesto.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
