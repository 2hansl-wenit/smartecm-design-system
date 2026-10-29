# Design Decisions

## 2026-10-28 · Initial repository scaffold

**Status:** Draft (v0.1.0).

- Single private GitHub repository is the canonical source for cross-project UI/UX guidance and Skill files.
- The root `SKILL.md` enables cloning or using this repository as a Codex skill folder.
- Machine-readable `tokens/tokens.json` and reference docs live alongside the Skill.
- Visual design values and color palette are *candidate defaults*, not approved decisions.
- Real UI implementation packages and reviewed reference screenshots remain future deliverables.
- Project installation, synchronization, and ChatGPT integration require separate actions.

## Open design decisions

- [ ] Approve representative screens and visual direction.
- [ ] Confirm light/dark palette and primary accent.
- [ ] Confirm type scale, density, sidebar, table, and icon conventions.
- [ ] Decide frontend libraries and how to package reusable components.
- [ ] Define release/tag convention after first approved design.

## 2026-10-28 · Playground typography and geometry revision

**Status:** User-requested iteration; not final design-system sign-off.

- Increase every visible text size in the playground by **2pt**, preserving the existing hierarchy. CSS uses `calc(previous-size + 2pt)` (2pt ≈ 2.667 CSS pixels).
- Standard component corner radius: **5px**; optional square 0px. Full pill geometry uses 9999px and actual circles use 50%.
- Limit the playground radius control to 0px/5px to prevent intermediate, ambiguous rounded corners.
- Existing browser settings with legacy radii are normalized to 5px on load. Accent/density selections are preserved.
- Reflect these adjustments in machine-readable tokens and shared references.

## 2026-10-28 · Typography, badges, focus refinement

**Status:** Requested playground iteration, pending final review.

- Section description text weight: 400.
- Letter-spacing: 0 globally.
- Introduced pastel badge semantic palette for light/dark themes.
- Form control focus: single 1px border-color change without glow; keyboard navigation on action controls remains visible.

## 2026-10-28 · Expanded component coverage

**Status:** Live Design Playground implementation, awaiting visual approval.

- Expanded the component preview with a sortable/filterable/paginated table.
- Added dismissible semantic alert panels and toast demonstrations.
- Added advanced form fields, selection controls, keyboard tabs, progress/loading skeleton and empty states.
- Synthetic sample data only; no real backend execution.

## 2026-10-28 · Open editorial layout iteration

**Status:** User requested, preview implementation; awaiting visual approval.

- Reference: user-supplied Resend-style interface emphasizing a borderless table, typography and subtle separators.
- Remove card borders, backgrounds and shadows from dashboard metrics, recent work, workflow panel, analytics and UI component examples.
- Use thin dividers between semantic sections and typography to establish visual hierarchy.
- Component library follows the same section-based structure; retained tinted alerts/interactive input bounds intentionally.
- Preserve prior +2pt text-size, 0 letter-spacing, section subtitles at font-weight 400, pastel badges, thin focused input borders and 5px/Pill geometry.
- Light and dark previews both supported. No automatic dark default.
- Keep CSS for this iteration in `styles/editorial.css` until approval; update tokens and skill references without treating iteration as final release.

## 2026-10-28 · Open canvas surface tuning

- Light mode: use a clean white canvas (`#FFFFFF`) with `#E2E5E9` hairline dividers and a subtle `#F6F7F9` secondary surface for active controls.
- Dark mode: use a near-black canvas (`#0B0B0D`) with understated `#292B30` structural dividers.
- This supports the open typographic layout without reintroducing large cards or excessive background contrast.

## 2026-10-28 · Gentle motion and expandable table draft

**Status:** Interactive preview implementation, awaiting visual approval.

