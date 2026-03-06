import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug } from '@/lib/services';

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

  return (
    <main className="min-h-screen bg-[#F7FAFC] pb-20 pt-14">
      <section className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <Link
          href="/servicios"
          className="inline-flex rounded-full border border-[#D6E0E8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#2A566B]"
        >
          Volver a servicios
        </Link>

        <div className="mt-8 rounded-3xl border border-[#CFE0EB] bg-[linear-gradient(160deg,rgba(255,255,255,0.98)_0%,rgba(239,246,252,0.95)_100%)] p-7 shadow-[0_24px_50px_-38px_rgba(21,38,50,0.3)] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A566B]">
            {service.categoryLabel}
          </p>
          <h1 className="font-heading mt-3 text-4xl leading-tight text-[#111418] md:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 text-lg text-[#22323C]">{service.tagline}</p>
          <p className="mt-5 max-w-[72ch] leading-relaxed text-[#3A4752]">
            {service.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#D6E0E8] bg-white px-3 py-1.5 text-xs font-medium text-[#2D3B45]">
              Duracion: {service.duration}
            </span>
            <span className="rounded-full border border-[#D6E0E8] bg-white px-3 py-1.5 text-xs font-medium text-[#2D3B45]">
              Sesiones: {service.sessions}
            </span>
            <span className="rounded-full border border-[#D6E0E8] bg-white px-3 py-1.5 text-xs font-medium text-[#2D3B45]">
              Recuperacion: {service.recovery}
            </span>
            <span className="rounded-full border border-[#C9D8E2] bg-[#F0F7FB] px-3 py-1.5 text-xs font-semibold text-[#1F4A61]">
              {service.price}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#D6E0E8] bg-white p-6">
            <h2 className="font-heading text-2xl text-[#111418]">Beneficios</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#3A4752]">
              {service.benefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#D6E0E8] bg-white p-6">
            <h2 className="font-heading text-2xl text-[#111418]">Indicaciones</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#3A4752]">
              {service.indications.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-6 rounded-3xl border border-[#D6E0E8] bg-white p-6">
          <h2 className="font-heading text-2xl text-[#111418]">Proceso del tratamiento</h2>
          <ol className="mt-4 space-y-2 text-sm leading-relaxed text-[#3A4752]">
            {service.process.map((step, index) => (
              <li key={`${service.id}-step-${index + 1}`}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-[#2D3B45]">
            <span className="font-semibold">Resultados esperados:</span> {service.results}
          </p>
        </article>

        <article className="mt-6 rounded-3xl border border-[#E3D7BF] bg-[linear-gradient(165deg,rgba(255,255,255,0.98)_0%,rgba(250,246,238,0.94)_100%)] p-6">
          <h2 className="font-heading text-2xl text-[#111418]">Seguridad y contraindicaciones</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#3A4752]">
            {service.contraindications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
