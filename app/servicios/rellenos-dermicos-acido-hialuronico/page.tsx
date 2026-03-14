'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function RellenosDermicosPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: 'Volumen restaurado', desc: 'El envejecimiento conlleva pérdida de grasa facial, hueso y tejido blando. Los rellenos reposicionan y restauran ese volumen de forma precisa y controlada.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Labios naturales', desc: 'Definición, proyección o hidratación labial con respeto absoluto a las proporciones del tercio inferior. Nunca el efecto salchicha — siempre la versión mejorada de tus labios.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: 'Jawline definido', desc: 'Perfilado de mandíbula y mentón para el efecto V-shape. La inyección estratégica en la línea mandibular redefine el contorno sin cirugía con resultado altamente visible.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, title: 'Ojeras corregidas', desc: 'La corrección del valle de lágrimas es una de las técnicas más complejas y transformadoras. Elimina el aspecto de cansancio crónico de forma inmediata.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: 'Pómulos proyectados', desc: 'La proyección de los pómulos eleva visualmente todo el tercio medio del rostro, reduciendo el aspecto de cansancio y rejuveneciendo sin necesidad de lifting.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: 'Reversible', desc: 'Si el resultado no satisface o cambian los deseos del paciente, la hialuronidasa disuelve el relleno completamente. La única alternativa inyectable 100% reversible.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Resultado inmediato', desc: 'El resultado es visible inmediatamente tras la sesión. El aspecto definitivo se valora a los 7–15 días, cuando la inflamación inicial ha desaparecido completamente.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Microcánula avanzada', desc: 'La técnica de microcánula minimiza el trauma tisular, reduce significativamente los hematomas y permite tratar zonas de difícil acceso con mayor seguridad.' },
  ];

  const zones = [
    { area: 'Tercio inferior', title: 'Labios', desc: 'Definición del contorno, hidratación, proyección o corrección de asimetría. Enfoque siempre proporcional al tercio inferior del rostro.', duration: '6–12 meses' },
    { area: 'Periocular', title: 'Ojeras — Valle de lágrimas', desc: 'Corrección del hundimiento periocular que genera sombras y aspecto de cansancio. Técnica de alta complejidad con resultado muy transformador.', duration: '12–18 meses' },
    { area: 'Tercio medio', title: 'Pómulos y mejillas', desc: 'Proyección y elevación del tercio medio para recuperar el volumen perdido. Efecto lifting indirecto al elevar las estructuras de soporte del rostro.', duration: '12–18 meses' },
    { area: 'Surcos', title: 'Nasogenianos y marioneta', desc: 'Atenuación de los surcos que envejecen el rostro. La inyección directa o el tratamiento de la causa (pérdida de volumen en mejillas) según cada caso.', duration: '9–12 meses' },
    { area: 'Tercio inferior', title: 'Mandíbula y mentón', desc: 'Perfilado del jawline y proyección del mentón para el efecto V-shape. Tratamiento de alta demanda que redefine el óvalo facial con resultado muy visible.', duration: '12–18 meses' },
    { area: 'Armonización global', title: 'Facial completa', desc: 'Protocolo de armonización facial completa basado en vectores estéticos y proporciones áureas. Tratamiento de múltiples zonas en una o varias sesiones.', duration: 'Consultar' },
  ];

  const steps = [
    { title: 'Análisis facial 3D y planificación', desc: 'Análisis detallado de proporciones, pérdida de volumen y vectores estéticos. La planificación previa determina qué zonas tratar, en qué orden y con qué cantidad de producto.' },
    { title: 'Fotografías en múltiples ángulos', desc: 'Registro fotográfico frontal, lateral y a 45° antes de cualquier inyección. Documentación esencial para evaluar el resultado y planificar retoques futuros.' },
    { title: 'Anestesia tópica', desc: 'Aplicación de crema anestésica durante 20–30 minutos en las zonas a tratar. Los productos premium incluyen lidocaína incorporada — la sesión es muy bien tolerada.' },
    { title: 'Limpieza y desinfección exhaustiva', desc: 'Protocolo estéril riguroso. La zona periocular y los labios requieren una preparación especialmente cuidadosa por su vascularización.' },
    { title: 'Inyección con microcánula o aguja ultrafina', desc: 'La elección de técnica depende de la zona. La microcánula minimiza hematomas y permite trabajar con mayor seguridad en zonas de riesgo vascular.' },
    { title: 'Modelado y distribución', desc: 'Masaje y modelado del producto para garantizar una distribución homogénea y un resultado natural. Verificación de simetría en tiempo real durante el procedimiento.' },
    { title: 'Hielo y árnica para minimizar inflamación', desc: 'Aplicación de frío local y árnica tópica para reducir la inflamación y los posibles hematomas inmediatos. La inflamación leve es normal durante 24–48 horas.' },
    { title: 'Revisión a los 15 días', desc: 'Cita de control una vez resuelta la inflamación inicial para evaluar el resultado definitivo. Si es necesario un pequeño ajuste, se realiza en esta visita sin coste adicional.' },
  ];

  const indications = [
    'Pérdida de volumen facial por edad', 'Surcos nasogenianos marcados', 'Labios finos o asimétricos',
    'Ojeras hundidas tipo valle de lágrimas', 'Pómulos planos sin definición', 'Mentón retraído o poco proyectado',
    'Perfilado mandibular (V-shape)', 'Armonización facial completa', 'Líneas de marioneta pronunciadas',
  ];

  const contra = [
    'Embarazo y lactancia', 'Alergia al ácido hialurónico', 'Infecciones activas en zona',
    'Enfermedades autoinmunes activas', 'Tendencia a queloides', 'Tratamiento anticoagulante',
  ];

  const checkIcon = (size = 14) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width={size} height={size}><polyline points="20 6 9 17 4 12"/></svg>
  );

  const xIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  );

  const clockIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <img src="/images/services/rellenos-dermicos-acido-hialuronico.webp" alt="Rellenos Dérmicos — Estetia" />

          <div className={styles['filler-badge']}>
            <div className={styles['filler-badge-label']}>Marcas utilizadas</div>
            <div className={styles['brand-list']}>
              <div className={styles['brand-item']}><div className={styles['brand-dot']}></div>Juvederm®</div>
              <div className={styles['brand-item']}><div className={styles['brand-dot']}></div>Restylane®</div>
              <div className={styles['brand-item']}><div className={styles['brand-dot']}></div>Teosyal®</div>
            </div>
            <div className={styles['filler-divider']}></div>
            <div className={styles['filler-reversible']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11"><polyline points="20 6 9 17 4 12"/></svg>
              Reversible con hialuronidasa
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 13 — Armonización Facial</div>

          <h1>Rellenos Dérmicos con <em>Ácido Hialurónico</em></h1>
          <div className={styles['service-tagline']}>Volumen restaurado. Proporciones respetadas.</div>

          <p className={styles['hero-desc']}>
            Ácido hialurónico reticulado de alta densidad que restaura volúmenes perdidos, define contornos y corrige arrugas profundas con resultado inmediato. Marcas premium, técnicas avanzadas de microcánula y un enfoque basado en proporciones áureas que busca siempre el resultado más natural posible.
          </p>

          <div className={styles['vs-block']}>
            <div className={styles['vs-cell']}>
              <div className={styles['vs-cell-label']}>Bioestimulación</div>
              <div className={styles['vs-cell-value']}>Mejora calidad</div>
            </div>
            <div className={`${styles['vs-cell']} ${styles.active}`}>
              <div className={styles['vs-cell-label']}>Relleno dérmico ✦</div>
              <div className={styles['vs-cell-value']}>Restaura volumen</div>
            </div>
          </div>

          <div className={styles['philosophy-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <div className={styles['philosophy-notice-text']}>
              <strong>Enfoque Estetia — natural siempre</strong>
              Rechazamos los excesos que generan apariencias artificiales. Nuestro objetivo es respetar y realzar la identidad del paciente, no transformarla. Si el resultado no puede ser natural, no lo hacemos.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>30–60 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.warn}`}>3–7 días</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración efecto</div>
              <div className={styles['m-value']}>9–18 meses</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>350€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Resultado inmediato</span>
            <span className={styles.tag}>Reversible</span>
            <span className={styles.tag}>Microcánula</span>
            <span className={`${styles.tag} ${styles.gold}`}>Proporciones áureas</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#zonas" className={styles['btn-ghost']}>Ver zonas de tratamiento</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="zonas">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que los rellenos<br /><em>restauran y definen</em></h2>
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

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Zonas de tratamiento</div>
            <h2 className={styles['section-title']}>Cada zona,<br /><em>un protocolo específico</em></h2>

            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {zones.map((z, i) => (
                <div key={i} className={styles['zone-card']}>
                  <div className={styles['zone-area']}>{z.area}</div>
                  <h3>{z.title}</h3>
                  <p>{z.desc}</p>
                  <div className={styles['zone-duration']}>{clockIcon}{z.duration}</div>
                </div>
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
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución del resultado</div>
            <h2 className={styles['section-title']}>Inmediato hoy,<br /><em>definitivo en 15 días</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Día 1</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Resultado visible</h3>
                <p>El cambio es inmediato tras la sesión. La inflamación leve de las primeras 24–48 horas puede modificar ligeramente el aspecto inicial.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Día 7–15</div>
                <div className={styles['milestone-num']}>15</div>
                <h3>Resultado definitivo</h3>
                <p>Una vez resuelta la inflamación, el resultado definitivo es visible. Momento de la revisión de control y posibles ajustes.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>9–18 meses</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Retoque o mantenimiento</h3>
                <p>La duración varía según la zona y el metabolismo del paciente. Una sesión de mantenimiento preserva y potencia el resultado inicial.</p>
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
          <p>Analizamos tus proporciones faciales, definimos las zonas prioritarias y diseñamos el plan de armonización antes de hablar de presupuesto. El resultado debe ser natural — siempre.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