- Micro-interaction durations: 130ms (fast), 185ms (standard), 235ms (panel) with soft easing, no strong bounce.
- Added animated custom listbox previews while retaining original native select values and change events; native browser select animation is not controllable across platforms.
- Added modal in/out, soft alert dismissal, table row/selection feedback and tab/view content transitions.
- Added a right-side expand/collapse chevron for table rows, revealing synthetic row details inline with accessible aria-expanded state.
- Removed decorative status dots from the current dashboard preview while preserving text-based status cues.
- Implemented reduced-motion accommodation, with unchanged visual language and component radii.

## 2026-10-28 · A4 문서 디자인 시스템 시안 추가

**Status:** Draft v0.1; 미리보기 배포 후 디자인 승인 필요.

- 기존 UI 스타일의 typography-first/open-editorial 방향을 결과 보고서, 현황·개선 계획서, 기술 검증 계획서에 확장한다.
- 3개 사용자 첨부 PDF는 문서 구성 참고자료로만 검토한다. 원본 디자인과 고객·도메인·계약·운영 정보는 공개 시안에 재사용하지 않는다.
- A4 세로, 20/17/21mm 여백, 27pt 제목, 약 10pt 본문, 얇은 구분선, 열린 데이터 표를 초안으로 정의한다.
- 별도 경로 documents.html + styles/document.css + tokens/document-tokens.json을 사용하며, 동일 Git 저장소의 루트 Skill이 문서 작업도 안내하도록 확장한다.
- 문서 샘플은 비식별·예시 문구이고 실제 기술 검증 성능/완료 상태로 간주하지 않는다.
- PDF 인쇄와 DOCX 생성은 별도 산출물 검수 대상이다.

## 2026-10-28 · Document style review — headers, KPIs, tables, timeline

**Status:** User-requested revision implemented, visual approval pending.

- Removed all four decorative top publisher/metadata mastheads from document preview sheets.
- Section index matches the 13pt title at 7px spacing and baseline alignment.
- All three overview values have equal 23pt typography, including the textual month value.
- Table hierarchy: thin top border, strong underline after thead, fine row dividers, and fine inner vertical rules; no outer box.
- Added subtle separator between fact labels and values.
- Replaced the arrow-separated schedule paragraph with a four-node horizontal editorial timeline.
- Updated document tokens and the shared document-style reference.

## 2026-10-28 · Report table hierarchy update

**Status:** User-requested revision; awaiting printed visual verification.

- Distinguish key/value fact rows with a subtle gray label column, clearer label/value typography, and one continuous fine vertical divider.
- For standard tables: top 0.75pt hairline, header underline 1pt muted slate, and gray header text.
- Remove all vertical column separators from thead; retain fine separators between tbody columns.
- Preserve open borders, no card boxing, responsive adjustments and print color controls.

## 2026-10-28 · Restore preferred fact rows

- Restored the incident report's key/value fact row CSS exactly to commit `4b4f3b3` at user request.
- No tinted label-column background; no full-row divider. Keep muted label text and short right divider.
- Retained recent adjustments for **ordinary multi-column data tables** (header lines and gray headings).
- This supersedes the immediately preceding fact-row visual experiment.

## 2026-10-28 · 문서 유형 및 연속 페이지 구성 확정 시안

- 카테고리 이름: 1. 결과보고서 / 2. 수행계획서 / 3. 제안서.
- 제안서 본문을 하나의 연속된 문서로 구성; 큰 제목은 첫 페이지에 한 번만 사용하고 페이지마다 반복하지 않음.
- A4 자동 페이지 넘김을 위한 스타일을 `styles/doc-layout.css`로 분리.
- 핵심 질문과 안내·산출물 문구는 왼쪽 아이콘, 오른쪽 텍스트의 열린 레이아웃으로 구성.
- 기존 현황표 및 일반 데이터 테이블 디자인은 그대로 유지.

## 2026-10-28 · Verification-question layout correction

- The user clarified that the **entire '확인 질문' heading and its four questions** should occupy the right column, with left-side whitespace and one restrained checklist icon.
- Restored the storage section's output note to its earlier simple left-rule appearance.
- Preserved the four original questions, type scale, tables and document pagination. Only the storage validation example's question grouping was changed.

