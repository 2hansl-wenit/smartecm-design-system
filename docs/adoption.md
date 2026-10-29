# Adoption Guide: Codex / ChatGPT

## 1) Codex: install as a user-level Skill (Windows PowerShell)

Requires Git installed and GitHub authentication for this **private** repository.

```powershell
New-Item -ItemType Directory -Force "$HOME\.agents\skills" | Out-Null
git clone git@github.com:2hansl-wenit/smartecm-design-system.git "$HOME\.agents\skills\smartecm-ui"
```

The repository root contains `SKILL.md`, so the resulting directory is a skill folder. In a Codex chat, explicitly request: `$smartecm-ui 스킬을 사용해 이 화면을 검토해줘.`

For subsequent updates, run `git -C "$HOME\.agents\skills\smartecm-ui" pull`. A GitHub commit does **not** refresh the local clone automatically.

If SSH keys are not configured, HTTPS clone may be used after authenticating Git appropriately.

## 2) Codex: pin a version per project (alternative)

In the **consuming project's root**:

```bash
git submodule add git@github.com:2hansl-wenit/smartecm-design-system.git .agents/skills/smartecm-ui
git add .gitmodules .agents/skills/smartecm-ui
git commit -m "Add shared UI skill"
```

Each project controls when to update:

```bash
git submodule update --init --recursive
git -C .agents/skills/smartecm-ui fetch
git -C .agents/skills/smartecm-ui checkout main
git -C .agents/skills/smartecm-ui pull
git add .agents/skills/smartecm-ui
git commit -m "Update shared UI skill version"
```

For production projects, prefer **pinned revisions/tags** over tracking a moving branch. Add the `templates/AGENTS.snippet.md` guidance to that project's own `AGENTS.md`.

Use either user-level clone or project-level submodule as appropriate; avoid accidental duplicated skill names with mismatched versions.

## 3) ChatGPT

Connected GitHub access can be used to inspect this private repository during a chat. It does **not** mean Git files automatically become installed ChatGPT Skills or remain continuously synchronized.

Where ChatGPT Skill creation/import is available, copy/import the Skill and required supporting files through the supported UI. Otherwise, attach/link the standards as ChatGPT Project reference material and put a short instruction in the project to use the shared design references.

For accuracy, specify the repository version/commit to use and refresh imported copies when it changes.

## 4) How to adopt for a new product

1. Identify application framework, existing UI, target screens, and current design components.
2. Select which draft tokens can safely be adopted and document exceptions.
3. Apply the shared hierarchy, states, and accessibility review.
4. Build real shared UI component packages separately if code reuse is required.
5. Record changes in the consuming repository and upstream reusable design improvements here.

## 5) Safe rollout

Start with one representative page (dashboard, list, or settings), check usability and visual consistency, then expand. Do not run bulk redesigns across live systems without review.

## 6) Studio: AI 작업 프롬프트 복사 — 작업 유형별 지침

디자인 스튜디오 오른쪽의 **AI 작업 유형** 선택 영역은 다음 세 가지를 지원한다.

- **현재 화면 기준 (자동)**: 일반 UI 화면에서는 UI/UX, **문서 스타일** 메뉴에서는 문서 디자인·작성 프롬프트를 복사한다. 문서에서는 현재 선택한 세로형/가로형/표지/제안서/계획서/공통 컴포넌트 예시를 함께 명시한다.
- **UI/UX 디자인**: 메뉴 위치와 무관하게 콘솔·대시보드·웹 화면 제작용 지침을 생성한다.
- **문서 디자인·작성**: 메뉴 위치와 무관하게 보고서·제안서·계획서 등의 A4 문서 제작용 지침을 생성한다.

복사 텍스트는 유형별로 **분리**된다. UI/UX에는 `references/foundations.md`, `references/components.md`, `references/interactions.md`, `tokens/tokens.json` 등을 지정하고, 실시간 테마·액센트·밀도·모서리 곡률을 JSON으로 담는다. 문서에는 `references/document-style.md`, `references/document-components.md`, `tokens/document-tokens.json`, `styles/document*.css`, `scripts/document-library.js` 등을 지정하고, 문서 예시·A4 방향·액센트만 전달한다. 문서 모드에서는 UI 밀도와 곡률 설정을 임의로 인쇄 서식에 적용하지 않는다.

문서 프롬프트는 원본 자료 확인, 검증되지 않은 사실 생성 금지, 첫 페이지 제목, 자연스러운 페이지 나눔, 기본 푸터 제거 및 PDF/DOCX 출력 검수를 안내한다. UI 프롬프트는 화면 정보 구조·기존 동작 보존, 반응형, 접근성과 컴포넌트 재사용을 안내한다.

모든 유형에는 회사 GitHub `https://github.com/2hansl-wenit/smartecm-design-system` 및 Vercel 미리보기가 포함된다. 해당 GitHub는 Private일 수 있으므로 AI가 실제 접근 가능 여부를 확인하고 실패 시 연결·파일 제공을 요청하도록 명시한다. URL만으로 Skill을 자동 설치하거나 원본 저장소를 수정할 수는 없다.

버튼은 **AI 작업 프롬프트 복사**이며, 클릭 시점의 선택 유형/설정으로 프롬프트를 만든다. Clipboard API가 차단되면 기존 복사 폴백을 사용하고, 실제 복사 성공 시에만 유형별 성공 메시지를 표시한다. 선택한 디자인 설정은 로컬 미리보기만 변경하며 공식 GitHub 토큰은 수정하지 않는다.


## 7) Default HTML document output with print action

When the user copies a document-design AI prompt and does **not** specify a file format, create exactly one standalone, printable HTML file. Use `templates/printable-document.html` as a base with inline CSS and the sticky `PDF로 인쇄` button invoking `window.print()`. Hide the entire toolbar in `@media print` so only the A4 document is printed. Do not create an additional PDF or DOCX by default; explicit user format requests override this preference.

For report structure, use 21pt level-1 titles, distinct number and text columns in nested subsections, and table column percentages based on actual header/row content (for long feature labels, a sample split is 36/38/26 rather than equal thirds). See `references/document-style.md` and `references/document-components.md` for details. File output should be a complete usable HTML, not a truncated snippet. PDF printing remains optional from the user's browser.

