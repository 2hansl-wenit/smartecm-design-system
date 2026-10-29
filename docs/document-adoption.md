## 기본 문서 산출물 — 인쇄 버튼이 있는 단일 HTML (2026-10-28)

AI 작업 프롬프트 복사로 문서 작업을 지시할 때 파일 형식을 지정하지 않아도 됩니다. 별도 형식 요구가 없으면 **독립 실행형 HTML 파일 한 개**를 생성하고, 상단에 스크롤해도 보이는 **PDF로 인쇄** 버튼을 붙입니다.

- 버튼을 누르면 `window.print()`가 실행되어 Chrome/Edge 등 브라우저의 인쇄·PDF 저장 대화상자가 열립니다. 버튼과 상단 툴바는 `@media print`에서 숨겨 문서 내용만 PDF로 출력합니다.
- 인쇄 형식은 A4, 상단 20mm·좌우 21mm·하단 19mm이며 본문과 표가 자연스럽게 다음 페이지로 이어집니다.
- 동일 콘텐츠를 HTML/PDF/DOCX로 중복 만들지 않습니다. 사용자가 PDF 또는 DOCX 등을 **명시적으로 요청한 경우 그 요청을 우선**합니다.
- 참고 HTML 껍데기: `templates/printable-document.html`. 결과 파일에는 실제 작업 자료를 사용하고 템플릿 가상 문구는 제거합니다.
- 결과물에서 상위 제목은 21pt, 하위 항목은 별도 번호 영역을 사용합니다. 열 너비는 표 내용에 따라 할당합니다(기능/설명/증적 예시 36/38/26).
- 브라우저 자체 머리글/바닥글을 끄고 인쇄 결과를 검수합니다. 버튼을 넣었다고 PDF 파일 자체가 생성된 것은 아닙니다.

---

# Agent Document System 적용법

## 온라인에서 디자인 수정·확정

Vercel: https://agent-ui-system.vercel.app/documents.html

세 가지 탭: **1. 결과보고서 / 2. 수행계획서 / 3. 제안서**.

상단 'PDF로 인쇄'는 브라우저 인쇄 대화상자를 연다. A4, 100% 배율, 브라우저의 기본 머리글/바닥글 끄기 설정을 권장한다. 브라우저에서 저장한 파일은 인쇄 결과를 반드시 확인한 뒤 공유한다. 제안서는 단일 연속 본문으로 구성되며 A4 인쇄 시 자동으로 페이지가 나뉜다.

이 페이지는 **문서 디자인을 검토하기 위한 HTML 시안**이며 고객의 실제 증적 데이터나 최종 배포된 DOCX/PDF 파일이 아니다.

## Codex

기존 agent-ui Skill 설치 사용자는 아래 명령으로 최신 저장소 버전을 내려받는다.

    git -C "$HOME\.agents\skills\smartecm-ui" pull

다른 프로젝트 AGENTS.md에 추가할 수 있는 지침:

    For reports, plans, proposals, and technical documents:
    - Invoke the $smartecm-ui Skill's document workflow.
    - Use references/document-style.md and tokens/document-tokens.json.
    - Inspect documents.html and styles/document.css for the visual specification.
    - Respect supplied source facts and confidentiality.
    - Generate the requested DOCX, PDF, or HTML and verify the finished artifact.

Codex 채팅 예시:
> $smartecm-ui 문서 스타일로 첨부 자료에 근거한 A4 결과 보고서를 작성해줘. 내용은 증적에 있는 사실만 쓰고, 표·여백·타이포그래피는 document-style.md 기준으로 해줘.

## ChatGPT

GitHub 저장소가 연결된 채팅에서는 다음 문구를 보낸다.

> 아래 SmartECM 디자인 시스템의 문서 스타일로 문서를 작성해줘.
> GitHub: https://github.com/2hansl-wenit/smartecm-design-system
> references/document-style.md, tokens/document-tokens.json, styles/document.css, documents.html을 참조하고, 첨부한 자료의 내용을 근거로 사용해줘. 문서 형식은 A4 PDF 또는 DOCX로 지정할게.

GitHub 접근이 없는 채팅이나 모드에서는 관련 파일을 첨부해야 한다. ChatGPT의 GitHub 연결만으로 Skill이 모든 채팅에 자동 적용되거나 업데이트되는 것은 아니다.

## 버전

현재 문서 기준은 v0.1 Draft이다. 웹 미리보기와 실제 출력 결과를 비교하며 조정하고 최종 승인 후 버전을 고정한다.

장문 문서는 첫 페이지에만 대제목이 있고 이후 페이지에는 본문이 이어진다. `styles/document.css`와 `styles/doc-layout.css`를 함께 참조한다.

## 문서 기본 푸터 없음 (2026-10-28)

모든 문서 유형의 화면 미리보기와 PDF 인쇄에서 **하단 라인·문서 제목·자동 페이지 번호를 기본 출력하지 않습니다**. A4 인쇄 여백 및 내용의 연속 페이지 흐름은 유지합니다.
브라우저가 자체적으로 추가하는 날짜/웹페이지 제목/URL/쪽수는 별개입니다. Chrome 인쇄 대화상자에서 '머리글과 바닥글'을 끄세요.
별도 하단 푸터는 사용자가 문서별로 명시적으로 요청한 경우에만 추가합니다.

## 현재 문서 미리보기 구조

세로형 / 가로형 / 표지 01 / 표지 02 / 제안서 / 계획서 / 공통 컴포넌트의 7개 메뉴를 사용합니다. 표지 01과 02는 각각 독립 탭이며 PDF로 인쇄 시 선택한 표지 한 장만 인쇄합니다. [문서 컴포넌트 계약](../references/document-components.md)을 기준으로 공통 렌더러에 데이터를 전달하고 템플릿을 조합합니다. 과거 3개 샘플 분류는 현행 메뉴 구성을 의미하지 않습니다.
