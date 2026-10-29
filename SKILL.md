---
name: smartecm-ui
description: Shared SmartECM design system for building and reviewing the SmartECM console, technical reports, plans, proposals, and UI components. Use for SmartECM interface or document work; skip unrelated apps and backend-only work.
---

# SmartECM UI System Skill

## Scope

Apply this skill to frontend UI/UX work AND to creating, editing, formatting or reviewing business reports, status/action plans, proposals and technical validation documents. Do not invoke solely for database, API, infrastructure, or backend-only changes.

## Source of truth

Read these files relative to this SKILL.md as needed:
- `references/foundations.md` and `tokens/tokens.json`: foundational design decisions and draft tokens
- `references/components.md`: component structure, states, consistency
- `references/interactions.md` and `styles/motion.css`: transition timing, interactive row disclosure, dropdown/modal behavior, reduced motion
- `references/agent-patterns.md`: AI agent consoles, logs, task execution UX
- `references/checklist.md`: UI delivery verification
- `references/document-style.md` and `tokens/document-tokens.json`: A4 document formatting, typography, margins and structure
- `styles/document.css` and `documents.html`: printable document examples and layout rules
- `docs/document-adoption.md`: using document style in Codex and ChatGPT

Color/spacing choices in v0.1 remain **provisional**. The user requested a preview iteration with all font sizes increased by 2pt and standard border radius set to 5px (or full pill/true circle when appropriate); this is not final sign-off. Preserve established styles when modifying existing products unless asked to redesign.

## Task-specific routing

- **Frontend / UI tasks:** follow the regular UI workflow below and the UI component references.
- **Reports / proposals / plans / technical documents:** use the document workflow below, NOT UI dashboard component markup. Read the document references and supplied content sources before drafting.
- Document design shares a visual language with UI, but A4 pagination, tables, body font size and long-text readability require separate rules. Default footers are not included.

## Document preview shell

- Use `SmartECM 문서 시스템` as the service name, without a document-type suffix.
- Place the A4 preview directly below the document tabs with 24px screen spacing; do not add a separate title, description or draft badge introduction.
- Preserve titles inside the A4 documents and print layout. Tab switching must not reference removed introduction elements.

## Document workflow

1. **Read the sources** supplied by the user; extract verified facts, document type, required headings and audience. Never invent technical findings, customer details, amounts, dates, or completion states.
2. **Pick the document layer** from references/document-style.md: portrait/landscape base layout, independent cover, or proposal/plan composition. Use the shared components in scripts/document-library.js; do not duplicate component markup in templates. Preserve supplied facts and wording.
3. **Apply the editorial print style** from tokens/document-tokens.json and styles/document.css: A4 paper, generous whitespace, strong titles, subtle lines, unboxed tables, restrained accent. Do not convert it into a card-heavy dashboard.
4. **Produce one standalone A4 HTML file by default when no output format is specified.** Reuse `templates/printable-document.html` so the HTML has a sticky `PDF로 인쇄` button that calls `window.print()` and is hidden during printing. If the user explicitly requests DOCX, PDF or another format, honor that request. Keep large title on the first page only; allow automatic page flow. Validate Korean wrapping, table widths, and print clipping.
5. **Report any missing source facts or unverified outcomes** and distinguish design demo content from real evidence. Keep confidential customer data out of publicly deployed preview files.

The v0.1 document visual standard is a **draft awaiting user review**, not a finalized template.

## Workflow

1. **Inspect** the application, framework, existing design tokens/components, target screen, and affected user flows.
2. **Classify** work as new UI, incremental improvement, or full redesign; preserve functionality and established conventions unless a redesign is requested.
3. **Read** the relevant references and design tokens. Do not invent a new design language when shared patterns fit.
4. **Plan** a concise implementation listing changed screens, component reuse, visual decisions, and any exceptions.
5. **Implement** semantic components and responsive states; reuse existing components first, avoid excessive decoration.
6. **Verify** with `references/checklist.md`, including contrast, keyboard focus, reduced motion, loading, empty, error, and success states. Run available build/tests and visually inspect when tooling permits.
7. **Report** changed files, verification performed vs. not performed, deviations, and any proposed design-system updates.

