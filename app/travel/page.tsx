import SiteLayout from "@/components/SiteLayout";
import Link from "next/link";
import "../../styles/travel.css";

const PAGE_INLINE: string[] = [
`(function () {
  /* ── 상세 데이터 ── */
  var DETAIL_DATA = {
    'hotel-1': {
      cat: '호텔', title: '롯데호텔 서울 (소공동)',
      addr: '롯데호텔 서울 (소공동), 서울특별시 중구 을지로 30',
      desc: '1979년부터 서울의 중심을 지켜온 롯데호텔 서울은 럭셔리 비즈니스 호텔입니다. 최상의 숙면을 위한 침구와 최고급 어메니티, 미슐랭 레스토랑과 스파, 야외 수영장 등 다양한 부대시설을 갖추고 있어 비즈니스와 레저 여행 모두에 최적화된 환경을 제공합니다.',
      imgs: ['assets/hero/hero-11.png','assets/hero/hero-13.png','assets/hero/hero-14.png']
    },
    'hotel-2': {
      cat: '호텔', title: '더 플라자 서울',
      addr: '더 플라자 서울, 오토그래프 컬렉션, 서울특별시 중구 소공로 119',
      desc: '더 플라자 서울, 오토그래프 컬렉션에서 럭셔리한 휴가를 만끽해 보세요. 고품격 어메니티와 최상의 맞춤 서비스, 시그니처 레스토랑과 도심 속 스파를 갖춘 5성급 호텔입니다.',
      imgs: ['assets/hero/hero-13.png','assets/hero/hero-14.png','assets/hero/hero-15.png']
    },
    'hotel-3': {
      cat: '호텔', title: 'JW 메리어트 호텔 서울',
      addr: 'JW 메리어트 호텔 서울, 서울특별시 서초구 신반포로 176',
      desc: '유명 관광지와 가까운 강남 소재 JW 메리어트 호텔 서울은 5성급 호텔 경험을 제공하는 특급 호텔입니다. 실내 수영장, 스파, 다양한 F&B 시설을 갖추고 있습니다.',
      imgs: ['assets/hero/hero-14.png','assets/hero/hero-15.png','assets/hero/hero-11.png']
    },
    'shop-1': {
      cat: '면세점', title: '롯데면세점 명동점',
      addr: '롯데면세점 본점, 서울 중구 을지로 30',
      promo: '면세점 이용 시 할인 쿠폰을 제공해 드립니다. (일부 브랜드는 프로모션에서 제외될 수 있습니다)',
      desc: '명동 중심에 위치한 국내 최대 규모의 면세점으로 명품부터 K-뷰티까지 한자리에서 쇼핑할 수 있습니다.',
      imgs: ['assets/hero/hero-15.png','assets/hero/hero-17.png','assets/hero/hero-2.png','assets/hero/hero-5.png','assets/hero/hero-7.png'],
      cats: ['메이크업','럭셔리','주류','패션']
    },
    'shop-2': {
      cat: '면세점', title: '신세계면세점 명동점',
      addr: '신세계면세점 명동점, 서울 중구 퇴계로 77',
      desc: '쇼핑과 미식, 전망까지 즐길 수 있는 프리미엄 면세 쇼핑몰. 루프탑 전망대와 레스토랑이 함께 운영됩니다.',
      imgs: ['assets/hero/hero-17.png','assets/hero/hero-15.png','assets/hero/hero-2.png']
    },
    'shop-3': {
      cat: '시장', title: '남대문시장',
      addr: '남대문시장, 서울 중구 남대문시장4길 21',
      desc: '서울 대표 재래시장으로 먹거리부터 의류·잡화까지 다양한 상품을 만날 수 있습니다. 갈치조림 골목과 호떡 노점, 칼국수 골목이 유명합니다.',
      imgs: ['assets/hero/hero-2.png','assets/hero/hero-5.png','assets/hero/hero-7.png']
    },
    'shop-4': {
      cat: '시장', title: '동대문시장',
      addr: '동대문시장, 서울 중구 을지로 281',
      desc: '24시간 쇼핑이 가능한 패션·의류 메카. 아시장과 먹거리도 풍성합니다. 닭한마리 골목과 떡볶이 타운이 인기입니다.',
      imgs: ['assets/hero/hero-5.png','assets/hero/hero-7.png','assets/hero/hero-2.png']
    },
    'shop-5': {
      cat: '쇼핑몰', title: '성수동 연무장길',
      addr: '성수동 연무장길, 서울 성동구 연무장길',
      desc: '힙한 편집숍과 카페, 팝업스토어가 모인 성수동 핫플레이스. 성수 베이커리, 스페셜티 커피, 수제 버거가 유명합니다.',
      imgs: ['assets/hero/hero-7.png','assets/hero/hero-2.png','assets/hero/hero-5.png']
    }
  };

  /* ── 탭 전환 ── */
  var tabBtns = document.querySelectorAll('.tab-line__btn');
  var panels  = { hotel: document.getElementById('panel-hotel'), shopping: document.getElementById('panel-shopping') };
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      Object.values(panels).forEach(function (p) { p.classList.remove('is-active'); });
      panels[btn.dataset.tab].classList.add('is-active');
    });
  });

  /* ── 검색 ── */
  document.querySelectorAll('.tv-search__input').forEach(function (input) {
    input.addEventListener('input', function () {
      filterAndSort(input.dataset.search);
    });
  });

  /* ── 소팅 ── */
  var sortState = { hotel: 'recommended', shopping: 'recommended' };

  document.querySelectorAll('[data-sort-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var key = btn.dataset.sortToggle;
      var menu = document.getElementById('sortmenu-' + key);
      menu.classList.toggle('is-open');
    });
  });

  document.querySelectorAll('[data-sort]').forEach(function (item) {
    item.addEventListener('click', function () {
      var key = item.dataset.sort;
      var val = item.dataset.value;
      sortState[key] = val;
      var menu = document.getElementById('sortmenu-' + key);
      menu.querySelectorAll('.tv-sort__item').forEach(function (i) { i.classList.toggle('is-active', i.dataset.value === val); });
      document.querySelector('[data-sort-label="' + key + '"]').textContent = val === 'recommended' ? '추천순' : '이름순';
      menu.classList.remove('is-open');
      filterAndSort(key);
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.tv-sort__menu').forEach(function (m) { m.classList.remove('is-open'); });
  });

  /* ── 카테고리 칩 (쇼핑) ── */
  var activeFilter = 'all';
  document.querySelectorAll('[data-filter]').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('[data-filter]').forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      activeFilter = chip.dataset.filter;
      filterAndSort('shopping');
    });
  });

  function filterAndSort(key) {
    var grid  = document.getElementById('grid-' + key);
    var cards = Array.from(grid.querySelectorAll('.tv-card'));
    var query = (document.querySelector('[data-search="' + key + '"]').value || '').trim().toLowerCase();

    cards.forEach(function (card) {
      var name = card.dataset.name.toLowerCase();
      var matchSearch = !query || name.includes(query);
      var matchCat = key !== 'shopping' || activeFilter === 'all' || card.dataset.cat === activeFilter;
      card.style.display = (matchSearch && matchCat) ? '' : 'none';
    });

    /* sort */
    var visible = cards.filter(function (c) { return c.style.display !== 'none'; });
    if (sortState[key] === 'name') {
      visible.sort(function (a, b) { return a.dataset.name.localeCompare(b.dataset.name, 'ko'); });
    } else {
      visible.sort(function (a, b) { return parseInt(a.dataset.order) - parseInt(b.dataset.order); });
    }
    visible.forEach(function (c) { grid.appendChild(c); });

    /* count */
    var countEl = document.getElementById('count-' + key);
    if (countEl) {
      var unit = key === 'hotel' ? '숙소' : '쇼핑';
      countEl.innerHTML = '총 <span class="tv-count__num">' + visible.length + '</span>개 ' + unit;
    }

    /* empty */
    var emptyEl = grid.querySelector('.tv-empty');
    if (visible.length === 0) {
      if (!emptyEl) {
        var div = document.createElement('div');
        div.className = 'tv-empty';
        div.textContent = '검색 결과가 없습니다.';
        grid.appendChild(div);
      }
    } else {
      if (emptyEl) emptyEl.remove();
    }
  }

  /* ── 상세 오버레이 ── */
  var detail   = document.getElementById('tvDetail');
  var backdrop = document.getElementById('tvDetailBackdrop');
  var backBtn  = document.getElementById('tvDetailBack');
  var detImgs  = document.getElementById('tvDetailImgs');
  var detCtr   = document.getElementById('tvDetailCounter');
  var detDots  = document.getElementById('tvDetailDots');
  var detCur   = 0;

  function openDetail(key) {
    var d = DETAIL_DATA[key];
    if (!d) return;
    document.getElementById('tvDetailCat').textContent   = d.cat || '';
    document.getElementById('tvDetailTitle').textContent = d.title || '';
    document.getElementById('tvDetailDesc').textContent  = d.desc || '';
    var addrEl = document.getElementById('tvDetailAddr');
    addrEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' + (d.addr || '');
    var promoEl = document.getElementById('tvDetailPromo');
    promoEl.textContent = d.promo || '';
    promoEl.style.display = d.promo ? '' : 'none';

    /* 카테고리 그리드 */
    var catSec = document.getElementById('tvDetailCatSection');
    if (d.cats && d.cats.length) {
      catSec.innerHTML = '<p class="tv-detail__sub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>카테고리</p><div class="tv-detail__cat-grid">'
        + d.cats.map(function (c, i) {
            var img = d.imgs[i] || d.imgs[0];
            return '<div class="tv-detail__cat-item"><img class="tv-detail__cat-img" src="' + img + '" alt="' + c + '" /><span class="tv-detail__cat-label">' + c + '</span></div>';
          }).join('') + '</div>';
    } else {
      catSec.innerHTML = '';
    }

    /* 이미지 캐러셀 */
    var imgs = d.imgs || [];
    detImgs.innerHTML = imgs.map(function (src) {
      return '<img class="tv-detail__img" src="' + src + '" alt="" />';
    }).join('');
    detDots.innerHTML = imgs.map(function (_, i) {
      return '<button class="tv-detail__cdot' + (i === 0 ? ' is-active' : '') + '" data-i="' + i + '"></button>';
    }).join('');
    detDots.querySelectorAll('.tv-detail__cdot').forEach(function (dot) {
      dot.addEventListener('click', function () { goImg(parseInt(dot.dataset.i)); });
    });
    detCur = 0;
    goImg(0);

    detail.classList.add('is-open');
    detail.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    detail.querySelector('.tv-detail__panel').scrollTop = 0;
  }

  function closeDetail() {
    detail.classList.remove('is-open');
    detail.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function goImg(idx) {
    var total = detImgs.querySelectorAll('.tv-detail__img').length;
    if (idx < 0 || idx >= total) return;
    detCur = idx;
    detImgs.style.transform = 'translateX(-' + (idx * 100) + '%)';
    detCtr.textContent = (idx + 1) + ' / ' + total;
    detDots.querySelectorAll('.tv-detail__cdot').forEach(function (d, i) {
      d.classList.toggle('is-active', i === idx);
    });
  }

  document.querySelectorAll('.tv-card').forEach(function (card) {
    card.addEventListener('click', function () { openDetail(card.dataset.detail); });
  });
  backdrop.addEventListener('click', closeDetail);
  backBtn.addEventListener('click', closeDetail);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDetail(); });

  /* 스와이프 */
  var startX2 = 0;
  detImgs.parentElement.addEventListener('touchstart', function (e) { startX2 = e.touches[0].clientX; }, { passive: true });
  detImgs.parentElement.addEventListener('touchend', function (e) {
    var diff = startX2 - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? goImg(detCur + 1) : goImg(detCur - 1);
  }, { passive: true });

  /* ── 로그인 모달 ── */
  (function () {
    var trigger = document.getElementById('loginTrigger');
    var modal   = document.getElementById('loginModal');
    var close   = document.getElementById('loginClose');
    var bd      = document.getElementById('loginBackdrop');
    function open()  { modal.classList.add('is-open');    modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
    function shut()  { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true');  document.body.style.overflow=''; }
    if (trigger) trigger.addEventListener('click', function(e){ e.preventDefault(); open(); });
    var gnbBtn = document.querySelector('.gnb-login-btn');
    if (gnbBtn) gnbBtn.addEventListener('click', function(e){ e.preventDefault(); open(); });
    if (close) close.addEventListener('click', shut);
    if (bd)    bd.addEventListener('click', shut);
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') shut(); });
  })();
})();`,
];

