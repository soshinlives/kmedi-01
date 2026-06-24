import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import "../../styles/skin-analysis.css";

const PAGE_INLINE: string[] = [
`// ── 메인 탭 전환 ──
(function () {
  var tabs   = document.querySelectorAll('.sa-tab-selector .tab-pill__btn');
  var panels = document.querySelectorAll('.sa-panel');
  function activate(idx) {
    tabs.forEach(function (t, i) {
      t.classList.toggle('is-active', i === idx);
      t.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });
    panels.forEach(function (p, i) { p.classList.toggle('is-active', i === idx); });
  }
  tabs.forEach(function (t, i) { t.addEventListener('click', function () { activate(i); }); });
})();

// ── 서브탭 전환 (탭1: 에이징 / 트러블) ──
(function () {
  var panel1    = document.getElementById('panel-tab1');
  if (!panel1) return;
  var subtabs   = panel1.querySelectorAll('.sa-subtab');
  var subpanels = panel1.querySelectorAll('.sa-subpanel');
  subtabs.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      subtabs.forEach(function (t, j) {
        t.classList.toggle('is-active', j === i);
        t.setAttribute('aria-selected', j === i ? 'true' : 'false');
      });
      subpanels.forEach(function (p, j) { p.classList.toggle('is-active', j === i); });
    });
  });
})();

// ── 캐러셀 팩토리 ──
(function () {
  function initCarousel(trackId, dotsId) {
    var track = document.getElementById(trackId);
    if (!track) return;
    var carousel = track.closest('.sa-carousel');
    var slides   = track.querySelectorAll('.sa-carousel__slide');
    var dots     = document.getElementById(dotsId)
                   ? document.getElementById(dotsId).querySelectorAll('.sa-carousel__dot')
                   : [];
    var prev     = carousel.querySelector('.sa-carousel__arrow--prev');
    var next     = carousel.querySelector('.sa-carousel__arrow--next');
    var total    = slides.length;
    var cur      = 0;

    function goTo(idx) {
      if (idx < 0 || idx >= total) return;
      cur = idx;
      track.style.transform = 'translateX(-' + (cur * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === cur); });
      if (prev) prev.disabled = cur === 0;
      if (next) next.disabled = cur === total - 1;
    }

    if (prev) prev.addEventListener('click', function () { goTo(cur - 1); });
    if (next) next.addEventListener('click', function () { goTo(cur + 1); });
    dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });

    // 터치 스와이프
    var startX = 0;
    var viewport = carousel.querySelector('.sa-carousel__viewport');
    if (viewport) {
      viewport.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
      viewport.addEventListener('touchend', function (e) {
        var diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) { diff > 0 ? goTo(cur + 1) : goTo(cur - 1); }
      }, { passive: true });
    }

    goTo(0);
  }

  initCarousel('track-aging',   'dots-aging');
  initCarousel('track-trouble', 'dots-trouble');
  initCarousel('track-ratio',   'dots-ratio');
  initCarousel('track-angle',   'dots-angle');
})();

// ── 탭2 서브탭 전환 (비율 / 각도) — 별도 인스턴스 ──
(function () {
  var panel2    = document.getElementById('panel-tab2');
  if (!panel2) return;
  var subtabs   = panel2.querySelectorAll('.sa-subtab');
  var subpanels = panel2.querySelectorAll('.sa-subpanel');
  subtabs.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      subtabs.forEach(function (t, j) {
        t.classList.toggle('is-active', j === i);
        t.setAttribute('aria-selected', j === i ? 'true' : 'false');
      });
      subpanels.forEach(function (p, j) { p.classList.toggle('is-active', j === i); });
    });
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

export default function SkinAnalysisPage() {
  return (
    <SiteLayout pageInline={PAGE_INLINE} afterMain={
        <>
        {/* ============================== 문의 (CONTACT) ============================== */}
        </>
      }>
      {/* ══════════════════════════════════════════════════════
     PAGE HERO — 다크 배경 + 빅타이틀
══════════════════════════════════════════════════════ */}
      <section className="page-hero page-hero--navy page-hero--bc" aria-label="피부분석 서비스">
        <div className="wrap">
          <p className="eyebrow">
            AI Skin Diagnostic System
          </p>
          <h1 className="page-hero__title">
            피부분석 서비스
          </h1>
          <p className="page-hero__sub">
            AI 기반 피부 분석 시스템을 통해 피부 타입과 컨디션을 세밀하게 진단하고,
            <br />
            최적화된 맞춤 케어 및 시술 계획을 제안합니다.
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
              피부분석 서비스
            </span>
          </nav>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════
     IMAGE AREA — AI 피부 분석 이미지
══════════════════════════════════════════════════════ */}
      <div className="sa-img-area">
        <img className="sa-img-area__img" src="/assets/img/hugro/hugro-center-2.png" alt="AI 피부 분석 시스템 — Skin Analysis Report" />
      </div>
      {/* ══════════════════════════════════════════════════════
     CONTENT — 탭 1 & 탭 2
══════════════════════════════════════════════════════ */}
      <div className="sa-content">
        {/* 탭 네비게이션 (세그먼트 pill 스타일) */}
        <div className="sa-tab-wrap">
          <div className="sa-tab-selector" role="tablist">
            <button className="tab-pill__btn is-active" role="tab" aria-selected="true" aria-controls="panel-tab1" id="tab1">
              피부 상태 분석
            </button>
            <button className="tab-pill__btn" role="tab" aria-selected="false" aria-controls="panel-tab2" id="tab2">
              페이셜 디자인 분석
            </button>
          </div>
        </div>
        {/* 탭 패널 */}
        <div className="sa-panels">
          {/* TAB 1 — 피부 상태 분석 */}
          <div className="sa-panel is-active" id="panel-tab1" role="tabpanel" aria-labelledby="tab1">
            <div className="sa-panel__header">
              <h2 className="sa-panel__title">
                피부 상태 분석
              </h2>
              <p className="sa-panel__sub">
                피부 노화 및 트러블 요소를 체계적으로 분석하여 현재 피부 상태를 진단합니다.
              </p>
            </div>
            {/* 서브탭: 에이징 / 트러블 */}
            <div className="sa-subtab-nav" role="tablist">
              <button className="sa-subtab is-active" role="tab" aria-selected="true" aria-controls="sub-aging" data-sub="aging">
                1. 에이징 분석
              </button>
              <button className="sa-subtab" role="tab" aria-selected="false" aria-controls="sub-trouble" data-sub="trouble">
                2. 트러블 분석
              </button>
            </div>
            {/* ─ 서브패널 1: 에이징 분석 ─ */}
            <div className="sa-subpanel is-active" id="sub-aging">
              <p className="sa-subpanel__desc">
                주름, 탄력, 색소 등 피부 노화 상태를 다각도로 분석하여 현재 피부 컨디션을 확인합니다.
              </p>
              <div className="sa-carousel" id="carousel-aging">
                {/* 슬라이드 뷰포트 */}
                <div className="sa-carousel__viewport">
                  <div className="sa-carousel__track" id="track-aging">
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          a
                        </span>
                        <h3 className="sa-slide__title">
                          입꼬리 주름 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            마리오네트 라인이라고도 하며, 입가와 입꼬리 바깥쪽에 형성되는 대표적인 노화 주름입니다.
                          </li>
                          <li>
                            주름의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          b
                        </span>
                        <h3 className="sa-slide__title">
                          눈꼬리 주름 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            눈가와 관자놀이 사이에 형성되는 대표적인 표정성 주름입니다.
                          </li>
                          <li>
                            눈꼬리 주름의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          c
                        </span>
                        <h3 className="sa-slide__title">
                          안검하수 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            눈꺼풀 처짐 정도를 분석하여 현재 눈매 상태를 확인할 수 있으며, 피부 상태 예측 기능을 통해 개선 시뮬레이션을 제공합니다.
                          </li>
                          <li>
                            안검하수의 원인과 분석 결과를 기반으로 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          d
                        </span>
                        <h3 className="sa-slide__title">
                          눈밑 잔주름 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            광대뼈 아래와 눈가 주변에 나타나는 미세한 주름으로, 피부 탄력 저하 및 건조도와 밀접한 관련이 있습니다.
                          </li>
                          <li>
                            눈밑 잔주름의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          e
                        </span>
                        <h3 className="sa-slide__title">
                          색소 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            기미, 검버섯, 주근깨(흑자), 후천성 진피 멜라닌세포증(ADM) 등 다양한 색소 침착 유형을 분석하여 피부 상태를 확인할 수 있습니다.
                          </li>
                          <li>
                            색소 침착의 원인과 분석 결과를 기반으로 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          f
                        </span>
                        <h3 className="sa-slide__title">
                          이마 주름 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            이마 부위에 형성되는 대표적인 표정성 주름으로, 반복적인 근육 움직임과 피부 탄력 저하에 의해 나타날 수 있습니다.
                          </li>
                          <li>
                            이마 주름의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          g
                        </span>
                        <h3 className="sa-slide__title">
                          눈물고랑 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            눈 밑 함몰 정도와 볼륨 변화를 분석하여 현재 눈가 상태를 확인할 수 있으며, 피부 상태 예측 기능을 통해 개선 시뮬레이션을 제공합니다.
                          </li>
                          <li>
                            눈물고랑의 원인과 분석 결과를 기반으로 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          h
                        </span>
                        <h3 className="sa-slide__title">
                          팔자 주름 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            코 양옆부터 입가까지 이어지는 대표적인 안면 주름으로, 피부 탄력 저하와 볼륨 변화에 의해 더욱 도드라질 수 있습니다.
                          </li>
                          <li>
                            팔자 주름의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          i
                        </span>
                        <h3 className="sa-slide__title">
                          목주름 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            턱선 아래부터 쇄골 위까지 목 부위에 형성되는 가로 주름으로, 피부 탄력 저하와 생활 습관 등에 의해 나타날 수 있습니다.
                          </li>
                          <li>
                            목주름의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /track */}
                </div>
                {/* /viewport */}
                {/* 컨트롤 */}
                <div className="sa-carousel__ctrl">
                  <button className="sa-carousel__arrow sa-carousel__arrow--prev" aria-label="이전 항목">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="sa-carousel__indicators" id="dots-aging">
                    <button className="sa-carousel__dot is-active" aria-label="a">
                      a
                    </button>
                    <button className="sa-carousel__dot" aria-label="b">
                      b
                    </button>
                    <button className="sa-carousel__dot" aria-label="c">
                      c
                    </button>
                    <button className="sa-carousel__dot" aria-label="d">
                      d
                    </button>
                    <button className="sa-carousel__dot" aria-label="e">
                      e
                    </button>
                    <button className="sa-carousel__dot" aria-label="f">
                      f
                    </button>
                    <button className="sa-carousel__dot" aria-label="g">
                      g
                    </button>
                    <button className="sa-carousel__dot" aria-label="h">
                      h
                    </button>
                    <button className="sa-carousel__dot" aria-label="i">
                      i
                    </button>
                  </div>
                  <button className="sa-carousel__arrow sa-carousel__arrow--next" aria-label="다음 항목">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* /carousel-aging */}
            </div>
            {/* /sub-aging */}
            {/* ─ 서브패널 2: 트러블 분석 ─ */}
            <div className="sa-subpanel" id="sub-trouble">
              <p className="sa-subpanel__desc">
                여드름, 모공, 피부 톤 등 주요 피부 고민 요소를 분석하여 현재 피부 상태를 정밀하게 진단합니다.
              </p>
              <div className="sa-carousel" id="carousel-trouble">
                <div className="sa-carousel__viewport">
                  <div className="sa-carousel__track" id="track-trouble">
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          a
                        </span>
                        <h3 className="sa-slide__title">
                          여드름 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            표피층에서 나타나는 다양한 여드름 상태를 분석하며, 좁쌀여드름·구진성 여드름·결절성 여드름·여드름 흉터 등을 확인할 수 있습니다.
                          </li>
                          <li>
                            여드름의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          b
                        </span>
                        <h3 className="sa-slide__title">
                          다크서클 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            눈가의 다크서클 상태를 분석하며, 정맥확장형·색소침착형·음영형 등 다양한 유형을 확인할 수 있습니다.
                          </li>
                          <li>
                            다크서클의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          c
                        </span>
                        <h3 className="sa-slide__title">
                          홍조 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            피부 붉어짐 상태를 분석하며, 여드름·염증·거미정맥 등 홍조와 관련된 다양한 피부 문제를 확인할 수 있습니다.
                          </li>
                          <li>
                            홍조의 원인과 현재 피부 상태를 분석하여 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          d
                        </span>
                        <h3 className="sa-slide__title">
                          모공 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            모공 상태와 피부결을 정밀하게 분석하여 현재 피부 컨디션을 확인할 수 있습니다.
                          </li>
                          <li>
                            모공의 원인과 분석 결과를 기반으로 맞춤 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          e
                        </span>
                        <h3 className="sa-slide__title">
                          광채 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            유분감, 피부결, 피부 균일도 등을 종합적으로 분석하여 피부 광채 수준을 확인할 수 있습니다.
                          </li>
                          <li>
                            광채 상태의 원인과 분석 결과를 기반으로 맞춤 스킨케어 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          f
                        </span>
                        <h3 className="sa-slide__title">
                          피부톤 분석
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            피부 밝기와 웜·쿨 톤 밸런스를 분석하여 현재 피부 톤 상태를 확인할 수 있습니다.
                          </li>
                          <li>
                            피부톤의 원인과 분석 결과를 기반으로 맞춤 스킨케어 및 개선 방향을 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /track */}
                </div>
                {/* /viewport */}
                <div className="sa-carousel__ctrl">
                  <button className="sa-carousel__arrow sa-carousel__arrow--prev" aria-label="이전 항목">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="sa-carousel__indicators" id="dots-trouble">
                    <button className="sa-carousel__dot is-active" aria-label="a">
                      a
                    </button>
                    <button className="sa-carousel__dot" aria-label="b">
                      b
                    </button>
                    <button className="sa-carousel__dot" aria-label="c">
                      c
                    </button>
                    <button className="sa-carousel__dot" aria-label="d">
                      d
                    </button>
                    <button className="sa-carousel__dot" aria-label="e">
                      e
                    </button>
                    <button className="sa-carousel__dot" aria-label="f">
                      f
                    </button>
                  </div>
                  <button className="sa-carousel__arrow sa-carousel__arrow--next" aria-label="다음 항목">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* /carousel-trouble */}
            </div>
            {/* /sub-trouble */}
          </div>
          {/* /panel-tab1 */}
          {/* TAB 2 — 페이셜 디자인 분석 */}
          <div className="sa-panel" id="panel-tab2" role="tabpanel" aria-labelledby="tab2">
            <div className="sa-panel__header">
              <h2 className="sa-panel__title">
                페이셜 디자인 분석
              </h2>
              <p className="sa-panel__sub">
                얼굴 비율과 각도를 정밀하게 분석하여 안면 밸런스 정보를 제공하며, 시술 및 맞춤 디자인 검토 시 참고 자료로 활용할 수 있습니다.
              </p>
            </div>
            {/* 서브탭: 비율 분석 / 각도 분석 */}
            <div className="sa-subtab-nav" role="tablist">
              <button className="sa-subtab is-active" role="tab" aria-selected="true" aria-controls="sub-ratio" data-sub="ratio">
                1. 비율 분석
              </button>
              <button className="sa-subtab" role="tab" aria-selected="false" aria-controls="sub-angle" data-sub="angle">
                2. 각도 분석
              </button>
            </div>
            {/* ─ 서브패널 1: 비율 분석 ─ */}
            <div className="sa-subpanel is-active" id="sub-ratio">
              <p className="sa-subpanel__desc">
                얼굴의 수직·수평 비율을 측정하여 이상적인 황금 비율과의 차이를 분석하고 균형 잡힌 안면 구조를 확인합니다.
              </p>
              <div className="sa-carousel" id="carousel-ratio">
                <div className="sa-carousel__viewport">
                  <div className="sa-carousel__track" id="track-ratio">
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          1
                        </span>
                        <h3 className="sa-slide__title">
                          삼정비율
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            이마(헤어라인~눈썹), 중안부(눈썹~코끝), 하안부(코끝~턱끝) 세 영역의 수직 비율을 분석합니다.
                          </li>
                          <li>
                            각 구간의 길이 비율을 수치화하여 안면 균형 상태와 개선 포인트를 안내합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          2
                        </span>
                        <h3 className="sa-slide__title">
                          오안비율
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            얼굴 너비를 눈 한 개 너비 기준으로 5등분하여 좌우 균형과 눈·코·입의 수평 배치를 분석합니다.
                          </li>
                          <li>
                            오안비율을 통해 얼굴 중심축 대칭 여부와 구조적 밸런스를 확인할 수 있습니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          3
                        </span>
                        <h3 className="sa-slide__title">
                          깊이측정
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            코, 눈, 볼 등 주요 부위의 입체적 깊이(돌출·함몰 정도)를 측정하여 안면 볼륨 분포를 분석합니다.
                          </li>
                          <li>
                            깊이 데이터를 기반으로 필러·볼륨 시술 시 최적의 개선 방향과 양을 제안합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          4
                        </span>
                        <h3 className="sa-slide__title">
                          입술–턱 비율
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            윗입술·아랫입술·턱끝 사이의 비율과 위치 관계를 분석하여 하안부 밸런스를 확인합니다.
                          </li>
                          <li>
                            이상적인 입술-턱 비율과의 차이를 수치화하여 맞춤 개선 시뮬레이션을 제공합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sa-carousel__ctrl">
                  <button className="sa-carousel__arrow sa-carousel__arrow--prev" aria-label="이전">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="sa-carousel__indicators" id="dots-ratio">
                    <button className="sa-carousel__dot is-active" aria-label="1">
                      1
                    </button>
                    <button className="sa-carousel__dot" aria-label="2">
                      2
                    </button>
                    <button className="sa-carousel__dot" aria-label="3">
                      3
                    </button>
                    <button className="sa-carousel__dot" aria-label="4">
                      4
                    </button>
                  </div>
                  <button className="sa-carousel__arrow sa-carousel__arrow--next" aria-label="다음">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* /sub-ratio */}
            {/* ─ 서브패널 2: 각도 분석 ─ */}
            <div className="sa-subpanel" id="sub-angle">
              <p className="sa-subpanel__desc">
                측면 및 정면에서의 안면 각도를 측정하여 골격 구조와 피부 처짐 상태를 종합적으로 분석합니다.
              </p>
              <div className="sa-carousel" id="carousel-angle">
                <div className="sa-carousel__viewport">
                  <div className="sa-carousel__track" id="track-angle">
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          1
                        </span>
                        <h3 className="sa-slide__title">
                          측면 안면 각도
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            이마·코·입술·턱을 잇는 측면 프로파일 각도를 분석하여 안면 돌출 패턴과 골격 특성을 파악합니다.
                          </li>
                          <li>
                            측면 안면 각도 데이터를 기반으로 윤곽 시술 및 보형물 배치의 최적 방향을 제안합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sa-carousel__slide">
                      <div className="sa-slide">
                        <span className="sa-slide__idx">
                          2
                        </span>
                        <h3 className="sa-slide__title">
                          리프팅 각도
                        </h3>
                        <ul className="sa-slide__list">
                          <li>
                            피부 처짐으로 인해 변화된 눈꼬리·볼·턱선 각도를 측정하여 노화 진행 정도를 시각화합니다.
                          </li>
                          <li>
                            리프팅 시술 전후 각도 변화 시뮬레이션을 통해 개선 방향과 기대 효과를 사전에 확인할 수 있습니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sa-carousel__ctrl">
                  <button className="sa-carousel__arrow sa-carousel__arrow--prev" aria-label="이전">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="sa-carousel__indicators" id="dots-angle">
                    <button className="sa-carousel__dot is-active" aria-label="1">
                      1
                    </button>
                    <button className="sa-carousel__dot" aria-label="2">
                      2
                    </button>
                  </div>
                  <button className="sa-carousel__arrow sa-carousel__arrow--next" aria-label="다음">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* /sub-angle */}
          </div>
          {/* /panel-tab2 */}
        </div>
        {/* /sa-panels */}
      </div>
      {/* /sa-content */}
      {/* ══════════════════════════════════════════════════════
     CTA BANNER
══════════════════════════════════════════════════════ */}
      <div className="cta-banner" id="consultation" data-reveal="">
        <div>
          <p className="cta-banner__label">
            피부 분석 예약
          </p>
          <p className="cta-banner__title">
            나의 피부를 정밀하게 진단받아 보세요
          </p>
        </div>
        <a href="#" className="cta-banner__btn">
          피부 분석 예약하기
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </SiteLayout>
  );
}
