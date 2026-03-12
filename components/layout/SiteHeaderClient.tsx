'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import type { HeaderTreatmentZone, TreatmentZoneKey } from '@/lib/services';

type SiteHeaderClientProps = {
  zones: HeaderTreatmentZone[];
};

const desktopPanelVariants = {
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

const desktopGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
};

const desktopItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mobilePanelVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] as const },
  },
};

type PrimaryLink = {
  href: string;
  label: string;
  sectionId?: string;
};

const primaryLinks: PrimaryLink[] = [
  { href: '/metodo', label: 'Método' },
  { href: '/doctora', label: 'Doctora' },
  { href: '/#tecnologia', label: 'Tecnología', sectionId: 'tecnologia' },
  { href: '/#social-proof', label: 'Resultados', sectionId: 'social-proof' },
  { href: '/#faq', label: 'FAQ', sectionId: 'faq' },
];

type ZoneTone = {
  tabActive: string;
  tabInactive: string;
  badge: string;
  categoryCard: string;
  dot: string;
  panelSurface: string;
  tabMeta: string;
  panelDivider: string;
  panelEyebrow: string;
  panelTitle: string;
  panelBody: string;
  categoryLink: string;
  itemLink: string;
};

const unifiedZoneToneLight: ZoneTone = {
  tabActive: 'border-[#2C5F6F]/35 bg-[#2C5F6F]/10 text-[#1F4B5A]',
  tabInactive:
    'border-black/10 bg-white text-black/80 hover:border-[#2C5F6F]/22 hover:bg-[#2C5F6F]/5',
  badge: 'border-[#2C5F6F]/26 bg-white text-[#1F4B5A]',
  categoryCard: 'border-[#2C5F6F]/15 bg-[#F6FBFD]',
  dot: 'bg-[#2C5F6F]/60',
  panelSurface: 'border-[#2C5F6F]/16 bg-[#FAFCFD]',
  tabMeta: 'text-black/62',
  panelDivider: 'border-black/10',
  panelEyebrow: 'text-black/58',
  panelTitle: 'text-black/92',
  panelBody: 'text-black/72',
  categoryLink: 'text-black/88 hover:text-[#2C5F6F]',
  itemLink: 'text-black/74 hover:text-black',
};

const unifiedZoneToneDark: ZoneTone = {
  tabActive: 'border-white/[0.32] bg-white/25 text-white',
  tabInactive:
    'border-white/[0.18] bg-white/[0.12] text-white/[0.82] hover:border-white/30 hover:bg-white/[0.18]',
  badge: 'border-white/30 bg-white/[0.18] text-white',
  categoryCard: 'border-white/[0.22] bg-white/[0.16]',
  dot: 'bg-[#D7ECF5]',
  panelSurface: 'border-white/[0.22] bg-white/[0.14]',
  tabMeta: 'text-white/[0.78]',
  panelDivider: 'border-white/[0.18]',
  panelEyebrow: 'text-white/[0.78]',
  panelTitle: 'text-white',
  panelBody: 'text-white/[0.88]',
  categoryLink: 'text-white hover:text-white',
  itemLink: 'text-white/[0.88] hover:text-white',
};

const zoneTonesLight: Record<TreatmentZoneKey, ZoneTone> = {
  'rostro-cuello': unifiedZoneToneLight,
  'cuerpo-contorno': unifiedZoneToneLight,
  'cuero-cabelludo': unifiedZoneToneLight,
  'piel-textura': unifiedZoneToneLight,
  'estetica-integral': unifiedZoneToneLight,
};

const zoneTonesDark: Record<TreatmentZoneKey, ZoneTone> = {
  'rostro-cuello': unifiedZoneToneDark,
  'cuerpo-contorno': unifiedZoneToneDark,
  'cuero-cabelludo': unifiedZoneToneDark,
  'piel-textura': unifiedZoneToneDark,
  'estetica-integral': unifiedZoneToneDark,
};

