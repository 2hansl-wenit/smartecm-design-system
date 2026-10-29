# Example snippet for a consuming project's AGENTS.md

> Paste this into the **target project's** `AGENTS.md`. Do not assume AGENTS.md in this design-system repository controls other projects.

## Shared UI/UX policy

- For tasks changing frontend UI/UX, use the `$smartecm-ui` skill if installed.
- Read the installed skill's `SKILL.md` and the relevant `references/` and `tokens/` files.
- Reuse product-local components first and map their styles to shared semantic tokens.
- Preserve existing behavior, business rules, permissions, and established brand exceptions.
- Treat v0.1 token values as draft, not approved production design.
- Verify keyboard use, focus, feedback states, responsive layout, and visual consistency.
- If the skill is unavailable, flag the missing dependency rather than pretending compliance.
