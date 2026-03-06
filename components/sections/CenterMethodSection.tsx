'use client';

import { motion } from 'framer-motion';

export default function CenterMethodSection() {
  return (
    <section id="center-method" className="bg-white py-20 md:py-24" aria-label="The Center Method">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
            The Center Method
          </p>
          <h2 className="font-heading mt-4 max-w-[14ch] text-4xl leading-tight text-black md:text-5xl">
            Simetria, ciencia y diseno de precision para una belleza sin ruido.
          </h2>
          <p className="mt-6 max-w-[56ch] leading-relaxed text-black/70">
            Nuestro metodo combina diagnostico avanzado, protocolos personalizados y un
            enfoque conservador para mejorar proporciones, no disfrazarlas. Cada decision
            busca equilibrio anatomico y resultado natural.
          </p>
        </div>

        <article className="rounded-3xl border border-black/10 bg-[#F8F9FA] p-7 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.35)]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#2C5F6F]">
            Malla de Simetria
          </p>

          <div className="relative mt-4 h-64 overflow-hidden rounded-2xl border border-[#C9A96E]/30 bg-white">
            <motion.div
              animate={{ rotate: [0, 2.4, 0], y: [0, -4, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0"
              aria-hidden="true"
            >
              <svg viewBox="0 0 420 320" className="h-full w-full">
                <g stroke="#C9A96E" strokeOpacity="0.45" strokeWidth="0.5" fill="none">
                  <line x1="210" y1="14" x2="210" y2="306" />
                  <ellipse cx="210" cy="160" rx="132" ry="126" />
                  <ellipse cx="210" cy="160" rx="102" ry="104" />
                  <ellipse cx="210" cy="166" rx="72" ry="76" />
                  <path d="M78 160h264" />
                  <path d="M92 112h236" />
                  <path d="M92 208h236" />
                  <path d="M118 86h184" />
                  <path d="M118 234h184" />
                  <path d="M155 160q55-22 110 0" />
                  <path d="M160 196q50 20 100 0" />
                  <path d="M140 140q30-18 60 0" />
                  <path d="M220 140q30-18 60 0" />
                </g>
              </svg>
            </motion.div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(201,169,110,0.15),transparent_60%)]" />
          </div>

          <ol className="mt-5 space-y-3 text-sm leading-relaxed text-black/78">
            <li>1. Diagnostico profundo de estructura facial y corporal.</li>
            <li>2. Plan medico con progresion medible y controlada.</li>
            <li>3. Tecnologia certificada aplicada con criterio simetrico.</li>
          </ol>
        </article>
      </div>
    </section>
  );
}
