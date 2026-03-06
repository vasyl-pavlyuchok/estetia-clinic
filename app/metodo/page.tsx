import type { Metadata } from 'next';

const PRINCIPLES = [
  {
    title: 'Aislamiento',
    description:
      'Un foco visual principal por bloque para reducir ruido cognitivo y elevar claridad de decisión.',
  },
  {
    title: 'Simetría',
    description:
      'Layouts equilibrados para reflejar la búsqueda de armonía corporal con una lectura ordenada y serena.',
  },
  {
    title: 'Contraste',
    description:
      'Arquitectura blanco/negro con acentos quirúrgicos para guiar atención con precisión inmediata.',
  },
  {
    title: 'Peak Shift',
    description:
      'Exageración sutil de texturas, luz y pureza tecnológica para activar deseo aspiracional sin artificio.',
  },
];

export const metadata: Metadata = {
  title: 'Método | Estetia',
  description:
    'Neurociencia aplicada a la estética clínica: el método de precisión y simetría de Estetia.',
};

export default function MetodoPage() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-16">
      <section className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <article className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2C5F6F]">
            Metodo Estetia
          </p>
          <h1 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
            Neurociencia de la belleza: perfección percibida, no exageración artificial.
          </h1>
          <p className="mt-6 max-w-[70ch] leading-relaxed text-black/72">
            Nuestra metodología se inspira en los principios de Ramachandran para diseñar
            experiencias clínicas y visuales donde la confianza nace de la claridad, la
            simetría y la consistencia. Combinamos diagnóstico médico, tecnología avanzada y
            criterio estético para resultados medibles y elegantes.
          </p>
        </article>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {PRINCIPLES.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-black/12 bg-white p-6 shadow-[0_20px_45px_-36px_rgba(0,0,0,0.35)]"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2C5F6F]">
                Principio
              </p>
              <h2 className="font-heading mt-3 text-3xl text-black">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-black/72">{item.description}</p>
            </article>
          ))}
        </div>

        <article className="mt-8 rounded-3xl border border-[#D5B884]/35 bg-[#FBF8F2] p-6 md:p-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#6D5326]">
            Outcome Framework
          </p>
          <p className="mt-3 max-w-[72ch] text-sm leading-relaxed text-black/72">
            Traducimos principios neuroestéticos en decisiones clínicas concretas: cuándo tratar,
            cuánto tratar y cómo mantener naturalidad anatómica. Esto permite una experiencia
            premium consistente en todas las rutas del ecosistema Estetia.
          </p>
        </article>
      </section>
    </main>
  );
}
