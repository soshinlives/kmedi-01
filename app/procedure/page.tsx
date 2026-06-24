import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import "../../styles/procedure.css";

const PAGE_INLINE: string[] = [
`(function () {
  var track      = document.getElementById('procTrack');
  var filterBtns = document.querySelectorAll('.tab-line__btn');
  var dots       = document.querySelectorAll('.proc-dot');
  var prevBtn    = document.getElementById('procPrev');
  var nextBtn    = document.getElementById('procNext');
  var total      = 7;
  var cur        = 0;

  function goTo(idx) {
    if (idx < 0 || idx >= total) return;
    cur = idx;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    filterBtns.forEach(function (b, i) { b.classList.toggle('is-active', i === cur); });
    dots.forEach(function (d, i) { d.classList.toggle('is-active', i === cur); });
    prevBtn.disabled = cur === 0;
    nextBtn.disabled = cur === total - 1;
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { goTo(parseInt(btn.dataset.idx, 10)); });
  });
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () { goTo(parseInt(dot.dataset.idx, 10)); });
  });
  prevBtn.addEventListener('click', function () { goTo(cur - 1); });
  nextBtn.addEventListener('click', function () { goTo(cur + 1); });

  // 터치 스와이프
  var viewport = document.querySelector('.proc-slider-viewport');
  var startX = 0;
  viewport.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', function (e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? goTo(cur + 1) : goTo(cur - 1); }
  }, { passive: true });

  // URL 파라미터로 초기 슬라이드 설정 (?t=0~6)
  var params = new URLSearchParams(window.location.search);
  var initIdx = parseInt(params.get('t') || '0', 10);
  goTo(isNaN(initIdx) ? 0 : Math.max(0, Math.min(6, initIdx)));

  // 히어로 "시술 둘러보기" 버튼
  document.getElementById('heroScrollBtn').addEventListener('click', function () {
    document.getElementById('procFilter').scrollIntoView({ behavior: 'smooth' });
  });
})();

// Login modal
(function () {
  var trigger  = document.getElementById('loginTrigger');
  var modal    = document.getElementById('loginModal');
  var close    = document.getElementById('loginClose');
  var backdrop = document.getElementById('loginBackdrop');
  function openModal()  { modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; }
  function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if(trigger) trigger.focus(); }
  if (trigger) trigger.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  var gnbLoginBtn = document.querySelector('.gnb-login-btn');
  if (gnbLoginBtn) gnbLoginBtn.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  close.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  var pwdInput  = document.getElementById('loginPassword');
  var pwdToggle = document.getElementById('loginPwdToggle');
  var eyeIcon   = document.getElementById('eyeIcon');
  var eyeOffSvg = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  var eyeOnSvg  = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  if (pwdToggle) pwdToggle.addEventListener('click', function () {
    var isHidden = pwdInput.type === 'password';
    pwdInput.type = isHidden ? 'text' : 'password';
    eyeIcon.innerHTML = isHidden ? eyeOffSvg : eyeOnSvg;
  });
})();`,
];

