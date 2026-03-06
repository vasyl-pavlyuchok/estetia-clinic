Para **landings rápidas que parezcan de agencia top**, el sistema ganador es:

1. **Stack fijo + componentes premium**
2. **Un “GSD Skill”** (workflow repetible)
3. **Un “QA Skill”** (pulido automático)
4. **Un repo plantilla (starter) que clonas y ya** (para no “instalar” cada vez)

Codex puede ayudarte a montarlo, pero tú necesitas darle **la arquitectura** y las reglas. Te la dejo cerrada y ejecutable.

---

# Arquitectura que vamos a construir

## A) Starter “Estándar de Agencia” (tu base para todas las landings)

**Next.js (App Router) + Tailwind + shadcn/ui + Radix + Framer Motion**

* Tipografías: `next/font` (serif + sans)
* Componentes: shadcn (botones, cards, dialogs) + Radix debajo
* Animaciones: framer-motion (micro)
* SEO: metadata por página + OG tags
* Performance: imágenes con `next/image`, lazy, prefetch controlado
* Accesibilidad: focus states, aria, contrast

**Resultado:** cada landing nace ya “premium”, no improvisada.

## B) Carpeta “Blueprints” (lo que Claude llamaría GSD)

Dentro del repo tendrás:

* `/blueprints/landing.md` (estructura de secciones)
* `/blueprints/copy-formulas.md` (copy rápido: hooks, bullets, CTAs)
* `/blueprints/components.md` (componentes obligatorios + variantes)
* `/blueprints/qa-checklist.md` (QA manual mínimo)

Esto hace que Codex no invente, sino que ejecute.

## C) Skills (Codex)

### 1) `gsd-landing-builder`

Hace siempre:

1. sitemap → 2) wireframe → 3) componentes → 4) copy → 5) build

### 2) `qa-polish`

Hace siempre:

* revisa spacing, tipografía, responsive
* limpia Tailwind
* valida a11y básica
* revisa SEO metadata
* detecta incoherencias visuales

---

# Paso a paso para montarlo (en este workspace)

## Paso 1 — Crear el “Starter Repo” (una vez)

Le vas a pedir a Codex:

* crear un proyecto Next con Tailwind
* instalar shadcn/ui y framer-motion
* crear estructura de carpetas y componentes base
* dejar `/blueprints/*`
* dejar 1 landing demo (para que sea tu “golden reference”)

## Paso 2 — Convertirlo en “Template”

* Subes ese repo a GitHub como `landing-starter`
* Cada vez que quieras una landing nueva:

  * duplicas repo (o “Use this template”)
  * cambias copy, servicios, branding
  * deploy

## Paso 3 — Skills

* Guardas las skills en el repo (para que viajen con el template)
* Codex las ejecuta por defecto al abrir el proyecto

---

# Qué hacer ahora mismo (acción inmediata)

Abre el panel de Codex y pega esto (tal cual):

**PROMPT PARA CODEX (setup completo)**

> Quiero crear un “Landing Starter” profesional para construir landings rápidas tipo agencia premium.
> Stack: Next.js App Router + Tailwind + shadcn/ui + Radix + Framer Motion.
> Objetivo: que cualquier landing nueva sea copiar-pegar y cambiar contenido, manteniendo diseño moderno, responsive, accesible y con SEO básico.
>
> Tareas:
>
> 1. Crear la estructura de proyecto ideal (carpetas, layout, metadata, fonts).
> 2. Instalar y configurar shadcn/ui y framer-motion.
> 3. Crear un set mínimo de componentes reutilizables: Navbar, Hero, FeatureGrid, ServicesGrid, SocialProof, Testimonials, FAQAccordion, Pricing, CTASection, Footer, ContactForm + WhatsApp CTA.
> 4. Crear `/blueprints/` con: landing.md, copy-formulas.md, qa-checklist.md.
> 5. Construir una landing demo “Estetia Clinic” para validar el starter.
> 6. Al final: lista de comandos para correr y cómo abrir el puerto en Firebase Studio.
>
> Reglas: diseño premium minimal, spacing consistente, tipografía moderna, micro-animaciones suaves, sin dependencias raras. Todo responsive. No usar imágenes externas: placeholders en /public.

Cuando Codex te responda con un plan y comandos, le dices **sí** para ejecutarlos.

---

# Antes de arrancar: 2 decisiones rápidas (para no rehacer)

1. ¿Quieres que el starter tenga **modo “dark luxury”** por defecto (como Estetia) o **light clean** por defecto?
2. ¿Deploy objetivo: **Vercel** o **Firebase Hosting**?

Responde con:

* `dark + vercel` o `light + firebase` (o mezcla)

Y lo dejamos con defaults perfectos para tu estilo.
