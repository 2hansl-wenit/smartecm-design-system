# Agent & Console UX Patterns

## Task execution view

Prefer visible distinctions between **Requested → Queued → Running → Completed / Failed / Cancelled**. Show the source of each state and the most recent confirmed update. Never present inferred success as confirmed.

Include where relevant:
- Goal / active task / owner or runner
- Current step and progress known vs unknown
- Human approval required, if any
- Logs or evidence linked to a specific run
- Retry, stop, and inspect controls with clear outcomes

## AI conversation interface

- Make user instructions, model responses, tool activity, and external results distinguishable.
- Tool execution and actual side effects must not be visually confused with model-generated explanation.
- Keep long content scannable with progressive disclosure, not a wall of decorative cards.
- Preserve context for follow-up actions; show source/reference provenance when available.
- Clearly surface errors and unavailable capabilities.

## Security, patch, and operations consoles

- Expose severity, target, status, ownership, and last update as separate fields.
- Allow fast scanning/filtering of exceptions; prevent alert fatigue.
- Use explicit state terminology (e.g., pending review, applicable, not applicable, deployed, failed).
- Display irreversible or sensitive operations with specific impact and authorization boundaries.
- Display evidence/audit links where the system has them, never invent them.

## Cross-product consistency

Keep shared layout, feedback, navigation, status semantics, and icons consistent. Preserve project-specific domain concepts, permissions, and execution policies.
