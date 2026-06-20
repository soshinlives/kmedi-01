# MASTER_CONTEXT.md

# K-Medi Tour Project Constitution

본 문서는 K-Medi Tour 프로젝트의 최상위 기준 문서이다.

모든 디자인, 개발, IA, 콘텐츠 작업은 본 문서를 기준으로 진행한다.

---

# 1. Project Overview

## Project Name

K-Medi Tour

## Project Goal

한국의 의료, 뷰티, 여행 서비스를 연결하는 프리미엄 컨시어지 플랫폼 구축

---

## Brand Positioning

Premium Concierge in Korea

---

## Service Categories

### Beauty

- Cosmetic
- Personal Skin Solution
- Beauty Concierge

### Medical

- Procedure
- Clinic
- Wellness

### Travel

- Hotel
- Tour
- Transportation
- Experience

---

# 2. Brand Principles

## Keywords

- Premium
- Concierge
- Hospitality
- Editorial
- Modern Luxury
- Trust

## Avoid

- 병원 홈페이지
- 의료 광고 사이트
- 저가 여행사
- 쇼핑몰 중심 UI
- 과도한 판매 중심 랜딩페이지

---

# 3. Document Structure

프로젝트는 아래 문서를 기준으로 운영한다.

## MASTER_CONTEXT.md

프로젝트 최상위 기준 문서

브랜드 방향

프로젝트 목표

작업 원칙

관리

---

## IA

Information Architecture

Source of Truth

../../../menu/KMT_IA_update.xlsx

관리 대상

- 메뉴 구조
- 페이지 구조
- URL 구조
- 페이지 추가 여부
- 페이지 삭제 여부

구조 관련 의사결정은 반드시 IA를 기준으로 한다.

---

## Current-Design-System.md

현재 구현 완료된 웹사이트를 기준으로 정리된 디자인 시스템 문서

포함 내용

- Design Language
- Typography
- Color System
- Component Rules
- Design Tokens

디자인 기준 문서로 사용한다.

---

## Token-Mapping-Table.md

현재 구현된 토큰 구조 및 변수 매핑 문서

개발 및 유지보수 참고용

---

## Main_Page_Reference_Analysis.md

현재 개발 완료된 Main Page를 분석한 문서

Reference Implementation

신규 페이지는 해당 문서를 참고하여

동일한 사용자 경험을 유지해야 한다.

---

## Page Specifications

각 페이지의 목적과 콘텐츠 방향을 정의한다.

현재 구현 완료 / 작성됨

- About_Page_Spec_v0.2.md — about.html 브랜드 방향·목적 정의
- Center_Page_Spec.md — center.html 에디토리얼 경험 기사 스펙 (휴그로센터)
- Personal_Skin_Sol_Page_Spec.md — skin-sol.html (나의 피부 솔루션 찾기) — 2026-06-19 작성

---

# 4. Current Build Policy

현재 작업 폴더의 개발 완료 파일을

프로젝트의 실제 기준 화면으로 사용한다.

작업 시작 전 반드시 현재 구현된 파일을 확인한다.

현재 구현 완료 파일

**HTML**

- index.html (메인 페이지)
- about.html (소개 페이지)
- center.html (휴그로센터 페이지)
- skin-sol.html (나의 피부 솔루션 찾기 페이지)
- cosmetic.html (코스메틱 쇼핑 리스팅 페이지)
- product.html (코스메틱 상품 상세 페이지 — cosmetic.html 카드 클릭 진입, sessionStorage 데이터 연동)
- procedure.html (프리미엄 시술 페이지 — page-hero--navy)
- travel.html (트래블 페이지 — page-hero--navy)
- faq.html (FAQ 페이지 — page-hero--white)
- skin-analysis.html (AI 피부 분석 페이지)

**CSS** (`css/` 폴더 — 페이지별 분리)

로드 순서: `reset.css` → `theme.css` → `common.css` → `css/components/*.css` → `[page].css`

- css/reset.css (브라우저 정규화 — box-sizing, margin/padding, 기본 스타일)
- css/theme.css (디자인 토큰 — Primitive + Semantic + Component + Navy Scale + Overlay + Breakpoint 참고값)
- css/common.css (공통 레이아웃 — Header + 테마 모디파이어, Footer, GNB, Mobile Bar, `.page-hero`, `.cta-banner`, Utilities)

`css/components/` (공통 컴포넌트 — common.css에서 분리)

- css/components/button.css — `.btn*`, `.link-arrow`
- css/components/accordion.css — `.acc*` (색상·구조·애니메이션 공통)
- css/components/modal.css — `.login-modal*`, `.proc-sheet*`
- css/components/card.css — `.prod-card*`
- css/components/tab.css — `.tab-line*`, `.tab-pill*`

