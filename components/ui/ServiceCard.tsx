'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Service } from '@/lib/services';

type ServiceCardProps = {
  service: Service;
  imageOverrideUrl?: string;
};

export default function ServiceCard({ service, imageOverrideUrl }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardImageUrl = imageOverrideUrl ?? service.img_url;

  const handleEnter = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
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
            src={cardImageUrl}
            alt={service.name}
            loading="lazy"
            animate={{
              scale: isHovered ? 1.04 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/56 via-black/18 to-transparent" />

          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/40 bg-[linear-gradient(140deg,rgba(7,14,19,0.46)_0%,rgba(22,39,50,0.3)_100%)] px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-[10px] backdrop-saturate-150 shadow-[0_10px_22px_-14px_rgba(0,0,0,0.58)]">
              {service.categoryLabel}
            </span>
          </div>

          <div className="absolute inset-x-3 bottom-3">
            <div className="rounded-2xl border border-white/30 bg-[linear-gradient(145deg,rgba(10,18,24,0.48)_0%,rgba(20,32,41,0.38)_55%,rgba(39,58,73,0.3)_100%)] p-4 backdrop-blur-[14px] backdrop-saturate-150 shadow-[0_18px_38px_-20px_rgba(0,0,0,0.64)]">
              <h3 className="font-heading text-2xl leading-tight text-white">{service.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/90">{service.tagline}</p>
            </div>
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