export default function ProcedurePage() {
  return (
    <SiteLayout pageInline={PAGE_INLINE} afterMain={
        <>
        {/* ============================== 문의 (CONTACT) ============================== */}
        </>
      }>
      {/* ══════════════════════════════════════════════════════
     HERO
══════════════════════════════════════════════════════ */}
      <section className="page-hero page-hero--navy page-hero--bc" aria-label="프리미엄 시술">
        <div className="wrap">
          <p className="eyebrow">
            Premium Medical Procedures
          </p>
          <h1 className="page-hero__title">
            프리미엄 시술
          </h1>
          <p className="page-hero__sub">
            당신만을 위한 맞춤 솔루션,
            <br />
            안전하고 검증된 한국 의료 시술을 경험해보세요.
          </p>
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
              시술 종류
            </span>
          </nav>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════
     FILTER BAR
══════════════════════════════════════════════════════ */}
      <nav className="proc-filter" id="procFilter" aria-label="시술 카테고리">
        <div className="proc-filter__inner">
          <button className="tab-line__btn is-active" data-idx="0">
            필러
          </button>
          <button className="tab-line__btn" data-idx="1">
            보톡스
          </button>
          <button className="tab-line__btn" data-idx="2">
            실리프팅
          </button>
          <button className="tab-line__btn" data-idx="3">
            레이저
          </button>
          <button className="tab-line__btn" data-idx="4">
            스킨부스터
          </button>
          <button className="tab-line__btn" data-idx="5">
            피부관리
          </button>
          <button className="tab-line__btn" data-idx="6">
            지방분해
          </button>
        </div>
      </nav>
      {/* ══════════════════════════════════════════════════════
     SLIDER
══════════════════════════════════════════════════════ */}
      <section className="proc-slider-section" id="procSliderSection" aria-label="시술 슬라이더">
        {/* 왼쪽 화살표 */}
        <button className="proc-slider-section__arrow" id="procPrev" aria-label="이전 시술" disabled>
          <span className="proc-arrow-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </span>
        </button>
        {/* 슬라이더 뷰포트 */}
        <div className="proc-slider-viewport">
          <div className="proc-slider-track" id="procTrack">
            {/* ── 01 필러 ── */}
            <div className="proc-slide" role="group" aria-label="필러">
              <div className="proc-slide__card">
                <div className="proc-slide__img-wrap">
                  <img className="proc-slide__img" src="/assets/hero/hero-11.png" alt="필러 시술" />
                </div>
                <div className="proc-slide__content">
                  <span className="proc-slide__num">
                    01
                  </span>
                  <h2 className="proc-slide__title">
                    필러
                  </h2>
                  <p className="proc-slide__desc">
                    꺼진 볼륨을 복원하여 자연스러운 볼륨과 세련된 얼굴 윤곽 완성
                  </p>
                  <div className="proc-slide__tags">
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      15–30분
                    </span>
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      팔자주름, 볼, 입술, 턱 라인, 눈밑(다크서클), 이마
                    </span>
                  </div>
                  <a href="#" className="proc-slide__link">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* ── 02 보톡스 ── */}
            <div className="proc-slide" role="group" aria-label="보톡스">
              <div className="proc-slide__card">
                <div className="proc-slide__img-wrap">
                  <img className="proc-slide__img" src="/assets/hero/hero-13.png" alt="보톡스 시술" />
                </div>
                <div className="proc-slide__content">
                  <span className="proc-slide__num">
                    02
                  </span>
                  <h2 className="proc-slide__title">
                    보톡스
                  </h2>
                  <p className="proc-slide__desc">
                    과도한 근육 움직임을 완화하여 표정 주름을 개선하고 자연스러운 얼굴 라인을 완성
                  </p>
                  <div className="proc-slide__tags">
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      10–20분
                    </span>
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      이마, 미간, 눈가(까마귀발), 사각턱, 목주름, 종아리, 승모근
                    </span>
                  </div>
                  <a href="#" className="proc-slide__link">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* ── 03 실리프팅 ── */}
            <div className="proc-slide" role="group" aria-label="실리프팅">
              <div className="proc-slide__card">
                <div className="proc-slide__img-wrap">
                  <img className="proc-slide__img" src="/assets/hero/hero-14.png" alt="실리프팅 시술" />
                </div>
                <div className="proc-slide__content">
                  <span className="proc-slide__num">
                    03
                  </span>
                  <h2 className="proc-slide__title">
                    실리프팅
                  </h2>
                  <p className="proc-slide__desc">
                    특수 실을 삽입하여 피부를 즉각적으로 리프팅하고 자연스러운 V라인을 완성
                  </p>
                  <div className="proc-slide__tags">
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      30–60분
                    </span>
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      볼, 턱선, 목, 눈꺼풀, 이마
                    </span>
                  </div>
                  <a href="#" className="proc-slide__link">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* ── 04 레이저 ── */}
            <div className="proc-slide" role="group" aria-label="레이저">
              <div className="proc-slide__card">
                <div className="proc-slide__img-wrap">
                  <img className="proc-slide__img" src="/assets/hero/hero-15.png" alt="레이저 시술" />
                </div>
                <div className="proc-slide__content">
                  <span className="proc-slide__num">
                    04
                  </span>
                  <h2 className="proc-slide__title">
                    레이저
                  </h2>
                  <p className="proc-slide__desc">
                    정밀 레이저를 활용하여 색소 개선, 피부 재생, 모공 축소를 동시에 실현
                  </p>
                  <div className="proc-slide__tags">
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      20–40분
                    </span>
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      기미, 잡티, 홍조, 모공, 피부 결
                    </span>
                  </div>
                  <a href="#" className="proc-slide__link">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* ── 05 스킨부스터 ── */}
            <div className="proc-slide" role="group" aria-label="스킨부스터">
              <div className="proc-slide__card">
                <div className="proc-slide__img-wrap">
                  <img className="proc-slide__img" src="/assets/hero/hero-17.png" alt="스킨부스터 시술" />
                </div>
                <div className="proc-slide__content">
                  <span className="proc-slide__num">
                    05
                  </span>
                  <h2 className="proc-slide__title">
                    스킨부스터
                  </h2>
                  <p className="proc-slide__desc">
                    피부 깊숙이 수분과 영양을 공급하여 촉촉하고 광채 나는 피부를 완성
                  </p>
                  <div className="proc-slide__tags">
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      20–30분
                    </span>
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      전체 얼굴, 목, 손등
                    </span>
                  </div>
                  <a href="#" className="proc-slide__link">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* ── 06 피부관리 ── */}
            <div className="proc-slide" role="group" aria-label="피부관리">
              <div className="proc-slide__card">
                <div className="proc-slide__img-wrap">
                  <img className="proc-slide__img" src="/assets/hero/hero-2.png" alt="피부관리 시술" />
                </div>
                <div className="proc-slide__content">
                  <span className="proc-slide__num">
                    06
                  </span>
                  <h2 className="proc-slide__title">
                    피부관리
                  </h2>
                  <p className="proc-slide__desc">
                    피부 상태에 따른 맞춤 케어로 피부 결과 톤을 집중 개선
                  </p>
                  <div className="proc-slide__tags">
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      40–60분
                    </span>
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      얼굴 전체, 등, 데콜테
                    </span>
                  </div>
                  <a href="#" className="proc-slide__link">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* ── 07 지방분해 ── */}
            <div className="proc-slide" role="group" aria-label="지방분해">
              <div className="proc-slide__card">
                <div className="proc-slide__img-wrap">
                  <img className="proc-slide__img" src="/assets/hero/hero-5.png" alt="지방분해 시술" />
                </div>
                <div className="proc-slide__content">
                  <span className="proc-slide__num">
                    07
                  </span>
                  <h2 className="proc-slide__title">
                    지방분해
                  </h2>
                  <p className="proc-slide__desc">
                    지방세포를 선택적으로 파괴하여 자연스러운 윤곽을 완성
                  </p>
                  <div className="proc-slide__tags">
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      20–40분
                    </span>
                    <span className="proc-slide__tag">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      턱밑, 볼, 팔, 복부, 허벅지
                    </span>
                  </div>
                  <a href="#" className="proc-slide__link">
                    자세히 보기
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /proc-slider-track */}
          {/* 도트 인디케이터 */}
          <div className="proc-dots" id="procDots" role="tablist" aria-label="슬라이드 이동">
            <button className="proc-dot is-active" data-idx="0" aria-label="필러" />
            <button className="proc-dot" data-idx="1" aria-label="보톡스" />
            <button className="proc-dot" data-idx="2" aria-label="실리프팅" />
            <button className="proc-dot" data-idx="3" aria-label="레이저" />
            <button className="proc-dot" data-idx="4" aria-label="스킨부스터" />
            <button className="proc-dot" data-idx="5" aria-label="피부관리" />
            <button className="proc-dot" data-idx="6" aria-label="지방분해" />
          </div>
        </div>
        {/* /proc-slider-viewport */}
        {/* 오른쪽 화살표 */}
        <button className="proc-slider-section__arrow" id="procNext" aria-label="다음 시술">
          <span className="proc-arrow-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
        </button>
      </section>
      {/* /proc-slider-section */}
      {/* ══════════════════════════════════════════════════════
     CTA BANNER
══════════════════════════════════════════════════════ */}
      <div className="cta-banner" id="consultation" data-reveal="">
        <div>
          <p className="cta-banner__label">
            시술 상담 예약
          </p>
          <p className="cta-banner__title">
            나에게 맞는 시술을 전문가와 함께 찾아보세요
          </p>
        </div>
        <a href="#" className="cta-banner__btn">
          상담 예약하기
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </SiteLayout>
  );
}
