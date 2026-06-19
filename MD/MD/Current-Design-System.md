# Current Design System

## 1. Purpose

현재 개발 완료된 메인 페이지를 기준으로 현행 디자인 시스템 토큰을 정리한 문서입니다.

분석 대상: `index.html`, `css/reset.css`, `css/theme.css`, `css/common.css`, `css/home.css`, `css/about.css`, `css/center.css`, `skin-sol.html`, `css/skin-sol.css`

---

## 2. Important Context

이 프로젝트는 primitive-first 방식으로 설계된 디자인 시스템이 아닙니다.

현재 웹사이트는 semantic token을 기준으로 먼저 제작되었고,
primitive token은 이후 semantic 값을 정리하기 위해 역추적된 raw value layer입니다.

> **분석 우선순위:** Semantic Token → Component Usage → Primitive Token Reference

---

## 3. Token Architecture

```
Primitive Token  →  Semantic Token  →  Component Usage
(raw value)          (intent name)       (CSS selector)
```

- 현행 팔레트: **Gray · Brown · Violet · Amber · Gold · Teal · Social(Kakao)**
- CSS 파일 구조: `reset.css` (browser reset) → `theme.css` (tokens) → `common.css` (shared) → `[page].css` (page-specific)

---

## 4. OLD vs Current 구조 비교

| 항목            | OLD-Dev-Token                             | Current (site-0618-blue)                             |
| --------------- | ----------------------------------------- | ---------------------------------------------------- |
| 폰트            | Playfair Display + DM Sans                | Optima/Candara/Pretendard (단일 스택)                |
| 색상 팔레트     | Gray/Gold/Blue/Coral/Sage                 | Gray / Brown / Violet / Amber / Gold                 |
| Semantic naming | ShadCN 방식 (`--background`, `--primary`) | 카테고리 번호형 (`--text-gray-6`, `--border-gray-1`) |
| Gradient        | `--hero-gradient` (composed)              | `--accent-gradient` (CTA section 전용)               |

---

## 5. Current Semantic Tokens

### 5.1 Background

명시적 단색 배경 — 페이지·헤더·카드 등 solid bg

| Semantic Token | Primitive    | Actual Value | Usage                                    | 사용수 |
| -------------- | ------------ | ------------ | ---------------------------------------- | ------ |
| `--bg-white`   | `--white`    | #ffffff      | body, header, card, footer, gnb-overlay  | 35     |
| `--bg-gray`    | `--gray-150` | #e4e6ec      | accordion item 배경                      | 1      |
| `--bg-dark`    | `--gray-950` | #101219      | trust section, gnb-banner, top-btn hover | 16     |

### 5.2 Surface

섹션·컴포넌트 레벨 서피스

| Semantic Token     | Primitive    | Actual Value | Usage                                      | 사용수 |
| ------------------ | ------------ | ------------ | ------------------------------------------ | ------ |
| `--surface-gray-1` | `--gray-50`  | #f2f4f8      | section bg, booking tab, lang-option hover | 22     |
| `--surface-gray-2` | `--gray-200` | #dcdfe5      | compare\_\_col 일반 컬럼 배경              | 1      |
| `--surface-gray-3` | `--brown-50` | #f7f4f2      | center map-card 배경 (웜 크림)             | 1      |

### 5.3 Text

gray-1~7: 밝은(gray-300) → 어두운(gray-950) 순

| Semantic Token   | Primitive      | Actual Value | Usage                                            | 사용수 |
| ---------------- | -------------- | ------------ | ------------------------------------------------ | ------ |
| `--text-gray-1`  | `--gray-300`   | #b8bdc7      | 플레이스홀더, 비활성 아이콘                      | 3      |
| `--text-gray-2`  | `--gray-400`   | #949aa8      | 날짜, sub-head, gnb 서브                         | 26     |
| `--text-gray-3`  | `--gray-500`   | #6b7180      | 본문 기본                                        | 78     |
| `--text-gray-4`  | `--gray-600`   | #515767      | 본문 보조 (filter chip, footer links)            | 4      |
| `--text-gray-5`  | `--gray-700`   | #3d4352      | 폼 레이블 (login modal), why-journey desc        | 2      |
| `--text-gray-6`  | `--gray-900`   | #1a1e28      | 헤딩·강조 제목 전반                              | 142    |
| `--text-gray-7`  | `--gray-950`   | #101219      | 최강 강조 (모바일 헤더, login 제목)              | 25     |
| `--text-white`   | `--white`      | #ffffff      | 다크/컬러 배경 위 흰색 텍스트                    | 50     |
| `--text-caption`  | `--violet-500` | #3b33d9 | eyebrow, kicker, bk-label, booking tab underline | 45 |
| `--text-caption2` | `--gold-600`   | #9b7943 | .ihc__level (Inside Hugro 플로어 레이블)         | 1  |
| `--rating`        | `--amber-400`  | #d9ad3f | 별점 (review__star, treat-card__en)              | 4  |

