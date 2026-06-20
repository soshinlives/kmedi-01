# Current Design System

## 1. Purpose

현재 개발 완료된 메인 페이지를 기준으로 현행 디자인 시스템 토큰을 정리한 문서입니다.

분석 대상: `index.html`, `css/reset.css`, `css/theme.css`, `css/common.css`, `css/home.css`, `css/about.css`, `css/center.css`, `skin-sol.html`, `css/skin-sol.css`, `cosmetic.html`, `css/cosmetic.css`, `product.html`, `css/product.css`

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
- CSS 파일 구조: `reset.css` → `theme.css` → `common.css` → `css/components/*.css` → `[page].css`

### CSS Components 파일 (`css/components/`)

common.css에서 분리된 재사용 컴포넌트. 모든 HTML 파일이 공통 import.

| 파일 | 포함 클래스 | 설명 |
|------|-----------|------|
| `button.css` | `.btn`, `.btn--primary`, `.btn--primary2`, `.btn--solid`, `.link-arrow` | 버튼 + 텍스트 링크 |
| `accordion.css` | `.acc`, `.acc-item`, `.acc-head`, `.acc-body`, `.acc-icon` | 아코디언 공통 (색상·구조·애니메이션) |
| `modal.css` | `.login-modal*`, `.proc-sheet*` | 로그인 모달 + 시술 시트 |
| `card.css` | `.prod-card*`, `.prod-img-tag` | 상품 카드 공통 (cosmetic/product/skin-sol) |
| `tab.css` | `.tab-line*`, `.tab-pill*` | 탭 컴포넌트 2종 (밑줄형/알약형) |

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
| `--bg-warm`    | —            | #f6f6f4      | procedure · travel · skin-analysis 콘텐츠 배경 (따뜻한 오프화이트) | — |

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

### 5.6b Navy Scale (신규 — page-hero--navy · skin-analysis hero 전용)

| Semantic Token | Actual Value | Usage |
|----------------|-------------|-------|
| `--navy-900` | #0d1321 | page-hero--navy gradient 끝 (어두운 끝) |
| `--navy-800` | #1a2038 | page-hero--navy gradient 시작 |
| `--navy-700` | #1e2535 | sa-page-hero 배경 (skin-analysis) |
| `--navy-600` | #162032 | gnb mobile contact 배경 (예비) |

### 5.6c Overlay Scale (신규)

| Semantic Token | Actual Value | Usage |
|----------------|-------------|-------|
| `--overlay-bg` | rgba(0,0,0,.55) | 기존 hero 이미지 오버레이 |
| `--overlay-50` | rgba(0,0,0,.50) | — (예비) |
| `--overlay-60` | rgba(0,0,0,.60) | — (예비) |
| `--overlay-80` | rgba(0,0,0,.80) | — (예비) |

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

공통 헤더 로직은 `common.css`에서 관리. 페이지별로 `<header>` 태그에 BEM 모디파이어를 추가하여 테마를 결정한다.

#### Header Modifier Classes

| 클래스 | 투명 상태 | 스크롤 후(is-solid) | 적용 페이지 |
|--------|----------|---------------------|-------------|
| (없음, 기본) | transparent + white text | bg: white, color: gray | index (홈) |
| `.header--light` | transparent + dark text | 동일 유지 (변화 없음) | cosmetic · faq · skin-sol |
| `.header--solid` | white + dark text + shadow | 동일 유지 | about · product |

#### Header State Classes (JS 토글)

| 상태              | 클래스 | 사용 토큰 |
| ----------------- | ---------- | ------------------------------------------------ |
| 투명 (스크롤 전)  | 기본값 | `--text-white` |
| Solid (스크롤 후) | `.is-solid` | `--bg-white`, `--text-gray-6`, `--border-gray-1` |
| 숨김 (스크롤 다운) | `.is-hidden` | `transform: translateY(-100%)` |
| 모바일 헤더       | — | `--bg-white`, `--text-gray-7` |

