# ElevenLabs Alignment Checklist (Design-Level)

This project is being designed to host a voice IA experience built with ElevenLabs via a lateral floating button.

## UX/IA Readiness Targets

1. Reserve clear UI real estate for voice interaction states in the lateral voice entrypoint:
- idle
- listening
- processing
- speaking
- error/retry

2. Keep interaction model understandable without voice:
- fallback CTA and text path always visible.
- user should complete core journeys with or without voice.

3. Add trust scaffolding near the floating voice entrypoint:
- what the assistant can do,
- what it cannot do,
- privacy/safety note (concise).

4. Maintain low-friction context switching:
- user can move between browsing services and voice assistance naturally.
- avoid modal traps that block navigation.

5. Prepare content architecture for spoken UX:
- short, scannable labels,
- predictable intent groups (book, compare, ask, contact),
- minimal jargon in critical paths.

## Design Implications

- Lateral voice button should feel premium, visible, and coherent with brand.
- Motion/feedback should communicate IA status clearly and calmly.
- Use high-contrast status indicators and accessible control states.

## Out of Scope For Now

- No ElevenLabs implementation code required at this stage.
- Focus on placement, visual affordance, trust cues, and interaction-ready design hooks for a lateral floating button.