### 5.4 Border

gray-1~4: 밝은(gray-200) → 어두운(gray-800) 순

| Semantic Token    | Primitive    | Actual Value | Usage                                  | 사용수 |
| ----------------- | ------------ | ------------ | -------------------------------------- | ------ |
| `--border-gray-1` | `--gray-200` | #dcdfe5      | 기본 구분선 (card, feature, gnb, 전반) | 94     |
| `--border-gray-2` | `--gray-300` | #b8bdc7      | 연한 구분선 (mobile gnb)               | 1      |
| `--border-gray-3` | `--gray-400` | #949aa8      | 중간 구분선 (footer top/bottom)        | 2      |
| `--border-gray-4` | `--gray-800` | #292e3d      | 강조 보더 (cnav-btn, filter chip)      | 7      |

### 5.5 Button

| Semantic Token    | Primitive      | Actual Value | Usage                                           | 사용수 |
| ----------------- | -------------- | ------------ | ----------------------------------------------- | ------ |
| `--btn-primary`   | `--gray-950`   | #101219      | .btn--solid, .btn--primary bg, filter.is-active | 7      |
| `--btn-secondary` | `--violet-600` | #2e26b5      | .btn--primary:hover 배경                        | 1      |

### 5.6 Accent

| Semantic Token      | Primitive      | Actual Value | Usage                                                            | 사용수 |
| ------------------- | -------------- | ------------ | ---------------------------------------------------------------- | ------ |
| `--accent-blue1`    | `--violet-500` | #3b33d9      | feature dots active, stay-card tags, acc-icon                    | 3      |
| `--accent-blue2`    | `--violet-700` | #2a2287      | accordion head bg, btn--primary2 bg, hiw icon, proc-sheet banner | 9      |
| `--accent-blue3`    | `--violet-800` | #1f1957      | compare**col--ours bg, footer**bottom, btn--primary2:hover       | 3      |
| `--accent-gradient` | violet-900→500 | gradient     | cta-dark 섹션 전체 배경                                          | 1      |

> `--text-caption`과 `--accent-blue1`는 동일값(violet-500).

### 5.7 Social Login

Kakao 소셜 로그인 전용. 사이트 브랜드 컬러 아님.

| Semantic Token     | Primitive        | Actual Value | Usage                         | 사용수 |
| ------------------ | ---------------- | ------------ | ----------------------------- | ------ |
| `--btn-kakao`      | `--kakao-yellow` | #fee500      | login-modal Kakao 버튼 배경   | —      |
| `--btn-kakao-text` | `--kakao-dark`   | #191919      | login-modal Kakao 버튼 텍스트 | —      |

### 5.8 Layout

| Token        | Value                    | Usage                           |
| ------------ | ------------------------ | ------------------------------- |
| `--maxw`     | 1920px                   | .wrap max-width                 |
| `--maxw-02`  | 1000px                   | 보조 max-width                  |
| `--gutter`   | clamp(16px, 1.6vw, 34px) | .wrap padding                   |
| `--header-h` | 92px                     | header height, hero padding-top |

---

## 6. Current Primitive Tokens

### 6.1 Gray Scale

| Primitive    | Value   | Semantic Reference                            | Direct CSS |
| ------------ | ------- | --------------------------------------------- | ---------- |
| `--white`    | #ffffff | `--bg-white`, `--text-white`                  | —          |
| `--gray-50`  | #f2f4f8 | `--surface-gray-1`                            | —          |
| `--gray-150` | #e4e6ec | `--bg-gray`                                   | —          |
| `--gray-200` | #dcdfe5 | `--border-gray-1`, `--surface-gray-2`         | —          |
| `--gray-300` | #b8bdc7 | `--border-gray-2`, `--text-gray-1`            | —          |
| `--gray-400` | #949aa8 | `--border-gray-3`, `--text-gray-2`            | —          |
| `--gray-500` | #6b7180 | `--text-gray-3`                               | —          |
| `--gray-600` | #515767 | `--text-gray-4`                               | —          |
| `--gray-700` | #3d4352 | `--text-gray-5`                               | —          |
| `--gray-800` | #292e3d | `--border-gray-4`                             | —          |
| `--gray-900` | #1a1e28 | `--text-gray-6`                               | —          |
| `--gray-950` | #101219 | `--bg-dark`, `--btn-primary`, `--text-gray-7` | —          |

