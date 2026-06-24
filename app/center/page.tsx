import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import "../../styles/center.css";

const PAGE_INLINE: string[] = [
`// Inside Hugro Carousel
(function(){
  var ihcSlides = [
    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85', alt: 'B1 Premium Massage & Spa' },
    { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85', alt: '1F Hugro Center' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85', alt: '2F Exhibition Gallery' }
  ];
  var ihcEl   = document.querySelector('.ihc');
  if (!ihcEl) return;
  var ihcImg  = document.getElementById('ihcImg');
  var ihcTabs = ihcEl.querySelectorAll('.ihc__tab');
  var ihcInfos= ihcEl.querySelectorAll('.ihc__info');
  var ihcPrev = ihcEl.querySelector('.ihc__arrow--prev');
  var ihcNext = ihcEl.querySelector('.ihc__arrow--next');
  var ihcCur  = 0;

  function ihcGoTo(idx) {
    idx = (idx + ihcSlides.length) % ihcSlides.length;
    ihcCur = idx;
    ihcImg.style.opacity = '0';
    setTimeout(function(){
      ihcImg.src = ihcSlides[idx].src;
      ihcImg.alt = ihcSlides[idx].alt;
      ihcImg.style.opacity = '1';
    }, 220);
    ihcTabs.forEach(function(t, i){ t.classList.toggle('is-active', i === idx); });
    ihcInfos.forEach(function(info, i){ info.classList.toggle('is-active', i === idx); });
  }

  ihcTabs.forEach(function(tab, i){ tab.addEventListener('click', function(){ ihcGoTo(i); }); });
  ihcPrev.addEventListener('click', function(){ ihcGoTo(ihcCur - 1); });
  ihcNext.addEventListener('click', function(){ ihcGoTo(ihcCur + 1); });
})();`,
`// Treatment carousel
(function(){
  var track   = document.getElementById('treatmentTrack');
  if (!track) return;
  var slides  = track.querySelectorAll('.treatment-carousel__slide');
  var dots    = document.querySelectorAll('#treatmentDots .treatment-carousel__dot');
  var btnPrev = document.querySelector('.treatment-carousel__btn--prev');
  var btnNext = document.querySelector('.treatment-carousel__btn--next');
  var total   = slides.length;
  var cur     = 0;

  function updateBtns() {
    btnPrev.classList.toggle('is-active', cur > 0);
    btnNext.classList.toggle('is-active', cur < total - 1);
  }

  function goTo(idx) {
    if (idx < 0 || idx >= total) return;
    cur = idx;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dots.forEach(function(d, i){
      d.classList.toggle('is-active', i === cur);
      d.setAttribute('aria-current', i === cur ? 'true' : 'false');
    });
    updateBtns();
  }

  btnPrev.addEventListener('click', function(){ goTo(cur - 1); });
  btnNext.addEventListener('click', function(){ goTo(cur + 1); });
  dots.forEach(function(d, i){ d.addEventListener('click', function(){ goTo(i); }); });
  goTo(0);
})();`,
`(function(){
  const trigger = document.getElementById('loginTrigger');
  const modal   = document.getElementById('loginModal');
  const close   = document.getElementById('loginClose');
  const backdrop= document.getElementById('loginBackdrop');
  function openModal(){ modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; var first=modal.querySelector('input:not([type=hidden]),button:not([disabled])'); if(first) setTimeout(function(){first.focus();},50); }
  function closeModal(){ modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; if(trigger) trigger.focus(); }
  if (trigger) trigger.addEventListener('click', function(e){ e.preventDefault(); openModal(); });
  const gnbLoginBtn = document.querySelector('.gnb-login-btn');
  if (gnbLoginBtn) gnbLoginBtn.addEventListener('click', function(e){ e.preventDefault(); openModal(); });
  close.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });
  const pwdInput = document.getElementById('loginPassword');
  const pwdToggle = document.getElementById('loginPwdToggle');
  const eyeIcon = document.getElementById('eyeIcon');
  const eyeOffSvg = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  const eyeOnSvg = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  if (pwdToggle) pwdToggle.addEventListener('click', function(){
    const isHidden = pwdInput.type === 'password';
    pwdInput.type = isHidden ? 'text' : 'password';
    eyeIcon.innerHTML = isHidden ? eyeOffSvg : eyeOnSvg;
  });
})();`,
];

