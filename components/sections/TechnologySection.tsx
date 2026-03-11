type TechnologyItem = {
  name: string;
  focus: string;
  strength: string;
  certification: string;
};

const TECHNOLOGIES: TechnologyItem[] = [
  {
    name: 'HydraFacial MD',
    focus: 'Hidratación inteligente y renovación superficial.',
    strength: 'Protocolos rápidos con resultados visibles sin tiempo de baja.',
    certification: 'Plataforma médica certificada',
  },
  {
    name: 'Radiofrecuencia Multipolar',
    focus: 'Reafirmación facial y corporal progresiva.',
    strength: 'Calentamiento controlado para estimular colágeno en capas profundas.',
    certification: 'Equipamiento con estándares internacionales',
  },
  {
    name: 'Láser Fraccionado CO2',
    focus: 'Textura, cicatrices y rejuvenecimiento profundo.',
    strength: 'Tratamiento de alta precisión con planificación por fototipo.',
    certification: 'Uso clínico bajo protocolo médico',
  },
  {
    name: 'IPL de Alta Selectividad',
    focus: 'Manchas, rojeces y tono irregular.',
    strength: 'Parámetros ajustables por lesión y sensibilidad cutánea.',
    certification: 'Sistema con filtros dermatológicos',
  },
  {
    name: 'Criolipólisis de última generación',
    focus: 'Reducción de grasa localizada no invasiva.',
    strength: 'Control de temperatura y seguimiento por zonas.',
    certification: 'Tecnología con aval clínico',
  },
  {
    name: 'LLLT Capilar',
    focus: 'Estimulación folicular por fotobiomodulación.',
    strength: 'Refuerzo de protocolos anticaída y recuperación capilar.',
    certification: 'Dispositivos low-level aprobados',
  },
];

export default function TechnologySection() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-[#0D1418] py-20 md:py-24"
      aria-label="Tecnología y certificaciones"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,175,194,0.24),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(201,169,110,0.16),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-7 md:grid-cols-[1.08fr_0.92fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7FAFC2]">
              Precision Technology
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-white md:text-5xl">
              Tecnología de vanguardia, aplicada con criterio médico.
            </h2>
          </div>
          <p className="max-w-[50ch] text-[0.98rem] leading-relaxed text-white/72 md:justify-self-end">
            No usamos tecnología como adorno de marketing. Cada equipo responde a una
            indicación clínica concreta y se integra en protocolos medibles.
          </p>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {TECHNOLOGIES.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-white/12 bg-[#111A1F] p-6 shadow-[0_24px_54px_-44px_rgba(0,0,0,0.7)]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D5B884]">
                {item.certification}
              </p>
              <h3 className="font-heading mt-3 text-3xl leading-tight text-white">{item.name}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/84">{item.focus}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/66">{item.strength}</p>
            </article>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          <span className="rounded-full border border-[#7FAFC2]/35 bg-[#7FAFC2]/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#BFE0EE]">
            Protocolos individualizados
          </span>
          <span className="rounded-full border border-[#D5B884]/36 bg-[#D5B884]/12 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#F0DEBF]">
            Equipamiento certificado
          </span>
          <span className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white/88">
            Seguimiento clínico continuo
          </span>
        </div>
      </div>
    </section>
  );
}