### 6.2 Brown Scale

| Primitive                   | Value   | Semantic Reference | Direct CSS  |
| --------------------------- | ------- | ------------------ | ----------- |
| `--brown-50`                | #f7f4f2 | `--surface-gray-3` | —           |
| `--brown-100`~`--brown-900` | 전체    | —                  | — (Palette) |

### 6.3 Violet Scale

| Primitive                    | Value   | Semantic Reference                 | Direct CSS                                |
| ---------------------------- | ------- | ---------------------------------- | ----------------------------------------- |
| `--violet-50`~`--violet-200` | 전체    | —                                  | — (Palette)                               |
| `--violet-300`               | #8681e4 | —                                  | `about.css` `.guarantee-col__icon` (직접) |
| `--violet-400`               | #6861e0 | —                                  | — (Palette)                               |
| `--violet-500`               | #3b33d9 | `--text-caption`, `--accent-blue1` | —                                         |
| `--violet-600`               | #2e26b5 | `--btn-secondary`                  | —                                         |
| `--violet-700`               | #2a2287 | `--accent-blue2`                   | —                                         |
| `--violet-800`               | #1f1957 | `--accent-blue3`                   | —                                         |
| `--violet-900`               | #151132 | `--accent-gradient` (내부)         | —                                         |

> violet-300: `--accent-light` 삭제 후 직접 참조 1건 (about.css).

### 6.4 Amber Scale

| Primitive     | Value   | Semantic Reference | Direct CSS  |
| ------------- | ------- | ------------------ | ----------- |
| `--amber-400` | #d9ad3f | `--rating`         | —           |
| 나머지        | 전체    | —                  | — (Palette) |

### 6.5 Gold Scale

| Primitive    | Value   | Semantic Reference | Direct CSS                           |
| ------------ | ------- | ------------------ | ------------------------------------ |
| `--gold-600` | #9b7943 | —                  | `home.css` `.treat-highlight` (직접) |
| 나머지       | 전체    | —                  | — (Palette)                          |

> gold-600: `--text-gold` 삭제 후 직접 참조 1건 (home.css).

### 6.6 Teal Scale

| Primitive    | Value   | Semantic Reference | Direct CSS                              |
| ------------ | ------- | ------------------ | --------------------------------------- |
| `--teal-50`  | #e8f6f0 | —                  | common.css `.contact-popup__icon--phone` bg |
| `--teal-500` | #2e9b6a | —                  | common.css `.contact-popup__icon--phone` color |

> Teal: contact popup 전화 아이콘 전용. semantic 미배정 (단일 사용처).

### 6.7 Social (Kakao)

| Primitive        | Value   | Semantic Reference | Direct CSS |
| ---------------- | ------- | ------------------ | ---------- |
| `--kakao-yellow` | #fee500 | `--btn-kakao`      | —          |
| `--kakao-dark`   | #191919 | `--btn-kakao-text` | —          |

---

## 7. Semantic → Primitive Mapping (전체)

