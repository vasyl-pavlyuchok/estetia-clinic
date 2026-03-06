import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doctora | Estetia',
  description: 'The Aesthetic Dream Team y liderazgo clínico de Estetia.',
};

export default function DoctoraPage() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-16">
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10">
        <article className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2C5F6F]">
            The Aesthetic Dream Team
          </p>
          <h1 className="font-heading mt-4 text-4xl leading-tight text-black md:text-5xl">
            Direccion medica con criterio artistico y precisión anatómica.
          </h1>

          <p className="mt-6 leading-relaxed text-black/72">
            La doctora lider de Estetia integra medicina estética avanzada, dermatología
            regenerativa y un enfoque de simetría facial basado en neuroestética. El
            objetivo no es transformar identidad, sino perfeccionar proporciones con
            naturalidad quirúrgica.
          </p>

          <div className="mt-6 space-y-4 text-sm text-black/76">
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#2C5F6F]">
                Certificaciones
              </p>
              <p className="mt-2">
                Medicina Estética Avanzada, Anatomía de Alta Definición, Bioestimulación
                Regenerativa, Protocolos Láser Clínicos.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#2C5F6F]">
                Enfoque de trabajo
              </p>
              <p className="mt-2">
                Diagnóstico profundo, plan personalizado por fases y seguimiento con
                métricas visuales y clínicas.
              </p>
            </div>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-3xl border border-black/12 bg-white shadow-[0_34px_70px_-50px_rgba(0,0,0,0.4)]">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2000&q=80"
            alt="Retrato editorial de dirección médica"
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/18 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#D5B884]">
              Editorial Medical Portrait
            </p>
            <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-white/88">
              Precisión médica con estética de alta moda: autoridad, calma y sofisticación.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
