# Estetia Section Architecture (Neuro-Aligned)

## Scope

Arquitectura oficial de la home para una clinica estetica futurista con IA.
Basada en:
- `/_project/BRIEF.md`
- `/_project/context/visual-system-v2.md`
- `/_project/neuroestetica-ramachandran.md`

## Secciones obligatorias (Home V2)

1. Hero
- Objetivo: impacto, deseo, posicionamiento premium inmediato.
- Diseno: fondo video oscuro + tipografia clara + 2 CTAs serum.
- Neuro: Isolation + Contrast + Peak Shift.

2. Trust Indicators
- Objetivo: credibilidad rapida (certificaciones, tecnologia, volumen de casos).
- Diseno: banda limpia horizontal, datos escaneables, ritmo estable.
- Neuro: Grouping + Generic Viewpoint.

3. The Center Method
- Objetivo: explicar filosofia de perfeccion y simetria desde ciencia.
- Diseno: bloque editorial sobrio con manifiesto claro y estructura simetrica.
- Neuro: Symmetry + Metaphor.

4. Servicios (Preview + Catalogo)
- Objetivo: navegar 20 tratamientos sin fatiga.
- Diseno: home con preview curado, catalogo completo en `/servicios`, ficha por ruta dinamica `/servicios/[slug]`.
- Neuro: Grouping + Problem Solving (comparar opciones rapido).

5. The Aesthetic Dream Team
- Objetivo: reforzar autoridad medica y aspiracionalidad.
- Diseno: retratos editoriales tipo moda (no look clinico generico).
- Neuro: Peak Shift + Generic Viewpoint.

6. IA Assistants (Chat + Voz)
- Objetivo: diferenciar la marca con experiencia asistida.
- Diseno: entrypoints claros, estados de voz visibles, fallback textual siempre.
- Neuro: Contrast + Metaphor + Trust scaffolding.

7. Social Proof High-End
- Objetivo: evidencia visual de resultados.
- Diseno: citas elegantes + slider Antes/Despues de alta precision.
- Neuro: Perceptual Problem Solving + Generic Viewpoint.

6. Proceso Clinico
- Objetivo: reducir incertidumbre del paciente.
- Diseno: timeline 5 pasos (consulta, plan, ejecucion, seguimiento, resultados).
- Neuro: Grouping + Symmetry.

7. Tecnologia
- Objetivo: justificar posicionamiento de vanguardia.
- Diseno: grid de equipos/certificaciones con lenguaje visual tecnico-premium.
- Neuro: Isolation + Contrast.

8. Testimonios
- Objetivo: prueba social con contexto real.
- Diseno: carrusel sobrio, nombre, tratamiento, resultado percibido.
- Neuro: Generic Viewpoint + Grouping.

9. FAQ
- Objetivo: remover objeciones antes del contacto.
- Diseno: acordeon por categorias, microcopy claro y medico.
- Neuro: Problem Solving.

10. Contacto
- Objetivo: conversion principal.
- Diseno: formulario + WhatsApp + mapa + horarios + CTA directo.
- Neuro: Contrast + Clarity (friccion minima).

11. Footer
- Objetivo: cierre de confianza y navegacion.
- Diseno: legal, redes, certificaciones, links de servicio.
- Neuro: Grouping.

## Reglas de estilo transversales

1. Paleta:
- base clara (`#FFFFFF`, `#F6F7F8`),
- oscuros de precision (`#0D1418`, `#111A1F`),
- acentos serum azul/dorado solo para enfatizar.

2. Evitar:
- look beige dominante,
- cards oscuras masivas en secciones de lectura extensa,
- estetica plantilla medica.

3. Jerarquia:
- 1 foco principal por bloque,
- espaciado amplio,
- texto maximo legible (sin muros de copy).

4. Motion:
- suave y funcional (no ornamental).

## Orden de construccion recomendado

1. Hero (cerrado)
2. Trust Indicators (cerrado)
3. The Center Method (nuevo)
4. Servicios preview + catalogo multipagina (nuevo)
5. The Aesthetic Dream Team (nuevo)
6. IA Assistants
7. Social Proof High-End (nuevo)
8. Proceso
9. Tecnologia
10. FAQ
11. Contacto
12. Footer