## Open editorial layout principle (review draft)

When designing dashboards and agent consoles, read `styles/editorial.css` and the editorial direction in `references/foundations.md`: prioritize typography, spacing, unboxed KPI strips, row-based data and subtle separators. Do not wrap every module in a card. Retain boundaries when needed for inputs, actions, dialogs and meaningful status/alert semantics. This is a proposed visual direction, not a final approved theme.

## Guardrails

- Keep high-contrast hierarchy and typography-first layouts; do not default to washed-out, low-contrast admin templates.
- Use design tokens for repeatable values; no scattered ad hoc colors/sizes without a documented reason. Honor the 5px-or-pill corner rule; avoid intermediate rounding.
- Keep icons cohesive and interaction purposeful rather than decorative.
- Do not silently overwrite product-specific brand choices, accessibility requirements, content, workflows, or functional behavior.
- Do not report a screen as visually tested if no visual inspection occurred.
- Never copy example screens verbatim when third-party licensing or brand marks might be involved.

## Company SmartECM scope

This is the **company** `$smartecm-ui` Skill. Canonical origin: `git@github.com:2hansl-wenit/smartecm-design-system.git` on company GitHub. Work only in this company GitHub repository. Do not modify or push to the old company GitLab, old local checkout, or personal repositories.

- Always read `company/smartecm-profile.md` and `company/company-tokens.json` first for work related to SmartECM.
- Reuse `references/foundations.md`, `references/components.md`, `references/interactions.md`, `styles/editorial.css`, and `styles/motion.css` when building UI.
- Reuse `references/document-style.md`, `tokens/document-tokens.json`, `styles/document.css`, and `styles/doc-layout.css` for A4 reports and proposals.
- Avoid generic card-heavy dashboard layouts: use open, typography-first sections, soft dividers, pastel semantic statuses, and restrained motion.
- Keep current neutral and accent colors as **draft** until the company approves a SmartECM brand palette. Do not invent a corporate logo, approved colors, performance results, security certifications, or product features.
- Protect internal and customer information. Only synthetic, pre-reviewed demo content may enter public preview deployments.
- UI modifications must preserve existing product functionality, status semantics, authorization and operational behavior.
- Codex work on company project repositories must apply this skill if available, and report which version or Git commit was used.
- Studio document navigation uses a document outline icon and opens documents.html?embedded=1 inside the central workspace. Preserve both side panels, selected document tab, and document-only PDF printing; hide the redundant return-to-UI link when embedded.

## Studio document scrolling · 2026-10-28

- Size the embedded preview to its document content using ResizeObserver; use the outer workspace scroll with no nested scrollbars.
- Keep document tabs and PDF print action in a sticky Studio toolbar; hide the Workspace/notification/avatar bar in the document view only.
- Keep standalone document controls and A4 print CSS intact.

## SmartECM 디자인 에셋 갤러리 · 2026-10-28

- UI 컴포넌트 바로 아래 디자인 에셋 메뉴에서 제공된 로고 2종과 제품 패키지를 전시한다. 에이전트 설정 메뉴는 제거한다.
- 원본 PNG의 비율과 투명도를 보존하고 흰색 로고는 어두운 배경에서 보여준다. 원본 다운로드를 제공한다.
- 공개 미리보기 빌드는 assets의 지정된 PNG 3개만 포함한다.

## Seven-view document library

- Menu source of truth: `SmartECMDocuments.menus` in `scripts/document-library.js`, shared by Studio and standalone documents.html. Order: 세로형 / 가로형 / 표지 01 / 표지 02 / 제안서 / 계획서 / 공통 컴포넌트.
- Shared renderers are the only markup source for titles, overview, KPI, facts, tables, cards, steps, timeline, quote, note, image, questions and architecture. Schedule uses the table renderer.
- Read `references/document-components.md` for inputs and reuse. Keep document typography and hairlines; bounded cards are only for meaningful alternatives.
- A4 portrait is 210 × 297mm; landscape is 297 × 210mm. Print margins: 20mm top / 21mm sides / 19mm bottom. Named pages preserve orientation and margins only; no default footer labels, rules or page counters.
- Covers are separate single-page preview tabs: `cover01` (centered title/subtitle raised above midpoint, enlarged top-right SmartECM logo, and bottom author/date using the current Korea calendar date) and `cover02` (refined editorial cover: top-left logo, accent vertical rule, large left-aligned typography and concise publisher metadata). Neither includes a center product image or a global page footer. Print only the selected cover. Body templates flow naturally without fixed pagination.
- Validate all seven document views in Studio and standalone mode, mobile width, tab keyboard controls, auto-height, PDFs with no default footer. Print must preserve timeline connectors/dots and schedule-grid intervals even when browser background graphics are off; use printable borders and exact color adjustment for decorative data visuals.

