import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug } from '@/lib/services';

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { title: 'Servicio no encontrado | Estetia' };
  }

  return {
    title: `${service.name} | Estetia`,
    description: service.tagline,
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ─── HERO — split layout ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — sticky image (desktop only) */}
        <div className="relative hidden lg:block sticky top-14 h-[calc(100svh-3.5rem)] overflow-hidden">
          <img
            src={service.img_url}
            alt={service.name}
            className="w-full h-full object-cover object-top kenburns"
          />
          {/* right edge fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/40 pointer-events-none" />
          {/* badge */}
          <div className="absolute bottom-10 left-9 z-10 flex items-center gap-3.5 bg-white/[0.88] backdrop-blur-[16px] border border-black/8 px-5 py-3.5 shadow-[0_8px_32px_rgba(13,20,24,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#7FAFC2] flex-shrink-0 animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#2C5F6F]">
              {service.categoryLabel}
            </span>
          </div>
        </div>

        {/* Mobile image */}
        <div className="relative lg:hidden h-[55svh] overflow-hidden">
          <img
            src={service.img_url}
            alt={service.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* RIGHT — scrolling content */}
        <div className="flex flex-col px-8 py-14 lg:px-16 lg:py-[72px]">

          {/* Back link */}
          <Link
            href="/servicios"
            className="self-start mb-8 text-[10px] font-semibold tracking-[0.25em] uppercase text-[#7a9097] hover:text-[#2C5F6F] transition-colors"
          >
            ← Todos los tratamientos
          </Link>

          {/* Category eyebrow */}
          <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.45em] uppercase text-[#2C5F6F] mb-5">
            <span className="w-5 h-px bg-[#2C5F6F] opacity-50" />
            {service.categoryLabel}
          </div>

          {/* Title */}
          <h1 className="font-heading text-5xl leading-[1.07] text-[#0D1418] mb-2">
            {service.name}
          </h1>
          <p className="font-heading text-lg italic text-[#C9A96E] mb-7">
            {service.tagline}
          </p>
          <p className="text-[15px] leading-[1.78] text-[#3d4f58] mb-10 max-w-[460px]">
            {service.description}
          </p>

          {/* Meta strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/8 border border-black/8 mb-11">
            <div className="bg-white px-4 py-[18px] hover:bg-[#F6F7F8] transition-colors">
              <div className="text-[8px] font-bold tracking-[0.35em] uppercase text-[#2C5F6F] opacity-60 mb-1.5">Duración</div>
              <div className="text-sm font-semibold text-[#0D1418]">{service.duration}</div>
            </div>
            <div className="bg-white px-4 py-[18px] hover:bg-[#F6F7F8] transition-colors">
              <div className="text-[8px] font-bold tracking-[0.35em] uppercase text-[#2C5F6F] opacity-60 mb-1.5">Recuperación</div>
              <div className="text-sm font-semibold text-[#0D1418]">{service.recovery}</div>
            </div>
            <div className="bg-white px-4 py-[18px] hover:bg-[#F6F7F8] transition-colors">
              <div className="text-[8px] font-bold tracking-[0.35em] uppercase text-[#2C5F6F] opacity-60 mb-1.5">Sesiones</div>
              <div className="text-sm font-semibold text-[#0D1418]">{service.sessions}</div>
            </div>
            <div className="bg-white px-4 py-[18px] hover:bg-[#F6F7F8] transition-colors">
              <div className="text-[8px] font-bold tracking-[0.35em] uppercase text-[#2C5F6F] opacity-60 mb-1.5">Precio</div>
              <div className="font-heading text-xl text-[#C9A96E]">{service.price}</div>
            </div>
          </div>

          {/* SEO tags */}
          {service.seoTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-9">
              {service.seoTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#2C5F6F] bg-[rgba(44,95,111,0.07)] border border-[rgba(44,95,111,0.14)] px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex gap-3 mt-auto">
            <Link
              href="/#contacto"
              className="flex-1 flex items-center justify-center px-7 py-4 bg-[#2C5F6F] text-white text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#0D1418] transition-colors"
            >
              Reservar consulta gratuita
            </Link>
            <a
              href="#protocolo"
              className="flex items-center justify-center px-7 py-4 text-[#3d4f58] text-[10px] font-semibold tracking-[0.2em] uppercase border border-black/8 hover:border-[#2C5F6F] hover:text-[#2C5F6F] transition-colors"
            >
              Ver protocolo
            </a>
          </div>

        </div>
      </div>

      {/* ─── SCROLL SECTION ─────────────────────────────────────────────── */}
      <div className="bg-[#F6F7F8] border-t border-black/8" id="protocolo">
        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] py-20 md:py-24">

          {/* BENEFITS */}
          <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.45em] uppercase text-[#2C5F6F] mb-4">
            <span className="w-5 h-px bg-[#2C5F6F] opacity-50" />
            Beneficios
          </div>
          <h2 className="font-heading text-[38px] md:text-[42px] leading-[1.1] text-[#0D1418] mb-14">
            Qué consigues con{' '}
            <br className="hidden md:block" />
            <em className="text-[#2C5F6F]">una sola sesión</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 border border-black/8 mb-20">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white px-8 py-9 group hover:bg-[#fafcfd] transition-colors relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2C5F6F] to-[#7FAFC2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="text-[#7FAFC2] mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#0D1418] leading-snug">{benefit}</p>
              </div>
            ))}
          </div>

          {/* PROTOCOL STEPS */}
          <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.45em] uppercase text-[#2C5F6F] mb-4">
            <span className="w-5 h-px bg-[#2C5F6F] opacity-50" />
            Protocolo clínico
          </div>
          <h2 className="font-heading text-[38px] md:text-[42px] leading-[1.1] text-[#0D1418] mb-14">
            Las <em className="text-[#2C5F6F]">{service.process.length} fases</em> del tratamiento
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/8 border border-black/8 mb-20">
            {service.process.map((step, i) => (
              <div
                key={step}
                className="bg-white px-9 py-10 flex gap-6 items-start group hover:bg-[#F6F7F8] transition-colors relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2C5F6F] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                <div className="w-10 h-10 border border-[rgba(44,95,111,0.14)] rounded-full flex items-center justify-center text-[11px] font-bold text-[#2C5F6F] flex-shrink-0 bg-[rgba(44,95,111,0.07)]">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm leading-[1.65] text-[#3d4f58]">{step}</p>
              </div>
            ))}
          </div>

          {/* INDICATIONS */}
          <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.45em] uppercase text-[#2C5F6F] mb-4">
            <span className="w-5 h-px bg-[#2C5F6F] opacity-50" />
            Indicaciones
          </div>
          <h2 className="font-heading text-[38px] md:text-[42px] leading-[1.1] text-[#0D1418] mb-8">
            ¿Es este tu <br className="hidden md:block" />
            <em className="text-[#2C5F6F]">tratamiento?</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-20">
            {service.indications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3.5 px-5 py-4 bg-white border border-black/8 text-[13px] text-[#3d4f58] hover:bg-[rgba(44,95,111,0.07)] hover:border-[rgba(44,95,111,0.14)] hover:text-[#2C5F6F] transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#7FAFC2] flex-shrink-0" width="16" height="16">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          {/* CONTRAINDICATIONS */}
          <div className="flex gap-5 items-start bg-[rgba(255,235,235,0.5)] border border-[rgba(200,80,80,0.15)] px-8 py-7">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[rgba(180,60,60,0.7)] flex-shrink-0 mt-0.5" width="22" height="22">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[rgba(180,60,60,0.8)] mb-2">
                Contraindicaciones — consultar antes
              </h4>
              <p className="text-[13px] text-[rgba(120,40,40,0.75)] leading-[1.65]">
                {service.contraindications.join('. ')}. En caso de duda, nuestro equipo médico evalúa la idoneidad del tratamiento en la consulta inicial sin coste.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ─── FINAL CTA ──────────────────────────────────────────────────── */}
      <div
        className="bg-[#0D1418] px-6 md:px-[60px] py-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-[60px] items-center"
        id="reservar"
      >
        <div>
          <h2 className="font-heading text-[36px] md:text-[40px] leading-[1.15] text-white mb-3">
            Primera consulta
            <br />
            <em className="text-[#D5B884]">sin coste ni compromiso</em>
          </h2>
          <p className="text-[14px] text-white/55 leading-[1.65] max-w-[480px]">
            Evaluamos tu piel, confirmamos que {service.name} es el tratamiento adecuado para ti y
            diseñamos un protocolo personalizado antes de hablar de presupuesto.
          </p>
        </div>
        <div className="flex flex-row lg:flex-col gap-3">
          <Link
            href="/#contacto"
            className="px-9 py-4 bg-[#C9A96E] text-[#0D1418] text-[10px] font-bold tracking-[0.25em] uppercase text-center whitespace-nowrap hover:bg-[#D5B884] transition-colors"
          >
            Reservar ahora
          </Link>
          <Link
            href="/servicios"
            className="px-9 py-4 text-white/55 text-[10px] font-semibold tracking-[0.2em] uppercase text-center whitespace-nowrap border border-white/15 hover:border-[#C9A96E] hover:text-[#D5B884] transition-colors"
          >
            Ver otros tratamientos
          </Link>
        </div>
      </div>

    </main>
  );
}
