import Link from 'next/link';
import type { Service } from '@/lib/services';
import ServiceCard from '@/components/ui/ServiceCard';

type ServicesSectionProps = {
  services: Service[];
  mode?: 'preview' | 'full';
  activeCategory?: string;
};

export default function ServicesSection({
  services,
  mode = 'preview',
  activeCategory,
}: ServicesSectionProps) {
  const isPreview = mode === 'preview';
  const categories = Array.from(new Set(services.map((service) => service.categoryLabel)));
  const displayedServices = isPreview
    ? services.filter((service) => service.featured).slice(0, 6)
    : services;

  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-20 md:py-24" aria-label="Servicios">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
              {isPreview ? 'The Living Grid' : 'Catalogo Vivo'}
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
              {isPreview
                ? 'Servicios presentados como conceptos vivos, no como una lista estatica.'
                : 'Explora cada tratamiento dentro de su propio universo editorial.'}
            </h2>
          </div>
          <p className="max-w-[46ch] text-[0.98rem] leading-relaxed text-black/72 md:justify-self-end">
            {isPreview
              ? 'Cada tarjeta responde al hover con color y movimiento para anticipar la experiencia clinica y dirigir al detalle individual.'
              : 'La navegacion multipagina permite analizar indicaciones, proceso y criterios de seguridad sin saturar una sola landing.'}
          </p>
        </div>

        <div className="relative mt-10 flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <span
              key={category}
              className={`rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] ${
                activeCategory === category
                  ? 'border-[#C9A96E]/55 bg-[#C9A96E]/12 text-[#5E4720]'
                  : 'border-black/10 bg-white text-[#2C5F6F]'
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="relative mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {isPreview ? (
          <div className="relative mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/servicios"
              className="rounded-full border border-black/12 bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#F8F9FA]"
            >
              Ver catalogo completo
            </Link>
            <p className="text-sm text-black/62">
              Estructura multipagina activa, sin comprimir todo en una sola home.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
