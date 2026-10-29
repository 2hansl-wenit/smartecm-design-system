# SmartECM 미리보기 및 배포

- UI: https://smartecm-design-preview.vercel.app
- 문서: https://smartecm-design-preview.vercel.app/documents.html
- 기존 배포 대상: `smart-ecm / smartecm-design-preview`
- 기준 저장소: `git@github.com:2hansl-wenit/smartecm-design-system.git`, `main`

## 배포 상태

회사 GitHub main Push를 기존 Vercel 프로젝트의 Git 통합으로 배포합니다. GitHub Login Connection 및 Vercel GitHub App의 저장소 접근 승인이 필요합니다. 이전 GitLab CI 구성은 비활성 참고용이며 개인 프로젝트는 사용하지 않습니다.

Vercel 팀·프로젝트 ID는 Vercel 대시보드의 해당 프로젝트 설정에서 확인합니다. 식별자와 인증 토큰을 저장소에 기록하지 않습니다.

## 자동 빌드 설정

- Framework: Other
- Root Directory: 저장소 루트 (./)
- Build Command: sh scripts/build-preview.sh
- Output Directory: preview-dist
- Production Branch: main
- vercel.json으로 빌드 설정을 버전 관리하고 .gitattributes로 셸 스크립트의 LF를 유지합니다.
- 연결 완료 후 main Push에 대응하는 Vercel 커밋 SHA와 READY 상태를 확인합니다. CLI 직접 배포는 자동 배포 검증을 대신하지 않습니다.

## 로컬 빌드

`scripts/build-preview.ps1` 또는 `sh scripts/build-preview.sh`로 preview-dist를 만듭니다. 빌드는 배포하지 않습니다. `python -m http.server 5500 --directory preview-dist`로 확인할 수 있습니다.

## 공개 파일 범위

preview-dist에는 index.html, documents.html, styles/*.css, tokens/tokens.json, scripts/document-library.js 및 assets/의 지정된 PNG 3개만 포함합니다. Skill, 내부 문서, Git 메타데이터 및 고객 정보는 배포하지 않습니다.
