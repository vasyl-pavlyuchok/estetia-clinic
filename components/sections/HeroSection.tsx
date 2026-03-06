'use client';

import { motion } from 'framer-motion';

const HERO_VIDEO_URL = '';
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

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-14 pt-28 md:grid-cols-2 md:items-end md:gap-16 md:px-10 md:pb-20 md:pt-36">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.15)}
          className="col-span-full text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#b6d2e0] sm:text-xs"
        >
          Estetia Clinic · Precisión Biomédica y Belleza Inteligente
        </motion.span>

        <div>
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
            className="mt-6 max-w-[47ch] text-[1.02rem] leading-relaxed text-white/82"
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
              className="rounded-full bg-[#c9a96e] px-7 py-3.5 text-sm font-semibold text-[#1c2124] transition-all duration-300 hover:bg-[#d8b882] hover:shadow-[0_0_30px_rgba(201,169,110,0.33)]"
            >
              Iniciar evaluación IA
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/70 hover:bg-white/10"
            >
              Explorar tratamientos
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.5)}
          className="rounded-[30px] border border-white/20 bg-white/6 p-4 backdrop-blur-[3px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111b20] p-5 text-white">
            <div className="mb-3 text-xs uppercase tracking-[0.25em] text-[#cfe5f1]/75">
              Secuencia Editorial
            </div>
            <div className="aspect-[4/5] w-full rounded-xl border border-white/15 bg-gradient-to-b from-[#1a2d36] to-[#0d1317] p-5">
              <div className="h-full rounded-lg border border-dashed border-white/30 p-4">
                <p className="max-w-[24ch] text-sm leading-relaxed text-white/82">
                  Aquí irá el loop del laboratorio (pipeta + fluido + burbuja).
                  Mantener encuadre frontal y luz premium.
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#9fc6da]/75">
                  Fuente: Gem + Cloudinary
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative mx-auto mb-10 flex w-full max-w-7xl justify-center"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60"
        >
          Scroll
          <ChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
