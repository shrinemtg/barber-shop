import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const images = [
  { src: "/gebr-images/Sample01.jpg", alt: "Style 1" },
  { src: "/gebr-images/Sample02.jpg", alt: "Style 2" },
  { src: "/gebr-images/Sample03.jpg", alt: "Style 3" },
  { src: "/gebr-images/Sample04.jpg", alt: "Style 4" },
];

const CARD_WIDTH = 160;
const CARD_GAP = 20;
const SCALE_CENTER = 1.1;
const SCALE_SIDE = 0.85;

const StyleGallery = () => {
  const [current, setCurrent] = useState(0);

  // 位置計算: 中央=0, 左=-1, 右=1, それ以外は非表示
  const getPosition = (i: number) => {
    if (i === current) return 0;
    if (i === current - 1 || (current === 0 && i === images.length - 1))
      return -1;
    if (i === current + 1 || (current === images.length - 1 && i === 0))
      return 1;
    return null;
  };

  // カード全体の中央基準オフセット
  const cardsWidth = CARD_WIDTH * 3 + CARD_GAP * 2;

  return (
    <GallerySection>
      <Title id="style">Style Gallery</Title>
      <SliderWrap>
        <Cards style={{ width: cardsWidth }}>
          {images.map((img, i) => {
            const pos = getPosition(i);
            if (pos === null) return null;
            // 中央: 0, 左: -1, 右: 1
            const translate = pos * (CARD_WIDTH + CARD_GAP);
            return (
              <Card
                key={img.src}
                $center={pos === 0}
                $side={Math.abs(pos) === 1}
                style={{
                  left: `calc(50% - ${CARD_WIDTH / 2}px)`,
                  transform: `translateX(${translate}px) scale(${
                    pos === 0 ? SCALE_CENTER : SCALE_SIDE
                  })`,
                  zIndex: pos === 0 ? 2 : 1,
                  filter:
                    pos === 0 ? "none" : "grayscale(60%) brightness(0.85)",
                  opacity: 1,
                  pointerEvents: "auto",
                }}
                onClick={() => setCurrent(i)}
                aria-current={pos === 0}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Card>
            );
          })}
        </Cards>
      </SliderWrap>
      <Dots>
        {images.map((_, i) => (
          <Dot key={i} $active={i === current} onClick={() => setCurrent(i)} />
        ))}
      </Dots>
    </GallerySection>
  );
};

export default StyleGallery;

// ================= styled-componentsは下部に配置 =================

const GallerySection = styled.section`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto 2.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 901px) {
    max-width: 600px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
    padding: 2.5rem 2rem 2.5rem 2rem;
  }
`;

const Title = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 2rem;
  font-weight: 400;
  color: #0d1d43;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (min-width: 901px) {
    text-align: left;
    width: 100%;
    margin-left: 0;
  }
`;

const SliderWrap = styled.div`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 220px;
  overflow: hidden;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 220px;
  position: relative;
  margin: 0 auto;
  overflow: visible;
`;

const Card = styled.div<{ $center?: boolean; $side?: boolean }>`
  width: ${CARD_WIDTH}px;
  height: 200px;
  /* border-radius: 16px; */
  /* overflow: hidden; */
  box-shadow: ${({ $center }) =>
    $center ? "0 4px 16px rgba(0,0,0,0.12)" : "none"};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  transition: transform 0.4s cubic-bezier(0.4, 1, 0.4, 1), opacity 0.3s,
    filter 0.3s;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? "#0D1D43" : "#ccc")};
  cursor: pointer;
  transition: background 0.2s;
`;
