# SmartECM UI/UX 디자인 핵심 가이드 (공개 배포)
디자인 소스: https://github.com/2hansl-wenit/smartecm-design-system
기준: `SKILL.md`, `references/foundations.md`, `references/components.md`, `references/interactions.md`, `tokens/tokens.json`.

## UI/UX 제작
- 방향: 타이포그래피 중심의 현대적 미니멀 UI. 정보 위계와 가독성은 강하게, 장식·희미한 카드 프레임·불필요한 배지는 최소화.
- 배경은 화이트 위주, 간결한 선과 시원한 여백. 기본 accent SmartECM #5C6BC0, SmartGCM #53B3A3. 사용자가 선택한 테마/색상/밀도/반경은 해당 결과물에 적용.
- 버튼/카드 모서리 기본 약 5px(의도된 pill 예외). 공통 컴포넌트 스타일 일관성, 의미 있는 상태 색과 텍스트 제공.
- 반응형 화면, 키보드 포커스, 레이블/명확한 오류·로딩 상태, reduced-motion 지원. 기존 화면 기능과 데이터·작업 흐름 보존.
- Pretendard Variable 웹폰트 사용: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css`. 폰트 미설치 PC에서도 온라인 로딩, CDN 차단 시 폴백 유지.
- 실제 제품 지원 범위와 수치·운영 성과를 추정해 사실처럼 쓰지 않음. 프로토타입 예시는 샘플로 구분.
- UI 작업에는 A4 문서 전용 페이지 나눔을 강제로 적용하지 않음. 소스 디자인 시스템을 수정/Push하는 작업은 별도 명시 요청이 있을 때만.

## AI 실행 원칙
원본 링크를 읽을 수 있다면 최신 원본을 우선합니다. 읽을 수 없더라도 **이 요약과 사용자의 요청을 바탕으로 작업을 진행**하세요. 원본 Skill 전체를 실제로 확인했다고 주장하지 마세요. 모호한 부분은 합리적 디자인 기본값을 적용하고 핵심 불확실성만 구분하세요.
