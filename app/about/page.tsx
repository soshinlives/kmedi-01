import SiteLayout from "@/components/SiteLayout";
import "../../styles/about.css";

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
})();`,
];

export default function AboutPage() {
  return (
    <SiteLayout headerVariant="solid" footerBrandSub="Premium Concierge in Seoul" pageInline={PAGE_INLINE} afterMain={
        <>
        {/* ============================== 문의 (CONTACT) ============================== */}
        </>
      }>
      {/* ============================== WHO WE ARE ============================== */}
      <section className="intro" id="who">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h1 className="ed-head__title">
              K-Medi Tour를 소개합니다
            </h1>
          </div>
          <div className="intro__cols">
            <p className="intro__text" data-reveal="">
              K-Medi Tour는 외국인 고객이 한국의 최고 수준 의료와 뷰티 케어를 언어 장벽 없이 안심하고 경험할 수 있도록 설계된 프리미엄 컨시어지 서비스입니다. 성형외과·피부과·치과·한방·건강검진까지 각 분야의 검증된 파트너 의료기관과 협력하며, 서울의 최상위 병원들과 독점 협력 관계를 맺고 있습니다.
            </p>
            <p className="intro__text" data-reveal="">
              1:1 전담 코디네이터 배정, 공항 픽업부터 귀국까지 전 과정 동행, 한국어·영어·중국어·일본어·베트남어 다국어 통역 지원으로 주요 미디어에 소개된 신뢰받는 서비스를 제공합니다. 오직 당신의 여정만을 위한 맞춤 케어가 시작됩니다.
            </p>
          </div>
        </div>
      </section>
      {/* ============================== HOW IT WORKS ============================== */}
      <section className="steps" id="how">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              서비스 이용 방법
            </h2>
          </div>
          <div className="steps__list">
            <div className="step" data-reveal="">
              <p className="step__num">
                01
              </p>
              <h3 className="step__title">
                무료 온라인 상담
              </h3>
              <p className="step__desc">
                원하시는 시술, 일정, 예산을 알려주세요. 전담 코디네이터가 최적의 의료·뷰티·여행 플랜을 설계해드립니다. 한국어, 영어, 중국어, 일본어, 베트남어 상담 가능합니다.
              </p>
            </div>
            <div className="step" data-reveal="">
              <p className="step__num">
                02
              </p>
              <h3 className="step__title">
                방한 준비 지원
              </h3>
              <p className="step__desc">
                의료기관 예약, 항공·숙소 안내, 비자 정보, 여행 일정까지 모든 준비를 함께합니다. 한국 도착 전부터 케어가 시작됩니다. 걱정은 저희가 맡겠습니다.
              </p>
            </div>
            <div className="step" data-reveal="">
              <p className="step__num">
                03
              </p>
              <h3 className="step__title">
                현지 전 과정 동행
              </h3>
              <p className="step__desc">
                공항 픽업부터 시술, 회복, 관광, 귀국까지 전담 코디네이터가 모든 과정을 곁에서 함께합니다. 응급상황 대응과 사후 관리까지 책임집니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================== OUR PROMISE ============================== */}
      <section className="guarantee" id="promise">
        <div className="wrap">
          <div className="ed-head" data-reveal="">
            <h2 className="ed-head__title">
              최고의 케어를 약속합니다
            </h2>
          </div>
          <div className="guarantee__cols" data-reveal="">
            <div className="guarantee-col">
              <svg className="guarantee-col__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              <h3 className="guarantee-col__title">
                검증된 파트너 의료기관
              </h3>
              <p className="guarantee-col__desc">
                한국 최고 수준의 의료진과 클리닉만을 엄선합니다. 분야별 전문가 검증과 지속적인 품질 모니터링을 통해 항상 최상의 치료 환경을 보장합니다.
              </p>
            </div>
            <div className="guarantee-col">
              <svg className="guarantee-col__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h3 className="guarantee-col__title">
                투명한 비용 안내
              </h3>
              <p className="guarantee-col__desc">
                숨겨진 비용 없이 처음부터 끝까지 정직하게 안내합니다. 시술 전 상세한 비용 명세서를 제공하며, 계획된 금액 외의 추가 비용은 발생하지 않습니다.
              </p>
            </div>
            <div className="guarantee-col">
              <svg className="guarantee-col__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="guarantee-col__title">
                전 과정 책임 케어
              </h3>
              <p className="guarantee-col__desc">
                상담부터 귀국까지 전담 코디네이터 한 명이 당신의 여정 전체를 책임집니다. 언제든 연락 가능한 나만의 코디네이터로 낯선 곳에서도 불안이 없습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ============================== WHY KOREA ============================== */}
      <section className="korea" id="korea">
        <div className="wrap">
          <div className="korea__layout">
            <div className="korea__img" data-reveal="">
              <div style={{ backgroundImage: "url('https://picsum.photos/id/1048/900/1200')" }} />
            </div>
            <div className="korea__stats">
              <div className="ed-head" data-reveal="">
                <h2 className="ed-head__title">
                  한국 의료를 선택하는 이유
                </h2>
              </div>
              <div className="stat-row" data-reveal="">
                <div className="stat-row__num">
                  70만
                  <sup>
                    +
                  </sup>
                </div>
                <div>
                  <p className="stat-row__label">
                    연간 외국인 의료관광객
                  </p>
                  <p className="stat-row__sub">
                    한국은 아시아 최상위 의료관광 목적지입니다. 세계 수준의 의료 기술과 합리적인 비용이 매년 더 많은 분들을 한국으로 이끌고 있습니다.
                  </p>
                </div>
              </div>
              <div className="stat-row" data-reveal="">
                <div className="stat-row__num">
                  15년
                  <sup>
                    +
                  </sup>
                </div>
                <div>
                  <p className="stat-row__label">
                    파트너 의료진 평균 경력
                  </p>
                  <p className="stat-row__sub">
                    분야별 최고의 전문가만 선별합니다. 검증된 의료진, 신뢰할 수 있는 클리닉. K-Medi Tour와 함께라면 최고를 만날 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="stat-row" data-reveal="">
                <div className="stat-row__num">
                  1:1
                </div>
                <div>
                  <p className="stat-row__label">
                    전담 코디네이터 배정
                  </p>
                  <p className="stat-row__sub">
                    처음 상담부터 귀국까지 한 명의 전담 코디네이터가 당신의 여정을 책임집니다. 언제든 연락할 수 있는 나만의 코디네이터.
                  </p>
                </div>
              </div>
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
              <image-slot id="cert-khidi" shape="rect" fit="contain" src="/assets/logo/khidi-logo-white.png" style={{ width: "90px" }} placeholder="인증 로고" />
            </div>
            <div className="trust__logo">
              <image-slot id="cert-mohw" shape="rect" fit="contain" src="/assets/logo/mhw-logo-white.png" style={{ width: "162px" }} placeholder="인증 로고" />
            </div>
            <div className="trust__logo">
              <image-slot id="cert-sgi" shape="rect" fit="contain" src="/assets/logo/sgi-logo-white.png" style={{ width: "225px" }} placeholder="인증 로고" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
