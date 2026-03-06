# BRIEF — Estetia Clinic Web

## Propósito del proyecto
Página web de demostración (case study) para una clínica estética ficticia llamada "Estetia".
El objetivo principal es servir de **showcase de agentes de IA** (chat y voz) para clínicas estéticas.
El diseño debe parecer real, profesional y diferenciador — no una plantilla genérica de salud.

---

## Stack
- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Datos:** `/_project/services.json` (20 tratamientos ya estructurados)
- **Medios:** Cloudinary para fotos y vídeos generados con IA
- **Sin base de datos ni autenticación** — es un sitio frontend estático

---

## Referencia visual
Estilo **Apple**: espacios amplios, tipografía grande y elegante, animaciones de scroll suaves,
secciones con mucho aire, vídeos breves en loop como fondo, microinteracciones cuidadas.
**NO** diseño tipo clínica genérica / Bootstrap / plantilla médica.

---

## Paleta de colores (Actualizada - Monocromo de Lujo)
| Rol | Color | Hex |
|---|---|---|
| Fondo principal | Blanco inmaculado | `#FFFFFF` |
| Fondo secundario | Gris técnico suave | `#F6F7F8` |
| Fondo oscuro principal | Negro azulado premium | `#0D1418` |
| Fondo oscuro elevado | Carbón técnico | `#111A1F` |
| Acento serum azul (deep) | Azul petróleo clínico | `#2C5F6F` |
| Acento serum azul (bright) | Azul serum activo | `#7FAFC2` |
| Acento serum dorado (deep) | Dorado premium | `#C9A96E` |
| Acento serum dorado (bright) | Dorado suave | `#D5B884` |
| Texto principal en claro | Negro absoluto | `#000000` |
| Texto en oscuro | Blanco puro | `#FFFFFF` |

---

## Tipografía
- **Headings:** Playfair Display (Google Fonts) — serif elegante
- **Body / UI:** Inter (Google Fonts) — sans-serif limpia

---

## Estructura de carpetas
```
/_project/          ← documentos de referencia (no se publican)
  BRIEF.md
  services.json
  system-prompt.md  ← documento original con especificaciones completas
  services-detail.md ← documento original con los 20 tratamientos detallados

/app/               ← páginas Next.js (App Router)
/components/
  /sections/        ← Hero, Services, Testimonials, etc.
  /ui/              ← Button, Card, Badge, etc.
/public/            ← assets estáticos ligeros
```

---

## Secciones de la web (por orden de prioridad)
1. **Hero** — vídeo en loop generado con IA, headline potente, 2 CTAs, scroll indicator
2. **Trust indicators** — certificaciones, años de experiencia, número de tratamientos
3. **Servicios** — grid por categorías, datos desde `services.json`, 6 categorías / 20 tratamientos
4. **Agentes de IA** ⭐ — sección destacada con demo de chat y voz (elemento diferenciador principal)
5. **Antes y Después** — slider comparativo interactivo
6. **Proceso** — timeline horizontal (consulta → plan → ejecución → seguimiento → resultados)
7. **Tecnología** — grid de equipos y certificaciones
8. **Testimonios** — carousel con foto, nombre, tratamiento, estrellas
9. **FAQ** — accordion por categorías
10. **Contacto** — formulario + WhatsApp + mapa
11. **Footer** — completo con redes, certificaciones, legal

---

## Elementos diferenciadores clave
- **Agente de chat IA** flotante (showcase principal)
- **Agente de voz IA** (showcase principal)
- Quiz "Encuentra tu tratamiento ideal"
- Comparador de hasta 3 tratamientos
- Simulador visual de resultados (con disclaimer)

---

## Tono y copywriting
- Profesional pero cercano, educativo, empático
- **Evitar:** promesas irreales, tecnicismos sin explicar, tono frío, presión de venta
- **Keywords:** natural, personalizado, avanzado, seguro, experto, certificado

---

## Lo que NO quiero
- Diseño tipo clínica genérica o Bootstrap
- Animaciones agresivas o excesivas
- Efectos que ralenticen la página (Core Web Vitals: LCP < 2.5s)
- Componentes con shadcn (demasiada dependencia externa)
- Exceso de sombras o gradientes llamativos

---

## Referencias completas
Para especificaciones detalladas consultar:
- `/_project/system-prompt.md` — arquitectura, accesibilidad, SEO, performance
- `/_project/services-detail.md` — descripción completa de cada tratamiento
- `/_project/services.json` — datos estructurados listos para consumir en código
- `/_project/context/hero-visual-reference.md` — baseline visual aprobado del Hero
- `/_project/context/visual-system-v2.md` — sistema visual oficial para el resto del sitio
