'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function MesoterapiaFacialRegenerativaPage() {
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
          <img src="/images/services/mesoterapia-facial-regenerativa.webp" alt="Mesoterapia Facial Regenerativa — Estetia" />

          {/* Badge ingredientes activos */}
          <div className={styles['cocktail-badge']}>
            <div className={styles['cocktail-badge-label']}>Principios activos del cóctel</div>
            <div className={styles['cocktail-ingredients']}>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#4a9d8f'}}></div>
                  <span className={styles['ingredient-name']}>DMAE</span>
                </div>
                <span className={styles['ingredient-action']}>Efecto tensor</span>
              </div>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#d4890a'}}></div>
                  <span className={styles['ingredient-name']}>Vitamina C</span>
                </div>
                <span className={styles['ingredient-action']}>Antioxidante</span>
              </div>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#2C5F6F'}}></div>
                  <span className={styles['ingredient-name']}>Complejo B</span>
                </div>
                <span className={styles['ingredient-action']}>Energizante</span>
              </div>
              <div className={styles['ingredient-row']}>
                <div className={styles['ingredient-left']}>
                  <div className={styles['ingredient-dot']} style={{background:'#8a5fa8'}}></div>
                  <span className={styles['ingredient-name']}>Fact. crecimiento</span>
                </div>
                <span className={styles['ingredient-action']}>Regenerador</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 08 — Nutrición Celular</div>

          <h1>Mesoterapia <em>Regenerativa</em></h1>
          <div className={styles['service-tagline']}>Vitaminas a medida. Piel revitalizada desde dentro.</div>

          <p className={styles['hero-desc']}>
            Microinyecciones intradérmicas de un cóctel personalizado de vitaminas, minerales, aminoácidos y ácido hialurónico. Nutre la piel desde las capas más profundas, mejorando su calidad, luminosidad y capacidad de regeneración con resultados visibles desde la primera sesión.
          </p>

          {/* Diferenciador: fórmula personalizada */}
          <div className={styles['custom-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            <div className={styles['custom-notice-text']}>
              <strong>Fórmula 100% personalizada</strong>
              El cóctel se diseña específicamente para tu tipo de piel, edad y objetivos. No existe una fórmula estándar — cada paciente recibe la composición que maximiza su resultado.
            </div>
          </div>

          {/* Recuperación mínima */}
          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Recuperación mínima</strong>
              Pequeños puntos rojos 2–4 horas. Posibles microhematomas 2–3 días. Sin restricciones sociales significativas tras el tratamiento.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Duración</div>
              <div className={styles['m-value']}>30–45 min</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Recuperación</div>
              <div className={`${styles['m-value']} ${styles['ok']}`}>Mínima</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Sesiones</div>
              <div className={styles['m-value']}>4–6 sesiones</div>
            </div>
            <div className={styles['meta-cell']}>
              <div className={styles['m-label']}>Precio desde</div>
              <div className={`${styles['m-value']} ${styles['highlight']}`}>120€</div>
            </div>
          </div>

          <div className={styles['tags']}>
            <span className={styles['tag']}>Fórmula personalizada</span>
            <span className={styles['tag']}>Luminosidad inmediata</span>
            <span className={styles['tag']}>Anti-radicales libres</span>
            <span className={`${styles['tag']} ${styles['gold']}`}>Pre-evento ideal</span>
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
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que el cóctel activa<br /><em>en tu piel</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
              <h3>Luminosidad inmediata</h3>
              <p>Efecto luminosidad visible desde la primera sesión. Las vitaminas y antioxidantes transforman la calidad óptica de la piel de forma inmediata.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
              <h3>Nutrición profunda</h3>
              <p>Los activos llegan directamente a la dermis, donde actúan en las células que determinan la calidad de la piel. Nutrición real, no superficial.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div>
              <h3>Renovación celular</h3>
              <p>Los factores de crecimiento y aminoácidos activan los mecanismos naturales de renovación. La piel renueva sus células a mayor velocidad.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <h3>Hidratación duradera</h3>
              <p>El ácido hialurónico del cóctel proporciona hidratación profunda e inmediata. Efecto acumulativo con cada sesión del protocolo.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
              <h3>Anti-radicales libres</h3>
              <p>La vitamina C y los antioxidantes del cóctel neutralizan los radicales libres responsables del envejecimiento prematuro por contaminación y estrés.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
              <h3>Manchas reducidas</h3>
              <p>La vitamina C y los despigmentantes del cóctel reducen manchas solares y unifican el tono de forma progresiva con el protocolo completo.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
              <h3>Microcirculación activada</h3>
              <p>Los activos vasodilatadores estimulan la circulación cutánea, mejorando el aporte de nutrientes y oxígeno a las células de la dermis.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></div>
              <h3>Prevención anti-edad</h3>
              <p>Desde los 25 años como tratamiento preventivo. La nutrición celular regular retrasa la aparición de los primeros signos de envejecimiento.</p>
            </div>
          </div>

          {/* INGREDIENTES ACTIVOS */}
          <div className={`${styles['ingredients-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Composición</div>
            <h2 className={styles['section-title']}>Los activos de<br /><em>tu cóctel personalizado</em></h2>

            <div className={`${styles['ingredients-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['ingredient-card']}>
                <div className={`${styles['ing-molecule']} ${styles['ing-teal']}`}>DMAE</div>
                <h3>Dimetilaminoetanol</h3>
                <p>Precursor de acetilcolina que mejora el tono muscular cutáneo. Genera un efecto tensor visible que reafirma y define los contornos faciales.</p>
                <span className={`${styles['ing-tag']} ${styles['ing-tag-teal']}`}>Efecto tensor</span>
              </div>
              <div className={styles['ingredient-card']}>
                <div className={`${styles['ing-molecule']} ${styles['ing-orange']}`}>Vit. C</div>
                <h3>Vitamina C estabilizada</h3>
                <p>Potente antioxidante que neutraliza radicales libres, estimula la síntesis de colágeno y actúa como despigmentante para reducir manchas solares.</p>
                <span className={`${styles['ing-tag']} ${styles['ing-tag-orange']}`}>Antioxidante</span>
              </div>
              <div className={styles['ingredient-card']}>
                <div className={styles['ing-molecule']}>Complejo B</div>
                <h3>Vitaminas B1 B6 B12</h3>
                <p>Complejo energizante que activa el metabolismo celular, mejora la microcirculación y aporta vitalidad a pieles fatigadas y sin tono.</p>
                <span className={styles['ing-tag']}>Energizante celular</span>
              </div>
              <div className={styles['ingredient-card']}>
                <div className={`${styles['ing-molecule']} ${styles['ing-purple']}`}>FGF · EGF</div>
                <h3>Factores de crecimiento</h3>
                <p>Proteínas señalizadoras que activan la proliferación de fibroblastos, aceleran la renovación celular y potencian la producción de colágeno endógeno.</p>
                <span className={`${styles['ing-tag']} ${styles['ing-tag-purple']}`}>Regenerador</span>
              </div>
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Zonas de aplicación</div>
            <h2 className={styles['section-title']}>Rostro, cuello, escote<br /><em>y manos</em></h2>
            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {['Rostro completo','Cuello','Escote','Manos'].map((z) => (
                <div key={z} className={styles['zone-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
                  {z}
                </div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles['reveal']} id="protocolo-steps">
            <div className={styles['eyebrow']}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>8 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {[
              ['Evaluación y selección del cóctel','Análisis de la piel, historial y objetivos del paciente. Diseño de la fórmula personalizada con los activos y concentraciones óptimas para cada caso.'],
              ['Limpieza y desinfección','Protocolo estéril completo de la zona a tratar. Limpieza profunda y desinfección antes de cualquier microinyección.'],
              ['Anestesia tópica (opcional)','Aplicación de crema anestésica durante 20 minutos para pacientes con mayor sensibilidad. La mayoría tolera el tratamiento sin anestesia por el calibre fino de las agujas.'],
              ['Microinyecciones en nappage o puntos específicos','Técnica de inyección superficial intradérmica. El médico elige la técnica según la zona y el objetivo: nappage para cobertura uniforme o puntos específicos para zonas concretas.'],
              ['Masaje de distribución','Masaje suave para homogeneizar la distribución del cóctel y facilitar la absorción de los principios activos en la dermis.'],
              ['Mascarilla calmante y regeneradora','Aplicación de mascarilla con ingredientes antiinflamatorios y regeneradores que complementan la acción del cóctel y reducen el enrojecimiento inmediato.'],
              ['Protector solar','Aplicación de SPF alto obligatoria al finalizar. La piel recién tratada es más sensible a la radiación UV durante las primeras horas.'],
              ['Protocolo de cuidados domiciliarios','Indicaciones detalladas sobre hidratación, activos compatibles y protección solar durante los días siguientes para potenciar y mantener los resultados.'],
            ].map(([title, desc], i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>{String(i+1).padStart(2,'0')}</div>
                <div className={styles['ps-body']}>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>Luminosidad inmediata,<br /><em>mejora acumulativa</em></h2>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesión 1</div>
                <div className={styles['milestone-num']}>01</div>
                <h3>Luminosidad visible</h3>
                <p>Efecto luminosidad inmediato desde la primera sesión. La piel sale visiblemente más fresca y revitalizada del tratamiento.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>Sesiones 3–4</div>
                <div className={styles['milestone-num']}>03</div>
                <h3>Mejora acumulativa</h3>
                <p>Los activos se van depositando en la dermis con cada sesión. Mejora progresiva de textura, hidratación y uniformidad del tono.</p>
              </div>
              <div className={styles['result-milestone']}>
                <div className={styles['milestone-when']}>4–6 semanas</div>
                <div className={styles['milestone-num']}>∞</div>
                <h3>Resultado óptimo</h3>
                <p>Al completar el protocolo de 4–6 sesiones, la piel ha alcanzado su nivel máximo de nutrición y regeneración celular.</p>
              </div>
            </div>
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {['Pieles fatigadas y apagadas','Deshidratación crónica','Manchas y tono irregular','Prevención anti-edad (25+)','Recuperación post-verano','Piel dañada por tabaco','Estrés oxidativo y contaminación','Preparación pre-evento'].map((item) => (
                <div key={item} className={styles['indication-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CONTRAINDICACIONES */}
          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{color:'rgba(180,60,60,0.75)'}}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones — consultar antes del tratamiento</h4>
            </div>
            <div className={styles['contra-list']}>
              {['Embarazo y lactancia','Alergia a componentes del cóctel','Infecciones cutáneas activas','Tratamiento anticoagulante','Tendencia a queloides'].map((item) => (
                <div key={item} className={styles['contra-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Analizamos tu piel y diseñamos el cóctel personalizado antes de la primera sesión. Sin compromisos, sin presupuesto previo.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