## 2026-10-28 · 컴포넌트 간 구분선 및 일정2

- 공통 컴포넌트 예시는 장식 구분선 없이 여백으로 구분한다. 내부 표·인용문 등의 선은 유지한다.
- 일정2는 scheduleGrid 공통 렌더러를 사용한다. 월·주차 헤더, 작업 그룹, 기간 막대를 표시하며 기존 일정 예시는 유지한다.

## 2026-10-28 · 일정2 미니멀 스타일

- 일정2의 별도 캡션과 작업 그룹 제목 행을 제거하고 작업 6행을 예시로 제공한다.
- 흰 바탕, 가는 가로선과 최소 세로선, 연한 액센트 색의 기간 막대와 얇은 강조선을 사용한다. 고정 회색 헤더 및 고정 파랑색을 사용하지 않는다.
- Studio에서 선택한 액센트를 문서 프레임에도 동기화한다. 용지 배경과 본문 색은 기존 인쇄 기준을 유지한다.

## Company GitHub and automatic deployment workflow

- Working checkout: choose a local directory appropriate for each collaborator. Canonical origin: `git@github.com:2hansl-wenit/smartecm-design-system.git`; production branch: `main`.
- Before edits or pushes, verify repository status, origin and repository-local Git author. Preserve existing design rules and update relevant references with design changes.
- A main push automatically deploys production through Vercel's native GitHub integration to the existing `smart-ecm / smartecm-design-preview` project. Do not create another project, reactivate GitLab CI, or use a personal repository/project.
- Keep `vercel.json`: Other framework, repository root, `sh scripts/build-preview.sh`, output `preview-dist`. Keep shell files LF via `.gitattributes`. Build only the allowlisted public static files; exclude internal documents and credentials.
- Use an authorized company GitHub identity for repository-local commits. A commit author without project access can cause Vercel to block deployment.
- After an authorized main push, verify the deployment's Git SHA, Production target and READY state. Check https://smartecm-design-preview.vercel.app and /documents.html as appropriate to the change. Do not substitute manual CLI deployment for automatic deployment verification.
- Automatic deployment was verified with commit `247acd2d1abfc733b21819f2cff477f989487587`. Preserve the existing URL and report the actual verification result for subsequent releases.

## Sharing Studio selections with AI

The Studio's **AI 작업 프롬프트 복사** action copies a Korean task prompt containing the canonical company GitHub URL, required Skill/reference reading order, Vercel preview URL, and the **current** theme, accent, density, and corner radius in JSON. The prompt must explicitly check repository access (the GitHub repository may be private) rather than assume the model can fetch or install the Skill. Browser selection is a design-preview preference and must not silently change the canonical company tokens or create a Git commit. The consuming AI should apply the selected configuration to the user's requested work, reusing existing components and A4 document rules when relevant.


## Multi-column document layout components — 2026-10-28

The common document library now includes 2/3/4-column cards (line/tint/open), four-up summary metrics, A/B comparisons, unchecked two-column checklists, 1–4-column numbered blocks, full-width highlights and a recommended-column comparison table. Two-column information blocks reuse `multiCards` in open style.

All layout demos reuse renderers in `scripts/document-library.js`; do not copy or fork demo HTML in consuming templates. The multi-card demo supports real column/style changes via keyboard-accessible buttons with `aria-pressed`. Print only the selected cards, not the controls; preserve orientation, spacing and no-default-footer policy. For portrait A4, avoid long sentences in four-column layouts. Values and support assertions in samples are fictional pending evidence. See `references/document-components.md` for exact inputs.

## Recommended option table, linked architecture and schedule colors — 2026-10-28

