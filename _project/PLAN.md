# PLAN — Estetia Clinic
**Última actualización:** 2026-03-12
**Dominio objetivo:** `estetia.vasylpavlyuchok.com`
**Ruta repo:** `/root/projects/estetia/`
**Stack:** Next.js 14 · Tailwind CSS · Framer Motion

---

## Paleta (NO cambiar)
| Rol | Hex |
|---|---|
| Fondo oscuro principal | `#0D1418` |
| Fondo oscuro elevado | `#111A1F` |
| Serum Blue deep | `#2C5F6F` |
| Serum Blue bright | `#7FAFC2` |
| Gold deep | `#C9A96E` |
| Gold bright | `#D5B884` |
| Blanco base | `#FFFFFF` |
| Gris técnico | `#F6F7F8` |
| Teal IA (SOLO AIShowcase) | `#00C9B1` |

Tipografía: **Playfair Display** (headings) + **Inter** (body)

---

## Cliente objetivo
**No el paciente final. La CLÍNICA ESTÉTICA** que evalúa si puede confiar en Vasyl para IA + diseño web. La web debe hacer que una clínica diga "quiero esto para mí".

---

## Mapa de tonos — BLOQUEADO ✅
| Sección | Tono | Estado |
|---|---|---|
| Hero | 🌑 Oscuro | ✅ OK — video + frosted glass buttons |
| Trust Indicators | ⬜ Claro | ✅ OK — marquee flush sin padding |
| Services | ⬜ Claro | ✅ OK — rediseñada, editorial |
| AI Showcase | 🌑 Oscuro | ✅ OK — teal `#00C9B1` |
| Social Proof | ⬜ Claro | ⏸ Pospuesto — placeholder hasta tener fotos |
| Clinical Process | ⬜ Claro | ✅ OK |
| Technology | 🌑 Oscuro | ✅ OK — reposicionada: compromisos médicos (cómo trabajamos), no lista de máquinas |
| Dream Team | ⬜ Claro | ⏸ Pospuesto — placeholder hasta tener fotos |
| FAQ | ⬜ Claro | ⚠️ Mejorar — ver pendientes |
| Contact | 🌑 Oscuro | ✅ OK — dark, patrón glassmorphism consistente con Tech |
| Footer | ⬜ Claro | ✅ OK |

Regla: oscuros estratégicos (Hero · AI · Tech · Contact), no alternados.

---

## Pendientes (en orden)

### 1. Deploy prod
- Levantar en prod → verificar HTTPS en `estetia.vasylpavlyuchok.com`

### 4. ElevenLabs integration
- Obtener Agent ID · decidir posición (floating button lateral) · implementar widget · conectar CTA Hero

### 5. Polish
- Mobile responsiveness pass
- Añadir disclaimer "caso de estudio - demo"
- Performance check (LCP < 2.5s)

### 6. Integración vasylpavlyuchok.com
- Card "Estetia Clinic" en `/ai` → link `estetia.vasylpavlyuchok.com` `target="_blank"`

---

## Decisiones arquitectónicas
- Subdominio independiente (no integrado en vasylpavlyuchok.com)
- `target="_blank"` desde vasylpavlyuchok.com /ai
- Template reutilizable: env vars `AGENT_TYPE` + `ELEVENLABS_AGENT_ID` para multi-deploy
- Neuroestética Ramachandran: cada sección justificada en ≥2 principios → `_project/neuroestetica-ramachandran.md`
- Social Proof + Dream Team pospuestos hasta tener fotos reales (placeholder actual)

---

## Cómo retomar contexto
1. Leer este archivo
2. `_project/BRIEF.md` si hay dudas de diseño
3. Primera tarea `❌` pendiente arriba = ContactSection
