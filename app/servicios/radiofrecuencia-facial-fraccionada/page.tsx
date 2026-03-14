'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function RadiofrecuenciaFacialPage() {
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
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <img src="/images/services/radiofrecuencia-facial-fraccionada.webp" alt="Radiofrecuencia Facial Fraccionada — Estetia" />
          <div className={styles['depth-badge']}>
            <div className={styles['depth-label']}>Penetración por capas</div>
            <div className={styles['depth-layers']}>
              <div className={styles['depth-layer']}>
                <div className={styles['layer-bar']} style={{ width: '28px' }}></div>
                Epidermis
              </div>
              <div className={styles['depth-layer']}>
                <div className={styles['layer-bar']} style={{ width: '44px' }}></div>
                Dermis superficial
              </div>
              <div className={`${styles['depth-layer']} ${styles['active']}`}>
                <div className={styles['layer-bar']} style={{ width: '64px' }}></div>
                Dermis profunda ✦
              </div>
              <div className={styles['depth-layer']}>
                <div className={styles['layer-bar']} style={{ width: '36px' }}></div>
                Hipodermis
              </div>
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>
          <div className={styles['protocol-label']}>Protocolo 03 — Lifting Sin Cirugía</div>
          <h1>Radiofrecuencia <em>Fraccionada</em></h1>
          <div className={styles['service-tagline']}>Colágeno activado. Firmeza progresiva.</div>
          <p className={styles['hero-desc']}>
            Ondas electromagnéticas que calientan las capas profundas de la dermis para estimular la producción natural de colágeno tipo I y III. El lifting no quirúrgico de referencia — sin bisturí, sin anestesia, sin tiempo de recuperación significativo.
          </p>
          <div className={styles['highlight-notice']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['highlight-notice-text']}>
              <strong>Recuperación mínima</strong>
              Enrojecimiento leve durante 2–4 horas. Incorporación inmediata a la actividad diaria sin restricciones.
            </div>
          </div>
          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Duración</div><div className={styles['m-value']}>45–60 min</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Recuperación</div><div className={`${styles['m-value']} ${styles['ok']}`}>2–4 horas</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Sesiones</div><div className={styles['m-value']}>4–6 sesiones</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Precio</div><div className={`${styles['m-value']} ${styles['highlight']}`}>150€</div></div>
          </div>
          <div className={styles['tags']}>
            <span className={styles['tag']}>Sin cirugía</span>
            <span className={styles['tag']}>Sin anestesia</span>
            <span className={styles['tag']}>Colágeno natural</span>
            <span className={`${styles['tag']} ${styles['gold']}`}>Lifting progresivo</span>
          </div>
          <div className={styles['hero-ctas']}>
            <a href="#reservar" className={styles['btn-primary']}>Reservar consulta gratuita</a>
            <a href="#protocolo" className={styles['btn-ghost']}>Ver protocolo completo</a>
          </div>
        </div>
      </div>

      <div className={styles['scroll-section']} id="protocolo">
        <div className={styles['scroll-inner']}>

          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que la radiofrecuencia<br /><em>activa en tu dermis</em></h2>
          </div>
          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}><div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2C6 2 2 7 2 12s4 10 10 10 10-4.5 10-10S18 2 12 2z"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/></svg></div><h3>Lifting sin cirugía</h3><p>Tensado cutáneo real sin intervención quirúrgica. La energía de radiofrecuencia contrae las fibras de colágeno existentes y estimula la formación de nuevas.</p></div>
            <div className={styles['benefit-card']}><div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 22V12"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/></svg></div><h3>Colágeno tipo I y III</h3><p>Estimulación selectiva de los dos tipos de colágeno responsables de la firmeza y elasticidad. El cuerpo produce colágeno nuevo de forma natural y progresiva.</p></div>
            <div className={styles['benefit-card']}><div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg></div><h3>Óvalo redefinido</h3><p>Mejora visible de la flacidez en mandíbula, papada y cuello. Redefine los contornos faciales sin alterar la expresión ni la identidad del paciente.</p></div>
            <div className={styles['benefit-card']}><div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><h3>Arrugas profundas</h3><p>Reducción de surcos nasogenianos y arrugas de expresión establecidas. La acción va más allá de la superficie al actuar en las capas dérmicas profundas.</p></div>
            <div className={styles['benefit-card']}><div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg></div><h3>Poros minimizados</h3><p>El calor dérmico contrae los poros dilatados de forma visible. Efecto secundario positivo que mejora la textura global y la calidad óptica de la piel.</p></div>
            <div className={styles['benefit-card']}><div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h3>Resultados naturales</h3><p>Mejora progresiva que acompaña la biología del paciente. Los resultados evolucionan durante 3–6 meses conforme madura el colágeno nuevo.</p></div>
          </div>

          <div className={`${styles['how-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Mecanismo de acción</div>
            <h2 className={styles['section-title']}>Por qué funciona<br /><em>la radiofrecuencia</em></h2>
            <div className={`${styles['how-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['how-card']}><div className={styles['how-num']}>01</div><h3>Calor dérmico controlado</h3><p>Las microagujas generan calor preciso a 65–72°C en la dermis profunda. A esa temperatura, las fibras de colágeno se contraen inmediatamente y los fibroblastos se activan.</p><span className={styles['depth-tag']}>Dermis profunda</span></div>
              <div className={styles['how-card']}><div className={styles['how-num']}>02</div><h3>Neocolagénesis</h3><p>El calor desencadena una respuesta reparadora natural. El cuerpo produce colágeno tipo I y III durante los 3–6 meses posteriores, aumentando progresivamente la firmeza.</p><span className={styles['depth-tag']}>Proceso biológico</span></div>
              <div className={styles['how-card']}><div className={styles['how-num']}>03</div><h3>Fraccionamiento preciso</h3><p>El cabezal fraccionado trata microzonas dejando tejido intacto entre ellas. Esto acelera la recuperación y permite ajustar la profundidad y densidad según cada zona.</p><span className={styles['depth-tag']}>Tecnología fraccionada</span></div>
              <div className={styles['how-card']}><div className={styles['how-num']}>04</div><h3>Sin daño superficial</h3><p>La epidermis permanece intacta durante el tratamiento. La energía actúa selectivamente en profundidad, lo que explica la recuperación mínima de 2–4 horas.</p><span className={styles['depth-tag']}>Epidermis preservada</span></div>
            </div>
          </div>

          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>5 fases</em> del tratamiento</h2>
          </div>
          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            <div className={styles['protocol-step']}><div className={styles['ps-num']}>01</div><div className={styles['ps-body']}><h4>Limpieza y marcación de zonas</h4><p>Limpieza completa de la piel y marcación de las zonas a tratar según el diagnóstico previo. Definición de la profundidad y densidad para cada área del rostro.</p></div></div>
            <div className={styles['protocol-step']}><div className={styles['ps-num']}>02</div><div className={styles['ps-body']}><h4>Aplicación de gel conductor</h4><p>El gel garantiza la transmisión óptima de la energía electromagnética y protege la epidermis durante el tratamiento. Parte crítica del protocolo de seguridad.</p></div></div>
            <div className={styles['protocol-step']}><div className={styles['ps-num']}>03</div><div className={styles['ps-body']}><h4>Tratamiento con cabezal fraccionado</h4><p>Aplicación del cabezal en movimientos controlados y sistemáticos. El médico ajusta parámetros de energía, profundidad y densidad en tiempo real según la respuesta cutánea.</p></div></div>
            <div className={styles['protocol-step']}><div className={styles['ps-num']}>04</div><div className={styles['ps-body']}><h4>Enfriamiento y mascarilla calmante</h4><p>Aplicación de frío para reducir el enrojecimiento inmediato y mascarilla calmante con ingredientes antiinflamatorios. El enrojecimiento residual desaparece en 2–4 horas.</p></div></div>
            <div className={styles['protocol-step']}><div className={styles['ps-num']}>05</div><div className={styles['ps-body']}><h4>Protección solar obligatoria</h4><p>Aplicación de SPF alto al finalizar. La piel tratada es más sensible a la radiación UV durante las 48 horas posteriores. Indicaciones post-tratamiento personalizadas.</p></div></div>
          </div>

          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>El colágeno madura<br /><em>con el tiempo</em></h2>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              <div className={styles['result-milestone']}><div className={styles['milestone-when']}>Sesión 1–2</div><div className={styles['milestone-num']}>01</div><h3>Activación inicial</h3><p>Tensado inmediato por contracción de fibras existentes. Mejora sutil visible desde la primera sesión.</p></div>
              <div className={styles['result-milestone']}><div className={styles['milestone-when']}>Sesión 3–4</div><div className={styles['milestone-num']}>03</div><h3>Firmeza progresiva</h3><p>Producción activa de colágeno nuevo. Mejora visible del óvalo y reducción de flacidez.</p></div>
              <div className={styles['result-milestone']}><div className={styles['milestone-when']}>Mes 2–3</div><div className={styles['milestone-num']}>06</div><h3>Resultado consolidado</h3><p>El colágeno nuevo alcanza su madurez. Lifting visible, poros reducidos, arrugas atenuadas.</p></div>
              <div className={styles['result-milestone']}><div className={styles['milestone-when']}>Mantenimiento</div><div className={styles['milestone-num']}>∞</div><h3>Sesión trimestral</h3><p>Una sesión cada 3 meses mantiene y potencia los resultados obtenidos en el ciclo inicial.</p></div>
            </div>
          </div>

          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              <div className={styles['indication-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>Flacidez facial leve a moderada</div>
              <div className={styles['indication-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>Pérdida de definición del óvalo</div>
              <div className={styles['indication-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>Surcos nasogenianos marcados</div>
              <div className={styles['indication-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>Papada incipiente</div>
              <div className={styles['indication-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>Piel madura con pérdida de firmeza</div>
              <div className={styles['indication-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>Alternativa a cirugía estética</div>
            </div>
          </div>

          <div className={`${styles['contra-block']} ${styles['reveal']}`}>
            <div className={styles['contra-header']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20" style={{ color: 'rgba(180,60,60,0.75)' }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <h4>Contraindicaciones absolutas — evaluación médica obligatoria</h4>
            </div>
            <div className={styles['contra-list']}>
              <div className={styles['contra-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Embarazo y lactancia</div>
              <div className={styles['contra-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Marcapasos u otros dispositivos electrónicos implantados</div>
              <div className={styles['contra-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Implantes metálicos en zona facial</div>
              <div className={styles['contra-item']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Rosácea severa activa</div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles['final-cta']} id="reservar">
        <div>
          <h2>Primera consulta<br /><em>sin coste ni compromiso</em></h2>
          <p>Evaluamos el grado de flacidez, confirmamos que la radiofrecuencia es el tratamiento adecuado y diseñamos el protocolo de sesiones antes de hablar de presupuesto.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
