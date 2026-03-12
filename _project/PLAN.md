# PLAN — Estetia Clinic
**Última actualización:** 2026-03-12
**Dominio objetivo:** `estetia.vasylpavlyuchok.com`
**Ruta repo:** `/root/projects/estetia/`
**Stack:** Next.js 14 · Tailwind CSS · Framer Motion

---

## Estado general
- [x] Repo clonado desde GitHub
- [x] Auditoría inicial completada
- [ ] DNS configurado
- [ ] Docker + Traefik configurado
- [ ] Accesible en estetia.vasylpavlyuchok.com
- [ ] ElevenLabs widget integrado
- [ ] Publicado y funcional

---

## Paleta aprobada (NO cambiar)
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

Tipografía: **Playfair Display** (headings) + **Inter** (body)

---

## Secciones — auditoría

| Sección | Componente | Estado | Notas |
|---|---|---|---|
| Hero | `HeroSection.tsx` | ✅ Sólida | Video Cloudinary + Framer Motion. No tocar. |
| Trust Indicators | `TrustIndicatorsSection.tsx` | ⚠️ Mejorar | Marquee de marcas OK pero usa URLs externas que pueden caer. SVGs locales en /public/brands/ no se están usando. |
| Servicios | `ServicesSection.tsx` | ✅ Sólida | Preview (6 destacados) + full mode con filtros por categoría. services.json listo. |
| AI Showcase | `AIShowcaseSection.tsx` | ✅ Sólida | Copy sólido, GDPR+EU AI Act, 6 capabilities, disclaimer. Falta widget real. |
| Social Proof | `SocialProofSection.tsx` | ❌ Placeholder | Slider antes/después es solo gradientes de color, sin imágenes. 2 testimonios ficticios hardcoded. |
| Proceso clínico | `ClinicalProcessSection.tsx` | ✅ Sólida | 5 pasos bien escritos, layout limpio. |
| Tecnología | `TechnologySection.tsx` | ✅ Sólida | Dark section, 6 tecnologías, consistente con sistema visual. |
| Dream Team | `DreamTeamSection.tsx` | ⚠️ Mejorar | Cards sin fotos reales (solo gradientes). 3 médicos ficticios — OK para demo pero se ve vacío. |
| FAQ | `FAQSection.tsx` | ⚠️ Mejorar | Solo 6 preguntas básicas. Sin preguntas sobre el agente IA. Acordeón nativo sin animación. |
| Contacto | `ContactSection.tsx` | ✅ Aceptable | Formulario sin backend (demo OK). Datos ficticios. Bien estructurado. |
| Footer | `FooterSection.tsx` | ✅ Sólida | Links de privacidad apuntan a "#" — sin páginas legales. Resto bien. |

---

## Tareas pendientes

### FASE 0 — Setup infraestructura
- [x] DNS: añadir A record `estetia` → `31.97.32.226` en Hostinger ✓
- [x] Crear `docker-compose.yml` (prod) con Traefik labels ✓
- [x] Crear `docker-compose.dev.yml` (hot-reload, puerto 3001) ✓
- [x] Crear `Dockerfile` ✓
- [x] Levantar en dev y verificar que carga → OK en http://31.97.32.226:3001 ✓
- [ ] Levantar en prod y verificar HTTPS en estetia.vasylpavlyuchok.com

### FASE 1 — Auditoría de secciones ✅ COMPLETADA
- [x] Todas las secciones revisadas — ver tabla de auditoría arriba

### FASE 2 — ElevenLabs integration
- [ ] Obtener Agent ID de ElevenLabs
- [ ] Decidir posición: sidebar sticky o sección embebida
- [ ] Implementar widget (script embed o iframe)
- [ ] Conectar CTA del Hero con el widget
- [ ] Probar conversación real

### FASE 3 — Mejoras de secciones (post-auditoría)
- [ ] (se rellenará tras auditoría)

### FASE 4 — Polish
- [ ] Revisar mobile responsiveness
- [ ] Añadir disclaimer "caso de estudio - demo"
- [ ] Verificar que el video del hero carga correctamente
- [ ] Performance check (LCP < 2.5s)

### FASE 5 — Integración vasylpavlyuchok.com
- [ ] Añadir card "Estetia Clinic" en `/ai` section
- [ ] Link → `estetia.vasylpavlyuchok.com` con `target="_blank"`
- [ ] Rebuild y deploy vasylpavlyuchok.com

---

## Neuroestética Ramachandran — aplicar en TODA la web
Documento: `_project/neuroestetica-ramachandran.md` — LEER antes de tocar cualquier sección.
8 principios clave: Peak Shift · Aislamiento · Agrupación · Contraste · Problem Solving · Simetría · Punto de vista genérico · Metáfora
**Regla**: cada sección debe poder justificarse en términos de al menos 2 principios.

---

## Cliente objetivo (IMPORTANTE — no olvidar)
**No es el paciente final. Es la CLÍNICA ESTÉTICA** que quiere ver si puede confiar en Vasyl para implementar agentes IA + diseñar su web. La página debe hacer que una clínica diga "quiero esto para mí". Implica: ofrecer no solo agentes sino también diseño web como servicio.

---

## Feedback visual de Vasyl (sesión 2026-03-12)

### Hero — OK con mejoras menores
- Video: excelente, no tocar
- Botones: añadir más backdrop-filter blur (efecto frosted/mate — desenfoca el fondo, no solo más opacidad)
- Contraste oscuro/claro: muy positivo — mantener

### ServicesSection — REDISEÑAR
- Copy "Seis tratamientos para entender qué ofrecemos" → cambiar a algo como "Nuestra selección de tratamientos más recomendados"
- Fondo blanco + sección plana → no convence, le falta vida y sonoridad
- Cards demasiado pequeñas/genéricas — necesitan más impacto visual
- Objetivo: que parezca moderno y bonito, aplicando neuroestética

### AIShowcaseSection — revisar copy y colores
- Contenido OK
- Colores actuales fuera de tono según Vasyl
- Aplicar teal `#00C9B1` como acento específico para toda la sección IA

### Fuentes — revisar
- Playfair Display + Inter actual: no disgusta pero puede mejorar
- Evaluar alternativas más modernas/editoriales

### Copy general — revisión proactiva
- Vasyl quiere que yo proponga mejoras de copy en todas las secciones
- Mantener tono: profesional, cercano, educativo, aspiracional

---

## Paleta — decisión pendiente para sesión nueva
- Opción A (actual): `#0D1418` + petroleum blue `#2C5F6F` + gold `#C9A96E`
- Opción B (híbrida): `#0A0A0F` dark + crema `#F5F0E8` textos + rose gold `#C9896A` + teal IA `#00C9B1`
- Teal SOLO para sección IA — diferenciador de inteligencia artificial
- Liquid glass mejorado: más backdrop-blur, efecto mate/frosted

---

## Decisiones tomadas
- Arquitectura: **subdominio independiente** (no integrado en vasylpavlyuchok.com)
- Paleta: mantener la existente del repo (mejor que propuesta inicial)
- Apertura: `target="_blank"` desde vasylpavlyuchok.com /ai
- Template reutilizable: env vars `AGENT_TYPE` + `ELEVENLABS_AGENT_ID` para multi-deploy

---

## Dónde retomar si se reinicia contexto
1. Leer este archivo
2. Leer `_project/BRIEF.md` (diseño y objetivos)
3. Ver estado de secciones en tabla de arriba
4. Continuar con primera tarea `[ ]` pendiente
