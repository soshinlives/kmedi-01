interface SiteFooterProps {
  brandSub?: string;
  tagline?: string;
}

export default function SiteFooter({
  brandSub = "Premium Concierge in Korea",
  tagline = "한국의 앞선 의료와 서울의 품격을 잇는 프리미엄 컨시어지. 시술부터 머무름까지, 전담 코디네이터가 당신만의 여정을 섬세하게 완성합니다.",
}: SiteFooterProps) {
  return (
      <footer className="footer">
        <div className="wrap">
          <div className="footer__top">
            <a href="#">
              개인정보처리방침
            </a>
            <a href="#">
              이용약관
            </a>
            <a href="#">
              환불 정책
            </a>
          </div>
          <div className="footer__mid">
            <div>
              <div className="footer__brand">
            KMEDITOUR
            <small>{brandSub}</small>
          </div>
              <p className="footer__tagline">{tagline}</p>
            </div>
            <dl>
              <dt>
                대표자
              </dt>
              <dd>
                이석재
              </dd>
              <dt>
                주소
              </dt>
              <dd>
                서울특별시 강남구 압구정로14길 22, 4층(신사동)
              </dd>
              <dt>
                대표전화
              </dt>
              <dd>
                +82-2-514-0799
              </dd>
              <dt>
                사업자등록번호
              </dt>
              <dd>
                558-81-03752
              </dd>
            </dl>
            <dl>
              <dt>
                상담 운영
              </dt>
              <dd>
                연중무휴 09:00 — 21:00
              </dd>
              <dt>
                카카오 상담
              </dt>
              <dd>
                @KMEDITOUR
              </dd>
              <dt>
                이메일
              </dt>
              <dd>
                contact@kmeditour.com
              </dd>
              <dt>
                전담 케어
              </dt>
              <dd>
                1:1 코디네이터 배정
              </dd>
            </dl>
          </div>
          <div className="footer__top-wrap">
            <button className="footer__top-btn" aria-label="맨 위로">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
              <span>
                TOP
              </span>
            </button>
          </div>
          <div className="footer__bottom">
            <span>
              © 2026 KMEDITOUR. All rights reserved.
            </span>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v6h3v-6h2.5l.5-3H14V9z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="6" width="18" height="12" rx="3" />
                  <path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
