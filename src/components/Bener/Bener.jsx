import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="이천 롯데캐슬 3차-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '두산위브' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '이천 롯데캐슬 3차') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          하루의 무게를 내려놓는 순간, 본연으로 돌아가는 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          이천 도심과 가까운 안흥지구 핵심 입지, 교통·생활 편의 모두 갖춘 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          롯데건설 브랜드와 함께하는 이천 롯데캐슬 3차.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          이천 신도심 생활권을 연결하는 롯데캐슬의 새로운 주거지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          중리택지지구와 중심상권, 우정·설봉 생활권을 아우르는 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          브랜드 가치와 함께 누리는 49층 스카이라인의 감동.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          이천 롯데캐슬 3차
        </div>
      </>
    );
  } else if (text === '입지환경'|| text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·상권·공공 인프라가 집중된 이천 핵심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          터미널, 이마트, 이천시장, 설봉산, 시청과 도보권 생활환경을 누리세요.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          이천 최고층 49층 랜드마크 단지의 스카이 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          설계부터 조경, 커뮤니티까지 세심하게 설계된 롯데캐슬 퀄리티.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          이천 롯데캐슬 3차, 일상의 품격을 더하다.
        </div>
      </>
    );
  }
};
