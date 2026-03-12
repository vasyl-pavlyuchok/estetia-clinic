export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#0D1418] py-20 md:py-24"
      aria-label="Contacto y ubicación"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(127,175,194,0.18),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(201,169,110,0.14),transparent_44%),linear-gradient(180deg,rgba(9,14,18,0.97)_0%,rgba(13,20,24,0.99)_100%)]" />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="rounded-[2rem] border border-white/14 bg-[linear-gradient(148deg,rgba(20,32,39,0.9)_0%,rgba(15,24,30,0.94)_46%,rgba(12,19,24,0.97)_100%)] p-7 shadow-[0_24px_58px_-40px_rgba(0,0,0,0.8)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.02fr_0.98fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7FAFC2]">
                Contacto
              </p>
              <h2 className="font-heading mt-4 max-w-[14ch] text-4xl leading-tight text-white md:text-5xl">
                Agenda una valoración y define tu plan ideal.
              </h2>
              <p className="mt-6 max-w-[52ch] text-[0.98rem] leading-relaxed text-white/65">
                Te ayudamos a priorizar objetivos, resolver dudas y construir un tratamiento
                realista según tu tiempo y contexto clínico.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <article className="rounded-2xl border border-white/12 bg-white/6 p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7FAFC2]">
                    WhatsApp
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">+34 600 000 000</p>
                  <p className="mt-1 text-xs text-white/52">Respuesta rápida en horario clínico</p>
                </article>
                <article className="rounded-2xl border border-white/12 bg-white/6 p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#7FAFC2]">
                    Ubicación
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">Calle Serrano 101, Madrid</p>
                  <p className="mt-1 text-xs text-white/52">Distrito Salamanca</p>
                </article>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/34600000000"
                  className="rounded-full border border-[#7FAFC2]/35 bg-[#7FAFC2]/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#BFE0EE] transition-colors duration-300 hover:bg-[#7FAFC2]/18"
                >
                  Abrir WhatsApp
                </a>
                <a
                  href="mailto:info@estetia.com"
                  className="rounded-full border border-white/18 bg-white/6 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/80 transition-colors duration-300 hover:bg-white/10"
                >
                  Enviar email
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <form
                className="rounded-3xl border border-white/12 bg-white/6 p-6 shadow-[0_24px_55px_-44px_rgba(0,0,0,0.6)]"
                aria-label="Formulario de contacto"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7FAFC2]">
                  Solicitar cita
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/65">
                    Nombre
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      className="rounded-xl border border-white/14 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#7FAFC2]/50 focus:outline-none focus:ring-0"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/65">
                    Teléfono
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+34 ..."
                      className="rounded-xl border border-white/14 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#7FAFC2]/50 focus:outline-none focus:ring-0"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/65 sm:col-span-2">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      className="rounded-xl border border-white/14 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#7FAFC2]/50 focus:outline-none focus:ring-0"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/65 sm:col-span-2">
                    Objetivo principal
                    <input
                      type="text"
                      name="goal"
                      placeholder="Ej. mejorar textura y luminosidad"
                      className="rounded-xl border border-white/14 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#7FAFC2]/50 focus:outline-none focus:ring-0"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-white/65 sm:col-span-2">
                    Mensaje
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Cuéntanos qué te gustaría mejorar"
                      className="rounded-xl border border-white/14 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#7FAFC2]/50 focus:outline-none focus:ring-0"
                    />
                  </label>
                </div>
                <button
                  type="button"
                  className="mt-5 rounded-full border border-[#C9A96E]/50 bg-[#C9A96E]/16 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#D5B884] transition-colors duration-300 hover:bg-[#C9A96E]/26"
                >
                  Solicitar valoración
                </button>
                <p className="mt-3 text-xs leading-relaxed text-white/45">
                  Al enviar, un asesor clínico te contacta para validar indicaciones y
                  disponibilidad horaria.
                </p>
              </form>

              <article className="rounded-3xl border border-white/12 bg-white/6 p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7FAFC2]">
                  Horarios
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/72">
                  <li>Lunes a Viernes: 10:00 - 20:00</li>
                  <li>Sábado: 10:00 - 14:00</li>
                  <li>Domingo: Cerrado</li>
                </ul>
                <p className="mt-4 text-xs leading-relaxed text-white/52">
                  Atención por cita previa para garantizar tiempo clínico personalizado.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
