import Link from "next/link";

interface GnbOverlayProps {
  home?: boolean;
}

export default function GnbOverlay({ home = false }: GnbOverlayProps) {
  return (
      <div className="gnb-overlay gnb-overlay--dark" role="dialog" aria-modal="true" aria-label="사이트 내비게이션" aria-hidden="true">
        <div className="wrap">
          <div className="gnb-overlay__bar">
            <Link href="/" className="brand gnb-overlay__brand">
              KMEDITOUR
              <small>
                Premium Concierge in Korea
              </small>
            </Link>
            <div className="gnb-overlay__actions">
              <a href="#" className="gnb-login-btn">
                로그인 / 회원가입
              </a>
            </div>
            <button className="gnb-overlay__close" aria-label="닫기">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="gnb-mobile-top">
            <div className="gnb-contact-block">
              <div className="gnb-contact-cta">
                <Link href="/#booking" className="gnb-cta-btn gnb-cta-btn--book">
                  상담 예약하기
                </Link>
                <a href="mailto:contact@kmeditour.com" className="gnb-cta-btn gnb-cta-btn--mail">
                  contact@kmeditour.com
                </a>
              </div>
            </div>
            {home ? (
          <div className="gnb-lang-tabs">
            <button className="gnb-lang-tab is-active" data-lang="KR">
              <img src="/assets/flag/flag_south korea.svg" alt="KR" className="gnb-lang-flag" />
              <span className="gnb-lang-code">
                KR
              </span>
            </button>
            <button className="gnb-lang-tab" data-lang="EN">
              <img src="/assets/flag/flag_united states.svg" alt="EN" className="gnb-lang-flag" />
              <span className="gnb-lang-code">
                EN
              </span>
            </button>
            <button className="gnb-lang-tab" data-lang="CN">
              <img src="/assets/flag/flag_china.svg" alt="CN" className="gnb-lang-flag" />
              <span className="gnb-lang-code">
                CN
              </span>
            </button>
            <button className="gnb-lang-tab" data-lang="JP">
              <img src="/assets/flag/flag_japan.svg" alt="JP" className="gnb-lang-flag" />
              <span className="gnb-lang-code">
                JP
              </span>
            </button>
            <button className="gnb-lang-tab" data-lang="VN">
              <img src="/assets/flag/flag_vietnam.svg" alt="VN" className="gnb-lang-flag" />
              <span className="gnb-lang-code">
                VN
              </span>
            </button>
          </div>
        ) : (
          <div className="gnb-lang-tabs">
            <button className="gnb-lang-tab is-active" data-lang="KR">
              Korea
            </button>
            <button className="gnb-lang-tab" data-lang="EN">
              English
            </button>
            <button className="gnb-lang-tab" data-lang="CN">
              China
            </button>
            <button className="gnb-lang-tab" data-lang="JP">
              Japan
            </button>
            <button className="gnb-lang-tab" data-lang="VN">
              Vietnam
            </button>
          </div>
        )}
          </div>
          {/* 1행: 서비스, 스페이스, 쇼핑, 소식 */}
          <div className="gnb-cols">
            <div className="gnb-col gnb-col--mobile-only">
              <h4 data-en="About">
                소개
                <svg className="gnb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </h4>
              <ul>
                <li>
                  <Link href="/about" data-en="Who We Are">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link href="/center" data-en="Hugro Center">
                    휴그로센터
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="gnb-col">
              <h4 data-en="Our Services">
                서비스
                <svg className="gnb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </h4>
              <ul>
                <li className="gnb-has-sub">
                  <div className="gnb-item-row">
                    <a href="#" data-en="Beauty Concierge">
                      뷰티
                    </a>
                    <button className="gnb-sub-toggle" aria-label="뷰티 하위 메뉴">
                      <svg className="gnb-sub-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>
                  <ul className="gnb-sub-list gnb-sub-list--flat">
                    <li className="gnb-has-sub">
                      <div className="gnb-item-row">
                        <Link href="/procedure" className="gnb-proc-trigger">
                          시술 종류
                        </Link>
                        <button className="gnb-sub-toggle" aria-label="시술 하위 메뉴">
                          <svg className="gnb-sub-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                      </div>
                      <ul className="gnb-sub-list">
                        <li>
                          <Link href="/procedure">
                            전체
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            필러
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            보톡스
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            실리프팅
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            레이저
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            스킨 부스터
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            피부관리
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            지방분해
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/cosmetic">
                        코스메틱 제품
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/travel" data-en="Travel Concierge">
                    투어
                  </Link>
                </li>
                <li>
                  <Link href="/#treatments">
                    하이라이트
                  </Link>
                </li>
              </ul>
            </div>
            <div className="gnb-col">
              <h4 data-en="Shopping">
                쇼핑
                <svg className="gnb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </h4>
              <ul>
                <li>
                  <Link href="/skin-sol">
                    나의 피부 솔루션 찾기
                  </Link>
                </li>
                <li>
                  <Link href="/cosmetic">
                    코스메틱 제품
                  </Link>
                </li>
              </ul>
            </div>
            <div className="gnb-col">
              <h4 data-en="Space">
                스페이스
                <svg className="gnb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </h4>
              <ul>
                <li>
                  <Link href="/center">
                    휴그로센터 소개
                  </Link>
                </li>
                <li>
                  <Link href="/skin-analysis">
                    피부분석 서비스
                  </Link>
                </li>
              </ul>
            </div>
            <div className="gnb-col">
              <h4 data-en="News">
                소식
                <svg className="gnb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </h4>
              <ul>
                <li>
                  <a href="#" data-en="Event" className="gnb-link--utility">
                    이벤트
                  </a>
                </li>
                <li>
                  <a href="#" data-en="Magazine" className="gnb-link--utility">
                    매거진
                  </a>
                </li>
              </ul>
            </div>
            <div className="gnb-col gnb-col--about-desktop">
              <h4 data-en="About">
                소개
                <svg className="gnb-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </h4>
              <ul>
                <li>
                  <Link href="/about" data-en="Who We Are" className="gnb-link--utility">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link href="/center" data-en="Hugro Center">
                    휴그로센터
                  </Link>
                </li>
                <li>
                  <Link href="/faq" data-en="FAQ" className="gnb-link--utility">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gnb-banners">
            <Link href="/center" className="gnb-banner gnb-banner--hugro">
              <div className="gnb-banner__inner">
                <p className="gnb-banner__label">
                  Premium Space
                </p>
                <p className="gnb-banner__title">
                  휴그로센터
                </p>
                <p className="gnb-banner__sub">
                  의료 뷰티 여행 토탈 케어 공간
                </p>
              </div>
              <svg className="gnb-banner__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/skin-sol" className="gnb-banner gnb-banner--skin">
              <div className="gnb-banner__inner">
                <p className="gnb-banner__label">
                  Skin Solution
                </p>
                <p className="gnb-banner__title">
                  나의 피부 솔루션 찾기
                </p>
                <p className="gnb-banner__sub">
                  나만의 피부 타입 맞춤 케어
                </p>
              </div>
              <svg className="gnb-banner__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
  );
}