### 8.1b Page Hero Component — `.page-hero`

공통 페이지 히어로. `common.css` `.page-hero` 베이스 + BEM 모디파이어 2벌로 관리. 한 곳 수정 → 전 페이지 반영.

| 요소 | 클래스 | 설명 |
|------|--------|------|
| 베이스 | `.page-hero` | padding (header-h + 100px / 64px mobile), text-align center |
| 흰색 배경 | `.page-hero--white` | bg: `--bg-white` · border-bottom · eyebrow/title/sub: gray 계열 |
| 네이비 배경 | `.page-hero--navy` | bg: gradient `--navy-800` → `--navy-900` + radial 오버레이 · eyebrow/title/sub: white 계열 |

| 자식 요소 | 토큰 | 값 |
|----------|------|----|
| `.eyebrow` | `--text-12` · `--tracking-wider` · uppercase | white: `--text-caption`, navy: rgba(255,255,255,.38) |
| `.page-hero__title` | `--text-80` → clamp(40px,10vw,56px) mobile | white: `#fff`, white-ver: `--text-gray-6` |
| `.page-hero__sub` | `--text-15` / `--text-14` mobile | white: rgba(255,255,255,.58), white-ver: `--text-gray-3` |

```html
<!-- 흰 배경 히어로 -->
<section class="page-hero page-hero--white">
  <div class="wrap">
    <p class="eyebrow">CATEGORY</p>
    <h1 class="page-hero__title">페이지 제목</h1>
    <p class="page-hero__sub">페이지 설명</p>
  </div>
</section>

<!-- 네이비 배경 히어로 -->
<section class="page-hero page-hero--navy">
  <div class="wrap">
    <p class="eyebrow">CATEGORY</p>
    <h1 class="page-hero__title">페이지 제목</h1>
    <p class="page-hero__sub">페이지 설명</p>
  </div>
</section>
```

**적용 페이지:**
- `--white`: cosmetic · faq · skin-sol
- `--navy`: procedure · travel

### 8.1c CTA Banner Component — `.cta-banner`

다크 배경 풀-위드 CTA 바. `common.css`로 이동 (구 center.css에만 존재). 여러 페이지 공유 가능.

| 요소 | 토큰/값 |
|------|---------|
| `.cta-banner` | bg: `--bg-dark` · flex justify-between · padding clamp(36–56px) |
| `.cta-banner__label` | `--text-12` · rgba(255,255,255,.38) · letter-spacing .06em |
| `.cta-banner__title` | clamp(16–22px) · font-weight 600 · rgba(255,255,255,.9) |
| `.cta-banner__btn` | bg: `--bg-white` · color: `--bg-dark` · padding 14px 28px · radius 2px |
| 모바일 (≤600px) | flex-direction: column · btn width 100% |

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

버튼은 역할별 6개 카테고리로 관리한다. **design-system.html** "Button" 섹션에 모두 프리뷰 포함.

#### 1. Base Actions — `.btn` family (`common.css`)

| 클래스 | 배경 | 텍스트 | 호버 | h/radius | 사용처 |
|--------|------|--------|------|----------|--------|
| `.btn--primary` / `.btn--solid` | `--btn-primary`(gray-950) | `--bg-white` | 유지 | 54px / none | 메인 CTA 전반 |
| `.btn--primary2` | `--accent-blue2`(violet-700) | `--bg-white` | `--accent-blue3` | 54px / none | 서브 CTA (헤더, GNB) |
| `.btn` (outline) | transparent | `--text-gray-6` | bg: `--text-gray-6`, color: white | 54px / none | 보조 액션 |

#### 2. On-Dark Buttons (어두운 배경 전용)