| Semantic Token      | Primitive        | Actual Hex |
| ------------------- | ---------------- | ---------- |
| `--bg-white`        | `--white`        | #ffffff    |
| `--bg-gray`         | `--gray-150`     | #e4e6ec    |
| `--bg-dark`         | `--gray-950`     | #101219    |
| `--surface-gray-1`  | `--gray-50`      | #f2f4f8    |
| `--surface-gray-2`  | `--gray-200`     | #dcdfe5    |
| `--surface-gray-3`  | `--brown-50`     | #f7f4f2    |
| `--text-gray-1`     | `--gray-300`     | #b8bdc7    |
| `--text-gray-2`     | `--gray-400`     | #949aa8    |
| `--text-gray-3`     | `--gray-500`     | #6b7180    |
| `--text-gray-4`     | `--gray-600`     | #515767    |
| `--text-gray-5`     | `--gray-700`     | #3d4352    |
| `--text-gray-6`     | `--gray-900`     | #1a1e28    |
| `--text-gray-7`     | `--gray-950`     | #101219    |
| `--text-white`      | `--white`        | #ffffff    |
| `--text-caption`    | `--violet-500`   | #3b33d9    |
| `--rating`          | `--amber-400`    | #d9ad3f    |
| `--border-gray-1`   | `--gray-200`     | #dcdfe5    |
| `--border-gray-2`   | `--gray-300`     | #b8bdc7    |
| `--border-gray-3`   | `--gray-400`     | #949aa8    |
| `--border-gray-4`   | `--gray-800`     | #292e3d    |
| `--btn-primary`     | `--gray-950`     | #101219    |
| `--btn-secondary`   | `--violet-600`   | #2e26b5    |
| `--accent-blue1`    | `--violet-500`   | #3b33d9    |
| `--accent-blue2`    | `--violet-700`   | #2a2287    |
| `--accent-blue3`    | `--violet-800`   | #1f1957    |
| `--accent-gradient` | violet-900→500   | gradient   |
| `--btn-kakao`       | `--kakao-yellow` | #fee500    |
| `--btn-kakao-text`  | `--kakao-dark`   | #191919    |

**Active Semantic Tokens: 28개**

---

## 8. Component Token Usage

### 8.1 Header

| 상태              | 사용 토큰                                        |
| ----------------- | ------------------------------------------------ |
| 투명 (스크롤 전)  | `--text-white`                                   |
| Solid (스크롤 후) | `--bg-white`, `--text-gray-6`, `--border-gray-1` |
| 모바일 헤더       | `--bg-white`, `--text-gray-7`                    |

### 8.2 Navigation (GNB)

| 컴포넌트           | 사용 토큰                                      |
| ------------------ | ---------------------------------------------- |
| GNB overlay (다크) | `--bg-dark`, `--text-white`, `--border-gray-1` |
| GNB mobile panel   | `--surface-gray-1`                             |
| GNB mobile h4      | `--text-gray-6`, `--border-gray-1`             |

**GNB 소개 메뉴 항목 (2026-06-19 기준)**

| 항목     | href         | 비고       |
| -------- | ------------ | ---------- |
| 회사소개 | about.html   | 구 KMEDITOUR |
| 휴그로센터 | center.html | —          |
| FAQ      | #            | 구 자주묻는질문 |

> "서비스 이용방법"·"문의하기" 삭제. "문의하기"는 플로팅 chat-btn 팝업으로 이동.

**GNB Banner 반응형 (common.css)**

| 속성 | 값 | 비고 |
|------|---|-----|
| `.gnb-banner` height | `clamp(200px, 22vh, 360px)` | 뷰포트 높이 기준 — 대형 모니터 비율 유지 |
| `.gnb-banners` margin-top | `clamp(40px, 6vh, 80px)` | `margin-top: auto` 대체 — 과도한 중간 여백 제거 |

### 8.3 Buttons

| 버튼                            | 배경              | 텍스트          | 호버                |
| ------------------------------- | ----------------- | --------------- | ------------------- |
| `.btn--solid` / `.btn--primary` | `--btn-primary`   | `--bg-white`    | 유지                |
| `.btn--primary:hover`           | `--btn-secondary` | `--text-white`  | —                   |
| `.btn--primary2`                | `--accent-blue2`  | `--bg-white`    | `--accent-blue3`    |
| outline                         | transparent       | `--text-gray-6` | bg: `--text-gray-6` |

### 8.4 Services Accordion (`.acc`)

home.css `#services` 섹션의 뷰티/메디컬/트래블 서비스 아코디언. (구 why-us 아코디언 `.why-acc`는 제거됨)

| 요소      | 사용 토큰                        |
| --------- | -------------------------------- |
| 기본 배경 | `--bg-gray`                      |
| 헤더      | `--bg-white`, `--text-gray-6`    |
| 열림 헤더 | `--accent-blue2`, `--text-white` |
| 아이콘    | `--accent-blue1`                 |

### 8.5 Why Journey 5-col Grid (`.why-journey`)

why-us 섹션의 5컬럼 아이콘+텍스트 그리드 (아코디언에서 교체됨).

| 요소        | 사용 토큰 / 직접 참조      |
| ----------- | -------------------------- |
| 카드 배경   | `--bg-white`               |
| 구분선      | `--border-gray-1`          |
| 아이콘 원   | `var(--violet-600)` (직접) |
| 메인 라벨   | `--text-gray-6`            |
| 서브 타이틀 | `var(--violet-600)` (직접) |
| 본문 설명   | `--text-gray-5`            |

