export default function AIShowcaseSection() {
  const voiceStates = [
    { name: 'Idle', tone: 'bg-white/12', detail: 'En espera de interacción.' },
    { name: 'Listening', tone: 'bg-[#5ca7ce]/45', detail: 'Capturando tu solicitud.' },
    { name: 'Processing', tone: 'bg-[#c9a96e]/55', detail: 'Analizando contexto clínico.' },
    { name: 'Speaking', tone: 'bg-[#8ed0ef]/55', detail: 'Respuesta de voz activa.' },
    { name: 'Error / Retry', tone: 'bg-[#9f6f6f]/55', detail: 'Reintento guiado inmediato.' },
  ];

  const intents = ['Reservar', 'Comparar', 'Preguntar', 'Contactar'];

  return (
    <section
      id="ia-assistant"
      className="bg-beige py-20 md:py-24"
      aria-label="Agentes de inteligencia artificial"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Showcase Principal
          </p>
          <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-foreground md:text-5xl">
            Agentes IA para una atención clínica más fluida.
          </h2>
          <p className="mt-6 max-w-[50ch] text-[1.02rem] leading-relaxed text-foreground/80">
            Esta zona está diseñada para alojar el asistente de voz (ElevenLabs) y el
            asistente de chat con estados claros, acciones guiadas y fallback visual
            para que el flujo siga siendo usable incluso sin voz.
          </p>

          <div className="mt-8 rounded-2xl border border-accent/20 bg-background/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Capacidades IA
            </p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li>Recomendar tratamientos según objetivo y recuperación.</li>
              <li>Comparar opciones y aclarar diferencias clave.</li>
              <li>Derivar a contacto humano para validación final.</li>
            </ul>
            <p className="mt-4 text-xs text-foreground/65">
              Nota: El asistente no sustituye evaluación médica presencial.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="rounded-3xl bg-[#1e2f35] p-6 text-white shadow-[0_30px_80px_-45px_rgba(0,0,0,0.65)]">
            <p className="text-xs uppercase tracking-[0.24em] text-white/65">
              Asistente de voz
            </p>
            <h3 className="mt-3 font-heading text-2xl">Panel de estados operativos</h3>
            <div className="mt-4 space-y-2">
              {voiceStates.map((state) => (
                <div
                  key={state.name}
                  className="flex items-center justify-between rounded-xl border border-white/15 bg-black/20 px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${state.tone}`} />
                    <p className="text-sm font-medium">{state.name}</p>
                  </div>
                  <p className="text-xs text-white/70">{state.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/70">
              Preparado para integrar lógica de voz sin romper navegación ni CTAs.
            </p>
          </article>

          <article className="rounded-3xl border border-accent/25 bg-background p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-accent">
              Asistente de chat
            </p>
            <h3 className="font-heading mt-3 text-2xl text-foreground">Asesor clínico guiado</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              Intents rápidos y fallback textual para usuarios que prefieren no usar
              voz o están en entorno silencioso.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {intents.map((intent) => (
                <button
                  key={intent}
                  type="button"
                  className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition-colors duration-300 hover:bg-accent/12"
                >
                  {intent}
                </button>
              ))}
            </div>
            <a
              href="#servicios"
              className="mt-5 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Continuar por navegación clásica
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
