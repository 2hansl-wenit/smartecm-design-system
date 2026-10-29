# Webfont loading / cross-PC typography — 2026-10-29

- **Do not rely on the Pretendard font being installed on the user's PC.** Load official **Pretendard Variable v1.3.9, variable dynamic-subset** via CSS in the HTML head: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">`.
- Use `font-family: "Pretendard Variable", Pretendard, Inter, system-ui, sans-serif` in UI; use the corresponding font fallback chain for documents. The dynamic subset downloads only needed character ranges. Use version-pinned official CDN paths, not unversioned latest URLs.
- Standalone HTML delivered by the AI must include the same webfont link; styling rules alone do not download fonts.
- Font loading requires a functioning internet/CDN connection. For secure, isolated or offline customer networks, **self-host the licensed WOFF2 files and CSS through the approved internal domain** and retain the SIL OFL license notice. Do not claim a CDN-powered single HTML file is wholly offline independent.
- Printing to PDF: wait for fonts to load and inspect embedded fonts and text metrics; if the CDN is blocked, fallbacks apply.
- Pretendard is SIL Open Font License 1.1; commercial use and redistribution are allowed subject to its terms. Include license attribution when bundling actual font assets.

---

# Foundations · v0.1 draft

## Direction

**Minimal + simple + contemporary + energetic, without sacrificing clarity.**

1. **Typography-first:** meaning is clear from title, value, label, annotation, and hierarchy.
2. **Visible hierarchy:** strong primary text, restrained secondary text, deliberate whitespace; avoid overall pale/washed-out screens.
3. **Precise rhythm:** align to a repeatable spacing scale; use consistent component geometry.
4. **Controlled accent:** use one primary accent and restrained data/status colors; graphic effects do not compete with content.
5. **Clean but lively:** favor a distinctive focal element and purposeful motion over ubiquitous gradients, blurred glass, or shadows.
6. **Product continuity:** use the common system for core interaction, with documented product-specific branding exceptions.

## Tokens

`tokens/tokens.json` is a **candidate baseline**, except the confirmed SmartECM `#5C6BC0` and SmartGCM `#53B3A3` brand accents. Do not claim exact values have been confirmed. For an existing app, map its current visual system first and propose changes before migrating.

- Colors: choose semantic roles (`background`, `surface`, `textPrimary`, `border`, `accent`, `danger`) rather than raw hex in components.
- Typography: Pretendard / Inter / system UI fallback; do not bundle font files without a valid license. **Increase all previously specified text sizes by 2 CSS pt** (2pt ≈ 2.667px at 96 CSS px/in), including headings, labels, buttons, badges and table text. The playground applies this as `calc(<previous-size> + 2pt)`; numeric `textScalePx` values in the tokens are rounded to 0.001px.
- Spacing: 4 px base grid, commonly 8/12/16/24/32 px.
- Shape: **5px radius for standard boxes, panels, buttons, inputs, dialogs and controls; 0px is optional for fully sharp edges. Only intentional pills or circles use full rounding (`9999px` for pills; `50%` for true circles). No intermediate radius values.** Keep controls and layout predictable.
- Responsive: no clipped essential actions; ensure navigation, tables, dialogs, and forms work at target viewport sizes.
- Accessibility: aim for WCAG 2.2 AA where applicable, verify actual color contrast and keyboard behavior with implementation tools; tokens alone do not prove compliance.

## Layout patterns

- **App shell:** persistent app identity/navigation; primary page content; clear context and action area.
- **Page header:** meaningful title, one-line summary where needed, primary action aligned consistently.
- **Data emphasis:** present a few actionable KPIs; avoid gratuitous identical cards.
- **Density:** allow more information in operational consoles without sacrificing scanability.
- **Whitespace:** separate semantic groups, not every element with equally large padding.

## Future approvals needed

Primary accent, typography weights, navigation style, table density, icon family, dark mode priority, and representative reference screens. Update this file and the tokens together after approval.

## Visual iteration (2026-10-28)

- Section subtitles (`.sectionhead small`) use `font-weight: 400`.
- All letter spacing, including headings, labels, badges and table headers, is `0`.
- Status badges use semantic pastel backgrounds with distinct, legible foreground colors in both themes, as recorded in `tokens/tokens.json`.
- Inputs, selects and textareas use only a 1px accent border for focus, no glow or shadow. Keep visible keyboard-only outline for buttons and navigation.

## Editorial open-layout direction · 2026-10-28

- **Typography and whitespace first:** prominent page title and numeric KPIs, readable text hierarchy, uncluttered content canvas.
- **No card-per-section default:** dashboard KPIs are a single unboxed strip. Data tables, workflow and secondary content use unobtrusive horizontal/vertical hairline dividers, not rounded card borders or drop shadows.
- **Retain boundaries only when functional:** text inputs, buttons, dialogs, semantic alerts and pills still use meaningful outlines/fills.
- **Tables resemble information lists:** column labels, aligned values, subtle row separators and gentle hover feedback.
- **Layout is adaptable:** columns can split or stack responsively, without leaving orphan separator lines.
- Design benchmark: user-supplied Resend-style dark table/navigation screenshot. This is an influence on content density and open layout, **not an exact clone or a requirement to default to dark mode**.
- The prototype implementation is in `styles/editorial.css`. This remains a review iteration until the user signs off.

## SmartECM company accent presets (2026-10-28)

The first two fixed swatches are product colors: SmartECM `#5C6BC0` by default, followed by SmartGCM `#53B3A3`. The other six swatches (`#6EC6FF`, `#7ED6C2`, `#FFD166`, `#FF8A80`, `#B39DDB`, `#F48FB1`) are bright experimental choices, not official brand colors. Show a palette icon invoking a native color input for arbitrary hex colors. Selected colors update UI and embedded document previews and persist only in browser local storage. Adjust on-accent text contrast dynamically. Reset restores SmartECM default. Do not treat interactive choice as an edit to canonical tokens.
