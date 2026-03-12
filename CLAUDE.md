# Estetia — Contexto del Proyecto
**Última actualización**: 2026-03-12

Fuente de verdad para Claude Code en este proyecto.
Leer este archivo al inicio de cada sesión antes de ejecutar nada.

---

## Stack

| Campo | Valor |
|---|---|
| Framework | Next.js (App Router) |
| Estilos | Tailwind CSS |
| Animación | Framer Motion |
| Tipografía | Playfair Display (headings) + Plus Jakarta Sans (body) |
| Proyecto | Clínica de medicina estética premium |

---

## Brand Reference — Cargar siempre

### Fuentes

| Rol | Familia | Variable CSS | Clase Tailwind |
|---|---|---|---|
| Headings (h1–h6) | **Playfair Display** (400/600/700) | `--font-playfair` | `font-heading` |
| Body / copy | **Plus Jakarta Sans** (400/500/600/700) | `--font-inter` | `font-body` |
| UI / etiquetas | **DM Sans** (400/500/600) | `--font-dm-sans` | `font-ui` |

> ⚠️ La variable CSS `--font-inter` carga **Plus Jakarta Sans**, no Inter.
> `font-ui` (DM Sans) se usa para títulos de componentes UI pequeños donde la legibilidad es crítica (ej: capability rows en AIShowcaseSection).

### Paleta de color

| Rol | Hex | Cuándo |
|---|---|---|
| Fondo claro (base) | `#FFFFFF` | Secciones light |
| Superficie light | `#F6F7F8` | Cards/bloques secundarios light |
| Dark stage | `#0D1418` | Secciones oscuras (Hero, IA, footer) |
| Dark elevated | `#111A1F` | Cards sobre dark stage |
| Texto principal | `#000000` | Copy sobre fondos claros |
| Serum Blue Deep | `#2C5F6F` | Acento primario, estados, focus |
| Serum Blue Bright | `#7FAFC2` | Highlights, glows, gradientes IA |
| Serum Gold Deep | `#C9A96E` | Énfasis premium, borders gold |
| Serum Gold Bright | `#D5B884` | Detalles premium, highlights |

### Regla CSS crítica — cards oscuras
En cualquier `<article>` o `<div>` con fondo oscuro: añadir `text-white` en el wrapper raíz.
Sin esto, elementos sin color explícito heredan `color: black` del body y son ilegibles.

---

## Estructura de rutas

| Ruta | Archivo | Estado |
|---|---|---|
| `/` | `app/page.tsx` | Activo — home con todas las secciones |
| `/servicios` | `app/servicios/page.tsx` | Activo — catálogo completo |
| `/servicios/[slug]` | `app/servicios/[slug]/page.tsx` | Activo — ficha de tratamiento |
| `/doctora` | `app/doctora/page.tsx` | Activo |
| `/metodo` | `app/metodo/page.tsx` | Activo |
| `/ia` | `app/ia/page.tsx` | Activo — página dedicada IA (creada 2026-03-12) |
| `/metodo` | `app/metodo/page.tsx` | Activo — Metodología clínica (reescrita 2026-03-12) |

---

## Archivos de contexto — cuándo cargar

| Archivo | Cargar cuando |
|---|---|
| `_project/BRIEF.md` | Siempre — define el proyecto completo |
| `_project/context/project-memory.md` | Siempre — decisiones aprobadas, componentes canónicos |
| `_project/context/visual-system-v2.md` | Siempre — reglas de composición y neuroestética |
| `_project/services.json` | Cualquier trabajo con servicios/cards de tratamiento |
| `_project/services-detail.md` | Copy detallado de tratamientos |
| `_project/neuroestetica-ramachandran.md` | Decisiones visuales o de motion avanzadas |
| `_project/context/hero-visual-reference.md` | Trabajo en Hero o decisiones de paleta aprobada |
| `_project/context/elevenlabs-alignment-checklist.md` | Trabajo en sección IA / agente de voz |

---

## Reglas de ejecución

1. **No degradar calidad** — ningún cambio puede bajar el nivel de lo ya construido.
2. **Datos desde `services.json`** — nunca inventar servicios ni copy de tratamientos.
3. **Visual premium, no template** — lenguaje visual intencional, Ramachandran como guardarraíl obligatorio.
4. **Un sprint, una sección** — implementar una sección/tarea a la vez, parar para validación antes de continuar.
5. **Multi-sección solo si Vasyl lo pide explícitamente.**
6. **Dirección visual incierta** → consultar con `Estetia - Web Design Expert` (Gemini) antes de implementar.

---

## Colaborador externo

**Estetia - Web Design Expert** (Gemini) — fuerte en:
- Generación de imágenes premium
- Investigación creativa/diseño con acceso a internet
- Posible generación imagen→video

Proponer consulta cuando haya incertidumbre sobre dirección de marca, assets visuales o calidad de medios.

---

## Secciones del home — estado

| Sección | Componente | Estado |
|---|---|---|
| Hero | `HeroSection.tsx` | ✅ Aprobado |
| Servicios (preview) | `ServicesSection.tsx` | ✅ Copy actualizado 2026-03-12 |
| IA Showcase | `AIShowcaseSection.tsx` | ✅ Rediseñado + SVG icons + DM Sans + badge gold 2026-03-12 |
| Tecnología | `TechnologySection.tsx` | — |
| Doctora (preview) | `DreamTeamSection.tsx` | — |
| Social Proof | `SocialProofSection.tsx` | — |
| FAQ | `FAQSection.tsx` | — |
| Contacto | `ContactSection.tsx` | — |
| Footer | `FooterSection.tsx` | — |
