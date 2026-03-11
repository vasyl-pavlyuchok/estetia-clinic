const PROCESS_STEPS = [
  {
    title: 'Consulta estratégica',
    summary: 'Escuchamos objetivos, historial y expectativas reales.',
    detail: 'Mapeamos prioridades estéticas y contexto clínico desde la primera visita.',
  },
  {
    title: 'Diagnóstico de precisión',
    summary: 'Analizamos estructura, textura y simetría.',
    detail: 'Definimos un punto de partida medible para evitar decisiones por intuición.',
  },
  {
    title: 'Plan médico personalizado',
    summary: 'Diseñamos un protocolo por fases y tiempos.',
    detail: 'Cada tratamiento se ordena para maximizar resultado y controlar recuperación.',
  },
  {
    title: 'Ejecución especializada',
    summary: 'Aplicación con tecnología certificada y criterio conservador.',
    detail: 'Buscamos mejora visible sin perder identidad facial o corporal.',
  },
  {
    title: 'Seguimiento y optimización',
    summary: 'Controlamos evolución y afinamos la estrategia.',
    detail: 'El resultado final se construye en continuidad, no en una sola sesión.',
  },
];

export default function ClinicalProcessSection() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden bg-[#F6F7F8] py-20 md:py-24"
      aria-label="Proceso clínico Estetia"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(127,175,194,0.2),transparent_45%),radial-gradient(circle_at_88%_82%,rgba(201,169,110,0.15),transparent_42%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-7 md:grid-cols-[1.08fr_0.92fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
              Clinical Journey
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
              Un proceso diseñado para reducir incertidumbre y elevar confianza.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-black/72 md:justify-self-end">
            Cada fase tiene un objetivo claro, una métrica visible y una decisión médica
            fundamentada. Sin improvisación, sin sobretratamientos.
          </p>
        </div>

        <ol className="relative mt-11 grid gap-4 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <article className="h-full rounded-3xl border border-black/12 bg-white p-6 shadow-[0_20px_46px_-38px_rgba(0,0,0,0.35)]">
                <div className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[#C9A96E]/45 bg-[#C9A96E]/15 px-3 text-xs font-semibold text-[#5E4720]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading mt-4 text-[1.65rem] leading-tight text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-black/82">
                  {step.summary}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-black/64">{step.detail}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
