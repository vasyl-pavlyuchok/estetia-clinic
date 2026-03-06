'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

type SiteHeaderClientProps = {
  categories: string[];
};

const panelVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.16, ease: [0.4, 0, 1, 1] as const },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SiteHeaderClient({ categories }: SiteHeaderClientProps) {
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-heading text-2xl leading-none text-black">
          Estetia
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#center-method" className="text-sm font-medium text-black/80 hover:text-black">
            Metodo
          </Link>
          <Link href="/#dream-team" className="text-sm font-medium text-black/80 hover:text-black">
            Equipo
          </Link>
          <Link href="/#social-proof" className="text-sm font-medium text-black/80 hover:text-black">
            Resultados
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
          >
            <Link
              href="/servicios"
              className="text-sm font-semibold uppercase tracking-[0.1em] text-[#2C5F6F]"
              onFocus={() => setIsMegaOpen(true)}
            >
              Servicios
            </Link>

            <AnimatePresence>
              {isMegaOpen ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={panelVariants}
                  className="absolute left-1/2 top-full mt-4 w-[min(94vw,74rem)] -translate-x-1/2"
                >
                  <div className="rounded-3xl border border-black/10 bg-white/96 p-6 backdrop-blur-[4px] shadow-[0_30px_70px_-42px_rgba(0,0,0,0.35)]">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#2C5F6F]">
                      Catalogo por Categoria
                    </p>

                    <motion.div
                      variants={gridVariants}
                      initial="hidden"
                      animate="visible"
                      className="mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-6"
                    >
                      {categories.map((category) => (
                        <motion.div key={category} variants={itemVariants}>
                          <Link
                            href={`/servicios?categoria=${encodeURIComponent(category)}`}
                            className="flex min-h-20 items-center rounded-2xl border border-black/10 bg-[#F8F9FA] px-4 py-3 text-sm text-black/82 transition-colors duration-200 hover:bg-white hover:text-black"
                          >
                            {category}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        <Link
          href="/servicios"
          className="rounded-full border border-[#C9A96E]/45 bg-[#C9A96E]/14 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#5E4720]"
        >
          Reservar
        </Link>
      </div>
    </header>
  );
}
