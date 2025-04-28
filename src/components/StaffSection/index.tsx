import Image from 'next/image'
import styled from 'styled-components'

const staff = [
  {
    name: '横田 太郎',
    role: 'オーナー/スタイリスト',
    img: '/gebr-images/staff-img01.jpg',
    desc: '理容師歴10年以上。お客様一人ひとりに寄り添った丁寧なカウンセリングと施術がモットーです。髪のお悩み、何でもご相談ください。',
  },
  {
    name: '佐藤 花子',
    role: 'アシスタント',
    img: '/gebr-images/staff-img02.jpg',
    desc: 'こんにちは当店では、レディースシェイビングを担当しております。お肌の透明感アップや化粧ノリの改善など、女性ならではのお悩みにお応えできるよう、丁寧に施術させていただきます。',
  },
]

const StaffSection = () => (
  <Section>
    <Title id="staff">Staff</Title>
    <StaffList>
      {staff.map((s) => (
        <StaffCard key={s.name}>
          <StaffImageWrap>
            <Image src={s.img} alt={s.name} width={120} height={120} style={{ objectFit: 'cover' }} />
          </StaffImageWrap>
          <StaffName>{s.name}</StaffName>
          <StaffRole>{s.role}</StaffRole>
          <StaffDesc>{s.desc}</StaffDesc>
        </StaffCard>
      ))}
    </StaffList>
  </Section>
)

export default StaffSection

// ================= styled-componentsは下部に配置 =================

const Section = styled.section`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 901px) {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    padding: 2.5rem 2rem 2.5rem 2rem;
    align-items: flex-start;
  }
`

const Title = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 2rem;
  font-weight: 400;
  color: #0D1D43;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (min-width: 901px) {
    text-align: left;
    width: 100%;
    margin-left: 0;
  }
`

const StaffList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
  width: 100%;
`

const StaffCard = styled.div`
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 12px;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
`

const StaffImageWrap = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  background: #eee;
`

const StaffName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0D1D43;
  margin-bottom: 0.3rem;
`

const StaffRole = styled.div`
  font-size: 0.95rem;
  color: #3a4a7c;
  margin-bottom: 0.7rem;
`

const StaffDesc = styled.div`
  font-size: 0.95rem;
  color: #333;
  text-align: center;
`