| 클래스 | 배경 | 텍스트 | 호버 | 사용처 |
|--------|------|--------|------|--------|
| `.cta-banner__btn` | `--bg-white` | `--bg-dark` | rgba(255,255,255,.88) | CTA Banner 섹션 (`common.css`) |
| `.faq-cta__btn` | `#fff` | `--accent-blue2` | outline(투명 bg, white text) | FAQ CTA 다크 섹션 |
| `.proc-hero__cta` | none (텍스트) | rgba(255,255,255,.55) | → .9 | Hero scroll prompt (다운 화살표) |

#### 3. Filter Chip — `.ds-chip` / `proc-filter__btn` style

| 상태 | 배경 | 텍스트 | 사용처 |
|------|------|--------|--------|
| active | `--btn-primary` | white | home, procedure, travel, cosmetic 필터 |
| idle | transparent | `--text-gray-4` | border: `--border-gray-4` |

#### 4. Tab Navigation — 3가지 패턴

| 클래스 | 패턴 | active 스타일 | 사용처 |
|--------|------|---------------|--------|
| `.tv-tab-btn` | 밑줄 탭 (scaleX) | color+underline: `--accent-blue1` | travel |
| `.proc-filter__btn` | 밑줄 탭 (border-bottom) | border-bottom: `--text-gray-6` | procedure 필터바 |
| `.sa-tab-btn` | Pill 탭 (radius: 100px) | bg: `#c8694c`(terracotta) | skin-analysis |

#### 5. Icon / Circular Buttons

| 클래스 | 크기 | 스타일 | 사용처 |
|--------|------|--------|--------|
| `.cosm-hbtn` | 36px | white bg + shadow | cosmetic 카드 action bar (좋아요/장바구니/공유) |
| `.treatment-carousel__btn` | 44px | white bg + border + shadow | center 캐러셀 화살표 |
| `.pd-gallery__arrow` | 44px | 동일 패턴 | product 갤러리 화살표 |

#### 6. State-Driven & Utility

| 클래스 | 기반 | 상태 | 사용처 |
|--------|------|------|--------|
| `.pss-analyze__btn` | `.btn--primary` 확장 | disabled(opacity .35) → is-ready(1) | skin-sol 퀴즈 분석 시작 |
| `.pss-reset__btn` | 텍스트 링크형 | 아이콘+레이블, color: `--text-gray-3` | 퀴즈 초기화 |
| `.pd-back-btn` | 텍스트 링크형 | 동일 패턴 | product 뒤로 가기 |

### 8.4 Accordion Component (`.acc`)

**base**: `common.css` — 색상·구조·애니메이션 전체 정의.  
**override**: `home.css` (Services 섹션) · `faq.css` (.faq-body) — 크기·간격·보더만 재정의.

| 요소      | 사용 토큰                        | 파일 |
| --------- | -------------------------------- | ---- |
| 기본 배경 | `--bg-gray`                      | common.css |
| 헤더      | `--bg-white`, `--text-gray-6`    | common.css |
| 열림 헤더 | `--accent-blue2`, `--text-white` | common.css |
| 아이콘    | `--accent-blue1`                 | common.css |
| Home 크기 | font-size clamp(18–22px), padding 24px 30px, max-width 720px | home.css |
| FAQ 크기  | font-size 17px, padding 20px 24px, border 1px solid `--border-gray-1` | faq.css |
| FAQ body  | `--surface-gray-1` 배경 + `--border-gray-1` 상단 구분선 | faq.css |

```html
<!-- 아코디언 HTML 구조 -->
<div class="acc">
  <div class="acc-item is-open">
    <button class="acc-head">제목 <span class="acc-icon"></span></button>
    <div class="acc-body"><div class="acc-body__inner">내용</div></div>
  </div>
</div>
```

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

### 8.11 Cosmetic Page (`cosmetic.css`)

쇼핑 리스팅 페이지. 카테고리 필터 + 정렬 기반 상품 그리드.

