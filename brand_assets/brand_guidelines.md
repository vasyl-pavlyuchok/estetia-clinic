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
