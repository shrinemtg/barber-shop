import styled from 'styled-components'
import Image from 'next/image'

const Footer = () => (
  <FooterWrap>
    <LogoWrap>
      <Image src="/gebr-images/logo.png" alt="ロゴ" width={100} height={34} />
    </LogoWrap>
    <Copyright>
      &copy; {new Date().getFullYear()} Hair Gebr Yokota. All rights reserved.
    </Copyright>
  </FooterWrap>
)

export default Footer

// ================= styled-componentsは下部に配置 =================

const FooterWrap = styled.footer`
  width: 100%;
  background: #f6f7fa;
  padding: 2.2rem 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #e0e4ef;
  margin-top: 3rem;
`

const LogoWrap = styled.div`
  margin-bottom: 0.7rem;
  img {
    width: 100px;
    height: 34px;
    object-fit: contain;
  }
`

const Copyright = styled.div`
  color: #7a7d8a;
  font-size: 0.98rem;
  letter-spacing: 0.02em;
  text-align: center;
`