| 클래스 | 주요 토큰 | 설명 |
|--------|-----------|------|
| `.cosm-hero` | `--header-h`, `--bg-white`, `--border-gray-1` | 페이지 상단 히어로 (제목 · 부제) |
| `.cosm-shop` | `--surface-gray-1` | 상품 목록 영역 배경 |
| `.cosm-select-btn` | `--bg-white`, `--border-gray-1`, `--text-gray-6`, `--text-caption` | 커스텀 드롭다운 버튼 |
| `.cosm-select-dropdown` | `--bg-white`, `--border-gray-1`, `--text-caption` | 드롭다운 목록 |
| `.cosm-card__img-wrap` | `--surface-gray-1`, `--radius-*` | 상품 이미지 래퍼 (aspect-ratio 3/4) |
| `.cosm-tag--0/1` | `--accent-blue1`, `--accent-blue3` | 원형 뱃지 — semantic 적용 |
| `.cosm-tag--2` | `--gray-800` (직접) | 원형 뱃지 — dark gray 전용 |
| `.cosm-tag--3` | `--teal-500` (직접) | 원형 뱃지 — teal 전용 |
| `.cosm-tag--4` | `#b0527a` (하드코딩) | 원형 뱃지 — 로즈베리 전용 |
| `.cosm-tag--5` | `--amber-500` (직접) | 원형 뱃지 — amber 전용 |
| `.cosm-card__rating` | `--rating` | 별점 색상 |

**헤더 고정 처리 (cosmetic 전용)**: `cosmetic.css`에서 `.header`를 처음부터 solid 상태로 오버라이드. JS의 `is-solid` 토글 없이 항상 흰 배경 유지.

**컴포넌트 토큰 (`--cosm-*`)**: `theme.css :root`에 정의, `cosmetic.css`와 `product.css`가 공유.

| 토큰 | 값 | 용도 |
|------|---|-----|
| `--cosm-navy` | #1a1a6e | 배송칩(새벽), 배지 배경, 결과 태그 |
| `--cosm-badge-gift` | #ff6b35 | '사은품' 배지 |
| `--cosm-badge-buyers-bg` | rgba(0,0,0,0.58) | 구매자 수 뱃지 bg (현재 미사용) |
| `--cosm-card-hover` | rgba(26,26,110,0.07) | 카드 호버 배경 |
| `--cosm-card-hover-shadow` | 0 0 0 14px … | 카드 호버 외부 확장 shadow |
| `--cosm-action-bar-bg` | rgba(0,0,0,0.82) | 카드 액션바 배경 |
| `--cosm-btn-on-dark-hover` | rgba(255,255,255,0.12) | 다크 bg 위 버튼 호버 |
| `--cosm-chip-day-bg` | #00695c | 배송칩(주간) 배경 |
| `--cosm-membership-bg` | #e8f5e9 | 멤버십 포인트 bg |
| `--cosm-membership-text` | #2e7d32 | 멤버십 포인트 text |
| `--cosm-discount` | #e53935 | 할인율 강조색 |
| `--cosm-like-active` | #ff6b6b | 좋아요 활성 색상 |

---

### 8.12 Product Detail Page (`product.css`)

상품 상세 페이지. `cosmetic.html` 카드 클릭 → `sessionStorage` → `product.html` 렌더.

