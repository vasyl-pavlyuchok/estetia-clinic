'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function PresoterapiaPage() {
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
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
      title: 'Retención eliminada',
      desc: 'Reducción visible de edemas y retención de líquidos desde las primeras sesiones. El sistema linfático se activa con una eficacia imposible de replicar de forma manual.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Piernas ligeras',
      desc: 'Alivio inmediato de la sensación de piernas cansadas y pesadas. Efecto visible desde la primera sesión que se acumula y prolonga con el protocolo completo.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
      title: 'Circulación activada',
      desc: 'Mejora de la circulación venosa y linfática. Prevención activa de varices y arañas vasculares en pacientes con predisposición o trabajo sedentario.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      title: 'Efecto detox',
      desc: 'La activación del sistema linfático acelera la eliminación de toxinas y residuos metabólicos acumulados en los tejidos. Sensación inmediata de bienestar.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: 'Reducción de perímetro',
      desc: 'Hasta 2–3 cm de reducción de perímetro en piernas con el protocolo completo. Resultado visible y medible gracias a la eliminación del líquido intersticial acumulado.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: 'Post-operatorio ideal',
      desc: 'Tratamiento de referencia para acelerar la recuperación tras liposucción, abdominoplastia o cualquier cirugía estética. Reduce la inflamación y los hematomas.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
      title: 'Recuperación deportiva',
      desc: 'Herramienta de recuperación muscular post-entreno utilizada por deportistas de élite. Reduce la fatiga muscular y el tiempo de recuperación entre sesiones.',
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Sesión completamente pasiva',
      desc: 'Puedes leer, usar el móvil o simplemente relajarte mientras las botas hacen el trabajo. Una de las sesiones más cómodas del catálogo de Estetia.',
    },
  ];

  const steps = [
    { title: 'Consulta sobre historial médico', desc: 'Evaluación del historial clínico y medicación actual. Las contraindicaciones de la presoterapia son específicas — este paso es indispensable antes de la primera sesión.' },
    { title: 'Colocación de botas o manguitos', desc: 'Las botas neumáticas se colocan sobre la ropa cómoda del paciente. No es necesario desnudarse. La colocación completa tarda menos de 5 minutos.' },
    { title: 'Ajuste de presión individual', desc: 'La presión se calibra entre 30 y 80 mmHg según la tolerancia, el objetivo y las condiciones de la piel. El ajuste puede modificarse durante la sesión si es necesario.' },
    { title: 'Ciclos de compresión secuencial ascendente', desc: 'Las 24 cámaras se activan de forma progresiva desde el pie hacia el tronco, reproduciendo el flujo natural linfático. El ciclo se repite continuamente durante toda la sesión.' },
    { title: 'Sesión de 30–45 minutos', desc: 'Tiempo de tratamiento completamente pasivo y relajante. El paciente puede leer, usar el móvil o descansar mientras el sistema trabaja de forma autónoma.' },
    { title: 'Compresión de descarga final', desc: 'Ciclo final suave de descarga que prepara el sistema linfático para la fase de eliminación posterior. Mejora la eficacia del drenaje activado durante la sesión.' },
    { title: 'Recomendaciones post-sesión', desc: 'Paseo de 10–15 minutos para potenciar el drenaje activado. Hidratación abundante (2L de agua) y reducción de sal durante las 24 horas siguientes para maximizar el resultado.' },
  ];

  const indications = [
    'Retención de líquidos y edemas', 'Insuficiencia venosa y varices', 'Post-operatorio de cirugía estética',
    'Celulitis edematosa', 'Personas sedentarias (prevención)', 'Recuperación deportiva',
    'Preparación pre-competición', 'Embarazadas con edemas (supervisión médica)', 'Complemento a otros tratamientos corporales',
  ];

  const contra = [
    'Trombosis venosa profunda activa', 'Insuficiencia cardíaca severa', 'Infecciones agudas en zona',
    'Flebitis activa', 'Primer trimestre de embarazo', 'Hipertensión no controlada',
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
          <img src="/images/services/presoterapia-con-drenaje-linfatico.webp" alt="Presoterapia con Drenaje Linfático — Estetia" />

          <div className={styles['preso-badge']}>
            <div className={styles['preso-badge-label']}>Cámaras independientes</div>
            <div className={styles['preso-stat']}>
              <span className={styles['preso-stat-num']}>24</span>
            </div>
            <div className={styles['preso-stat-sub']}>zonas de drenaje secuencial</div>
            <div className={styles['preso-divider']}></div>
            <div className={styles['preso-pressure']}>30–80 mmHg ajustable</div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 11 — Drenaje y Circulación</div>

          <h1>Presoterapia con <em>Drenaje Linfático</em></h1>
          <div className={styles['service-tagline']}>Piernas ligeras. Líquidos eliminados. Cuerpo activado.</div>

          <p className={styles['hero-desc']}>
            Compresión neumática secuencial con 24 cámaras independientes que reproduce el drenaje linfático manual de forma mecánica y controlada. Elimina la retención de líquidos, activa la circulación venosa y proporciona una sensación inmediata de ligereza desde la primera sesión.
          </p>

          <div className={styles['vs-block']}>
            <div className={styles['vs-cell']}>
              <div className={styles['vs-cell-label']}>Drenaje manual</div>
              <div className={styles['vs-cell-value']}>Variable, fatiga terapeuta</div>
            </div>
            <div className={`${styles['vs-cell']} ${styles.active}`}>
              <div className={styles['vs-cell-label']}>Presoterapia ✦</div>
              <div className={styles['vs-cell-value']}>Constante, 24 cámaras</div>
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Sin recuperación</strong>
              Sesión completamente relajante — puedes leer o usar el móvil. Se recomienda un paseo de 10–15 min al terminar para potenciar el drenaje activado.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>30–45 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.ok}`}>Ninguna</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>10–15 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>40€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Ligereza inmediata</span>
            <span className={styles.tag}>Efecto detox</span>
            <span className={styles.tag}>Post-operatorio</span>
            <span className={`${styles.tag} ${styles.gold}`}>Bono 10 desde 300€</span>
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
            <h2 className={styles['section-title']}>Lo que el drenaje secuencial<br /><em>activa en tu cuerpo</em></h2>
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

          {/* PERFILES DE USO */}
          <div className={`${styles['usos-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Para quién es</div>
            <h2 className={styles['section-title']}>Tres perfiles,<br /><em>un mismo tratamiento</em></h2>

            <div className={`${styles['usos-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['uso-card']}>
                <div className={`${styles['uso-perfil']} ${styles['perfil-1']}`}>Perfil estético</div>
                <h3>Retención y celulitis</h3>
                <p>Para quienes buscan reducir la retención de líquidos, combatir la celulitis edematosa y mejorar la silueta de piernas y abdomen de forma progresiva y confortable.</p>
              </div>
              <div className={styles['uso-card']}>
                <div className={`${styles['uso-perfil']} ${styles['perfil-2']}`}>Perfil post-quirúrgico</div>
                <h3>Recuperación acelerada</h3>
                <p>Protocolo esencial tras liposucción, abdominoplastia o cirugías con edema. Reduce la inflamación, los hematomas y acelera significativamente el tiempo de recuperación.</p>
              </div>
              <div className={styles['uso-card']}>
                <div className={`${styles['uso-perfil']} ${styles['perfil-3']}`}>Perfil deportivo</div>
                <h3>Alto rendimiento</h3>
                <p>Recuperación muscular post-competición o post-entreno intenso. Utilizada por deportistas profesionales para reducir la fatiga y optimizar los ciclos de entrenamiento.</p>
              </div>
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>7 fases</em> del tratamiento</h2>
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
            <h2 className={styles['section-title']}>Ligereza desde el primer día,<br /><em>reducción progresiva</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 1</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Ligereza inmediata</h3>
                <p>Sensación de alivio y ligereza visible desde la primera sesión. Reducción inmediata de la sensación de piernas cansadas.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 3–4</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>Reducción medible</h3>
                <p>Reducción de perímetro medible en piernas. Mejora visible de edemas y menor retención al final del día.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Protocolo completo</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Hasta –3 cm</h3>
                <p>Reducción de hasta 2–3 cm en el perímetro de piernas. Mantenimiento semanal o quincenal para preservar los resultados.</p>
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
              <h4>Contraindicaciones — consultar antes</h4>
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
          <h2>Primera sesión<br /><em>desde 40€</em></h2>
          <p>Sin consulta previa necesaria para la mayoría de casos. Bono de 10 sesiones desde 300€ con descuento sobre precio unitario.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
