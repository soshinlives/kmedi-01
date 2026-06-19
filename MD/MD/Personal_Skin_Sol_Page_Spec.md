# Personal_Skin_Sol_Page_Spec.md

# 퍼스널 스킨 솔루션 페이지 구현 스펙

---

# 현재 구현 상태 (2026-06-19 기준)

파일: `skin-sol.html`, `css/reset.css`, `css/theme.css`, `css/common.css` (공유), `css/skin-sol.css`

---

## 페이지 개요

| 항목 | 내용 |
|-----|------|
| 페이지명 | 퍼스널 스킨 솔루션 (Personal Skin Solution) |
| URL | `skin-sol.html` |
| 타이틀 | 나의 피부 타입 찾기 — 퍼스널 스킨 솔루션 \| KMEDITOUR |
| 목적 | 4가지 피부 특성 선택 → AI 피부 타입 분석 → 맞춤 솔루션 제공 |
| GNB 진입점 | 서비스 > 뷰티 컨시어지 > 퍼스널 스킨 솔루션, GNB 배너 (Skin Solution) |

---

## 섹션 구조

| 섹션 | HTML 요소 | 설명 |
|-----|----------|------|
| Hero | `section.pss-hero` | 다크 배경 (--gray-950), eyebrow + 타이틀 + 설명 |
| Sol-Nav | `div.pss-sol-nav` | 회색 배경 (--surface-gray-1), 탭 · 브레드크럼 · 단계 표시 |
| Quiz | `section.pss-quiz.section--surface` | 좌우 슬라이더 (4 슬라이드), 카테고리 카드 + 옵션 |
| Result | `section.pss-result#pssResult` | 분석 결과 영역 (초기 hidden, JS로 노출) |

---

## Hero 섹션 (`.pss-hero`)

| 요소 | 클래스 | 스타일 |
|-----|--------|--------|
| 배경 | `.pss-hero` | `background: var(--gray-950)` |
| Eyebrow | `.eyebrow.pss-hero__eyebrow` | `color: var(--violet-300)` (다크 배경 전용 override) |
| 제목 | `.pss-hero__title` | `font-size: var(--text-46)`, `color: var(--text-white)`, `font-weight: 600` |
| 설명 | `.pss-hero__desc` | `color: rgba(255, 255, 255, 0.65)`, `font-size: var(--text-16)`, `line-height: 1.85` |
| 상단 여백 | | `clamp(120px, 14vw, 180px)` — 헤더 높이 포함 |

---

## Sol-Nav (`.pss-sol-nav`)

### 솔루션 탭 (`.pss-sol-tabs`)

- Pill 형태 탭 그룹: 흰 배경 + `--border-gray-1` 테두리 + `--radius-pill`
- Active 탭 (`.is-active`): `--gray-950` 배경, 흰 텍스트
- 아이콘 + 텍스트 조합: 스킨 솔루션(sparkle), 헤어 솔루션(wave)
- `role="tablist"` + `aria-selected` 적용

### 브레드크럼 (`.pss-breadcrumb`)

- `font-size: var(--text-12)`, `color: var(--text-gray-2)`
- Active 페이지: `[aria-current="page"]` → `--text-gray-5`, `font-weight: 500`
- JS로 탭 전환 시 `id="pss-breadcrumb-current"` 텍스트 업데이트

### 단계 표시 (`.pss-steps`)

| 요소 | 클래스 | 스타일 |
|-----|--------|--------|
| 원 | `.pss-step__num` | `36×36px`, `--radius-full`, `1px solid --border-gray-1` |
| 연결선 | `.pss-step__sep` | `clamp(40px, 6vw, 80px) × 1.5px`, `--border-gray-1` |
| 현재 단계 (`.is-active`) | | 테두리 `--accent-blue1`, 글자 `--accent-blue1`, 배경 `--violet-50`, shadow `rgba(59,51,217,0.12)` |
| 완료 단계 (`.is-done`) | | 배경 `--accent-blue1`, 글자 `--text-white` |
| 완료+현재 (`is-done.is-active`) | | 완료 상태 우선, shadow 진하게 `rgba(59,51,217,0.2)` |

---

## Quiz 섹션

### 슬라이더 구조

```
.pss-quiz-outer                        ← max-width: calc(var(--maxw-02) + 120px), margin: auto
  .pss-quiz-arrow--prev               ← 좌측 화살표 (초기 disabled)
  .pss-quiz-viewport                  ← overflow: hidden
    .pss-quiz-track                   ← display: flex, transform 슬라이드
      .pss-quiz-slide × 4             ← flex: 0 0 100%
  .pss-quiz-arrow--next               ← 우측 화살표
```

### 화살표 버튼 (`.pss-quiz-arrow`)

