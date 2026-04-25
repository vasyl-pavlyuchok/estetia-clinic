'use client';

import { useTranslations, useMessages } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Service } from '@/lib/services';
import ServiceCard from '@/components/ui/ServiceCard';

type ServicesSectionProps = {
  services: Service[];
  mode?: 'preview' | 'full';
  activeCategory?: string;
  allCategories?: { id: string; label: string }[];
  basePath?: string;
};

const SERVICE_NS: Record<string, string> = {
  'hydrafacial-md':          'hydrafacialMd',
  'peeling-quimico':         'peelingQuimico',
  'radiofrecuencia-facial':  'radiofrecuenciaFacialFraccionada',
  'microneedling':           'microneedling',
  'bioestimulacion':         'bioestimulacion',
  'botox':                   'toxinaBotulinica',
  'hilos-tensores':          'hilosTensores',
  'mesoterapia-facial':      'mesoterapiaFacial',
  'criolipolis':             'criolipolis',
  'radiofrecuencia-corporal':'radiofrecuenciaCorporal',
  'presoterapia':            'presoterapia',
  'cavitacion':              'cavitacion',
  'rellenos-dermicos':       'rellenosDermicos',
  'inductores-colageno':     'inductoresColageno',
  'skinboosters':            'skinboostersProfhilo',
  'mesoterapia-capilar':     'mesoterapiaCapilar',
  'prp-capilar':             'prpCapilar',
  'laser-capilar':           'laserCapilar',
  'laser-co2':               'laserCo2',
  'ipl-fotorejuvenecimiento':'iplFotorejuvenecimiento',
};

export default function ServicesSection({
  services,
  mode = 'preview',
  activeCategory,
  allCategories,
  basePath = '/servicios',
}: ServicesSectionProps) {
  const t = useTranslations('services');
  const msgs = useMessages() as Record<string, Record<string, string>>;
  const isPreview = mode === 'preview';
  const categories = allCategories ?? [];
  const displayedServices = isPreview
    ? services.filter((s) => s.featured).slice(0, 6)
    : services;

  const getCategoryLabel = (id: string) => {
    try { return t(`category.${id}` as Parameters<typeof t>[0]); } catch { /* fallback */ }
    return categories.find((c) => c.id === id)?.label ?? id;
  };

  const translated = (service: Service): Service => {
    const ns = SERVICE_NS[service.id];
    const d = ns ? msgs[ns] : null;
    return {
      ...service,
      name:          d?.heroH1          ?? service.name,
      tagline:       d?.heroP           ?? service.tagline,
      duration:      d?.metaDurationVal ?? service.duration,
      categoryLabel: getCategoryLabel(service.category),
    };
  };

  return (
    <section
      id="servicios"
      className="relative overflow-clip bg-[#F6F7F8] py-24 md:py-32"
      aria-label={t('eyebrowPreview')}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#2C5F6F]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-[#C9A96E]/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">

        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#C9A96E]">
            {isPreview ? t('eyebrowPreview') : t('eyebrowFull')}
          </p>
          <h2 className="font-heading mt-5 text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.05] text-[#0D1418]">
            {isPreview ? t('h2Preview') : t('h2Full')}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-black/62">
            {isPreview ? t('subPreview') : t('subFull')}
          </p>
        </div>

        {!isPreview ? (
          <div className="mt-10 flex flex-wrap items-center gap-2.5">
            <Link
              href={basePath}
              className={`inline-flex items-center rounded-full border border-[#C9A96E]/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#5C3D0A] transition-opacity duration-300 ${
                !activeCategory ? 'bg-[#C9A96E]/25' : 'bg-[#C9A96E]/10 opacity-60 hover:opacity-100'
              }`}
            >
              {t('filterAll')}
            </Link>
            {categories.map(({ id, label: _label }) => (
              <Link
                key={id}
                href={`${basePath}?categoria=${encodeURIComponent(id)}`}
                className={`inline-flex items-center rounded-full border border-[#C9A96E]/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#5C3D0A] transition-opacity duration-300 ${
                  activeCategory === id ? 'bg-[#C9A96E]/25' : 'bg-[#C9A96E]/10 opacity-60 hover:opacity-100'
                }`}
              >
                {getCategoryLabel(id)}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={translated(service)}
              variant="frost"
            />
          ))}
        </div>

        {isPreview ? (
          <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/servicios"
              className="rounded-full border border-[#2C5F6F]/30 bg-[#2C5F6F]/8 px-6 py-3 text-sm font-semibold text-[#1F4B5A] transition-colors duration-300 hover:bg-white/14"
            >
              {t('ctaExplore')}
            </Link>
            <p className="text-sm text-black/42">
              {t('servicesCount', { count: services.length })}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
