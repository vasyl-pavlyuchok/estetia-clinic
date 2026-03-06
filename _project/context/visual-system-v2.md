# Estetia Visual System v2 (Hero-Aligned)

## Purpose

Unify all upcoming sections under the approved Hero language:
- high contrast,
- clean black/white architecture,
- controlled serum accents (blue + gold),
- premium minimal direction (no beige-heavy look).

This document is now the operational visual baseline for new UI work.

## Core Palette (Mandatory)

| Role | Token | Hex | Usage |
|---|---|---|---|
| Base Light | `--bg-base` | `#FFFFFF` | Main page backgrounds |
| Surface Light | `--bg-surface` | `#F6F7F8` | Secondary blocks/cards |
| Dark Stage | `--bg-dark` | `#0D1418` | Hero and high-impact dark sections |
| Dark Elevated | `--bg-dark-elev` | `#111A1F` | Dark cards/panels over dark stage |
| Text Primary | `--text-primary` | `#000000` | Main copy on light backgrounds |
| Text Secondary | `--text-secondary` | `#3A4752` | Supporting copy on light backgrounds |
| Text On Dark | `--text-on-dark` | `#FFFFFF` | Main copy on dark surfaces |
| Stroke Soft | `--stroke-soft` | `#D6E0E8` | Borders/dividers in light UI |
| Serum Blue Deep | `--accent-blue-deep` | `#2C5F6F` | Primary accent, states, emphasis |
| Serum Blue Bright | `--accent-blue-bright` | `#7FAFC2` | Highlights, glows, gradients |
| Serum Gold Deep | `--accent-gold-deep` | `#C9A96E` | Premium action emphasis |
| Serum Gold Bright | `--accent-gold-bright` | `#D5B884` | Premium highlights/details |

## Composition Rules

1. Contrast first:
- Sections must be either clearly light (`#F7FAFC` family) or clearly dark (`#0D1418` family).
- Avoid muddy middle-contrast backgrounds.

2. One focal point per section:
- One dominant headline/visual.
- Supporting elements must not compete with the focal area.

3. Accent discipline:
- Use blue/gold only as signal, not as background fill for entire sections.
- Keep accent coverage low and intentional.

4. Premium restraint:
- Minimal shadows.
- Soft, controlled gradients.
- No decorative overload.

## Neuroesthetic Application (Required)

1. Isolation:
- Every section needs a clear visual anchor (headline block, key card, IA entrypoint).

2. Contrast:
- Strong luminance contrast between hierarchy levels and between foreground/background.

3. Perceptual Grouping:
- Content chunks must align to stable grid rhythms and repeated spacing patterns.

4. Peak Shift (Subtle):
- Slightly exaggerate key premium cues (clarity, glow edges, precision of layout), never cartoonish.

## IA-Ready Design Implications

1. Voice/chat affordances must feel native to the visual system:
- dark translucent panels on dark sections,
- high-contrast text,
- clear status colors derived from serum blue/gold spectrum.

2. Trust scaffolding near IA entry:
- concise capability + limitation + safety note.

3. No modal traps:
- user must navigate services with or without voice/chat.

## Explicitly Disallowed

- Beige-dominant section backgrounds as default visual language (invalidated).
- Generic medical-template styling.
- Heavy gradients and excessive glow.
- Aggressive motion or ornamental effects that reduce clarity.

## Execution Rule

If any new section diverges from this system and lowers perceived quality versus Hero, stop and realign before implementation.