| 속성 | 값 |
|-----|---|
| 크기 | `40×40px`, `--radius-full` |
| 테두리 | `1.5px solid --border-gray-1` |
| 배경 | `--bg-white` |
| Hover | 테두리/글자 `--accent-blue1` |
| Disabled | `opacity: 0.3`, 클릭 불가 |

### 4개 슬라이드

| 슬라이드 | ID | 항목 |
|---------|-----|------|
| 1 | `cat-moisture` | 수분 (건성/지성) |
| 2 | `cat-pigment` | 색소 (색소침착/균일) |
| 3 | `cat-elastic` | 탄력 (탄력성/주름성) |
| 4 | `cat-sensitive` | 민감도 (민감성/저항성) |

### 카테고리 카드 (`.pss-category`)

| 속성 | 값 |
|-----|---|
| 배경 | `--bg-white` |
| 테두리 | `1px solid var(--border-gray-1)` |
| Border-radius | `4px` |
| 패딩 | `clamp(28px, 4vw, 44px)` |
| 답변 완료 (`.is-answered`) | 테두리 `--accent-blue1` |

### 옵션 카드 (`.pss-option__card`)

| 속성 | 값 |
|-----|---|
| 배경 | `--bg-white` |
| 테두리 | `1px solid var(--border-gray-2)` |
| Border-radius | `var(--radius-base)` |
| 선택 시 | 테두리 `--accent-blue1`, 배경 `var(--violet-50)` |
| Hover | 배경 `var(--violet-50)`, shadow `rgba(59,51,217,0.08)` |

### 옵션 아이콘 배지 (`.pss-icon--*`)

피부 특성별 색상 개별 하드코딩:

| 클래스 | 배경 | 아이콘 색 |
|-------|------|---------|
| `pss-icon--blue` | `var(--violet-50)` | `var(--violet-600)` |
| `pss-icon--amber` | `#fbf3d1` | `var(--amber-500)` |
| `pss-icon--rose` | `#fde8ed` | `#be123c` |
| `pss-icon--green` | `#e7f7ed` | `#15803d` |
| `pss-icon--teal` | `#e0f2f1` | `#0f766e` |

### 분석 버튼 (`.pss-analyze__btn`)

- 초기: `opacity: 0.4`, `pointer-events: none`
- 4항목 완료 시 (`.is-ready`): `opacity: 1`, 활성화
- 클릭 시 Result 섹션 노출

---

## Result 섹션

### 결과 헤더 (`.pss-result__header`)

| 요소 | 클래스 | 스타일 |
|-----|--------|--------|
| 레이블 | `.pss-result__label` | `"분석 완료"`, uppercase, `letter-spacing: 0.18em`, `--text-caption` |
| 코드 | `.pss-result__code` | `clamp(52px, 8vw, 88px)`, `font-weight: 700`, `--text-gray-6` |
| 한글 설명 | `.pss-result__kr` | `var(--text-16)`, `--text-gray-3` |
| 배지 그룹 | `.pss-result__badges` | flex wrap, gap `--space-8` |

### 피부 타입 배지 (`.pss-badge`)

각 피부 특성별 개별 색상 (`border-radius: var(--radius-pill)`):

| 코드 | 타입 | 배경 | 글자색 |
|-----|------|------|-------|
| `O` | 지성 | `#fbf3d1` | `var(--amber-600)` |
| `D` | 건성 | `var(--violet-50)` | `var(--violet-600)` |
| `S` | 민감성 | `#fde8ed` | `#be123c` |
| `R` | 저항성 | `#e7f7ed` | `#15803d` |
| `P` | 색소침착 | `#f3e8ff` | `#7e22ce` |
| `N` | 균일 | `#e0f2f1` | `#0f766e` |
| `W` | 주름성 | `var(--gray-50)` | `var(--gray-600)` |
| `F` | 탄력성 | `#e7f7ed` | `#15803d` |

> 총 8코드, 4축(수분/색소/탄력/민감도) × 2옵션

### AI 코멘트 카드 (`.pss-ai-card`)

| 속성 | 값 |
|-----|---|
| 배경 | `var(--surface-gray-1)` |
| 테두리 | `1px solid var(--border-gray-1)` |
| Border-radius | `2px` |
| 패딩 | `clamp(28px, 4vw, 40px)` |
| 헤더 아이콘 | 별 SVG, `color: var(--amber-400)` |

### 추천 성분 그리드 (`.pss-ingredients-grid`)

| 속성 | 값 |
|-----|---|
| 그리드 | `repeat(3, 1fr)`, gap `--space-16` |
| 카드 (`.pss-ingredient-card`) | `1px solid --border-gray-1`, `border-radius: 2px` |
| 배지 아이콘 (`.pss-ingredient-card__icon`) | `36×36px`, `border-radius: 8px`, 배경 `--violet-50` |
| PPM 배지 (`.pss-ingredient-card__ppm`) | 배경 `--violet-50`, `--text-caption` 색상, pill |

