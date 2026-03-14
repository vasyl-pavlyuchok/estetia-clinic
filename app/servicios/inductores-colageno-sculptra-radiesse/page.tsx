'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function InductoresColageno() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: 'Hasta 3 años de duración', desc: 'El colágeno estimulado es tuyo — no es una sustancia inyectada que se reabsorbe. Por eso la duración supera ampliamente a cualquier relleno convencional.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: 'Sin efecto "relleno"', desc: 'El resultado es indistinguible de un rejuvenecimiento natural. Nadie sabe que te has hecho algo — simplemente se nota que estás mejor.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Volumización global', desc: 'Restaura el volumen facial de forma homogénea y difusa. Ideal para pacientes con pérdida generalizada, donde los rellenos puntuales no son suficientes.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Calidad de piel mejorada', desc: 'El colágeno nuevo mejora el grosor, la textura y la firmeza de la piel de forma global. La piel se convierte en una versión más joven y estructurada de sí misma.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: 'Manos rejuvenecidas', desc: 'Tratamiento muy eficaz para manos con piel fina, tendones visibles y venas marcadas. La neocolagénesis engrosa la dermis de forma progresiva y duradera.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Complemento a hilos tensores', desc: 'La combinación de hilos tensores + inductores de colágeno es sinérgica: los hilos dan estructura y los inductores mejoran la calidad del tejido entre sesiones.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Opción preferida en Estetia', desc: 'Para pacientes que buscan resultados duraderos sin el aspecto volumizado típico de los rellenos, los inductores son nuestra primera recomendación en la consulta.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: 'Reafirmación global', desc: 'La neocolagénesis reafirma la piel de forma homogénea y difusa. El efecto lifting es sutil pero acumulativo — más visible cuanto más se avanza en el protocolo.' },
  ];

  const steps = [
    { title: 'Consulta exhaustiva y planificación', desc: 'Evaluación de la pérdida de volumen, calidad de piel y objetivos del paciente. Selección del producto más adecuado (Sculptra vs Radiesse) y planificación del número de sesiones.', tag: null },
    { title: 'Reconstitución del producto', desc: 'Sculptra requiere reconstitución previa con solución diluyente específica. La dilución correcta es fundamental para el resultado y para prevenir complicaciones.', tag: null },
    { title: 'Anestesia tópica o bloqueo nervioso', desc: 'Según la zona y el producto, se aplica crema anestésica o bloqueo nervioso regional para garantizar máxima comodidad durante las inyecciones profundas.', tag: null },
    { title: 'Marcación de puntos estratégicos', desc: 'Marcación precisa de los puntos de inyección y los vectores de distribución. La planificación tridimensional es esencial para un resultado homogéneo y natural.', tag: null },
    { title: 'Inyecciones profundas', desc: 'Técnica supraperióstica o subdérmica según la zona y el producto. Las inyecciones son más profundas que con rellenos convencionales para una distribución óptima.', tag: null },
    { title: 'Masaje vigoroso post-inyección', desc: 'Masaje de 5 minutos en consulta inmediatamente tras la inyección. Distribuye el producto de forma homogénea y previene la formación de nódulos.', tag: 'Regla 5-5-5 — ver paso 07' },
    { title: 'Protocolo de masaje domiciliario', desc: '5 minutos de masaje circular, 5 veces al día, durante 5 días consecutivos. Esta regla es imprescindible para evitar nódulos y garantizar la distribución correcta del producto.', tag: 'Obligatorio — no negociable' },
    { title: 'Seguimiento fotográfico mensual', desc: 'Control fotográfico mensual para documentar la evolución de la neocolagénesis. El resultado se evalúa a los 3–6 meses cuando el colágeno nuevo ha alcanzado su madurez.', tag: null },
  ];

  const indications = [
    'Pérdida de volumen facial generalizada', 'Envejecimiento avanzado con piel fina',
    'Mejillas hundidas y sienes deprimidas', 'Reafirmación facial global',
    'Resultados duraderos sin aspecto relleno', 'Complemento a hilos tensores PDO',
    'Manos con tendones visibles', 'Sculptra body (glúteos)',
    'Pacientes con lipoatrofia facial',
  ];

  const contra = [
    'Embarazo y lactancia', 'Infecciones activas en zona',
    'Enfermedades autoinmunes activas', 'Tendencia a queloides',
    'Alergia a lidocaína (según producto)', 'Paciente que no puede hacer el masaje',
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
          <img src="/images/services/inductores-de-colageno-sculptra-radiesse.webp" alt="Inductores de Colágeno — Estetia" />

          <div className={styles['inductor-badge']}>
            <div className={styles['inductor-badge-label']}>Duración del resultado</div>
            <div className={styles['inductor-stat']}>
              <span className={styles['inductor-stat-num']}>3</span>
              <span className={styles['inductor-stat-unit']}>años</span>
            </div>
            <div className={styles['inductor-stat-sub']}>colágeno propio generado</div>
            <div className={styles['inductor-divider']}></div>
            <div className={styles['product-list']}>
              <div className={styles['product-item']}><div className={styles['product-dot']}></div>Sculptra®</div>
              <div className={styles['product-item']}><div className={styles['product-dot']}></div>Radiesse®</div>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 14 — Bioestimulación Avanzada</div>

          <h1>Inductores de <em>Colágeno</em></h1>
          <div className={styles['service-tagline']}>Tu propio colágeno. Durante años.</div>

          <p className={styles['hero-desc']}>
            Ácido poli-L-láctico (Sculptra®) o hidroxiapatita cálcica (Radiesse®) que actúan como andamiaje biológico, estimulando tus fibroblastos para producir colágeno propio durante meses. Sin el efecto "relleno" visible — solo un rejuvenecimiento progresivo y completamente natural con duración de hasta 3 años.
          </p>

          <div className={styles['vs-block']}>
            <div className={styles['vs-cell']}>
              <div className={styles['vs-cell-label']}>Relleno AH</div>
              <div className={styles['vs-cell-value']}>Añade volumen</div>
            </div>
            <div className={`${styles['vs-cell']} ${styles.active}`}>
              <div className={styles['vs-cell-label']}>Inductor ✦</div>
              <div className={styles['vs-cell-value']}>Genera tu colágeno</div>
            </div>
          </div>

          <div className={styles['massage-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div className={styles['massage-notice-text']}>
              <strong>Regla 5-5-5 obligatoria</strong>
              5 minutos de masaje en consulta + 5 minutos 5 veces al día durante 5 días. Sin el masaje correcto pueden formarse nódulos. Es parte del protocolo, no opcional.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>45–60 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.warn}`}>2–5 días</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Resultado</div>
              <div className={styles['m-value']}>Mes 3–6</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>400€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Colágeno propio</span>
            <span className={styles.tag}>Progresivo</span>
            <span className={styles.tag}>Sin efecto relleno</span>
            <span className={`${styles.tag} ${styles.gold}`}>Hasta 3 años</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#productos" className={styles['btn-ghost']}>Ver Sculptra vs Radiesse</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="productos">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que tu propio colágeno<br /><em>puede lograr</em></h2>
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

          {/* DOS PRODUCTOS */}
          <div className={`${styles['products-section']} ${styles.reveal}`} id="protocolo">
            <div className={styles.eyebrow}>Los dos productos</div>
            <h2 className={styles['section-title']}>Sculptra® o Radiesse®:<br /><em>¿cuál es el tuyo?</em></h2>

            <div className={`${styles['products-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['product-card']}>
                <div className={styles['pc-label']}>Bioestimulador principal</div>
                <div className={styles['pc-molecule']}>Ácido poli-L-láctico (PLLA)</div>
                <h3>Sculptra®</h3>
                <p>Estimula la producción gradual de colágeno durante 3–6 meses. Ideal para volumización global del rostro, lipoatrofia y pérdida de volumen generalizada. Requiere 2–3 sesiones separadas 4–6 semanas. La regla 5-5-5 del masaje es especialmente crítica con Sculptra.</p>
                <div className={styles['pc-duration']}>18–36 meses de duración</div>
                <div className={styles['pc-sessions']}>2–3 sesiones iniciales</div>
                <div className={styles['pc-price']}>Desde 450€ /vial</div>
              </div>
              <div className={`${styles['product-card']} ${styles['gold-card']}`}>
                <div className={styles['pc-label']}>Bioestimulador inmediato</div>
                <div className={styles['pc-molecule']}>Hidroxiapatita cálcica (CaHA)</div>
                <h3>Radiesse®</h3>
                <p>Doble acción: volumización inmediata + estimulación de colágeno a largo plazo. La microesfera de CaHA actúa como andamiaje y se reabsorbe gradualmente dejando el colágeno nuevo. Ideal para manos, mandíbula y zonas que se benefician del efecto volumizador inmediato.</p>
                <div className={styles['pc-duration']}>12–18 meses de duración</div>
                <div className={styles['pc-sessions']}>1–2 sesiones</div>
                <div className={styles['pc-price']}>Desde 400€ /jeringa</div>
              </div>
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
                  {s.tag && <span className={styles['ps-tag']}>{s.tag}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Progresivo, sutil<br /><em>e inconfundiblemente natural</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 1</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Activación inicial</h3>
                <p>El producto activa los fibroblastos. La inflamación inicial ha resuelto y empieza la producción de colágeno. Mejora sutil perceptible.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 3</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>Mejora visible</h3>
                <p>La neocolagénesis está en plena actividad. Mejora visible de volumen, firmeza y calidad de piel. Momento del control fotográfico de evaluación.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 6</div>
                <div className={styles['milestone-num']}>06</div>
                <h3>Resultado máximo</h3>
                <p>El colágeno nuevo ha madurado completamente. Resultado máximo visible y natural. Evaluación para posible sesión de refuerzo.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>18–36 meses</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Mantenimiento</h3>
                <p>El colágeno se degrada naturalmente con el tiempo. Una sesión de refuerzo mantiene y potencia el resultado a largo plazo.</p>
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
          <p>Evaluamos si Sculptra o Radiesse es la mejor opción para tu caso, planificamos el número de sesiones y te explicamos el protocolo de masaje antes de hablar de presupuesto.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
