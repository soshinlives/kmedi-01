import Link from "next/link";

type HeaderVariant = "" | "solid" | "light";

interface SiteHeaderProps {
  variant?: HeaderVariant;
}

export default function SiteHeader({ variant = "" }: SiteHeaderProps) {
  return (
      <header className={"header" + (variant ? " header--" + variant : "")}>
        <div className="header__util">
          <div className="wrap">
            <div className="util-left">
              <div className="util-dropdown">
                <span className="util-dropdown__trigger">
                  뷰티
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="10" height="10">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <div className="util-dropdown__menu">
                  <Link href="/procedure">
                    시술 종류
                  </Link>
                  <Link href="/skin-sol">
                    나의 피부 솔루션 찾기
                  </Link>
                  <Link href="/cosmetic" className="util-menu-utility">
                    코스메틱 제품
                  </Link>
                </div>
              </div>
              <span className="util-sep" aria-hidden="true" />
              <Link href="/travel">
                투어
              </Link>
              <span className="util-sep" aria-hidden="true" />
              <div className="util-dropdown">
                <span className="util-dropdown__trigger">
                  휴그로센터
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="10" height="10">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <div className="util-dropdown__menu">
                  <Link href="/center">
                    휴그로센터 소개
                  </Link>
                  <Link href="/skin-analysis">
                    피부분석 서비스
                  </Link>
                </div>
              </div>
            </div>
            <div className="util-right">
              <div className="util-dropdown">
                <span className="util-dropdown__trigger">
                  쇼핑
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="10" height="10">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                <div className="util-dropdown__menu">
                  <Link href="/skin-sol">
                    나의 피부 솔루션 찾기
                  </Link>
                  <Link href="/cosmetic">
                    코스메틱 제품
                  </Link>
                </div>
              </div>
              <span className="util-sep" aria-hidden="true" />
              <Link href="/faq">
                FAQ
              </Link>
              <span className="util-sep" aria-hidden="true" />
              <a href="#" id="loginTrigger" className="util-user-circle" aria-label="로그인 / 회원가입">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="9" r="3" />
                  <path d="M6.5 20v-.5a5.5 5.5 0 0 1 11 0v.5" />
                </svg>
              </a>
              <span className="util-sep" aria-hidden="true" />
              <div className="lang-select">
                <button className="lang-select__btn" aria-expanded="false" aria-haspopup="listbox" aria-label="언어 선택">
                  <span className="lang-flag">
                    <img src="/assets/flag/flag_south korea.svg" width="22" height="16" alt="KR" />
                  </span>
                  <span className="lang-code">
                    KR
                  </span>
                  <svg className="lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <ul className="lang-dropdown">
                  <li className="lang-option is-active">
                    <span>
                      <img src="/assets/flag/flag_south korea.svg" width="22" height="16" alt="KR" />
                    </span>
                    KR
                  </li>
                  <li className="lang-option">
                    <span>
                      <img src="/assets/flag/flag_united states.svg" width="22" height="16" alt="US" />
                    </span>
                    EN
                  </li>
                  <li className="lang-option">
                    <span>
                      <img src="/assets/flag/flag_china.svg" width="22" height="16" alt="CN" />
                    </span>
                    CN
                  </li>
                  <li className="lang-option">
                    <span>
                      <img src="/assets/flag/flag_japan.svg" width="22" height="16" alt="JP" />
                    </span>
                    JP
                  </li>
                  <li className="lang-option">
                    <span>
                      <img src="/assets/flag/flag_vietnam.svg" width="22" height="16" alt="VN" />
                    </span>
                    VN
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header__main">
          <div className="wrap">
            <Link href="/" className="brand">
              KMEDITOUR
              <small className="brand-sub-mobile">
                Premium Concierge in Korea
              </small>
            </Link>
            <span className="header__tagline">
              프리미엄 컨시어지
            </span>
            <nav className="gnb">
              <Link href="/">
                홈
              </Link>
              <Link href="/#how">
                서비스 이용 방법
              </Link>
              <Link href="/#services">
                서비스
              </Link>
              <Link href="/#whyus">
                우리를 선택하는 이유
              </Link>
              <Link href="/#treatments">
                하이라이트
              </Link>
              <Link href="/#why">
                매거진
              </Link>
            </nav>
            <div className="header__right">
              <Link href="/#booking" className="btn btn--primary">
                상담 예약하기
              </Link>
              {/* 상단바 v2: 언어변경 */}
              <button className="header-lang-btn header-right--v2 mbar-lang" aria-label="언어변경">
                <svg className="header-lang-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="header-lang-code">
                  KR
                </span>
              </button>
              {/* 햄버거 메뉴 */}
              <button className="header-mypage-btn header-right--v2" aria-label="마이 페이지">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}
