'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Service } from '@/lib/services';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay/interaction rejections silently.
    });
  };

  const handleLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-[0_24px_50px_-40px_rgba(0,0,0,0.32)] transition-transform duration-500 hover:-translate-y-1"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <Link href={`/servicios/${service.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/8 bg-[#F3F4F5]">
          <motion.img
            src={service.img_url}
            alt={service.name}
            loading="lazy"
            animate={{
              scale: isHovered ? 1.05 : 1,
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
          />

          <motion.video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            src={service.video_url}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/28 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/45 bg-white/18 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-white">
              {service.categoryLabel}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-heading text-2xl leading-tight text-white">{service.name}</h3>
            <p className="mt-2 text-sm text-white/88">{service.tagline}</p>
            <motion.span
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 4,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 inline-flex text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#C9A96E]"
            >
              Explore Concept →
            </motion.span>
          </div>
        </div>

        <div className="px-2 pb-2 pt-4">
          <p className="line-clamp-2 text-sm leading-relaxed text-black/70 transition-transform duration-500 group-hover:-translate-y-2.5">
            {service.description}
          </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-black/10 bg-[#F8F9FA] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-black/75">
              {service.duration}
            </span>
            <span className="text-sm font-semibold text-black">{service.price}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
