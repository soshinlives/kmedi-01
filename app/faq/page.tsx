import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import "../../styles/faq.css";

const PAGE_INLINE: string[] = [
`(function () {
  /* ── 카테고리 탭 필터 ── */
  var tabs = document.querySelectorAll('.faq-tab');
  var groups = document.querySelectorAll('.faq-group');
  function filterCat(cat) {
    groups.forEach(function (g) {
      g.style.display = g.getAttribute('data-cat') === cat ? '' : 'none';
    });
  }
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      filterCat(tab.getAttribute('data-cat'));
    });
  });
  /* 초기 상태: 첫 번째 탭(예약·결제) */
  filterCat('booking');

  /* ── 로그인 모달 ── */
  var modal = document.getElementById('loginModal');
  var trigger = document.getElementById('loginTrigger');
  var closeBtn = document.getElementById('loginClose');
  var backdrop = document.getElementById('loginBackdrop');
  var gnbLoginBtn = document.querySelector('.gnb-login-btn');
  function openModal() { modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; var first=modal.querySelector('input:not([type=hidden]),button:not([disabled])'); if(first) setTimeout(function(){first.focus();},50); }
  function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; if(trigger) trigger.focus(); }
  if (trigger) trigger.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  if (gnbLoginBtn) gnbLoginBtn.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  /* ── 비밀번호 토글 ── */
  var pwdToggle = document.getElementById('loginPwdToggle');
  var pwdInput = document.getElementById('loginPassword');
  var eyeIcon = document.getElementById('eyeIcon');
  var eyeOnSvg = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  var eyeOffSvg = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  if (pwdToggle) pwdToggle.addEventListener('click', function () {
    var isHidden = pwdInput.type === 'password';
    pwdInput.type = isHidden ? 'text' : 'password';
    eyeIcon.innerHTML = isHidden ? eyeOffSvg : eyeOnSvg;
  });
})();`,
];

