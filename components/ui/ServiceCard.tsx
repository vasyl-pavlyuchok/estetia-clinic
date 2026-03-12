import Link from 'next/link';
import type { Service } from '@/lib/services';

type ServiceCardProps = {
  service: Service;
  imageOverrideUrl?: string;
};

const ICON_PATHS: Record<string, string> = {
  droplet: 'M12 3C9 7 6 9.8 6 13a6 6 0 0012 0c0-3.2-3-6-6-10z',
  droplets: 'M8.5 4.2C6.5 7 5 8.8 5 11a3.5 3.5 0 007 0c0-2.2-1.5-4-3.5-6.8zm7 2.5C13.9 9 13 10.2 13 11.8a2.5 2.5 0 005 0c0-1.6-.9-2.8-2.5-5.1z',
  layers: 'M12 4l8 4-8 4-8-4 8-4zm8 8-8 4-8-4m16 4-8 4-8-4',
  zap: 'M13 2 4 13h6l-1 9 9-11h-6z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  sparkles: 'M12 2l1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2z',
  activity: 'M3 12h4l2-5 4 10 2-5h6',
  snowflake: 'M12 2v20M4.9 6.1l14.2 11.8M19.1 6.1 4.9 17.9',
  wind: 'M3 8h11a3 3 0 100-6M3 16h14a3 3 0 110 6H7',
  'circle-dot': 'M12 3a9 9 0 110 18 9 9 0 010-18zm0 6a3 3 0 100 6 3 3 0 000-6z',
  circle: 'M12 3a9 9 0 110 18 9 9 0 010-18z',
  dna: 'M7 3c4 0 6 3 10 3M7 21c4 0 6-3 10-3M7 3c0 6 10 9 10 18M17 3c0 6-10 9-10 18',
  gem: 'M3 9l5-6h8l5 6-9 12L3 9z',
  feather: 'M20 4c-5.2 0-9.3 1.6-12.3 4.7S3 15.8 3 21c5.2 0 9.3-1.6 12.3-4.7S20 9.2 20 4zm-9 10 3 3',
  sun: 'M12 3v3m0 12v3m9-9h-3M6 12H3m14.4 6.4-2.1-2.1M8.7 8.7 6.6 6.6m10.8 0-2.1 2.1M8.7 15.3l-2.1 2.1M12 8a4 4 0 100 8 4 4 0 000-8z',
  target: 'M12 3a9 9 0 110 18 9 9 0 010-18zm0 4.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 2.7a2.1 2.1 0 100 4.2 2.1 2.1 0 000-4.2z',
  smile: 'M12 3a9 9 0 110 18 9 9 0 010-18zm-3 6h.01M15 9h.01M8.6 13.5c1 1.2 2.2 1.8 3.4 1.8s2.4-.6 3.4-1.8',
  anchor: 'M12 3v6m0 0a2 2 0 100-4 2 2 0 000 4zm-6 4h12m-6 0v9m-6-6c1.2 3 3.3 4.5 6 4.5s4.8-1.5 6-4.5',
};

function ServiceIcon({ icon }: { icon: string }) {
  const path = ICON_PATHS[icon] ?? ICON_PATHS.sparkles;

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A96E]/35 bg-[linear-gradient(145deg,rgba(201,169,110,0.18)_0%,rgba(255,255,255,0.58)_100%)] text-[#9A743D] backdrop-blur-[6px]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ServiceCard({ service, imageOverrideUrl }: ServiceCardProps) {
  const cardImageUrl = imageOverrideUrl ?? service.img_url;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[#E7DBCD] bg-[linear-gradient(170deg,#FFFDFB_0%,#FAF6F1_100%)] shadow-[0_26px_54px_-40px_rgba(88,57,24,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_58px_-38px_rgba(88,57,24,0.34)]">
      <Link href={`/servicios/${service.slug}`} className="block">
        <div className="relative aspect-[16/11] overflow-hidden border-b border-[#DCCFBE] bg-[#EFE9E1]">
          <img
            src={cardImageUrl}
            alt={service.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-black/6 to-transparent" />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <ServiceIcon icon={service.icon} />
            <span className="rounded-full border border-[#DED1C2] bg-white/72 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#2C5F6F] backdrop-blur-[6px]">
              {service.categoryLabel}
            </span>
          </div>

          <h3 className="font-heading mt-4 text-[1.8rem] leading-tight text-[#191919]">{service.name}</h3>
          <p className="mt-1.5 text-sm font-medium text-black/74">{service.tagline}</p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-black/64">{service.description}</p>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#DFD2C3] pt-4">
            <span className="rounded-full border border-[#DED1C2] bg-white/74 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-black/72 backdrop-blur-[6px]">
              {service.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#1D1D1D]">
              Explorar
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
