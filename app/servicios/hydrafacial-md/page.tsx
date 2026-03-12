import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceFaqs } from '@/lib/services';

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-[2px]">
      <p className="text-[0.63rem] font-semibold uppercase tracking-[0.12em] text-[#D7B881]">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
    </article>
  );
}

export function generateMetadata(): Metadata {
  const service = getServiceBySlug('hydrafacial-md');

  if (!service) {
    return {
      title: 'Hydrafacial MD® | Estetia',
      description: 'Tratamiento facial avanzado en Estetia.',
    };
  }

  return {
    title: `${service.name} | Estetia`,
    description: service.tagline,
  };
}

export default function HydrafacialMDPage() {
  const service = getServiceBySlug('hydrafacial-md');

  if (!service) {
    notFound();
  }

  const faqs = getServiceFaqs(service);

  return (
    <main className="min-h-screen bg-white pb-24 pt-14">
      <section className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Link
          href="/servicios"
          className="inline-flex rounded-full border border-black/12 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#2C5F6F]"
        >
          Volver a servicios
        </Link>

        <article className="relative mt-7 overflow-hidden rounded-[2rem] border border-black/12">
          <div className="absolute inset-0">
            <img src={service.img_url} alt={service.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(6,12,16,0.86)_0%,rgba(11,19,25,0.8)_46%,rgba(13,20,24,0.56)_100%)]" />
          </div>

          <div className="relative grid gap-7 p-7 md:grid-cols-[1.08fr_0.92fr] md:p-10">
            <div>
              <p className="inline-flex rounded-full border border-[#7FAFC2]/36 bg-[#7FAFC2]/16 px-3.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.11em] text-[#D3ECF7]">
                {service.categoryLabel}
              </p>
              <h1 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-white md:text-5xl">
                {service.name}
              </h1>
              <p className="mt-3 text-lg text-white/92">{service.tagline}</p>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-white/80">{service.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.seoTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/22 bg-white/10 px-3 py-1.5 text-[0.66rem] font-medium uppercase tracking-[0.08em] text-white/84"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MetricCard label="Duración de sesión" value={service.duration} />
              <MetricCard label="Sesiones recomendadas" value={service.sessions} />
              <MetricCard label="Recuperación" value={service.recovery} />
              <MetricCard label="Precio orientativo" value={service.price} />
            </div>
          </div>
        </article>

        <section className="mt-9 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">
              Beneficios principales
            </p>
            <h2 className="font-heading mt-3 text-3xl leading-tight text-black">Qué consigue en tu piel</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.benefits.map((item) => (
                <li key={item} className="rounded-xl border border-black/10 bg-white px-3 py-2.5 text-sm text-black/76">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-black/12 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">
              Indicaciones
            </p>
            <h2 className="font-heading mt-3 text-3xl leading-tight text-black">Cuándo lo recomendamos</h2>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-black/74">
              {service.indications.map((item) => (
                <li key={item} className="rounded-xl border border-black/10 bg-[#F8F9FA] px-3 py-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="protocolo" className="mt-6 rounded-3xl border border-black/12 bg-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">
            Proceso clínico
          </p>
          <h2 className="font-heading mt-3 text-3xl leading-tight text-black">Cómo se realiza en Estetia</h2>
          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {service.process.map((step, index) => (
              <li
                key={`${service.id}-step-${index + 1}`}
                className="rounded-2xl border border-black/10 bg-[#F8F9FA] p-4"
              >
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-[#2C5F6F]">
                  Paso {index + 1}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-black/75">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-black/75">
            <span className="font-semibold text-black">Resultados esperados:</span> {service.results}
          </p>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#D5B884]/35 bg-[#FBF8F2] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D5326]">Seguridad</p>
            <h2 className="font-heading mt-3 text-3xl leading-tight text-black">Contraindicaciones</h2>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-black/74">
              {service.contraindications.map((item) => (
                <li key={item} className="rounded-xl border border-[#D5B884]/28 bg-white/70 px-3 py-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article id="faq" className="rounded-3xl border border-black/12 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">FAQ específico</p>
            <h2 className="font-heading mt-3 text-3xl leading-tight text-black">Preguntas clave</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-black/10 bg-[#F8F9FA] p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-black">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{faq.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
