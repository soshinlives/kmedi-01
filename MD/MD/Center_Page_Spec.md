# Center_Page_Spec.md

# Hugro Center Editorial Article Specification

---

# 현재 구현 상태 (2026-06-19 기준)

파일: `center.html`, `css/reset.css`, `css/theme.css`, `css/common.css` (공유), `css/center.css`

## 구현된 섹션 순서

| 섹션 | HTML Class/ID | 스펙 대응 | 구현 여부 |
|-----|--------------|---------|---------|
| Hero | `.center-hero` | Section 01 | ✓ 구현 |
| Intro 텍스트 | `.art-intro` | Section 02 (Introduction) | ✓ 구현 |
| 방문 상담 안내 | `#visit-info .info-box` | — (스펙 외 추가) | ✓ 추가 구현 |
| AI 피부 분석 | `.art-section` (Section 01 kicker) | Section 04 (The Experience) | ✓ 구현 |
| 맞춤 스킨케어 캐러셀 | `.treatment-carousel` | Section 04 계속 | ✓ 구현 |
| 건물 안내 (Hugro Building) | `.building-info` | Section 05 일부 | ✓ 구현 |
| Inside Hugro 캐러셀 | `.ihc` (B1·1F·2F) | Section 05 (Inside Hugro) | ✓ 구현 — 2026-06-19 캐러셀로 교체 |
| Location (지도) | `.location-section` + `.map-card` | Section 06 (Location Story) | ✓ 구현 |
| CTA 배너 | `.cta-banner#consultation` | Section 07 (Visit Hugro) | ✓ 구현 |
| 앱 배너 | `.app-banner` | — (스펙 외 추가) | ✓ 추가 구현 |
| 연관 포스트 | `.related-posts` | Section 08 (Related Content) | ✓ 구현 |
| Footer + 모바일 하단바 | `.footer`, `.mobile-bar` | — (공통 컴포넌트) | ✓ 구현 |
| 로그인 모달 | `.login-modal#loginModal` | — (스펙 외 추가) | ✓ 추가 구현 |

## CSS 아키텍처 (center.css)

| 변수 / 패턴 | 값 | 용도 |
|---|---|---|
| `--section-gap` | `clamp(36px, 6vw, 72px)` | `.art-intro`, `.art-section` 상하 여백 통일 |
| `figure + .art-section__body` | `margin-top: var(--section-gap)` | 이미지 하단 → 본문 상단 여백 |
| `.related-posts` bg | `var(--surface-gray-1)` | 연관 포스트 배경 (연한 회색) |
| `.related-posts` 하단 | `padding-bottom: 160px` | 연관 포스트 하단 여백 고정 |

## 캐러셀 버튼 동작 (JS)

- 초기: 우측 버튼만 `.is-active` (진하게), 좌측 흐리게
- 중간: 좌우 모두 `.is-active`
- 마지막 슬라이드: 좌측만 `.is-active`, 우측 흐리게
- 흐린 버튼 클릭 시 이동 없음 (선형 탐색, wrap 없음)
- 화살표: SVG chevron `stroke-width="2.5"`

## Inside Hugro Carousel (`.ihc`) — 2026-06-19

기존 `floors-grid` (전체 너비 3열 그리드)를 제거하고 `article-col` 안 캐러셀로 교체.

| 요소 | 클래스 | 설명 |
|-----|--------|------|
| 탭 버튼 | `.ihc__tabs` / `.ihc__tab` | B1·1F·2F 선택 탭, 이미지 위쪽 가운데 정렬, `.filter` 버튼과 동일 스타일 |
| 스테이지 | `.ihc__stage` | `display:flex` — 이전화살표 + 이미지 + 다음화살표 |
| 이미지 | `.ihc__img` | `aspect-ratio: 4/3` · `object-fit: cover` · opacity fade 전환 |
| 화살표 | `.ihc__arrow--prev/next` | 이미지 바깥 양쪽, 원형 44px, border+shadow |
| 정보 패널 | `.ihc__info` / `.is-active` | 이미지 아래 레벨·제목·설명 (JS로 is-active 토글) |

JS: `ihcGoTo(idx)` — 탭·info is-active 토글, 이미지 opacity fade 후 src 교체

## 제거된 border-top 목록

| 요소 | 이유 |
|---|---|
| `#visit-info` | intro 직후 연결감 유지 |
| `.floors-head` | Inside Hugro 진입 구분선 제거 |
| `.location-section` | floors-grid → location 구분선 제거 |

## 스펙 대비 변경 사항

