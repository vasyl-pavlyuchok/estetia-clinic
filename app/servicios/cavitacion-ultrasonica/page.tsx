'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function CavitacionPage() {
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
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title: '–2 a –4 cm por ciclo',
      desc: 'Reducción medible de perímetro por ciclo de tratamiento. Resultado visible y cuantificable desde la tercera sesión con protocolo completo.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: 'Sin agujas ni incisiones',
      desc: 'El cabezal de ultrasonidos actúa sin contacto con el interior del cuerpo. Completamente no invasivo, sin anestesia, sin marcas, sin ningún tipo de lesión.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
      title: 'Remodelación del contorno',
      desc: 'No solo reduce grasa — remodela el contorno corporal de forma progresiva y natural. Resultado complementario a la pérdida de peso y al ejercicio.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: 'Protocolo combinado',
      desc: 'En Estetia cada sesión incluye drenaje linfático o presoterapia posterior. El combo potencia la eliminación de la grasa liberada y protege la función hepática.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      title: 'Textura mejorada',
      desc: 'El ultrasonido mejora la textura de la piel en la zona tratada, reduciendo el aspecto de piel de naranja y aportando una mayor uniformidad superficial.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Sesión rápida y cómoda',
      desc: '40–50 minutos incluyendo el drenaje posterior. El sonido de las burbujas es audible durante el tratamiento — es señal de que la cavitación está activa.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      title: 'Complemento post-criolipólisis',
      desc: 'Ideal para optimizar y acelerar los resultados de la criolipólisis. La cavitación actúa sobre las zonas periféricas donde el frío tiene menor acceso.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Sin efecto rebote',
      desc: 'Los adipocitos destruidos no se regeneran. Mientras se mantenga el peso estable con hábitos saludables, la reducción conseguida es permanente.',
    },
  ];

  const mechSteps = [
    { num: '01', title: 'Generación de microburbujas', desc: 'Los ultrasonidos de 40 kHz generan oscilaciones que crean microburbujas en el líquido intersticial del tejido adiposo. Solo los adipocitos son susceptibles a este proceso.', tag: '40 kHz · Selectivo' },
    { num: '02', title: 'Rotura de adipocitos', desc: 'Las microburbujas implosionan provocando la rotura de la membrana celular de los adipocitos — proceso denominado cavitación. La grasa queda libre en el espacio intersticial.', tag: 'Cavitación estable' },
    { num: '03', title: 'Eliminación natural', desc: 'La grasa liberada en forma de triglicéridos es captada por el sistema linfático y metabolizada por el hígado. Por eso el drenaje posterior y la hidratación son obligatorios.', tag: 'Vía linfática + hepática' },
  ];

  const zones = [
    'Abdomen', 'Flancos (michelines)', 'Cartucheras y caderas', 'Muslos externos e internos',
    'Brazos', 'Espalda baja (rollitos)', 'Complemento post-criolipólisis', 'Peso estable con definición buscada',
  ];

  const steps = [
    { title: 'Evaluación médica y medición de perímetros', desc: 'Registro fotográfico y medición del perímetro en las zonas a tratar. Base objetiva para comparar resultados sesión a sesión y motivar la adherencia al protocolo.', tag: null },
    { title: 'Verificación de contraindicaciones', desc: 'La cavitación tiene contraindicaciones hepáticas específicas. Si existe duda sobre la función hepática, se realiza ecografía previa antes de iniciar el protocolo.', tag: null },
    { title: 'Aplicación de gel conductor', desc: 'Gel específico para ultrasonidos que garantiza la transmisión óptima de las ondas y protege la piel durante el tratamiento.', tag: null },
    { title: 'Tratamiento con cabezal de cavitación', desc: 'Movimientos circulares lentos y constantes sobre la zona tratada. El sonido audible de las burbujas confirma que la cavitación está activa y el tratamiento es eficaz.', tag: null },
    { title: 'Frecuencia semanal máxima', desc: 'La cavitación requiere un mínimo de 72 horas entre sesiones para que el hígado metabolice la grasa liberada. Una sesión por semana como máximo es el protocolo correcto.', tag: null },
    { title: 'Drenaje linfático o presoterapia (obligatorio)', desc: 'El drenaje post-cavitación es parte inseparable del protocolo. Activa la eliminación de los triglicéridos liberados y protege la función hepática. No es opcional.', tag: 'Incluido en sesión' },
    { title: 'Hidratación 2L en 24 horas', desc: 'El agua facilita el transporte linfático de la grasa liberada. Sin hidratación suficiente, la eficacia del tratamiento se reduce significativamente.', tag: null },
    { title: 'Dieta restrictiva 48 horas', desc: 'Evitar grasas saturadas, alcohol y comidas copiosas durante 48 horas post-sesión. El hígado está ocupado metabolizando la grasa liberada — no se le debe sobrecargar.', tag: null },
  ];

  const indications = [
    'Adiposidad localizada en abdomen', 'Michelines y flancos', 'Cartucheras y caderas', 'Muslos externos e internos',
    'Peso estable sin grasa resistente', 'Definición corporal sin cirugía', 'Complemento post-criolipólisis', 'Grasa en espalda baja y brazos',
  ];

  const contra = [
    'Embarazo y lactancia', 'Enfermedades hepáticas', 'Hiperlipidemia severa', 'Prótesis metálicas en zona',
    'Marcapasos', 'Alteraciones de coagulación', 'Cáncer activo',
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
          <img src="/images/services/cavitacion-ultrasonica.webp" alt="Cavitación Ultrasónica — Estetia" />

          <div className={styles['cav-badge']}>
            <div className={styles['cav-badge-label']}>Frecuencia de trabajo</div>
            <div className={styles['cav-stat']}>
              <span className={styles['cav-stat-num']}>40</span>
              <span className={styles['cav-stat-unit']}>kHz</span>
            </div>
            <div className={styles['cav-stat-sub']}>ultrasonidos de baja frecuencia</div>
            <div className={styles['cav-divider']}></div>
            <div className={styles['cav-reduction']}>–2 a –4 cm por ciclo</div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 12 — Reducción de Grasa</div>

          <h1>Cavitación <em>Ultrasónica</em></h1>
          <div className={styles['service-tagline']}>Microburbujas que destruyen grasa. Sin cirugía.</div>

          <p className={styles['hero-desc']}>
            Ultrasonidos de 40 kHz que generan microburbujas en el tejido adiposo, provocando la rotura de los adipocitos. La grasa liberada se elimina naturalmente a través del sistema linfático y el hígado. Entre 2 y 4 cm de reducción por ciclo, sin agujas, sin anestesia, sin baja.
          </p>

          <div className={styles['combo-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <div className={styles['combo-notice-text']}>
              <strong>Protocolo combinado obligatorio</strong>
              Cada sesión de cavitación incluye drenaje linfático o presoterapia posterior. Es imprescindible para eliminar la grasa liberada y proteger el hígado.
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Sin recuperación</strong>
              Evitar ejercicio intenso 2–3 horas post-tratamiento. Hidratación de 2L en 24 horas y evitar grasas y alcohol 48 horas para optimizar la eliminación.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>40–50 min</div>
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
              <div className={`${styles['m-value']} ${styles.highlight}`}>70€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Sin agujas</span>
            <span className={styles.tag}>Sin cirugía</span>
            <span className={styles.tag}>–2 a –4 cm</span>
            <span className={`${styles.tag} ${styles.gold}`}>Bono 10 desde 550€</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#mecanismo" className={styles['btn-ghost']}>Ver cómo funciona</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="mecanismo">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que las microburbujas<br /><em>hacen por tu silueta</em></h2>
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

          {/* MECANISMO */}
          <div className={`${styles['mechanism-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Mecanismo de acción</div>
            <h2 className={styles['section-title']}>Cómo el sonido<br /><em>destruye la grasa</em></h2>

            <div className={`${styles['mechanism-steps']} ${styles['reveal-stagger']}`}>
              {mechSteps.map((s, i) => (
                <div key={i} className={styles['mech-step']}>
                  <div className={styles['mech-num']}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className={styles['mech-tag']}>{s.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Zonas tratables</div>
            <h2 className={styles['section-title']}>Grasa localizada<br /><em>en cualquier zona</em></h2>

            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {zones.map((z, i) => (
                <div key={i} className={styles['zone-item']}>{checkIcon()}{z}</div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles.reveal} id="protocolo">
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
                  {s.tag && <span className={styles['ps-tag']}>{s.tag}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Progresivo, medible<br /><em>y acumulativo</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 3</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>Primeras medidas</h3>
                <p>Reducción de perímetro medible desde la tercera sesión. Primeras mejoras visibles en la zona tratada.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesiones 6–8</div>
                <div className={styles['milestone-num']}>06</div>
                <h3>Reducción consolidada</h3>
                <p>–2 a –4 cm de perímetro por ciclo completado. Mejora visible del contorno corporal y de la textura de la piel en la zona.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>2–3 semanas post</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Resultado máximo</h3>
                <p>El hígado termina de metabolizar los triglicéridos liberados. El resultado final es visible 2–3 semanas después de completar el protocolo.</p>
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
          <p>Evaluamos las zonas, verificamos contraindicaciones y diseñamos el protocolo antes de hablar de presupuesto. Bono de 10 sesiones (cavitación + drenaje) desde 550€.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
