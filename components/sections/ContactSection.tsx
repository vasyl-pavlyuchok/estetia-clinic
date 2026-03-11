export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#F6F7F8] py-20 md:py-24"
      aria-label="Contacto y ubicación"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(127,175,194,0.18),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(201,169,110,0.12),transparent_44%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
              Contacto
            </p>
            <h2 className="font-heading mt-4 max-w-[14ch] text-4xl leading-tight text-black md:text-5xl">
              Agenda una valoración y define tu plan ideal.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[0.98rem] leading-relaxed text-black/72">
              Te ayudamos a priorizar objetivos, resolver dudas y construir un tratamiento
              realista según tu tiempo y contexto clínico.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-black/12 bg-white p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#2C5F6F]">
                  WhatsApp
                </p>
                <p className="mt-2 text-sm font-medium text-black">+34 600 000 000</p>
                <p className="mt-1 text-xs text-black/62">Respuesta rápida en horario clínico</p>
              </article>
              <article className="rounded-2xl border border-black/12 bg-white p-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#2C5F6F]">
                  Ubicación
                </p>
                <p className="mt-2 text-sm font-medium text-black">Calle Serrano 101, Madrid</p>
                <p className="mt-1 text-xs text-black/62">Distrito Salamanca</p>
              </article>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="https://wa.me/34600000000"
                className="rounded-full border border-[#2C5F6F]/35 bg-[#2C5F6F]/8 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#1F4C59] transition-colors duration-300 hover:bg-[#2C5F6F]/12"
              >
                Abrir WhatsApp
              </a>
              <a
                href="mailto:info@estetia.com"
                className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-black/84 transition-colors duration-300 hover:bg-white/70"
              >
                Enviar email
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <form
              className="rounded-3xl border border-black/12 bg-white p-6 shadow-[0_24px_55px_-44px_rgba(0,0,0,0.36)]"
              aria-label="Formulario de contacto"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#2C5F6F]">
                Solicitar cita
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-xs font-medium text-black/72">
                  Nombre
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="rounded-xl border border-black/12 bg-[#F8F9FA] px-3 py-2.5 text-sm text-black placeholder:text-black/42"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-black/72">
                  Teléfono
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+34 ..."
                    className="rounded-xl border border-black/12 bg-[#F8F9FA] px-3 py-2.5 text-sm text-black placeholder:text-black/42"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-black/72 sm:col-span-2">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="rounded-xl border border-black/12 bg-[#F8F9FA] px-3 py-2.5 text-sm text-black placeholder:text-black/42"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-black/72 sm:col-span-2">
                  Objetivo principal
                  <input
                    type="text"
                    name="goal"
                    placeholder="Ej. mejorar textura y luminosidad"
                    className="rounded-xl border border-black/12 bg-[#F8F9FA] px-3 py-2.5 text-sm text-black placeholder:text-black/42"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-xs font-medium text-black/72 sm:col-span-2">
                  Mensaje
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos qué te gustaría mejorar"
                    className="rounded-xl border border-black/12 bg-[#F8F9FA] px-3 py-2.5 text-sm text-black placeholder:text-black/42"
                  />
                </label>
              </div>
              <button
                type="button"
                className="mt-5 rounded-full border border-[#C9A96E]/50 bg-[#C9A96E]/16 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#5E4720] transition-colors duration-300 hover:bg-[#C9A96E]/24"
              >
                Solicitar valoración
              </button>
              <p className="mt-3 text-xs leading-relaxed text-black/58">
                Al enviar, un asesor clínico te contacta para validar indicaciones y
                disponibilidad horaria.
              </p>
            </form>

            <article className="rounded-3xl border border-black/12 bg-white p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#2C5F6F]">
                Horarios
              </p>
              <ul className="mt-3 space-y-2 text-sm text-black/78">
                <li>Lunes a Viernes: 10:00 - 20:00</li>
                <li>Sábado: 10:00 - 14:00</li>
                <li>Domingo: Cerrado</li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-black/62">
                Atención por cita previa para garantizar tiempo clínico personalizado.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