export default function SiteHeaderClient({ zones }: SiteHeaderClientProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const [activeZoneKey, setActiveZoneKey] = useState<TreatmentZoneKey | ''>(zones[0]?.zoneKey ?? '');
  const [mobileZoneKey, setMobileZoneKey] = useState<TreatmentZoneKey | ''>(zones[0]?.zoneKey ?? '');
  const [activePrimaryHref, setActivePrimaryHref] = useState<string>('');
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openDesktopMegaMenu = () => {
    clearCloseTimeout();
    if (!activeZoneKey && zones[0]) {
      setActiveZoneKey(zones[0].zoneKey);
    }
    setIsMegaOpen(true);
  };

  const closeDesktopMegaMenu = () => {
    clearCloseTimeout();
    setIsMegaOpen(false);
  };

  const scheduleDesktopMegaMenuClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 110);
  };

  const handleNavigate = () => {
    closeDesktopMegaMenu();
    setIsMobileMenuOpen(false);
    setIsMobileTreatmentsOpen(false);
    if (zones[0]) {
      setMobileZoneKey(zones[0].zoneKey);
    }
  };

  const toggleMobileMenu = () => {
    closeDesktopMegaMenu();
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsMobileTreatmentsOpen(false);
      }
      return next;
    });
  };

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  useEffect(() => {
    if (pathname === '/metodo') {
      setActivePrimaryHref('/metodo');
      return;
    }
    if (pathname === '/doctora') {
      setActivePrimaryHref('/doctora');
      return;
    }
    if (!isHomePage) {
      setActivePrimaryHref('');
    }
  }, [isHomePage, pathname]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionLinks = primaryLinks.filter((link) => link.sectionId);
    let rafId = 0;
    let sectionAnchors: { href: string; top: number }[] = [];

    const computeSectionAnchors = () => {
      sectionAnchors = sectionLinks
        .map((link) => {
          if (!link.sectionId) {
            return null;
          }
          const section = document.getElementById(link.sectionId);
          if (!section) {
            return null;
          }
          return {
            href: link.href,
            top: section.offsetTop,
          };
        })
        .filter((anchor): anchor is { href: string; top: number } => anchor !== null)
        .sort((anchorA, anchorB) => anchorA.top - anchorB.top);
    };

    const resolveActiveSection = () => {
      const offset = 150;
      const marker = window.scrollY + offset;
      let nextActiveHref = '';

      for (const anchor of sectionAnchors) {
        if (marker >= anchor.top) {
          nextActiveHref = anchor.href;
          continue;
        }
        break;
      }

      setActivePrimaryHref((currentHref) =>
        currentHref === nextActiveHref ? currentHref : nextActiveHref
      );
    };

    const onScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        resolveActiveSection();
      });
    };

    const onResizeOrLoad = () => {
      computeSectionAnchors();
      resolveActiveSection();
    };

    computeSectionAnchors();
    resolveActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResizeOrLoad);
    window.addEventListener('load', onResizeOrLoad);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResizeOrLoad);
      window.removeEventListener('load', onResizeOrLoad);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isHomePage]);

  useEffect(() => {
    const firstZoneKey = zones[0]?.zoneKey ?? '';

    if (!zones.some((zone) => zone.zoneKey === activeZoneKey)) {
      setActiveZoneKey(firstZoneKey);
    }

    if (!zones.some((zone) => zone.zoneKey === mobileZoneKey)) {
      setMobileZoneKey(firstZoneKey);
    }
  }, [activeZoneKey, mobileZoneKey, zones]);

  const activeZone = useMemo(
    () => zones.find((zone) => zone.zoneKey === activeZoneKey) ?? zones[0],
    [activeZoneKey, zones]
  );

  const useDarkChrome = true;
  const zoneToneMap = zoneTonesLight;
  const defaultTone = zoneToneMap['estetica-integral'];
  const activeZoneTone = activeZone ? zoneToneMap[activeZone.zoneKey] ?? defaultTone : defaultTone;
  const isTreatmentsActive = isMegaOpen || pathname.startsWith('/servicios');

  const headerPositionClass = isHomePage ? 'fixed inset-x-0 top-0 z-50' : 'sticky top-0 z-50';
  const headerVisualClass = useDarkChrome
    ? 'border-b border-white/10 bg-[linear-gradient(145deg,rgba(8,13,16,0.58)_0%,rgba(11,18,23,0.46)_58%,rgba(20,34,43,0.32)_100%)] backdrop-blur-xl shadow-[0_18px_40px_-28px_rgba(0,0,0,0.78)] transition-colors duration-300'
    : 'border-b border-black/8 bg-white/92 backdrop-blur-md transition-colors duration-300';
  const headerShellClass = `${headerPositionClass} ${headerVisualClass}`;

  const logoClass = useDarkChrome
    ? 'font-heading text-2xl leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]'
    : 'font-heading text-2xl leading-none text-black';

  const navLinkBaseClass = 'text-sm font-medium text-white visited:text-white transition-[opacity] duration-300';
  const navLinkActiveClass = useDarkChrome
    ? 'opacity-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]'
    : 'text-black';
  const navLinkInactiveClass = useDarkChrome ? 'opacity-55 hover:opacity-85' : 'text-black/72 hover:text-black';

  const treatmentTriggerClass = `inline-flex items-center gap-2 ${navLinkBaseClass} ${
    isTreatmentsActive ? navLinkActiveClass : navLinkInactiveClass
  }`;

  const reserveButtonClass = useDarkChrome
    ? 'rounded-full border border-white/26 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-white/16'
    : 'rounded-full border border-[#C9A96E]/45 bg-[#C9A96E]/14 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#5E4720]';

  const mobileToggleClass = useDarkChrome
    ? 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-200 hover:bg-white/16 md:hidden'
    : 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white text-black/80 transition-colors duration-200 hover:bg-black/[0.03] md:hidden';

  const megaPanelShellClass =
    'mx-auto w-full max-w-[76rem] rounded-[2rem] border border-black/12 bg-[linear-gradient(150deg,rgba(255,255,255,0.988)_0%,rgba(250,253,255,0.984)_56%,rgba(246,249,252,0.978)_100%)] p-7 shadow-[0_36px_80px_-48px_rgba(0,0,0,0.52)] backdrop-blur-[34px] backdrop-saturate-140 backdrop-brightness-[0.98] transition-colors duration-300';

  const megaDividerClass = 'border-black/10';
  const megaEyebrowClass = 'text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#2C5F6F]';
  const megaSubcopyClass = 'mt-2 text-sm text-black/72';
  const megaCatalogClass =
    'inline-flex shrink-0 items-center rounded-full border border-[#2C5F6F]/25 bg-[#2C5F6F]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#1d4a59] transition-colors duration-200 hover:bg-[#2C5F6F]/14';

  const zoneEyebrowClass = 'text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-black/58';

  const mobilePanelClass = useDarkChrome
    ? 'overflow-hidden border-t border-white/20 bg-[linear-gradient(150deg,rgba(10,16,20,0.96)_0%,rgba(14,22,28,0.93)_100%)] backdrop-blur-[24px] backdrop-saturate-150 md:hidden'
    : 'overflow-hidden border-t border-black/10 bg-white/96 md:hidden';

  const mobileNavLinkClass = useDarkChrome
    ? 'rounded-xl px-3 py-2.5 text-sm font-medium text-white visited:text-white transition-[opacity,background-color] duration-200'
    : 'rounded-xl px-3 py-2.5 text-sm font-medium text-black/85 transition-colors duration-200 hover:bg-[#F6F7F8]';

  const mobileNavActiveClass = useDarkChrome
    ? 'bg-white/14 opacity-100'
    : 'bg-[#F6F7F8] text-black';
  const mobileNavInactiveClass = useDarkChrome ? 'opacity-58 hover:bg-white/10 hover:opacity-88' : '';

  const getPrimaryLinkClass = (href: string) => {
    const isActive = activePrimaryHref === href;
    return `${navLinkBaseClass} ${isActive ? navLinkActiveClass : navLinkInactiveClass}`;
  };

  const getMobilePrimaryLinkClass = (href: string) => {
    const isActive = activePrimaryHref === href;
    return `${mobileNavLinkClass} ${isActive ? mobileNavActiveClass : mobileNavInactiveClass}`;
  };

  const mobileTreatmentsButtonClass = useDarkChrome
    ? 'mt-1 inline-flex items-center justify-between rounded-xl border border-white/24 bg-white/10 px-3 py-2.5 text-left text-sm font-semibold uppercase tracking-[0.08em] text-white'
    : 'mt-1 inline-flex items-center justify-between rounded-xl border border-[#2C5F6F]/20 bg-[#2C5F6F]/8 px-3 py-2.5 text-left text-sm font-semibold uppercase tracking-[0.08em] text-[#1d4a59]';

  const mobileZoneShellClass = useDarkChrome
    ? 'rounded-2xl border border-white/20 bg-white/[0.12]'
    : 'rounded-2xl border border-black/10 bg-white';

  const mobileCatalogClass = useDarkChrome
    ? 'inline-flex w-full justify-center rounded-xl border border-white/26 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white'
    : 'inline-flex w-full justify-center rounded-xl border border-[#2C5F6F]/24 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#1d4a59]';

  return (
    <header className={headerShellClass}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 md:px-10">
        <Link href="/" className={logoClass} onClick={handleNavigate}>
          Estetia
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getPrimaryLinkClass(link.href)}
              onClick={() => {
                if (isHomePage && link.sectionId) {
                  setActivePrimaryHref(link.href);
                }
              }}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={openDesktopMegaMenu}
            onMouseLeave={scheduleDesktopMegaMenuClose}
            onFocus={openDesktopMegaMenu}
            onBlur={(event) => {
              const nextFocused = event.relatedTarget as Node | null;
              if (!event.currentTarget.contains(nextFocused)) {
                closeDesktopMegaMenu();
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                closeDesktopMegaMenu();
              }
            }}
          >
            <Link
              href="/servicios"
              className={treatmentTriggerClass}
              onClick={closeDesktopMegaMenu}
              aria-expanded={isMegaOpen}
              aria-haspopup="menu"
              aria-controls="desktop-treatments-panel"
            >
              Tratamientos
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className={`h-3 w-3 transition-transform duration-200 ${
                  isMegaOpen ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M2.25 4.5 6 8.25 9.75 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <AnimatePresence>
              {isMegaOpen ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={desktopPanelVariants}
                  className="fixed inset-x-0 top-[5.25rem] z-[60] px-4"
                  onMouseEnter={openDesktopMegaMenu}
                  id="desktop-treatments-panel"
                >
                  <div className={megaPanelShellClass}>
                    <div className={`flex items-end justify-between gap-6 border-b pb-5 ${megaDividerClass}`}>
                      <div>
                        <p className={megaEyebrowClass}>
                          Navegación neuroestética
                        </p>
                        <p className={megaSubcopyClass}>
                          Aisla la zona de aplicación y explora los tratamientos con máxima claridad.
                        </p>
                      </div>
                      <Link
                        href="/servicios"
                        className={megaCatalogClass}
                        onClick={closeDesktopMegaMenu}
                      >
                        Ver catálogo completo
                      </Link>
                    </div>

                    <div className="mt-6 grid gap-5 lg:grid-cols-[15.5rem_minmax(0,1fr)]">
                      <div>
                        <p className={zoneEyebrowClass}>
                          Zona de aplicación
                        </p>
                        <div role="tablist" aria-label="Selector de zonas de tratamiento" className="mt-2 space-y-2">
                          {zones.map((zone) => {
                            const zoneTone = zoneToneMap[zone.zoneKey] ?? defaultTone;
                            const isActive = activeZone?.zoneKey === zone.zoneKey;

                            return (
                              <button
                                key={zone.zoneKey}
                                type="button"
                                role="tab"
                                id={`desktop-zone-tab-${zone.zoneKey}`}
                                aria-selected={isActive}
                                aria-controls={`desktop-zone-panel-${zone.zoneKey}`}
                                onMouseEnter={() => setActiveZoneKey(zone.zoneKey)}
                                onFocus={() => setActiveZoneKey(zone.zoneKey)}
                                onClick={() => setActiveZoneKey(zone.zoneKey)}
                                className={`w-full rounded-2xl border px-3 py-3 text-left transition-all duration-200 ${
                                  isActive ? zoneTone.tabActive : zoneTone.tabInactive
                                }`}
                              >
                                <span className="flex items-center justify-between gap-2">
                                  <span className="text-sm font-semibold leading-tight">{zone.zoneLabel}</span>
                                  <span
                                    className={`rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] ${
                                      zoneTone.badge
                                    }`}
                                  >
                                    {zone.treatmentCount}
                                  </span>
                                </span>
                                <span className={`mt-1 block text-[0.72rem] leading-snug ${zoneTone.tabMeta}`}>
                                  {zone.zoneDescription}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <AnimatePresence mode="wait">
                        {activeZone ? (
                          <motion.section
                            key={activeZone.zoneKey}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            role="tabpanel"
                            id={`desktop-zone-panel-${activeZone.zoneKey}`}
                            aria-labelledby={`desktop-zone-tab-${activeZone.zoneKey}`}
                            className={`rounded-2xl border p-4 ${activeZoneTone.panelSurface}`}
                          >
                            <div className={`border-b pb-4 ${activeZoneTone.panelDivider}`}>
                              <p
                                className={`text-[0.64rem] font-semibold uppercase tracking-[0.18em] ${activeZoneTone.panelEyebrow}`}
                              >
                                Aplicación prioritaria
                              </p>
                              <h3 className={`mt-2 font-heading text-2xl leading-tight ${activeZoneTone.panelTitle}`}>
                                {activeZone.zoneLabel}
                              </h3>
                              <p className={`mt-1.5 text-sm ${activeZoneTone.panelBody}`}>
                                {activeZone.zoneDescription}
                              </p>
                            </div>

                            <motion.div
                              variants={desktopGridVariants}
                              initial="hidden"
                              animate="visible"
                              className="mt-4 grid gap-3 md:grid-cols-2"
                            >
                              {activeZone.categories.map((category) => (
                                <motion.section
                                  key={category.category}
                                  variants={desktopItemVariants}
                                  className={`rounded-xl border p-4 ${activeZoneTone.categoryCard}`}
                                >
                                  <Link
                                    href={`/servicios?categoria=${encodeURIComponent(category.categoryLabel)}`}
                                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:underline hover:underline-offset-4 ${activeZoneTone.categoryLink}`}
                                    onClick={closeDesktopMegaMenu}
                                  >
                                    {category.categoryLabel}
                                    <span
                                      className={`rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] ${
                                        activeZoneTone.badge
                                      }`}
                                    >
                                      {category.treatments.length}
                                    </span>
                                  </Link>

                                  <ul className="mt-2.5 space-y-1.5">
                                    {category.treatments.map((treatment) => (
                                      <li key={treatment.slug}>
                                        <Link
                                          href={`/servicios/${treatment.slug}`}
                                          className={`group/item flex items-start gap-2 text-sm transition-colors duration-200 hover:underline hover:underline-offset-4 ${activeZoneTone.itemLink}`}
                                          onClick={closeDesktopMegaMenu}
                                        >
                                          <span
                                            className={`mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full ${activeZoneTone.dot}`}
                                          />
                                          <span className="leading-snug">{treatment.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.section>
                              ))}
                            </motion.div>
                          </motion.section>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={mobileToggleClass}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-site-menu"
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
              {isMobileMenuOpen ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          <Link
            href="/#contacto"
            className={reserveButtonClass}
            onClick={handleNavigate}
          >
            Reservar
          </Link>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen ? (
          <motion.div
            id="mobile-site-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobilePanelVariants}
            className={mobilePanelClass}
          >
            <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (isHomePage && link.sectionId) {
                      setActivePrimaryHref(link.href);
                    }
                    handleNavigate();
                  }}
                  className={getMobilePrimaryLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setIsMobileTreatmentsOpen((prev) => !prev)}
                className={mobileTreatmentsButtonClass}
                aria-expanded={isMobileTreatmentsOpen}
              >
                Tratamientos
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  className={`h-3 w-3 transition-transform duration-200 ${
                    isMobileTreatmentsOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    d="M2.25 4.5 6 8.25 9.75 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {isMobileTreatmentsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-3 space-y-3"
                  >
                    {zones.map((zone) => {
                      const zoneTone = zoneToneMap[zone.zoneKey] ?? defaultTone;
                      const isOpen = mobileZoneKey === zone.zoneKey;

                      return (
                        <section key={zone.zoneKey} className={mobileZoneShellClass}>
                          <button
                            type="button"
                            onClick={() =>
                              setMobileZoneKey((currentZone) =>
                                currentZone === zone.zoneKey ? '' : zone.zoneKey
                              )
                            }
                            className={`flex w-full items-center justify-between rounded-2xl border px-3 py-3 text-left transition-colors duration-200 ${
                              isOpen ? zoneTone.tabActive : zoneTone.tabInactive
                            }`}
                            aria-expanded={isOpen}
                          >
                            <span>
                              <span className="text-sm font-semibold">{zone.zoneLabel}</span>
                              <span className={`mt-0.5 block text-[0.72rem] ${zoneTone.tabMeta}`}>
                                {zone.zoneDescription}
                              </span>
                            </span>
                            <span
                              className={`rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] ${zoneTone.badge}`}
                            >
                              {zone.treatmentCount}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen ? (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden px-3 pb-3"
                              >
                                <div className="mt-2 space-y-2">
                                  {zone.categories.map((category) => (
                                    <section
                                      key={category.category}
                                      className={`rounded-xl border p-3 ${zoneTone.categoryCard}`}
                                    >
                                      <Link
                                        href={`/servicios?categoria=${encodeURIComponent(category.categoryLabel)}`}
                                        className={`inline-flex items-center gap-2 text-sm font-semibold hover:underline hover:underline-offset-4 ${zoneTone.categoryLink}`}
                                        onClick={handleNavigate}
                                      >
                                        {category.categoryLabel}
                                        <span
                                          className={`rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.06em] ${zoneTone.badge}`}
                                        >
                                          {category.treatments.length}
                                        </span>
                                      </Link>

                                      <ul className="mt-2 space-y-1.5">
                                        {category.treatments.map((treatment) => (
                                          <li key={treatment.slug}>
                                            <Link
                                              href={`/servicios/${treatment.slug}`}
                                              className={`flex items-start gap-2 text-sm hover:underline hover:underline-offset-4 ${zoneTone.itemLink}`}
                                              onClick={handleNavigate}
                                            >
                                              <span
                                                className={`mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full ${zoneTone.dot}`}
                                              />
                                              <span className="leading-snug">{treatment.name}</span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </section>
                                  ))}
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </section>
                      );
                    })}
                    <Link
                      href="/servicios"
                      className={mobileCatalogClass}
                      onClick={handleNavigate}
                    >
                      Ver catálogo completo
                    </Link>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
