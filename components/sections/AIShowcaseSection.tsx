import Link from 'next/link';

const capabilities = [
  {
    emoji: '📅',
    title: 'Reservar cita',
    description: 'Disponibilidad en tiempo real, sin formularios ni esperas.',
    pill: '24 / 7',
  },
  {
    emoji: '💬',
    title: 'Resolver dudas',
    description: 'Precios, recuperación, resultados — entrenado con los protocolos reales de Estetia.',
    pill: null,
  },
  {
    emoji: '⚖️',
    title: 'Comparar tratamientos',
    description: 'Diferencias, indicaciones y resultados esperados con precisión clínica.',
    pill: null,
  },
  {
    emoji: '🎙️',
    title: 'Conversación natural',
    description: 'Interrumpe, cambia de tema, reformula. Entiende el contexto y responde con fluidez.',
    pill: 'Voz',
  },
  {
    emoji: '👨‍⚕️',
    title: 'Derivar al especialista',
    description: 'Cuando la consulta requiere criterio médico, te conecta con el profesional correcto.',
    pill: null,
  },
];

const pillars = [
  {
    eyebrow: 'Convicción',
    title: 'Tecnología sin compromiso.',
    copy: 'La misma convicción que nos lleva a los tratamientos más avanzados del mundo nos lleva a integrar IA. Sin soluciones genéricas, sin atajos.',
  },
  {
    eyebrow: 'Personalización',
    title: 'Entrenada para Estetia.',
    copy: 'No es una IA genérica. Conoce nuestros protocolos, tratamientos y criterios clínicos propios. Responde desde aquí, no desde cualquier lugar.',
  },
  {
    eyebrow: 'Medicina',
    title: 'El médico, para lo que importa.',
    copy: 'Cada minuto que la IA gestiona es un minuto que la Dra. Morales dedica al paciente. No reemplazamos al médico — lo liberamos.',
  },
];