export default function CenterPage() {
  return (
    <SiteLayout mobileActive="center" pageInline={PAGE_INLINE} afterMain={
        <>
        {/* ============================== 문의 (CONTACT) ============================== */}
        </>
      }>
      {/* ══════════════════════════════════════════════════════
     HERO — ~55vh, title overlaid bottom-left
══════════════════════════════════════════════════════ */}
      <section className="center-hero" id="top" aria-label="휴그로 센터 소개">
        <div className="center-hero__bg">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2400&q=85" alt="Hugro Center — Premium Beauty & Wellness" />
        </div>
        <div className="center-hero__overlay" />
        <div className="center-hero__inner">
          <p className="center-hero__category">
            KMEDITOUR · 휴그로 센터
          </p>
          <h1 className="center-hero__title">
            프리미엄 뷰티 &
            <br />
            웰니스를 경험하다
          </h1>
          <p className="center-hero__date">
            Premium Beauty & Wellness Destination in Seoul
          </p>
          <Link href="/skin-analysis" className="center-hero__preview-btn">
            피부 분석 시스템 미리보기
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
      <section className="bc-bar">
        <div className="wrap">
          <nav className="bc-nav" aria-label="현재 위치">
            <Link href="/">
              홈
            </Link>
            <span className="bc-sep" aria-hidden="true">
              /
            </span>
            <span>
              뷰티
            </span>
            <span className="bc-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">
              휴그로센터 방문하기
            </span>
          </nav>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════
     ARTICLE BODY
══════════════════════════════════════════════════════ */}
      <div className="article-body">
        <div className="article-col">
          {/* Intro */}
          <div className="art-intro" data-reveal="">
            <p>
              서울 압구정 가로수길에 위치한 휴그로 센터는 단순한 피부 관리 공간이 아닙니다. 최첨단 AI 피부 분석 기술과 프리미엄 웰니스 프로그램을 통해 당신만의 맞춤형 뷰티 & 웰니스 여정을 설계합니다.
            </p>
            <p>
              뷰티와 웰니스, 라이프스타일이 하나로 연결되는 이곳에서 한국 프리미엄 스킨케어의 정수를 경험하세요. 전담 코디네이터가 처음부터 끝까지 함께하며 당신만을 위한 케어를 완성합니다.
            </p>
          </div>
          {/* Info Box — 방문 상담 안내 (DIVE 패턴: 인트로 직후 노출) */}
          <div className="art-section" id="visit-info" data-reveal="">
            <div className="info-box">
              <p className="info-box__name">
                휴그로 센터
              </p>
              <p className="info-box__title">
                방문 상담 안내
              </p>
              <dl className="info-table">
                <div className="info-row">
                  <dt className="info-dt">
                    장소
                  </dt>
                  <dd className="info-dd">
                    서울특별시 강남구 압구정로14길 22, 4층 (신사동)
                  </dd>
                </div>
                <div className="info-row">
                  <dt className="info-dt">
                    운영시간
                  </dt>
                  <dd className="info-dd">
                    연중무휴 09:00 — 21:00
                  </dd>
                </div>
                <div className="info-row">
                  <dt className="info-dt">
                    대표전화
                  </dt>
                  <dd className="info-dd">
                    <a href="tel:+8225140799">
                      +82-2-514-0799
                    </a>
                  </dd>
                </div>
                <div className="info-row">
                  <dt className="info-dt">
                    카카오 상담
                  </dt>
                  <dd className="info-dd">
                    @KMEDITOUR
                  </dd>
                </div>
                <div className="info-row">
                  <dt className="info-dt">
                    방문 상담
                  </dt>
                  <dd className="info-dd">
                    사전 예약 필수 · 전담 코디네이터 1:1 배정
                  </dd>
                </div>
                <div className="info-row">
                  <dt className="info-dt">
                    문의
                  </dt>
                  <dd className="info-dd">
                    <a href="mailto:contact@kmeditour.com">
                      contact@kmeditour.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* Section 01 — AI 피부 분석 */}
          <div className="art-section" data-reveal="">
            <p className="art-section__kicker">
              휴그로 센터의 경험
            </p>
            <h2 className="art-section__title">
              AI 피부 분석으로 시작하는
              <br />
              나만의 스킨케어
            </h2>
            <figure className="art-img art-img--center">
              <img src="/assets/img/hugro/hugro-center-2.png" alt="AI 피부 분석 시스템" loading="lazy" />
              <figcaption>
                휴그로 센터의 AI 피부 분석 시스템
              </figcaption>
            </figure>
            <p className="art-section__body">
              첨단 AI 피부 분석 시스템으로 피부 상태를 정밀하게 진단합니다. 수분, 유분, 모공, 색소, 탄력 등 피부의 다양한 요소를 수치화하여 당신의 피부에 가장 적합한 케어 방향을 제시합니다.
            </p>
            <p className="art-section__body">
              단순한 설문이나 육안 관찰이 아닌, 데이터 기반의 정밀 분석으로 시작하는 스킨케어. 휴그로 센터만의 차별화된 접근 방식입니다.
            </p>
            <div className="art-highlight">
              <p className="art-highlight__label">
                Skin Analysis
              </p>
              <p>
                AI 분석 결과는 실시간으로 전문 상담사와 공유되며, 맞춤형 케어 플랜 수립에 활용됩니다.
                <br />
                방문 시마다 이전 분석 결과와 비교하여 피부 변화를 추적합니다.
              </p>
            </div>
          </div>
          {/* Section 02 — 맞춤 스킨케어 캐러셀 */}
          <div className="art-section" data-reveal="">
            <p className="art-section__kicker">
              맞춤 스킨케어
            </p>
            <h2 className="art-section__title">
              피부 타입에 최적화된
              <br />
              프리미엄 트리트먼트
            </h2>
            <div className="treatment-carousel" id="treatmentCarousel">
              <div className="treatment-carousel__track-wrap">
                <div className="treatment-carousel__track" id="treatmentTrack">
                  {/* Slide 1 */}
                  <figure className="treatment-carousel__slide">
                    <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85" alt="딥 하이드레이션" loading="lazy" />
                    <figcaption>
                      딥 하이드레이션 — 수분 집중 트리트먼트 · 60분
                    </figcaption>
                  </figure>
                  {/* Slide 2 */}
                  <figure className="treatment-carousel__slide">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=85" alt="리프팅 & 탄력 케어" loading="lazy" />
                    <figcaption>
                      리프팅 & 탄력 — 피부 탄력 회복 케어 · 75분
                    </figcaption>
                  </figure>
                  {/* Slide 3 */}
                  <figure className="treatment-carousel__slide">
                    <img src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85" alt="브라이트닝 케어" loading="lazy" />
                    <figcaption>
                      브라이트닝 — 미백·광채 집중 케어 · 60분
                    </figcaption>
                  </figure>
                  {/* Slide 4 */}
                  <figure className="treatment-carousel__slide">
                    <img src="https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=900&q=85" alt="시카 진정 케어" loading="lazy" />
                    <figcaption>
                      시카 진정 — 예민·트러블 피부 집중 케어 · 45분
                    </figcaption>
                  </figure>
                  {/* Slide 5 */}
                  <figure className="treatment-carousel__slide">
                    <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85" alt="프리미엄 패키지" loading="lazy" />
                    <figcaption>
                      프리미엄 패키지 — 맞춤 복합 트리트먼트 · 120분
                    </figcaption>
                  </figure>
                </div>
                {/* /track */}
              </div>
              {/* /track-wrap */}
              <button className="treatment-carousel__btn treatment-carousel__btn--prev" aria-label="이전">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="treatment-carousel__btn treatment-carousel__btn--next" aria-label="다음">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <div className="treatment-carousel__dots" id="treatmentDots">
                <button className="treatment-carousel__dot is-active" aria-label="슬라이드 1 보기" aria-current="true" />
                <button className="treatment-carousel__dot" aria-label="슬라이드 2 보기" />
                <button className="treatment-carousel__dot" aria-label="슬라이드 3 보기" />
                <button className="treatment-carousel__dot" aria-label="슬라이드 4 보기" />
                <button className="treatment-carousel__dot" aria-label="슬라이드 5 보기" />
              </div>
            </div>
          </div>
          {/* Section 04 — 건물 안내 */}
          <div className="art-section" data-reveal="">
            <p className="art-section__kicker">
              건물 안내
            </p>
            <h2 className="art-section__title">
              몸과 마음을 위한
              <br />
              개인 맞춤 웰니스
            </h2>
            <figure className="art-img">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85" alt="Hugro Building 외관" loading="lazy" />
              <figcaption>
                노출 콘크리트와 내추럴 우드로 완성된 Hugro Building
              </figcaption>
            </figure>
            <div className="building-info">
              <dl className="building-table">
                <div className="building-row">
                  <dt className="building-dt">
                    건물명
                  </dt>
                  <dd className="building-dd">
                    Hugro Building
                  </dd>
                </div>
                <div className="building-row">
                  <dt className="building-dt">
                    주소
                  </dt>
                  <dd className="building-dd">
                    서울특별시 강남구 압구정로 123 (신사동)
                  </dd>
                </div>
                <div className="building-row">
                  <dt className="building-dt">
                    규모
                  </dt>
                  <dd className="building-dd">
                    지하 1층 / 지상 2층
                  </dd>
                </div>
                <div className="building-row">
                  <dt className="building-dt">
                    연면적
                  </dt>
                  <dd className="building-dd">
                    약 1,240㎡ (375평)
                  </dd>
                </div>
                <div className="building-row">
                  <dt className="building-dt">
                    준공
                  </dt>
                  <dd className="building-dd">
                    2024년 3월
                  </dd>
                </div>
                <div className="building-row">
                  <dt className="building-dt">
                    설계 콘셉트
                  </dt>
                  <dd className="building-dd">
                    노출 콘크리트 & 내추럴 우드 — 미니멀하고 따뜻한 공간
                  </dd>
                </div>
                <div className="building-row">
                  <dt className="building-dt">
                    주차
                  </dt>
                  <dd className="building-dd">
                    건물 전용 10대 / 인근 공영주차장 이용 가능
                  </dd>
                </div>
                <div className="building-row">
                  <dt className="building-dt">
                    운영시간
                  </dt>
                  <dd className="building-dd">
                    평일 10:00 — 20:00 · 토요일 10:00 — 18:00 · 일요일 휴무
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* Inside Hugro — Floor head */}
          <div className="floors-head" data-reveal="">
            <p className="floors-head__kicker">
              공간 안내
            </p>
            <h2 className="floors-head__title">
              Inside Hugro
            </h2>
          </div>
          {/* Inside Hugro Carousel */}
          <div className="ihc" data-reveal="">
            {/* 플로어 탭 — 사진 위쪽 (outside) */}
            <div className="ihc__tabs">
              <button className="ihc__tab is-active" data-idx="0">
                B1 Floor
              </button>
              <button className="ihc__tab" data-idx="1">
                1F Floor
              </button>
              <button className="ihc__tab" data-idx="2">
                2F Floor
              </button>
            </div>
            <div className="ihc__stage">
              {/* 이전 화살표 */}
              <button className="ihc__arrow ihc__arrow--prev" aria-label="이전 공간">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              {/* 이미지 */}
              <div className="ihc__img-wrap">
                <img className="ihc__img" id="ihcImg" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85" alt="B1 Premium Massage & Spa" loading="lazy" />
              </div>
              {/* 다음 화살표 */}
              <button className="ihc__arrow ihc__arrow--next" aria-label="다음 공간">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
            {/* 플로어별 텍스트 정보 */}
            <div className="ihc__infos">
              <div className="ihc__info is-active">
                <p className="ihc__level">
                  B1 Floor
                </p>
                <h3 className="ihc__title">
                  Premium Massage & Spa
                </h3>
                <p className="ihc__body">
                  깊은 휴식과 완벽한 회복을 위한 공간. 풀바디 마사지부터 아로마테라피, 핫스톤 테라피까지 프리미엄 웰니스 서비스를 경험하세요.
                </p>
              </div>
              <div className="ihc__info">
                <p className="ihc__level">
                  1F Floor
                </p>
                <h3 className="ihc__title">
                  Hugro Center
                </h3>
                <p className="ihc__body">
                  AI 피부 분석과 맞춤 스킨케어 상담이 이루어지는 메인 공간. 방문하는 순간부터 당신만을 위한 프리미엄 케어가 시작됩니다.
                </p>
              </div>
              <div className="ihc__info">
                <p className="ihc__level">
                  2F Floor
                </p>
                <h3 className="ihc__title">
                  Exhibition Gallery
                </h3>
                <p className="ihc__body">
                  뷰티와 라이프스타일을 주제로 한 큐레이션 전시 공간. 계절마다 바뀌는 기획 전시와 프리미엄 뷰티 브랜드 팝업이 열립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /article-col */}
        {/* Location back in article-col */}
        <div className="article-col">
          <div className="location-section" data-reveal="">
            {/* Info header */}
            <div className="location-info">
              <p className="eyebrow">
                LOCATION
              </p>
              <h2>
                Hugro Center
              </h2>
              <div className="location-meta">
                <span>
                  서울특별시 강남구 압구정로14길 22, 4층
                </span>
                <span>
                  압구정로데오역 3번 출구 도보 5분
                </span>
                <span>
                  연중무휴 09:00 — 21:00
                </span>
                <a href="tel:+8225140799">
                  +82-2-514-0799
                </a>
              </div>
            </div>
            {/* Premium map card */}
            <div className="map-card">
              <iframe src="https://maps.google.com/maps?q=37.5228428,127.0230945&hl=ko&z=16&output=embed" title="휴그로 센터 위치 — 서울특별시 강남구 압구정로14길 22" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1} />
              <a href="https://www.google.com/maps?q=37.5228428,127.0230945" target="_blank" rel="noopener noreferrer" className="map-card__btn">
                길찾기
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
          <div className="article-body-end" />
        </div>
        {/* /article-col */}
      </div>
      {/* /article-body */}
      {/* ══════════════════════════════════════════════════════
     CTA BANNER — dark full-width
══════════════════════════════════════════════════════ */}
      <div className="cta-banner" id="consultation" data-reveal="">
        <div>
          <p className="cta-banner__label">
            방문 상담 예약
          </p>
          <p className="cta-banner__title">
            휴그로 센터를 경험할 준비가 되셨나요?
          </p>
        </div>
        <a href="#" className="cta-banner__btn">
          HUGRO CENTER 방문 예약하기
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
      {/* ══════════════════════════════════════════════════════
     APP BANNER — vivid blue promotional strip
══════════════════════════════════════════════════════ */}
      <div className="app-banner">
        <div className="app-banner__inner">
          <div className="app-banner__text">
            <p className="app-banner__title">
              여기에서 간편하게 예약하세요
            </p>
          </div>
          <div className="app-banner__qr" role="img" aria-label="QR 코드">
            <svg viewBox="0 0 100 100" width="84" height="84" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="38" height="38" fill="none" stroke="white" strokeWidth="4" />
              <rect x="10" y="10" width="22" height="22" fill="white" />
              <rect x="60" y="2" width="38" height="38" fill="none" stroke="white" strokeWidth="4" />
              <rect x="68" y="10" width="22" height="22" fill="white" />
              <rect x="2" y="60" width="38" height="38" fill="none" stroke="white" strokeWidth="4" />
              <rect x="10" y="68" width="22" height="22" fill="white" />
              <rect x="60" y="60" width="8" height="8" fill="white" />
              <rect x="72" y="60" width="8" height="8" fill="white" />
              <rect x="84" y="60" width="8" height="8" fill="white" />
              <rect x="60" y="72" width="8" height="8" fill="white" />
              <rect x="72" y="72" width="8" height="8" fill="white" />
              <rect x="60" y="84" width="8" height="8" fill="white" />
              <rect x="84" y="84" width="8" height="8" fill="white" />
              <rect x="44" y="2" width="12" height="8" fill="white" />
              <rect x="44" y="14" width="12" height="8" fill="white" />
              <rect x="44" y="26" width="12" height="8" fill="white" />
              <rect x="2" y="44" width="8" height="12" fill="white" />
              <rect x="14" y="44" width="8" height="12" fill="white" />
              <rect x="26" y="44" width="8" height="12" fill="white" />
              <rect x="44" y="44" width="12" height="12" fill="white" />
              <rect x="60" y="44" width="8" height="12" fill="white" />
              <rect x="72" y="44" width="8" height="12" fill="white" />
              <rect x="84" y="44" width="8" height="12" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      {/* ══════════════════════════════════════════════════════
     RELATED POSTS — 4-col card grid
══════════════════════════════════════════════════════ */}
      <section className="related-posts">
        <div className="related-posts__inner">
          <h2 className="related-posts__heading">
            연관 포스트
          </h2>
          <div className="related-posts__grid">
            <a href="#" className="rpost-card">
              <div className="rpost-card__img">
                <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" alt="AI 피부 진단" loading="lazy" />
              </div>
              <p className="rpost-card__title">
                AI 피부 진단, 처음 받아본 후기
              </p>
              <p className="rpost-card__sub">
                휴그로 센터 나의 피부 솔루션 찾기…
              </p>
            </a>
            <a href="#" className="rpost-card">
              <div className="rpost-card__img">
                <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80" alt="프리미엄 스킨케어" loading="lazy" />
              </div>
              <p className="rpost-card__title">
                서울에서 즐기는 프리미엄 스킨케어
              </p>
              <p className="rpost-card__sub">
                압구정 가로수길, 뷰티 & 웰니스 공간…
              </p>
            </a>
            <a href="#" className="rpost-card">
              <div className="rpost-card__img">
                <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80" alt="휴그로 빌딩" loading="lazy" />
              </div>
              <p className="rpost-card__title">
                Hugro Building 완전 정복 가이드
              </p>
              <p className="rpost-card__sub">
                B1부터 2F까지, 층별 공간 안내
              </p>
            </a>
            <a href="#" className="rpost-card">
              <div className="rpost-card__img">
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80" alt="뷰티" loading="lazy" />
              </div>
              <p className="rpost-card__title">
                뷰티 예약하는 법
              </p>
              <p className="rpost-card__sub">
                전담 코디네이터 1:1 케어 시스템…
              </p>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
