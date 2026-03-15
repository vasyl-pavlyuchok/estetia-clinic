# Estetia — Brand Guidelines & Component Recipes
**Última actualización**: 2026-03-14

---

## ServiceCard — Variantes aprobadas

### `frost` — Panel blanco translúcido (uso: home preview, fondos claros)

Imagen full-bleed + panel glass blanco flotando sobre la parte inferior.

**Panel:**
```
bg-[linear-gradient(150deg,rgba(255,255,255,0.55)_0%,rgba(250,253,255,0.45)_56%,rgba(246,249,252,0.35)_100%)]
backdrop-blur-[15px] backdrop-brightness-[0.98] backdrop-saturate-[1.4]
border-t border-white/[0.22]
```

**Badge gold (sobre fondo translúcido):**
```
border border-[#C9A96E]/70  bg-[#C9A96E]/25  text-[#5C3D0A]
```
> ⚠️ Usar `text-[#5C3D0A]` (oro oscuro) — no `text-[#8B6914]`. Con panel semitransparente el tono claro se pierde.

**Texto principal:** `text-[#0D1418]`
**Tagline:** `text-black/65`
**CTA "Explorar":** `text-[#2C5F6F]` hover `text-[#1F4B5A]`
**Divisor:** `border-black/[0.08]`

---

### `dark` — Panel oscuro con frost (uso: catálogo /servicios, secciones oscuras)

Imagen full-bleed + gradiente oscuro bottom + panel dark glass.

**Gradiente overlay:**
```
bg-gradient-to-t from-[#120800]/80 via-[#120800]/15 to-transparent
```

**Panel:**
```
bg-[#120800]/72  backdrop-blur-md
border-t border-[#C9A96E]/25
shadow-[0_-20px_40px_-8px_rgba(18,8,0,0.7)]
```

**Badge gold (sobre fondo oscuro):**
```
border border-[#C9A96E]/60  bg-[#C9A96E]/22  text-[#E8CC8A]
```
> ⚠️ Usar `text-[#E8CC8A]` (oro claro) sobre fondo oscuro — nunca `text-[#8B6914]` que se pierde en negro.

**Texto principal:** `text-white`
**Tagline:** `text-white/88`
**CTA "Explorar":** `text-[#E8CC8A]` hover `text-white`
**Divisor:** `border-white/16`

---

## Regla general — Gold text en cards

| Fondo del panel | Color badge texto | Hex |
|---|---|---|
| Claro / translúcido blanco | Oro oscuro | `#5C3D0A` |
| Oscuro / translúcido negro | Oro claro | `#E8CC8A` |

Nunca usar el mismo tono dorado en ambos contextos.

---

## Páginas de tratamiento — Patrón canónico

**Ruta:** `app/servicios/[nombre-slug]/page.tsx` + `page.module.css`
**Método de implementación:** CSS modules (NO Tailwind). Vasyl pasa HTML completo → adaptar solo `class→className`, rutas de imagen, eliminar `<header>`.

### Estructura obligatoria del `page.tsx`

```tsx
'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function NombrePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add(styles.visible); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.reveal}, .${styles['reveal-stagger']}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles['hero-wrapper']}>
        <div className={styles['hero-image-col']}>
          <img src="/images/services/[nombre-archivo].webp" alt="[Nombre] — Estetia" />
          {/* Badge: siempre position absolute, bottom-right */}
        </div>
        <div className={styles['hero-content-col']}>
          {/* protocol-label, h1, service-tagline, hero-desc, meta-strip, tags, hero-ctas */}
        </div>
      </div>
      <div className={styles['scroll-section']} id="protocolo">
        {/* Beneficios, indicaciones, contraindicaciones, CTA final */}
      </div>
    </>
  );
}
```

### CSS module — variables raíz (siempre al inicio del archivo)

```css
:root {
  --font-playfair: 'Playfair Display', serif;
  --font-inter:    'Plus Jakarta Sans', sans-serif;
  --bg:            #FFFFFF;
  --surface:       #F6F7F8;
  --dark-stage:    #0D1418;
  --dark-elevated: #111A1F;
  --text-main:     #0D1418;
  --text-body:     #3d4f58;
  --text-muted:    #7a9097;
  --blue-deep:     #2C5F6F;
  --blue-bright:   #7FAFC2;
  --gold-deep:     #C9A96E;
  --gold-bright:   #D5B884;
  --blue-dim:      rgba(44,95,111,0.07);
  --blue-border:   rgba(44,95,111,0.14);
  --gold-dim:      rgba(201,169,110,0.09);
  --gold-border:   rgba(201,169,110,0.22);
  --border:        rgba(13,20,24,0.08);
}
```

### Hero layout

- **Grid**: `grid-template-columns: 1fr 1fr` → imagen izquierda sticky, contenido derecha scrollable
- **Imagen col**: `position: sticky; top: 0; height: 100vh; overflow: hidden`
- **Imagen**: `object-fit: cover; object-position: center top` + animación Ken Burns (12s ease-in-out)
- **Badge sobre imagen**: `position: absolute` — **siempre `bottom: 36px; right: 36px`** (fix global aprobado)
- **Botones CTA**: `border-radius: 9999px` — siempre píldora, nunca rectangular

### Animación reveal (scroll)

Elementos con `.reveal` o `.reveal-stagger` empiezan invisibles y aparecen al entrar en viewport.

```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease, transform 0.55s ease; }
.reveal.visible { opacity: 1; transform: none; }
.reveal-stagger > * { opacity: 0; transform: translateY(16px); transition: opacity 0.45s ease, transform 0.45s ease; }
.reveal-stagger.visible > *:nth-child(1) { opacity: 1; transform: none; transition-delay: 0s; }
.reveal-stagger.visible > *:nth-child(2) { opacity: 1; transform: none; transition-delay: 0.08s; }
/* ...etc */
```

### Reglas de imagen

- Archivos en `public/images/services/` — formato `.webp`
- Nombres: sin tildes, sin espacios, todo lowercase con guiones
- Verificar siempre que el nombre en `src=` coincide con el archivo real en disco (bug frecuente: `á`→`con-cido`, `prp-capilar`→nombre completo)

---

## AIShowcaseSection — Decisiones técnicas

**Componente:** `components/sections/AIShowcaseSectionV2.tsx`

- Canvas circular Siri-like con 5 strands animados + input de micrófono pasivo
- GPU hint: `will-change: transform` en el `<canvas>`
- **Performance cap:** 30fps (`FRAME_INTERVAL = 1000/30`), STEPS = 150
- `shadowBlur` se setea UNA vez fuera del loop por strand (no dentro de cada iteración)
- Micrófono: `getUserMedia` silencioso — si se deniega, animación idle continúa
- `audioCtx?.close()` en el cleanup del `useEffect`

---

## Performance — Decisiones de arquitectura (home)

- **Static imports:** HeroSection, TrustIndicatorsSection, ServicesSection, AIShowcaseSectionV2
- **Dynamic imports con placeholder:** todo lo demás (SocialProof, FAQ, Footer, etc.)
- Placeholders con `minHeight` para evitar layout shift al montar
- Video Hero: usar URL Cloudinary + poster con `so_0` para primer frame automático

