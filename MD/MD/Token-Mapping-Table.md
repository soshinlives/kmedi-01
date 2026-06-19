# Token Mapping Table

현재 구현 완료된 모든 페이지(index.html · about.html · center.html · skin-sol.html + css/reset.css · css/common.css · css/home.css · css/about.css · css/center.css · css/skin-sol.css)에서 실제 사용 중인 모든 토큰의 완전한 매핑표입니다.

> **기준**: Semantic First — primitive를 디자인 판단 기준으로 보지 않습니다.
> **최종 업데이트 2026-06-19**: skin-sol 페이지 추가. Active Semantic **28개**, Direct Primitive **12건** (pss 배지 전용 8건 신규 포함).

---

## Semantic Token Complete Map

| Semantic Token | Primitive | Actual Value | Used | Component / Usage | 비고 |
|---------------|-----------|-------------|------|------------------|-----|
| `--bg-white` | `--white` | #ffffff | ✓ | body, header, card, acc open, footer | 흰색 배경 기본 |
| `--bg-gray` | `--gray-150` | #e4e6ec | ✓ | accordion item 배경 | |
| `--bg-dark` | `--gray-950` | #101219 | ✓ | trust section, gnb-banner, top-btn hover | 다크 배경 |
| `--surface-gray-1` | `--gray-50` | #f2f4f8 | ✓ | section surface, booking tab, lang-option hover | |
| `--surface-gray-2` | `--gray-200` | #dcdfe5 | ✓ | compare__col 일반 컬럼 배경 | |
| `--surface-gray-3` | `--brown-50` | #f7f4f2 | ✓ | center map-card 배경 (웜 크림) | brown 기반 |
| `--text-gray-1` | `--gray-300` | #b8bdc7 | ✓ | 플레이스홀더, 비활성 아이콘 | |
| `--text-gray-2` | `--gray-400` | #949aa8 | ✓ | 날짜, sub-head, lang-sheet title, hiw prefix | |
| `--text-gray-3` | `--gray-500` | #6b7180 | ✓ | 본문 기본 (body, lead, desc, list) | 최다 사용 |
| `--text-gray-4` | `--gray-600` | #515767 | ✓ | filter chip 기본, footer top links | |
| `--text-gray-5` | `--gray-700` | #3d4352 | ✓ | 폼 레이블 (login modal), why-journey icon desc | |
| `--text-gray-6` | `--gray-900` | #1a1e28 | ✓ | 헤딩 전반, link-arrow, btn outline, gnb, compare title | 최다 사용 |
| `--text-gray-7` | `--gray-950` | #101219 | ✓ | 최강 강조 — 모바일 헤더, login modal 제목 | |
| `--text-white` | `--white` | #ffffff | ✓ | 다크/컬러 배경 위 흰색 — hero, trust, cta-dark, hiw | |
| `--text-caption`  | `--violet-500` | #3b33d9 | ✓ | eyebrow, kicker, bk-label, booking tab underline | accent-blue1와 동일값 |
| `--text-caption2` | `--gold-600`   | #9b7943 | ✓ | .ihc__level (Inside Hugro 플로어 레이블) | 골드 캡션 전용 |
| `--rating` | `--amber-400` | #d9ad3f | ✓ | 별점 (review__star, treat-card__en) | |
| `--border-gray-1` | `--gray-200` | #dcdfe5 | ✓ | 기본 구분선 (card, feature, gnb, hiw-grid) | 최다 사용 |
| `--border-gray-2` | `--gray-300` | #b8bdc7 | ✓ | 연한 구분선 (mobile gnb) | |
| `--border-gray-3` | `--gray-400` | #949aa8 | ✓ | 중간 구분선 (footer top/bottom) | |
| `--border-gray-4` | `--gray-800` | #292e3d | ✓ | 강조 보더 (cnav-btn, filter chip) | |
| `--btn-primary` | `--gray-950` | #101219 | ✓ | btn--solid, btn--primary bg, filter.is-active | |
| `--btn-secondary` | `--violet-600` | #2e26b5 | ✓ | btn--primary:hover 배경 | |
| `--accent-blue1` | `--violet-500` | #3b33d9 | ✓ | feature dots active, stay-card tags bg, services acc-icon | text-caption과 동일값 |
| `--accent-blue2` | `--violet-700` | #2a2287 | ✓ | services acc open head, btn--primary2, hiw icon, proc-sheet, about btn | |
| `--accent-blue3` | `--violet-800` | #1f1957 | ✓ | compare__col--ours bg, footer__bottom, btn--primary2:hover | |
| `--accent-gradient` | violet-900→500 | gradient | ✓ | cta-dark 섹션 전체 배경 | |
| `--btn-kakao` | `--kakao-yellow` | #fee500 | ✓ | login-modal Kakao 버튼 배경 | 소셜 전용 |
| `--btn-kakao-text` | `--kakao-dark` | #191919 | ✓ | login-modal Kakao 버튼 텍스트 | 소셜 전용 |

