'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const CAP_ICONS = [
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M3 18l9 3 9-3"/><line x1="3" y1="12" x2="21" y2="12"/></svg>,
  <svg key="4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  <svg key="5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
];

/* ─── component ───────────────────────────────────────────── */
export default function AIShowcaseSectionV2() {
  const t = useTranslations('aiShowcase');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const CAPABILITIES = [
    { icon: CAP_ICONS[0], title: t('cap1Title'), description: t('cap1Desc'), pill: t('cap1Pill') },
    { icon: CAP_ICONS[1], title: t('cap2Title'), description: t('cap2Desc'), pill: null },
    { icon: CAP_ICONS[2], title: t('cap3Title'), description: t('cap3Desc'), pill: null },
    { icon: CAP_ICONS[3], title: t('cap4Title'), description: t('cap4Desc'), pill: t('cap4Pill') },
    { icon: CAP_ICONS[4], title: t('cap5Title'), description: t('cap5Desc'), pill: null },
  ];

  const PILLARS = [
    { eyebrow: t('pillar1Eyebrow'), title: t('pillar1Title'), copy: t('pillar1Copy') },
    { eyebrow: t('pillar2Eyebrow'), title: t('pillar2Title'), copy: t('pillar2Copy') },
    { eyebrow: t('pillar3Eyebrow'), title: t('pillar3Title'), copy: t('pillar3Copy') },
  ];
  const animRef = useRef<number>(0);
  const tRef = useRef(0);
  const micVolumeRef = useRef(0);

  /* ── siri-like circular wave canvas + passive mic ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = 280, H = 280;
    const cx = W / 2, cy = H / 2;

    // Try passive mic access — no UI, silent fail if denied
    let audioCtx: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let dataArray: Uint8Array<ArrayBuffer> | null = null;

    navigator.mediaDevices?.getUserMedia({ audio: true, video: false })
      .then((stream) => {
        audioCtx = new AudioContext();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.82;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        audioCtx.createMediaStreamSource(stream).connect(analyser);
      })
      .catch(() => { /* denied — idle animation continues */ });

    const strands = [
      {
        baseR: 84, color: 'rgba(127,175,194,0.92)', lw: 1.9,
        waves: [
          { amp: 14, freq: 4, speed: 0.90 },
          { amp: 8,  freq: 7, speed: -1.40 },
          { amp: 5,  freq: 2, speed: 0.55 },
        ],
      },
      {
        baseR: 98, color: 'rgba(44,95,111,0.82)', lw: 2.2,
        waves: [
          { amp: 16, freq: 5, speed: 1.05 },
          { amp: 10, freq: 3, speed: -0.75 },
          { amp: 6,  freq: 8, speed: 1.60 },
        ],
      },
      {
        baseR: 110, color: 'rgba(191,224,238,0.50)', lw: 1.3,
        waves: [
          { amp: 10, freq: 3, speed: 0.65 },
          { amp: 7,  freq: 6, speed: -1.20 },
          { amp: 4,  freq: 9, speed: 0.90 },
        ],
      },
      {
        baseR: 72, color: 'rgba(201,169,110,0.50)', lw: 1.4,
        waves: [
          { amp: 9,  freq: 6, speed: 1.30 },
          { amp: 12, freq: 2, speed: -0.60 },
          { amp: 5,  freq: 5, speed: 1.00 },
        ],
      },
      {
        baseR: 92, color: 'rgba(127,175,194,0.35)', lw: 1.0,
        waves: [
          { amp: 18, freq: 4, speed: -0.95 },
          { amp: 7,  freq: 7, speed: 1.45 },
          { amp: 9,  freq: 2, speed: -0.50 },
        ],
      },
    ];

    const STEPS = 150;
    const FRAME_INTERVAL = 1000 / 30; // 30fps cap
    let lastFrameTime = 0;

    function draw(timestamp: number) {
      animRef.current = requestAnimationFrame(draw);
      if (timestamp - lastFrameTime < FRAME_INTERVAL) return;
      lastFrameTime = timestamp;

      ctx.clearRect(0, 0, W, H);
      const t = tRef.current;

      // Read mic volume (0–1), else 0
      let micVol = 0;
      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
        micVol = Math.min(sum / dataArray.length / 70, 1);
      }
      // Smooth stored volume toward new value
      micVolumeRef.current += (micVol - micVolumeRef.current) * 0.15;
      const vol = micVolumeRef.current;

      // breathe: idle pulse + mic boost
      const breathe = 1 + 0.18 * Math.sin(t * 0.45) + vol * 1.2;

      // center glow brightens with mic
      const glowR = 55 + vol * 30;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      glow.addColorStop(0, `rgba(44,95,111,${0.22 + vol * 0.35})`);
      glow.addColorStop(1, 'rgba(44,95,111,0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fill();

      // Single shadowBlur pass — set once for all strands
      ctx.shadowBlur = 10 + vol * 14;
      strands.forEach(({ baseR, waves, color, lw }) => {
        ctx.beginPath();
        for (let i = 0; i <= STEPS; i++) {
          const angle = (i / STEPS) * Math.PI * 2;
          const displacement = waves.reduce(
            (sum, { amp, freq, speed }) =>
              sum + amp * Math.sin(freq * angle + t * speed * (1 + vol * 0.6)),
            0
          );
          const r = baseR + displacement * breathe;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.shadowColor = color;
        ctx.lineWidth = lw + vol * 1.2;
        ctx.stroke();
      });
      ctx.shadowBlur = 0;

      tRef.current += 0.032;
    }

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      audioCtx?.close();
    };
  }, []);

  return (
    <section
      id="ia-assistant-v2"
      className="relative overflow-hidden bg-[#0D1418] text-white"
      style={{
        borderTop: '1px solid rgba(127,175,194,0.18)',
        borderBottom: '1px solid rgba(127,175,194,0.18)',
      }}
      aria-label={t('eyebrow')}
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(44,95,111,0.20) 0%, transparent 65%)' }} />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-28">

        {/* ── EYEBROW ── */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-9 bg-[#C9A96E]" aria-hidden="true" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#C9A96E]">
            {t('eyebrow')}
          </p>
          <div className="flex items-center gap-[3px]" aria-hidden="true">
            {[0.4, 0.75, 0.5, 1, 0.35].map((h, i) => (
              <span
                key={i}
                className="w-[2px] rounded-full bg-[#C9A96E]"
                style={{
                  height: `${Math.round(h * 14)}px`,
                  animation: `waveBar2 1.3s ease-in-out ${(i * 0.15).toFixed(2)}s infinite alternate`,
                  opacity: 0.4 + h * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── HERO ROW ── */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 mb-16">

          {/* LEFT: text */}
          <div>
            <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.08] text-white">
              {t('h2Line1')}{' '}
              <br className="hidden md:block" />
              {t('h2Line2')}{' '}
              <em className="font-normal not-italic" style={{ color: '#D5B884' }}>
                {t('h2Emphasis')}
              </em>
            </h2>

            <p className="mt-6 max-w-[48ch] text-[0.98rem] leading-relaxed text-white/72">
              {t('p1')}
            </p>
            <p className="mt-4 max-w-[48ch] text-[0.98rem] leading-relaxed text-white/72">
              {t('p2')}{' '}
              <strong className="font-semibold text-white">
                {t('p2Strong')}
              </strong>
            </p>

            <blockquote
              className="mt-9 py-5 pl-6 pr-4"
              style={{
                borderLeft: '3px solid #C9A96E',
                background: 'linear-gradient(135deg,rgba(201,169,110,0.10) 0%,rgba(201,169,110,0.03) 100%)',
              }}
            >
              <p className="font-heading text-[1.12rem] italic leading-snug" style={{ color: '#D5B884', whiteSpace: 'pre-line' }}>
                {t('quote')}
              </p>
            </blockquote>

            <div className="mt-8">
              <Link
                href="/ia"
                className="inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-[#0D1418] transition-all duration-300 hover:brightness-110"
                style={{ background: '#C9A96E' }}
              >
                {t('cta')}
              </Link>
            </div>
          </div>

          {/* RIGHT: orb + info panel */}
          <div className="flex flex-col items-center gap-8">

            {/* orb */}
            <div className="relative flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={280}
                height={280}
                className="relative z-[2]"
                style={{ willChange: 'transform' }}
                aria-hidden="true"
              />
            </div>

            {/* label */}
            <p className="text-center text-[0.62rem] uppercase tracking-[0.18em] text-white/35">
              <span className="block text-[0.72rem] font-semibold tracking-[0.08em] text-[#7FAFC2] mb-1.5">
                {t('agentLabel')}
              </span>
              {t('agentSubLabel')}
            </p>

            {/* ElevenLabs block */}
            <div
              className="w-full rounded-2xl p-5"
              style={{
                border: '1px solid rgba(201,169,110,0.22)',
                background: 'linear-gradient(148deg,rgba(20,32,39,0.9) 0%,rgba(13,20,24,0.97) 100%)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[#C9A96E]"
                  style={{ animation: 'blink2 2.2s ease-in-out infinite' }}
                  aria-hidden="true"
                />
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#C9A96E]">
                  {t('elevenLabsLabel')}
                </p>
              </div>
              <p className="text-[0.78rem] leading-relaxed text-white/60">
                {t('elevenLabsBody')}
              </p>

              {/* divider */}
              <div className="my-4 h-px bg-white/8" />

              {/* disclaimer */}
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7FAFC2]/50" aria-hidden="true" />
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#7FAFC2] mb-1.5">
                    {t('limitLabel')}
                  </p>
                  <p className="text-[0.74rem] leading-relaxed text-white/60">
                    {t('limitBody')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── CAPABILITIES GRID ── */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/38">
              {t('capabilitiesLabel')}
            </span>
            <span className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111A1F] p-5 text-white transition-all duration-300 hover:border-[#2C5F6F]/50 hover:bg-[#0f2028]"
              >
                {/* top accent line — revealed on hover */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#2C5F6F] to-[#7FAFC2] transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                {/* icon container */}
                <div className="mb-4 flex items-start justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-[#7FAFC2] transition-colors duration-300 group-hover:text-[#BFE0EE]"
                    style={{ background: 'rgba(44,95,111,0.18)', border: '1px solid rgba(127,175,194,0.15)' }}
                  >
                    {cap.icon}
                  </div>
                  {cap.pill && (
                    <span
                      className="rounded-full px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[#7FAFC2]"
                      style={{ background: 'rgba(44,95,111,0.20)', border: '1px solid rgba(127,175,194,0.22)' }}
                    >
                      {cap.pill}
                    </span>
                  )}
                </div>

                {/* text */}
                <h4 className="font-ui text-[0.95rem] font-semibold text-white">
                  {cap.title}
                </h4>
                <p className="mt-2 text-[0.83rem] leading-relaxed text-white/60">
                  {cap.description}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* ── PILLARS ── */}
      <div
        className="relative z-[1] grid lg:grid-cols-3"
        style={{ borderTop: '1px solid rgba(127,175,194,0.15)' }}
      >
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.title}
            className={[
              'bg-[#111A1F] px-6 py-8 text-white transition-colors duration-300 hover:bg-[rgba(44,95,111,0.10)] md:px-10 md:py-11',
              i < PILLARS.length - 1 ? 'border-b border-[rgba(127,175,194,0.15)] lg:border-b-0 lg:border-r lg:border-r-[rgba(127,175,194,0.15)]' : '',
            ].join(' ')}
          >
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.42em] text-[#7FAFC2]/70">
              {pillar.eyebrow}
            </p>
            <h3 className="font-heading mt-4 text-[1.2rem] leading-snug text-white">
              {pillar.title}
            </h3>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-white/55">{pillar.copy}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes waveBar2  { 0% { transform:scaleY(0.3); } 100% { transform:scaleY(1); } }
        @keyframes wvAnim2   { 0%,100% { transform:scaleY(0.35); opacity:0.3; } 50% { transform:scaleY(1); opacity:1; } }
        @keyframes ringPulse2{ 0%,100% { transform:scale(1); opacity:0.6; } 50% { transform:scale(1.05); opacity:1; } }
        @keyframes blink2    { 0%,100% { opacity:1; } 50% { opacity:0.15; } }
      `}</style>
    </section>
  );
}
