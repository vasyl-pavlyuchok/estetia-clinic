import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inteligencia Clínica — Estetia',
  description:
    'La tecnología al servicio de lo que no puede automatizarse. Nuestro enfoque sobre IA, capacidades del asistente de voz, y cumplimiento normativo.',
};

const capabilities = [
  { num: '01', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, title: 'Reservar cita', description: 'Disponibilidad en tiempo real. Agenda tu visita en segundos, sin formularios ni horario de oficina.', tag: '24 / 7' },
  { num: '02', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: 'Resolver dudas', description: 'Precios, recuperación, resultados — entrenado con los protocolos reales de Estetia, no información genérica.', tag: null },
  { num: '03', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M3 18l9 3 9-3"/><line x1="3" y1="12" x2="21" y2="12"/></svg>, title: 'Comparar tratamientos', description: '¿No sabes qué elegir? Diferencias, indicaciones y resultados esperados para orientar tu decisión.', tag: null },
  { num: '04', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>, title: 'Conversación natural', description: 'Interrumpe, cambia de tema, reformula. Entiende el contexto y responde con fluidez real.', tag: 'Voz nativa' },
  { num: '05', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>, title: 'Derivar al especialista', description: 'Cuando una consulta requiere criterio médico, lo detecta y te conecta con el profesional adecuado.', tag: null },
  { num: '06', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, title: 'Con límites claros', description: 'No emite diagnósticos ni recomendaciones clínicas. Toda decisión médica es exclusiva del equipo de Estetia.', tag: 'AI Act compliant' },
];

const pillars = [
  { num: '01', title: 'Tecnología de primer nivel, sin compromiso', copy: 'Construido sobre ElevenLabs, referente mundial en síntesis de voz con IA. Sin soluciones genéricas, sin atajos.' },
  { num: '02', title: 'Entrenado para Estetia', copy: 'No es una IA de caja. Conoce nuestros protocolos, tratamientos y criterios clínicos. Sabe cuándo no puede ayudar.' },
  { num: '03', title: 'El médico para lo que importa', copy: 'La IA gestiona lo operativo con precisión. El equipo dedica su criterio a lo que ninguna máquina puede hacer: tratarte como individuo único.' },
];

const complianceItems = [
  { name: 'RGPD', sub: 'Reglamento (UE) 2016/679', content: 'Todos los datos personales bajo los requisitos del RGPD. Derecho de acceso, rectificación y eliminación garantizado. Nunca cedemos datos a terceros sin consentimiento explícito.', badge: 'Cumplimiento activo' },
  { name: 'EU AI Act', sub: 'Reglamento (UE) 2024/1689', content: 'Agente en categoría de riesgo limitado: asistente conversacional para citas y consultas no clínicas. Cumplimos la obligación de transparencia activa — el usuario siempre sabe que interactúa con una IA.', badge: 'Riesgo limitado verificado' },
  { name: 'Cifrado TLS', sub: 'Extremo a extremo', content: 'Toda comunicación con el agente usa cifrado TLS. Datos protegidos tanto en tránsito como en reposo.', badge: 'Cifrado activo' },
  { name: 'Sin reentrenamiento', sub: 'Uso exclusivamente operativo', content: 'Las conversaciones no se utilizan para reentrenar modelos de IA, ni propios ni de terceros. Ningún tercero accede a datos identificativos sin consentimiento explícito.', badge: 'Datos protegidos' },
  { name: 'ElevenLabs', sub: 'SOC2 + EU-US DPF', content: 'Plataforma con certificación SOC2 y cumplimiento GDPR, operando bajo el EU-US Data Privacy Framework que regula legalmente las transferencias de datos entre Europa y EE.UU.', badge: 'Certificación internacional' },
];

const blueGlow = 'rgba(44,95,111,0.18)';
const blueBorder = 'rgba(127,175,194,0.2)';
const goldBorder = 'rgba(201,169,110,0.2)';
const whiteMid = 'rgba(255,255,255,0.75)';
const whiteDim = 'rgba(255,255,255,0.5)';
const blueDim = 'rgba(44,95,111,0.14)';

export default function IAPage() {
  return (
    <main className="bg-[#0D1418] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative mx-auto max-w-[1400px] px-15 py-28" style={{ padding: '110px 60px 90px', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div className="pointer-events-none absolute -right-24 -top-20 h-[600px] w-[600px] rounded-full" style={{ background: `radial-gradient(circle, ${blueGlow} 0%, transparent 65%)` }} aria-hidden="true" />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-6 bg-[#7FAFC2]/70" />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#7FAFC2]">Inteligencia Clínica</span>
          </div>
          <h1 className="font-heading text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[1.07]" style={{ marginBottom: '28px' }}>
            La tecnología al servicio de lo que{' '}
            <em className="font-normal not-italic text-[#7FAFC2]">no puede automatizarse</em>
          </h1>
          <p className="text-[1rem] leading-[1.75]" style={{ color: whiteMid, maxWidth: '500px' }}>
            En Estetia usamos la IA donde demuestra que funciona: con rigor, con transparencia y con límites claros. Exactamente como usamos cualquier otra tecnología avanzada.
          </p>
        </div>

        <div className="relative rounded-none" style={{ background: 'linear-gradient(135deg, rgba(17,26,31,0.72) 0%, rgba(44,95,111,0.18) 100%)', backdropFilter: 'blur(34px) saturate(1.4) brightness(0.98)', border: `1px solid ${blueBorder}`, boxShadow: 'inset 0 1px 0 rgba(127,175,194,0.12), 0 8px 32px rgba(13,20,24,0.4)', padding: '28px' }}>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-[7px] w-[7px] rounded-full bg-[#7FAFC2]" style={{ animation: 'blink 2s ease-in-out infinite' }} aria-hidden="true" />
            <span className="text-[0.56rem] font-bold uppercase tracking-[0.3em] text-[#7FAFC2]">Agente activo ahora</span>
          </div>
          <p className="text-[0.82rem] leading-[1.6]" style={{ color: whiteMid }}>
            Nuestro asistente de voz está disponible en este momento para resolver dudas, comparar tratamientos o encontrar el momento ideal para tu cita — sin formularios ni esperas.
          </p>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: `1px solid ${blueBorder}` }} />

      {/* ── POSICIÓN ── */}
      <section style={{ padding: '96px 60px', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-px w-[22px] bg-[#7FAFC2]/65" />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#7FAFC2]">Nuestra posición</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', marginTop: '12px' }}>
          <h2 className="font-heading text-[2.8rem] font-semibold leading-[1.1]" style={{ gridColumn: '1 / -1' }}>
            Creemos en la innovación que{' '}
            <em className="font-normal not-italic text-[#7FAFC2]">transforma</em>{' '}
            — también fuera de la cabina
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              Cuando decidimos qué tecnología usar en Estetia, nos hacemos una sola pregunta:{' '}
              <strong className="font-semibold text-white">¿hace mejor el resultado para el paciente?</strong>{' '}
              Si la respuesta es sí, la integramos. Si no, no.
            </p>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              Lo hemos hecho con los dispositivos estéticos más avanzados del mercado. Y lo hacemos igual con la inteligencia artificial. No porque sea tendencia — sino porque en una parte concreta de nuestra operación, la IA es objetivamente mejor que cualquier alternativa.
            </p>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              Hay tareas donde la IA no comete errores de cansancio, no tiene horario y puede gestionar múltiples casos en paralelo. Esa parte es suya.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              Y hay tareas donde ninguna máquina puede sustituir el criterio clínico, la empatía o la experiencia acumulada.{' '}
              <strong className="font-semibold text-white">Esa parte es siempre del equipo.</strong>
            </p>
            <p className="text-[0.94rem] leading-[1.78]" style={{ color: whiteMid }}>
              Lo que hemos construido no es un chatbot de atención al cliente. Es un sistema de inteligencia clínica que permite a nuestros médicos estar completamente disponibles para lo único que importa: tratarte como un caso único.
            </p>
            <blockquote style={{ marginTop: '10px', padding: '24px 28px', background: 'linear-gradient(135deg, rgba(201,169,110,0.10) 0%, rgba(201,169,110,0.04) 100%)', borderLeft: '3px solid #C9A96E', boxShadow: 'inset 0 1px 0 rgba(213,184,132,0.15)' }}>
              <p className="font-heading text-[1.25rem] italic leading-[1.55]" style={{ color: '#D5B884' }}>
                &quot;La IA nos da presencia donde antes no llegábamos.<br />
                El equipo da criterio donde ninguna IA llega.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: `1px solid ${blueBorder}` }} />

      {/* ── CAPACIDADES ── */}
      <section style={{ background: '#111A1F', borderTop: `1px solid ${goldBorder}`, borderBottom: `1px solid ${blueBorder}`, padding: '96px 60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '56px', alignItems: 'end' }}>
            <h2 className="font-heading text-[2.75rem] font-semibold leading-[1.1]">
              Qué puede hacer el asistente{' '}
              <em className="font-normal not-italic text-[#7FAFC2]">por ti</em>
            </h2>
            <p className="text-[0.94rem] leading-[1.72]" style={{ color: whiteMid }}>
              Entrenado específicamente con los protocolos, tratamientos y criterios de Estetia. No responde de forma genérica — responde con precisión clínica.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: blueBorder, border: `1px solid ${blueBorder}` }}>
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="group relative overflow-hidden transition-all duration-300"
                style={{ background: 'linear-gradient(160deg, rgba(17,26,31,0.82) 0%, rgba(13,20,24,0.64) 100%)', backdropFilter: 'blur(34px) saturate(1.4) brightness(0.98)', padding: '36px 30px', boxShadow: 'inset 0 1px 0 rgba(127,175,194,0.08)' }}
              >
                <p className="mb-3.5 text-[0.68rem] font-bold uppercase tracking-[0.4em] text-[#7FAFC2]/50">{cap.num}</p>
                <span className="mb-3.5 flex items-center text-[#7FAFC2]" aria-hidden="true">{cap.icon}</span>
                <h3 className="font-ui mb-2.5 text-[0.94rem] font-semibold text-white">{cap.title}</h3>
                <p className="text-[0.82rem] leading-[1.65]" style={{ color: whiteDim }}>{cap.description}</p>
                {cap.tag && (
                  <span className="mt-3.5 inline-block px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#7FAFC2]" style={{ background: blueDim, border: `1px solid ${blueBorder}` }}>
                    {cap.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILARES ── */}
      <section style={{ padding: '96px 60px', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="mb-4 inline-flex items-center gap-3">
          <span className="h-px w-[22px] bg-[#7FAFC2]/65" />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.45em] text-[#7FAFC2]">Cómo lo construimos</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginTop: '56px' }}>
          {pillars.map((p) => (
            <div key={p.num} style={{ borderTop: `1px solid ${blueBorder}`, paddingTop: '28px' }}>
              <p className="font-heading mb-4 text-[3.25rem] font-bold leading-none text-[#7FAFC2]/20">{p.num}</p>
              <h3 className="font-heading mb-3.5 text-[1.38rem] font-semibold leading-[1.25] text-white">{p.title}</h3>
              <p className="text-[0.88rem] leading-[1.7]" style={{ color: whiteDim }}>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: `1px solid ${blueBorder}` }} />

      {/* ── COMPLIANCE ── */}
      <section style={{ background: '#111A1F', borderTop: `1px solid ${blueBorder}`, padding: '96px 60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '52px', alignItems: 'end' }}>
            <h2 className="font-heading text-[2.75rem] font-semibold leading-[1.1]">
              Seguridad y{' '}
              <em className="font-normal not-italic text-[#7FAFC2]">cumplimiento normativo</em>
            </h2>
            <p className="text-[0.94rem] leading-[1.72]" style={{ color: whiteMid }}>
              Tecnología avanzada y protección de datos no son opuestos. Cumplimos los estándares europeos más exigentes — no como obligación, sino como parte de hacerlo bien.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: blueBorder, border: `1px solid ${blueBorder}` }}>
            {complianceItems.map((item) => (
              <div
                key={item.name}
                className="transition-all duration-300 hover:bg-[rgba(44,95,111,0.18)]"
                style={{ display: 'grid', gridTemplateColumns: '260px 1fr', background: 'linear-gradient(135deg, rgba(17,26,31,0.75) 0%, rgba(13,20,24,0.55) 100%)', backdropFilter: 'blur(24px) saturate(1.3)' }}
              >
                <div style={{ padding: '24px 28px', borderRight: `1px solid ${blueBorder}`, display: 'flex', flexDirection: 'column', gap: '5px', justifyContent: 'center' }}>
                  <span className="text-[0.88rem] font-bold uppercase tracking-[0.1em] text-[#7FAFC2]">{item.name}</span>
                  <span className="text-[0.75rem]" style={{ color: whiteDim }}>{item.sub}</span>
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <p className="text-[0.88rem] leading-[1.7]" style={{ color: whiteMid }}>{item.content}</p>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-[#7FAFC2]" style={{ background: blueDim, border: `1px solid ${blueBorder}` }}>
                    ✓ {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="relative overflow-hidden text-center" style={{ borderTop: `1px solid ${blueBorder}`, padding: '120px 60px' }}>
        <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(44,95,111,0.12) 0%, transparent 70%)' }} aria-hidden="true" />
        <p className="mb-5 text-[0.56rem] font-bold uppercase tracking-[0.5em]" style={{ color: '#C9A96E', opacity: 0.7 }}>Reserva tu consulta</p>
        <h2 className="font-heading mb-11 text-[clamp(2.4rem,4.5vw,3.25rem)] font-semibold leading-[1.1]">
          Habla primero con el asistente.<br />
          Luego con <em className="font-normal not-italic" style={{ color: '#D5B884' }}>nuestro equipo</em>.
        </h2>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full border border-white/20 bg-[linear-gradient(145deg,rgba(8,13,16,0.58)_0%,rgba(11,18,23,0.46)_58%,rgba(20,34,43,0.32)_100%)] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-[linear-gradient(145deg,rgba(8,13,16,0.72)_0%,rgba(11,18,23,0.60)_58%,rgba(20,34,43,0.46)_100%)]"
          >
            Iniciar conversación
          </a>
          <Link
            href="/servicios"
            className="rounded-full border border-white/[0.22] bg-[linear-gradient(150deg,rgba(255,255,255,0.18)_0%,rgba(250,253,255,0.12)_56%,rgba(246,249,252,0.08)_100%)] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-[34px] backdrop-saturate-[1.4] backdrop-brightness-[0.98] transition-all duration-300 hover:bg-[linear-gradient(150deg,rgba(255,255,255,0.26)_0%,rgba(250,253,255,0.18)_56%,rgba(246,249,252,0.13)_100%)]"
          >
            Ver tratamientos
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </main>
  );
}