**Total: 28개**

---

## Primitive → Semantic 연결 상태

| Primitive | Value | → Semantic | Direct CSS | 비고 |
|-----------|-------|-----------|-----------|-----|
| `--white` | #ffffff | `--bg-white`, `--text-white` | — | |
| `--gray-50` | #f2f4f8 | `--surface-gray-1` | — | |
| `--gray-150` | #e4e6ec | `--bg-gray` | — | |
| `--gray-200` | #dcdfe5 | `--border-gray-1`, `--surface-gray-2` | — | 이중 매핑 |
| `--gray-300` | #b8bdc7 | `--border-gray-2`, `--text-gray-1` | — | 이중 매핑 |
| `--gray-400` | #949aa8 | `--border-gray-3`, `--text-gray-2` | — | 이중 매핑 |
| `--gray-500` | #6b7180 | `--text-gray-3` | — | |
| `--gray-600` | #515767 | `--text-gray-4` | — | |
| `--gray-700` | #3d4352 | `--text-gray-5` | — | |
| `--gray-800` | #292e3d | `--border-gray-4` | — | |
| `--gray-900` | #1a1e28 | `--text-gray-6` | — | |
| `--gray-950` | #101219 | `--bg-dark`, `--btn-primary`, `--text-gray-7` | — | 삼중 매핑 |
| `--brown-50` | #f7f4f2 | `--surface-gray-3` | — | |
| `--brown-100`~`--brown-900` | — | — | — | Palette (미사용) |
| `--violet-50`  | #efeffb | — | skin-sol.css · common.css (직접) | hover bg, step active bg, 결과 배지 bg / contact email icon bg |
| `--violet-100` | #dcdaf7 | — | skin-sol.css (직접) | 성분 카드 배지 bg |
| `--violet-200` | — | — | — | Palette |
| `--violet-300` | #8681e4 | — | about.css · skin-sol.css (직접) | eyebrow 강조색 · accent-light 삭제 후 직접 참조 |
| `--violet-400` | #6861e0 | — | — | Palette |
| `--violet-500` | #3b33d9 | `--text-caption`, `--accent-blue1` | skin-sol.css (직접) | 이중 매핑 + 결과 배지 color 직접 참조 |
| `--violet-600` | #2e26b5 | `--btn-secondary` | home.css · skin-sol.css (직접) | why-journey + 결과 배지 color |
| `--violet-700` | #2a2287 | `--accent-blue2` | — | |
| `--violet-800` | #1f1957 | `--accent-blue3` | — | |
| `--violet-900` | #151132 | `--accent-gradient` (내부) | — | |
| `--amber-400` | #d9ad3f | `--rating` | skin-sol.css (직접) | 퀴즈·결과 별점 (`--rating`과 동일값) |
| `--amber-500` | #c99b30 | — | skin-sol.css (직접) | 결과 배지 color |
| `--amber-600` | #b58522 | — | skin-sol.css (직접) | 결과 배지 bg (`--text-caption2`와 동일값) |
| `--amber-100`~`--amber-300`, `--amber-700~900` | — | — | — | Palette (미사용) |
| `--gold-600` | #9b7943 | — | home.css (직접) | text-gold 삭제 후 직접 참조 |
| `--gold-500`, `--gold-700~800` | — | — | — | Palette |
| `--teal-50`  | #e8f6f0 | — | common.css (직접) | `.contact-popup__icon--phone` bg |
| `--teal-500` | #2e9b6a | — | common.css (직접) | `.contact-popup__icon--phone` color |
| `--kakao-yellow` | #fee500 | `--btn-kakao` | — | |
| `--kakao-dark` | #191919 | `--btn-kakao-text` | — | |

---

## Direct Primitive Usage (의도적)

semantic 없이 CSS 파일에서 primitive를 직접 참조하는 항목. 삭제된 semantic의 자리.

