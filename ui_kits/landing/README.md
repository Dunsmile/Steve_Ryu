# AI BX 부트캠프 — 랜딩페이지 UI 키트

오즈코딩스쿨 신규 부트캠프 모집 랜딩페이지의 UI 컴포넌트 모음입니다. 각 컴포넌트는 단일 책임으로 분리되어 있고, `index.html`에서 조립되어 풀 랜딩페이지를 인터랙티브하게 보여줍니다.

## 파일

| 파일 | 역할 |
|---|---|
| `index.html` | 풀 랜딩페이지 인터랙티브 데모 (11 섹션) |
| `Nav.jsx` | 고정 상단 내비 (스크롤 시 블러) |
| `Hero.jsx` | 공식 헤드라인 + 카운트업 + Primary CTA |
| `PainSection.jsx` | PD vs BX vs CD 직무 비교 (Wake-up call) |
| `SalaryComparison.jsx` | 3,650만원 평균 + 채용 우선 검토 비율 차트 |
| `Curriculum.jsx` | **11단계 90일 트랙** — 단계별 산출물·챕터·도구 |
| `ChapterHooks.jsx` | 데일리 챕터 타이틀 9개 미리보기 |
| `ToolStack.jsx` | AI · Design · Research · Data · Web 도구 스택 |
| `Mentors.jsx` | 멘토진 카드 그리드 |
| `BenefitGrid.jsx` | 9가지 혜택 stat 카드 (M1 Pro · 도서 · AI 풀스택 등) |
| `FAQ.jsx` | 펼침형 아코디언 |
| `ApplyCTA.jsx` | 풀블리드 신청 폼 |
| `Footer.jsx` | 회사 정보 + 약관 |

## 컴포넌트 사용법

모든 컴포넌트는 `window.AIBXKit.<Component>` 로 노출되며 React 18 + Babel 환경에서 `<script type="text/babel">` 로 로드합니다. `colors_and_type.css` 가 부모 디렉토리에서 import되어야 합니다.

## 미확보 자산

- 오즈코딩스쿨 / 멘토 회사 로고 → 워드마크/이니셜로 대체
- 멘토 프로필 사진 → 그라데이션 아바타
- 실제 포트폴리오 작품 이미지 → 색상 블록 placeholder
