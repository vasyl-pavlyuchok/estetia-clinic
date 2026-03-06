import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug, getServiceFaqs } from '@/lib/services';

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Servicio no encontrado | Estetia',
    };
  }

  return {
    title: `${service.name} | Estetia`,
    description: service.tagline,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const faqs = getServiceFaqs(service);

  return (
    <main className="min-h-screen bg-white pb-24 pt-14">
      <section className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Link
          href="/servicios"
          className="inline-flex rounded-full border border-black/12 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#2C5F6F]"
        >
          Volver a servicios
        </Link>

        <article className="relative mt-8 overflow-hidden rounded-3xl border border-black/12 bg-white shadow-[0_28px_70px_-50px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0">
            <img src={service.img_url} alt={service.name} className="h-full w-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/52 to-black/22" />
          </div>

          <div className="relative grid gap-8 p-7 md:grid-cols-[1.05fr_0.95fr] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D5B884]">
                Hero Quirurgico
              </p>
              <h1 className="font-heading mt-3 text-4xl leading-tight text-white md:text-5xl">
                {service.name}
              </h1>
              <p className="mt-4 max-w-[46ch] text-lg text-white/90">
                Belleza de precision: simetria medible, resultado natural y presencia editorial.
              </p>
              <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-white/80">{service.tagline}</p>
            </div>

            <div className="rounded-2xl border border-white/22 bg-black/28 p-5 backdrop-blur-[2px]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#C9A96E]">
                Datos Tecnicos
              </p>
              <dl className="mt-4 space-y-3 text-sm text-white/90">
                <div className="flex items-start justify-between gap-4 border-b border-white/12 pb-2">
                  <dt className="text-white/70">Duracion</dt>
                  <dd className="font-medium text-right">{service.duration}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/12 pb-2">
                  <dt className="text-white/70">Recuperacion</dt>
                  <dd className="font-medium text-right">{service.recovery}</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-white/12 pb-2">
                  <dt className="text-white/70">Sesiones</dt>
                  <dd className="font-medium text-right">{service.sessions}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-white/70">Dolor</dt>
                  <dd className="font-semibold text-[#D5B884]">0/10</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">
              Seccion de Ciencia
            </p>
            <h2 className="font-heading mt-3 text-3xl leading-tight text-black">Fundamento Clinico</h2>
            <p className="mt-4 leading-relaxed text-black/72">{service.description}</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="font-heading text-2xl text-black">Beneficios</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/70">
                  {service.benefits.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-2xl text-black">Indicaciones</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/70">
                  {service.indications.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <article className="mt-6 rounded-2xl border border-black/10 bg-white p-5">
              <h3 className="font-heading text-2xl text-black">Protocolo</h3>
              <ol className="mt-3 space-y-2 text-sm leading-relaxed text-black/72">
                {service.process.map((step, index) => (
                  <li key={`${service.id}-step-${index + 1}`}>
                    {index + 1}. {step}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-black/74">
                <span className="font-semibold text-black">Resultados esperados:</span> {service.results}
              </p>
            </article>
          </article>

          <article className="rounded-3xl border border-black/12 bg-white p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">
              FAQ Especifico
            </p>
            <h2 className="font-heading mt-3 text-3xl leading-tight text-black">Preguntas Clave</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-black/10 bg-[#F8F9FA] p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-black">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">{faq.answer}</p>
                </details>
              ))}
            </div>

            <article className="mt-6 rounded-2xl border border-[#D5B884]/35 bg-[#FBF8F2] p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#6D5326]">
                Seguridad
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/72">
                {service.contraindications.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </article>
        </section>
      </section>
    </main>
  );
}