### 8.5 Compare (Why Us)

| 요소        | 사용 토큰          |
| ----------- | ------------------ |
| 일반 컬럼   | `--surface-gray-2` |
| 우리 컬럼   | `--accent-blue3`   |
| c-highlight | `--accent-blue2`   |

### 8.6 Trust / CTA / Footer

| 섹션          | 배경                | 텍스트           |
| ------------- | ------------------- | ---------------- |
| Trust         | `--bg-dark`         | `--text-white`   |
| CTA Dark      | `--accent-gradient` | `--text-white`   |
| Footer        | `--bg-white`        | `--text-gray-6`  |
| Footer bottom | —                   | `--accent-blue3` |

### 8.7 Mobile Bar

| 요소 | 사용 토큰                                |
| ---- | ---------------------------------------- |
| 배경 | `--bg-dark`                              |
| 버튼 | `rgba(255,255,255,0.6)` / `--text-white` |

### 8.8 Skip Link (`.skip-link`)

common.css에 정의. 키보드 사용자가 내비게이션을 건너뛰고 본문으로 바로 이동.

| 상태 | 동작 |
|-----|-----|
| 기본 | `position: absolute; top: -100%` (화면 밖에 숨김) |
| `:focus` | `top: 0` (화면 상단에 표시) |
| 색상 | `--bg-dark` 배경, `--text-white` 텍스트 |

모든 페이지 `<body>` 최상단에 배치:

```html
<a class="skip-link" href="#main-content">본문으로 이동</a>
```

대상 `<main id="main-content">` 은 header/gnb-overlay/proc-sheet 다음, footer 앞에 위치.

### 8.9 Contact Popup + Chat Button (`common.css` · `js/contact-popup.js`)

모든 페이지 공통. `js/contact-popup.js`가 `<body>` 끝에 HTML을 주입한다.

| 요소                          | 사용 토큰                                   | 비고                                          |
| ----------------------------- | ------------------------------------------- | --------------------------------------------- |
| `.chat-btn` (기본)            | `--bg-white`, `--bg-dark`, `--shadow-btn`   | 플로팅 원형 버튼                              |
| `.chat-btn:hover`             | `--surface-gray-1`                          | —                                             |
| `.chat-btn.is-open`           | `--btn-secondary`, `--text-white`           | violet-600 → semantic                         |
| `.chat-btn.is-open:hover`     | `--accent-blue3`                            | violet-800 → semantic                         |
| `.contact-popup__card`        | `--bg-white`, `--shadow-card`               | border-radius: 8px (하드코딩)                 |
| `.contact-popup__head`        | padding tokens                              | —                                             |
| `.contact-popup__title`       | `--text-gray-6`                             | —                                             |
| `.contact-popup__sub`         | `--text-gray-5`                             | —                                             |
| `.contact-popup__close:hover` | `--surface-gray-1`, `--text-gray-6`        | border: 2px solid `--text-gray-6`             |
| `.contact-popup__divider`     | `--border-gray-1`                           | —                                             |
| `.contact-popup__item:hover`  | `--surface-gray-1`                          | 100% 너비 hover                               |
| `.contact-popup__icon--email` | `--violet-50`(직접), `--accent-blue1`       | violet-50 semantic 미배정                     |
| `.contact-popup__icon--phone` | `--teal-50`(직접), `--teal-500`(직접)       | teal primitive 전용                           |
| `.contact-popup__item-label`  | `--text-gray-5`                             | —                                             |
| `.contact-popup__item-value`  | `--text-gray-6`                             | —                                             |
| `.contact-popup__item-hint`   | `--text-gray-4`                             | —                                             |
| `.contact-popup__login-btn`   | `--accent-blue3`, `--text-white`            | 로그인 후 문의하기                            |
| `.contact-popup__copy-btn`    | `--accent-blue1`, border `--accent-blue1`   | 이메일 주소 복사 버튼                         |
| `.contact-popup__copy-btn.is-copied` | `--teal-500`, `--teal-50`           | 복사 완료 상태                                |

**반응형:**
- 데스크탑: `bottom: var(--space-24)`, `right: var(--space-20)`, width: 360px
- 모바일(≤860px): 모바일 바 위로 올라감, `width: calc(100vw - var(--space-32))`

### 8.10 Personal Skin Solution 카드 패턴 (`skin-sol.css`)

