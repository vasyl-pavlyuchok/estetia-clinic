import Link from 'next/link';

type FooterSectionProps = {
  categories: string[];
};

const FOOTER_LINKS = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#ia-assistant', label: 'Asistente IA' },
  { href: '/#social-proof', label: 'Resultados' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function FooterSection({ categories }: FooterSectionProps) {
  return (
    <footer className="relative overflow-hidden bg-[#0D1418] text-white" aria-label="Pie de página">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(127,175,194,0.16),transparent_42%),radial-gradient(circle_at_82%_84%,rgba(201,169,110,0.12),transparent_44%),linear-gradient(180deg,rgba(9,14,18,0.98)_0%,rgba(13,20,24,1)_100%)]" />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 pb-8 pt-16 md:px-10">
        <div className="grid gap-10 rounded-[2rem] border border-white/12 bg-[linear-gradient(148deg,rgba(20,32,39,0.9)_0%,rgba(14,23,29,0.94)_46%,rgba(12,19,24,0.97)_100%)] p-7 shadow-[0_24px_58px_-40px_rgba(0,0,0,0.8)] md:p-9 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7FAFC2]">
              Estetia Clinic
            </p>
            <h2 className="font-heading mt-4 max-w-[14ch] text-4xl leading-tight text-white md:text-5xl">
              Medicina estética de lujo con precisión clínica.
            </h2>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-white/72">
              Protocolos personalizados, tecnología certificada y asistencia IA para una
              experiencia segura, elegante y medible.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <nav aria-label="Enlaces principales">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D5B884]">
                Navegación
              </p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/76 transition-colors duration-300 hover:text-[#D8ECF5]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D5B884]">
                Categorías
              </p>
              <ul className="mt-4 space-y-2.5">
                {categories.slice(0, 6).map((category) => (
                  <li key={category}>
                    <Link
                      href={`/servicios?categoria=${encodeURIComponent(category)}`}
                      className="text-sm text-white/76 transition-colors duration-300 hover:text-[#D8ECF5]"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-1 pt-7 text-xs text-white/56 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Estetia Clinic. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition-colors duration-300 hover:text-white/78">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white/78">
              Términos y condiciones
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white/78">
              Consentimiento informado
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
