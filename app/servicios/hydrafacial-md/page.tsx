'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function HydrafacialPage() {
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
            <div className={styles['badge-text']}>Tecnología patentada Vortex-Cell™</div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 01 — Facial Avanzado</div>

          <h1>Hydrafacial <em>MD®</em></h1>
          <div className={styles['service-tagline']}>Limpieza profunda. Hidratación inmediata.</div>

          <p className={styles['hero-desc']}>
            Tratamiento no invasivo en 3 fases que combina exfoliación, extracción e infusión de sueros personalizados mediante tecnología de vórtice. Resultados visibles desde la primera sesión — sin dolor, sin recuperación.
          </p>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>45–60 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={styles['m-value']}>Ninguna</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>1 / mes</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio</div>
              <div className={`${styles['m-value']} ${styles['highlight']}`}>120€</div>
            </div>
          </div>

          <div className={styles['tags']}>
            <span className={styles['tag']}>Sin dolor</span>
            <span className={styles['tag']}>Resultados inmediatos</span>
            <span className={styles['tag']}>Todo tipo de pieles</span>
            <span className={styles['tag']}>Pre-evento</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#protocolo" className={styles['btn-ghost']}>Ver protocolo completo</a>
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
            <div className={styles['eyebrow']}>Beneficios</div>
            <h2 className={styles['section-title']}>Qué consigues con<br /><em>una sola sesión</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>

            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3>Limpieza profunda</h3>
              <p>Eliminación de impurezas, exceso de sebo y células muertas mediante succión de vórtice controlada. Sin irritación.</p>
            </div>

            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/><path d="M12 8v4l3 3"/><circle cx="18" cy="6" r="3"/></svg>
              </div>
              <h3>Hidratación intensa</h3>
              <p>Infusión de ácido hialurónico, péptidos y antioxidantes directamente en la piel. Hidratación duradera desde la primera sesión.</p>
            </div>

            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h3>Luminosidad visible</h3>
              <p>Mejora inmediata de textura, tono y luminosidad. La piel sale del tratamiento visiblemente más joven y fresca.</p>
            </div>

            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3>Poros refinados</h3>
              <p>Reducción visible de poros dilatados y puntos negros. La extracción con vórtice es más efectiva y menos agresiva que cualquier alternativa.</p>
            </div>

            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3>Líneas reducidas</h3>
              <p>Atenuación de líneas finas y arrugas superficiales gracias a la combinación de exfoliación y péptidos bioactivos.</p>
            </div>

            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Sin tiempo de recuperación</h3>
              <p>Incorporación inmediata a la actividad diaria. Ideal como preparación pre-evento, boda o sesión fotográfica.</p>
            </div>

          </div>

          {/* PROTOCOLO */}
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>4 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-grid']} ${styles['reveal-stagger']}`}>

            <div className={styles['protocol-step']}>
              <div className={styles['step-num']}>01</div>
              <div className={styles['step-body']}>
                <h4>Limpieza y exfoliación</h4>
                <p>Eliminación de células muertas y apertura de poros mediante punta de diamante. Prepara la piel para recibir los sueros con máxima eficacia.</p>
              </div>
            </div>

            <div className={styles['protocol-step']}>
              <div className={styles['step-num']}>02</div>
              <div className={styles['step-body']}>
                <h4>Extracción por vórtice</h4>
                <p>Succión controlada que elimina impurezas, sebo y puntos negros sin presión manual. Más efectivo y menos agresivo que la extracción convencional.</p>
              </div>
            </div>

            <div className={styles['protocol-step']}>
              <div className={styles['step-num']}>03</div>
              <div className={styles['step-body']}>
                <h4>Infusión de sueros</h4>
                <p>Aplicación de sueros personalizados según el tipo de piel: ácido hialurónico, péptidos bioactivos y antioxidantes de alta concentración.</p>
              </div>
            </div>

            <div className={styles['protocol-step']}>
              <div className={styles['step-num']}>04</div>
              <div className={styles['step-body']}>
                <h4>Fotomodulación LED</h4>
                <p>Aplicación opcional de luz LED para potenciar la síntesis de colágeno y reducir inflamación residual. Amplifica los resultados del tratamiento.</p>
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
                Pieles opacas sin luminosidad
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Poros dilatados y congestionados
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Manchas solares e hiperpigmentación leve
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Líneas de expresión incipientes
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Preparación pre-evento o boda
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Mantenimiento mensual para cualquier edad
              </div>
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-icon']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div>
              <h4>Contraindicaciones — consultar antes</h4>
              <p>Rosácea severa activa, heridas abiertas o quemaduras solares recientes. En caso de duda, nuestro equipo médico evalúa la idoneidad del tratamiento en la consulta inicial sin coste.</p>
            </div>
          </div>

        </div>
      </div>


      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos tu piel, confirmamos que el Hydrafacial es el tratamiento adecuado para ti y diseñamos un protocolo personalizado antes de hablar de presupuesto.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
