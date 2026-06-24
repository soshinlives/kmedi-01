import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import "../styles/home.css";

const PAGE_INLINE: string[] = [
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
})();

(function(){
  const btn      = document.getElementById('contactBtn');
  const sheet    = document.getElementById('contactSheet');
  const backdrop = document.getElementById('contactBackdrop');
  if (!btn || !sheet) return;

  function openSheet() {
    sheet.classList.add('is-open');
    sheet.setAttribute('aria-hidden', 'false');
    btn.classList.add('is-open');
    btn.setAttribute('aria-label', '닫기');
    document.body.style.overflow = 'hidden';
  }
  function closeSheet() {
    sheet.classList.remove('is-open');
    sheet.setAttribute('aria-hidden', 'true');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-label', '문의하기');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function() {
    sheet.classList.contains('is-open') ? closeSheet() : openSheet();
  });
  if (backdrop)  backdrop.addEventListener('click', closeSheet);
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeSheet(); });

  document.querySelectorAll('.contact-sheet__copy').forEach(function(copyBtn) {
    copyBtn.addEventListener('click', function() {
      var text = this.dataset.copy;
      var self = this;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          self.textContent = '복사됨';
          setTimeout(function() { self.textContent = '복사'; }, 2000);
        });
      } else {
        var el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        self.textContent = '복사됨';
        setTimeout(function() { self.textContent = '복사'; }, 2000);
      }
    });
  });
})();`,
];

export default function HomePage() {
  return (
    <SiteLayout home mobileActive="home" pageInline={PAGE_INLINE} afterMain={
        <>
        {/* ============================== 문의 (CONTACT) ============================== */}
        </>
      }>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="hero__slides">
          {/* 1번 고정: 브랜드 메시지 */}
          <div className="hero__slide" style={{ backgroundImage: "url('assets/hero/hero-man-hotel.png')" }} data-title="의료부터 관광까지<br/>모든 케어" data-desc="체크인부터 귀국까지 퍼스널 컨시어지가 함께합니다." />
          {/* 2.뷰티 */}
          <div className="hero__slide hero__slide--event" style={{ backgroundImage: "url('assets/hero/hero-5.png')" }} data-title="여름 K-뷰티<br/>스페셜 이벤트" data-desc="첫 방문 고객 10% 할인 · 지금 신청하세요" />
          {/* 4.여행 */}
          <div className="hero__slide" style={{ backgroundImage: "url('assets/hero/hero-15.png')" }} data-title="서울의 아름다움<br/>그 중심에서" data-desc="한국의 전통과 현대가 어우러진 특별한 시간" />
          <div className="hero__slide" style={{ backgroundImage: "url('assets/hero/hero-gung.jpeg')" }} data-title="천년의 역사<br/>고궁 투어" data-desc="조선의 아름다움을 간직한 고궁에서의 특별한 경험" />
          <div className="hero__slide hero__slide--mobile-only" style={{ backgroundImage: "url('assets/hero/hero-tour-pro-mo_1.png')" }} data-title="특별한 당신을 위한<br/>프리미엄 혜택" data-desc="호텔과 면세점, 모두 특별한 우대 혜택으로 더 럭셔리하게" />
          <div className="hero__overlay" />
          <div className="hero__inner wrap">
            <h1 className="hero__title">
              의료부터 관광까지
              <br />
              모든 케어
            </h1>
            <p className="hero__desc" />
            <button className="hero__down-btn" aria-label="아래로 스크롤">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="hero__counter" aria-live="polite">
              <span className="hero__counter-cur">
                01
              </span>
              <span className="hero__counter-sep">
                /
              </span>
              <span className="hero__counter-tot">
                03
              </span>
            </div>
            <a href="#how" className="hero__scroll" aria-label="아래로 스크롤">
              <span>
                SCROLL
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>
          <button className="hero__nav hero__nav--prev" aria-label="이전 슬라이드">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="hero__nav hero__nav--next" aria-label="다음 슬라이드">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <a href="#booking" className="hero__cta">
            상담 예약하기
          </a>
        </div>
      </section>
      {/* ============================== HOW IT WORKS ============================== */}
      <section className="section" id="how">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              서비스 이용 방법
            </h2>
            {/* <a href="#services" class="ed-head__more">SEE ALL</a> */}
          </div>
          {/* Desktop: 4-column photo card layout */}
          <div className="news-grid hiw-grid hiw-desktop">
            <article className="news-card" data-reveal="">
              <div className="news-card__img">
                <image-slot id="hiw-1" shape="rect" fit="cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=70" placeholder="사진 추가" />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  <small>
                    STEP
                  </small>
                  1
                </span>
              </div>
              <h3 className="news-card__title">
                시술 상담
              </h3>
              <p className="news-card__desc">
                한국 스킨케어 전문가와 피부 고민을 공유하고 문의 하세요. 피부 타입과 뷰티 목표를 위한 맞춤형 온라인 상담을 받으세요.
              </p>
            </article>
            <article className="news-card" data-reveal="">
              <div className="news-card__img">
                <image-slot id="hiw-2" shape="rect" fit="cover" src="https://images.unsplash.com/photo-1702737970081-79a1b42aea39?auto=format&fit=crop&w=900&q=70" placeholder="사진 추가" />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  <small>
                    STEP
                  </small>
                  2
                </span>
              </div>
              <h3 className="news-card__title">
                한국 예약 및 방문
              </h3>
              <p className="news-card__desc">
                저희는 고객들이 K-Beauty를 경험할 수 있도록 시술 예약과 치료 계획, 일정, 여행을 도와드립니다. 한국 서울에서 한국 뷰티 문화와 프리미엄 스킨케어 서비스를 경험하세요.
              </p>
            </article>
            <article className="news-card" data-reveal="">
              <div className="news-card__img">
                <image-slot id="hiw-3" shape="rect" fit="cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=70" placeholder="사진 추가" />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  <small>
                    STEP
                  </small>
                  3
                </span>
              </div>
              <h3 className="news-card__title">
                피부 관리 및 치료
              </h3>
              <p className="news-card__desc">
                피부 상태와 개인 미용 목표에 맞춘 프리미엄 한국 스킨케어 트리트먼트를 느껴보세요. 건강하고 빛나는 자연스러운 피부를 되찾기 위해 설계된 고급 K-뷰티 솔루션을 경험할 수 있습니다.
              </p>
            </article>
            <article className="news-card" data-reveal="">
              <div className="news-card__img">
                <image-slot id="hiw-4" shape="rect" fit="cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=70" placeholder="사진 추가" />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  <small>
                    STEP
                  </small>
                  4
                </span>
              </div>
              <h3 className="news-card__title">
                고객 맞춤 스케줄링
              </h3>
              <p className="news-card__desc">
                프리미엄 의료 서비스 외에도 고객님만을 위한 맞춤형 호텔, 여행, 쇼핑 서비스를 제공합니다. 공항 픽업부터 모든 여정을 여러분과 함께합니다.
              </p>
            </article>
          </div>
          {/* Mobile: numbered icon + step list layout */}
          <div className="hiw__grid hiw-mobile">
            <article className="hiw-card" data-reveal="">
              <div className="hiw-card__icon" data-num="1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 14a9 9 0 0 1 18 0" />
                  <path d="M3 14v3a2 2 0 0 0 2 2h1v-5H3z" />
                  <path d="M21 14v3a2 2 0 0 1-2 2h-1v-5h3z" />
                </svg>
              </div>
              <h3 className="hiw-card__step">
                <span className="hiw-step__prefix">
                  <b>
                    1
                  </b>
                  —
                </span>
                시술 상담
              </h3>
              <p className="hiw-card__desc">
                한국 스킨케어 전문가와 피부 고민을 공유하고 문의 하세요. 피부 타입과 뷰티 목표를 위한 맞춤형 온라인 상담을 받으세요.
              </p>
            </article>
            <article className="hiw-card" data-reveal="">
              <div className="hiw-card__icon" data-num="2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </div>
              <h3 className="hiw-card__step">
                <span className="hiw-step__prefix">
                  <b>
                    2
                  </b>
                  —
                </span>
                한국 예약 및 방문
              </h3>
              <p className="hiw-card__desc">
                저희는 고객들이 K-뷰티를 경험할 수 있도록 시술 예약과 치료 계획, 일정, 여행을 도와드립니다. 한국 서울에서 한국 뷰티 문화와 프리미엄 스킨케어 서비스를 경험하세요.
              </p>
            </article>
            <article className="hiw-card" data-reveal="">
              <div className="hiw-card__icon" data-num="3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.8 19.2 16 11l3.5-3.5a1.8 1.8 0 0 0-2.5-2.5L13.5 8.5 5.3 6.7a1 1 0 0 0-.9 1.7l4.2 3.2-2 2-2.5-.6a.8.8 0 0 0-.8 1.3l3 2.6 2.6 3a.8.8 0 0 0 1.3-.8l-.6-2.5 2-2 3.2 4.2a1 1 0 0 0 1.7-.9Z" />
                </svg>
              </div>
              <h3 className="hiw-card__step">
                <span className="hiw-step__prefix">
                  <b>
                    3
                  </b>
                  —
                </span>
                피부 관리 및 치료
              </h3>
              <p className="hiw-card__desc">
                피부 상태와 개인 미용 목표에 맞춘 프리미엄 한국 스킨케어 트리트먼트를 느껴보세요. 건강하고 빛나는 자연스러운 피부를 되찾기 위해 설계된 고급 K-뷰티 솔루션을 경험할 수 있습니다.
              </p>
            </article>
            <article className="hiw-card" data-reveal="">
              <div className="hiw-card__icon" data-num="4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="8" y1="14" x2="8" y2="14" />
                  <line x1="12" y1="14" x2="12" y2="14" />
                  <line x1="16" y1="14" x2="16" y2="14" />
                  <line x1="8" y1="18" x2="8" y2="18" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              </div>
              <h3 className="hiw-card__step">
                <span className="hiw-step__prefix">
                  <b>
                    4
                  </b>
                  —
                </span>
                고객 맞춤 스케줄링
              </h3>
              <p className="hiw-card__desc">
                프리미엄 의료 서비스 외에도 고객님만을 위한 맞춤형 호텔, 여행, 쇼핑 서비스를 제공합니다. 공항 픽업부터 모든 여정을 여러분과 함께합니다.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* ============================== SERVICES ============================== */}
      <section className="section section--surface" id="services">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              서비스
            </h2>
            {/* <a href="#" class="ed-head__more">SEE ALL</a> */}
          </div>
          <p className="sec-intro" data-reveal="">
            지방흡입, 미용 시술, 모발 이식, 건강검진부터
            <br className="mo-br" />
            프리미엄 서울 관광까지 —
            <br />
            분야별 최고의 전문가를 찾아 연결합니다.
          </p>
          <div className="acc" data-reveal="">
            <div className="acc-item is-open">
              <button className="acc-head" aria-expanded="false">
                휴그로센터
                <span className="acc-icon" aria-hidden="true" />
              </button>
              <div className="acc-body">
                <div className="acc-body__inner">
                  <span>
                    신사동에 위치한 KMEDITOUR 전용 공간. 상담·피부분석·코스메틱 쇼핑·라운지를 한 곳에서 경험할 수 있는 프리미엄 케어 베이스캠프입니다.
                  </span>
                  <Link href="/center" className="acc-detail-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="acc-item">
              <button className="acc-head" aria-expanded="true">
                뷰티
                <span className="acc-icon" aria-hidden="true" />
              </button>
              <div className="acc-body">
                <div className="acc-body__inner">
                  <span>
                    필러·보톡스·리프팅·레이저까지, 검증된 강남 클리닉과 전담 코디네이터가 당신에게 맞는 뷰티 시술을 안전하게 연결합니다.
                  </span>
                  <Link href="/procedure" className="acc-detail-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="acc-item">
              <button className="acc-head" aria-expanded="false">
                투어
                <span className="acc-icon" aria-hidden="true" />
              </button>
              <div className="acc-body">
                <div className="acc-body__inner">
                  <span>
                    서울의 품격 있는 숙소·쇼핑·미식 코스를 코디네이터가 직접 큐레이션합니다. 치료 전후의 여정도 특별하게 완성해 드립니다.
                  </span>
                  <Link href="/travel" className="acc-detail-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================== 추천 서비스, 뷰티시술 ============================== */}
      {/* ============================== WHY US ============================== */}
      <section className="section" id="whyus">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              우리를 선택하는 이유
            </h2>
            {/* <a href="/about" class="ed-head__more">SEE ALL</a> */}
          </div>
          <p className="sec-intro" data-reveal="">
            지방흡입, 미용 시술, 모발 이식, 건강검진부터 프리미엄 서울 관광까지 —
            <br />
            분야별 최고의 전문가를 찾아 연결합니다.
          </p>
          {/* Journey Banner */}
          <div className="why-journey" data-reveal="">
            <ul className="why-journey__icons">
              <li className="why-journey__icon-item">
                <span className="why-journey__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    <circle cx="12" cy="11" r="3.5" />
                    <path d="M8 19c0-2.2 1.8-4 4-4s4 1.8 4 4" />
                  </svg>
                </span>
                <span className="why-journey__icon-label">
                  맞춤형 뷰티 여정
                </span>
                <span className="why-journey__icon-sub">
                  나만을 위한 뷰티 플랜
                </span>
                <p className="why-journey__icon-desc">
                  개개인의 피부 고민과 라이프스타일을 고려하여 시술, 스킨케어, 사후관리까지 연결되는 맞춤형 K-Beauty 여정을 설계합니다.
                </p>
              </li>
              <li className="why-journey__icon-item">
                <span className="why-journey__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 6v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V6l-9-4z" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                  </svg>
                </span>
                <span className="why-journey__icon-label">
                  검증된 의료 네트워크
                </span>
                <span className="why-journey__icon-sub">
                  강남 엄선 파트너 병원
                </span>
                <p className="why-journey__icon-desc">
                  수준 높은 전문성과 안전성을 바탕으로 엄선된 한국 강남 의료 파트너와 함께 신뢰할 수 있는 의료 서비스를 제공합니다.
                </p>
              </li>
              <li className="why-journey__icon-item">
                <span className="why-journey__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.8 19.2 16 11l3.5-3.5a1.8 1.8 0 0 0-2.5-2.5L13.5 8.5 5.3 6.7a1 1 0 0 0-.9 1.7l4.2 3.2-2 2-2.5-.6a.8.8 0 0 0-.8 1.3l3 2.6 2.6 3a.8.8 0 0 0 1.3-.8l-.6-2.5 2-2 3.2 4.2a1 1 0 0 0 1.7-.9Z" />
                  </svg>
                </span>
                <span className="why-journey__icon-label">
                  K-뷰티 완전 체험
                </span>
                <span className="why-journey__icon-sub">
                  시술 그 이상의 경험
                </span>
                <p className="why-journey__icon-desc">
                  시술부터 쇼핑, 호텔, 사후관리까지 한국에서의 뷰티 여정을 하나로 연결하여 특별한 K-Beauty 경험을 제공합니다.
                </p>
              </li>
              <li className="why-journey__icon-item">
                <span className="why-journey__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="1" />
                    <rect x="2" y="7" width="20" height="5" rx="1" />
                    <line x1="12" y1="7" x2="12" y2="22" />
                    <path d="M12 7c0 0-1.3-3.5-4-2.5S6.5 7 8 7h4z" />
                    <path d="M12 7c0 0 1.3-3.5 4-2.5S17.5 7 16 7h-4z" />
                  </svg>
                </span>
                <span className="why-journey__icon-label">
                  전용 파트너 혜택
                </span>
                <span className="why-journey__icon-sub">
                  고객 전용 프리미엄 혜택
                </span>
                <p className="why-journey__icon-desc">
                  제휴 파트너와 함께하는 특별한 혜택으로 호텔, 쇼핑, 라이프스타일 서비스를 더욱 가치 있게 경험하실 수 있습니다.
                </p>
              </li>
            </ul>
            <div className="why-cta">
              <a href="#contact" className="btn btn--primary2">
                상담 예약하기
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ============================== TRUST BAND ============================== */}
      <section className="trust">
        <div className="wrap">
          <p className="trust__intro" data-reveal="">
            KMEDITOUR는 국내 정식 등록 의료관광 업체로서,
            <br />
            보건당국과 공식 기관의 인증과 검증을 받은 신뢰할 수 있는 파트너입니다.
            <br />
            한국 최고의 의료 전문성과 안심 케어를 그대로 전해드립니다.
          </p>
          <div className="trust__logos" data-reveal="">
            <div className="trust__logo">
              <image-slot id="cert-khidi" shape="rect" fit="contain" src="/assets/logo/khidi-logo-white.png" placeholder="인증 로고" />
            </div>
            <div className="trust__logo">
              <image-slot id="cert-mohw" shape="rect" fit="contain" src="/assets/logo/mhw-logo-white.png" placeholder="인증 로고" />
            </div>
            <div className="trust__logo">
              <image-slot id="cert-sgi" shape="rect" fit="contain" src="/assets/logo/sgi-logo-white.png" placeholder="인증 로고" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--surface" id="treatments">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              하이라이트
            </h2>
            {/* <a href="#" class="ed-head__more">SEE ALL</a> */}
          </div>
          <p className="sec-intro" data-reveal="">
            피부 고민부터 바디 케어까지,
            <span className="treat-highlight">
              당신에게 꼭 맞는 K-뷰티 시술
            </span>
            을 추천해드립니다.
            <br />
            한국 최고의 전문 의료진이 안전하고 검증된 결과로 안내합니다.
            <span className="treat__intro-en">
              From skin concerns to body care, we recommend the K-Beauty treatments that are right for you.
            </span>
          </p>
          <div className="treat-grid" data-reveal="">
            <a className="treat-card" href="#">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Filler
                </span>
                <h3 className="treat-card__title">
                  필러
                </h3>
                <p className="treat-card__desc">
                  꺼진 볼륨을 복원하여 자연스러운 볼륨과 세련된 얼굴 윤곽 완성
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </a>
            <a className="treat-card" href="#">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Botox
                </span>
                <h3 className="treat-card__title">
                  보톡스
                </h3>
                <p className="treat-card__desc">
                  과도한 근육 움직임을 완화하여 표정 주름을 개선하고 자연스러운 얼굴 라인을 완성
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </a>
            <a className="treat-card" href="#">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Thread Lift
                </span>
                <h3 className="treat-card__title">
                  실리프팅
                </h3>
                <p className="treat-card__desc">
                  프리미엄 흡수성 실을 이용해 처진 피부와 얼굴 윤곽을 개선하고 콜라겐 재생을 유도
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </a>
            <a className="treat-card" href="#">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Laser
                </span>
                <h3 className="treat-card__title">
                  레이저
                </h3>
                <p className="treat-card__desc">
                  프리미엄 레이저 시술로 피부 표면부터 진피층까지 정밀하게 접근하여 피부결·색소·탄력 개선
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </a>
            <a className="treat-card" href="#">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Skin Booster
                </span>
                <h3 className="treat-card__title">
                  스킨부스터
                </h3>
                <p className="treat-card__desc">
                  미세한 주입 방식을 통해 히알루론산 등 유효 성분을 피부 깊숙이 전달하여 수분감과 윤기를 되살림
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </a>
            <a className="treat-card" href="#">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Skin Care
                </span>
                <h3 className="treat-card__title">
                  피부관리
                </h3>
                <p className="treat-card__desc">
                  전문 의료 장비와 맞춤형 피부 솔루션을 통해 모공, 피부결, 흉터 등 다양한 피부 고민을 개선
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </a>
            <a className="treat-card" href="#">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Fat Dissolving
                </span>
                <h3 className="treat-card__title">
                  지방분해
                </h3>
                <p className="treat-card__desc">
                  첨단 지방분해 주사 및 에너지 기반 장비를 활용해 국소 지방을 정교하게 감소시키는 바디 컨투어링 프로그램
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </a>
            <Link className="treat-card" href="/cosmetic">
              <div className="treat-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=75')" }} />
              <div className="treat-card__overlay" />
              <div className="treat-card__body">
                <span className="treat-card__en">
                  Cosmetic
                </span>
                <h3 className="treat-card__title">
                  코스메틱
                </h3>
                <p className="treat-card__desc">
                  보습, 진정, 탄력 케어를 한 번에 개선하는 한국 프리미엄 스킨케어 솔루션
                </p>
                <span className="treat-card__link">
                  자세히 보기
                </span>
              </div>
            </Link>
          </div>
          <div className="treat-cta" data-reveal="">
            <a href="#booking" className="btn btn--primary2">
              상담 예약하기
            </a>
          </div>
        </div>
      </section>
      {/* ============================== BLOG ============================== */}
      <section className="section" id="why">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              매거진
            </h2>
            {/* <a href="#" class="ed-head__more">SEE ALL</a> */}
          </div>
          <div className="stay__grid">
            <a className="stay-card" href="#" data-reveal="">
              <div className="stay-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80')" }} />
              <p className="stay-card__label">
                Rooms & Suites
              </p>
              <h3 className="stay-card__title">
                고요와 전망이 머무는 객실
              </h3>
              <div className="stay-card__tags">
                <span>
                  클럽 인터컨티넨탈
                </span>
                <span>
                  이그제큐티브
                </span>
                <span>
                  스위트
                </span>
              </div>
            </a>
            <a className="stay-card" href="#dining" data-reveal="">
              <div className="stay-card__bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80')" }} />
              <p className="stay-card__label">
                Dining
              </p>
              <h3 className="stay-card__title">
                미식의 여정을 시작하다
              </h3>
              <div className="stay-card__tags">
                <span>
                  테이블 34
                </span>
                <span>
                  호빈
                </span>
                <span>
                  로비 라운지&바
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* ============================== FEATURE ============================== */}
      <section className="feature" id="wellness">
        <div className="feature__viewport" data-reveal="">
          <div className="feature__track">
            <div className="feature__slide">
              <div className="feature__main">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')" }} />
              </div>
              <div className="feature__caption">
                <div>
                  <p className="feature__kicker">
                    All-in-One Care
                  </p>
                  <h3 className="feature__title">
                    <span className="c-caption">
                      시술부터
                      <br />
                      회복까지
                    </span>
                    <br />
                    한 번에
                  </h3>
                </div>
                <div>
                  <p className="feature__desc">
                    상담·예약·통역·교통·숙소까지, 전담 코디네이터가 모든 여정을 1:1로 설계합니다. 시술 후 회복은 물론, 서울에서의 시간을 더 특별하게 채우는 프리미엄 컨시어지 케어를 만나보세요.
                  </p>
                  <a href="#" className="link-arrow">
                    자세히 보기
                    <span className="ar">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="feature__slide">
              <div className="feature__main">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80')" }} />
              </div>
              <div className="feature__caption">
                <div>
                  <p className="feature__kicker">
                    VIP Concierge
                  </p>
                  <h3 className="feature__title">
                    <span className="c-caption">
                      서울의 품격
                    </span>
                    을 온전히 누리다
                  </h3>
                </div>
                <div>
                  <p className="feature__desc">
                    프리미엄 숙소와 미식, 쇼핑까지 — 회복 후의 시간을 더 특별하게 채우는 맞춤 컨시어지 서비스. 당신의 일정에 맞춰 서울을 가장 우아하게 경험하는 방법을 제안합니다.
                  </p>
                  <a href="#" className="link-arrow">
                    자세히 보기
                    <span className="ar">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="feature__slide">
              <div className="feature__main">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')" }} />
              </div>
              <div className="feature__caption">
                <div>
                  <p className="feature__kicker">
                    Interpreter Service
                  </p>
                  <h3 className="feature__title">
                    <span className="c-caption">
                      언어 장벽
                    </span>
                    <br />
                    없는
                    <br />
                    안심 진료
                  </h3>
                </div>
                <div>
                  <p className="feature__desc">
                    상담부터 시술 전 과정까지 이중 언어 전담 통역이 동행합니다. 의료진과의 소통을 정확하게 전달하여 낯선 곳에서도 안심하고 케어받을 수 있습니다.
                  </p>
                  <a href="#" className="link-arrow">
                    자세히 보기
                    <span className="ar">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature__controls">
          <div className="feature__dots">
            <button aria-label="슬라이드 1" />
            <button className="is-active" aria-label="슬라이드 2" />
            <button aria-label="슬라이드 3" />
          </div>
        </div>
      </section>
      {/* ============================== HIGHLIGHTS / NEWS ============================== */}
      <section className="section" id="highlights">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              한국 여행 소식
            </h2>
            {/* <a href="#highlights" class="ed-head__more">SEE ALL</a> */}
          </div>
          <div className="filters" data-reveal="">
            <button className="filter is-active" data-cat="all">
              전체
            </button>
            <button className="filter" data-cat="offer">
              스페셜 오퍼
            </button>
            <button className="filter" data-cat="dining">
              다이닝
            </button>
            <button className="filter" data-cat="event">
              이벤트
            </button>
          </div>
          <div className="news-grid">
            <a className="news-card" href="#" data-cat="offer" data-reveal="">
              <div className="news-card__img">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=70')" }} />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  Special Offer
                </span>
                <span className="news-card__date">
                  2026.06.01
                </span>
              </div>
              <h3 className="news-card__title">
                여름을 더 특별하게, 서머 스테이케이션 패키지
              </h3>
            </a>
            <a className="news-card" href="#" data-cat="dining" data-reveal="">
              <div className="news-card__img">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=70')" }} />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  Dining
                </span>
                <span className="news-card__date">
                  2026.05.28
                </span>
              </div>
              <h3 className="news-card__title">
                제철 식재료로 완성한 특별한 식사 경험
              </h3>
            </a>
            <a className="news-card" href="#" data-cat="event" data-reveal="">
              <div className="news-card__img">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=70')" }} />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  Event
                </span>
                <span className="news-card__date">
                  2026.05.20
                </span>
              </div>
              <h3 className="news-card__title">
                프라이빗 라운지에서 즐기는 네트워킹 이벤트
              </h3>
            </a>
            <a className="news-card" href="#" data-cat="offer" data-reveal="">
              <div className="news-card__img">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=70')" }} />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  Special Offer
                </span>
                <span className="news-card__date">
                  2026.05.15
                </span>
              </div>
              <h3 className="news-card__title">
                클럽 인터컨티넨탈 업그레이드 프로모션
              </h3>
            </a>
            <a className="news-card" href="#" data-cat="dining" data-reveal="">
              <div className="news-card__img">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=70')" }} />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  Dining
                </span>
                <span className="news-card__date">
                  2026.05.09
                </span>
              </div>
              <h3 className="news-card__title">
                호빈, 미쉐린 셰프와 함께하는 한정 디너 코스
              </h3>
            </a>
            <a className="news-card" href="#" data-cat="event" data-reveal="">
              <div className="news-card__img">
                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=70')" }} />
              </div>
              <div className="news-card__meta">
                <span className="news-card__cat">
                  Event
                </span>
                <span className="news-card__date">
                  2026.05.02
                </span>
              </div>
              <h3 className="news-card__title">
                웨딩 페어 — 그랜드 볼룸에서 그리는 새로운 시작
              </h3>
            </a>
          </div>
          <div className="highlights__more" data-reveal="">
            <a href="#" className="btn btn--primary-outline">
              소식 더보기
            </a>
          </div>
        </div>
      </section>
      {/* ============================== CTA SECTION ============================== */}
      <section className="cta-dark" data-reveal="">
        <div className="wrap">
          <div className="cta-dark__inner">
            <h2 className="cta-dark__title">
              한국의 웰니스 여정을
              <br />
              시작할 준비가 되셨나요?
            </h2>
            <p className="cta-dark__desc">
              지금 상담을 예약하고, 전담 코디네이터와 함께
              <br />
              당신만의 K-Beauty 웰니스 여정을 설계해보세요.
            </p>
            <a href="#booking" className="btn btn--primary">
              상담 예약하기
            </a>
          </div>
        </div>
      </section>
      {/* ============================== FOLLOW US ============================== */}
      <section className="section section--surface" id="follow">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              @kmeditour
            </h2>
            {/* <a href="#" class="ed-head__more">SEE ALL</a> */}
          </div>
          <div className="follow-grid" data-reveal="">
            <a className="follow-card" href="#">
              <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=600&q=70')" }} />
              <span>
                #GrandIntercon
              </span>
            </a>
            <a className="follow-card" href="#">
              <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=70')" }} />
              <span>
                #Table34
              </span>
            </a>
            <a className="follow-card" href="#">
              <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=70')" }} />
              <span>
                #KMEDITOUR
              </span>
            </a>
            <a className="follow-card" href="#">
              <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=70')" }} />
              <span>
                #ClubLounge
              </span>
            </a>
            <a className="follow-card" href="#">
              <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=600&q=70')" }} />
              <span>
                #Hobin
              </span>
            </a>
            <a className="follow-card" href="#">
              <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=70')" }} />
              <span>
                #Wellness
              </span>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
