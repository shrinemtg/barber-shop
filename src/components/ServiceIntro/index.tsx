import styled from 'styled-components'

// サービス紹介セクション
const ServiceIntro = () => (
  <Section>
    <Heading>Hair Gebr Yokota</Heading>
    <Description>
      Hair Gebr Yokota は、ただの理容室ではありません。<br />
      地元で愛される空間で、一人ひとりと真摯に向き合い、<br />
      「あなたらしいスタイル」を見つけるお手伝いを。<br />
      技術と真心を込めて、ご来店の皆さまの「特別な日常」を彩ります。<br />
      スタッフ一同、心を込めてお待ちしております。
    </Description>
  </Section>
)

export default ServiceIntro

// ================= styled-componentsは下部に配置 =================

// セクション全体
const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

// 見出し
const Heading = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  font-weight: 400;
  color: #0D1D43;
  margin-bottom: 1.5rem;
  text-align: center;
`

// 説明文
const Description = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 1rem;
  color: #0D1D43;
  line-height: 1.6;
  text-align: center;
  margin: 0;
`