import Link from "next/link";

export default function ProcSheet() {
  return (
      <div className="proc-sheet" id="procSheet" aria-hidden="true">
        <div className="proc-sheet__bar">
          <span className="proc-sheet__title">
            시술 종류
          </span>
          <button className="proc-sheet__close" aria-label="닫기">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
        <ul className="proc-sheet__list">
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
        <Link href="/#booking" className="proc-sheet__banner">
          <div className="proc-sheet__banner-inner">
            <p className="proc-sheet__banner-label">
              Premium Beauty Concierge
            </p>
            <p className="proc-sheet__banner-title">
              시술 상담 예약하기
            </p>
            <p className="proc-sheet__banner-sub">
              전담 코디네이터가 맞춤 시술을 안내합니다
            </p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
  );
}