## 2026-10-28 · Refine verification question balance

- Replaced excessive unbounded whitespace with one very light cool-gray (`#F7F8FB`) semantic field, without rounded cards, borders, or shadows.
- Tightened the left icon column and anchored its small line icon to the question heading height.
- Balanced the four questions into evenly spaced 2×2 rows. Narrow view switches to one column.
- Kept the simple left-rule output note and all other report/table styles unchanged.
- This is a user-requested visual iteration, not a signed-off release.

## 2026-10-28 · Fixed A4 print footer and classic quotation

- Printed document name appears at the same bottom margin position on every A4 page, not at the end of body flow.
- Use Chrome 131+ page-margin CSS with left document name and right current/total page counter; hide the in-flow footer in print.
- Restore the initial quoted key question with hairline top/bottom rules and one separate large opening quotation mark. Remove the icon and small label.
- Other table and document designs are unchanged. Verify the resulting PDF visually before final sign-off.
## 2026-10-28 · Advisory spacing and nested technical headings

- Tightened the execution-plan advisory note: top margin 25px → 11px, icon column 52px → 26px, gap 12px → 8px, vertical padding 13px → 5px.
- Converted inline technical `검증 목적.` labels in sections 04 and 05 to semantic subheadings, enlarging 10pt → 12pt.
- Increased `확인 질문` subheading 10.7pt → 12.7pt.
- All other document title sizes, table styles and fixed print footers remain unchanged.

## 2026-10-28 · SmartECM 문서 미리보기 간소화

- 상단 서비스명을 SmartECM 문서 시스템으로 통일하고 문서 유형 접미사를 제거했다.
- 탭 아래 별도 소개 영역과 해당 JavaScript/CSS를 제거하고 화면 상단 여백을 24px로 정리했다.
- A4 내부 제목, 본문, 문서 토큰 및 인쇄 레이아웃은 유지한다. 클릭 및 키보드 탭 전환 규칙도 유지한다.

## 2026-10-28 · Company GitLab CI configuration

- Main-push-only CI uses the existing preview-dist allowlist build.
- Pin CLI 65.5.0 and company target IDs; serialize production deployments.
- Require protected main and a user-configured protected/masked VERCEL_TOKEN.
- Runner and first successful pipeline remain to be verified through company GitLab web UI.

## 2026-10-28 · Studio 내부 문서 미리보기

- 문서 스타일 메뉴를 문서 아이콘과 중앙 view 전환으로 변경했다.
- 기존 documents.html을 iframe으로 재사용해 문서 탭 상태 및 A4 인쇄 CSS를 보존한다. 임베드 화면에서는 중복 UI 복귀 링크만 숨긴다.
- PDF 버튼은 프레임의 문서만 인쇄하며 좌우 Studio 패널을 포함하지 않는다.

## Studio document scrolling · 2026-10-28

- Size the embedded preview to its document content using ResizeObserver; use the outer workspace scroll with no nested scrollbars.
- Keep document tabs and PDF print action in a sticky Studio toolbar; hide the Workspace/notification/avatar bar in the document view only.
- Keep standalone document controls and A4 print CSS intact.

## SmartECM 디자인 에셋 갤러리 · 2026-10-28

- UI 컴포넌트 바로 아래 디자인 에셋 메뉴에서 제공된 로고 2종과 제품 패키지를 전시한다. 에이전트 설정 메뉴는 제거한다.
- 원본 PNG의 비율과 투명도를 보존하고 흰색 로고는 어두운 배경에서 보여준다. 원본 다운로드를 제공한다.
- 공개 미리보기 빌드는 assets의 지정된 PNG 3개만 포함한다.

## 2026-10-28 · 문서 라이브러리 6개 메뉴 개편

