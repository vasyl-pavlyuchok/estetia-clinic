'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function LaserBajaIntensidadLLLTCapilarPage() {
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
          <img src="/images/services/laser-de-baja-intensidad-lllt-capilar.webp" alt="Láser de Baja Intensidad LLLT Capilar — Estetia" />

          {/* Badge LLLT */}
          <div className={styles['lllt-badge']}>
            <div className={styles['lllt-badge-label']}>Aumento de grosor</div>
            <div className={styles['lllt-stat']}>
              <span className={styles['lllt-stat-num']}>+30</span>
              <span className={styles['lllt-stat-unit']}>%</span>
            </div>
            <div className={styles['lllt-stat-sub']}>grosor capilar documentado</div>
            <div className={styles['lllt-divider']}></div>
            <div className={styles['lllt-fda']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              FDA Cleared
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 18 — Fotobiomodulación Capilar</div>

          <h1>LLLT Capilar <em>Fotobiomodulación</em></h1>
          <div className={styles['service-tagline']}>Luz que activa. Fotones que regeneran. Sin agujas.</div>

          <p className={styles['hero-desc']}>
            Tecnología de fotobiomodulación con luz láser de baja intensidad (650–900 nm) que penetra en el cuero cabelludo y activa la mitocondria de cada folículo piloso. El aumento de producción de ATP mejora la microcirculación, reduce la inflamación folicular y prolonga la fase anágena. FDA Cleared, completamente indoloro y sin tiempo de recuperación. 272 diodos láser que cubren todo el cuero cabelludo en cada sesión.
          </p>

          <div className={styles['fda-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <div className={styles['fda-notice-text']}>
              <strong>Tratamiento FDA Cleared</strong>
              El láser de baja intensidad es uno de los pocos tratamientos capilares con aprobación oficial de la FDA para alopecia androgenética masculina y femenina. Eficacia científicamente demostrada en ensayos clínicos controlados.
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Sin recuperación · Sesión relajante</strong>
              Sesión completamente indolora de 20–30 minutos. Actividad laboral y social inmediata. Sin restricciones post-tratamiento. El paciente puede leer, usar el móvil o descansar durante la sesión.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>20–30 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles['ok']}`}>Ninguna</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Frecuencia</div>
              <div className={styles['m-value']}>2–3×/semana</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles['highlight']}`}>40€</div>
            </div>
          </div>

          <div className={styles['tags']}>
            <span className={styles['tag']}>Sin agujas</span>
            <span className={styles['tag']}>FDA Cleared</span>
            <span className={styles['tag']}>272 diodos láser</span>
            <span className={`${styles['tag']} ${styles['gold']}`}>Bono mensual desde 280€</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#mecanismo" className={styles['btn-ghost']}>Cómo actúa el láser</a>
          </div>

        </div>
      </div>

      {/* SCROLL SECTION */}
      <div className={styles['scroll-section']} id="mecanismo">
        <div className={styles['scroll-inner']}>

          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que los fotones<br/><em>activan en tu folículo</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h3>+30% grosor capilar</h3>
              <p>Aumento documentado del diámetro del tallo capilar de hasta un 30%. El cabello existente se vuelve más grueso, denso y resistente a la rotura desde las primeras semanas.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h3>Caída reducida</h3>
              <p>Reducción activa de la caída mediante la prolongación de la fase anágena (crecimiento) y la inhibición de la transición prematura a fase telógena. Resultado perceptible al mes.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3>ATP folicular aumentado</h3>
              <p>La fotobiomodulación activa la cadena respiratoria mitocondrial, aumentando la producción de ATP (energía celular). Folículos con más energía = mayor actividad y crecimiento.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h3>Microcirculación mejorada</h3>
              <p>El láser activa la vasodilatación local y mejora el flujo sanguíneo perifolicular. Más circulación significa más nutrientes y oxígeno llegando a cada folículo.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3>Inflamación folicular reducida</h3>
              <p>La fotobiomodulación tiene efecto antiinflamatorio documentado. La inflamación crónica perifolicular es uno de los factores que acelera la miniaturización en la alopecia androgenética.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>FDA Cleared</h3>
              <p>Uno de los pocos tratamientos capilares con aprobación oficial de la FDA. Eficacia y seguridad avaladas en ensayos clínicos aleatorizados controlados con placebo.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <h3>Potenciador de otros tratamientos</h3>
              <p>El LLLT multiplica la eficacia del PRP, la mesoterapia y el minoxidil. Utilizado en combinación, los resultados son superiores a cualquier tratamiento aislado.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              </div>
              <h3>Post-trasplante capilar</h3>
              <p>El LLLT tras un trasplante capilar acelera el prendimiento de los injertos y reduce el período de caída inicial. Protocolo estándar de recuperación post-quirúrgica.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Sin efectos secundarios</h3>
              <p>Tratamiento completamente seguro, no invasivo y sin efectos secundarios conocidos en pacientes sin contraindicaciones. El perfil de seguridad más favorable de todos los tratamientos capilares.</p>
            </div>
          </div>

          <div className={`${styles['mec-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Mecanismo de acción</div>
            <h2 className={styles['section-title']}>Cómo la luz láser<br/><em>activa tu folículo</em></h2>
            <div className={`${styles['mec-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['mec-card']}>
                <div className={styles['mec-wavelength']}>650</div>
                <div className={styles['mec-label']}>Longitud de onda · nm</div>
                <h3>Penetración dérmica</h3>
                <p>La luz roja de 650–900 nm penetra hasta la dermis papilar donde se encuentra el bulbo folicular. A esta profundidad es absorbida por el citocromo c oxidasa mitocondrial.</p>
                <span className={styles['mec-tag']}>Absorción mitocondrial</span>
              </div>
              <div className={styles['mec-card']}>
                <div className={styles['mec-wavelength']}>ATP</div>
                <div className={styles['mec-label']}>Energía celular</div>
                <h3>Producción de ATP</h3>
                <p>La energía lumínica activa la cadena respiratoria mitocondrial, aumentando significativamente la síntesis de ATP. Las células foliculares con mayor energía muestran mayor actividad proliferativa.</p>
                <span className={styles['mec-tag']}>Más energía = más crecimiento</span>
              </div>
              <div className={styles['mec-card']}>
                <div className={styles['mec-wavelength']}>NO</div>
                <div className={styles['mec-label']}>Óxido Nítrico</div>
                <h3>Vasodilatación local</h3>
                <p>La fotobiomodulación estimula la liberación de óxido nítrico, potente vasodilatador local. Mejora de la microcirculación perifolicular con aumento del aporte de nutrientes y oxígeno.</p>
                <span className={styles['mec-tag']}>Circulación folicular</span>
              </div>
              <div className={styles['mec-card']}>
                <div className={styles['mec-wavelength']}>IL</div>
                <div className={styles['mec-label']}>Inflamación</div>
                <h3>Efecto antiinflamatorio</h3>
                <p>Reducción de citocinas proinflamatorias (IL-1β, TNF-α) en el microambiente folicular. La inflamación crónica perifolicular es un mecanismo clave en la miniaturización progresiva.</p>
                <span className={styles['mec-tag']}>Anti-miniaturización</span>
              </div>
            </div>
          </div>

          <div className={`${styles['tech-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Tecnología del equipo</div>
            <h2 className={styles['section-title']}>272 diodos láser.<br/><em>Cobertura total del cuero cabelludo.</em></h2>
            <div className={`${styles['tech-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['tech-card']}>
                <div className={styles['tech-spec']}>Cobertura</div>
                <h3>272 diodos láser</h3>
                <p>Casco de última generación con 272 diodos láser distribuidos uniformemente. Cobertura total del cuero cabelludo en cada sesión — ninguna zona afectada queda sin tratar.</p>
                <span className={styles['tech-badge']}>Cobertura 360°</span>
              </div>
              <div className={styles['tech-card']}>
                <div className={styles['tech-spec']}>Longitud de onda</div>
                <h3>650–900 nm calibrados</h3>
                <p>Longitudes de onda clínicamente validadas para máxima absorción por el citocromo c oxidasa folicular. El rango 650–900 nm es el &ldquo;ventana terapéutica&rdquo; de la fotobiomodulación.</p>
                <span className={styles['tech-badge']}>Ventana terapéutica óptima</span>
              </div>
              <div className={styles['tech-card']}>
                <div className={styles['tech-spec']}>Sesión</div>
                <h3>20–30 minutos cómodos</h3>
                <p>Sesión completamente relajante sin incomodidad. El paciente puede leer, escuchar música o simplemente descansar mientras el equipo trabaja. Sin calor, sin vibración, sin molestias.</p>
                <span className={styles['tech-badge']}>Sesión relajante</span>
              </div>
            </div>
          </div>

          <div className={styles['reveal']} id="protocolo">
            <div className={styles['eyebrow']}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>8 fases</em> de cada sesión</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>01</div>
              <div className={styles['ps-body']}>
                <h4>Evaluación tricológica inicial</h4>
                <p>Consulta tricológica con fotografías de base y tricoscopia digital. Documentación de la densidad, grosor capilar y distribución de la afectación para seguimiento comparativo mensual.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>02</div>
              <div className={styles['ps-body']}>
                <h4>Diseño del protocolo personalizado</h4>
                <p>Definición de la frecuencia (2–3 sesiones/semana en fase intensiva), duración del protocolo (4–6 meses) y combinaciones recomendadas según el tipo y grado de alopecia.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>03</div>
              <div className={styles['ps-body']}>
                <h4>Limpieza del cuero cabelludo</h4>
                <p>El cuero cabelludo debe estar limpio y seco, sin productos de styling ni suciedad. La limpieza previa garantiza que ninguna barrera interfiera con la penetración de la luz láser.</p>
                <span className={`${styles['ps-tag']} ${styles['blue']}`}>Sin productos en el cabello</span>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>04</div>
              <div className={styles['ps-body']}>
                <h4>Colocación del casco láser</h4>
                <p>Ajuste del casco de 272 diodos al tamaño y forma del cráneo del paciente para garantizar contacto óptimo y cobertura uniforme de todo el cuero cabelludo.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>05</div>
              <div className={styles['ps-body']}>
                <h4>Sesión de fotobiomodulación</h4>
                <p>Activación del sistema durante 20–30 minutos. El paciente permanece cómodamente sentado. Los diodos emiten la luz láser a la longitud de onda y fluencia terapéutica programada. Completamente indoloro.</p>
                <span className={styles['ps-tag']}>Finalización automática del tratamiento</span>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>06</div>
              <div className={styles['ps-body']}>
                <h4>Finalización y retirada del casco</h4>
                <p>El equipo finaliza automáticamente la sesión. Retirada del casco y evaluación visual del cuero cabelludo. Sin enrojecimiento, sin incomodidad, sin ningún signo post-sesión.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>07</div>
              <div className={styles['ps-body']}>
                <h4>Sin cuidados post-tratamiento</h4>
                <p>Incorporación inmediata a cualquier actividad — laboral, social o deportiva. No hay restricciones post-tratamiento. Se puede lavar el cabello, aplicar productos o realizar cualquier actividad normal.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>08</div>
              <div className={styles['ps-body']}>
                <h4>Seguimiento fotográfico mensual</h4>
                <p>Fotografías con tricoscopia mensual para documentar y cuantificar objetivamente la evolución — densidad, grosor capilar y porcentaje de cabellos en fase anágena.</p>
                <span className={styles['ps-tag']}>Control objetivo del progreso</span>
              </div>
            </div>
          </div>

          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Consistencia primero,<br/><em>densidad después</em></h2>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 1</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Caída reducida</h3>
                <p>Reducción visible de la caída activa. Menos cabellos en la ducha, en el cepillo y en la almohada. El primer resultado perceptible y el más motivador.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 2–3</div>
                <div className={styles['milestone-num']}>02</div>
                <h3>Grosor mejorado</h3>
                <p>Los cabellos existentes ganan diámetro y fuerza. El cabello se nota más denso al tacto aunque la densidad real aún no ha aumentado significativamente.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 4–6</div>
                <div className={styles['milestone-num']}>04</div>
                <h3>Crecimiento nuevo</h3>
                <p>Aparición de cabellos nuevos en zonas afectadas. Aumento de densidad capilar documentado en tricoscopia. Resultado máximo con fase intensiva completa.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mantenimiento</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>1–2 sesiones/semana</h3>
                <p>Mantenimiento con 1–2 sesiones semanales para preservar y consolidar los resultados. La alopecia androgenética es crónica — el mantenimiento es parte del protocolo.</p>
              </div>
            </div>
          </div>

          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br/><em>tratamiento?</em></h2>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Alopecia androgenética I–IV
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Debilitamiento capilar difuso
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Miniaturización progresiva
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Mantenimiento post-trasplante
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Intolerancia a tratamientos farmacológicos
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Complemento a minoxidil o finasteride
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Prevención con predisposición genética
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Potenciador de PRP o mesoterapia
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                Recuperación post-quimioterapia*
              </div>
            </div>
            <p style={{fontSize:'10px',color:'var(--text-muted)',marginTop:'10px',fontStyle:'italic'}}>* Con autorización oncológica previa</p>
          </div>

          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — consultar antes</h4>
            </div>
            <div className={styles['contra-list']}>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Fotosensibilidad conocida
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Cáncer de piel activo en cuero cabelludo
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Medicación fotosensibilizante
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Epilepsia fotosensible
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo (precaución)
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Lesiones abiertas en cuero cabelludo
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera sesión<br/><em>con tricoscopia incluida</em></h2>
          <p>Evaluación tricológica completa, fotografías de base y diseño del protocolo personalizado antes de hablar de presupuesto. Bono mensual de 8–12 sesiones desde 280€.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
