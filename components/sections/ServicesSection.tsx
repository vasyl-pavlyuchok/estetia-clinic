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
  const categories = allCategories ?? Array.from(new Set(services.map((s) => s.categoryLabel)));
  const sharedPreviewImage =
    services.find((s) => s.slug === 'bioestimulacion-acido-hialuronico')?.img_url ??
    services[0]?.img_url;
  const displayedServices = isPreview
    ? services.filter((s) => s.featured).slice(0, 6)
    : services;

  return (
    <section
      id="servicios"
      className="relative overflow-clip bg-[#0D1418] py-24 md:py-32"
      aria-label="Servicios"
    >
      {/* Ambience */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#2C5F6F]/18 blur-[120px]" />
        <div className="absolute bottom-0 right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[#C9A96E]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">

        {/* Header editorial */}
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#7FAFC2]">
            {isPreview ? 'Tratamientos destacados' : 'Catálogo completo'}
          </p>
          <h2 className="font-heading mt-5 text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] text-white">
            {isPreview
              ? 'Tratamientos de referencia, seleccionados por resultados.'
              : 'Explora todos los tratamientos con su información clínica y proceso.'}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-white/62">
            {isPreview
              ? 'Cada protocolo ha sido elegido por su eficacia clínica demostrada y su capacidad de transformación real.'
              : 'Filtra por categoría y accede a cada página de servicio.'}
          </p>
        </div>

        {/* Category filters — full mode only */}
        {!isPreview ? (
          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            <Link
              href={basePath}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                !activeCategory
                  ? 'border-[#C9A96E]/45 bg-[#C9A96E]/14 text-[#E8C98A]'
                  : 'border-white/14 bg-white/[0.06] text-white/62 hover:border-[#7FAFC2]/30 hover:text-[#7FAFC2]'
              }`}
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current/20 bg-current/10 text-[0.63rem]">
                T
              </span>
              Todos
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`${basePath}?categoria=${encodeURIComponent(category)}`}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                  activeCategory === category
                    ? 'border-[#C9A96E]/45 bg-[#C9A96E]/14 text-[#E8C98A]'
                    : 'border-white/14 bg-white/[0.06] text-white/62 hover:border-[#7FAFC2]/30 hover:text-[#7FAFC2]'
                }`}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-current/20 bg-current/10 text-[0.63rem]">
                  {CATEGORY_MARKER[category] ?? '•'}
                </span>
                {category}
              </Link>
            ))}
          </div>
        ) : null}

        {/* Cards grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              imageOverrideUrl={isPreview ? sharedPreviewImage : undefined}
            />
          ))}
        </div>

        {/* CTA — preview mode */}
        {isPreview ? (
          <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/servicios"
              className="rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/14"
            >
              Ver catálogo completo
            </Link>
            <p className="text-sm text-white/42">
              {services.length}+ tratamientos con ficha clínica detallada
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