- 기본 레이아웃(세로/가로), 독립 표지 2종, 제안서/계획서 템플릿, 공통 컴포넌트 14개 예시로 재구성했다.
- 13개 렌더러를 공통화했고 일정은 table을 재사용한다. Studio와 독립 페이지의 메뉴도 같은 정의를 사용한다.
- 기존 타이포그래피·표·현황표·타임라인·인용문·안내 스타일을 보존한다. 가로형은 실제 A4 landscape, 표지 대안만 독립 페이지이며 본문은 자동 흐름을 사용한다.
- 새로운 공개 스크립트 1개만 빌드 허용 목록에 추가했다. 내부 지침과 CI 스크립트는 배포하지 않는다.

## 2026-10-28 · 컴포넌트 간 구분선 및 일정2

- 공통 컴포넌트 예시는 장식 구분선 없이 여백으로 구분한다. 내부 표·인용문 등의 선은 유지한다.
- 일정2는 scheduleGrid 공통 렌더러를 사용한다. 월·주차 헤더, 작업 그룹, 기간 막대를 표시하며 기존 일정 예시는 유지한다.

## 2026-10-28 · 일정2 미니멀 스타일

- 일정2의 별도 캡션과 작업 그룹 제목 행을 제거하고 작업 6행을 예시로 제공한다.
- 흰 바탕, 가는 가로선과 최소 세로선, 연한 액센트 색의 기간 막대와 얇은 강조선을 사용한다. 고정 회색 헤더 및 고정 파랑색을 사용하지 않는다.
- Studio에서 선택한 액센트를 문서 프레임에도 동기화한다. 용지 배경과 본문 색은 기존 인쇄 기준을 유지한다.

## 2026-10-28 · 일정2 격자와 막대 정돈

- 주차 격자는 모든 작업 행에 동일한 간격으로 연속 표시한다. 기간 막대로 셀을 병합해 격자를 끊지 않는다.
- 기간 막대는 행 안쪽에 여백을 두고 5px 모서리와 연한 액센트 채움으로 표시한다. 기존 하단 강조선은 제거한다.
- 작업명과 기간의 접근성 레이블을 유지하고 인쇄에도 격자와 기간 막대를 보존한다.

## 2026-10-28 · Company GitHub migration

- Imported all 37 tracked source files from company main snapshot 038b869 with fresh Git history; preserved the old checkout and remote.
- Canonical repository: https://github.com/2hansl-wenit/smartecm-design-system (main).
- Preserved design code, tokens, assets and preview build scripts without visual changes.
- Legacy CI is retained but disabled. Existing Vercel project IDs are retained; GitHub integration and deployment are deferred.
- Excluded Git metadata and ignored generated preview-dist; no uncommitted source files existed at migration.

## 2026-10-28 · Native GitHub deployment configuration

- Keep the existing smart-ecm/smartecm-design-preview project and domain.
- Configure Other, repository root, sh scripts/build-preview.sh, and preview-dist in Vercel; track build settings in vercel.json.
- Preserve shell LF with .gitattributes. The allowlisted POSIX build produces 12 static files; no internal docs or credentials.
- GitHub authorization is required before validating a main-push-triggered production deployment.

## 2026-10-28 · Verified company GitHub deployment policy

- README and smartecm-ui Skill now require the new company GitHub checkout and preserve old GitLab/personal repositories.
- Native main-push Production deployment was verified READY for 247acd2; document fixed build settings, existing URLs and company-local Git author identity.

## 2026-10-28 · SmartECM/GCM accent swatches and custom picker

- User confirms SmartECM default accent `#5C6BC0` and SmartGCM second accent `#53B3A3`.
- Six fresh-toned optional swatches follow; a compact palette icon opens native color input for custom hex selection.
- Selection persists locally and updates the UI and document iframe; light accent colors receive dark button labels where needed.
- Tokens, company brand rules and foundational design reference updated; personal GitHub remains unchanged.

## 2026-10-28 · AI design prompt copy replaces raw JSON clipboard

