import Link from 'next/link';
import type { Service } from '@/lib/services';
import ServiceCard from '@/components/ui/ServiceCard';

type ServicesSectionProps = {
  services: Service[];
  mode?: 'preview' | 'full';
  activeCategory?: string;
  allCategories?: string[];
  basePath?: string;
};

const CATEGORY_MARKER: Record<string, string> = {
  'Tratamientos Faciales Avanzados': 'F',
  'Rejuvenecimiento y Anti-edad': 'R',
  'Contorno Corporal': 'C',
  'Medicina Estética Inyectable': 'I',
  'Tratamientos Capilares': 'K',
  'Dermatología Estética': 'D',
};

export default function ServicesSection({
  services,
  mode = 'preview',
  activeCategory,
  allCategories,
  basePath = '/servicios',
}: ServicesSectionProps) {
  const isPreview = mode === 'preview';
  const categories = allCategories ?? Array.from(new Set(services.map((service) => service.categoryLabel)));
  const sharedPreviewImage =
    services.find((service) => service.slug === 'bioestimulacion-acido-hialuronico')?.img_url ??
    services[0]?.img_url;
  const displayedServices = isPreview
    ? services.filter((service) => service.featured).slice(0, 6)
    : services;

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FDFBF9_0%,#F7F3F0_100%)] py-20 md:py-24"
      aria-label="Servicios"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#EEDFCB]/35 blur-3xl" />
        <div className="absolute bottom-8 right-[-5rem] h-64 w-64 rounded-full bg-[#D8E9F0]/45 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="relative">
          <div className="rounded-[2rem] border border-[#E9DED1] bg-white/62 p-6 backdrop-blur-[8px] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
              {isPreview ? 'Tratamientos destacados' : 'Catálogo completo'}
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-[#191919] md:text-5xl">
              {isPreview
                ? 'Seis tratamientos para entender qué ofrecemos y cómo cuidamos cada detalle.'
                : 'Explora todos los tratamientos con su información clínica y proceso.'}
            </h2>
            <p className="mt-4 max-w-[58ch] text-[0.98rem] leading-relaxed text-black/70">
              {isPreview
                ? 'Selecciona un tratamiento para ver su ficha completa.'
                : 'Filtra por categoría y accede a cada página de servicio.'}
            </p>
          </div>
        </div>

        {!isPreview ? (
          <div className="relative mt-10">
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href={basePath}
                className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] backdrop-blur-[8px] transition-colors duration-300 ${
                  !activeCategory
                    ? 'border-[#C9A96E]/52 bg-[#C9A96E]/16 text-[#5E4720]'
                    : 'border-[#E4D7C9] bg-white/66 text-black/70 hover:border-[#2C5F6F]/28 hover:text-[#2C5F6F]'
                }`}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current/25 bg-current/10 text-[0.63rem]">
                  T
                </span>
                Todos
              </Link>

              {categories.map((category) => (
                <Link
                  key={category}
                  href={`${basePath}?categoria=${encodeURIComponent(category)}`}
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] backdrop-blur-[8px] transition-colors duration-300 ${
                    activeCategory === category
                      ? 'border-[#C9A96E]/52 bg-[#C9A96E]/16 text-[#5E4720]'
                      : 'border-[#E4D7C9] bg-white/66 text-black/70 hover:border-[#2C5F6F]/28 hover:text-[#2C5F6F]'
                  }`}
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current/25 bg-current/10 text-[0.63rem]">
                    {CATEGORY_MARKER[category] ?? '•'}
                  </span>
                  {category}
                </Link>
              ))}
            </div>
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
              className="rounded-full border border-[#DCCDBC] bg-white/72 px-6 py-3 text-sm font-semibold text-black transition-colors duration-300 hover:bg-white"
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