| Primitive      | 파일                  | Selector / 위치                           | 사유                                               |
| -------------- | --------------------- | ----------------------------------------- | -------------------------------------------------- |
| `--violet-300` | about.css             | `.guarantee-col__icon`                    | `--accent-light` 삭제 후 직접 유지                 |
| `--gold-600`   | home.css              | `.treat-highlight`                        | `--text-gold` 삭제 후 직접 유지                    |
| `--violet-600` | home.css              | `.why-journey__icon-wrap`                 | 아이콘 원 배경 — `--btn-secondary`와 동일값, 의미 불일치 |
| `--violet-600` | home.css              | `.why-journey__icon-sub`                  | 서브타이틀 컬러 — 동일 이유                        |
| `--violet-300` | skin-sol.css | `.pss-hero__eyebrow`                      | 히어로 eyebrow — semantic 미배정                   |
| `--violet-50`  | skin-sol.css | hover bg · step active · 결과 배지 bg    | 연한 바이올렛 면 — semantic 미배정                 |
| `--violet-50`  | common.css            | `.contact-popup__icon--email` bg          | 이메일 아이콘 연보라 배경 — semantic 미배정         |
| `--teal-50`    | common.css            | `.contact-popup__icon--phone` bg          | 전화 아이콘 민트 배경 — 단일 사용처                |
| `--teal-500`   | common.css            | `.contact-popup__icon--phone` color       | 전화 아이콘 민트 색상 — 단일 사용처                |
| `--violet-100` | skin-sol.css | 성분 카드 배지 bg                          | 한 단계 진한 연보라 배지                           |
| `--violet-500` | skin-sol.css | 결과 배지 color                            | `--accent-blue1`과 동일값, 배지 전용               |
| `--violet-600` | skin-sol.css | 결과·성분 카드 배지 color                  | midtone violet — semantic 미배정                   |
| `--amber-400`  | skin-sol.css | 퀴즈·결과 별점                             | `--rating`과 동일값                                |
| `--amber-500`  | skin-sol.css | 결과 배지 color                            | midtone amber — semantic 미배정                    |
| `--amber-600`  | skin-sol.css | 결과 배지 bg                               | `--text-caption2`와 동일값, 배지 bg 전용           |

**Direct CSS 건수: 15건** (의도적, 관리 대상 · pss 배지 8건 결과 카드 전용 · contact popup 3건 신규)

---

## Deleted Tokens (이 세션 정리)

| 삭제된 Semantic | 이유 | 대체 |
|--------------|-----|-----|
| `--text-heading` | → `--text-gray-6`으로 번호형 통합 | `--text-gray-6` |
| `--text-body` | → `--text-gray-3` | `--text-gray-3` |
| `--text-body2` | → `--text-gray-4` | `--text-gray-4` |
| `--text-body3` | `--text-heading`과 동일값(gray-900) → 중복 | `--text-gray-6` |
| `--text-subtle` | → `--text-gray-2` | `--text-gray-2` |
| `--text-subtle2` | `--text-heading`과 동일값(gray-900) → 중복 | `--text-gray-6` |
| `--text-strong` | → `--text-gray-7` | `--text-gray-7` |
| `--text-label` | → `--text-gray-5` | `--text-gray-5` |
| `--text-placeholder` | → `--text-gray-1` | `--text-gray-1` |
| `--text-inverse` | → `--text-white` | `--text-white` |
| `--text-gold` | 저사용(1건) · niche | `--gold-600` 직접 참조 |
| `--text-link` | `--text-caption`과 동일값(violet-500) → 중복 | `--text-caption` |
| `--border` | → `--border-gray-1` | `--border-gray-1` |
| `--border-2` | → `--border-gray-4` | `--border-gray-4` |
| `--border-light` | → `--border-gray-2` | `--border-gray-2` |
| `--border-medium` | → `--border-gray-3` | `--border-gray-3` |
| `--border-warm` | 저사용(0건) · 삭제 | — |
| `--surface` | → `--surface-gray-1` | `--surface-gray-1` |
| `--surface-alt` | → `--bg-gray` | `--bg-gray` |
| `--surface-strong` | → `--surface-gray-2` | `--surface-gray-2` |
| `--surface-warm` | → `--surface-gray-3` | `--surface-gray-3` |
| `--surface-white` | → `--bg-white` | `--bg-white` |
| `--surface-dark` | → `--bg-dark` | `--bg-dark` |
| `--bg-black` | → `--bg-dark` | `--bg-dark` |
| `--btn` | → `--btn-primary` | `--btn-primary` |
| `--accent` | 0건 · 미사용 | — |
| `--accent-light` | 1건 · 저사용 | `--violet-300` 직접 참조 |
| `--accent-dark` | → `--accent-blue2` | `--accent-blue2` |
| `--accent-hover` | → `--btn-secondary` (Button 카테고리) | `--btn-secondary` |
| `--accent-deep` | → `--accent-blue3` | `--accent-blue3` |