- Rename the right-side Studio action from `선택한 설정 복사` to `AI 작업 프롬프트 복사`.
- Generate a single Korean, immediately reusable AI task prompt on click with canonical GitHub URL, Studio preview URL, Skill/references reading instructions, and live preview settings (theme, accent, density, radius) as JSON.
- Warn that this GitHub repo can be private; instruct the consuming assistant to check access and request connector/files when inaccessible.
- State clearly that browser-selected values do not update official brand tokens or authorize edits to the source design-system repository.
- Preserve the current local settings/preview and clipboard fallback; report copy success only after an actual successful copy.
- Company GitHub only; do not modify personal GitHub or GitLab.


## 2026-10-28 · Remove all default document footers

- User requested removal of the default bottom rule, document title/sample message and page counters across the six document-system views.
- The shared `paper()` component no longer emits a footer; named `@page doc-*` declarations keep A4 size and 20/21/19mm margins without page-margin content.
- Remove unused legacy footer CSS and do not automatically reintroduce footer markup or automatic numbering. Add footer only on explicit document-specific instruction.
- Browser-added print headers/footers are controlled by the user's print dialog, not site CSS.
- Previous 'fixed A4 print footer' decisions are superseded; content layout and document-local separators remain intact.

## 2026-10-28 · Preserve timeline visuals in PDF printing

- Reproduced a print-specific discrepancy with a minimal Chromium A4 test and background graphics disabled: the timeline line vanished and nodes appeared hollow because connector/dot styling depended on `background` and `box-shadow`.
- Scoped the fix to `@media print`: real border-top connector, an explicit outlined/filled dot, four-column arrangement and `print-color-adjust:exact`, preserving the existing screen style.
- Reproduced successful print output for the patched four-node timeline. Independently checked schedule2's inherited exact-color-printing in Chromium; its vertical week grid and duration bar remained present.
- Existing A4 margins, natural pagination, and no-default-footer policy remain unchanged. Full Vercel PDF acceptance testing is pending.

## 2026-10-28 · Expanded document component layout library

- Maintain the six existing top-level menus and 15 existing samples; extend the library to 23 specimens and 21 renderers.
- New reusable patterns: `multiCards` (2/3/4-column line/tint/open cards), `summaryGrid` (four concise values), `optionCompare` (A/B), `checklist` (unchecked), `numberedBlocks`, `highlight`, `specList`.
- Two-column explanatory information blocks reuse `multiCards` rather than creating duplicate markup.
- In the common-components view, selectable 2/3/4 columns and three styles update live renderer output. Hide editor controls when printing, preserve the user's selected layout and keep noninteractive templates unchanged.
- Portrait four-column text stays concise; mobile stacks content for readability; printed A4 maintains requested columns. Do not claim sample data represents real SmartECM specifications or verified test results.
- No default footer; company GitHub only.

## 2026-10-28 · Recommended-column table and linked architecture update

- Removed the old spec-list renderer and common specimen. Added `recommendedTable` directly below the ordinary table; the total remains 23 specimens and 21 renderers.
- Recommended Option A is highlighted through a full-column overlay (2.5px accent border), an accent-colored heading, star icon and '추천' label. It is a visual demonstration only, not a verified ranking.
- Shared `architecture` now creates boxed nodes joined by printable lines and arrowheads. Landscape, proposal and library examples use the same renderer. Mobile switches to a vertical chain.
- Schedule2 task bars now use a solid selected accent with bold white text and print-color preservation.
- Other shared templates, basic table design, A4 flow and the no-default-footer policy remain unchanged. Full rendered PDFs await visual review.

## 2026-10-28 · Separate AI copy workflows for UI/UX and document creation

- Replaced the single generic AI copy prompt with a contextual selector: auto (based on active Studio page), UI/UX, or document design/authoring.
- Auto in the document view uses A4 document authoring instructions and includes the currently selected document example; auto on other views uses UI/UX instructions.
- Document prompt: prioritize source materials and verified facts, A4 pagination and print, no default footer, document component renderers and requested PDF/DOCX/HTML output. Include accent and document context but **exclude UI density/radius/theme settings**.
- UI prompt: preserve feature behavior, interface hierarchy, keyboard accessibility and responsive shared components; include live theme, accent, density and radius.
- Users may override the detected type without switching screens. The selector's accessible hint and success feedback update according to the resulting work type.
- Both export modes link to the same company GitHub and Vercel preview, check whether the private repository can actually be read, and must not mutate shared tokens or push without an explicit request.
- Kept existing clipboard fallback and personal/legacy repositories untouched.

