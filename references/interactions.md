# Interaction & Motion · v0.1 draft

## Principles

- Immediate, truthful feedback: user must understand what happened and what comes next.
- Motion clarifies spatial relationship or task progression; it is never the goal.
- Keep interaction lightweight in dense management tools.
- Never conceal important information behind animation or hover.

## State patterns

1. **Idle:** controls visibly actionable.
2. **Pending:** show local loading/progress, prevent accidental duplicate submissions where relevant.
3. **Success:** indicate verified completion only after the operation actually finishes.
4. **Failure:** describe failure, retain input when safe, offer retry or recovery.
5. **Empty:** explain why no data appears and provide next action where relevant.
6. **Disconnected / stale:** make freshness obvious when server or agent status is uncertain.

## Motion baseline

Draft candidate durations in `tokens/tokens.json`:
- 120ms for small focus/hover responses
- 180ms for standard transitions
- 260ms for drawers or larger state changes

Prefer opacity and transform where appropriate. Support `prefers-reduced-motion`; remove nonessential movement. Respect browser and platform accessibility conventions.

## Confirmations & safety

Require clear confirmation for destructive operations. For privileged operations, indicate scope, target, impact, and execution status. Do not imply an AI-run task completed from optimistic UI alone.

## Smooth micro-interaction draft · 2026-10-28

- Hover, press and focus: 130–185ms subtle color/opacity/border/transform changes. No exaggerated bounce.
- Navigation and tab content: restrained 185–235ms fade/vertical movement.
- Dropdown menu: 235ms unfolding listbox implemented as progressive enhancement of selected native controls in the preview. Standard OS-native dropdown popups themselves cannot be animated consistently.
- Modal: 235ms fade/translate/scale in and out, Escape and backdrop dismissal, keyboard focus trap and trigger-focus restoration.
- Table samples: each row has a right-hand accessible expand/collapse chevron; its detail strip reveals synthetic metadata using a 235ms transition. One row can be open at a time.
- Alerts collapse softly on close. Toasts enter with a small fade/slide. Status/metric decorative dots removed in the preview.
- Honor prefers-reduced-motion to remove nonessential animation. Preserve prior open editorial style, light/dark schemes, 2pt typography increase, letter-spacing zero, 5px/pill geometry and thin input focus.
