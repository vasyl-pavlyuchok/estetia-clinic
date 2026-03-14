'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function CriolipolisCoolSculptingPage() {
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
          <img src="/images/services/criolipolisis-coolsculpting.webp" alt="Criolipólisis CoolSculpting® — Estetia" />

          {/* Badge compacto */}
          <div className={styles['cryo-badge']}>
            <div className={styles['cryo-badge-label']}>Reducción por sesión</div>
            <div className={styles['cryo-stat']}>
              <span className={styles['cryo-stat-num']}>25%</span>
            </div>
            <div className={styles['cryo-stat-label']}>de grasa localizada por zona</div>
            <div className={styles['cryo-badge-divider']}></div>
            <div className={styles['cryo-cert']}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              FDA &amp; CE aprobado
            </div>
          </div>
        </div>

        <div className={styles['hero-content-col']}>

          <div className={styles['protocol-label']}>Protocolo 09 — Reducción de Grasa</div>

          <h1>Criolipólisis <em>CoolSculpting®</em></h1>
          <div className={styles['service-tagline']}>Grasa eliminada. Sin bisturí. Sin baja.</div>

          <p className={styles['hero-desc']}>
            Frío controlado a –10°C que cristaliza y destruye los adipocitos de forma selectiva sin dañar tejidos circundantes. Las células grasas muertas son eliminadas naturalmente por el organismo. Hasta un 25% de reducción permanente por zona y sesión — sin cirugía, sin anestesia, sin tiempo de baja.
          </p>

          {/* VS block */}
          <div className={styles['vs-block']}>
            <div className={styles['vs-cell']}>
              <div className={styles['vs-cell-label']}>Liposucción</div>
              <div className={styles['vs-cell-value']}>Cirugía + baja</div>
            </div>
            <div className={`${styles['vs-cell']} ${styles['active']}`}>
              <div className={styles['vs-cell-label']}>Criolipólisis ✦</div>
              <div className={styles['vs-cell-value']}>Sin cirugía, sin baja</div>
            </div>
          </div>

          {/* Recuperación nula */}
          <div className={styles['recovery-ok']}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>
            <div className={styles['recovery-ok-text']}>
              <strong>Sin tiempo de recuperación</strong>
              Puedes leer, trabajar en tablet o simplemente relajarte durante la sesión. Incorporación inmediata a cualquier actividad al terminar.
            </div>
          </div>

          <div className={styles['meta-strip']}>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Por zona</div><div className={styles['m-value']}>35–60 min</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Recuperación</div><div className={`${styles['m-value']} ${styles['ok']}`}>Ninguna</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Sesiones</div><div className={styles['m-value']}>1–2 por zona</div></div>
            <div className={styles['meta-cell']}><div className={styles['m-label']}>Precio desde</div><div className={`${styles['m-value']} ${styles['highlight']}`}>300€</div></div>
          </div>

          <div className={styles['tags']}>
            <span className={styles['tag']}>Sin cirugía</span>
            <span className={styles['tag']}>Sin anestesia</span>
            <span className={styles['tag']}>Permanente</span>
            <span className={`${styles['tag']} ${styles['gold']}`}>FDA aprobado</span>
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
          <div className={styles['reveal']}>
            <div className={styles['eyebrow']}>Beneficios</div>
            <h2 className={styles['section-title']}>Lo que la criolipólisis<br /><em>hace de forma permanente</em></h2>
          </div>

          <div className={`${styles['benefits-grid']} ${styles['reveal-stagger']}`}>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
              <h3>Reducción permanente</h3>
              <p>Los adipocitos destruidos por el frío no se regeneran. La reducción de grasa localizada es permanente siempre que se mantenga el peso estable.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <h3>Sin tiempo de baja</h3>
              <p>Procedimiento ambulatorio completamente no invasivo. Sin anestesia, sin incisiones, sin recuperación. Puedes retomar tu actividad inmediatamente al terminar.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <h3>Tecnología FDA aprobada</h3>
              <p>CoolSculpting® cuenta con aprobación FDA y certificación CE. La tecnología con mayor respaldo científico disponible para reducción de grasa no invasiva.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>
              <h3>Resultados naturales</h3>
              <p>La eliminación gradual de adipocitos durante 2–3 meses produce un resultado progresivo y completamente natural, sin cambios bruscos en la silueta.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
              <h3>Hasta 25% por sesión</h3>
              <p>Reducción demostrada de hasta el 25% del volumen de grasa por zona en cada sesión. Resultados acumulables con una segunda sesión a los 2–3 meses.</p>
            </div>
            <div className={styles['benefit-card']}>
              <div className={styles['benefit-icon']}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="36" height="36"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
              <h3>Sesión cómoda</h3>
              <p>Durante los 35–60 minutos de tratamiento por zona puedes leer, trabajar en tablet o simplemente descansar. Sin dolor ni sedación.</p>
            </div>
          </div>

          {/* MECANISMO */}
          <div className={`${styles['mechanism-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Mecanismo de acción</div>
            <h2 className={styles['section-title']}>Cómo el frío<br /><em>elimina la grasa</em></h2>
            <div className={`${styles['mechanism-steps']} ${styles['reveal-stagger']}`}>
              {[
                ['01','Succión y enfriamiento','El aplicador succiona el tejido graso y lo enfría a temperatura precisa. Solo los adipocitos son sensibles a este rango de temperatura.','–10°C controlado'],
                ['02','Cristalización selectiva','Las células grasas se cristalizan y mueren (apoptosis). Los tejidos circundantes — nervios, vasos, piel — permanecen completamente intactos.','Solo adipocitos'],
                ['03','Respuesta inflamatoria','El organismo desencadena una respuesta inflamatoria natural que marca los adipocitos muertos para su eliminación por el sistema linfático.','Proceso natural'],
                ['04','Eliminación gradual','Los adipocitos marcados son eliminados progresivamente por el hígado durante 2–3 meses. El resultado se consolida de forma completamente natural.','2–3 meses'],
              ].map(([num, title, desc, temp]) => (
                <div key={num} className={styles['mech-step']}>
                  <div className={styles['mech-num']}>{num}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className={styles['mech-temp']}>{temp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ZONAS */}
          <div className={`${styles['zones-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Zonas tratables</div>
            <h2 className={styles['section-title']}>Grasa resistente<br /><em>en cualquier zona</em></h2>
            <div className={`${styles['zones-grid']} ${styles['reveal-stagger']}`}>
              {['Abdomen','Flancos (michelines)','Cartucheras','Muslos internos','Muslos externos','Papada submentoniana','Brazos (tríceps)','Espalda (bra rolls)'].map((z) => (
                <div key={z} className={styles['zone-item']}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>
                  {z}
                </div>
              ))}
            </div>
          </div>

          {/* PROTOCOLO */}
          <div className={styles['reveal']} id="protocolo">
            <div className={styles['eyebrow']}>Protocolo clínico</div>
            <h2 className={styles['section-title']}>Las <em>8 fases</em> del tratamiento</h2>
          </div>

          <div className={`${styles['protocol-list']} ${styles['reveal-stagger']}`}>
            {[
              ['Consulta con mediciones y fotografías','Evaluación del acúmulo graso, mediciones del perímetro y registro fotográfico pre-tratamiento. Base objetiva para comparar resultados a 30, 60 y 90 días.'],
              ['Evaluación del panículo adiposo','Medición del grosor del pliegue graso con calibrador. Mínimo 2,5 cm necesario para que el aplicador pueda tratar la zona con eficacia y seguridad.'],
              ['Marcación de zonas','Delimitación precisa de las zonas a tratar. Selección del aplicador adecuado según la morfología de cada zona y el objetivo del paciente.'],
              ['Colocación de membrana protectora','Gel de membrana protectora que protege la piel durante el proceso de enfriamiento y asegura una transmisión homogénea del frío al tejido graso.'],
              ['Tratamiento con aplicador','El aplicador succiona el tejido graso y aplica el frío controlado. La zona se insensibiliza en los primeros minutos — el resto de la sesión es completamente cómodo.'],
              ['Sesión de 35–60 minutos','Tiempo de tratamiento activo según la zona y el aplicador utilizado. Posible tratar dos zonas en la misma visita con aplicadores simultáneos.'],
              ['Masaje vigoroso post-tratamiento','2–3 minutos de masaje intenso inmediatamente después de retirar el aplicador. Aumenta la eficacia del tratamiento hasta un 68% según estudios clínicos.'],
              ['Seguimiento fotográfico','Control fotográfico a los 30, 60 y 90 días para documentar la evolución y evaluar la necesidad de una segunda sesión según el objetivo alcanzado.'],
            ].map(([title, desc], i) => (
              <div key={i} className={styles['protocol-step']}>
                <div className={styles['ps-num']}>{String(i+1).padStart(2,'0')}</div>
                <div className={styles['ps-body']}><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>

          {/* TIMELINE */}
          <div className={`${styles['results-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Evolución de resultados</div>
            <h2 className={styles['section-title']}>El cuerpo trabaja<br /><em>durante 3 meses</em></h2>
            <div className={`${styles['results-timeline']} ${styles['reveal-stagger']}`}>
              {[
                ['Semana 3','03','Primeros cambios','Inicio de la eliminación de adipocitos por el sistema linfático. Primeras mejoras sutiles en la zona tratada.'],
                ['Mes 1–2','01','Reducción visible','Reducción progresiva y natural del volumen. El resultado mejora semana a semana conforme el cuerpo elimina los adipocitos cristalizados.'],
                ['Mes 2–3','02','Resultado máximo','Hasta el 25% de reducción de grasa por zona. Resultado estable y permanente mientras se mantenga el peso estable.'],
                ['Opcional','02','Segunda sesión','Si se desea mayor reducción, una segunda sesión a los 2–3 meses del primer tratamiento potencia los resultados.'],
              ].map(([when, num, title, desc]) => (
                <div key={when} className={styles['result-milestone']}>
                  <div className={styles['milestone-when']}>{when}</div>
                  <div className={styles['milestone-num']}>{num}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* INDICACIONES */}
          <div className={`${styles['indications-section']} ${styles['reveal']}`}>
            <div className={styles['eyebrow']}>Indicaciones</div>
            <h2 className={styles['section-title']}>¿Es este tu<br /><em>tratamiento?</em></h2>
            <div className={`${styles['indications-grid']} ${styles['reveal-stagger']}`}>
              {['Grasa abdominal resistente','Cartucheras y flancos','Papada submentoniana','IMC normal o sobrepeso leve','Alternativa a liposucción','Grasa resistente a dieta y ejercicio','Muslos internos y externos','Sin disponibilidad para baja laboral'].map((item) => (
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
              <h4>Contraindicaciones — evaluación médica obligatoria</h4>
            </div>
            <div className={styles['contra-list']}>
              {['Crioglobulinemia y urticaria al frío','Hernia en zona de tratamiento','Embarazo','Obesidad (IMC >30)','Dispositivos implantados en la zona'].map((item) => (
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
          <p>Medimos el panículo adiposo, confirmamos que eres candidato/a y diseñamos el protocolo de zonas antes de hablar de presupuesto. Packs con descuento disponibles.</p>
        </div>
        <div className={styles['final-cta-btns']}>
          <a href="#" className={styles['btn-gold']}>Reservar ahora</a>
          <a href="/servicios" className={styles['btn-outline-white']}>Ver otros tratamientos</a>
        </div>
      </div>
    </>
  );
}
