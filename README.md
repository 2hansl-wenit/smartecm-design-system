# SmartECM Design System

위앤아이티 SmartECM의 공통 UI/UX 디자인 시스템 및 `$smartecm-ui` Skill입니다. 디자인 토큰과 스타일은 검토용 Draft이며 기존 문서 타이포그래피와 인쇄 기준을 유지합니다.

## 저장소

- 회사 GitHub: https://github.com/2hansl-wenit/smartecm-design-system
- SSH: `git@github.com:2hansl-wenit/smartecm-design-system.git`
- 기본 브랜치: `main`
- 작업 폴더: 사용하는 PC에서 적절한 로컬 경로를 선택해 설정합니다.
- 앞으로 개발과 디자인 수정은 이 회사 GitHub 저장소에서 진행합니다. 기존 회사 GitLab, 기존 로컬 저장소 및 개인 저장소는 수정하거나 Push하지 않습니다.

## 구성

- `AGENTS.md`, `SKILL.md`: 저장소 작업 및 회사 Skill 규칙
- `index.html`, `documents.html`: Studio 및 A4 문서 미리보기
- `styles/`, `tokens/`: CSS, UI 및 문서 디자인 토큰
- `scripts/document-library.js`: 재사용 가능한 문서 컴포넌트와 템플릿
- `assets/`: SmartECM 로고 2종 및 제품 패키지 원본 PNG
- `references/`, `templates/`, `company/`, `docs/`: 디자인 기준, 적용 템플릿, 회사 정책, 운영 문서
- `scripts/build-preview.ps1`, `scripts/build-preview.sh`: 공개용 `preview-dist` 빌드

문서 메뉴는 세로형 / 가로형 / 표지 01 / 표지 02 / 제안서 / 계획서 / 공통 컴포넌트입니다. 실제 고객 정보가 아닌 예시는 샘플로 구분합니다.

## 시작하기

`SKILL.md`, `company/smartecm-profile.md`, `references/` 및 `tokens/`를 먼저 확인하세요. 설치는 [적용 가이드](docs/adoption.md), 회사 운영은 [회사 설정](docs/company-setup.md)을 따릅니다.

```powershell
.\scripts\build-preview.ps1
python -m http.server 5500 --directory preview-dist
```

## Vercel

기존 `smart-ecm / smartecm-design-preview` 프로젝트와 [미리보기](https://smartecm-design-preview.vercel.app)를 유지합니다. 회사 GitHub main의 Git 통합 자동 배포를 사용하며 설정과 인증 요건은 배포 안내를 따릅니다. 기존 CI 파일은 보존하지만 비활성화했습니다. [배포 안내](docs/preview.md)를 참고하세요.

## main Push 자동 배포

회사 GitHub `main`에 Push하면 Vercel Git 통합이 기존 `smart-ecm / smartecm-design-preview` 프로젝트를 자동으로 Production 배포합니다. 실제 Push 검증 커밋 `247acd2d1abfc733b21819f2cff477f989487587`의 READY 상태와 기존 URL 반영을 확인했습니다.

- Production Branch: `main`
- Framework Preset: `Other`
- Root Directory: `./` (저장소 루트)
- Build Command: `sh scripts/build-preview.sh`
- Output Directory: `preview-dist`
- 설정 파일: `vercel.json`; 셸 스크립트 LF 규칙: `.gitattributes`
- URL: https://smartecm-design-preview.vercel.app
- 문서: https://smartecm-design-preview.vercel.app/documents.html

작업 전 origin과 Git 상태를 확인하고, 검증한 변경사항만 회사 GitHub main에 Push합니다. Push는 실제 Production 배포를 시작합니다. 일반 갱신에는 별도의 CLI 배포가 필요하지 않습니다. 배포 완료는 해당 GitHub 커밋 SHA와 Vercel READY 상태를 함께 확인합니다.

Git 작성자는 저장소에 쓰기 권한이 있는 회사 계정으로 설정합니다. 다른 계정으로 작성하면 Vercel 배포 권한 검사에서 차단될 수 있으므로 작업 전 저장소 로컬 작성자 설정을 확인합니다. 전역 Git 설정이나 개인 저장소 설정은 변경하지 않습니다.

공개 빌드는 허용된 HTML/CSS/JavaScript, 토큰 및 PNG만 포함합니다. Skill, 내부 문서, 인증 정보는 배포하지 않습니다. 비활성화된 GitLab CI를 재가동하거나 개인 Vercel 프로젝트를 변경하지 않습니다.

## AI 문서 기본 전달 형식

문서 작성 시 출력 형식을 지정하지 않으면 **하나의 독립형 HTML 파일(.html)**로 작성합니다. 스크롤해도 보이는 상단 **PDF로 인쇄** 버튼을 클릭해 필요할 때 브라우저에서 PDF로 저장할 수 있습니다. PDF/DOCX 등 다른 형식을 명시적으로 요청한 경우 해당 요청이 우선입니다.

- 시작 템플릿: `templates/printable-document.html`
- 대제목 21pt, 하위 번호·본문 분리와 내용별 표 너비 정책: `references/document-style.md`, `references/document-components.md`