결과 화면 카드 통일 원칙: **1px solid `--border-gray-1`**, **`border-radius: 2px`** (flat editorial).

| 카드 | 배경 | Border | Radius |
|-----|------|--------|--------|
| `.pss-category` (퀴즈 카테고리) | `--bg-white` | `1px solid --border-gray-1` | `4px` |
| `.pss-ai-card` (AI 코멘트) | `--surface-gray-1` | `1px solid --border-gray-1` | `2px` |
| `.pss-ingredient-card` (성분) | `--bg-white` | `1px solid --border-gray-1` | `2px` |
| `.pss-product-card__img` (제품 이미지) | `--surface-gray-1` | — | `2px` |
| `.pss-cta` (CTA 카드) | `--surface-gray-1` | `1px solid --border-gray-1` | `2px` |

> 카테고리 카드는 `border-radius: 4px` (퀴즈 선택 UX 강조), 결과 카드는 `2px` (에디토리얼 flat).

---

## 9. Direct Primitive Usage (의도적)

semantic token 없이 primitive를 직접 참조하는 항목.

| Primitive      | 파일                  | 위치                                              | 사유                                           |
| -------------- | --------------------- | ------------------------------------------------- | ---------------------------------------------- |
| `--violet-300` | about.css             | `.guarantee-col__icon`                            | `--accent-light` 삭제 후 직접 유지             |
| `--gold-600`   | home.css              | `.treat-highlight`                                | `--text-gold` 삭제 후 직접 유지                |
| `--violet-600` | home.css              | `.why-journey__icon-wrap`                         | 아이콘 원 배경 — semantic 없는 midtone violet  |
| `--violet-600` | home.css              | `.why-journey__icon-sub`                          | 서브타이틀 컬러 — semantic 없는 midtone violet |
| `--violet-300` | skin-sol.css | `.pss-hero__eyebrow`                              | 히어로 eyebrow 강조색 — semantic 미배정        |
| `--violet-50`  | skin-sol.css | hover bg, step active bg, 결과 배지 bg 다수       | 연한 바이올렛 hover/active 배경 — semantic 미배정 |
| `--violet-50`  | common.css            | `.contact-popup__icon--email` bg                  | 이메일 아이콘 연보라 배경 — semantic 미배정    |
| `--violet-100` | skin-sol.css | 성분 카드 배지 bg                                  | 한 단계 진한 연보라 배지 — semantic 미배정     |
| `--violet-500` | skin-sol.css | 결과 배지 color 다수                              | `--accent-blue1`과 동일값, 배지 전용 짧은 표기 |
| `--violet-600` | skin-sol.css | 결과 배지 color, 성분 카드 배지 color             | midtone violet — semantic 미배정               |
| `--amber-400`  | skin-sol.css | 퀴즈·결과 별점                                    | `--rating`과 동일값 (재사용)                   |
| `--amber-500`  | skin-sol.css | 결과 배지 color                                   | midtone amber — semantic 미배정                |
| `--amber-600`  | skin-sol.css | 결과 배지 bg                                      | `--text-caption2`와 동일값, 배지 bg 전용       |
| `--teal-50`    | common.css            | `.contact-popup__icon--phone` bg                  | 전화 아이콘 민트 배경 — 단일 사용처, semantic 미배정 |
| `--teal-500`   | common.css            | `.contact-popup__icon--phone` color               | 전화 아이콘 민트 색상 — 단일 사용처, semantic 미배정 |

---

## 10. Hard-coded Values (의도된 값 · 토큰화 불필요)

| 값                             | 위치                                             | 용도                       |
| ------------------------------ | ------------------------------------------------ | -------------------------- |
| `rgba(0,0,0,0.4)`              | hero overlay (데스크탑)                          | 이미지 위 오버레이         |
| `rgba(255,255,255,0.92)`       | hero desc                                        | 반투명 텍스트              |
| `rgba(255,255,255,0.78)`       | compare ours list                                | 다크 bg 위 반투명          |
| `rgba(0,0,0,0.45)`             | hero counter                                     | 슬라이드 카운터 bg         |
| `linear-gradient(...)`         | stay-card, mem-card, follow-card                 | 이미지 그라디언트          |
| `29px`, `14.5px`, `13.5px`     | brand, col-card, footer                          | 특수 px 폰트               |
| `rgba(255,255,255,0.65)`       | skin-sol.css `.pss-hero__desc`          | 다크 hero 위 반투명 텍스트 |
| `rgba(59,51,217,0.08~0.2)`     | skin-sol.css option hover, step active  | focus ring shadow (투명도 변형) |
| 하드코딩 배지 hex (`#e8eafb` 등) | skin-sol.css `.pss-icon--*`             | 피부 결과 배지 12종 개별 색상 — 의미적 고유값 |

