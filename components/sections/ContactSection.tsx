'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const TOTAL_FRAMES = 60;
const frameSrc = (n: number) =>
  `/videos/contact-frames/frame-${String(n).padStart(3, '0')}.webp`;

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    // Precargar todos los frames
    const images = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const im = new Image();
      im.src = frameSrc(i + 1);
      return im;
    });

    let currentFrame = 1;
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const wH = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (wH - rect.top) / (wH + section.offsetHeight)));
        const next = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(progress * TOTAL_FRAMES) || 1));
        if (next !== currentFrame && images[next - 1].complete) {
          currentFrame = next;
          img.src = images[next - 1].src;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative overflow-hidden py-20 md:py-24"
      aria-label="Contacto y reservas"
    >
      {/* Frame scrubbing background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={frameSrc(1)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0D1418]/65" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div className="grid gap-7 md:grid-cols-[1.08fr_0.92fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A96E]">
              Contacto
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-white md:text-5xl">
              Reserva tu primera consulta.
            </h2>
          </div>
          <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-white/70 md:justify-self-end">
            Sin coste, sin compromiso. Elige el canal que prefieras — respondemos en horario clínico.
          </p>
        </div>

        {/* 3 canales — frost glass */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          {/* Teléfono — stone tint */}
          <a
            href="tel:+34600000000"
            className="group flex flex-col rounded-3xl border border-[#C9A96E]/30 bg-[#C9A96E]/10 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#C9A96E]/50 hover:bg-[#C9A96E]/18"
          >
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#D5B884]">
              Teléfono
            </span>
            <span className="font-heading mt-3 text-[1.55rem] leading-tight text-white">
              Llámanos
            </span>
            <span className="mt-2 text-sm text-white/60">
              +34 600 000 000 · Lunes a viernes 10:00–20:00
            </span>
            <span className="mt-6 self-start rounded-full border border-[#C9A96E]/40 bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#7A5A24] backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/80">
              Llamar ahora →
            </span>
          </a>

          {/* WhatsApp — green tint */}
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-3xl border border-[#25D366]/30 bg-[#25D366]/10 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#25D366]/50 hover:bg-[#25D366]/18"
          >
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#1A9E4A]">
              WhatsApp
            </span>
            <span className="font-heading mt-3 text-[1.55rem] leading-tight text-white">
              Escríbenos ahora
            </span>
            <span className="mt-2 text-sm text-white/60">
              +34 600 000 000 · Respuesta rápida en horario clínico
            </span>
            <span className="mt-6 self-start rounded-full border border-[#25D366]/40 bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#1A9E4A] backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/80">
              Abrir WhatsApp →
            </span>
          </a>

          {/* Agente IA — teal tint */}
          <Link
            href="/ia"
            className="group flex flex-col rounded-3xl border border-[#2C5F6F]/30 bg-[#2C5F6F]/10 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#2C5F6F]/50 hover:bg-[#2C5F6F]/18"
          >
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#2C5F6F]">
              Agente IA
            </span>
            <span className="font-heading mt-3 text-[1.55rem] leading-tight text-white">
              Consulta al instante
            </span>
            <span className="mt-2 text-sm text-white/60">
              Disponible 24/7 · Responde dudas y agenda citas
            </span>
            <span className="mt-6 self-start rounded-full border border-[#2C5F6F]/35 bg-white/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#2C5F6F] backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/80">
              Hablar con el agente →
            </span>
          </Link>

        </div>

        {/* Horarios + Ubicación */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-3xl border border-white/[0.22] bg-[linear-gradient(150deg,rgba(255,255,255,0.18)_0%,rgba(250,253,255,0.12)_56%,rgba(246,249,252,0.08)_100%)] p-6 backdrop-blur-[34px] backdrop-brightness-[0.98] backdrop-saturate-[1.4]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7FAFC2]">Horarios</p>
            <ul className="mt-3 space-y-1.5 text-sm text-white/75">
              <li>Lunes a Viernes: 10:00 – 20:00</li>
              <li>Sábado: 10:00 – 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
            <p className="mt-4 text-xs text-white/45">Atención por cita previa.</p>
          </article>

          <article className="rounded-3xl border border-white/[0.22] bg-[linear-gradient(150deg,rgba(255,255,255,0.18)_0%,rgba(250,253,255,0.12)_56%,rgba(246,249,252,0.08)_100%)] p-6 backdrop-blur-[34px] backdrop-brightness-[0.98] backdrop-saturate-[1.4]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#7FAFC2]">Ubicación</p>
            <p className="mt-3 text-sm font-medium text-white">Calle Serrano 101, Madrid</p>
            <p className="mt-1 text-xs text-white/60">Distrito Salamanca · Metro Núñez de Balboa</p>
            <p className="mt-4 text-xs text-white/45">Aparcamiento disponible en la zona.</p>
          </article>
        </div>

      </div>
    </section>
  );
}
