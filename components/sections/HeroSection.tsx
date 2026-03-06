'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HERO_VIDEO_URL =
  'https://res.cloudinary.com/dipsguims/video/upload/v1772779158/estetia-header_short_opt_appzko.webm';
const HERO_POSTER_URL = '';

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

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const hasVideo = Boolean(HERO_VIDEO_URL);

  return (
    <section
      className="relative isolate min-h-[94svh] overflow-hidden bg-[#0D1418]"
      aria-label="Inicio"
    >
      {hasVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={HERO_VIDEO_URL}
          poster={HERO_POSTER_URL || undefined}
          aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(106,160,185,0.34),transparent_45%),radial-gradient(circle_at_78%_68%,rgba(42,86,107,0.35),transparent_45%),linear-gradient(165deg,#111A1F_0%,#0A1014_100%)]" />
          <div className="absolute left-[14%] top-[16%] h-44 w-44 rounded-full border border-white/15 bg-white/5 blur-[1px]" />
          <div className="absolute bottom-[22%] right-[18%] h-24 w-24 rounded-full border border-[#9fc6da]/45 bg-[#8cc0de]/20 blur-[1px]" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-36">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.15)}
          className="text-[0.76rem] font-semibold uppercase tracking-[0.34em] text-white sm:text-[0.8rem]"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}
        >
          <span className="text-white/96">Estetia Clinic</span>
          <span className="mx-2 text-white/65">·</span>
          <span className="bg-gradient-to-r from-[#b8dcf1] via-[#f8fcff] to-[#e3c282] bg-clip-text text-transparent">
            Precisión Biomédica y Belleza Inteligente
          </span>
        </motion.span>

        <div className="mt-8 max-w-3xl">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={transition(0.3)}
            className="font-heading max-w-[12ch] text-[clamp(2.65rem,7vw,5.4rem)] font-bold leading-[1.03] text-white"
          >
            Ciencia estética de lujo, diseñada para parecer inevitable.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={transition(0.5)}
            className="mt-6 max-w-[47ch] text-[1.06rem] leading-relaxed text-white/95"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.42)' }}
          >
            Protocolos clínicos personalizados, equipamiento de última generación y
            asistencia IA para una experiencia serena, precisa y profundamente humana.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={transition(0.7)}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#ia-assistant"
              className="premium-cta-dark rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110"
            >
              <span
                className="relative z-10"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.42)' }}
              >
                Iniciar evaluación IA
              </span>
            </a>
            <Link
              href="/servicios"
              className="premium-cta-light rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110"
            >
              <span
                className="relative z-10"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.45)' }}
              >
                Explorar tratamientos
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative mx-auto mb-10 flex w-full max-w-7xl justify-center"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex rotate-90 items-center"
        >
          <span className="serum-scroll-wheel" />
        </motion.div>
      </motion.div>
    </section>
  );
}
