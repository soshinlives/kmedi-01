import Link from "next/link";

interface MobileBarProps {
  active?: "home" | "skin-sol" | "center" | null;
}

export default function MobileBar({ active = null }: MobileBarProps) {
  return (
      <nav className="mobile-bar mobile-bar--v1" aria-label="메인 메뉴">
        <Link className={"mbar-btn" + (active === "home" ? " is-active" : "")} href="/" aria-label="홈">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="mbar-label">
            홈
          </span>
        </Link>
        <Link className={"mbar-btn" + (active === "skin-sol" ? " is-active" : "")} href="/skin-sol" aria-label="나의 피부타입">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z" />
          </svg>
          <span className="mbar-label">
            나의 피부타입
          </span>
        </Link>
        <Link className="mbar-btn" href="/#booking" aria-label="상담예약">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="mbar-label">
            상담예약
          </span>
        </Link>
        <Link className={"mbar-btn" + (active === "center" ? " is-active" : "")} href="/center" aria-label="휴그로센터">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="1" />
            <rect x="9" y="8" width="2" height="3" />
            <rect x="13" y="8" width="2" height="3" />
            <rect x="9" y="14" width="2" height="3" />
            <rect x="13" y="14" width="2" height="3" />
            <rect x="10" y="18" width="4" height="4" />
          </svg>
          <span className="mbar-label">
            휴그로센터
          </span>
        </Link>
        <button className="mbar-btn mbar-menu-trigger" aria-label="전체 메뉴">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <span className="mbar-label">
            메뉴
          </span>
        </button>
      </nav>
  );
}
