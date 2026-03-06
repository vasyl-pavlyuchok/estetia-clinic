type Service = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  duration: string;
  recovery: string;
  price: string;
  featured: boolean;
};

type ServicesSectionProps = {
  services: Service[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const categories = Array.from(new Set(services.map((service) => service.categoryLabel)));

  return (
    <section id="servicios" className="bg-background py-20 md:py-24" aria-label="Servicios">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          Servicios Estetia
        </p>
        <h2 className="font-heading mt-4 max-w-[18ch] text-4xl leading-tight text-foreground md:text-5xl">
          Tratamientos personalizados con protocolo médico y tecnología certificada.
        </h2>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-xs font-medium text-accent"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-3xl border border-[#dfd4c8] bg-[#fbf8f4] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent/85">
                {service.categoryLabel}
              </p>
              <h3 className="font-heading mt-3 text-2xl leading-snug text-foreground">
                {service.name}
              </h3>
              <p className="mt-3 text-sm font-medium text-foreground/80">{service.tagline}</p>
              <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-foreground/72">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-foreground/70">
                <span className="rounded-full bg-beige px-3 py-1">Duración: {service.duration}</span>
                <span className="rounded-full bg-beige px-3 py-1">
                  Recuperación: {service.recovery}
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{service.price}</p>
                <a
                  href="#ia-assistant"
                  className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Consultar IA
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

