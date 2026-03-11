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
    <footer className="bg-[#0D1418] text-white" aria-label="Pie de página">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-16 md:px-10">
        <div className="grid gap-10 border-b border-white/12 pb-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7FAFC2]">
              Estetia Clinic
            </p>
            <h2 className="font-heading mt-4 max-w-[14ch] text-4xl leading-tight text-white md:text-5xl">
              Medicina estética de lujo con precisión clínica.
            </h2>
            <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-white/70">
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
                      className="text-sm text-white/76 transition-colors duration-300 hover:text-white"
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
                      className="text-sm text-white/76 transition-colors duration-300 hover:text-white"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Estetia Clinic. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="transition-colors duration-300 hover:text-white/75">
              Política de privacidad
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white/75">
              Términos y condiciones
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-white/75">
              Consentimiento informado
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
