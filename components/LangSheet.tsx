export default function LangSheet() {
  return (
      <div className="lang-sheet" id="langSheet" aria-hidden="true">
        <div className="lang-sheet__backdrop" />
        <div className="lang-sheet__inner">
          <p className="lang-sheet__title">
            언어 선택
          </p>
          <div className="lang-sheet__opts">
            <button className="lang-sheet__opt is-active" data-lang="KR">
              <img src="/assets/flag/flag_south korea.svg" alt="한국" className="lang-sheet-flag-img" />
              한국어
            </button>
            <button className="lang-sheet__opt" data-lang="EN">
              <img src="/assets/flag/flag_united states.svg" alt="English" className="lang-sheet-flag-img" />
              English
            </button>
            <button className="lang-sheet__opt" data-lang="CN">
              <img src="/assets/flag/flag_china.svg" alt="中文" className="lang-sheet-flag-img" />
              中文
            </button>
            <button className="lang-sheet__opt" data-lang="JP">
              <img src="/assets/flag/flag_japan.svg" alt="日本語" className="lang-sheet-flag-img" />
              日本語
            </button>
            <button className="lang-sheet__opt" data-lang="VN">
              <img src="/assets/flag/flag_vietnam.svg" alt="Tiếng Việt" className="lang-sheet-flag-img" />
              Tiếng Việt
            </button>
          </div>
        </div>
      </div>
  );
}
