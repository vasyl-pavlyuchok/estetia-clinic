type TrustIndicatorsSectionProps = {
  totalServices: number;
  totalCategories: number;
  featuredServices: number;
};

const METRICS = [
  { label: 'Pacientes satisfechos', value: '2.4K+' },
  { label: 'Valoración media', value: '4.9/5' },
];

export default function TrustIndicatorsSection({
  totalServices,
  totalCategories,
  featuredServices,
}: TrustIndicatorsSectionProps) {
  const dynamicMetrics = [
    { label: 'Tratamientos activos', value: String(totalServices) },
    { label: 'Categorías clínicas', value: String(totalCategories) },
    { label: 'Protocolos destacados', value: String(featuredServices) },
  ];

  return (
    <section className="bg-background py-8 md:py-12" aria-label="Indicadores de confianza">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 md:grid-cols-5 md:px-10">
        {[...METRICS, ...dynamicMetrics].map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-[#ded2c7] bg-[#f8f3ee] p-5"
          >
            <p className="font-heading text-2xl text-accent">{item.value}</p>
            <p className="mt-2 text-sm text-foreground/75">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

