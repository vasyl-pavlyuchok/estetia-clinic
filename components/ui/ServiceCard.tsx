import Link from 'next/link';
import type { Service } from '@/lib/services';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {

  return (
    <article className="group relative h-[480px] overflow-hidden rounded-3xl text-white">
      {/* Full-bleed image — video-ready: swap <img> for <video autoPlay muted loop playsInline> */}
      <img
        src={service.img_url}
        alt={service.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Gradient overlay — light vignette only, image stays visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#120800]/80 via-[#120800]/15 to-transparent" />

      {/* Frosted glass content panel — darker here, not on the image */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#C9A96E]/25 bg-[#120800]/72 px-5 pb-5 pt-5 shadow-[0_-20px_40px_-8px_rgba(18,8,0,0.7)] backdrop-blur-md">
        <span className="inline-flex rounded-full border border-[#C9A96E]/60 bg-[#C9A96E]/22 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#E8CC8A]">
          {service.categoryLabel}
        </span>

        <h3 className="font-heading mt-3 line-clamp-1 text-[1.75rem] leading-tight text-white">
          {service.name}
        </h3>
        <p className="mt-1.5 line-clamp-1 text-sm leading-relaxed text-white/88">
          {service.tagline}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-white/16 pt-3.5">
          <span className="text-[0.72rem] font-medium text-white/72">{service.duration}</span>
          <Link
            href={`/servicios/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#E8CC8A] transition-colors duration-300 group-hover:text-white"
          >
            Explorar
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