| 클래스 | 주요 토큰 | 설명 |
|--------|-----------|------|
| `.pd-page` | `--surface-gray-1` | 전체 페이지 배경 |
| `.pd-main` | `--bg-white` | 이미지+정보 2컬럼 섹션 |
| `.pd-gallery__main` | `--surface-gray-1` | 1:1 이미지 컨테이너 |
| `.pd-gallery__arrow` | `--shadow-btn`, `--text-gray-6` | 갤러리 이전/다음 버튼 (원형) |
| `.pd-gallery__tag` | `--text-caption`, `--accent-blue2` | 이미지 위 원형 태그 뱃지 |
| `.pd-category-tag` | `--text-caption` | 카테고리 pill 레이블 |
| `.pd-title` | `--text-gray-7` | 상품명 H1 |
| `.pd-rating-stars` | `--rating` | 별점 색상 |
| `.pd-option-item.is-selected` | `--text-caption` | 선택된 옵션 보더 + 점 |
| `.pd-discount` | `--cosm-discount` | 할인율 (cosm 토큰 공유) |
| `.pd-price` | `--text-gray-7` | 최종 가격 |
| `.pd-desc` | `--text-gray-3`, `--border-gray-1` | 설명 + 하단 구분선 |
| `.pd-qty` | `--border-gray-1` | 수량 조절 박스 |
| `.pd-btn--cart` | `--text-gray-7` (bg), `--text-white` | 장바구니 버튼 |
| `.pd-btn--buy` | `--border-gray-1` | 바로 구매 아웃라인 버튼 |
| `.pd-delivery__chip--dawn` | `--cosm-navy` | 새벽배송 칩 (cosm 토큰 공유) |
| `.pd-delivery__chip--day` | `--cosm-chip-day-bg` | 주간배송 칩 (cosm 토큰 공유) |
| `.pd-specs-card` | `--bg-white`, `--border-gray-1` | 상품정보 스펙 테이블 카드 |
| `.pd-detail-hero` | `--accent-gradient` | 상세 설명 히어로 배너 |
| `.pd-detail-features` | `--surface-gray-1`, `--border-gray-1` | 주요 효능 pill 목록 |
| `.pd-feat-icon` | `--text-caption` | 효능 아이콘 (✦) |
| `.pd-detail-howto__steps li::before` | `--text-caption` | 사용법 스텝 번호 원형 |

**헤더 처리**: `product.css`에서 `.header`를 solid 오버라이드 + `is-hidden` 스크롤 숨김 (cosmetic과 동일 패턴).

**하드코딩 허용값**: `rgba(255,255,255,0.9)` 갤러리 화살표 bg, `rgba(0,0,0,0.5)` 갤러리 카운터 bg — 투명도 변형값으로 토큰화 불필요.

---

## 9. Direct Primitive Usage (의도적)

semantic token 없이 CSS 파일에서 primitive를 직접 참조하는 항목.

semantic token 없이 CSS 파일에서 primitive를 직접 참조하는 항목.

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
| `--gray-800`   | cosmetic.css          | `.cosm-tag--2` background                         | 원형 태그 dark gray — 태그 전용 색상, semantic 미배정 |
| `--teal-500`   | cosmetic.css          | `.cosm-tag--3` background                         | 원형 태그 teal — 태그 전용 색상, semantic 미배정 |
| `--amber-500`  | cosmetic.css          | `.cosm-tag--5` background                         | 원형 태그 amber — 태그 전용 색상, semantic 미배정 |
| `--violet-400` | procedure.css         | `.proc-filter` 입력창 focus, 정렬 버튼 hover border | midtone violet — semantic 미배정 (violet-400 ≠ accent-blue1) |
| `--violet-400` | travel.css            | `.tv-search__input` focus, `.tv-sort__btn` hover border | 동일 — semantic 미배정 |
| `--violet-50`  | travel.css            | `.tv-card__tag` bg, `.tv-detail__cat-tag` bg      | 카드 태그 배지 연보라 배경 — semantic 미배정 |

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
| `#b0527a`                        | cosmetic.css `.cosm-tag--4`             | 로즈베리 태그 배경 — 6색 순환 중 unique 색상 |

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

