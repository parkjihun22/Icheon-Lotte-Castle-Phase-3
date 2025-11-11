import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>이천 롯데캐슬 3차 - 프리미엄</title>
  <meta
    name="description"
    content="이천 롯데캐슬 3차 프리미엄을 확인하세요. 1,325세대 브랜드 대단지, 지상 차 없는 공원형 단지, 중부고속도로 및 송정IC 접근성, 특화 커뮤니티와 설봉공원·이천온천 등 자연환경의 핵심 가치를 안내합니다."
  />
  <link rel="canonical" href="https://www.lotte-castl.co.kr/LocationEnvironment/primium" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  이천 롯데캐슬 3차 - 프리미엄
</h1>
<p className={styles.screenReaderOnly}>
  이천 롯데캐슬 3차만의 프리미엄을 만나보세요. 브랜드 대단지, 공원형 단지 설계와 
  특화된 커뮤니티, 중부고속도로 및 송정IC와의 우수한 접근성, 설봉공원·온천 등 자연 인프라가 조화를 이루는 프리미엄 생활을 제안합니다.
</p>

<div className={styles.textBox}>
  <div>이천의 새로운 기준 위에</div>
  <div>이천 롯데캐슬 3차의 프리미엄을 누리세요.</div>
</div>



      <img
        src={page1}
        className={styles.image3}
        alt="이천 롯데캐슬 3차 프리미엄 이미지1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
