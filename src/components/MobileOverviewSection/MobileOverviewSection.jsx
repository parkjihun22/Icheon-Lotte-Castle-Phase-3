// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
        <strong>사업명</strong>
        <span>이천 롯데캐슬 3차</span>
      </li>
      <li>
        <strong>대지위치</strong>
        <span>경기도 이천시 관고동 487번지 외 5필지</span>
      </li>
      <li>
        <strong>건축규모</strong>
        <span>지하 6층 ~ 지상 49층, 총 4개동</span>
      </li>
      <li>
        <strong>주택형</strong>
        <span>전용 84㎡ · 122㎡(중대형 중심)</span>
      </li>
      <li>
        <strong>세대수</strong>
        <span>총 608세대 (공공지원 민간임대 포함)</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            도안신도시 생활중심과 학세권을 누리는<br />
            이천 롯데캐슬 3차프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "이천 도심권 개발·생활 인프라 호재",
      desc:
        "이천시청 생활권, 공공·상업·주거 복합 개발 기대<br/>경강선, 제2중부고속도로 등 광역 교통망 수혜<br/>이천터미널·롯데프리미엄아울렛 등 중심 입지",
    },
    {
      img: slide2,
      title: "의료·건강 인프라 접근성",
      desc:
        "이천병원·보건소 등 의료기관 인접<br/>검진·응급 등 생활형 의료 편의성 우수<br/>고령층·가족 단위 건강생활권 확보",
    },
    {
      img: slide3,
      title: "광역 교통망 확장 기대",
      desc:
        "경강선·중부고속도로·제2중부고속도로 인접<br/>서울·성남·판교·수원 등 수도권 접근성 강화<br/>이천IC·마장IC·호법JC 인프라 수혜",
    },
    {
      img: slide4,
      title: "교육·생활 인프라 집약",
      desc:
        "관고초·이천중·이천고 등 통학 인접<br/>이마트·CGV·시청·행정기관 등 중심 생활권<br/>이천터미널 도보 이용 가능",
    },
    {
      img: slide5,
      title: "이천 중심 608세대 대단지",
      desc:
        "지하 6층 ~ 지상 49층, 총 4개동 규모<br/>전용 84·102·113㎡ 중대형 평형 구성",
    },
    {
      img: slide6,
      title: "롯데캐슬 브랜드 프리미엄",
      desc:
        "롯데건설 시공, 브랜드 커뮤니티 설계<br/>스카이라인 조망 특화·공원형 동선 계획<br/>2028년 입주 예정",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
