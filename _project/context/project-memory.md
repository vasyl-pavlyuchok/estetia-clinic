# Project Memory - Estetia

## Current Product Direction

- We are redesigning the site end-to-end.
- Treatments/content model is considered stable and should not be redefined.
- `services.json` is the canonical source for services rendering.
- `BRIEF.md` is a living doc and can be refined when needed.
- ElevenLabs integration will be a lateral floating voice button (no dedicated IA section for now).
- Visual direction updated: monochrome luxury baseline (white/black architecture + controlled serum blue/gold accents; beige-led aesthetic invalidated).

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
