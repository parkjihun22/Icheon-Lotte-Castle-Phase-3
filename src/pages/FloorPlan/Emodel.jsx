import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "E-모델하우스", key: "E-모델하우스" },
    // { title: "3,5단지", key: "3,5단지" },
    // { title: "84A", key: "84A" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    "E-모델하우스": "https://xn--2n1bt8gy9j21eunh17c.com/theme/theme06/vr/tour.html",
    // "3,5단지": "https://www.hillstate.co.kr/upload/2024/11/20241107065049013129/tour.html",
    // "84A": "https://www.prugio.com/hb/2025/onecluster/vr/84a.html",
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };





  const [selectedType, setSelectedType] = useState("E-모델하우스");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 핵심 SEO 페이지: E-모델하우스 */}
  <title>이천 롯데캐슬 3차 - E-모델하우스</title>
  <meta
    name="description"
    content="이천 롯데캐슬 3차 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 84A·84B·122㎡ 세대별 평면도, 인테리어를 실감 나게 확인하실 수 있습니다."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.lotte-castl.co.kr/FloorPlan/Emodel" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="이천 롯데캐슬 3차" />
  <meta property="og:title" content="이천 롯데캐슬 3차 - E-모델하우스" />
  <meta
    property="og:description"
    content="VR 투어와 전용 84A·84B·122㎡ 평면도, 인테리어를 통해 실제 같은 공간을 체험해보세요."
  />
  <meta property="og:url" content="https://www.lotte-castl.co.kr/FloorPlan/Emodel" />
  <meta property="og:image" content="https://www.lotte-castl.co.kr/img/og/emodel.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="이천 롯데캐슬 3차 - E-모델하우스" />
  <meta
    name="twitter:description"
    content="이천 롯데캐슬 3차 VR 모델하우스를 통해 세대별 평면과 인테리어를 생생하게 체험하세요."
  />
  <meta name="twitter:image" content="https://www.lotte-castl.co.kr/img/og/emodel.jpg" />
  <meta name="twitter:url" content="https://www.lotte-castl.co.kr/FloorPlan/Emodel" />

  {/* JSON-LD (구조화데이터) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "이천 롯데캐슬 3차 - E-모델하우스",
      "url": "https://www.lotte-castl.co.kr/FloorPlan/Emodel",
      "description":
        "이천 롯데캐슬 3차 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 84A·84B·122㎡ 세대별 평면도를 확인할 수 있습니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.lotte-castl.co.kr/img/og/emodel.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.lotte-castl.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "E-모델하우스", "item": "https://www.lotte-castl.co.kr/FloorPlan/Emodel" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="E-모델하우스" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  이천 롯데캐슬 3차 - E-모델하우스
</h1>
<p className={styles.screenReaderOnly}>
  이천 롯데캐슬 3차 E-모델하우스를 온라인으로 만나보세요. VR 가상 투어를 통해 세대별 구조와 인테리어를 실제처럼 경험하고,
  전용 84A·84B·122㎡ 평면도 정보를 간편하게 확인할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>현장을 가지 않아도,</div>
  <div>이천 롯데캐슬 3차를 눈앞에서 확인하세요.</div>
</div>




      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>이천 롯데캐슬 3차- E-모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
