type StandardItem = {
  label: string;
  title: string;
  body: string;
};

const STANDARDS: StandardItem[] = [
  {
    label: 'Primera visita',
    title: 'La consulta inicial no tiene coste ni compromiso.',
    body: 'Antes de hablar de tratamientos, escuchamos. La primera visita es una conversación clínica — sin presupuestos, sin lista de servicios. Solo diagnóstico.',
  },
  {
    label: 'Supervisión médica',
    title: 'Médico en sala en cada procedimiento.',
    body: 'Ninguna sesión se delega. El mismo especialista que hace el diagnóstico ejecuta el tratamiento y firma el seguimiento. No hay intermediarios entre tú y tu médico.',
  },
  {
    label: 'Resultado primero',
    title: 'Hacemos menos si con menos es suficiente.',
    body: 'No optimizamos para facturar más sesiones. Si el resultado esperado se puede conseguir con menos intervención, eso es lo que recomendamos — y lo documentamos.',
  },
  {
    label: 'Asistente IA',
    title: 'Disponible 24/7 para resolver dudas antes y después.',
    body: 'Nuestro agente de inteligencia artificial atiende preguntas sobre tratamientos, recuperación y seguimiento en cualquier momento. No sustituye al médico — lo complementa.',
  },
  {
    label: 'Tus datos',
    title: 'Tu historial clínico no sale de Estetia.',
    body: 'No compartimos información médica con terceros, no hacemos perfiles publicitarios y no usamos tus datos para nada que no sea tu atención directa. Sin letra pequeña.',
  },
  {
    label: 'Seguimiento',
    title: 'El tratamiento no termina al salir de la clínica.',
    body: 'Cada protocolo incluye revisiones planificadas. Medimos evolución, ajustamos si es necesario y documentamos resultados. El proceso es continuo, no puntual.',
  },
];

export default function TechnologySection() {
  return (
    <section
      id="estandares"
      className="relative overflow-hidden bg-[#0D1418] py-20 md:py-24"
      aria-label="Estándares y compromisos médicos"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(127,175,194,0.2),transparent_46%),radial-gradient(circle_at_80%_82%,rgba(201,169,110,0.14),transparent_44%),linear-gradient(180deg,rgba(9,14,18,0.97)_0%,rgba(13,20,24,0.99)_100%)]" />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 md:px-10">
        {/* Header panel */}
        <div className="rounded-[2rem] border border-white/14 bg-[linear-gradient(148deg,rgba(20,32,39,0.9)_0%,rgba(15,24,30,0.94)_46%,rgba(12,19,24,0.97)_100%)] p-7 shadow-[0_24px_58px_-40px_rgba(0,0,0,0.8)] md:p-10">
          <div className="grid gap-7 md:grid-cols-[1.08fr_0.92fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7FAFC2]">
                Nuestra forma de trabajar
              </p>
              <h2 className="font-heading mt-4 max-w-[18ch] text-4xl leading-tight text-white md:text-5xl">
                Compromisos que puedes verificar en la primera visita.
              </h2>
            </div>
            <p className="max-w-[50ch] text-[0.98rem] leading-relaxed text-white/74 md:justify-self-end">
              No pedimos confianza a ciegas. Cada punto de esta lista es algo que puedes comprobar
              desde el primer día — sin esperar resultados.
            </p>
          </div>
        </div>

        {/* Standards grid */}
        <div className="mt-6 grid gap-px bg-white/8 md:grid-cols-2 xl:grid-cols-3" role="list">
          {STANDARDS.map((item) => (
            <article
              key={item.title}
              className="bg-[#0D1418] p-7 transition-colors duration-300 hover:bg-[#111A1F]"
              role="listitem"
            >
              <span className="inline-flex rounded-full border border-[#C9A96E]/36 bg-[#C9A96E]/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#D5B884]">
                {item.label}
              </span>
              <h3 className="font-heading mt-4 text-[1.22rem] leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/62">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
