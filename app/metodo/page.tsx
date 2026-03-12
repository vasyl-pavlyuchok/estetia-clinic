'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    tag: 'Fase 01',
    title: 'Consulta estratégica',
    primary: 'Escuchamos objetivos, historial y expectativas reales antes de emitir cualquier recomendación.',
    secondary: 'Mapeamos prioridades estéticas y contexto clínico desde la primera visita. Sin presupuesto, sin lista de servicios. Solo diagnóstico.',
    full: true,
  },
  {
    num: '02',
    tag: 'Fase 02',
    title: 'Diagnóstico de precisión',
    primary: 'Analizamos estructura, textura y simetría con criterio médico objetivo.',
    secondary: 'Definimos un punto de partida medible para que cada decisión esté fundamentada en datos, no en intuición.',
    full: false,
  },
  {
    num: '03',
    tag: 'Fase 03',
    title: 'Plan médico personalizado',
    primary: 'Diseñamos un protocolo por fases, tiempos y objetivos específicos para cada paciente.',
    secondary: 'Cada tratamiento se ordena para maximizar el resultado y controlar los tiempos de recuperación.',
    full: false,
  },
  {
    num: '04',
    tag: 'Fase 04',
    title: 'Ejecución especializada',
    primary: 'Aplicación con tecnología certificada y criterio conservador. El mismo médico que diagnostica, ejecuta.',
    secondary: 'Buscamos mejora visible sin perder identidad facial o corporal. El resultado no es un estándar, es tu versión mejorada.',
    full: false,
  },
  {
    num: '05',
    tag: 'Fase 05',
    title: 'Seguimiento y optimización',
    primary: 'Controlamos la evolución y afinamos la estrategia con cada revisión planificada.',
    secondary: 'El resultado final se construye en continuidad. Medimos, ajustamos y documentamos. El proceso es permanente, no puntual.',
    full: false,
  },
];

