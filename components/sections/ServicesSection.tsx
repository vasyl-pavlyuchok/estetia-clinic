'use client';

import { useRef } from 'react';
import Link from 'next/link';
import type { Service } from '@/lib/services';

type ServicesSectionProps = {
  services: Service[];
  mode?: 'preview' | 'full';
  activeCategory?: string;
};

type MediaAsset = {
  image: string;
  video: string;
};

const HERO_LOOP_VIDEO =
  'https://res.cloudinary.com/dipsguims/video/upload/v1772779158/estetia-header_short_opt_appzko.webm';

const CATEGORY_MEDIA: Record<string, MediaAsset> = {
  'tratamientos-faciales': {
    image:
      'https://images.unsplash.com/photo-1556228578-dd6a486812ea?auto=format&fit=crop&w=1800&q=80',
    video: HERO_LOOP_VIDEO,
  },
  'rejuvenecimiento-antiedad': {
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1800&q=80',
    video: HERO_LOOP_VIDEO,
  },
  'contorno-corporal': {
    image:
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1800&q=80',
    video: HERO_LOOP_VIDEO,
  },
  'medicina-estetica-inyectable': {
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=80',
    video: HERO_LOOP_VIDEO,
  },
  'tratamientos-capilares': {
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=80',
    video: HERO_LOOP_VIDEO,
  },
  'dermatologia-estetica': {
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1800&q=80',
    video: HERO_LOOP_VIDEO,
  },
};

const FALLBACK_MEDIA: MediaAsset = {
  image:
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=80',
  video: HERO_LOOP_VIDEO,
};

function getMediaForService(service: Service): MediaAsset {
  return CATEGORY_MEDIA[service.category] ?? FALLBACK_MEDIA;
}

function LivingServiceCard({ service }: { service: Service }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const media = getMediaForService(service);

  const startVideoLoop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay/interaction rejections silently.
    });
  };

  const stopVideoLoop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const onVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.currentTime >= 5) {
      video.currentTime = 0;
    }
  };

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-[0_24px_50px_-40px_rgba(0,0,0,0.32)] transition-transform duration-500 hover:-translate-y-1"
      onMouseEnter={startVideoLoop}
      onMouseLeave={stopVideoLoop}
      onFocus={startVideoLoop}
      onBlur={stopVideoLoop}
    >
      <Link href={`/servicios/${service.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/8 bg-[#F3F4F5]">
          <img
            src={media.image}
            alt={service.name}
            className="h-full w-full object-cover grayscale contrast-110 brightness-[0.94] transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
            loading="lazy"
          />
          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            src={media.video}
            onTimeUpdate={onVideoTimeUpdate}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-55"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/45 bg-white/18 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-white">
              {service.categoryLabel}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-heading text-2xl leading-tight text-white">{service.name}</h3>
            <p className="mt-2 text-sm text-white/88">{service.tagline}</p>
            <span className="mt-3 inline-flex translate-y-1 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#C9A96E] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              Explore Concept →
            </span>
          </div>
        </div>

        <div className="px-2 pb-2 pt-4">
          <p className="line-clamp-2 text-sm leading-relaxed text-black/70">{service.description}</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-black/10 bg-[#F8F9FA] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-black/75">
              {service.duration}
            </span>
            <span className="text-sm font-semibold text-black">{service.price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

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
            <LivingServiceCard key={service.id} service={service} />
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
