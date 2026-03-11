type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  title: string;
  entries: FaqItem[];
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: 'Tratamientos y resultados',
    entries: [
      {
        question: '¿Cómo sé qué tratamiento es el adecuado para mí?',
        answer:
          'Comenzamos con una consulta de diagnóstico para revisar objetivos, indicaciones y tiempos de recuperación. A partir de ahí se propone un plan personalizado y escalable.',
      },
      {
        question: '¿Los resultados son inmediatos o progresivos?',
        answer:
          'Depende del protocolo. Algunos tratamientos aportan mejora visible en la primera sesión, mientras que otros optimizan textura y firmeza de forma progresiva en semanas o meses.',
      },
    ],
  },
  {
    title: 'Seguridad clínica',
    entries: [
      {
        question: '¿Qué garantías de seguridad ofrece Estetia?',
        answer:
          'Trabajamos con valoración médica previa, contraindicaciones claras, equipos certificados y seguimiento posterior. El objetivo es minimizar riesgos y preservar resultados naturales.',
      },
      {
        question: '¿Hay contraindicaciones importantes?',
        answer:
          'Sí, y varían según tratamiento. Durante la consulta se revisa historial clínico, medicación y condiciones de la piel para descartar protocolos no indicados.',
      },
    ],
  },
  {
    title: 'Citas y planificación',
    entries: [
      {
        question: '¿Cuánto tiempo debo reservar para una primera visita?',
        answer:
          'Recomendamos entre 45 y 60 minutos para diagnóstico, planificación y explicación de alternativas terapéuticas con tiempos de recuperación.',
      },
      {
        question: '¿Puedo combinar varios tratamientos en una misma fase?',
        answer:
          'Sí, cuando el criterio médico lo permite. La estrategia combinada se diseña para sumar beneficios sin comprometer seguridad ni naturalidad del resultado.',
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 md:py-24" aria-label="Preguntas frecuentes">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-7 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
              FAQ
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
              Respuestas claras para decidir con tranquilidad.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-black/72 md:justify-self-end">
            Explicamos lo esencial sin tecnicismos innecesarios. Si necesitas mayor
            profundidad clínica, el equipo médico amplía cada punto en consulta.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {FAQ_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-5 md:p-6"
            >
              <h3 className="font-heading text-[1.9rem] leading-tight text-black">
                {category.title}
              </h3>
              <div className="mt-4 space-y-3">
                {category.entries.map((entry) => (
                  <details
                    key={entry.question}
                    className="rounded-2xl border border-black/10 bg-white p-4"
                  >
                    <summary className="cursor-pointer text-sm font-semibold text-black">
                      {entry.question}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-black/72">{entry.answer}</p>
                  </details>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
