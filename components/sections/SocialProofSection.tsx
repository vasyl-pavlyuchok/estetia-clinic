'use client';

import { useMemo, useState } from 'react';

const TESTIMONIALS = [
  {
    quote:
      'La experiencia fue precisa y serena. El resultado se ve natural, pero claramente mejor.',
    patient: 'Marta R. · 38',
    treatment: 'Bioestimulacion + Skinboosters',
  },
  {
    quote:
      'Lo que mas valoro es el criterio medico. Nada exagerado, todo medido y elegante.',
    patient: 'Claudia G. · 44',
    treatment: 'Hilos tensores + toxina',
  },
];

export default function SocialProofSection() {
  const [split, setSplit] = useState(52);

  const afterStyle = useMemo(
    () => ({
      clipPath: `inset(0 ${100 - split}% 0 0)`,
    }),
    [split],
  );

  return (
    <section
      id="social-proof"
      className="bg-white py-20 md:py-24"
      aria-label="Resultados y testimonios"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
          Social Proof
        </p>
        <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
          Evidencia visual y testimonios con estandar editorial.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-black/12 bg-[#F8F9FA] p-5 md:p-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-black/70">
              Antes / Despues
            </p>

            <div className="relative mt-4 h-[22rem] overflow-hidden rounded-2xl border border-black/12 bg-white">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#DCE3E8_0%,#F6F8FA_58%,#FFFFFF_100%)]" />
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#B9D4E2_0%,#E9F2F8_42%,#F7ECE0_100%)]"
                style={afterStyle}
              />
              <div
                className="absolute top-0 h-full w-[2px] bg-black/70"
                style={{ left: `${split}%` }}
                aria-hidden="true"
              />

              <span className="absolute left-4 top-4 rounded-full border border-black/20 bg-white/92 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-black/75">
                Antes
              </span>
              <span className="absolute right-4 top-4 rounded-full border border-[#C9A96E]/45 bg-[#C9A96E]/18 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#63491F]">
                Despues
              </span>
            </div>

            <label htmlFor="before-after" className="mt-5 block text-xs font-medium text-black/72">
              Control de comparacion
            </label>
            <input
              id="before-after"
              type="range"
              min={0}
              max={100}
              value={split}
              onChange={(event) => setSplit(Number(event.target.value))}
              className="mt-2 w-full accent-[#2C5F6F]"
            />
          </article>

          <div className="grid gap-4">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.patient}
                className="rounded-3xl border border-black/12 bg-white p-6 shadow-[0_16px_34px_-30px_rgba(0,0,0,0.3)]"
              >
                <p className="text-lg leading-relaxed text-black/86">“{item.quote}”</p>
                <footer className="mt-5">
                  <p className="text-sm font-semibold text-black">{item.patient}</p>
                  <p className="text-xs uppercase tracking-[0.08em] text-[#2C5F6F]">{item.treatment}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