export default function FaqPage() {
  return (
    <SiteLayout headerVariant="light" footerBrandSub="Premium Concierge in Seoul" pageInline={PAGE_INLINE} afterMain={
        <>
        {/* ============================== 문의 (CONTACT) ============================== */}
        </>
      }>
      {/* Hero */}
      <section className="page-hero page-hero--white page-hero--bc">
        <div className="wrap">
          <p className="eyebrow">
            FAQ
          </p>
          <h1 className="page-hero__title">
            자주 묻는 질문
          </h1>
          <p className="page-hero__sub">
            궁금하신 점을 빠르게 확인하세요.
            <br />
            추가 문의는 카카오톡 또는 이메일로 언제든 연락해 주세요.
          </p>
          <nav className="bc-nav" aria-label="현재 위치">
            <Link href="/">
              홈
            </Link>
            <span className="bc-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">
              FAQ
            </span>
          </nav>
        </div>
      </section>
      {/* FAQ Body */}
      <section className="faq-body">
        <div className="wrap faq-wrap">
          {/* 카테고리 탭 */}
          <div className="faq-tabs" role="tablist" aria-label="FAQ 카테고리">
            <button className="faq-tab is-active" role="tab" id="tab-booking" data-cat="booking" aria-selected="true" aria-controls="panel-booking">
              예약 · 결제
            </button>
            <button className="faq-tab" role="tab" id="tab-service" data-cat="service" aria-selected="false" aria-controls="panel-service">
              서비스
            </button>
            <button className="faq-tab" role="tab" id="tab-treatment" data-cat="treatment" aria-selected="false" aria-controls="panel-treatment">
              시술
            </button>
            <button className="faq-tab" role="tab" id="tab-shopping" data-cat="shopping" aria-selected="false" aria-controls="panel-shopping">
              쇼핑
            </button>
            <button className="faq-tab" role="tab" id="tab-etc" data-cat="etc" aria-selected="false" aria-controls="panel-etc">
              기타
            </button>
          </div>
          {/* 예약 · 결제 */}
          <div className="faq-group" role="tabpanel" id="panel-booking" aria-labelledby="tab-booking" data-cat="booking">
            <p className="faq-group__label">
              예약 · 결제
            </p>
            <div className="acc">
              <div className="acc-item is-open">
                <button className="acc-head" aria-expanded="true">
                  예약은 어떻게 하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    홈페이지 상단의 '상담 예약하기' 버튼을 클릭하거나, 카카오톡 채널 @KMEDITOUR로 문의해 주세요. 원하시는 서비스와 일정을 알려주시면 전담 코디네이터가 배정되어 맞춤 플랜을 안내해 드립니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  예약 취소 및 변경은 어떻게 하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    예약 취소 또는 변경은 시술 예정일 72시간 전까지 가능합니다. 카카오톡 채널 또는 이메일(contact@kmeditour.com)로 요청해 주세요. 72시간 이내 취소 시 취소 수수료가 발생할 수 있습니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  결제 방법은 무엇인가요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    신용카드(VISA, Mastercard, UnionPay), 계좌이체, 카카오페이, 네이버페이 등 다양한 결제 수단을 지원합니다. 외국 카드의 경우 일부 시술 패키지는 사전 입금으로 진행될 수 있습니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  환불 정책은 어떻게 되나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    시술 전 취소의 경우 결제 금액의 전액 환불이 가능합니다(시술 72시간 전까지). 시술 당일 취소 또는 노쇼의 경우 환불이 어려울 수 있으며, 코스메틱 제품은 미개봉 상태에서 수령 후 7일 이내 반품·환불이 가능합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 서비스 */}
          <div className="faq-group" role="tabpanel" id="panel-service" aria-labelledby="tab-service" data-cat="service">
            <p className="faq-group__label">
              서비스
            </p>
            <div className="acc">
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  어떤 서비스를 제공하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    KMEDITOUR는 뷰티(피부 시술·성형), 투어(서울 관광·숙박), 코스메틱 쇼핑, 휴그로센터 방문 등 한국 방문에 필요한 전방위 프리미엄 케어를 제공합니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  전담 코디네이터는 어떤 역할을 하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    1:1 전담 코디네이터가 배정되어 상담 예약, 클리닉 동행, 통역, 사후 관리 상담, 숙박·관광 안내까지 체류 전 기간을 밀착 지원합니다. 궁금한 점은 언제든 카카오톡으로 연락하실 수 있습니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  외국어 지원이 되나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    영어, 중국어, 일본어, 베트남어 코디네이터가 상주합니다. 언어별 전담 코디네이터 배정을 원하시면 예약 시 희망 언어를 알려주세요.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  서울 이외 지역에서도 서비스가 가능한가요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    현재는 서울 강남·신사 지역을 중심으로 서비스를 운영하고 있습니다. 제주도 방문 패키지 및 일부 지방 연계 서비스는 별도 상담을 통해 안내해 드리고 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 시술 */}
          <div className="faq-group" role="tabpanel" id="panel-treatment" aria-labelledby="tab-treatment" data-cat="treatment">
            <p className="faq-group__label">
              시술
            </p>
            <div className="acc">
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  어떤 시술을 받을 수 있나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    필러, 보톡스, 실리프팅, 레이저, 스킨 부스터, 피부관리, 지방분해 등 다양한 뷰티 시술을 연결해 드립니다. 모든 파트너 클리닉은 검증된 의료진과 시설을 갖추고 있습니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  시술 전 상담은 어떻게 진행되나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    온라인 또는 방문 사전 상담을 통해 피부 상태와 원하는 결과를 공유해 주시면, 코디네이터가 적합한 시술 및 클리닉을 추천해 드립니다. 클리닉 방문 시 의료진 상담이 추가로 진행됩니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  시술 후 사후 관리는 어떻게 하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    시술 후 48시간 내에 코디네이터가 상태를 확인하고 관리 방법을 안내합니다. 귀국 후에도 온라인 사후 상담이 가능하며, 필요 시 제휴 클리닉과의 원격 상담을 연결해 드립니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  외국인도 한국에서 시술을 받을 수 있나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    외국인도 합법적으로 한국 의료기관에서 미용 시술을 받을 수 있습니다. KMEDITOUR는 의료관광 공식 에이전시로, 비자 및 필요 서류 안내부터 클리닉 예약·동행까지 전 과정을 지원합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 쇼핑 */}
          <div className="faq-group" role="tabpanel" id="panel-shopping" aria-labelledby="tab-shopping" data-cat="shopping">
            <p className="faq-group__label">
              코스메틱 쇼핑
            </p>
            <div className="acc">
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  코스메틱 제품은 어디서 구매하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    홈페이지 상단 '쇼핑' 또는 코스메틱 페이지에서 주문하실 수 있습니다. 휴그로센터 방문 시 현장 구매도 가능합니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  해외 배송이 가능한가요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    현재 국내 배송 및 방문 수령만 가능합니다. 해외 배송은 준비 중이며, 향후 지원 예정입니다. 한국 체류 중 숙소로 배송 신청이 가능합니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  제품 교환 및 반품은 어떻게 하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    미개봉·미사용 제품에 한해 수령 후 7일 이내 교환 및 반품이 가능합니다. 피부 트러블 등 특별한 사유가 있을 경우 별도 상담을 통해 처리해 드립니다. 이메일(contact@kmeditour.com)로 문의해 주세요.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 기타 */}
          <div className="faq-group" role="tabpanel" id="panel-etc" aria-labelledby="tab-etc" data-cat="etc">
            <p className="faq-group__label">
              기타
            </p>
            <div className="acc">
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  휴그로센터는 어디에 있나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    서울특별시 강남구 압구정로14길 22, 4층(신사동)에 위치합니다. 지하철 3호선 압구정역 2번 출구에서 도보 5분 거리입니다. 방문 예약은 카카오톡 또는 이메일로 가능합니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  고객센터 운영 시간은 어떻게 되나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    연중무휴 09:00 — 21:00(KST) 운영합니다. 카카오톡 채널(@KMEDITOUR) 또는 이메일(contact@kmeditour.com)로 문의해 주세요. 운영 시간 외 접수된 문의는 다음 영업 시간 내에 답변드립니다.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  개인정보는 어떻게 보호되나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    KMEDITOUR는 개인정보보호법을 준수하며, 수집된 고객 정보는 서비스 제공 목적으로만 사용됩니다. 제3자 제공 시 사전 동의를 받으며, 서비스 종료 후 즉시 파기합니다. 자세한 내용은 개인정보처리방침을 참고해 주세요.
                  </div>
                </div>
              </div>
              <div className="acc-item">
                <button className="acc-head" aria-expanded="false">
                  추가 문의는 어떻게 하나요?
                  <span className="acc-icon" aria-hidden="true" />
                </button>
                <div className="acc-body">
                  <div className="acc-body__inner">
                    카카오톡 채널 @KMEDITOUR 또는 이메일 contact@kmeditour.com으로 문의해 주세요. 전담 상담사가 빠르게 답변드립니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CTA */}
          <div className="faq-cta">
            <p className="faq-cta__text">
              원하시는 답변을 찾지 못하셨나요?
            </p>
            <Link href="/#booking" className="faq-cta__btn">
              1:1 상담 예약하기
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
