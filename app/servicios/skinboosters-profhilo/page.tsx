'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function SkinboostersPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>, title: 'Efecto glass skin', desc: 'La hidratación tridimensional profunda transforma la calidad óptica de la piel. El efecto "piel de cristal" luminoso es el resultado más comentado por los pacientes.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: '4 tipos de colágeno', desc: 'Estimulación simultánea de colágeno tipo I, III, IV y elastina. Ningún otro tratamiento inyectable activa tantos tipos de colágeno en una sola sesión.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: 'Lifting sin volumen', desc: 'El efecto reafirmante y de lifting es real pero sin añadir una gota de volumen. La piel se tensa y mejora su arquitectura desde dentro de forma completamente natural.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>, title: 'Piel crepé mejorada', desc: 'Tratamiento especialmente eficaz para la piel crepé de cuello, escote, codos y rodillas — zonas que ningún otro inyectable trata con esta eficacia.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Solo 15–30 minutos', desc: 'La técnica BAP requiere solo 10 puntos de inyección para todo el rostro. La sesión más rápida del catálogo inyectable, sin sacrificar eficacia.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, title: 'Sin masaje post-tratamiento', desc: 'A diferencia de los inductores de colágeno, los skinboosters no requieren masaje posterior. El producto se difunde solo de forma natural en 24–48 horas.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: 'Complemento ideal', desc: 'Se integra perfectamente con botox, rellenos, hilos tensores o inductores de colágeno. Mejora la calidad del tejido base sobre el que actúan los demás tratamientos.' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Post-láser acelerado', desc: 'Acelera la recuperación y potencia los resultados tras tratamientos láser. La hidratación profunda facilita la regeneración del tejido tratado.' },
  ];

  const steps = [
    { title: 'Consulta y evaluación de calidad cutánea', desc: 'Análisis de la laxitud, hidratación y textura de la piel. Selección del producto más adecuado (Profhilo vs Seventy Hyal) y planificación de las zonas prioritarias.', tag: null },
    { title: 'Limpieza y desinfección', desc: 'Protocolo estéril completo. La zona periocular y el contorno labial requieren especial atención por su vascularización específica.', tag: null },
    { title: 'Marcación de puntos BAP', desc: 'Identificación de los 5 puntos Bio Aesthetic Points por hemicara. La precisión en la marcación determina la homogeneidad de la difusión y el resultado final.', tag: null },
    { title: 'Inyección lenta en técnica bolo', desc: 'Inyección lenta y controlada en cada punto BAP formando un pequeño bolo de producto. La lentitud de la inyección minimiza el discomfort y optimiza la distribución inicial.', tag: null },
    { title: 'Difusión natural 24–48 horas', desc: 'El AH de reticulación híbrida se difunde espontáneamente por el tejido en las 24–48 horas siguientes. Las pápulas iniciales desaparecen durante este proceso.', tag: 'Sin masaje necesario' },
    { title: 'Sin masaje post-tratamiento', desc: 'A diferencia de Sculptra, Profhilo y Seventy Hyal no requieren masaje post-inyección. El producto se distribuye solo gracias a su tecnología de reticulación híbrida.', tag: null },
    { title: 'Segunda sesión a las 4 semanas', desc: 'El protocolo completo requiere 2 sesiones separadas 4 semanas. La segunda sesión potencia y consolida la estimulación de colágeno iniciada en la primera.', tag: 'Pack 2 sesiones — 580€' },
    { title: 'Evaluación a las 8–12 semanas', desc: 'El resultado máximo se valora 8–12 semanas después de completar el protocolo, cuando la neocolagénesis ha alcanzado su punto óptimo de actividad.', tag: null },
  ];

  const zones = ['Rostro completo', 'Cuello', 'Escote', 'Manos', 'Codos y rodillas', 'Post-láser (recuperación)'];

  const indications = [
    'Piel envejecida con pérdida de elasticidad', 'Piel crepé en cuello y escote',
    'Codos y rodillas arrugadas', 'Prevención (skin quality)',
    'Complemento a otros inyectables', 'Piel deshidratada con arrugas finas',
    'Post-tratamientos láser', 'Fumadores con piel deteriorada',
    'Manos con textura áspera',
  ];

  const contra = [
    'Embarazo y lactancia', 'Alergia al ácido hialurónico',
    'Infecciones activas en zona', 'Enfermedades autoinmunes activas',
    'Tendencia a queloides',
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
          <img src="/images/services/skinboosters-profhilo-seventy-hyal.webp" alt="Skinboosters — Estetia" />

          <div className={styles['skin-badge']}>
            <div className={styles['skin-badge-label']}>Técnica BAP</div>
            <div className={styles['skin-stat']}>
              <span className={styles['skin-stat-num']}>10</span>
            </div>
            <div className={styles['skin-stat-sub']}>puntos por rostro completo</div>
            <div className={styles['skin-divider']}></div>
            <div className={styles['skin-pack']}>Pack 2 sesiones — 580€</div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 15 — Glass Skin</div>

          <h1>Skinboosters <em>Profhilo®</em></h1>
          <div className={styles['service-tagline']}>Piel de cristal. Desde dentro.</div>

          <p className={styles['hero-desc']}>
            Ácido hialurónico de ultra-alta concentración que se difunde en el tejido creando hidratación tridimensional y estimulando colágeno tipo I, III, IV y elastina. Solo 10 puntos de inyección para el rostro completo. Sin añadir volumen, sin efecto relleno — solo la versión más luminosa y firme de tu propia piel.
          </p>

          <div className={styles['vs-block']}>
            <div className={styles['vs-cell']}>
              <div className={styles['vs-cell-label']}>AH Bioestimulación</div>
              <div className={styles['vs-cell-value']}>Inyecciones difusas</div>
            </div>
            <div className={`${styles['vs-cell']} ${styles.active}`}>
              <div className={styles['vs-cell-label']}>Skinbooster BAP ✦</div>
              <div className={styles['vs-cell-value']}>10 puntos · difusión 3D</div>
            </div>
          </div>

          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Recuperación mínima</strong>
              Pequeñas pápulas visibles 12–24 horas que se reabsorben solas. Sin masaje post-tratamiento necesario. El producto se difunde naturalmente en 24–48 horas.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>15–30 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.ok}`}>Mínima</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>2 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>320€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Glass skin</span>
            <span className={styles.tag}>Sin volumen</span>
            <span className={styles.tag}>10 puntos</span>
            <span className={`${styles.tag} ${styles.gold}`}>Pack 2 — 580€</span>
          </div>

          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#tecnica-bap" className={styles['btn-ghost']}>Ver técnica BAP</a>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className={styles['scroll-section']} id="tecnica-bap">
        <div className={styles['scroll-inner']}>

          {/* BENEFICIOS */}
          <div className={styles.reveal}>
            <div className={styles.eyebrow}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que el skinbooster<br /><em>hace por tu piel</em></h2>
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

          {/* TÉCNICA BAP */}
          <div className={`${styles['bap-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Técnica BAP</div>
            <h2 className={styles['section-title']}>10 puntos para<br /><em>un resultado global</em></h2>

            <div className={`${styles['bap-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['bap-explanation']}>
                <h3>Bio Aesthetic Points (BAP)</h3>
                <p>La técnica BAP (Bio Aesthetic Points) es exclusiva de Profhilo. Identifica 5 puntos anatómicos específicos por hemicara donde el producto difunde de forma óptima hacia las zonas de mayor necesidad.</p>
                <p>La difusión natural del AH de ultra-alta concentración crea una red de hidratación tridimensional que cubre todo el rostro desde 10 puntos de entrada. Menos trauma, mayor cobertura.</p>
                <div className={styles['bap-points']}>
                  {['Malar', 'Preauricular', 'Mandibular', 'Mentoniano', 'Nasolabial'].map((p, i) => (
                    <div key={i} className={styles['bap-point']}><span className={styles['bap-num']}>{i + 1}</span>{p}</div>
                  ))}
                </div>
              </div>

              <div className={styles['bap-vs']}>
                <h3>Skinbooster vs Bioestimulación AH</h3>
                <div className={styles['comparison-rows']}>
                  <div className={`${styles['comp-row']} ${styles.header}`}>
                    <div className={styles['comp-cell']}></div>
                    <div className={styles['comp-cell']}>AH Bioestimulación</div>
                    <div className={styles['comp-cell']}>Skinbooster BAP</div>
                  </div>
                  {[
                    ['Concentración', 'Estándar', 'Ultra-alta'],
                    ['Puntos inyección', '20–30 puntos', '10 puntos'],
                    ['Difusión', 'Local', '3D homogénea'],
                    ['Tipos colágeno', 'I y III', 'I, III, IV + elastina'],
                    ['Sesión', '30–45 min', '15–30 min'],
                    ['Masaje post', 'Recomendado', 'No necesario'],
                  ].map(([label, a, b], i) => (
                    <div key={i} className={styles['comp-row']}>
                      <div className={styles['comp-cell']}>{label}</div>
                      <div className={styles['comp-cell']}>{a}</div>
                      <div className={`${styles['comp-cell']} ${styles.highlight}`}>{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Zonas tratables</div>
            <h2 className={styles['section-title']}>Donde la piel<br /><em>necesita calidad</em></h2>

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
            <h2 className={styles['section-title']}>Luminosidad progresiva,<br /><em>calidad duradera</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Semana 1</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Primera mejora</h3>
                <p>Las pápulas han desaparecido y la hidratación inicial es visible. La piel empieza a ganar luminosidad y calidad de textura.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 2 — Semana 4</div>
                <div className={styles['milestone-num']}>04</div>
                <h3>Potenciación</h3>
                <p>La segunda sesión amplifica el proceso de neocolagénesis. Mejora visible de firmeza y del efecto glass skin.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Semana 8–12</div>
                <div className={styles['milestone-num']}>08</div>
                <h3>Resultado máximo</h3>
                <p>La estimulación de los 4 tipos de colágeno ha alcanzado su madurez. Efecto glass skin, reafirmación y luminosidad en su punto óptimo.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mantenimiento</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Cada 6–9 meses</h3>
                <p>Una sesión de mantenimiento preserva la calidad cutánea conseguida. Algunos pacientes solo necesitan 1 sesión de mantenimiento al año.</p>
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
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos la calidad de tu piel y confirmamos si el protocolo de 2 sesiones es suficiente para tu objetivo. Pack de 2 sesiones disponible desde 580€.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
