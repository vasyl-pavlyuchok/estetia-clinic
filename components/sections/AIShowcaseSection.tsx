import Link from 'next/link';

export default function AIShowcaseSection() {
  const iaPillars = [
    {
      title: 'Tecnología de primer nivel, sin compromiso',
      copy:
        'Trabajamos exclusivamente con las herramientas más avanzadas del mercado. Nuestro agente de voz está desarrollado sobre la plataforma ElevenLabs, referente mundial en síntesis de voz y agentes conversacionales con IA.',
    },
    {
      title: 'Entrenado para esta clínica',
      copy:
        'No es una IA genérica. Está entrenada con los protocolos, tratamientos y criterios clínicos de Estetia. Entiende tu contexto, responde con precisión y sabe cuándo derivarte al especialista correcto.',
    },
    {
      title: 'El médico para lo que importa',
      copy:
        'Las consultas básicas, las citas, las dudas frecuentes — la IA las gestiona con precisión. El equipo médico dedica su tiempo y criterio a lo que ninguna máquina puede hacer: tratarte como individuo.',
    },
  ];

  const capabilityGrid = [
    {
      title: 'Reservar cita',
      description:
        'Consulta disponibilidad en tiempo real y agenda tu visita en segundos. Sin formularios, sin esperas.',
    },
    {
      title: 'Resolver dudas',
      description:
        'Precios, tiempos de recuperación, qué esperar de cada tratamiento. Respuestas entrenadas con los protocolos reales de Estetia.',
    },
    {
      title: 'Comparar tratamientos',
      description:
        '¿No sabes qué tratamiento elegir? El asistente explica diferencias, indicaciones y resultados esperados.',
    },
    {
      title: 'Conversación natural',
      description:
        'Puedes interrumpirle, cambiar de tema, reformular. Entiende el contexto y responde con fluidez, como lo haría una persona.',
    },
    {
      title: 'Derivar al especialista',
      description:
        'Cuando una consulta requiere criterio médico, el asistente lo detecta y te conecta con el profesional adecuado del equipo.',
    },
    {
      title: 'Disponible 24/7',
      description:
        'Fuera de horario clínico sigue activo para resolver dudas y registrar solicitudes de cita.',
    },
  ];

  const complianceItems = [
    {
      title: 'RGPD — Reglamento (UE) 2016/679',
      description:
        'Todos los datos personales se gestionan bajo los requisitos del RGPD. El usuario tiene derecho de acceso, rectificación y eliminación en cualquier momento. Nunca cedemos datos a terceros sin consentimiento explícito.',
    },
    {
      title: 'EU AI Act — Reglamento (UE) 2024/1689',
      description:
        'Nuestro agente de voz opera en la categoría de riesgo limitado según la clasificación europea: asistente conversacional para gestión de citas y consultas no clínicas. Cumplimos la obligación de transparencia activa: el usuario siempre sabe que está interactuando con una IA.',
    },
    {
      title: 'Cifrado de extremo a extremo',
      description:
        'Toda comunicación con el agente utiliza cifrado TLS. Los datos se protegen tanto en tránsito como en reposo.',
    },
    {
      title: 'Tus datos no entrenan ningún modelo',
      description:
        'Las conversaciones con el asistente no se utilizan para reentrenar modelos de IA, ni propios ni de terceros. Uso exclusivamente operativo.',
    },
    {
      title: 'Protocolo de pseudonimización',
      description:
        'Las conversaciones se disocian de la identidad del paciente mediante protocolos de pseudonimización. Ningún tercero accede a datos identificativos sin consentimiento explícito.',
    },
    {
      title: 'Proveedor con certificación internacional',
      description:
        'ElevenLabs, la plataforma sobre la que opera el agente de voz, cuenta con certificación SOC2 y cumplimiento GDPR. Opera bajo el marco EU-US Data Privacy Framework, que regula legalmente las transferencias de datos entre Europa y Estados Unidos con las garantías exigidas por la normativa europea.',
    },
  ];

  return (
    <section
      id="ia-assistant"
      className="relative overflow-hidden bg-[#0D1418] py-20 md:py-24"
      aria-label="Agentes de inteligencia artificial"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_10%,rgba(127,175,194,0.2),transparent_44%),radial-gradient(circle_at_84%_88%,rgba(201,169,110,0.15),transparent_48%),linear-gradient(180deg,rgba(9,14,18,0.97)_0%,rgba(13,20,24,0.99)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:58px_58px]" />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 md:px-10">
        <header className="relative isolate overflow-hidden rounded-[2rem] border border-white/14 bg-[linear-gradient(148deg,rgba(20,32,39,0.9)_0%,rgba(15,24,30,0.94)_46%,rgba(12,19,24,0.97)_100%)] p-7 shadow-[0_24px_58px_-40px_rgba(0,0,0,0.8)] md:p-10">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#7FAFC2]/14 blur-[90px]" />
            <div className="absolute -bottom-24 right-[-4.5rem] h-56 w-56 rounded-full bg-[#C9A96E]/12 blur-[100px]" />
          </div>

          <div className="relative max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9EC9D8]">
              Inteligencia clínica
            </p>
            <h2 className="font-heading mt-4 max-w-[18ch] text-4xl leading-tight text-white md:text-5xl">
              La inteligencia más avanzada del mundo, al servicio de tu experiencia clínica.
            </h2>
            <p className="mt-6 max-w-[68ch] text-[1.02rem] leading-relaxed text-white/84">
              En Estetia creemos que la tecnología no reemplaza al médico, lo libera.
              Por eso hemos integrado el agente de voz más avanzado disponible hoy, para
              que cada minuto de consulta sea dedicado a lo que solo un especialista puede hacer.
            </p>
          </div>

          <div className="relative mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-full border border-[#A5CEDC]/36 bg-[linear-gradient(140deg,rgba(29,73,90,0.66)_0%,rgba(47,103,124,0.54)_100%)] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[linear-gradient(140deg,rgba(35,84,102,0.76)_0%,rgba(54,118,141,0.64)_100%)]"
            >
              Habla con nuestro asistente
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/22 bg-white/10 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-white/84">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7FAFC2]" />
              Desarrollado con tecnología ElevenLabs — líder mundial en agentes de voz con IA
            </span>
          </div>
        </header>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3">
          {iaPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-white/13 bg-[linear-gradient(155deg,rgba(21,33,40,0.82)_0%,rgba(16,25,31,0.88)_100%)] p-5 shadow-[0_16px_34px_-30px_rgba(0,0,0,0.78)]"
            >
              <span className="inline-flex rounded-full border border-[#9EC9D8]/36 bg-[#7FAFC2]/12 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#D6EDF7]">
                Pilar {index + 1}
              </span>
              <h3 className="font-heading mt-3 text-[1.6rem] leading-tight text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/82">{pillar.copy}</p>
            </article>
          ))}
        </div>

        <div className="relative mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9EC9D8]">
            ¿Qué puede hacer por ti?
          </p>
          <h3 className="font-heading mt-3 text-3xl leading-tight text-white md:text-4xl">
            Un asistente diseñado para anticiparse a tus necesidades — disponible en todo momento.
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilityGrid.map((capability, index) => (
              <article
                key={capability.title}
                className="group rounded-2xl border border-white/13 bg-[linear-gradient(155deg,rgba(21,33,41,0.8)_0%,rgba(17,26,33,0.84)_100%)] p-5 transition-colors duration-300 hover:border-[#9EC9D8]/38"
              >
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[#9EC9D8]/35 bg-[#7FAFC2]/12 px-2 text-[0.65rem] font-semibold text-[#D8EEF6]">
                  C{index + 1}
                </span>
                <h4 className="mt-3 font-heading text-[1.55rem] leading-tight text-white">{capability.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{capability.description}</p>
              </article>
            ))}
          </div>

          <article className="mt-5 rounded-2xl border border-[#C9A96E]/24 bg-[linear-gradient(145deg,rgba(201,169,110,0.12)_0%,rgba(127,175,194,0.06)_100%)] p-4">
            <p className="text-xs leading-relaxed text-white/75">
              El asistente de voz no emite diagnósticos ni recomendaciones médicas. Cualquier decisión clínica es tomada exclusivamente por los profesionales del equipo Estetia. Así lo exige la regulación europea y así lo creemos nosotros.
            </p>
          </article>
        </div>

        <div className="relative mt-12 rounded-[2rem] border border-white/13 bg-[linear-gradient(146deg,rgba(17,28,35,0.88)_0%,rgba(13,21,27,0.92)_100%)] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#D7B881]">
            Seguridad y compliance
          </p>
          <h3 className="font-heading mt-3 text-3xl leading-tight text-white md:text-4xl">
            Privacidad, seguridad y cumplimiento normativo
          </h3>
          <p className="mt-3 max-w-[72ch] text-sm leading-relaxed text-white/78">
            En Estetia, tecnología avanzada y protección de datos no son conceptos opuestos. Cumplimos los estándares europeos más exigentes.
          </p>

          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {complianceItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(22,35,43,0.74)_0%,rgba(18,28,35,0.78)_100%)] p-4"
              >
                <p className="text-sm font-semibold text-white">
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-[#9EC9D8]/45 bg-[#7FAFC2]/12 px-1 text-[0.62rem] font-semibold text-[#CFE6F1]"
                  >
                    {index + 1}
                  </span>
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/76">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-12">
          <article className="rounded-3xl border border-[#D7B881]/28 bg-[linear-gradient(150deg,rgba(201,169,110,0.16)_0%,rgba(127,175,194,0.09)_56%,rgba(255,255,255,0.05)_100%)] p-7 shadow-[0_22px_48px_-34px_rgba(0,0,0,0.7)]">
            <p className="font-heading text-[clamp(1.55rem,3.7vw,2.45rem)] leading-tight text-white">
              Estetia integra uno de los agentes de voz más avanzados disponibles hoy, construido sobre ElevenLabs, líder mundial en síntesis de voz con IA, bajo pleno cumplimiento del AI Act europeo y el RGPD.
            </p>
            <p className="mt-4 max-w-[78ch] text-sm leading-relaxed text-white/82">
              No usamos la tecnología para impresionar. La usamos porque hace mejor nuestro trabajo y protege a nuestros pacientes.
            </p>
          </article>
        </div>

        <div className="relative mt-12">
          <Link
            href="/servicios"
            className="inline-flex rounded-full border border-white/24 bg-white/10 px-5 py-2.5 text-sm font-semibold text-[#D6EDF7] transition-colors duration-300 hover:bg-white/16"
          >
            Continuar por navegación clásica
          </Link>
        </div>
      </div>
    </section>
  );
}