- **2026-06-21 (모바일 최적화 · CSS 정리 · 컴포넌트 구조 확립 · design-system.html 수정)**:
  - **home.css 모바일 최적화 (전반)**:
    - `@media (max-width: 860px)` — `.hero__title: clamp(22px,5.5vw,26px)` / `.h-lg: clamp(20px,5.5vw,24px)` / `.cta-dark {padding:48px 0}` / `.cta-dark__title: clamp(26px,5vw,36px)` / `.cta-dark__desc: var(--text-15)` / `.hiw-card {padding:16px 0; grid-template-columns:36px 1fr}` / `.hiw-card__step {font-size:var(--text-18); font-weight:400}` / `.sec-head margin-bottom: var(--space-20)`
    - `@media (max-width: 860px)` — `.stay-card {padding:24px; min-height:360px}` / `.stay-card__tags {background:transparent}` (파란색 배경 제거)
    - `@media (max-width: 760px)` — `.why-journey__icon-item {padding:24px 20px}` / icon-wrap 60×60px / SVG 28px / label/sub/desc 폰트/여백 축소
    - `@media (max-width: 600px)` — `.news-card__title -webkit-line-clamp:2` / `.news-card__meta margin-top:10px` / `.news-card__cat font-size:12px` / `.acc-head font-size:17px` / `.cta-dark__title clamp(22px,6vw,28px)` / `.cta-dark__desc var(--text-14) font-weight:500`
  - **CSS cascade 버그 수정**: `@media (max-width: 1080px)` 블록이 `@media (max-width: 600px)` 블록 뒤에 위치해 600px 규칙을 덮어쓰던 버그 수정 (1080px 블록을 600px 블록 앞으로 이동)
  - **CSS 중복 제거**:
    - `@media (max-width: 860px) { .feature__caption }` 독립 블록 → 기존 860px 블록 내 중복이므로 삭제
    - 860px 블록 내 `cta-dark__desc { font-size: 17px }` → 같은 블록 내 `var(--text-15)` 규칙에 덮어쓰이던 중복 제거, `margin-bottom:0` 후속 규칙에 병합
    - 600px 블록 내 `follow-grid 2열` / `footer__mid 1fr` / `news-grid nth-child(n+3) none` 삭제 (상위 미디어쿼리에 이미 존재)
  - **common.css**: `tab.css` 분리 항목 주석 추가 (button/accordion/modal/card에 누락)
  - **app.js**: `window.innerWidth <= 860` → `window.matchMedia("(max-width: 860px)").matches` 교체 (`isMobile()` 헬퍼 추출)
  - **theme.css**: `--bp-mobile: 860` / `--bp-small: 600` / `--bp-treat: 520` 브레이크포인트 문서화 토큰 추가 (CSS @media에서 직접 사용 불가 — JS matchMedia 참고용)
  - **design-system.html**:
    - `<script src="js/contact-popup.js">` 제거 (CSS 없이 SVG가 전화면 렌더링되는 버그 수정)
    - Architecture 탭 파일 구조 다이어그램: `site-0618-blue/` → `site-0619-blue_v0.3/` 교정, `css/components/` 하위 5개 파일 추가, 전체 HTML 파일 목록 및 JS 파일 설명 갱신
  - **Section 3 (Token Architecture)**: CSS Components 파일 표 신설

