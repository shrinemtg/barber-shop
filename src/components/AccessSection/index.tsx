import styled from 'styled-components'
import Image from 'next/image'

const TEL = '0561-54-6629'

const GOOGLE_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3259.5075486507144!2d137.0530285312134!3d35.21873344185367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60036f35fd526517%3A0x885305aa9b636810!2z44OY44KiIOOCsuODluODqSDjg6jjgrPjgr8!5e0!3m2!1sja!2sjp!4v1744811049602!5m2!1sja!2sjp'

// アクセス・営業時間セクション
const AccessSection = () => (
  <Section>
    <Title id="access">Access</Title>
    <MobileGroupWrap>
      <MobileImageWrap>
        <Image src="/gebr-images/Acces-bg.jpg" alt="アクセス背景" width={600} height={320} style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '12px' }} />
      </MobileImageWrap>
      <MobileTextWrap>
        <InfoBlock>
          <InfoRow>
            <InfoLabel>営業時間</InfoLabel>
            <InfoText>
              平日 午前8：30～午後19：30<br />日祝 午前8：00～午後19：00
            </InfoText>
          </InfoRow>
          <InfoRow>
            <InfoLabel>定休日</InfoLabel>
            <InfoText>毎週火曜日、第2,3月曜日</InfoText>
          </InfoRow>
        </InfoBlock>
        <ReserveBlock>
          <ReserveText>お電話でのご予約はこちら</ReserveText>
          <TelButton href={`tel:${TEL}`}>TEL.0561-54-6629</TelButton>
          <WebReserveButton href="#">WEBでのご予約はこちら</WebReserveButton>
        </ReserveBlock>
      </MobileTextWrap>
    </MobileGroupWrap>
    <PcFlex>
      <PcImageWrap>
        <Image src="/gebr-images/Acces-bg.jpg" alt="アクセス背景" width={220} height={220} style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '12px' }} />
      </PcImageWrap>
      <PcTextWrap>
        <PcTextBlock>
          <InfoBlock>
            <InfoRow>
              <InfoLabel>営業時間</InfoLabel>
              <InfoText>
                平日 午前8：30～午後19：30<br />日祝 午前8：00～午後19：00
              </InfoText>
            </InfoRow>
          </InfoBlock>
          <PcHorizonDivider />
          <InfoBlock>
            <InfoRow>
              <InfoLabel>定休日</InfoLabel>
              <InfoText>毎週火曜日、第2,3月曜日</InfoText>
            </InfoRow>
          </InfoBlock>
          <PcHorizonDivider />
          <ReserveBlock>
            <ReserveText>お電話でのご予約はこちら</ReserveText>
            <TelButton href={`tel:${TEL}`}>TEL.0561-54-6629</TelButton>
            <WebReserveButton href="#">WEBでのご予約はこちら</WebReserveButton>
          </ReserveBlock>
        </PcTextBlock>
      </PcTextWrap>
    </PcFlex>
    <AddressRow>愛知県尾張旭市東大久手町2-10-15</AddressRow>
    <MapWrap>
      <iframe
        src={GOOGLE_MAP_EMBED_URL}
        width="600"
        height="490"
        style={{ border: 0, borderRadius: '16px', boxShadow: '0 2px 16px rgba(0,0,0,0.10)' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </MapWrap>
  </Section>
)

export default AccessSection

// ================= styled-componentsは下部に配置 =================

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.2rem;
  font-weight: 400;
  color: #0D1D43;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: 0.04em;
  width: 100%;
  @media (min-width: 901px) {
    text-align: left;
  }
`

const MapWrap = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 1.2rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
`

const PcFlex = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  @media (min-width: 901px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.5rem;
    margin-bottom: 2rem;
  }
`

const PcImageWrap = styled.div`
  display: none;
  @media (min-width: 901px) {
    display: block;
    min-width: 220px;
    max-width: 220px;
    width: 220px;
    height: 220px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    background: #eee;
  }
`

const PcTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 901px) {
    flex: 1 1 0%;
    min-width: 0;
    max-width: 100%;
    width: auto;
  }
`

const PcTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  @media (min-width: 901px) {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 2rem 1.5rem;
    margin: 0;
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }
`

const PcHorizonDivider = styled.div`
  display: none;
  @media (min-width: 901px) {
    display: block;
    width: 100%;
    border-top: 1.5px dashed #c0c6d1;
    margin: 1.2rem 0 1.2rem 0;
  }
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  margin: 1.5rem auto;
  color: #111;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
`

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    margin: 0.5rem 0;
  }
`

const InfoLabel = styled.div`
  min-width: 70px;
  font-weight: 700;
  color: #111 !important;
  font-size: 1rem;
  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
  }
`

const InfoText = styled.div`
  color: #111 !important;
  font-size: 1rem;
  line-height: 1.6;
  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
  }
`

const ReserveBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1.2rem;
  width: 100%;
`

const ReserveText = styled.div`
  color: #111;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  text-align: center;
  width: 100%;
`

const TelButton = styled.a`
  display: inline-block;
  background:rgba(230, 236, 247, 0.76);
  color: #23406e;
  font-size: 1.25rem;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  letter-spacing: 0.04em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background:rgb(211, 227, 248);
    color: #0D1D43;
  }
`

const WebReserveButton = styled.a`
  display: inline-block;
  background:rgba(230, 236, 247, 0.76);
  color: #333;
  font-size: 1.08rem;
  border: 2px solid #23406e;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  text-decoration: none;
  margin-top: 0.2rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #e6ecf7;
    color: #23406e;
  }
`

const AddressRow = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 3rem auto 1rem auto;
  text-align: center;
  font-size: 1.08rem;
  font-weight: 700;
  color: #23406e;
  letter-spacing: 0.02em;
`

const MobileImageWrap = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
  @media (min-width: 901px) {
    display: none;
  }
`

const MobileGroupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 901px) {
    display: none;
  }
`

const MobileTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`