- **Section 03 (The Hugro Philosophy — "Beauty Beyond Treatment")**: 미구현. 브랜드 철학 텍스트 섹션 생략됨.
- **앱 배너**: 스펙 외 추가. CTA 배너 다음, 연관 포스트 앞에 위치. 파란색(`#1400ff`) 배경, QR 코드 포함. 스토어 버튼 제거됨.
- **연관 포스트 (Section 08)**: 4열 그리드, 1:1 썸네일 비율, `surface-gray-1` 배경. 스펙의 서비스 링크 대신 에디토리얼 포스트 카드로 구현.
- **방문 상담 안내 Info Box**: 스펙에 없던 항목. DIVE 패턴(인트로 직후 노출)으로 추가됨. 장소·운영시간·전화·카카오·이메일 등 포함.
- **Login Modal**: 스펙에 없던 항목. 로그인/회원가입 모달(이메일·비밀번호 입력폼) 구현됨.
- **Hero 텍스트**: 스펙 Title `HUGRO CENTER` → 실제 구현 `프리미엄 뷰티 & 웰니스를 경험하다`.
- **Hero 높이**: `100vh` 요청 후 `95vh`로 조정.

## 웹 접근성 (2026-06-19)

색상·폰트 제외. WCAG 2.1 AA 기준 보완 사항.

| 구분 | 변경 내용 |
|-----|---------|
| **HTML 유효성** | `info-table`, `building-table`: `<div>` → `<dl>` (dt/dd는 dl 자식이어야 함) |
| **캐러셀 도트** | `.treatment-carousel__dot`: `<div>` → `<button>` + `aria-label="슬라이드 N 보기"` + JS에서 `aria-current` 토글 |
| **랜드마크** | `<main id="main-content">` 추가 (hero ~ app-banner 섹션 포함) |
| **스킵 내비** | `<a class="skip-link" href="#main-content">본문으로 이동</a>` body 최상단 |
| **GNB Overlay** | `role="dialog" aria-modal="true" aria-label="사이트 내비게이션" aria-hidden="true"` 추가; JS에서 열기/닫기 시 aria-hidden 토글 + 닫기 버튼 포커스 이동 |
| **Hero 섹션** | `<section class="center-hero" aria-label="휴그로 센터 소개">` |
| **GNB chevron** | `<svg class="gnb-chevron" aria-hidden="true">` (장식용 아이콘 숨김) |
| **util-sep** | `<span class="util-sep" aria-hidden="true">` (시각적 구분자 숨김) |
| **lang-select** | `lang-select__btn`에 `aria-expanded aria-haspopup="listbox"` 추가; JS 드롭다운 토글 로직 추가 |

---

---

# 1. Overview

## Page Name

Hugro Center

---

## Page Type

Editorial Experience Article

---

## Purpose

휴그로 센터를 단순한 시설 소개 페이지가 아닌

하나의 에디토리얼 콘텐츠처럼 경험하게 만든다.

---

사용자는

정보를 읽는 것이 아니라

공간을 탐험해야 한다.

---

# 2. Project Rules

최우선 기준

1. MASTER_CONTEXT.md
2. Current-Design-System.md
3. Token-Mapping-Table.md
4. Main_Page_Reference_Analysis.md
5. Center_Page_Spec.md

---

충돌 발생 시

상위 문서를 우선한다.

---

# 3. Benchmark

Reference

https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20328&cookieDiveWeb=Y

---

## Purpose of Benchmark

콘텐츠 구조 참고

에디토리얼 경험 참고

스크롤 기반 스토리텔링 참고

---

참고 대상

- Hero 구조
- 콘텐츠 흐름
- 챕터 구성
- 이미지 활용 방식
- 본문 전개 방식
- CTA 구성
- Related Post 영역

---

참고 금지

- 컬러
- 폰트
- 컴포넌트 디자인
- 카드 디자인
- 버튼 스타일
- 인터랙션 스타일

---

# 4. Design System Policy

현재 구축된 디자인 시스템을 절대 유지한다.

---

반드시 유지

- Typography
- Color System
- Semantic Tokens
- Component Library
- Button Style
- Card Style
- Radius System
- Spacing System
- Responsive Rules

---

금지

- 새로운 디자인 시스템 생성
- 새로운 컬러 생성
- 현대카드 스타일 복제
- 새로운 UI 생성

---

페이지는

Main Page와 동일한 브랜드가 만든 페이지처럼 보여야 한다.

---

# 5. Content Source

현재 휴그로 페이지 콘텐츠를 사용한다.

https://www.kmeditour.co.kr/ko/hugro

---

사용 가능 콘텐츠