- The common library includes `recommendedTable` immediately after the general table. Highlight the preferred A or B column using an accent 2.5px full-height outline and a star plus '추천' in the header. The demo highlights A **as a design example, not a verified procurement or technical recommendation**.
- Remove the old spec-list example and `specList` renderer. Maintain 23 specimens and 21 renderers.
- Architecture uses a connected diagram of boxed nodes, printable border connectors and arrowheads. A4 is horizontal; mobile layouts stack the node chain vertically.
- Schedule2 duration bars use solid `var(--accent)` fill with `#FFFFFF` bold text and explicit print-color preservation. For arbitrary light accent choices, review text contrast before publishing to real customers.
- Preserve ordinary table rules, A4 flow, no-default-footer policy and verified-vs-sample information distinctions. Keep `references/document-components.md` and document tokens aligned.

## Distinct AI copy prompts for UI and document workflows — 2026-10-28

The Studio's AI prompt copy control provides a **work type selector**: automatic by active screen, forced UI/UX, or forced document design/authoring. Auto must detect the document view and include the currently selected document example. UI/UX export uses UI foundations, components, interaction references and user-selected theme/accent/density/radius. Document export uses the document-style and document-components references, document tokens and A4 print templates; include the chosen document example, A4 orientation and accent, but **do not apply UI density/radius or dashboard layout rules to printed documents**. Both exports include canonical company GitHub, current privacy/access limitations, source preservation and a task-specific placeholder. Copy success feedback must match the chosen workflow and only display on success.


## Cover 01/02 identity and author date — 2026-10-28

- Cover 01 is the centered, enlarged top-right-logo layout. Place the title and subtitle slightly **above** the page center, and put explicit bottom metadata: **작성자: (주)위앤아이티 홍길동 차장**, **작성일: current Asia/Seoul date**. This is a synthetic sample name; do not assign it to real customer documents without confirmation.
- Cover 02 is the redesigned editorial alternative: left-aligned large two-line title, left vertical accent line, top-left SmartECM logo, top-right small document-series metadata, bottom publisher/type details. Preserve generous A4 whitespace and print-safe accent borders.
- Preserve independent `cover01`/`cover02` tabs, one-page PDF printing, and no default footer in other document types. The author/date block on cover 01 is explicit template content, not an automatic footer.

## Cover 02 one-line typography revision — 2026-10-28

- On `cover02` remove the **long left vertical accent border and its left padding**. Retain the brief horizontal accent marker, logo and bottom publisher metadata.
- Render the title `운영환경 개선 제안서` and the subtitle `가상화 인프라의 안정적인 운영을 위한 현황 분석과 단계별 개선 방향` each on a **single line** in the A4 preview and PDF print (no forced HTML line breaks); use responsive fallback wrapping only on narrow mobile screens.
- Shift the title group downward so it sits closer to the vertical midpoint. Preserve cover01 and the rest of the document system. This instruction supersedes earlier guidance calling for a two-line title and left accent rail.

## Document hierarchy, adaptive columns, and printable HTML default — 2026-10-28

- For level-1 sections such as `03 통합 운영·도입·하드웨어`, use **21pt title, 17pt chapter number**, and a distinct 42px number gutter. Do not reduce level-2 title size to solve hierarchy; emphasize level 1.
- Reuse `subsections` for nested items numbered 01/02: 12pt number in its own 35px gutter, 13.5pt subtitle and 10pt body in the same right-side content region. Avoid overlapping heading/body or pushing paragraphs under the number.
- The standard `table` renderer accepts optional `columnWidths` percentages. Read table headers and sample cells before assigning widths; for longer feature names allocate more width (sample 36/38/26 for feature/description/evidence). Do not copy the same ratio into all tables. The sum must be 100 and each width 12–70.
- **No explicit output format → one standalone HTML file by default**, ready to open in a browser and print A4. Use `templates/printable-document.html` (inline CSS, sticky `PDF로 인쇄` button, click invokes `window.print()`, `@media print` hides toolbar). Do not create a duplicate PDF/DOCX unless explicitly requested. Explicit user formats always override the HTML default.
- Output the actual complete `.html` file when artifacts are supported, otherwise provide full runnable HTML code. Ensure readable titles, print-safe tables and native browser PDF export. A button alone is not a generated PDF.