export default function AIShowcaseSection() {
  return (
    <section
      id="ia-assistant"
      className="relative overflow-hidden bg-[#0D1418] text-white"
      style={{
        borderTop: '1px solid rgba(127,175,194,0.18)',
        borderBottom: '1px solid rgba(127,175,194,0.18)',
      }}
      aria-label="Inteligencia artificial clínica"
    >

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(44,95,111,0.16) 0%, transparent 68%)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main 2-col layout */}
      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ── LEFT ── */}
          <div>
            {/* Eyebrow with line + waveform */}
            <div className="flex items-center gap-4">
              <span className="h-px w-6 bg-[#7FAFC2]/70" aria-hidden="true" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-[#7FAFC2]">
                Inteligencia Artificial en Estetia
              </p>
              {/* Mini waveform */}
              <div className="flex items-center gap-[3px]" aria-hidden="true">
                {[0.45, 0.75, 1, 0.6, 0.85, 0.5].map((scale, i) => (
                  <span
                    key={i}
                    className="w-[2px] rounded-full bg-[#7FAFC2]"
                    style={{
                      height: `${Math.round(scale * 16)}px`,
                      opacity: 0.3 + scale * 0.5,
                      animation: `waveBar 1.4s ease-in-out ${(i * 0.13).toFixed(2)}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Heading */}
            <h2 className="font-heading mt-6 text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] text-white">
              La tecnología que adoptamos en medicina,{' '}
              <em className="font-normal not-italic" style={{ color: '#D5B884' }}>
                la adoptamos en todo.
              </em>
            </h2>

            {/* Copy */}
            <p className="mt-6 text-[0.98rem] leading-relaxed text-white/72">
              En Estetia apostamos por la innovación donde transforma de verdad. Lo hacemos con la tecnología estética más avanzada del mundo — y lo hacemos también con la inteligencia artificial.
            </p>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-white/72">
              No porque esté de moda. Porque la IA hace mejor una parte concreta de nuestro trabajo: la atención, la disponibilidad, la respuesta inmediata.{' '}
              <strong className="font-semibold text-white">Y eso libera a nuestros médicos para lo que ninguna máquina puede hacer.</strong>
            </p>

            {/* Quote */}
            <blockquote
              className="mt-9 py-5 pl-6 pr-4"
              style={{
                borderLeft: '3px solid #C9A96E',
                background: 'linear-gradient(135deg, rgba(201,169,110,0.10) 0%, rgba(201,169,110,0.03) 100%)',
              }}
            >
              <p className="font-heading text-[1.12rem] italic leading-snug" style={{ color: '#D5B884' }}>
                "La tecnología no reemplaza al especialista.<br />
                Lo hace posible donde antes no llegaba."
              </p>
            </blockquote>

            {/* Tech badge */}
            <div
              className="mt-8 inline-flex items-center gap-3 px-4 py-3"
              style={{
                background: 'linear-gradient(135deg, rgba(44,95,111,0.14) 0%, rgba(13,20,24,0.4) 100%)',
                border: '1px solid rgba(127,175,194,0.18)',
              }}
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7FAFC2]"
                style={{ animation: 'blink 2s ease-in-out infinite' }}
                aria-hidden="true"
              />
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/55">
                Desarrollado sobre ElevenLabs — líder mundial en agentes de voz con IA
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/ia"
                className="inline-flex items-center gap-3 border-b pb-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#7FAFC2] transition-colors duration-300 hover:border-[#7FAFC2] hover:text-white"
                style={{ borderColor: 'rgba(127,175,194,0.35)' }}
              >
                Conoce nuestro enfoque completo
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: capability rows ── */}
          <div className="flex flex-col gap-[2px]">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group/cap relative flex items-center gap-4 overflow-hidden border border-transparent px-5 py-5 text-white transition-all duration-300 hover:border-[rgba(127,175,194,0.2)] hover:bg-[rgba(44,95,111,0.12)]"
                style={{ background: 'linear-gradient(135deg, rgba(17,26,31,0.75) 0%, rgba(13,20,24,0.55) 100%)' }}
              >
                {/* Blue left border on hover */}
                <span
                  className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#2C5F6F] transition-transform duration-300 group-hover/cap:scale-y-100"
                  aria-hidden="true"
                />

                <span className="shrink-0 pl-2 text-xl" aria-hidden="true">{cap.emoji}</span>

                <div className="flex-1">
                  <h4 className="text-[0.88rem] font-semibold text-white">{cap.title}</h4>
                  <p className="mt-0.5 text-[0.78rem] leading-relaxed text-white/55">{cap.description}</p>
                </div>

                {cap.pill ? (
                  <span
                    className="shrink-0 self-start px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#7FAFC2]"
                    style={{
                      background: 'rgba(44,95,111,0.15)',
                      border: '1px solid rgba(127,175,194,0.2)',
                    }}
                  >
                    {cap.pill}
                  </span>
                ) : null}
              </div>
            ))}

            {/* Disclaimer */}
            <div
              className="mt-1.5 px-5 py-4"
              style={{
                borderLeft: '2px solid rgba(127,175,194,0.28)',
                background: 'linear-gradient(135deg, rgba(44,95,111,0.09) 0%, rgba(13,20,24,0.5) 100%)',
              }}
            >
              <p className="mb-1 text-[0.55rem] font-bold uppercase tracking-[0.3em] text-[#7FAFC2]">
                Límite claro
              </p>
              <p className="text-[0.72rem] leading-relaxed text-white/50">
                El asistente no emite diagnósticos ni recomendaciones médicas. Toda decisión clínica es exclusiva de nuestro equipo. Así lo exige el AI Act europeo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PILLARS ROW ── */}
      <div
        className="relative z-[1] grid lg:grid-cols-3"
        style={{ borderTop: '1px solid rgba(127,175,194,0.15)' }}
      >
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="bg-[#111A1F] px-10 py-11 text-white transition-colors duration-300 hover:bg-[rgba(44,95,111,0.10)]"
            style={i < pillars.length - 1 ? { borderRight: '1px solid rgba(127,175,194,0.15)' } : {}}
          >
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.42em] text-[#7FAFC2]/70">
              {pillar.eyebrow}
            </p>
            <h3 className="font-heading mt-4 text-[1.2rem] leading-snug text-white">
              {pillar.title}
            </h3>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-white/55">
              {pillar.copy}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes waveBar {
          0%   { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