---

## 11. SEO / OG Meta Structure (2026-06-19)

전 페이지 공통 패턴. `<head>` 내 `<title>` 다음에 위치.

### 필수 태그

```html
<meta name="description" content="..." />
<meta name="keywords" content="..." />
```

### Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://kmeditour.com/[page].html" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://kmeditour.com/assets/og/og-[page].jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="ko_KR" />
<meta property="og:site_name" content="KMEDITOUR" />
```

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://kmeditour.com/assets/og/og-[page].jpg" />
```

### OG 이미지 경로 (예정)

| 페이지 | 경로 |
|-------|-----|
| 홈 (index.html) | `assets/og/og-home.jpg` |
| About | `assets/og/og-about.jpg` |
| Center | `assets/og/og-center.jpg` |

이미지 규격: 1200×630px, JPEG. 실제 파일은 별도 제작 필요.

### 키워드 전략

- 공통 키워드: `프리미엄 컨시어지 인 코리아`, `Premium Concierge in Korea`, `KMEDITOUR`
- 페이지별 추가: Center는 `휴그로 센터`, `압구정 피부과` / About은 `한국 의료관광 회사` 등

---

## 12. Web Accessibility Conventions (2026-06-19)

색상·폰트 제외. WCAG 2.1 AA 기준.

| 규칙 | 구현 방법 |
|-----|---------|
| **Skip Navigation** | `<a class="skip-link" href="#main-content">` body 첫 번째 자식 |
| **Main Landmark** | `<main id="main-content">` — header/gnb/proc-sheet 이후, footer 이전 |
| **GNB Overlay** | `role="dialog" aria-modal="true" aria-label="사이트 내비게이션" aria-hidden="true"` |
| **GNB Overlay JS** | 열기 시 `aria-hidden="false"` + closeBtn.focus(); 닫기 시 `aria-hidden="true"` |
| **Accordion** | `acc-head`에 `aria-expanded` — JS `setAcc()`에서 동기화 |
| **Lang Select** | `lang-select__btn`에 `aria-expanded aria-haspopup="listbox"` — JS에서 토글 |
| **장식용 SVG** | `aria-hidden="true"` — gnb-chevron, lang-chevron 등 |
| **구분자 span** | `.util-sep`에 `aria-hidden="true"` |
| **dl 구조** | `dt/dd`는 반드시 `<dl>` 자식으로. `<div>` wrap 허용 (HTML5 ✓) |
| **캐러셀 도트** | `<div>` → `<button>` + `aria-label="슬라이드 N 보기"` + `aria-current` JS 토글 |
| **리뷰 별점** | `.review__stars`에 `role="img" aria-label="별점 5점 만점"` + 개별 `★`에 `aria-hidden="true"` |
| **이모지 국기** | 이모지 대신 `<img src="...flag.svg" alt="KR" />` 사용 |
| **Login Modal** | `role="dialog" aria-modal="true" aria-label="로그인" aria-hidden` (기존 구현 ✓) |

---

## 13. Final Rules

1. Semantic token이 Source of Truth. Primitive는 참조값.
2. CSS 파일에서 primitive 직접 참조는 허용하지 않음 (예외: 삭제된 semantic 대체 2건, why-journey 전용 midtone violet 2건).
3. rgba 투명도·이미지 오버레이는 토큰화 대상 아님.
4. 새 색상 추가 시 primitive → semantic 순서로 theme.css에 먼저 정의.

---

**변경 이력:**

