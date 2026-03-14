'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function ToxinaBotulinicaPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <div className={styles['hero-wrapper']}>

        <div className={styles['hero-image-col']}>
          <img src="/images/services/toxina-botulinica-botox.webp" alt="Toxina Botulínica — Estetia" />

          {/* Badge zonas + precio */}
          <div className={styles['zones-badge']}>
            <div className={styles['zones-badge-label']}>Precio por zona</div>
            <div className={styles['zone-row']}>
              <span>Frente</span>
              <span className={styles['zone-price']}>Desde 180€</span>
            </div>
            <div className={styles['zone-row']}>
              <span>Entrecejo</span>
              <span className={styles['zone-price']}>Desde 180€</span>
            </div>
            <div className={styles['zone-row']}>
              <span>Patas de gallo</span>
              <span className={styles['zone-price']}>Desde 180€</span>
            </div>
            <div className={styles['zone-row']}>
              <span>Zonas combinadas</span>
              <span className={styles['zone-price']}>Consultar</span>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 06 — Relajación Muscular</div>

          <h1>Toxina <em>Botulínica</em></h1>
          <div className={styles['service-tagline']}>Expresividad natural. Sin arrugas de tensión.</div>

          <p className={styles['hero-desc']}>
            Microinyecciones de toxina botulínica tipo A purificada que relajan selectivamente los músculos responsables de las arrugas de expresión. En Estetia aplicamos técnicas avanzadas para resultados sutiles y armoniosos — preservando la expresividad natural de cada paciente, sin el efecto &ldquo;congelado&rdquo;.
          </p>

          {/* Diferenciador: natural vs congelado */}
          <div className={styles['approach-block']}>
            <div className={styles['approach-cell']}>
              <div className={styles['approach-cell-label']}>Efecto &ldquo;congelado&rdquo;</div>
              <div className={styles['approach-cell-value']}>Sin expresión</div>
            </div>
            <div className={`${styles['approach-cell']} ${styles.active}`}>
              <div className={styles['approach-cell-label']}>Técnica Estetia ✦</div>
              <div className={styles['approach-cell-value']}>Expresividad natural</div>
            </div>
          </div>

          {/* Recuperación nula */}
          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Sin tiempo de recuperación</strong>
              Pequeñas marcas de punción que desaparecen en 1–2 horas. Incorporación inmediata a cualquier actividad. La sesión dura 15–30 minutos.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>15–30 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles.ok}`}>Ninguna</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Frecuencia</div>
              <div className={styles['m-value']}>Cada 4–6 meses</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles.highlight}`}>180€</div>
            </div>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Sin cirugía</span>
            <span className={styles.tag}>Efecto inmediato</span>
            <span className={styles.tag}>Reversible</span>
            <span className={`${styles.tag} ${styles.gold}`}>15–30 minutos</span>
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
            <h2 className={styles['section-title']}>Más allá de las arrugas:<br /><em>todo lo que trata</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2C6 2 2 6 2 12s4 10 10 10 10-4 10-10S18 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h3>Arrugas dinámicas</h3>
              <p>Reducción inmediata y visible de frente, entrecejo y patas de gallo. Resultado natural que mantiene la movilidad necesaria para la expresión facial.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3>Lifting de cejas</h3>
              <p>La relajación selectiva de los músculos depresores eleva las cejas de forma natural, abriendo la mirada sin cirugía. Efecto inmediato y completamente reversible.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <h3>Prevención anti-edad</h3>
              <p>Tratamiento preventivo desde los 25–30 años para evitar que las arrugas de expresión se consoliden. La inversión más eficiente a largo plazo en medicina estética.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </div>
              <h3>Bruxismo y mandíbula</h3>
              <p>La relajación del músculo masetero alivia la tensión mandibular, reduce el dolor por bruxismo y puede afinar el óvalo facial como efecto secundario positivo.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg>
              </div>
              <h3>Hiperhidrosis</h3>
              <p>Bloqueo de las glándulas sudoríparas en axilas, palmas o plantas. Reducción de la sudoración excesiva hasta un 90% durante 6–8 meses con una sola sesión.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <h3>Resultados reversibles</h3>
              <p>El efecto dura 4–6 meses y se va disipando gradualmente. Si el resultado no satisface al 100%, simplemente no se repite. Sin compromisos permanentes.</p>
            </div>
          </div>

          {/* ZONAS DE TRATAMIENTO */}
          <div className={`${styles['treatment-zones']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Zonas de tratamiento</div>
            <h2 className={styles['section-title']}>Cada zona, <em>un protocolo específico</em></h2>

            <div className={`${styles['facial-zones-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['facial-zone']}>
                <div className={styles['zone-area']}>Tercio superior</div>
                <h3>Frente</h3>
                <p>Suavizado de las líneas horizontales de la frente preservando la capacidad de elevar las cejas. La dosificación precisa evita la caída del párpado superior.</p>
                <div className={styles['zone-from']}>180€ <span>/zona</span></div>
              </div>
              <div className={styles['facial-zone']}>
                <div className={styles['zone-area']}>Zona glabelar</div>
                <h3>Entrecejo</h3>
                <p>Eliminación de las líneas verticales del entrecejo que dan expresión de enfado o preocupación. Una de las zonas de mayor demanda y resultado más visible.</p>
                <div className={styles['zone-from']}>180€ <span>/zona</span></div>
              </div>
              <div className={styles['facial-zone']}>
                <div className={styles['zone-area']}>Zona periocular</div>
                <h3>Patas de gallo</h3>
                <p>Suavizado de las arrugas de expresión lateral al ojo. Tratamiento que rejuvenece la mirada con resultado muy natural al conservar parte de la movilidad.</p>
                <div className={styles['zone-from']}>180€ <span>/zona</span></div>
              </div>
              <div className={styles['facial-zone']}>
                <div className={styles['zone-area']}>Músculo masetero</div>
                <h3>Bruxismo</h3>
                <p>Relajación del masetero para aliviar tensión, dolor mandibular y el desgaste dental por apretamiento nocturno. Efecto adicional de afinamiento del óvalo.</p>
                <div className={styles['zone-from']}>Consultar</div>
              </div>
              <div className={styles['facial-zone']}>
                <div className={styles['zone-area']}>Glándulas sudoríparas</div>
                <h3>Hiperhidrosis</h3>
                <p>Bloqueo temporal de las glándulas sudoríparas en axilas, palmas o plantas. Eficacia superior al 90% con duración de 6–8 meses por sesión.</p>
                <div className={styles['zone-from']}>Consultar</div>
              </div>
              <div className={styles['facial-zone']}>
                <div className={styles['zone-area']}>Músculo platisma</div>
                <h3>Cuello y sonrisa</h3>
                <p>Tratamiento de bandas platismales del cuello y corrección de la sonrisa gingival. Técnicas avanzadas para resultados sutiles en zonas de alta complejidad.</p>
                <div className={styles['zone-from']}>Consultar</div>
              </div>
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles.reveal} id="protocolo">
            <div className={styles.eyebrow}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>De la consulta al resultado<br /><em>en una sola visita</em></h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>01</div>
              <div className={styles['ps-body']}>
                <h4>Consulta médica y evaluación de expresión</h4>
                <p>Análisis dinámico de los patrones musculares faciales. El médico evalúa la fuerza y distribución de cada músculo para diseñar un patrón de inyección personalizado.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>02</div>
              <div className={styles['ps-body']}>
                <h4>Marcación de puntos de inyección</h4>
                <p>Marcación precisa de los puntos objetivo según el mapa muscular de cada paciente. La personalización en esta fase determina la naturalidad del resultado final.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>03</div>
              <div className={styles['ps-body']}>
                <h4>Limpieza y desinfección</h4>
                <p>Protocolo de desinfección completo de las zonas a tratar. Preparación del material con agujas de calibre ultrafino para minimizar las marcas de punción.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>04</div>
              <div className={styles['ps-body']}>
                <h4>Microinyecciones precisas</h4>
                <p>Inyecciones subcutáneas o intramusculares según la zona. El calibre ultrafino de las agujas hace el procedimiento prácticamente indoloro sin necesidad de anestesia.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>05</div>
              <div className={styles['ps-body']}>
                <h4>Masaje selectivo y revisión</h4>
                <p>Masaje suave en zonas específicas para homogeneizar la distribución. Verificación inmediata de la simetría y del patrón de aplicación antes de finalizar.</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>06</div>
              <div className={styles['ps-body']}>
                <h4>Recomendaciones post-tratamiento</h4>
                <p>No acostarse durante 4 horas. No masajear ni presionar la zona tratada 24 horas. Evitar actividad física intensa el mismo día y calor extremo (sauna, sol directo).</p>
              </div>
            </div>
            <div className={styles['protocol-step']}>
              <div className={styles['ps-num']}>07</div>
              <div className={styles['ps-body']}>
                <h4>Revisión opcional a los 15 días</h4>
                <p>Cita de control para evaluar el resultado una vez el efecto ha alcanzado su máximo. Si se requiere algún ajuste, se realiza en esta visita sin coste adicional.</p>
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Evolución del efecto</div>
            <h2 className={styles['section-title']}>Del tratamiento<br /><em>al resultado máximo</em></h2>

            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Día 1–3</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Inicio del efecto</h3>
                <p>Primeros signos de relajación muscular. El efecto se inicia progresivamente desde las primeras 48–72 horas post-tratamiento.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Día 10–15</div>
                <div className={styles['milestone-num']}>10</div>
                <h3>Resultado máximo</h3>
                <p>Efecto completo visible. La relajación muscular ha alcanzado su punto óptimo. Revisión recomendada en este momento si es necesario.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 4–5</div>
                <div className={styles['milestone-num']}>04</div>
                <h3>Mantenimiento</h3>
                <p>El efecto se mantiene en plenitud. El metabolismo individual determina el momento exacto de reactivación muscular gradual.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Mes 4–6</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Nueva sesión</h3>
                <p>Recomendación de nueva sesión antes de que la musculatura recupere su actividad completa para mantener el efecto preventivo.</p>
              </div>
            </div>
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles.reveal}`}>
            <div className={styles.eyebrow}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>

            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Arrugas de expresión en tercio superior
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Prevención anti-edad (25–35 años)
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Líneas periorales (código de barras)
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Bruxismo y tensión mandibular
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Hiperhidrosis axilar, palmar o plantar
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Sonrisa gingival
              </div>
              <div className={styles['indication-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                Bandas platismales en cuello
              </div>
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles.reveal}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones absolutas</h4>
            </div>
            <div className={styles['contra-list']}>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Embarazo y lactancia
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Enfermedades neuromusculares (miastenia gravis)
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Alergia a componentes de la toxina
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Infecciones activas en zona de aplicación
              </div>
              <div className={styles['contra-item']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                Tratamiento anticoagulante activo
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos tus patrones de expresión, definimos las zonas prioritarias y diseñamos el protocolo de inyección antes de hablar de presupuesto. La sesión dura 15–30 minutos.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
