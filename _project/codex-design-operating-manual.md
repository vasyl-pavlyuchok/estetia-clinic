# Codex Design Operating Manual (Uso Interno)

## Proposito

Este documento define como tomar decisiones de diseno en Estetia usando las fuentes disponibles, en que orden consultarlas y como resolver conflictos sin bajar el nivel del proyecto.

## Jerarquia de fuentes (de mayor a menor prioridad)

1. `_project/services.json`  
   Fuente unica de verdad para servicios. No inventar, no renombrar, no alterar estructura sin instruccion explicita.
2. `_project/BRIEF.md`  
   Define producto, tono, estilo visual, prioridades de secciones y restricciones tecnicas.
3. `_project/neuroestetica-ramachandran.md`  
   Marco de decision creativo para elevar conversion, claridad y percepcion premium.
4. `_project/services-detail.md`  
   Contexto extendido para copy, detalle medico y argumentos de valor por tratamiento.
5. Documentos de roadmap/stack (ej. `landing-stack-x-codex.md`)  
   Referencia secundaria. Aplicar solo si no contradice los puntos 1-4.

## Regla de oro

Si hay conflicto entre documentos, priorizar la fuente superior y mantener el nivel actual del repo (no downgrade tecnico ni visual).

## Cuando usar cada documento

- Inicio de sprint/rediseno:
  - Leer `BRIEF.md` + este manual.
- Diseno de UI y composicion visual:
  - Usar `BRIEF.md` + `neuroestetica-ramachandran.md`.
- Secciones de servicios, cards, filtros, detalle:
  - Usar `services.json` como base.
  - Ampliar texto con `services-detail.md` solo si hace falta.
- Seccion de IA (chat/voz):
  - Seguir prioridades del `BRIEF.md`.
  - Aplicar principios de aislamiento, contraste y metafora del documento de neuroestetica.
- QA final:
  - Validar contra checklist de este manual.

## Protocolo de decision antes de implementar

1. Confirmar objetivo de la pantalla o seccion.
2. Identificar documentos minimos necesarios (evitar sobrecarga).
3. Revisar restricciones tecnicas del repo actual.
4. Proponer solucion que mantenga o suba nivel.
5. Implementar.
6. Verificar consistencia con marca, datos y rendimiento.

## Criterios visuales obligatorios (Estetia)

- Estetica premium minimal, no plantilla medica generica.
- Espaciado amplio, jerarquia tipografica clara, aire visual.
- Motion suave (sin agresividad): apariciones y transiciones controladas.
- Contraste legible y foco visual unico por bloque principal.
- Consistencia de palette y tipografias definidas en Tailwind/layout.

## Criterios de contenido obligatorios

- Tono profesional, cercano, educativo, sin promesas irreales.
- Mensajes claros sobre seguridad, personalizacion y expertise.
- Evitar tecnicismos sin explicacion.
- No alterar datos clinicos base de `services.json`.

## Criterios tecnicos obligatorios

- Mantener rendimiento: evitar efectos pesados innecesarios.
- Mantener accesibilidad: focus visible, contraste, estructura semantica.
- Mantener arquitectura simple y reusable en componentes.
- Evitar dependencias no alineadas con el brief.

## Checklist rapido de QA (pre-entrega)

1. Respeta `services.json` al 100% en datos de servicios.
2. Respeta tono y restricciones del `BRIEF.md`.
3. Aplica al menos 2-3 principios de neuroestetica de forma tangible.
4. No hay downgrade respecto al estado actual del proyecto.
5. Responsive correcto en mobile y desktop.
6. Interacciones suaves y coherentes con marca.
7. No hay incoherencias visuales entre secciones.

## Politica ante nueva referencia externa (Gemini u otra)

1. Comparar con estado actual del repo.
2. Adoptar solo lo que mejore calidad real o claridad operativa.
3. Rechazar lo que simplifique en exceso o contradiga el brief vigente.
4. Si aporta valor, reflejarlo en `BRIEF.md` y/o en este manual.