- **2026-06-21 (CSS 토큰 링크 정리 · 아코디언 컴포넌트화 · 디자인시스템 업데이트)**:
  - **procedure.css · travel.css 전면 토큰 교체**: 모든 primitive 직접 참조(--gray-*, --violet-500, #fff, #f6f6f4 등) → semantic token으로 교체. 예외: `--violet-400` (semantic 미배정, focus/hover border 전용) · `--violet-50` (travel.css 카드 태그 배지 배경, semantic 미배정) — Section 9에 추가.
  - **Accordion 컴포넌트화**: `home.css` + `faq.css`에 중복 존재하던 `.acc` 전체 정의를 `common.css`로 통합. 각 파일은 크기·간격·보더 override만 유지. `faq.css` hardcoded `#fafbfe` → `var(--surface-gray-1)` 교체.
  - **Section 8.4**: 아코디언 항목을 "공통 base + 페이지 override" 구조로 전면 재작성. HTML 스니펫 추가.
  - **Section 9**: procedure.css `--violet-400` 1건, travel.css `--violet-400` + `--violet-50` 2건 추가 → 총 21건.
  - **design-system.html**: "Button Class Index" 전체 클래스 레퍼런스 테이블 추가. "Accordion" 컴포넌트 섹션 신설 (Home variant + FAQ variant 프리뷰 포함).

- **2026-06-20 (CSS/JS 아키텍처 정리 · 버튼 컴포넌트 카탈로그)**:
  - **theme.css**: `--navy-800/900/700/600`, `--bg-warm`, `--overlay-50/60/80` 추가 (Section 5.6b, 5.6c 신설)
  - **common.css**: `.header.is-hidden` 추가(기존 누락). `.header--light` / `.header--solid` 모디파이어 신설 (Section 8.1 개편). `.cta-banner` 컴포넌트를 center.css → common.css로 이동 (Section 8.1c 신설). `page-hero--navy`에서 하드코딩 색상 → `--navy-800/900`으로 교체.
  - **page CSS 5개** (cosmetic/faq/skin-sol/about/product): 중복 header 블록 전체 제거. `.header` 직접 오버라이드 → HTML `class="header header--light/solid"` 패턴으로 교체.
  - **skin-analysis.css**: `#1e2535` → `--navy-700`, `#0d0f18` → `--navy-900`.
  - **HTML 5개**: cosmetic/faq/skin-sol → `header--light`, about/product → `header--solid`.
  - **app.js**: `applyLang(code, flagImg)` 헬퍼 추출 — 3곳 중복 언어 선택 로직을 헬퍼 호출로 통합.
  - **design-system.html**: Button 섹션을 6개 카테고리로 전면 재편 (Base Actions · On-Dark · Filter Chip · Tab Navigation · Icon Circular · State-Driven).
  - **Section 8.1**: Header Modifier Classes 표 추가.
  - **Section 8.1b**: `.page-hero` 컴포넌트 신설 (--white/--navy 2벌 관리 패턴).
  - **Section 8.1c**: `.cta-banner` 컴포넌트 신설.
  - **Section 8.3**: Buttons 6개 카테고리 전면 재작성.
  - **Section 5.1 Background**: `--bg-warm` 추가.
  - **분석 대상 확장**: procedure.html · travel.html · faq.html · skin-analysis.html 추가.
- **2026-06-20 (Product 상세 페이지 신규 · CSS 변수 정리)**: `product.html` + `css/product.css` 추가. 분석 대상 확장. `product.css` 하드코딩 `#e53935` → `--cosm-discount`, `#1a1a6e` → `--cosm-navy`, `#00695c` → `--cosm-chip-day-bg` 교체 (기존 cosm 컴포넌트 토큰 공유). Section 8.11 `--cosm-*` 토큰 테이블 신설. Section 8.12 Product Detail Page 컴포넌트 표 신설. Section 10 Hard-coded: product.css rgba 2건 추가. MASTER_CONTEXT.md `product.html` + `css/product.css` 추가. Excel IA에 상품 상세 항목 추가.
- **2026-06-19 (Cosmetic 페이지 신규 · CSS 토큰 정리)**: `cosmetic.html` + `css/cosmetic.css` 추가. 분석 대상 확장. skin-sol 리네임 완료. GNB 쇼핑/하이라이트 → cosmetic.html 연결, gnb-link--utility 노란색 제거. `common.css` footer `border-top: 1px solid --border-gray-1` 추가 (전 페이지 공통). Section 8.11 Cosmetic Page 컴포넌트 표 신설. Section 9 Direct Primitive: `--gray-800`, `--teal-500`, `--amber-500` cosmetic.css 태그 전용 3건 추가 → **총 18건**. Section 10 Hard-coded Values: `#b0527a` 추가. cosmetic.css 태그에서 `--violet-500` → `--accent-blue1`, `--violet-800` → `--accent-blue3` semantic 교체.
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