- **2026-06-19 (Contact Popup · GNB 정리 · CSS 연결 보완)**: `js/contact-popup.js` 신규 (모든 페이지 플로팅 문의 버튼 + 팝업 공통 주입). GNB 소개 항목 변경: "KMEDITOUR" → "회사소개", "서비스 이용방법"·"문의하기" 삭제, "자주묻는질문" → "FAQ", 상단 유틸 바 화살표 제거. `common.css`: `.chat-btn.is-open` `--violet-600`→`--btn-secondary`, `.chat-btn.is-open:hover` `--violet-800`→`--accent-blue3`, `.contact-popup__close:hover` `--gray-900`→`--text-gray-6` (primitive 직접 참조 3건 semantic으로 교체). Palette에 **Teal** 추가 (`--teal-50`, `--teal-500`) — contact popup 전화 아이콘 전용. Section 6.6 Teal Scale 신설. Section 8.9 Contact Popup 컴포넌트 표 신설. Section 9 Direct Primitive: `--violet-50` (common.css 이메일 아이콘), `--teal-50/500` (common.css 전화 아이콘) 3건 추가 → **총 15건**. MASTER_CONTEXT JS 파일 목록에 `contact-popup.js` 추가.
- **2026-06-19 (Personal Skin Solution 페이지 신규)**: `skin-sol.html` + `css/skin-sol.css` 추가. 분석 대상 확장. Section 9 Direct Primitive: `--violet-50/100/300/500/600`, `--amber-400/500/600` skin-sol.css 전용 항목 추가 (배지·hover·step active bg/color, semantic 미배정). Section 10 Hard-coded Values: 히어로 반투명 white, focus ring rgba, 결과 배지 hex 12종 추가.
- **2026-06-19 (--text-caption2 신규 토큰)**: theme.css — `--text-caption2: var(--gold-600)` (#9b7943, 브론즈 골드) 추가. center.css `.ihc__level`에 적용 (플로어 레이블 골드 색상). **Active Semantic: 30개.**
- **2026-06-19 (Inside Hugro 캐러셀)**: center.html — `floors-grid` (전체 너비 3열 그리드) 제거 → `.ihc` 캐러셀로 교체 (article-col 내부). 탭 버튼(`.ihc__tab`) `.filter` 버튼과 동일 스타일 적용, 사진 위쪽 가운데 정렬. 화살표(`.ihc__arrow`) 이미지 바깥 양쪽 원형 44px. 이미지 aspect-ratio 4/3, opacity fade 전환. center.css: `.ihc` 컴포넌트 전체 신규 추가. design-system.html: "Inside Hugro Carousel" 컴포넌트 섹션 추가.
- **2026-06-19 (웹접근성 + SEO/OG)**: 전 페이지 스킵 내비·`<main>` 랜드마크·GNB overlay aria-hidden 추가. 아코디언 aria-expanded JS 동기화. lang-select aria-expanded + 드롭다운 JS 개선. about.html 이모지 플래그 → img 교체. 리뷰 별점 aria 처리. center.html dl 구조 수정, 캐러셀 dot → button. 전 페이지 SEO description/OG/Twitter Card 메타 추가. `.skip-link` common.css 추가. Section 11(SEO/OG) · Section 12(접근성 컨벤션) 신설.
- **2026-06-18 (Blue 제거)**: Blue scale 제거. Accent violet 통일.
- **2026-06-18 (CSS 폴더 분리)**: styles.css → css/common.css + page CSS. js/ 폴더 신설.
- **2026-06-18 (Token Audit)**: Semantic 36개로 확장. 전 CSS 파일 direct primitive 0건.
- **2026-06-18 (Token Cleanup)**: 중복/저사용 삭제 (text-body3, text-subtle2, text-link, text-gold, border-warm, accent, accent-light). 번호형 명명 체계 전환 (text-gray-1~7, border-gray-1~4, surface-gray-1~3). Background/Surface 카테고리 분리. Button 카테고리 신설 (btn-primary, btn-secondary). Accent 정리 (mid, dark1, dark2, gradient). text-inverse → text-white. **Active Semantic: 28개.**
- **2026-06-18 (Why-Us 개편)**: why-us 아코디언(`.why-acc`) 제거 → 5-col 카드 그리드로 교체. `--violet-600` direct primitive 2건 신규 (`.why-journey__icon-wrap` bg, `.why-journey__icon-sub` color). `--text-gray-5` 사용처 +1 (icon-desc). **Direct Primitive: 2건 → 4건.**
- **2026-06-18 (reset.css 신설)**: 브라우저 리셋 규칙을 common.css에서 분리 → `css/reset.css` 생성. 로드 순서: reset → theme → common → page. 중복 제거: `.login-modal__input` box-sizing, `.proc-sheet__list` list-style/margin, `.why-journey__icons` list-style/padding/margin.
- **2026-06-18 (Token Rename ×2)**: `--btn-cta` → `--btn-secondary`. `--accent-mid` → `--accent-blue1`, `--accent-dark1` → `--accent-blue2`, `--accent-dark2` → `--accent-blue3`. theme.css, common.css, home.css, about.css 전체 반영.