### 추천 제품 그리드 (`.pss-products-grid`)

| 속성 | 값 |
|-----|---|
| 그리드 | `repeat(3, 1fr)`, gap `--space-24` |
| 이미지 박스 (`.pss-product-card__img`) | `border-radius: 2px`, `aspect-ratio: 1/1`, `--surface-gray-1` 배경 |
| 호버 | 이미지 `scale(1.04)` |
| 태그 (`.pss-product-tag--blue`) | 배경 `--violet-100`, 글자 `--violet-600` |
| 가격 (`.pss-product-card__price`) | `var(--text-caption)` — violet-500 |

### CTA 카드 (`.pss-cta`)

| 속성 | 값 |
|-----|---|
| 배경 | `var(--surface-gray-1)` |
| 테두리 | `1px solid var(--border-gray-1)` |
| Border-radius | `2px` |
| 내부 레이아웃 | flex row: 아이콘 + 텍스트 + CTA 버튼 |
| 링크 | `center.html` (휴그로센터로 연결) |

### 초기화 버튼 (`.pss-reset__btn`)

- `border: 1px solid --border-gray-2`, `border-radius: var(--radius-pill)`
- Hover: 테두리 `--border-gray-4`, 글자 `--text-gray-6`

---

## Result 섹션 진입 애니메이션

```css
@keyframes pssSlideIn {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: none; }
}
/* duration: 0.6s, easing: cubic-bezier(0.2, 0.7, 0.2, 1) */
```

---

## CSS 결과 카드 Border 규칙 (2026-06-19 확정)

| 카드 | Border | Border-radius |
|-----|--------|--------------|
| `.pss-category` (퀴즈 카테고리) | `1px solid --border-gray-1` | `4px` |
| `.pss-ai-card` (AI 코멘트) | `1px solid --border-gray-1` | `2px` |
| `.pss-ingredient-card` (성분) | `1px solid --border-gray-1` | `2px` |
| `.pss-product-card__img` (제품 이미지) | 없음 (bg만) | `2px` |
| `.pss-cta` (CTA 카드) | `1px solid --border-gray-1` | `2px` |

> **변경 이력**: dashed 2px → solid 2px → solid 1px (dd037a8 최종)
> 결과 화면 카드 통일 원칙: `1px solid`, `border-radius: 2px` (flat editorial 스타일)

---

## JS 로직 요약

| 기능 | 변수/함수 | 동작 |
|-----|---------|------|
| 슬라이더 | `pssQuizPrev/Next` | transform translateX(-N×100%) |
| 단계 표시 | `updateSteps(idx)` | `.is-active`, `.is-done` 토글 |
| 옵션 선택 | `pss-option__input` change | 카테고리 `.is-answered` 토글 |
| 분석 버튼 | `analyzeBtn` | 4항목 모두 선택 시 `.is-ready` |
| 결과 표시 | `showResult()` | `#pssResult` → `display:block`, `is-visible` |
| 결과 생성 | `SKIN_TYPES[code]` | 16가지 조합 코드 → 타입명/코멘트/성분/제품 |

---

## 반응형

| 브레이크포인트 | 변경 내용 |
|-------------|---------|
| `≤ 860px` | hero 상단 여백 축소, 성분 그리드 1열, 제품 그리드 2열, CTA 세로 스택 |
| `≤ 600px` | 옵션 카드 1열, 카드 레이아웃 가로(flex row) 전환 |

---

## 웹 접근성

| 구분 | 적용 내용 |
|-----|---------|
| 스킵 내비 | `<a class="skip-link" href="#main-content">본문으로 이동</a>` |
| 메인 | `<main id="main-content">` |
| 탭 그룹 | `role="tablist"`, `aria-selected`, `role="tab"` |
| 브레드크럼 | `<nav aria-label="현재 위치">`, `aria-current="page"` |
| 단계 표시 | `aria-label="진행 단계"` |
| 화살표 | `aria-label="이전/다음 단계"`, disabled 속성 |
| 결과 | `aria-hidden="true"` (초기), `aria-live="polite"` |
| GNB | `role="dialog"`, `aria-modal`, `aria-hidden` 토글 |

---

## 스펙 대비 변경 사항

- **헤어 솔루션 탭**: UI 구현됨 (탭 버튼 존재). 실제 컨텐츠 미구현 — placeholder 상태.
- **16가지 피부 조합**: JS `SKIN_TYPES` 객체로 하드코딩. 실제 DB 연동 없음.
- **제품 추천**: 더미 데이터 (img placeholder). 실제 상품 연동 미구현.
- **GNB 배너**: 퍼스널 스킨 솔루션 배너 추가 (`gnb-banner--skin`).
