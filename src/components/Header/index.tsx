import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const MENU_ITEMS = [
  { label: 'Menu', href: '/#menu' },
  { label: 'Style', href: '/#style' },
  { label: 'Staff', href: '/#staff' },
  { label: 'Access', href: '/#access' },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <HeaderWrap>
      <LogoWrap>
        <Image src="/gebr-images/logo.png" alt="ロゴ" width={140} height={48} priority />
      </LogoWrap>
      <Nav>
        <NavList $open={open}>
          {MENU_ITEMS.map((item) => (
            <NavItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <NavLink onClick={() => setOpen(false)}>{item.label}</NavLink>
              </Link>
            </NavItem>
          ))}
        </NavList>
        <HamburgerButton onClick={() => setOpen(!open)} aria-label="メニューを開く">
          <span />
          <span />
          <span />
        </HamburgerButton>
        {open && <Overlay onClick={() => setOpen(false)} />}
      </Nav>
    </HeaderWrap>
  )
}

export default Header

// ================= styled-componentsは下部に配置 =================

const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 0 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(4px);
`

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 15px 0;

  img {
    width: 140px;
    height: 48px;
    @media (max-width: 600px) {
      width: 100px !important;
      height: 34px !important;
    }
  }
`

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  position: relative;
`

const NavList = styled.ul<{ $open: boolean }>`
  display: flex;
  gap: 2.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    position: fixed;
    top: 64px;
    right: 0;
    width: 70vw;
    max-width: 320px;
    height: 100vh;
    background: rgba(255,255,255,0.97);
    box-shadow: -2px 0 16px rgba(0,0,0,0.08);
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem 1.5rem;
    gap: 1.5rem;
    z-index: 1200;
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  }
`

const NavItem = styled.li``

const NavLink = styled.a`
  color: #fff;
  font-size: 1.08rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s;
  &:hover {
    color: #f0f0f0;
  }
`

const HamburgerButton = styled.button`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 1.2rem;
    z-index: 1300;
    span {
      display: block;
      width: 26px;
      height: 3px;
      background: #23406e;
      margin: 4px 0;
      border-radius: 2px;
      transition: all 0.3s;
    }
  }
`

const Overlay = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.18);
    z-index: 1100;
  }
`