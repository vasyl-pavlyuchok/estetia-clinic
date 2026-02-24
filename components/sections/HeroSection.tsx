'use client';

import { motion } from 'framer-motion';

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const transition = (delay: number) => ({
  duration: 0.7,
  delay,
  ease: [0.25, 0.46, 0.45, 0.94] as const, // easeOutQuart
});

/* ─── Scroll indicator SVG ───────────────────────────────────────────────── */
function ChevronDown() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden bg-[#1a1a1a]"
      aria-label="Inicio"
    >
      {/* ── Video background ──────────────────────────────────────────────── */}
      {/*
       * Sustituye src por tu URL de Cloudinary cuando tengas el vídeo.
       * El fondo #1a1a1a actúa de fallback mientras no haya vídeo.
       */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        // poster="/images/hero-poster.jpg"  ← añade poster cuando tengas imagen
        // src="https://res.cloudinary.com/tu-cuenta/video/upload/hero.mp4"
      />

      {/* ── Gradient overlay ──────────────────────────────────────────────── */}
      {/* top más oscuro para legibilidad del nav, bottom para scroll indicator */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55"
        aria-hidden="true"
      />

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.15)}
          className="mb-5 block text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#C9A96E] sm:text-xs"
        >
          Clínica Estética de Vanguardia
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.35)}
          className="font-heading mb-6 max-w-[14ch] text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.08] text-white"
        >
          Realza tu belleza natural
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.55)}
          className="mb-11 max-w-[38ch] text-[clamp(0.95rem,2vw,1.125rem)] font-light leading-relaxed text-white/65"
        >
          Tecnología avanzada&nbsp;&nbsp;·&nbsp;&nbsp;Expertise médico&nbsp;&nbsp;·&nbsp;&nbsp;Resultados naturales
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.75)}
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          {/* Primary — gold */}
          <a
            href="#contacto"
            className="
              rounded-full bg-[#C9A96E] px-8 py-3.5
              text-sm font-semibold text-[#1a1a1a]
              transition-all duration-200
              hover:bg-[#d4b47a] hover:shadow-[0_0_28px_rgba(201,169,110,0.35)]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A96E]
            "
          >
            Agenda tu consulta gratuita
          </a>

          {/* Secondary — ghost white */}
          <a
            href="#servicios"
            className="
              rounded-full border border-white/50 px-8 py-3.5
              text-sm font-semibold text-white
              backdrop-blur-[2px]
              transition-all duration-200
              hover:border-white/80 hover:bg-white/10
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white
            "
          >
            Descubre los tratamientos
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5 text-white/50"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