---

## Hard-coded Values (의도된 값 · 토큰화 불필요)

| 값 | 위치 | 용도 |
|---|-----|-----|
| `rgba(0,0,0,0.4)` | hero overlay 데스크탑 | 이미지 위 오버레이 |
| `rgba(255,255,255,0.92)` | hero desc | 반투명 텍스트 |
| `rgba(0,0,0,0.45)` | hero counter | 슬라이드 카운터 bg |
| `rgba(255,255,255,0.78)` | compare ours / trust body | 다크 bg 위 반투명 |
| `rgba(255,255,255,0.65)` | skin-sol.css `.pss-hero__desc` | 다크 hero 위 반투명 텍스트 |
| `rgba(59,51,217,0.08~0.2)` | skin-sol.css option hover · step active | focus ring shadow |
| 하드코딩 배지 hex (`#e8eafb` 등 12종) | skin-sol.css `.pss-icon--*` | 결과 배지 개별 색상 |
| `linear-gradient(rgba...)` | stay-card, mem-card, follow-card | 이미지 그라디언트 오버레이 |
| `rgba(0,0,0,0.14)` | mobile-bar shadow | 하단 바 그림자 |
| `29px`, `14.5px`, `13.5px` | brand, col-card, footer | 특수 px 폰트 (수동 검토 필요) |

---

## Summary

| 항목 | 수치 |
|-----|-----|
| Active Semantic Tokens | **28개** |
| — Background | 3 (bg-white, bg-gray, bg-dark) |
| — Surface | 3 (surface-gray-1~3) |
| — Text | 10 (text-gray-1~7, text-white, text-caption, rating) |
| — Border | 4 (border-gray-1~4) |
| — Button | 2 (btn-primary, btn-secondary) |
| — Accent | 4 (accent-blue1, accent-blue2, accent-blue3, accent-gradient) |
| — Social | 2 (btn-kakao, btn-kakao-text) |
| Direct Primitive Usage | **15건** (기존 4건 + pss 배지 8건 + contact popup 3건 신규) |
| Hard-coded rgba | ~20건 (의도된 투명도 · 유지) |
| Deleted this session | 30건 |

---

**변경 이력:**

- **2026-06-19 (Contact Popup · CSS 연결 보완)**: `--teal-50`/`--teal-500` Primitive 테이블 신규 추가 (contact popup 전화 아이콘 전용). `--violet-50` direct CSS에 common.css 이메일 아이콘 bg 추가. Direct Primitive Usage 12건 → **15건**. common.css `.chat-btn.is-open` `--violet-600`→`--btn-secondary`, `.chat-btn.is-open:hover` `--violet-800`→`--accent-blue3`, `.contact-popup__close:hover` `--gray-900`→`--text-gray-6` 3건 semantic 교체.
- **2026-06-19 (skin-sol 추가)**: 분석 대상에 `skin-sol.html` + `css/skin-sol.css` 포함. Primitive 매핑 테이블에 `--violet-50/100` 신규 직접 참조 행 추가. `--violet-300/500/600`, `--amber-400/500/600` direct CSS 열 업데이트. Direct Primitive Usage **12건**. Hard-coded Values에 pss 3종 추가.
- **2026-06-18 (Violet 전환)**: Blue scale 제거. Accent violet 통일.
- **2026-06-18 (Token Audit 완료)**: Semantic 36개로 확장. Direct primitive 0건.
- **2026-06-18 (Token Cleanup)**: 중복/저사용 30개 삭제. 번호형 명명 체계 전환. Background/Surface 분리. Button 카테고리 신설. **Active Semantic 28개, Direct 2건.**
- **2026-06-18 (Why-Us 개편)**: why-acc 아코디언 제거 → 5-col 카드 그리드. `--violet-600` direct 2건 추가 (icon-wrap, icon-sub). `--text-gray-5` 사용처 +1. **Direct 4건.**
- **2026-06-18 (reset.css 신설)**: 브라우저 리셋 분리. 중복 제거: `box-sizing: border-box` (login-modal__input), `list-style: none` + `margin: 0` (proc-sheet__list), `list-style: none` + `padding: 0` + `margin: 0` (why-journey__icons).
- **2026-06-18 (Token Rename ×2)**: `--btn-cta` → `--btn-secondary`. `--accent-mid/dark1/dark2` → `--accent-blue1/blue2/blue3`. theme.css, common.css, home.css, about.css 전체 반영.
