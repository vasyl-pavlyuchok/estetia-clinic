'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function MesoterapiaCapilarPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: '–80% de caída', desc: 'Reducción de hasta el 80% de la caída del cabello con el protocolo completo de 10–12 sesiones. El resultado más buscado y el que los pacientes perciben primero.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: 'Crecimiento nuevo', desc: 'Estimulación de folículos en fase telógena (reposo) para reactivar su ciclo de crecimiento. Cabello nuevo visible a los 3–4 meses de tratamiento.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Mayor densidad', desc: 'Aumento del diámetro y densidad de cada tallo capilar. El cabello existente se vuelve más grueso, fuerte y resistente a la rotura.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: 'Revascularización', desc: 'Los vasodilatadores del cóctel (minoxidil, adenosina) mejoran la microcirculación del cuero cabelludo, garantizando el aporte de nutrientes al folículo.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: 'Calidad del cabello', desc: 'Mejora del brillo, suavidad y manejabilidad gracias a la hidratación profunda del folículo con ácido hialurónico y los nutrientes del cóctel.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Pre y post-trasplante', desc: 'Preparación óptima del cuero cabelludo antes del trasplante capilar y aceleración de la recuperación post-trasplante con maximización del prendimiento.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Complemento oral', desc: 'Potencia y multiplica los resultados de tratamientos orales como finasterida o dutasterida. La combinación oral + mesoterapia es el estándar de tratamiento médico actual.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: 'Sin recuperación', desc: 'Pequeños puntos de sangrado que desaparecen en horas. Posible sensibilidad leve 24 horas. Actividad normal inmediata — solo evitar lavar el cabello 12–24h.' },
  ];

  const activos = [
    { name: 'Vasodilatador', title: 'Minoxidil / Adenosina', desc: 'Activan la microcirculación del cuero cabelludo y prolongan la fase anágena (crecimiento) del folículo. Base de cualquier protocolo antiálgena eficaz.', tag: 'Fase anágena' },
    { name: 'Vitaminas', title: 'Biotina · Complejo B · Zinc', desc: 'Nutrientes esenciales para la síntesis de queratina y el metabolismo folicular. Las deficiencias de estos micronutrientes son causa frecuente de caída difusa.', tag: 'Queratina' },
    { name: 'Regenerador', title: 'Factores de crecimiento', desc: 'FGF, EGF y VEGF activan la proliferación de células madre foliculares y la vascularización perifolicular. Actores clave en el protocolo para alopecias establecidas.', tag: 'Células madre' },
    { name: 'Hidratación', title: 'Ácido Hialurónico', desc: 'Hidratación profunda del cuero cabelludo y mejora del microambiente folicular. Facilita la absorción de los demás activos y mejora la elasticidad del cuero cabelludo.', tag: 'Microambiente' },
    { name: 'Biomiméticos', title: 'Péptidos específicos', desc: 'Péptidos biomimétricos que señalizan las células papilares dérmicas para mantener y prolongar el ciclo de crecimiento folicular.', tag: 'Señalización' },
    { name: 'Antioxidante', title: 'Vitamina C · Glutatión', desc: 'Neutralizan el estrés oxidativo del cuero cabelludo, causa frecuente de miniaturización folicular prematura. Especialmente indicados en pacientes fumadores.', tag: 'Anti-miniaturización' },
  ];

  const alopecias = [
    { type: 'Androgenética', title: 'Calvicie común', desc: 'La más frecuente, de origen hormonal y genético. La mesoterapia es el complemento ideal al tratamiento oral en grados I–IV de Hamilton-Norwood. Frena la miniaturización folicular progresiva.', tag: 'Grados I–IV', tagStyle: {} },
    { type: 'Efluvio Telógeno', title: 'Caída difusa', desc: 'Caída masiva temporal por estrés, post-parto, enfermedad o deficiencias nutricionales. La mesoterapia acelera la recuperación y previene que se cronifique. Respuesta muy rápida.', tag: 'Respuesta rápida', tagStyle: { color: 'var(--gold-deep)', background: 'var(--gold-dim)', borderColor: 'var(--gold-border)' } },
    { type: 'Areata', title: 'Caída en placas', desc: 'De origen autoinmune. La mesoterapia actúa en fases iniciales y estabilizadas para estimular los folículos en las zonas afectadas. Requiere protocolo específico y seguimiento médico estrecho.', tag: 'Fases iniciales', tagStyle: { color: '#4a9d8f', background: 'rgba(74,157,143,0.07)', borderColor: 'rgba(74,157,143,0.2)' } },
  ];

  const steps = [
    { title: 'Tricoscopia digital', desc: 'Evaluación del cuero cabelludo con cámara tricoscópica de alta resolución. Diagnóstico del tipo de alopecia, grado de miniaturización folicular y densidad capilar de base.' },
    { title: 'Selección del cóctel personalizado', desc: 'Diseño de la fórmula específica basada en el diagnóstico tricoscópico. Los activos y concentraciones se adaptan al tipo de alopecia, estadio y perfil del paciente.' },
    { title: 'Limpieza del cuero cabelludo', desc: 'Lavado con champú desengrasante específico. El cuero cabelludo limpio garantiza la penetración óptima de los activos y reduce el riesgo de foliculitis post-inyección.' },
    { title: 'Anestesia tópica o frío local', desc: 'Aplicación opcional de crema anestésica o crioterapia local para pacientes con mayor sensibilidad. La mayoría tolera el tratamiento sin anestesia por el calibre fino de las agujas.' },
    { title: 'Microinyecciones en nappage', desc: 'Inyecciones superficiales sistemáticas en las zonas de mayor afectación siguiendo un patrón de nappage. Cada punto introduce una mínima cantidad de cóctel directamente en la dermis del cuero cabelludo.' },
    { title: 'Masaje suave del cuero cabelludo', desc: 'Masaje circular suave para homogeneizar la distribución del cóctel y potenciar la absorción de los activos. Activa además la microcirculación local.' },
    { title: 'Aplicación de loción o spray fortificante', desc: 'Producto específico post-tratamiento que complementa y prolonga la acción del cóctel inyectado. Se indica el uso domiciliario entre sesiones.' },
    { title: 'Recomendaciones post-sesión', desc: 'No lavar el cabello 12–24 horas. Evitar productos químicos (tintes, permanentes) 48 horas. Hidratación abundante para potenciar la absorción de los activos inyectados.' },
  ];

  const indications = [
    'Alopecia androgenética I–IV', 'Caída difusa post-parto',
    'Efluvio telógeno estacional', 'Alopecia areata (fases iniciales)',
    'Cabello fino y quebradizo', 'Caída por estrés o déficit nutricional',
    'Pre/post-trasplante capilar', 'Prevención genética',
  ];

  const contra = [
    'Embarazo y lactancia', 'Infecciones del cuero cabelludo',
    'Psoriasis severa activa', 'Tratamiento anticoagulante',
    'Tendencia a queloides', 'Alergia a componentes del cóctel',
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
          <img src="/images/services/mesoterapia-capilar-regenerativa.webp" alt="Mesoterapia Capilar — Estetia" />

          <div className={styles['cap-badge']}>
            <div className={styles['cap-badge-label']}>Reducción de caída</div>
            <div className={styles['cap-stat']}>
              <span className={styles['cap-stat-num']}>80</span>
              <span className={styles['cap-stat-unit']}>%</span>
            </div>
            <div className={styles['cap-stat-sub']}>con protocolo completo</div>
            <div className={styles['cap-divider']}></div>
            <div className={styles['cap-bono']}>Bono 10 — desde 750€</div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 16 — Regeneración Capilar</div>

          <h1>Mesoterapia Capilar <em>Regenerativa</em></h1>
          <div className={styles['service-tagline']}>Folículos nutridos. Caída frenada. Cabello nuevo.</div>

          <p className={styles['hero-desc']}>
            Microinyecciones intradérmicas en el cuero cabelludo de un cóctel personalizado con vitaminas, factores de crecimiento, vasodilatadores y péptidos biomiméticos. Nutre directamente el folículo piloso, frena la caída y estimula el crecimiento de cabello nuevo más fuerte. Hasta un 80% de reducción de caída con protocolo completo.
          </p>

          <div className={styles['custom-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <div className={styles['custom-notice-text']}>
              <strong>Cóctel 100% personalizado</strong>
              La fórmula se diseña tras tricoscopia digital: el tipo de alopecia, estadio y características del cuero cabelludo determinan los activos y concentraciones específicos de cada paciente.
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Post-sesión</strong>
              No lavar el cabello 12–24 horas tras el tratamiento. Evitar productos químicos agresivos 48 horas. Sin restricciones de actividad.
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
              <div className={styles['m-value']}>10–12 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>90€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Sin cirugía</span>
            <span className={styles.tag}>Fórmula personalizada</span>
            <span className={styles.tag}>Tricoscopia incluida</span>
            <span className={`${styles.tag} ${styles.gold}`}>–80% caída</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#activos" className={styles['btn-ghost']}>Ver activos del cóctel</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="activos">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que la mesoterapia<br /><em>activa en tu cuero cabelludo</em></h2>
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

          {/* ACTIVOS */}
          <div className={`${styles['activos-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Composición</div>
            <h2 className={styles['section-title']}>Los activos de<br /><em>tu cóctel capilar</em></h2>

            <div className={`${styles['activos-grid']} ${styles['reveal-stagger']}`}>
              {activos.map((a, i) => (
                <div key={i} className={styles['activo-card']}>
                  <div className={styles['activo-name']}>{a.name}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className={styles['activo-tag']}>{a.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TIPOS DE ALOPECIA */}
          <div className={`${styles['alopecia-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Tipos de alopecia tratados</div>
            <h2 className={styles['section-title']}>Eficaz en los tres<br /><em>patrones más frecuentes</em></h2>

            <div className={`${styles['alopecia-grid']} ${styles['reveal-stagger']}`}>
              {alopecias.map((a, i) => (
                <div key={i} className={`${styles['alop-card']} ${styles[`alop-${i + 1}`]}`}>
                  <div className={styles['alop-type']}>{a.type}</div>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className={styles['alop-eficacia']} style={a.tagStyle}>{a.tag}</span>
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
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Frenado primero,<br /><em>crecimiento después</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 4–5</div>
                <div className={styles['milestone-num']}>04</div>
                <h3>Caída frenada</h3>
                <p>Reducción visible de la caída. Menos cabellos en el cepillo, en la ducha y en la almohada. La fase de frenado es el primer resultado perceptible.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 3–4</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>Crecimiento nuevo</h3>
                <p>Aparición de cabellos nuevos ("pelitos" cortos en zonas afectadas). El folículo reactivado empieza su nuevo ciclo de crecimiento anágeno.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 6</div>
                <div className={styles['milestone-num']}>06</div>
                <h3>Resultado máximo</h3>
                <p>Mayor densidad, grosor y calidad del cabello. Los cabellos nuevos han crecido lo suficiente para ser visibles y contribuir a la densidad total.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mantenimiento</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Sesión mensual</h3>
                <p>Mantenimiento mensual para preservar los resultados. La alopecia androgenética es crónica — el mantenimiento es parte del protocolo a largo plazo.</p>
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
          <h2>Primera consulta<br /><em>con tricoscopia incluida</em></h2>
          <p>Diagnóstico digital del cuero cabelludo, clasificación del tipo de alopecia y diseño del cóctel personalizado antes de hablar de presupuesto. Bono de 10 sesiones desde 750€.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
