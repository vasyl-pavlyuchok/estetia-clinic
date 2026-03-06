export default function CenterMethodSection() {
  return (
    <section
      id="center-method"
      className="bg-white py-20 md:py-24"
      aria-label="The Center Method"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
            The Center Method
          </p>
          <h2 className="font-heading mt-4 max-w-[14ch] text-4xl leading-tight text-black md:text-5xl">
            Simetria, ciencia y diseno de precision para una belleza sin ruido.
          </h2>
          <p className="mt-6 max-w-[56ch] leading-relaxed text-black/70">
            Nuestro metodo combina diagnostico avanzado, protocolos personalizados y un
            enfoque conservador para mejorar proporciones, no disfrazarlas. Cada decision
            busca equilibrio anatomico y resultado natural.
          </p>
        </div>

        <article className="rounded-3xl border border-black/10 bg-[#F8F9FA] p-7 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.35)]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">
            Principios Operativos
          </p>
          <ol className="mt-4 space-y-4 text-sm leading-relaxed text-black/78">
            <li>1. Diagnostico profundo de estructura facial y corporal.</li>
            <li>2. Plan de accion medico con progresion medible.</li>
            <li>3. Tecnologia certificada para precision reproducible.</li>
            <li>4. Seguimiento continuo con criterio estetico y clinico.</li>
          </ol>
        </article>
      </div>
    </section>
  );
}