export default function TravelPage() {
  return (
    <SiteLayout footerTagline="한국의 앞선 의료와 서울의 품격을 잇는 프리미엄 컨시어지." pageInline={PAGE_INLINE} afterMain={
        <>
        {/* ── DETAIL OVERLAY ── */}
        <div className="tv-detail" id="tvDetail" aria-hidden="true">
          <div className="tv-detail__backdrop" id="tvDetailBackdrop" />
          <div className="tv-detail__panel" role="dialog" aria-modal="true" aria-label="상세 정보">
            <button className="tv-detail__back" id="tvDetailBack">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              뒤로
            </button>
            <div className="tv-detail__carousel">
              <div className="tv-detail__imgs" id="tvDetailImgs" />
              <span className="tv-detail__counter" id="tvDetailCounter">
                1 / 1
              </span>
              <div className="tv-detail__cdots" id="tvDetailDots" />
            </div>
            <div className="tv-detail__body">
              <span className="tv-detail__cat-tag" id="tvDetailCat" />
              <h2 className="tv-detail__title" id="tvDetailTitle" />
              <p className="tv-detail__addr" id="tvDetailAddr" />
              <p className="tv-detail__promo" id="tvDetailPromo" />
              <p className="tv-detail__desc" id="tvDetailDesc" />
              <div id="tvDetailCatSection" />
              <div className="tv-detail__cta">
                <p className="tv-detail__cta-title">
                  예약 문의
                </p>
                <p className="tv-detail__cta-desc">
                  맞춤 일정 및 요금 안내를 도와드립니다.
                </p>
                <button className="tv-detail__cta-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  문의하기
                </button>
                <div className="tv-detail__cta-info">
                  <div className="tv-detail__cta-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.4 2 2 0 0 1 3.59 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.09 6.09l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    TEL : +82-2-514-0799
                  </div>
                  <div className="tv-detail__cta-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <polyline points="2,4 12,13 22,4" />
                    </svg>
                    contact@kmeditour.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        {/* ============================== 문의 (CONTACT) ============================== */}
        </>
      }>
      {/* HERO */}
      <section className="page-hero page-hero--navy page-hero--bc">
        <div className="wrap">
          <p className="eyebrow">
            Travel in Korea
          </p>
          <h1 className="page-hero__title">
            투어
          </h1>
          <p className="page-hero__sub">
            서울의 프리미엄 호텔과 쇼핑 명소를
            <br />
            KMEDITOUR가 엄선하여 안내합니다.
          </p>
          <nav className="bc-nav" aria-label="현재 위치">
            <Link href="/">
              홈
            </Link>
            <span className="bc-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">
              투어
            </span>
          </nav>
        </div>
      </section>
      {/* TAB BAR */}
      <nav className="tv-tabs" aria-label="투어 카테고리">
        <button className="tab-line__btn is-active" data-tab="hotel">
          호텔
        </button>
        <button className="tab-line__btn" data-tab="shopping">
          쇼핑
        </button>
      </nav>
      {/* CONTENT */}
      <section className="tv-content">
        {/* ─ 호텔 패널 ─ */}
        <div className="tv-panel is-active" id="panel-hotel">
          <div className="tv-toolbar">
            <div className="tv-toolbar__right">
              <div className="tv-sort" id="sort-hotel">
                <button className="tv-sort__btn" data-sort-toggle="hotel">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="14" y2="12" />
                    <line x1="4" y1="18" x2="9" y2="18" />
                  </svg>
                  <span className="tv-sort__label" data-sort-label="hotel">
                    추천순
                  </span>
                </button>
                <div className="tv-sort__menu" id="sortmenu-hotel">
                  <div className="tv-sort__item is-active" data-sort="hotel" data-value="recommended">
                    <svg className="tv-sort__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    추천순
                  </div>
                  <div className="tv-sort__item" data-sort="hotel" data-value="name">
                    <svg className="tv-sort__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    이름순
                  </div>
                </div>
              </div>
              <p className="tv-count" id="count-hotel">
                총
                <span className="tv-count__num">
                  3
                </span>
                개 숙소
              </p>
            </div>
            <div className="tv-search">
              <svg className="tv-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input className="tv-search__input" type="text" placeholder="호텔 검색..." data-search="hotel" />
            </div>
          </div>
          <div className="tv-grid" id="grid-hotel">
            <div className="tv-card" data-name="롯데호텔 서울 (소공동)" data-order="1" data-detail="hotel-1">
              <img className="tv-card__img" src="/assets/hero/hero-11.png" alt="롯데호텔 서울" />
              <div className="tv-card__body">
                <h3 className="tv-card__title">
                  롯데호텔 서울 (소공동)
                </h3>
                <p className="tv-card__desc">
                  1979년부터 서울의 중심을 지켜온 롯데호텔 서울은 럭셔리 비즈니스 호텔입니다. 최상의 숙면을 위한…
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  롯데호텔 서울 (소공동), 서울특별시 중구 을지로 30
                </p>
              </div>
            </div>
            <div className="tv-card" data-name="더 플라자 서울" data-order="2" data-detail="hotel-2">
              <img className="tv-card__img" src="/assets/hero/hero-13.png" alt="더 플라자 서울" />
              <div className="tv-card__body">
                <h3 className="tv-card__title">
                  더 플라자 서울
                </h3>
                <p className="tv-card__desc">
                  더 플라자 서울, 오토그래프 컬렉션에서 럭셔리한 휴가를 만끽해 보세요. 고품격 어메니티와 최상의 맞춤…
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  더 플라자 서울, 오토그래프 컬렉션, 서울특별시 중구 소공로 119
                </p>
              </div>
            </div>
            <div className="tv-card" data-name="JW 메리어트 호텔 서울" data-order="3" data-detail="hotel-3">
              <img className="tv-card__img" src="/assets/hero/hero-14.png" alt="JW 메리어트 호텔 서울" />
              <div className="tv-card__body">
                <h3 className="tv-card__title">
                  JW 메리어트 호텔 서울
                </h3>
                <p className="tv-card__desc">
                  유명 관광지와 가까운 강남 소재 JW 메리어트 호텔 서울은 5성급 호텔 경험을 제공하는 특급 호텔입니다.
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  JW 메리어트 호텔 서울, 서울특별시 서초구 신반포로 176
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ─ 쇼핑 패널 ─ */}
        <div className="tv-panel" id="panel-shopping">
          <div className="tv-chips" id="chips-shopping">
            <button className="tv-chip is-active" data-filter="all">
              전체
            </button>
            <button className="tv-chip" data-filter="면세점">
              면세점
            </button>
            <button className="tv-chip" data-filter="쇼핑몰">
              쇼핑몰
            </button>
            <button className="tv-chip" data-filter="시장">
              시장
            </button>
          </div>
          <div className="tv-toolbar">
            <div className="tv-toolbar__right">
              <div className="tv-sort" id="sort-shopping">
                <button className="tv-sort__btn" data-sort-toggle="shopping">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="14" y2="12" />
                    <line x1="4" y1="18" x2="9" y2="18" />
                  </svg>
                  <span className="tv-sort__label" data-sort-label="shopping">
                    추천순
                  </span>
                </button>
                <div className="tv-sort__menu" id="sortmenu-shopping">
                  <div className="tv-sort__item is-active" data-sort="shopping" data-value="recommended">
                    <svg className="tv-sort__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    추천순
                  </div>
                  <div className="tv-sort__item" data-sort="shopping" data-value="name">
                    <svg className="tv-sort__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    이름순
                  </div>
                </div>
              </div>
              <p className="tv-count" id="count-shopping">
                총
                <span className="tv-count__num">
                  5
                </span>
                개 쇼핑
              </p>
            </div>
            <div className="tv-search">
              <svg className="tv-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input className="tv-search__input" type="text" placeholder="쇼핑 검색..." data-search="shopping" />
            </div>
          </div>
          <div className="tv-grid" id="grid-shopping">
            <div className="tv-card" data-name="롯데면세점 명동점" data-order="1" data-cat="면세점" data-detail="shop-1">
              <img className="tv-card__img" src="/assets/hero/hero-15.png" alt="롯데면세점 명동점" />
              <div className="tv-card__body">
                <div className="tv-card__tags">
                  <span className="tv-card__tag">
                    면세점
                  </span>
                </div>
                <h3 className="tv-card__title">
                  롯데면세점 명동점
                </h3>
                <p className="tv-card__desc">
                  명동 중심에 위치한 국내 최대 규모의 면세점으로 명품부터 K-뷰티까지 한자리에서 쇼핑할 수 있습니다.
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  롯데면세점 본점, 서울 중구 을지로 30
                </p>
              </div>
            </div>
            <div className="tv-card" data-name="신세계면세점 명동점" data-order="2" data-cat="면세점" data-detail="shop-2">
              <img className="tv-card__img" src="/assets/hero/hero-17.png" alt="신세계면세점 명동점" />
              <div className="tv-card__body">
                <div className="tv-card__tags">
                  <span className="tv-card__tag">
                    면세점
                  </span>
                </div>
                <h3 className="tv-card__title">
                  신세계면세점 명동점
                </h3>
                <p className="tv-card__desc">
                  쇼핑과 미식, 전망까지 즐길 수 있는 프리미엄 면세 쇼핑몰.
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  신세계면세점 명동점, 서울 중구 퇴계로 77
                </p>
              </div>
            </div>
            <div className="tv-card" data-name="남대문시장" data-order="3" data-cat="시장" data-detail="shop-3">
              <img className="tv-card__img" src="/assets/hero/hero-2.png" alt="남대문시장" />
              <div className="tv-card__body">
                <div className="tv-card__tags">
                  <span className="tv-card__tag">
                    갈치조림 골목
                  </span>
                  <span className="tv-card__tag">
                    호떡 노점
                  </span>
                  <span className="tv-card__tag">
                    칼국수 골목
                  </span>
                </div>
                <h3 className="tv-card__title">
                  남대문시장
                </h3>
                <p className="tv-card__desc">
                  서울 대표 재래시장으로 먹거리부터 의류·잡화까지 다양한 상품을 만날 수 있습니다.
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  남대문시장, 서울 중구 남대문시장4길 21
                </p>
              </div>
            </div>
            <div className="tv-card" data-name="동대문시장" data-order="4" data-cat="시장" data-detail="shop-4">
              <img className="tv-card__img" src="/assets/hero/hero-5.png" alt="동대문시장" />
              <div className="tv-card__body">
                <div className="tv-card__tags">
                  <span className="tv-card__tag">
                    닭한마리 골목
                  </span>
                  <span className="tv-card__tag">
                    아시장 포장마차
                  </span>
                  <span className="tv-card__tag">
                    떡볶이 타운
                  </span>
                </div>
                <h3 className="tv-card__title">
                  동대문시장
                </h3>
                <p className="tv-card__desc">
                  24시간 쇼핑이 가능한 패션·의류 메카. 아시장과 먹거리도 풍성합니다.
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  동대문시장, 서울 중구 을지로 281
                </p>
              </div>
            </div>
            <div className="tv-card" data-name="성수동 연무장길" data-order="5" data-cat="쇼핑몰" data-detail="shop-5">
              <img className="tv-card__img" src="/assets/hero/hero-7.png" alt="성수동 연무장길" />
              <div className="tv-card__body">
                <div className="tv-card__tags">
                  <span className="tv-card__tag">
                    성수 베이커리
                  </span>
                  <span className="tv-card__tag">
                    스페셜티 커피
                  </span>
                  <span className="tv-card__tag">
                    수제 버거
                  </span>
                </div>
                <h3 className="tv-card__title">
                  성수동 연무장길
                </h3>
                <p className="tv-card__desc">
                  힙한 편집숍과 카페, 팝업스토어가 모인 성수동 핫플레이스.
                </p>
                <p className="tv-card__addr">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  성수동 연무장길, 서울 성동구 연무장길
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <div className="cta-banner" id="consultation" data-reveal="">
        <div>
          <p className="cta-banner__label">
            여행 일정 문의
          </p>
          <p className="cta-banner__title">
            나만의 서울 여행을 전담 코디네이터와 함께 완성하세요
          </p>
        </div>
        <a href="#" className="cta-banner__btn">
          상담 예약하기
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </SiteLayout>
  );
}