- 휴그로 소개
- 웰니스 철학
- 피부 분석
- 위치
- 층별 공간
- 방문 상담

---

새로운 서비스 생성 금지

---

# 6. User Journey

Discover

↓

Understand

↓

Experience

↓

Explore

↓

Trust

↓

Consultation

↓

Related Content

---

# 7. Information Architecture

## Section 01

Hero

---

대형 대표 이미지

---

Title

HUGRO CENTER

---

Subtitle

도심 속 프라이빗 웰니스 & 뷰티 공간

---

Description

AI 기반 피부 분석과 맞춤형 스킨케어 프로그램을 통해

나만의 아름다움과 휴식을 경험하는 공간

---

형태

DIVE Hero 구조 참고

---

## Section 02

Introduction

---

도심 속 프라이빗 웰니스 & 뷰티 공간

---

휴그로 센터는 자연과 건강을 담은 브랜드 철학을 바탕으로

뷰티·케어·라이프스타일 경험을 하나의 공간에 담아낸 프리미엄 라운지입니다.

스토어와 프라이빗 케어 존이 유기적으로 연결되어

방문부터 상담, 체험까지 편안한 경험을 제공합니다.

압구정 중심에서

프리미엄 서울 라이프스타일과

K-뷰티 문화를 함께 경험할 수 있습니다.

---

형태

넓은 여백

짧은 문단

에디토리얼 스타일

---

## Section 03

The Hugro Philosophy

---

Title

Beauty Beyond Treatment

---

휴그로는 단순한 시술 공간이 아닙니다.

피부를 이해하고

개인에게 맞는 경험을 제안하며

뷰티와 웰니스를 연결하는 공간입니다.

---

대표 이미지 삽입

---

## Section 04

The Experience

---

Title

Personalized Beauty Experience

---

정밀 피부 분석

맞춤형 상담

개인 맞춤 프로그램

전문 스킨케어 솔루션

---

이미지

피부 분석 장비

상담 공간

프로그램 경험 이미지

---

DIVE 본문 챕터 구조 참고

---

## Section 05

Inside Hugro

---

Title

Explore the Space

---

### B1

Premium Massage & Spa

전문 테라피 프로그램을 통해

편안한 힐링과 웰니스를 경험하는 공간

---

대형 이미지

---

### 1F

Hugro Center

정밀 피부 분석과 맞춤형 프로그램을 기반으로

전문적인 스킨케어 솔루션을 경험하는 공간

---

대형 이미지

---

### 2F

Exhibition Gallery

브랜드 전시

제품 쇼케이스

교육 프로그램이 운영되는 공간

---

대형 이미지

---

중요

현재 슬라이더 제거

탭 제거

각 층을 독립된 콘텐츠 챕터로 구성

---

## Section 06

Location Story

---

Title

In the Heart of Apgujeong

---

쇼핑과 라이프스타일을 함께 즐길 수 있는

압구정과 가로수길 사이에 위치합니다.

---

서울을 대표하는 라이프스타일 중심지에서

프리미엄 K-뷰티 경험을 제공합니다.

---

주소

서울특별시 강남구 압구정로14길 22

---

지도는 보조 요소

---

## Section 07

Visit Hugro Center

---

Title

Begin Your Experience

---

방문 일정 및 프로그램은

상담을 통해 개별적으로 안내됩니다.

---

CTA

상담 예약하기

---

# 8. Related Content

DIVE의 Related Post 구조를 참고한다.

---

페이지 하단에

관련 서비스 콘텐츠를 노출한다.

---

추천 콘텐츠

Beauty Concierge

Medical Concierge

Personal Skin Solution

Cosmetics

Medical Services

Tour Concierge

---

형태

4 Column Grid

Desktop

2 Column Tablet

1 Column Mobile

---

카드 클릭 시

관련 페이지 이동

---

목적

체류시간 증가

서비스 탐색 증가

SEO 강화

---

# 9. Layout Direction

구성

Hero

↓

Intro

↓

Philosophy

↓

Experience

↓

Space Story

↓

Location

↓

Consultation

↓

Related Content

---

정보 페이지 금지

브로셔 금지

시설 나열 금지

---

사용자는

하나의 프리미엄 매거진 콘텐츠를 읽는 느낌을 받아야 한다.

---

# 10. Success Criteria

사용자는 페이지 탐색 후

휴그로 센터를

단순한 피부관리 시설이 아니라

서울에서 경험할 수 있는

Premium Beauty & Wellness Destination

으로 이해해야 한다.

---

페이지 이탈 없이

관련 콘텐츠 탐색 또는 상담 예약으로 연결되어야 한다.
