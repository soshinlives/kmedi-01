"use client";

export default function LoginModal() {
  return (
      <div className="login-modal" id="loginModal" aria-hidden="true">
        <div className="login-modal__backdrop" id="loginBackdrop" />
        <div className="login-modal__box" role="dialog" aria-modal="true" aria-label="로그인">
          <button className="login-modal__close" id="loginClose" aria-label="닫기">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="login-modal__brand">
            K
            <span>
              MEDI
            </span>
            TOUR
          </div>
          <h2 className="login-modal__title">
            다시 오신 것을 환영합니다
          </h2>
          <p className="login-modal__subtitle">
            KMEDITOUR 계정에 로그인하세요
          </p>
          <form className="login-modal__form" onSubmit={(e) => e.preventDefault()}>
            <div className="login-modal__label-group">
              <label className="login-field-label" htmlFor="loginEmail">
                이메일
              </label>
              <div className="login-modal__field">
                <span className="login-field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                </span>
                <input id="loginEmail" type="email" className="login-modal__input" placeholder="email@example.com" autoComplete="email" />
              </div>
            </div>
            <div className="login-modal__label-group">
              <label className="login-field-label" htmlFor="loginPassword">
                비밀번호
              </label>
              <div className="login-modal__field">
                <span className="login-field-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input type="password" id="loginPassword" className="login-modal__input" placeholder="••••••••" autoComplete="current-password" />
                <button type="button" className="login-pwd-eye" id="loginPwdToggle" aria-label="비밀번호 보기">
                  <svg id="eyeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="login-modal__options">
              <label className="login-remember">
                <input type="checkbox" />
                로그인 상태 유지
              </label>
              <a href="#" className="login-modal__forgot">
                비밀번호를 잊으셨나요?
              </a>
            </div>
            <button type="submit" className="login-modal__submit">
              로그인
            </button>
          </form>
          <div className="login-modal__divider">
            <span>
              또는
            </span>
          </div>
          <div className="login-modal__social">
            <button className="login-social-btn login-social-btn--google">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google로 가입하기
            </button>
            <button className="login-social-btn login-social-btn--kakao">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.76 1.69 5.19 4.25 6.63L5.1 21l4.4-2.3c.81.15 1.64.23 2.5.23 5.52 0 10-3.48 10-7.8S17.52 3 12 3z" />
              </svg>
              카카오톡으로 가입하기
            </button>
          </div>
          <p className="login-modal__join">
            계정이 없으신가요?
            <a href="#">
              회원가입
            </a>
          </p>
          <div className="login-modal__admin">
            <a href="#" className="login-admin-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              관리자 로그인
            </a>
          </div>
        </div>
      </div>
  );
}
