import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>이천 롯데캐슬 3차 - 브랜드 소개</title>
  <meta
    name="description"
    content="롯데건설 롯데캐슬(CASTLE)의 브랜드 철학과 가치를 소개합니다. 프리미엄 품질 기준과 첨단 시스템, 커뮤니티 설계로 미래의 주거 가치를 제시하는 이천 롯데캐슬 3차."
  />
  <link rel="canonical" href="https://lotte-castl.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="이천 롯데캐슬 3차" />
  <meta property="og:title" content="이천 롯데캐슬 3차 - 브랜드 소개" />
  <meta
    property="og:description"
    content="롯데캐슬 브랜드 소개: 프리미엄 주거문화와 고객 중심 설계, 고급 자재·첨단 시스템을 담은 이천 롯데캐슬 3차의 철학을 소개합니다."
  />
  <meta property="og:url" content="https://lotte-castl.co.kr/Brand/intro" />
  <meta property="og:image" content="https://lotte-castl.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>이천 롯데캐슬 3차 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  이천 롯데캐슬 3차는 프리미엄 주거 브랜드 롯데캐슬(CASTLE)을 적용한 주거 단지입니다.
  고객 중심의 설계, 고급 마감재, 첨단 시스템으로 차별화된 주거 품격을 갖추었습니다.
  롯데건설의 신뢰와 기술력으로 완성된 이천 롯데캐슬 3차는 미래 지향적인 주거 가치를 제시합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>생활의 모든 것을 한걸음에</div>
  <div>롯데캐슬, 이천의 중심에 서다</div>
</div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="이천 롯데캐슬 3차brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
