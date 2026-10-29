# 회사 GitHub 및 Skill 설정

기준 저장소는 `git@github.com:2hansl-wenit/smartecm-design-system.git`, 기본 브랜치는 `main`입니다. 로컬 작업 폴더는 사용자별로 정하고 기존 작업 폴더는 보존합니다.

## Skill 설치

```powershell
git clone git@github.com:2hansl-wenit/smartecm-design-system.git "$HOME\.agents\skills\smartecm-ui"
```

이미 설치된 폴더는 origin을 확인한 후 갱신합니다. 개인 `$agent-ui` 설치는 변경하지 않습니다. 작업 시 `$smartecm-ui`를 호출하며 설치본은 자동 동기화되지 않습니다.

## 인증

회사 GitHub 계정에 SSH 공개키를 등록하고 저장소 쓰기 권한을 확인합니다. 비밀키와 토큰은 저장소나 채팅에 넣지 않습니다.

## Vercel 유지

기존 팀 `smart-ecm`, 프로젝트 `smartecm-design-preview`를 유지합니다. 프로젝트를 새로 만들지 않고 회사 GitHub 저장소를 기존 프로젝트에 연결합니다. 기존 빌드 스크립트와 회사 프로젝트 ID를 보존합니다. Vercel 계정의 회사 GitHub Login Connection과 GitHub App 저장소 권한을 설정합니다. Production Branch는 main이며 빌드 설정은 docs/preview.md를 따릅니다.

기존 `.gitlab-ci.yml`, `.gitlab-ci.yml.template`, `scripts/deploy-preview-ci.sh`는 이전 구성 참고용으로 보존하되 실행을 차단했습니다. GitHub Actions 배포 워크플로는 추가하지 않았습니다.
