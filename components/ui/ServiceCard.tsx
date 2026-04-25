import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Service } from '@/lib/services';

type ServiceCardProps = {
  service: Service;
  variant?: 'dark' | 'light' | 'frost';
};

export default function ServiceCard({ service, variant = 'dark' }: ServiceCardProps) {
  const t = useTranslations('services');
  if (variant === 'frost') {
    return (
      <article className="group relative h-[480px] overflow-hidden rounded-3xl border border-black/[0.06] shadow-[0_4px_40px_-10px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_8px_56px_-12px_rgba(0,0,0,0.16)]">
        {/* Full-bleed image */}
        <img
          src={service.img_url}
          alt={service.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Frosted white panel — exact same glass recipe as Hero "Explorar tratamientos" button */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.22] bg-[linear-gradient(150deg,rgba(255,255,255,0.55)_0%,rgba(250,253,255,0.45)_56%,rgba(246,249,252,0.35)_100%)] px-5 pb-5 pt-5 backdrop-blur-[15px] backdrop-brightness-[0.98] backdrop-saturate-[1.4]">
          <span className="inline-flex rounded-full border border-[#C9A96E]/70 bg-[#C9A96E]/25 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#5C3D0A]">
            {service.categoryLabel}
          </span>

          <h3 className="font-heading mt-3 line-clamp-1 text-[1.75rem] leading-tight text-[#0D1418]">
            {service.name}
          </h3>
          <p className="mt-1.5 line-clamp-1 text-sm leading-relaxed text-black/65">
            {service.tagline}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-black/[0.08] pt-3.5">
            <span className="text-[0.72rem] font-medium text-black/45">{service.duration}</span>
            <Link
              href={`/servicios/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#2C5F6F] transition-colors duration-300 hover:text-[#1F4B5A]"
            >
              {t('ctaView')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'light') {
    return (
      <article className="group flex h-[480px] flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-[0_4px_40px_-10px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_8px_56px_-12px_rgba(0,0,0,0.16)]">
        {/* Image — top 58% */}
        <div className="relative h-[278px] shrink-0 overflow-hidden">
          <img
            src={service.img_url}
            alt={service.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          {/* Subtle fade into white */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between px-5 pb-5 pt-3">
          <div>
            <span className="inline-flex rounded-full border border-[#C9A96E]/50 bg-[#C9A96E]/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#8B6914]">
              {service.categoryLabel}
            </span>
            <h3 className="font-heading mt-3 line-clamp-1 text-[1.65rem] leading-tight text-[#0D1418]">
              {service.name}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-black/55">
              {service.tagline}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-black/[0.07] pt-3.5">
            <span className="text-[0.72rem] font-medium text-black/45">{service.duration}</span>
            <Link
              href={`/servicios/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[#2C5F6F] transition-colors duration-300 hover:text-[#1F4B5A]"
            >
              {t('ctaView')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // ── DARK variant (original) ──────────────────────────────────────────────
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