페이지 전용 CSS:

- css/home.css (Home / index.html 전용 스타일)
- css/about.css (About 페이지 전용 스타일 — header--solid 사용)
- css/center.css (Center 페이지 전용 스타일)
- css/skin-sol.css (Personal Skin Solution 페이지 전용 스타일 — header--light 사용)
- css/cosmetic.css (코스메틱 쇼핑 리스팅 페이지 전용 스타일 — header--light 사용)
- css/product.css (코스메틱 상품 상세 페이지 전용 스타일 — header--solid 사용)
- css/procedure.css (시술 페이지 전용 스타일 — page-hero--navy)
- css/travel.css (트래블 페이지 전용 스타일 — page-hero--navy)
- css/faq.css (FAQ 페이지 전용 스타일 — header--light, page-hero--white)
- css/skin-analysis.css (AI 피부 분석 페이지 전용 스타일)

**JS** (`js/` 폴더)

- js/app.js (인터랙션 — `applyLang()` 헬퍼로 언어 선택 로직 통합)
- js/image-slot.js (커스텀 이미지 슬롯)
- js/contact-popup.js (문의하기 플로팅 버튼 + 팝업 — 모든 페이지 공통 주입)
- js/pss-state.js (Personal Skin Solution 퀴즈 상태 관리)

현재 구현된 결과를 우선 기준으로 사용한다.

과거 자료보다

현재 구현된 결과를 우선 참고한다.

---

# 5. Document Priority

충돌 발생 시 아래 순서를 따른다.

1. MASTER_CONTEXT.md
2. IA
3. Current-Design-System.md
4. Main_Page_Reference_Analysis.md
5. Page_Spec.md

---

# 6. Main Page Policy

현재 구현 완료된 Main Page는 프로젝트의 기준 페이지이며

Reference Implementation으로 사용한다.

신규 페이지는 메인 페이지와 동일한 경험을 제공해야 한다.

유지 대상

- Visual Tone
- Hospitality Mood
- Editorial Layout
- Component Density
- Mobile Interaction
- Section Rhythm
- CTA Flow

모든 신규 페이지는 반응형으로 구현한다.

현재 구현 완료된 Main Page의 반응형 구조를 기준으로 한다.

신규 페이지 생성 시

- Desktop
- Tablet
- Mobile

환경을 모두 고려한다.

임의로 새로운 breakpoint를 생성하지 않는다.

Main_Page_Reference_Analysis.md에 정리된

- breakpoint
- media query
- responsive behavior

를 우선 계승한다.

---

# 7. Existing Service Policy

https://www.kmeditour.co.kr

기존 서비스는 기능 및 콘텐츠 참고용으로 사용한다.

참고 가능

- 예약 구조
- 회원 구조
- 문의 구조
- 관리자 구조
- 운영 방식

디자인 기준으로 사용하지 않는다.

---

# 8. Personal Skin Solution Policy

나의 피부 솔루션 찾기은 독립 서비스가 아니다.

Beauty 카테고리 내부 서비스로 운영한다.

포함 범위

- Skin Analysis
- Skin Type Result
- Ingredient Recommendation
- Product Recommendation

예약 필수 기능이 아니다.

---

# 9. Working Workflow

신규 페이지 생성 시

1. MASTER_CONTEXT 확인
2. IA 확인
3. Current-Design-System 확인
4. Main_Page_Reference_Analysis 확인
5. Page_Spec 확인
6. 페이지 제작

순서로 진행한다.

---

# 10. Working Rules

작업 전

- IA 확인
- Current-Design-System 확인
- Main_Page_Reference_Analysis 확인
- Page_Spec 확인

작업 중

- 브랜드 방향 유지
- Main Page 경험 유지
- IA 구조 준수

작업 후

- UX 검증
- 구조 검증
- 브랜드 검증

추정 생성 금지

정보가 부족하면 질문 후 진행한다.

---

# 11. Change Management

브랜드 변경

→ MASTER_CONTEXT 수정

---

IA 변경

→ IA 수정

---

디자인 시스템 변경

→ Current-Design-System 수정

---

토큰 구조 변경

→ Token-Mapping-Table 수정

---

메인 페이지 UX 기준 변경

→ Main_Page_Reference_Analysis 수정

---

페이지 목적 변경

→ Page_Spec 수정

---

# 12. Success Criteria

사용자는 K-Medi Tour를

단순 병원 예약 플랫폼이 아닌

의료 · 뷰티 · 여행 경험을 연결하는

Premium Concierge in Korea

브랜드로 이해해야 한다.

또한 자연스럽게 서비스 탐색 및 상담 문의로 이어져야 한다.
