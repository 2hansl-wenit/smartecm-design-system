# UI Components · v0.1 draft

Components to standardize, regardless of frontend framework:

| Component | Minimum states / rules |
|---|---|
| App shell / sidebar | Active, hover, collapsed, keyboard focus; role-based visible navigation |
| Page header | Clear title, context, breadcrumb as needed, one primary action |
| Buttons | Primary, secondary, ghost, danger; hover, active, disabled, loading, focus |
| Form fields | Label, hint, validation, error, read-only, disabled, focus |
| Tables / lists | Header, row density, sorting/filtering if functional, pagination, empty/loading/error |
| Cards / stats | Key metric, unit, time scope, status, meaningful action; avoid duplicated card grids |
| Dialog / drawer | Descriptive title, exit route, confirmation on destructive actions, focus management |
| Status indicator | Text + semantic color + optional icon; never color alone |
| Toast / alerts | Outcome, what to do next, dismiss behavior; no false success |
| Navigation tabs | Current selection, clear labels, responsive overflow handling |
| Chart / visualization | Legible axes and units, alternatives for nonvisual access |
| Iconography | One coherent family and optical sizing; do not mix styles casually |

## Corner geometry rule (user-requested preview)

- Use **5px** as the shared standard corner radius, or **0px** where sharp edges are desired.
- Only true pill-shaped indicators, progress tracks or intentional round forms may use **9999px** radius; small circular indicators may use 50%.
- Do not introduce arbitrary 7/10/12/14/16/18px radii.
- Typography should be 2pt larger than the initial v0.1 preview across every text tier; see `references/foundations.md` and `tokens/tokens.json`.

## Default implementation behavior

- Prefer the host application's component library before implementing new controls.
- Use design-token mappings rather than hard-coded scattered values.
- For any data-changing operation, show a pending state and result, plus recovery path on failure.
- Maintain accessible names, semantic HTML, keyboard reachability, and visible focus.
- Respect localization and existing Korean copy; avoid changing wording merely to achieve a layout.
- Never introduce a hover-only critical action; touch and keyboard users need equivalents.
- Use compact but readable tables for monitoring views. Do not rely solely on status badges for meaningful information.

## Visual difference policy

A new component should be added only when an existing component cannot meet a documented UX or functional requirement. Record justified exceptions.

## Expanded interactive component gallery · 2026-10-28

The shared Design Playground (`index.html`) now includes:
- Data table with live search, status filtering, sortable columns and pagination
- Dismissible pastel semantic alerts (info / success / warning / error), restore and toast examples
- Inputs, select, textarea and a validation-error demonstration
- Switch, checkbox and radio inputs
- Keyboard-accessible tabs, progress indicator, skeleton placeholder and empty state

These are **visual demonstration components with synthetic data**. They do not transmit information to a backend or execute real agent tasks. Keep all status colors consistent with the semantic pastel palette and the 5px/pill geometry rule.

## Editorial section pattern · 2026-10-28

Default hierarchy for dashboards and management consoles: **page header → unboxed KPI strip → section title → row-divided data or workflow content**. Reuse hairline dividers to separate related regions. Avoid decorative cards with backgrounds, thick borders or shadows around every KPI/table/section. Status badges stay pill-shaped and pastel; alerts and form fields may retain bounded surfaces to express semantics and affordance. Preserve all existing interactions and data behavior.

## Expandable-row table pattern · 2026-10-28

- Keep a dedicated rightmost disclosure column and a small chevron button with an accessible row-specific name and aria-expanded state.
- Expand the selected row into a full-width detail region **directly below it**; avoid opening a separate modal for normal secondary row details.
- Animate chevron rotation and detail height/opacity over approximately 235ms; respect reduced-motion.
- Preserve table search, status filtering, sorting and pagination; sample details are synthetic and do not call APIs.

## SmartECM 디자인 에셋 갤러리 · 2026-10-28

- UI 컴포넌트 바로 아래 디자인 에셋 메뉴에서 제공된 로고 2종과 제품 패키지를 전시한다. 에이전트 설정 메뉴는 제거한다.
- 원본 PNG의 비율과 투명도를 보존하고 흰색 로고는 어두운 배경에서 보여준다. 원본 다운로드를 제공한다.
- 공개 미리보기 빌드는 assets의 지정된 PNG 3개만 포함한다.