## 2026-10-28 · Separate cover 01 / cover 02 and center second cover

- Replaced the combined '표지' tab with **two independently selectable tabs**: '표지 01' and '표지 02'. Seven document tabs now share the same definition between Studio and standalone documents.
- Retain original cover 01 editorial arrangement, logo placement, accent marker and sample metadata.
- Cover 02 uses top-right SmartECM logo plus vertically/horizontally centered title and subtitle. It omits the large middle package image and unnecessary lower metadata.
- Each tab generates a single A4 portrait document; printing emits only the chosen cover. Existing print margins, absence of default footer, and all noncover templates/components remain unchanged.

## 2026-10-28 · Swap cover variants and refine both

- Swapped cover identities while retaining independent `cover01` / `cover02` document tabs.
- New cover01 is the former centered cover02 with a **220px** SmartECM logo at upper right, title/subtitle shifted upward and explicit bottom author **(주)위앤아이티 홍길동 차장** plus dynamically generated **Asia/Seoul date**.
- Cover02 is a stronger editorial proposal cover using top-left logo, right document-series label, large two-line title beside accent rule, subtitle, and bottom publisher/document-type metadata. No product package image.
- Keep seven document menus, print one chosen A4 cover, retain existing automatic pagination for noncovers and never introduce a global footer. Author is clearly synthetic demonstration content.

## 2026-10-28 · Cover 02 one-line layout and vertical repositioning

- Removed the prominent left vertical accent line from cover02 and eliminated its corresponding indentation.
- Changed title and subtitle from explicitly broken two-line fragments to full single-line strings; printed A4 uses nowrap while narrow mobile layout may wrap to avoid clipping.
- Vertically centered the editorial content block lower on the A4 page with flex distribution, preserving logo, brief horizontal accent and bottom publisher metadata.
- Retained cover01 and all other document layouts and styles. Validation: GitHub source and syntax checks; Vercel visual/PDF inspection remains separate.

## 2026-10-28 · Stronger document headings, content-aware tables, HTML-first delivery

- User-provided document screenshots showed hierarchy confusion between large `03` section and nested `01`/`02` items. Increased chapter title **13pt → 21pt** and chapter number to 17pt, with a dedicated 42px number gutter.
- Added `subsections` renderer for nested 12pt numbers, 13.5pt subtitles and 10pt body; reserved 35px for number so paragraphs align under their subsection title instead of overlapping the numbering.
- Extended reusable `table` renderer with optional `columnWidths` (percentages summing to 100), while keeping existing auto layout for other tables. Added sample first-column width 36% for long feature names. Gallery now has 25 specimens and 22 renderers.
- With no explicit file format, default document AI prompt to **one standalone HTML**, with sticky **PDF로 인쇄** toolbar invoking `window.print()`. Use `@media print` to hide controls and print clean A4; do not generate an extra PDF/DOCX by default. Explicit file-format requests override.
- Added `templates/printable-document.html` as a reusable single-file HTML starting point with inline CSS and clean print layout.
- Source rendering and output checks require separate verification. Browser PDF printing remains the user's choice.

## 2026-10-28 · Balance chapter number/title and tighten their spacing

- Following review of a generated document screenshot, fixed inconsistent top-level numeral/text sizes (17pt vs 21pt) and overly wide 42px numeral column.
- Top-level heading now uses 19pt for **both** number and title, aligned centrally in a max-content numeral column with an 8px gap. Mobile uses 17pt and a 6px gap.
- Updated shared document CSS, standalone printable HTML starter, design tokens and Skill/reference guidance.
- Lower-level numbered subsections and their number/body column separation remain unchanged. Existing print button, A4 margins and no-default-footer policy also remain intact.

