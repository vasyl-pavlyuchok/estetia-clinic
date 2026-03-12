# Project Memory - Estetia

## Brand Reference — Fuentes y Colores (SIEMPRE CARGAR)

### Tipografía
| Rol | Familia real | Variable CSS | Clase Tailwind |
|---|---|---|---|
| Headings (h1–h6) | **Playfair Display** (400/600/700) | `--font-playfair` | `font-heading` |
| Body / UI | **Plus Jakarta Sans** (400/500/600/700) | `--font-inter` | `font-body` |

> ⚠️ La variable CSS se llama `--font-inter` pero la fuente real es **Plus Jakarta Sans** (no Inter). No confundir.

### Paleta de color
| Rol | Hex | Cuándo usar |
|---|---|---|
| Fondo claro (base) | `#FFFFFF` | Secciones light |
| Superficie light | `#F6F7F8` | Cards/bloques secundarios light |
| Dark stage | `#0D1418` | Secciones oscuras (Hero, IA, footer) |
| Dark elevated | `#111A1F` | Cards sobre dark stage |
| Texto principal | `#000000` | Copy sobre fondos claros |
| Serum Blue Deep | `#2C5F6F` | Acento primario, estados, focus |
| Serum Blue Bright | `#7FAFC2` | Highlights, glows, gradientes |
| Serum Gold Deep | `#C9A96E` | Énfasis premium, borders gold |
| Serum Gold Bright | `#D5B884` | Detalles premium, highlights |

### Regla crítica CSS
En cualquier card/article con fondo oscuro: añadir `text-white` en el wrapper raíz.
Sin esto, los elementos sin clase de color explícita heredan `color: black` del body y son ilegibles.

### Tailwind config — clases personalizadas activas
- `font-heading` → Playfair Display
- `font-body` → Plus Jakarta Sans
- Colores disponibles directamente como hex en clases arbitrarias `text-[#hex]` / `bg-[#hex]`

---

## Current Product Direction

- We are redesigning the site end-to-end.
- Treatments/content model is considered stable and should not be redefined.
- `services.json` is the canonical source for services rendering.
- `BRIEF.md` is a living doc and can be refined when needed.
- ElevenLabs integration will be a lateral floating voice button (no dedicated IA section for now).
- Visual direction updated: monochrome luxury baseline (white/black architecture + controlled serum blue/gold accents; beige-led aesthetic invalidated).

## ServiceCard — Diseño canónico aprobado ✅

Componente: `components/ui/ServiceCard.tsx`

Estructura:
- `<article>` con `h-[480px] overflow-hidden rounded-3xl text-white` (text-white obligatorio en wrapper)
- Imagen full-bleed absoluta — **video-ready**: cambiar `<img>` por `<video autoPlay muted loop playsInline>` cuando haya assets
- Gradient overlay LIGERO: `from-[#120800]/80 via-[#120800]/15 to-transparent` — imagen visible en 2/3 superiores
- Panel frost bottom: `bg-[#120800]/72 backdrop-blur-md shadow-[0_-20px_40px_-8px_rgba(18,8,0,0.7)]` — oscuro concentrado AQUÍ, no en la imagen
- Border panel: `border-t border-[#C9A96E]/25`
- Badge categoría: gold `#E8CC8A` sobre `bg-[#C9A96E]/22 border-[#C9A96E]/60`
- Nombre: `font-heading line-clamp-1 text-[1.75rem] text-white`
- Tagline: `line-clamp-1 text-white/88`
- Footer: duration `text-white/72` · CTA "Explorar" `text-[#E8CC8A]`
- Sin iconos

Temperatura: warm (gold + `#120800` base oscura). Color frío (serum blue) reservado para secciones IA/tech.

## Experience Goal

- Premium medical-aesthetic brand feel (Apple-like clarity, spacing, restraint).
- High trust + aspirational tone.
- Strong IA positioning (chat/voice showcase) as a core differentiator.
- Neuroesthetics (Ramachandran) is a required design framework for visual and interaction decisions.

## Locked Information Architecture (Ecosystem, not single landing)

- Global navigation includes: `Metodo`, `Doctora`, `Resultados`, `Servicios` (with mega menu by service categories).
- Services ecosystem is multi-page:
  - `app/servicios/page.tsx`: full index grid using Living Cards.
  - `app/servicios/[slug]/page.tsx`: treatment detail with Hero Quirurgico, technical data, science section, and treatment-specific FAQ.
- Authority page:
  - `app/doctora/page.tsx`: "The Aesthetic Dream Team" in editorial two-column format.
- Philosophy page:
  - `app/metodo/page.tsx`: neuroaesthetic framework and symmetry/perfection method narrative.

## Known Strategic Assets

- Neuroesthetics reference: `/_project/neuroestetica-ramachandran.md`.
- Internal operating guide: `/_project/codex-design-operating-manual.md`.
- Hero-approved visual baseline: `/_project/context/hero-visual-reference.md`.
- Official visual system for new sections: `/_project/context/visual-system-v2.md`.
- Official home architecture + neuro criteria: `/_project/context/section-architecture-neuro.md`.
- Local Estetia skills: `./.codex/skills/estetia-build-flow`, `./.codex/skills/estetia-design-qa`.
- Global reusable skills: `~/.codex/skills/premium-landing-build-flow`, `~/.codex/skills/premium-ui-qa`.

## Collaboration Constraint

If a proposed approach is lower quality/scope than current implementation or established direction, keep the stronger existing baseline.

## Execution Mode (User Preference)

- Work in small, sequential increments.
- Implement only one section or tightly scoped subtask per iteration.
- Stop for user review/approval before moving to the next section.
- Do not batch multiple major sections in one pass unless explicitly requested.
- Mandatory pre-delivery quality gate: run "Estetia Critic Loop" (Apple minimalism + Ramachandran neuroesthetics + motion/performance check) and include a short `AUDITORIA ESTETICA` note in delivery responses.
