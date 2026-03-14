'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function PRPCapilarPage() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: '+15–20% densidad', text: 'Aumento medible de la densidad capilar a los 6 meses. Resultado documentado en tricoscopia con comparativa objetiva antes y después del protocolo.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: 'Cero riesgo de rechazo', text: 'El PRP se obtiene de tu propia sangre. Biocompatibilidad total — imposible que el cuerpo rechace o sea alérgico a sus propias proteínas plasmáticas.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>, title: 'Angiogénesis activada', text: 'El VEGF estimula la formación de nuevos capilares perifoliculares. Mejor circulación = mejor nutrición del folículo = mayor supervivencia y crecimiento.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Fase anágena prolongada', text: 'Los factores de crecimiento extienden la fase de crecimiento activo del folículo, reduciendo la transición prematura a fase telógena (caída).' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Trasplante potenciado', text: 'El PRP pre-trasplante mejora la supervivencia de los injertos y acelera su integración. El PRP post-trasplante optimiza el prendimiento y reduce la caída inicial.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: 'Sinergia con mesoterapia', text: 'La combinación PRP + mesoterapia es el protocolo de mayor eficacia disponible. Los factores de crecimiento del PRP potencian la absorción de los activos de la mesoterapia.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: 'Folículos reactivados', text: 'Los folículos en fase telógena prolongada (dormidos) pueden reactivarse con el estímulo de los factores de crecimiento, generando cabello nuevo donde ya no había.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Gold standard médico', text: 'El PRP capilar es el tratamiento de referencia en medicina capilar regenerativa. Utilizado en las principales clínicas y hospitales de referencia a nivel internacional.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: 'Mayor grosor capilar', text: 'Los folículos miniaturizados recuperan su diámetro original. El cabello existente se vuelve más grueso, fuerte y resistente — mejora visible al tacto y a la vista.' },
  ];

  const factors = [
    { abbr: 'PDGF', name: 'Factor derivado de plaquetas', title: 'Proliferación celular', text: 'Activa la división de células papilares dérmicas y fibroblastos perifoliculares. Clave para la regeneración del nicho folicular.' },
    { abbr: 'VEGF', name: 'Factor de crecimiento vascular', title: 'Angiogénesis', text: 'Estimula la formación de nuevos capilares alrededor del folículo. Más circulación = más nutrientes = folículo más activo y resistente.' },
    { abbr: 'EGF', name: 'Factor de crecimiento epidérmico', title: 'Regeneración epitelial', text: 'Promueve la proliferación de células epiteliales del folículo y mejora la calidad del cuero cabelludo como soporte del folículo.' },
    { abbr: 'TGF-β', name: 'Factor transformador beta', title: 'Modulación del ciclo', text: 'Regula la transición entre fases del ciclo capilar, prolongando la fase anágena y retrasando la transición a catágena y telógena.' },
  ];

  const procSteps = [
    { num: '01', title: 'Extracción venosa', text: 'Extracción de 10–20 ml de sangre venosa del paciente. Proceso idéntico a cualquier análisis de sangre rutinario. Rápido e indoloro.', tag: '10–20 ml · 5 min' },
    { num: '02', title: 'Centrifugación certificada', text: 'Centrifugación en equipo médico certificado a 1.500–3.000 rpm durante 8–15 minutos. Separa el plasma rico en plaquetas de los demás componentes sanguíneos.', tag: '1500–3000 rpm' },
    { num: '03', title: 'Obtención del PRP', text: 'Extracción del plasma concentrado en plaquetas mediante jeringa estéril. La concentración de plaquetas es 3–5 veces superior a la sangre normal — clave para la eficacia del tratamiento.', tag: '3–5× concentración' },
    { num: '04', title: 'Infiltración inmediata', text: 'El PRP debe aplicarse inmediatamente tras su obtención. Las plaquetas se activan al contacto con el tejido y liberan sus factores de crecimiento in situ.', tag: 'Uso inmediato' },
  ];

  const protocolSteps = [
    { num: '01', title: 'Consulta tricológica y tricoscopia', text: 'Evaluación del cuero cabelludo y diagnóstico del tipo y grado de alopecia. La tricoscopia documenta la densidad de base para comparar resultados objetivamente.' },
    { num: '02', title: 'Extracción de sangre venosa', text: 'Extracción de 10–20 ml de sangre del paciente. El volumen depende del protocolo y las zonas a tratar. Proceso rápido y prácticamente indoloro.' },
    { num: '03', title: 'Centrifugación en equipo certificado', text: 'La muestra se procesa en centrifugadora médica de doble centrifugación para maximizar la concentración plaquetaria. El protocolo de centrifugación determina la calidad del PRP.' },
    { num: '04', title: 'Separación y obtención del plasma', text: 'Extracción del plasma concentrado en plaquetas mediante jeringa estéril. Control de calidad visual del PRP antes de su aplicación.' },
    { num: '05', title: 'Activación del PRP', text: 'Activación del PRP según protocolo médico para estimular la degranulación plaquetaria y la liberación de factores de crecimiento.', tag: 'Protocolo específico por caso' },
    { num: '06', title: 'Anestesia tópica', text: 'Aplicación de crema anestésica en las zonas de infiltración. Tiempo de espera de 20 minutos para garantizar máxima comodidad durante las inyecciones.' },
    { num: '07', title: 'Infiltración mediante microinyecciones', text: 'Inyección del PRP en el cuero cabelludo mediante técnica de nappage o microinyecciones en los puntos estratégicos según el mapa de afectación.' },
    { num: '08', title: 'Microneedling opcional potenciador', text: 'Dermaroller o dermapen sobre el cuero cabelludo tratado para potenciar la penetración del PRP y activar adicionalmente la respuesta regenerativa del tejido.', tag: 'Opcional — potencia resultados' },
    { num: '09', title: 'Masaje y loción post-tratamiento', text: 'Masaje suave para homogeneizar el PRP infiltrado. Aplicación de loción calmante y recomendaciones: no lavar 12h, evitar piscina 48h.' },
  ];

  const milestones = [
    { when: 'Sesión 2', num: '02', title: 'Caída reducida', text: 'Frenado visible de la caída a partir de la segunda sesión. Menos cabellos en la ducha y en el cepillo.' },
    { when: 'Mes 3–4', num: '03', title: 'Cabello nuevo', text: 'Aparición de cabellos nuevos en las zonas afectadas. Los folículos reactivados inician su nuevo ciclo de crecimiento.' },
    { when: 'Mes 6–9', num: '06', title: 'Densidad máxima', text: '+15–20% de densidad capilar documentado en tricoscopia. Resultado máximo con protocolo completo de 3–4 sesiones.' },
    { when: 'Mantenimiento', num: '∞', title: 'Cada 4–6 meses', text: 'Sesión de mantenimiento para preservar los resultados. Protocolo adaptado al tipo de alopecia y respuesta individual.' },
  ];

  const indications = [
    'Alopecia androgenética I–V',
    'Alopecia areata resistente',
    'Efluvio telógeno crónico',
    'Miniaturización folicular progresiva',
    'Pre/post-trasplante capilar',
    'Tratamiento 100% natural preferido',
    'Alopecias cicatriciales iniciales',
    'Combinación con mesoterapia',
  ];

  const contras = [
    'Trastornos hematológicos',
    'Plaquetopenia',
    'Infecciones activas o fiebre',
    'Tratamiento anticoagulante',
    'Cáncer activo',
    'Enfermedades autoinmunes severas',
  ];

  return (
    <>
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <Image src="/images/services/prp-capilar.webp" alt="PRP Capilar — Estetia" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
          <div className={styles['prp-badge']}>
            <div className={styles['prp-badge-label']}>Densidad a 6 meses</div>
            <div className={styles['prp-stat']}>
              <span className={styles['prp-stat-num']}>+20</span>
              <span className={styles['prp-stat-unit']}>%</span>
            </div>
            <div className={styles['prp-stat-sub']}>aumento de densidad capilar</div>
            <div className={styles['prp-divider']}></div>
            <div className={styles['prp-autologous']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="11" height="11"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              100% autólogo
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 17 — Medicina Regenerativa</div>
          <h1>PRP Capilar <em>Regenerativo</em></h1>
          <div className={styles['service-tagline']}>Tu propia sangre. Tus propios factores de crecimiento.</div>
          <p className={styles['hero-desc']}>
            Plasma concentrado en plaquetas obtenido de tu propia sangre e infiltrado en el cuero cabelludo. Los factores de crecimiento PDGF, VEGF, EGF y TGF-β estimulan la angiogénesis, prolongan la fase anágena y reactivan folículos dormidos. El tratamiento más natural y seguro disponible — cero riesgo de alergia o rechazo.
          </p>

          <div className={styles['vs-block']}>
            <div className={styles['vs-cell']}>
              <div className={styles['vs-cell-label']}>Mesoterapia</div>
              <div className={styles['vs-cell-value']}>Activos externos</div>
            </div>
            <div className={`${styles['vs-cell']} ${styles.active}`}>
              <div className={styles['vs-cell-label']}>PRP ✦</div>
              <div className={styles['vs-cell-value']}>Tus propios factores</div>
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Recuperación mínima</strong>
              Enrojecimiento leve 24–48 horas. No lavar el cabello 12 horas. Evitar piscina o mar 48 horas. Sin restricciones de actividad laboral.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>60–90 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.ok}`}>Mínima</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>3–4 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>250€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>100% autólogo</span>
            <span className={styles.tag}>Sin riesgo rechazo</span>
            <span className={styles.tag}>Gold standard</span>
            <span className={`${styles.tag} ${styles.gold}`}>Pack 3 — 650€</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#factores" className={styles['btn-ghost']}>Ver factores de crecimiento</a>
          </div>
        </div>
      </div>

      <div className={styles['scroll-section']} id="factores">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div ref={addReveal} className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que tus propias plaquetas<br /><em>pueden regenerar</em></h2>
          </div>

          <div ref={addReveal} className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            {benefits.map((b, i) => (
              <div key={i} className={styles['benefit-card']}>
                <div className={styles['benefit-icon']}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>

          {/* FACTORES DE CRECIMIENTO */}
          <div ref={addReveal} className={`${styles['factors-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Factores de crecimiento activos</div>
            <h2 className={styles['section-title']}>Las proteínas que<br /><em>regeneran tu folículo</em></h2>

            <div ref={addReveal} className={`${styles['factors-grid']} ${styles['reveal-stagger']}`}>
              {factors.map((f, i) => (
                <div key={i} className={styles['factor-card']}>
                  <div className={styles['factor-abbr']}>{f.abbr}</div>
                  <div className={styles['factor-name']}>{f.name}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROCESO */}
          <div ref={addReveal} className={`${styles['process-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>De tu sangre al folículo</div>
            <h2 className={styles['section-title']}>El proceso de obtención<br /><em>en 4 pasos</em></h2>

            <div ref={addReveal} className={`${styles['process-steps']} ${styles['reveal-stagger']}`}>
              {procSteps.map((s, i) => (
                <div key={i} className={styles['proc-step']}>
                  <div className={styles['proc-num']}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className={styles['proc-tag']}>{s.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div ref={addReveal} className={styles.reveal} id="protocolo">
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>9 fases</em> de cada sesión</h2>
          </div>

          <div ref={addReveal} className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {protocolSteps.map((s, i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>{s.num}</div>
                <div className={styles['ps-body']}>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                  {s.tag && <span className={styles['ps-tag']}>{s.tag}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div ref={addReveal} className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Tus plaquetas trabajan<br /><em>durante meses</em></h2>

            <div ref={addReveal} className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              {milestones.map((m, i) => (
                <div key={i} className={styles['result-milestone']}>
                  <div className={styles['milestone-when']}>{m.when}</div>
                  <div className={styles['milestone-num']}>{m.num}</div>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* INDICACIONES */}
          <div ref={addReveal} className={`${styles['indications-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>

            <div ref={addReveal} className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {indications.map((ind, i) => (
                <div key={i} className={styles['indication-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {ind}
                </div>
              ))}
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div ref={addReveal} className={`${styles['contra-block']} ${styles.reveal}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — evaluación médica obligatoria</h4>
            </div>
            <div className={styles['contra-list']}>
              {contras.map((c, i) => (
                <div key={i} className={styles['contra-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {c}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>con tricoscopia incluida</em></h2>
          <p>Diagnóstico tricológico completo, evaluación de idoneidad para PRP y diseño del protocolo antes de hablar de presupuesto. Pack de 3 sesiones desde 650€.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <Link href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</Link>
        </div>
      </div>
    </>
  );
}
