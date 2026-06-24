"use client";

export default function FootContact() {
  return (
      <section className="foot-contact">
        <div className="wrap foot-contact__inner">
          <div className="foot-contact__text">
            <h2 className="foot-contact__title">
              궁금한 점이 있으신가요?
            </h2>
            <p className="foot-contact__desc">
              이메일을 남겨주시면 전담 코디네이터가 빠르게 답변드립니다.
            </p>
          </div>
          <form className="foot-contact__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="foot-contact__input" placeholder="이메일 주소를 입력하세요" aria-label="이메일 주소" />
            <button type="submit" className="btn btn--primary foot-contact__btn">
              문의하기
            </button>
          </form>
        </div>
      </section>
  );
}
