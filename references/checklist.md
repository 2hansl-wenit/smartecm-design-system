# UI/UX Review Checklist · v0.1

Use this checklist for every meaningful UI change. Mark **not tested** when you could not inspect or run a check.

## Consistency
- [ ] Shared typography, semantic colors, spacing, and radii are applied appropriately.
- [ ] New controls reuse existing components and align to the approved pattern.
- [ ] Product-specific exceptions are documented.
- [ ] Text hierarchy is readable; secondary content is not excessively faint.
- [ ] Icon family and sizing are consistent.

## Function & UX
- [ ] Primary action and page purpose are obvious.
- [ ] Loading, empty, error, success, disabled, and stale states are considered.
- [ ] Existing flows, routing, permissions, and data interactions remain intact.
- [ ] Risky actions have appropriate confirmation and audit/feedback.
- [ ] Responsive behavior checked at realistic screen widths.

## Accessibility
- [ ] Keyboard navigation and visible focus work.
- [ ] Labels and interactive controls have accessible names.
- [ ] Color is not the sole status cue.
- [ ] Text/control contrast evaluated against WCAG AA targets.
- [ ] Reduced-motion preference respected.
- [ ] No hover-only critical interactions.

## Delivery evidence
- [ ] Build/lint/tests run where available; results noted.
- [ ] Visual review completed where screenshot/browser tools allow it, otherwise explicitly noted as not tested.
- [ ] New or revised tokens/patterns are documented for central review.

## Component-gallery review items
- [ ] Search/filter/sort/pagination inspected in browser.
- [ ] Alerts dismiss/restore and toast buttons inspected in browser.
- [ ] Keyboard tab navigation and focus styles inspected in browser.
- [ ] New components checked in light/dark modes and narrow/mobile layouts.
- [ ] Semantic pastel badge foreground/background colors checked for readability.