## Current chapter heading alignment standard — 2026-10-28

- Level-1 chapter numbers such as `01` and titles such as `개요와 본문` must share **19pt** typography, matching line-height 1.25 and aligned on the same row. Do not use the earlier mismatched 17pt number / 21pt title sizing.
- Use `grid-template-columns: max-content minmax(0,1fr)`, `column-gap: 8px` and `align-items: center` for the chapter header. The numeral must only take the space it needs; do not restore the earlier 42px fixed first column.
- On narrow mobile screens (max-width: 540px), use **17pt for both**, with **6px** gap. Printed A4 keeps the desktop 19pt/8px style.
- Apply the same rules in both `styles/document.css` and `templates/printable-document.html`. The nested `subsections` gutter remains independent and unchanged.
- These values supersede older 21pt/17pt/42px chapter-heading guidance in this repository; do not apply old specifications when composing new documents.

## Level-1 chapter heading fine-tuning — 2026-10-28

- The latest level-1 heading standard is **18pt for both chapter number and text** (previously 19pt). Keep the existing max-content number column, 8px gap, equal line-height and centered alignment.
- On mobile widths <=540px, use **16pt for both** (previously 17pt) and retain the 6px gap.
- Update shared A4 document styling and standalone printable HTML shell consistently. Nested subsection headings and A4 print controls remain unchanged. This instruction takes precedence over earlier 19pt guidance.

## Latest chapter numeral weight adjustment — 2026-10-28

- For **level-1** chapter headings, the chapter numeral (`01`, `02`, etc.) uses **font-size:18pt; font-weight:550**. Keep the chapter title at **18pt; font-weight:780**. The two are equal in size but intentionally different in weight.
- Preserve the max-content numeral column, 8px spacing and center alignment. At mobile widths <=540px, both sizes remain 16pt with the existing 6px gap; the numeral still uses weight 550.
- Do not modify nested level-2 numeral styling or general title/body typography. This rule supersedes older chapter numeral weight 760.

## Latest gallery and nested subsection number typography — 2026-10-28

- In the **common component gallery**, the specimen index (e.g. `01`) must be the **same 13pt size** as its specimen heading (e.g. `제목`). Set index weight **550**, heading weight **750**, gap **7px**, and center-align both.
- For nested `subsections`, index `01/02` must match the sibling subsection title at **13.5pt** (mobile: both **12.5pt**) but use a lighter **weight 550**. Do not reduce the title size.
- Remove the old fixed 35px nested number gutter. Use `grid-template-columns:max-content minmax(0,1fr)` with an **8px** gap (mobile **6px**), so the title and its paragraphs still align in one right-hand content column without the former excessive indentation.
- Keep **level-1** chapter numbers/titles at **18pt** with the 550-weight numeral; these changes affect gallery labels and nested indices only. Apply the same nested layout to `styles/document-library.css` and standalone `templates/printable-document.html`.
- This guideline supersedes earlier 12pt/35px nested number styling in this repository.

## Mandatory portable Pretendard webfont for UI and HTML outputs — 2026-10-29

- The default typography must **not depend on system-installed Pretendard**. All internet-connected HTML pages and generated standalone HTML artifacts should load version-pinned official **Pretendard Variable v1.3.9 dynamic-subset** CSS: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css` through a head stylesheet link.
- Apply `font-family: "Pretendard Variable", Pretendard, ...` consistently in UI components, Studio, standalone document preview and HTML-first deliverables. Merely writing `font-family: Pretendard` without a font source is insufficient.
- Dynamic subset minimizes downloaded Korean glyphs. Prefer the variable family so authored weights including 550 and 750 render without replacing the font family. Keep sensible fallback fonts.
- **Network/CDN access is required.** In closed or offline customer environments, replace the external CDN with approved self-hosted WOFF2/CSS assets and include the applicable SIL Open Font License notice. Do not misrepresent online-dependent HTML as offline font-portable.
- For PDF exports, allow webfont loading before printing and inspect font embedding/line breaks. Webfont CSS affects browser HTML rendering but does not automatically embed a font into independently generated DOCX/PDF files.