const commitments = [
  {
    title: 'Primera visita',
    claim: 'Sin coste. Sin compromiso. Sin presupuesto.',
    body: 'La consulta inicial es una conversación clínica. Escuchamos antes de recomendar. No hay lista de servicios ni propuesta económica en la primera visita.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
  },
  {
    title: 'Supervisión médica',
    claim: 'Médico en sala en cada procedimiento.',
    body: 'Ninguna sesión se delega. El mismo especialista que hace el diagnóstico ejecuta el tratamiento y firma el seguimiento. Sin intermediarios.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
    ),
  },
  {
    title: 'Resultado primero',
    claim: 'Hacemos menos si con menos es suficiente.',
    body: 'No optimizamos sesiones para facturar más. Si el resultado esperado se puede conseguir con menos intervención, eso es lo que recomendamos — y lo documentamos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M3 18l9 3 9-3"/><line x1="3" y1="12" x2="21" y2="12"/></svg>
    ),
  },
  {
    title: 'Asistente IA 24/7',
    claim: 'Disponible antes, durante y después del tratamiento.',
    body: 'Nuestro agente de inteligencia artificial resuelve dudas sobre tratamientos, recuperación y seguimiento en cualquier momento. No sustituye al médico — lo complementa.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M7 9H5"/><path d="M7 12H5"/><path d="M7 15H5"/><path d="M17 9h2"/><path d="M17 12h2"/><path d="M17 15h2"/><path d="M9 7V5"/><path d="M12 7V5"/><path d="M15 7V5"/><path d="M9 19v-2"/><path d="M12 19v-2"/><path d="M15 19v-2"/></svg>
    ),
  },
  {
    title: 'Privacidad total',
    claim: 'Tu historial clínico no sale de Estetia.',
    body: 'No compartimos datos médicos con terceros, no hacemos perfiles publicitarios y no usamos tu información para nada ajeno a tu atención. Sin letra pequeña.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    ),
  },
  {
    title: 'Seguimiento continuo',
    claim: 'El tratamiento no termina al salir de la clínica.',
    body: 'Cada protocolo incluye revisiones planificadas. Medimos evolución, ajustamos si es necesario y documentamos resultados. El proceso es continuo, no puntual.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const surfaceBorder = 'rgba(0,0,0,0.06)';
const blueBorder = 'rgba(44,95,111,0.15)';
const blueDim = 'rgba(44,95,111,0.07)';

export default function MetodologiaPage() {
  return (
    <main className="bg-white text-[#000000]">

      {/* ── HERO ── */}
      <section className="overflow-hidden" style={{ background: '#F6F7F8', borderBottom: `1px solid ${surfaceBorder}`, padding: '96px 60px 80px' }}>
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3.5 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-[#2C5F6F]">
            <span className="h-px w-7 bg-[#2C5F6F]/45" />
            Metodología Clínica
            <span className="h-px w-7 bg-[#2C5F6F]/45" />
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(2.8rem,6vw,4rem)] font-semibold leading-[1.08]">
            Un proceso diseñado para{' '}
            <em className="font-normal not-italic text-[#2C5F6F]">eliminar la incertidumbre</em>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-[540px] text-[1.06rem] leading-[1.78] text-[#3a4147]">
            Cada fase tiene un objetivo claro, una métrica visible y una decisión médica fundamentada. No improvisamos. No sobreactuamos. Diseñamos el resultado antes de ejecutarlo.
          </motion.p>
        </motion.div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="mx-auto max-w-[1400px] px-[60px] py-[100px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
          <div className="mb-4 inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-[#2C5F6F]">
            <span className="h-px w-[22px] bg-[#2C5F6F]/50" />
            Clinical Journey
          </div>
          <h2 className="font-heading mt-1 text-[2.75rem] font-semibold leading-[1.1]">
            Cinco fases.<br />
            <em className="font-normal not-italic text-[#2C5F6F]">Cero improvisación.</em>
          </h2>
          <p className="mt-4 max-w-[560px] text-[0.94rem] leading-[1.7] text-[#3a4147]" style={{ marginBottom: '64px' }}>
            Antes de cualquier tratamiento existe un diagnóstico. Antes de cualquier diagnóstico existe una conversación. Así funciona Estetia.
          </p>
        </motion.div>

        {/* Steps grid — 1px gap trick for borders */}
        <motion.div
          className="grid grid-cols-2"
          style={{ gap: '1px', background: surfaceBorder, border: `1px solid ${surfaceBorder}` }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className={`group relative overflow-hidden bg-white px-11 py-12 transition-colors duration-300 hover:bg-[#F6F7F8]${step.full ? ' col-span-2' : ''}`}
            >
              {/* Left accent border */}
              <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-[#2C5F6F] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              {/* Big number */}
              <span className="pointer-events-none absolute right-8 top-6 font-heading text-[72px] font-bold leading-none text-[#2C5F6F] opacity-[0.08] transition-opacity duration-300 group-hover:opacity-[0.14]">
                {step.num}
              </span>
              <div className="mb-5 inline-flex items-center gap-2 text-[0.58rem] font-bold uppercase tracking-[0.35em] text-[#2C5F6F]">
                <span className="h-px w-4 bg-[#2C5F6F]/50" />
                {step.tag}
              </div>
              <h3 className="font-heading mb-4 text-[1.62rem] font-semibold leading-[1.2]">{step.title}</h3>
              <p className="mb-2.5 text-[0.94rem] font-medium leading-[1.6] text-[#000000]">{step.primary}</p>
              <p className="text-[0.82rem] leading-[1.65] text-[#3a4147]">{step.secondary}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── COMPROMISOS ── */}
      <section style={{ background: '#F6F7F8', borderTop: `1px solid ${surfaceBorder}`, borderBottom: `1px solid ${surfaceBorder}`, padding: '100px 60px' }}>
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            className="mb-16 grid gap-[60px] lg:grid-cols-2"
            style={{ alignItems: 'end' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <div>
              <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.45em] text-[#2C5F6F]">
                <span className="h-px w-[22px] bg-[#2C5F6F]/50" />
                Nuestra forma de trabajar
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-heading text-[2.75rem] font-semibold leading-[1.1]">
                Compromisos que puedes{' '}
                <em className="font-normal not-italic text-[#2C5F6F]">verificar desde el primer día</em>
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-[0.94rem] leading-[1.72] text-[#3a4147]">
              No pedimos confianza a ciegas. Cada punto de esta lista es algo comprobable desde la primera visita — sin esperar resultados ni firmar nada.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3"
            style={{ gap: '1px', background: surfaceBorder, border: `1px solid ${surfaceBorder}` }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {commitments.map((c) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                className="group relative overflow-hidden bg-white px-8 py-9 transition-[background,box-shadow] duration-300 hover:bg-white hover:shadow-[0_4px_32px_rgba(44,95,111,0.08)]"
                style={{ zIndex: 0 }}
              >
                {/* Bottom border animation */}
                <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#2C5F6F] to-[#7FAFC2] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                {/* Icon */}
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full text-[#2C5F6F] transition-[background,border-color,color] duration-300 group-hover:bg-[#2C5F6F] group-hover:text-white"
                  style={{ border: `1px solid ${blueBorder}`, background: blueDim }}
                >
                  {c.icon}
                </div>
                <h3 className="font-heading mb-2 text-[1.25rem] font-semibold leading-[1.25]">{c.title}</h3>
                <p className="mb-3 text-[0.75rem] font-semibold leading-[1.4] text-[#2C5F6F]">{c.claim}</p>
                <p className="text-[0.82rem] leading-[1.65] text-[#3a4147]">{c.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.div
        className="mx-auto grid max-w-[1400px] items-center gap-[60px] px-[60px] py-[100px] lg:grid-cols-[1fr_auto]"
        style={{ borderTop: `1px solid ${surfaceBorder}` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <h2 className="font-heading mb-3 text-[2.5rem] font-semibold leading-[1.15]">
            ¿Lista para empezar<br />
            <em className="font-normal not-italic text-[#2C5F6F]">con la primera consulta?</em>
          </h2>
          <p className="max-w-[480px] text-[0.88rem] leading-[1.65] text-[#3a4147]">
            Sin coste, sin compromiso. Una conversación clínica para entender tus objetivos y definir si Estetia es el lugar adecuado para ti.
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col items-end gap-3">
          <Link
            href="/#contacto"
            className="rounded-full bg-[#2C5F6F] px-9 py-4 text-[0.62rem] font-bold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-[#0D1418]"
          >
            Reservar consulta gratuita
          </Link>
          <Link
            href="/servicios"
            className="rounded-full border px-9 py-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#7a8794] transition-all duration-300 hover:border-[#2C5F6F] hover:text-[#2C5F6F]"
            style={{ borderColor: surfaceBorder }}
          >
            Ver todos los tratamientos
          </Link>
        </motion.div>
      </motion.div>

    </main>
  );
}
