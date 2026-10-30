# Adoption Guide: Codex / ChatGPT

## 1) Codex: install as a user-level Skill (Windows PowerShell)

This repository is **Public**. Reading/cloning needs no GitHub login; pushing changes still requires write access.

```powershell
New-Item -ItemType Directory -Force "$HOME\.agents\skills" | Out-Null
git clone https://github.com/2hansl-wenit/smartecm-design-system.git "$HOME\.agents\skills\smartecm-ui"
```

The repository root contains `SKILL.md`, so the resulting directory is a skill folder. In a Codex chat, explicitly request: `$smartecm-ui 스킬을 사용해 이 화면을 검토해줘.`

For subsequent updates, run `git -C "$HOME\.agents\skills\smartecm-ui" pull`. A GitHub commit does **not** refresh the local clone automatically.

Public HTTPS cloning works without authentication. Contributors can use authenticated HTTPS or SSH for pushing.

## 2) Codex: pin a version per project (alternative)

In the **consuming project's root**:

```bash
git submodule add https://github.com/2hansl-wenit/smartecm-design-system.git .agents/skills/smartecm-ui
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

Public GitHub files can be read without repository permissions when the AI environment supports web/GitHub access. It does **not** mean Git files automatically become installed ChatGPT Skills or remain continuously synchronized.

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

## 6) Studio: AI 작업 프롬프트 복사 — 통합형

디자인 설정 우측에는 **AI 작업 프롬프트 복사 버튼 하나**만 제공합니다. 수신 AI가 사용자의 실제 작업 지시를 보고 기준을 자동으로 선택합니다.

- **UI/UX 작업**(웹 화면·콘솔·앱·대시보드): `references/foundations.md`, `references/components.md`, `references/interactions.md`, `tokens/tokens.json` 및 공개 `/ai/ui.md`.
- **문서 작업**(제안서·보고서·계획서·표지): `references/document-style.md`, `references/document-components.md`, `tokens/document-tokens.json`, `templates/printable-document.html` 및 공개 `/ai/document.md`.
- **복합 작업**: 화면은 UI 기준, 문서는 문서 기준으로 각각 작업합니다.
- 통합 설정은 테마·accent·밀도·반경이며, 문서는 UI 밀도·반경을 무리하게 적용하지 않고 **accent만** 반영합니다. 문서 출력형식을 지정하지 않으면 PDF 인쇄 버튼이 있는 단일 HTML이 기본입니다.

공개 저장소는 별도 GitHub 로그인 없이 읽을 수 있지만 외부 AI가 URL을 읽지 못할 수도 있으므로, 복사 프롬프트 자체에 최소 디자인 기준을 포함합니다. 원본을 읽지 않았다면 실제로 읽었다고 주장하지 말고, 가능한 결과물을 진행합니다. 원본 저장소를 자동으로 수정·Push하지 않습니다. 실제 작업 지시가 없을 때에만 제작 대상을 확인합니다.

## 7) Default HTML document output with print action

When the user copies a document-design AI prompt and does **not** specify a file format, create exactly one standalone, printable HTML file. Use `templates/printable-document.html` as a base with inline CSS and the sticky `PDF로 인쇄` button invoking `window.print()`. Hide the entire toolbar in `@media print` so only the A4 document is printed. Do not create an additional PDF or DOCX by default; explicit user format requests override this preference.

For report structure, use 21pt level-1 titles, distinct number and text columns in nested subsections, and table column percentages based on actual header/row content (for long feature labels, a sample split is 36/38/26 rather than equal thirds). See `references/document-style.md` and `references/document-components.md` for details. File output should be a complete usable HTML, not a truncated snippet. PDF printing remains optional from the user's browser.


## 8) Claude / external AI may not fetch a Public GitHub URL

Public GitHub eliminates the need for repository permission, **not** the need for a working tool to fetch the contents. External AI browsers/search tools can fail on newly public or unindexed repositories. This is not evidence that the GitHub repo is Private.

The Studio's copied prompt now includes short, self-contained design rules and says **continue the requested work even if all links fail**; do not falsely claim that the full Skill was read. The references are optional enrichment:

- A4 document summary: `https://smartecm-design-preview.vercel.app/ai/document.md`
- UI/UX summary: `https://smartecm-design-preview.vercel.app/ai/ui.md`

Both are reviewed plain Markdown assets exported from `ai/` by `scripts/build-preview.sh` and `scripts/build-preview.ps1`. After a new GitHub push, the Vercel deployment must complete before those links work. If both references are unavailable, the embedded fallback rules still allow a finished document/UI draft. For requests without specific customer/product evidence, mark unsupported facts `확인 필요` rather than producing a false claim or refusing all work.