## 2026-10-28 · Lighten level-1 numeral while preserving typography

- Updated level-1 chapter numerals from weight 760 to **550**, retaining 18pt size. Chapter title stays at 18pt / weight 780.
- Preserved number/title 8px gap, max-content numeral width, center alignment and mobile 16pt/6px setting. The level-2 numbering was intentionally left unchanged.
- Applied consistently in shared A4 document CSS, standalone printable HTML template, token metadata and authoring Skill.

## 2026-10-28 · Align common component gallery labels and subsection indices

- Matched specimen gallery `01 제목` number/title sizes at 13pt, with a lighter index weight 550 and 7px spacing.
- Matched nested `subsections` index to the 13.5pt subsection heading at weight 550; replaced the 35px fixed index gutter + 11px gap with max-content width + 8px gap. On mobile, both are 12.5pt with 6px spacing.
- Preserved subsection paragraph alignment under its own heading and unchanged level-1 chapter 18pt typography.
- Synced shared document CSS, standalone printable HTML shell, tokens, components reference and Skill. Source checks do not replace browser/PDF visual review.

## 2026-10-29 · Cross-PC Pretendard typography portability

- Diagnosis: Studio/UI/document CSS only listed `Pretendard` in `font-family`, so PCs without local installation fell back to a system font (e.g., Malgun Gothic).
- Added official version-pinned **Pretendard Variable v1.3.9 dynamic-subset** webfont stylesheet to Studio, document standalone preview and printable HTML template, and prioritized the `"Pretendard Variable"` font family across CSS and tokens.
- Updated AI-copy prompts for UI/UX and A4 document work to explicitly load this font in generated HTML rather than merely copying fallback typography rules.
- CDN-backed fonts require network access; for locked-down or offline deployments, self-host licensed assets and retain OFL attribution. Browser PDF print may embed loaded fonts; verify individual exports. No font binaries stored or distributed from this repository change.
- This change affects HTML typography loading only and preserves existing UI sizes, layouts, tab behavior and print features.

## 2026-10-29 · Public GitHub and compressed AI task prompt

- After the company repository changed to **Public** and its history was reset, changed Studio's AI copy action to link to the public repository without private-access/connector-authentication language.
- Reduced copied text to ~7 lines (roughly 500–600 Korean characters): one public repo reference, required AGENTS/SKILL, task-specific references, key execution guidance, compact current settings, task placeholder.
- Keep UI/UX and A4-document modes distinct, HTML-first and PDF print button for unspecified document format, Pretendard loading, source-data fidelity and no source-repo pushes by default.
- Public HTTPS reading requires no GitHub login; users' AI environments still need supported web/GitHub access. The fallback is to request relevant files, not to claim access.
- Updated adoption documentation and README; no private repository copied or new public repository created.

## 2026-10-29 · Robust cross-AI document/UI prompting after Claude fetch failure

- Reported Claude behavior: unable to fetch/search newly public GitHub source, then refused to draft a proposal and treated the unchanged task placeholder as missing input.
- Verified GitHub repo visibility was Public; direct generic web fetch can fail independently. Public status alone never guarantees an LLM tool can access GitHub.
- Added reviewed source-controlled AI summaries `ai/document.md` and `ai/ui.md`, allowlisted in shell/PowerShell static Vercel preview builds. They expose design principles only, no internal operational files.
- Reworked UI/UX and A4-document copy prompts with enough compact **inlined minimum design rules** to proceed if both source URLs fail. Retain optional source links for deeper reference and prohibit claiming that unread Skill files were consulted.
- Changed the final task placeholder from a literal '[document purpose ...]' to an instruction to execute the appended user request. A request for a document with no supplied evidence results in a visibly labeled sample/needs-validation draft, not an invented SmartECM product assertion or stalled production.
- Validate live AI guide URLs after Vercel auto-deploy; a GitHub commit does not prove deployment readiness.
