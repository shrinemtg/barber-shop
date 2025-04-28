import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// メニューセクション
const MenuSection = () => {
  // スクロール量に応じて泡のアニメーションを制御
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // 泡の出現数をスクロール量で制御
  const bubbleCount = Math.min(3, Math.floor(scrollY / 80) + 1);
  const bubbles = [
    { delay: 0, size: 32, top: 10 },
    { delay: 0.5, size: 24, top: 20 },
    { delay: 1.0, size: 18, top: 30 },
  ].slice(0, bubbleCount);

  return (
    <Section>
      <MenuGbWrap>
        <Image
          src="/gebr-images/Razor-bg.jpg"
          alt="Menu背景"
          width={1920}
          height={240}
          style={{ objectFit: "cover", width: "100vw", height: "auto" }}
          priority
        />
        <Bubbles>
          {bubbles.map((b, i) => (
            <Bubble key={i} $delay={b.delay} $size={b.size} />
          ))}
        </Bubbles>
      </MenuGbWrap>
      <DescriptionWrap>
        <Heading id="menu">Menu</Heading>
        <Description>
          hair gebr
          Yokotaは、お客様に安心して施術を受けていただくために、事前のカウンセリングを徹底しています。お客様の髪の悩みや理想のスタイルを丁寧に把握し、最適な施術プランをご提案いたします。カット・カラー・パーマ・トリートメントに加え、多様なメニューを取り揃えておりますので、どんなことでもお気軽にお問い合わせください。
        </Description>
        <a
          href="https://preeminent-pony-987166.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ReservationBoxWrap>
            <ArrowImg
              src="/gebr-images/Vector1.png"
              alt="矢印"
              width={100}
              height={100}
              priority
            />
            <ReservationBox>
              <Image
                src="/gebr-images/Menu-button.jpg"
                alt="公式LINE Menu/予約"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <ReservationText>
                公式LINE
                <br />
                Menu/予約
              </ReservationText>
            </ReservationBox>
          </ReservationBoxWrap>
        </a>
      </DescriptionWrap>
    </Section>
  );
};

export default MenuSection;

// ================= styled-componentsは下部に配置 =================

// セクション全体
const Section = styled.section`
  width: 100%;
  padding: 4rem 0;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    padding: 3rem 0;
  }
  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;

// メニュー背景画像ラップ
const MenuGbWrap = styled.div`
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  margin: 0 0 1.5rem 0;
  overflow: hidden;
  position: relative;
  background: #fff;
  left: 50%;
  transform: translateX(-50%);
`;

// 泡のアニメーション
const bubbleUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.7);
  }
  20% {
    opacity: 1;
    transform: translate(10px, -10px) scale(1);
  }
  80% {
    opacity: 1;
    transform: translate(40px, -40px) scale(1.1);
  }
  100% {
    opacity: 0;
    transform: translate(80px, -80px) scale(1.2);
  }
`;

const Bubbles = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  pointer-events: none;
  z-index: 2;
`;

const Bubble = styled.div<{ $delay: number; $size: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.7;
  animation: ${bubbleUp} 2.5s infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

// 見出し
const Heading = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 400;
  color: #0d1d43;
  margin-bottom: 1.5rem;
  text-align: center;
  z-index: 1;
  @media (min-width: 901px) {
    font-size: 3rem;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0 0 2rem 1.5rem;
    text-align: left;
  }
`;

// 説明文ラップ
const DescriptionWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  @media (min-width: 901px) {
    max-width: 600px;
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    padding-top: 4rem;
  }
`;

// 説明文
const Description = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  color: #0d1d43;
  line-height: 1.6;
  text-align: left;
  margin: 0 0 3.5rem 0;
  background: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 2rem 1.2rem;
  z-index: 1;
`;

// 予約ボックスラップ
const ReservationBoxWrap = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  display: flex;
  align-items: flex-end;
  z-index: 2;
  @media (min-width: 901px) {
    position: static;
    margin: 200px 0 0 0;
    align-items: flex-end;
    width: 180px;
    height: 120px;
  }
`;

const ArrowImg = styled(Image)`
  width: 80px !important;
  height: 80px !important;
  margin: 0 3rem 0 0;
  z-index: 5;
  pointer-events: none;
  align-self: flex-end;
  @media (min-width: 901px) {
    display: none;
  }
`;

const ReservationBox = styled.div`
  width: 140px;
  height: 90px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: relative;
  @media (min-width: 901px) {
    width: 180px;
    height: 120px;
  }
`;

const ReservationText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.1rem;
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 3;
  text-align: center;
  width: 100%;
  @media (min-width: 901px) {
    font-size: 1.25rem;
  }
`;
