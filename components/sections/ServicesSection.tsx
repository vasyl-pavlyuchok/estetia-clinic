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
  const sharedPreviewImage =
    services.find((service) => service.slug === 'bioestimulacion-acido-hialuronico')?.img_url ??
    services[0]?.img_url;
  const displayedServices = isPreview
    ? services.filter((service) => service.featured).slice(0, 6)
    : services;

  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-20 md:py-24" aria-label="Servicios">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="relative">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
              {isPreview ? 'Tratamientos destacados' : 'Catálogo completo'}
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
              {isPreview
                ? 'Seis tratamientos para entender qué ofrecemos y cómo cuidamos cada detalle.'
                : 'Explora todos los tratamientos con su información clínica y proceso.'}
            </h2>
            <p className="mt-4 max-w-[58ch] text-[0.98rem] leading-relaxed text-black/72">
              {isPreview
                ? 'Selecciona un tratamiento para ver su ficha completa.'
                : 'Filtra por categoría y accede a cada página de servicio.'}
            </p>
          </div>
        </div>

        {!isPreview ? (
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
        ) : null}

        <div className="relative mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              imageOverrideUrl={isPreview ? sharedPreviewImage : undefined}
            />
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
