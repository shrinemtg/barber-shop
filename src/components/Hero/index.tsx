import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

// セクション全体のレイアウト
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100dvh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  overflow: hidden;
`

// 背景画像
const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: blur(4px) brightness(0.8);
`

// コピー部分のラップ
const CopyWrap = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
`

// サブテキスト
const SubText = styled.p`
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 0.5rem 0;
  padding: 0 1rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
`

// メインコピー
const Copy = styled.h1`
  color: #fff;
  font-family: 'Shippori Antique', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
`

// 剃刀アイコンのアニメーション
const slideUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(24px); }
  100% { transform: translateY(0); }
`

const RazorIconWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: 48px;
  height: 48px;
  z-index: 3;
  animation: ${slideUpDown} 2.8s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`

// 泡のアニメーション（右方向へ流れる）
const bubbleRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.7) rotate(-10deg);
  }
  10% {
    opacity: 1;
    transform: translate(10px, -2px) scale(1) rotate(-5deg);
  }
  60% {
    opacity: 1;
    transform: translate(60px, -10px) scale(1.1) rotate(5deg);
  }
  100% {
    opacity: 0;
    transform: translate(110px, -18px) scale(1.2) rotate(10deg);
  }
`

const Bubbles = styled.div`
  position: absolute;
  left: calc(50% + 24px);
  bottom: -32px;
  width: 160px;
  height: 60px;
  z-index: 2;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`

const Bubble = styled.div<{ $delay: number; $size: number; $top: number }>`
  position: absolute;
  left: 0;
  top: ${({ $top }) => $top}px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.7;
  animation: ${bubbleRight} 2.8s infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`

// トップページのヒーローセクション
const Hero = () => {
  // 泡のパターン（右方向に流れる）
  // 剃刀が下に行くタイミング(アニメーション周期2.8sの50%:1.4s)で泡が出るようにdelayを調整
  const bubbles = [
    { delay: 1.2, size: 18, top: 18 },
    { delay: 1.3, size: 24, top: 12 },
    { delay: 1.4, size: 32, top: 8 },
    { delay: 1.5, size: 40, top: 4 },
    { delay: 1.6, size: 32, top: 10 },
    { delay: 1.7, size: 24, top: 16 },
  ]

  return (
    <HeroSection>
      <BgImage>
        <Image
          src="/gebr-images/Hero-bg.jpg"
          alt="店舗イメージ"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </BgImage>
      <CopyWrap>
        <SubText>いつもの散髪を特別なものに</SubText>
        <Copy>Hair Gebr Yokota</Copy>
      </CopyWrap>
      <Bubbles>
        {bubbles.map((b, i) => (
          <Bubble key={i} $delay={b.delay} $size={b.size} $top={b.top} />
        ))}
      </Bubbles>
      <RazorIconWrap>
        <Image
          src="/gebr-images/Razor-icon.png"
          alt="Scroll Down"
          width={48}
          height={48}
          priority
        />
      </RazorIconWrap>
    </HeroSection>
  )
}

export default Hero