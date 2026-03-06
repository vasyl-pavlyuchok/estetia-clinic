---
name: estetia-build-flow
description: Build workflow for Estetia redesign. Use when implementing or refactoring sections so work follows brief-first execution, services.json constraints, neuroesthetics, and anti-downgrade rules.
---

# Estetia Build Flow

Use this skill when the user asks to build, redesign, or rework UI/features for Estetia.

## Load Order

Read only what you need, in this order:
1. `/_project/BRIEF.md`
2. `/_project/codex-design-operating-manual.md`
3. `/_project/services.json` (only if section touches services)
4. `/_project/neuroestetica-ramachandran.md` (for visual/motion decisions)
5. `/_project/services-detail.md` (only for copy expansion)

## Non-Negotiables

- `services.json` is the only source of truth for services data.
- No downgrade in implementation quality vs current repo state.
- Keep stack and constraints from brief (Next.js + Tailwind + Framer Motion; no unnecessary deps).

## Execution Flow

1. `brief-check`
- Confirm section goal, constraints, and acceptance criteria.
- Identify which sources are needed (minimum set).

2. `section-build`
- Implement structure and hierarchy first (layout, spacing, typography).
- Keep one clear focal point per section.

3. `data-bind`
- If section uses treatments, map from `services.json` only.
- Avoid hardcoded service values.

4. `visual-polish`
- Apply 2-3 tangible neuroesthetic principles (e.g., isolation, contrast, grouping).
- Keep motion subtle and purposeful.

5. `verify`
- Run lint/tests if available.
- Perform responsive and accessibility sanity pass.

For detailed gate checks, read `references/build-gates.md`.

