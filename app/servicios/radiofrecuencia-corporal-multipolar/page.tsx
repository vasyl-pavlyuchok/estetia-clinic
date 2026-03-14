'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function RadiofrecuenciaCorporalPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      title: 'Reafirmación corporal',
      desc: 'El calor dérmico contrae las fibras de colágeno existentes y estimula la neocolagénesis. Piel visiblemente más firme y tensa progresivamente.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
      title: 'Celulitis reducida',
      desc: 'Destrucción de las fibras de tejido conectivo que generan el efecto "piel de naranja". Eficaz en grados I, II y III con protocolo completo.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
      title: 'Drenaje linfático',
      desc: 'La vacumterapia combinada activa la circulación linfática, reduce la retención de líquidos y mejora la eliminación de toxinas acumuladas en el tejido.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title: 'Colágeno y elastina',
      desc: 'Estimulación profunda de fibroblastos para producción de colágeno tipo I y III y elastina. La piel recupera su arquitectura estructural.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Sesión tipo masaje',
      desc: 'Sensación de calor agradable y masaje profundo durante toda la sesión. Completamente confortable — sin dolor, sin anestesia, sin restricciones.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      title: 'Complemento post-criolipólisis',
      desc: 'Tratamiento ideal después de criolipólisis para reafirmar la piel de la zona donde se ha reducido el volumen graso. Potencia y completa el resultado.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: 'Sin tiempo de baja',
      desc: 'Incorporación inmediata a cualquier actividad. Posible realizar en la pausa del mediodía. Solo se recomienda hidratación abundante post-sesión.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
      title: 'Reducción de perímetro',
      desc: 'Efecto complementario de reducción del perímetro corporal gracias a la mejora del drenaje y la reabsorción de líquido intersticial acumulado.',
    },
  ];

  const zones = [
    'Muslos internos y externos', 'Glúteos', 'Abdomen', 'Brazos (alas de murciélago)',
    'Cara interna de rodillas', 'Flancos y cintura', 'Espalda baja', 'Post-criolipólisis (reafirmación)',
  ];

  const steps = [
    { title: 'Evaluación y grado de celulitis', desc: 'Clasificación del grado de celulitis y evaluación de las zonas con flacidez. Determinación del número de sesiones y la intensidad del protocolo.' },
    { title: 'Mediciones y fotografías', desc: 'Registro fotográfico y medición del perímetro de las zonas a tratar. Base objetiva para evaluar la evolución sesión a sesión.' },
    { title: 'Aplicación de gel conductor', desc: 'Gel que permite la transmisión óptima de la energía electromagnética y protege la epidermis durante el calentamiento de las capas profundas.' },
    { title: 'Tratamiento con cabezal multipolar', desc: 'Movimientos circulares lentos con el cabezal de radiofrecuencia para un calentamiento homogéneo. El médico monitoriza la temperatura de la piel continuamente.' },
    { title: 'Ajuste de temperatura según tolerancia', desc: 'La intensidad se ajusta para mantener la temperatura terapéutica de 40–43°C. La sensación de calor agradable indica que el tratamiento está funcionando correctamente.' },
    { title: 'Vacumterapia y drenaje (opcional)', desc: 'Combinación con vacumterapia para potenciar el drenaje linfático y mejorar la penetración del calor en tejidos con mayor fibrosis. Especialmente recomendado en grado III.' },
    { title: 'Crema reafirmante específica', desc: 'Aplicación de crema reafirmante con activos complementarios (cafeína, retinol, centella asiática) que potencian y prolongan el efecto del tratamiento.' },
    { title: 'Recomendaciones post-sesión', desc: 'Hidratación abundante (2L de agua) durante las 24 horas siguientes para facilitar la eliminación de toxinas activada por el drenaje linfático.' },
  ];

  const indications = [
    'Flacidez post-pérdida de peso', 'Celulitis en muslos y glúteos', 'Flacidez post-parto', 'Brazos con piel flácida',
    'Abdomen con piel laxa', 'Complemento post-criolipólisis', 'Mantenimiento corporal', 'Cara interna de muslos',
  ];

  const contra = [
    'Embarazo', 'Marcapasos u otros implantes electrónicos', 'Prótesis metálicas en zona a tratar',
    'Trombosis venosa activa', 'Cáncer activo', 'Infecciones cutáneas en zona',
  ];

  const checkIcon = (size = 14) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size}><polyline points="20 6 9 17 4 12"/></svg>
  );

  const xIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  );

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <img src="/images/services/radiofrecuencia-corporal-multipolar.webp" alt="Radiofrecuencia Corporal Multipolar — Estetia" />

          <div className={styles['rf-badge']}>
            <div className={styles['rf-badge-label']}>Temperatura de trabajo</div>
            <div className={styles['rf-temp']}>
              <span className={styles['rf-temp-num']}>43</span>
              <span className={styles['rf-temp-unit']}>°C</span>
            </div>
            <div className={styles['rf-temp-sub']}>profundidad dérmica controlada</div>
            <div className={styles['rf-divider']}></div>
            <div className={styles['rf-celulitis']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11"><polyline points="20 6 9 17 4 12"/></svg>
              Grados I · II · III
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 10 — Remodelación Corporal</div>

          <h1>Radiofrecuencia Corporal <em>Multipolar</em></h1>
          <div className={styles['service-tagline']}>Celulitis tratada. Piel reafirmada. Sin baja.</div>

          <p className={styles['hero-desc']}>
            Calor profundo controlado a 40–43°C que estimula colágeno, activa el drenaje linfático y destruye las fibras de celulitis desde el interior. La tecnología multipolar cubre grandes zonas corporales con eficacia y comodidad — sensación de masaje caliente, sin dolor ni recuperación.
          </p>

          <div className={styles['combo-block']}>
            <div className={styles['combo-cell']}>
              <div className={styles['combo-cell-label']}>RF estándar</div>
              <div className={styles['combo-cell-value']}>Un electrodo</div>
            </div>
            <div className={`${styles['combo-cell']} ${styles.active}`}>
              <div className={styles['combo-cell-label']}>RF Multipolar ✦</div>
              <div className={styles['combo-cell-value']}>Multi-electrodo + vacum</div>
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Sin recuperación</strong>
              Sensación de masaje caliente agradable durante toda la sesión. Incorporación inmediata a la actividad diaria. Hidratación abundante recomendada post-sesión.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Por zona</div>
              <div className={styles['m-value']}>45–60 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.ok}`}>Ninguna</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>8–12 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>80€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Sin cirugía</span>
            <span className={styles.tag}>Sin dolor</span>
            <span className={styles.tag}>Celulitis I–III</span>
            <span className={`${styles.tag} ${styles.gold}`}>Bonos con descuento</span>
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
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que el calor multipolar<br /><em>transforma en tu cuerpo</em></h2>
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

          {/* GRADOS DE CELULITIS */}
          <div className={`${styles['celulitis-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Tipos de celulitis tratados</div>
            <h2 className={styles['section-title']}>Eficaz en los tres<br /><em>grados de celulitis</em></h2>

            <div className={`${styles['celulitis-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['celulitis-card']}>
                <div className={`${styles['cel-grade']} ${styles['grade-1']}`}>Grado I — Leve</div>
                <h3>Celulitis blanda</h3>
                <p>Visible solo al pellizcar la piel o con presión. No hay irregularidades en reposo. Tratamiento más sencillo con excelente respuesta desde las primeras sesiones.</p>
                <span className={styles['cel-eficacia']}>Respuesta óptima</span>
              </div>
              <div className={styles['celulitis-card']}>
                <div className={`${styles['cel-grade']} ${styles['grade-2']}`}>Grado II — Moderada</div>
                <h3>Celulitis moderada</h3>
                <p>Visible en bipedestación sin necesidad de pellizcar. Aspecto de piel de naranja al estar de pie. La radiofrecuencia multipolar es el tratamiento de elección para este grado.</p>
                <span className={styles['cel-eficacia']}>Tratamiento de elección</span>
              </div>
              <div className={styles['celulitis-card']}>
                <div className={`${styles['cel-grade']} ${styles['grade-3']}`}>Grado III — Severa</div>
                <h3>Celulitis fibrosa</h3>
                <p>Visible en cualquier posición con nódulos y relieves marcados. Requiere protocolo completo de 10–12 sesiones. La combinación con vacumterapia es clave en este grado.</p>
                <span className={`${styles['cel-eficacia']} ${styles['cel-gold']}`}>Protocolo intensivo</span>
              </div>
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Zonas corporales</div>
            <h2 className={styles['section-title']}>Flacidez y celulitis<br /><em>en cualquier zona</em></h2>

            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {zones.map((z, i) => (
                <div key={i} className={styles['zone-item']}>{checkIcon()}{z}</div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>8 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {steps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>0{i + 1}</div>
                <div className={styles['ps-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Mejora progresiva<br /><em>sesión a sesión</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 4–5</div>
                <div className={styles['milestone-num']}>04</div>
                <h3>Primeras mejoras</h3>
                <p>Mejora visible de la textura y reducción de la sensación de retención de líquidos. La piel empieza a ganar firmeza.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Semana 6–8</div>
                <div className={styles['milestone-num']}>06</div>
                <h3>Resultado consolidado</h3>
                <p>Reducción visible de celulitis y mejora significativa de la reafirmación. Reducción del perímetro medible en la mayoría de pacientes.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mantenimiento</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Sesión mensual</h3>
                <p>Una sesión mensual mantiene y potencia los resultados del protocolo intensivo. Permite espaciar las sesiones progresivamente.</p>
              </div>
            </div>
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>

            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((ind, i) => (
                <div key={i} className={styles['indication-item']}>{checkIcon()}{ind}</div>
              ))}
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles.reveal}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — evaluación médica obligatoria</h4>
            </div>
            <div className={styles['contra-list']}>
              {contra.map((c, i) => (
                <div key={i} className={styles['contra-item']}>{xIcon}{c}</div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos el grado de celulitis y flacidez, definimos las zonas prioritarias y diseñamos el protocolo antes de hablar de presupuesto. Bonos de 10 sesiones disponibles con descuento.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
