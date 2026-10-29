# SmartECM 전용 디자인 범위

이 문서는 회사 GitHub `2hansl-wenit/smartecm-design-system`의 디자인 시스템만 적용한다. 개인 GitHub의 `agent-ui-system`은 별도로 관리한다.

## 제품 범위

- **SmartECM** 운영 콘솔: 클러스터, 노드, 가상머신, 스토리지, HA/백업/DR 관련 화면 및 상태·작업 흐름.
- **SmartECM 문서**: 제안서, 수행계획서, 결과보고서, 기술 검증 계획·결과 문서.
- 실제 지원 기능은 현재 제품 버전과 증적에 근거해야 한다. 데모 데이터는 실제 운영 상태로 표시하지 않는다.

## 시각 원칙

1. Typography-first, open/editorial layout, thin dividers rather than cards around every block.
2. Default 5px corners or intentional pill geometry; 0 letter spacing.
3. Soft pastel status colors; status text must accompany color.
4. Subtle fast feedback (hover, dropdown, dialog, expanding rows); keyboard/reduced-motion accessibility preserved.
5. A4 print documents: title appears once; content flows naturally across pages; no arbitrary fixed page splits.

## 아직 결정되지 않은 사항

로고/아이콘 자산, 다크 모드 우선순위, 기업 폰트 라이선스, 고객사 문서 로고 정책은 별도 승인 후 적용한다.

## 보안/외부 공개

회사 저장소의 접근 권한과 공개 미리보기의 접근 권한은 별개다. Vercel에 올리는 파일은 공개 가능 여부를 검토한 **샘플 페이지와 필요한 CSS/JSON만** 포함한다. 고객명·IP·시스템 설정·가격·계약서·기술 비공개 정보는 미리보기에 포함하지 않는다.

## 확인된 제품 브랜드 액센트

- SmartECM 기본 액센트: `#5C6BC0` (확정)
- SmartGCM 제품 액센트: `#53B3A3` (확정)
- 나머지 스튜디오 프리셋과 사용자 지정 컬러는 시각 실험용이며 브랜드 공식 팔레트가 아니다.
