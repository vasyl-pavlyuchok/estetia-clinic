---
name: estetia-design-qa
description: QA workflow for Estetia UI and copy quality. Use when reviewing completed sections to detect regressions, brand drift, data inconsistencies, accessibility issues, and performance risks.
---

# Estetia Design QA

Use this skill when the user asks for review, polish, QA, or final validation of implemented UI.

## Inputs

Load:
1. `/_project/BRIEF.md`
2. `/_project/codex-design-operating-manual.md`
3. `/_project/services.json` (if services appear)
4. `/_project/neuroestetica-ramachandran.md` (for visual intent checks)

## Review Order

1. `functional correctness`
- Links, anchors, states, and section behavior.

2. `data integrity`
- Treatments/categories/prices/tags match `services.json` when rendered.

3. `brand and tone`
- Premium minimal look, no generic clinic template feel.
- Copy stays professional, clear, non-sensational.

4. `visual system`
- Palette and typography consistency.
- Visual hierarchy and spacing rhythm.
- Tangible use of neuroesthetic principles.

5. `a11y + performance`
- Keyboard/focus visibility, semantic structure, contrast sanity.
- Motion does not degrade UX/performance.

Use the full checklist in `references/qa-checklist.md`.

## Report Format

- Findings first, ordered by severity (`high`, `medium`, `low`).
- Include file references and why it matters.
- If no findings, state that explicitly and list residual risks.

