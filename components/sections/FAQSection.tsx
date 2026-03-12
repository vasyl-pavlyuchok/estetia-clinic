'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FaqItem = { question: string; answer: string };
type FaqCategory = { title: string; entries: FaqItem[] };

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
      {
        question: '¿Cuántas sesiones necesito para ver cambios reales?',
        answer:
          'La mayoría de protocolos trabajan en ciclos de 3 a 6 sesiones. En la consulta inicial te explicamos qué esperar en cada fase y cuándo es razonable evaluar el resultado.',
      },
    ],
  },
  {
    title: 'Seguridad clínica',
    entries: [
      {
        question: '¿Qué garantías de seguridad ofrece Estetia?',
        answer:
          'Trabajamos con valoración médica previa, contraindicaciones claras y seguimiento posterior. El objetivo es minimizar riesgos y preservar resultados naturales.',
      },
      {
        question: '¿Hay contraindicaciones importantes?',
        answer:
          'Sí, y varían según tratamiento. Durante la consulta se revisa historial clínico, medicación y condiciones de la piel para descartar protocolos no indicados.',
      },
      {
        question: '¿Qué pasa si el resultado no es el esperado?',
        answer:
          'Revisamos el caso, ajustamos el protocolo y documentamos las causas. Ningún resultado se abandona sin análisis — el seguimiento forma parte del servicio desde el primer día.',
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
      {
        question: '¿La primera consulta tiene coste?',
        answer:
          'No. La primera visita es un diagnóstico sin compromiso. Si decides seguir adelante, el coste de la consulta se descuenta del primer tratamiento.',
      },
    ],
  },
  {
    title: 'Agente de IA',
    entries: [
      {
        question: '¿El agente puede darme un diagnóstico médico?',
        answer:
          'No. El agente orienta, informa y ayuda a preparar la consulta, pero no sustituye la valoración clínica de un médico. Cualquier recomendación de tratamiento requiere visita presencial.',
      },
      {
        question: '¿Qué tipo de preguntas puedo hacerle?',
        answer:
          'Preguntas sobre tratamientos, tiempos de recuperación, precios orientativos, disponibilidad y dudas post-sesión. Está disponible 24/7 y responde en lenguaje claro, sin tecnicismos.',
      },
      {
        question: '¿Es seguro compartir información personal con el asistente?',
        answer:
          'Sí. Las conversaciones están protegidas bajo normativa RGPD europea. No se almacenan datos identificativos ni se comparten con terceros.',
      },
    ],
  },
];

export default function FAQSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section id="faq" className="bg-white py-20 md:py-24" aria-label="Preguntas frecuentes">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-7 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">FAQ</p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
              Respuestas claras para decidir con tranquilidad.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-black/72 md:justify-self-end">
            Explicamos lo esencial sin tecnicismos innecesarios. Si necesitas mayor profundidad
            clínica, el equipo médico amplía cada punto en consulta.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {FAQ_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-5 md:p-6"
            >
              <h3 className="font-heading text-[1.55rem] leading-tight text-black">
                {category.title}
              </h3>
              <div className="mt-4 space-y-2">
                {category.entries.map((entry, i) => {
                  const key = `${category.title}-${i}`;
                  const isOpen = openKey === key;
                  return (
                    <div
                      key={key}
                      className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold leading-snug text-black">
                          {entry.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0 text-lg font-light text-black/40"
                          aria-hidden
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <p className="px-4 pb-4 text-sm leading-relaxed text-black/68">
                              {entry.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
