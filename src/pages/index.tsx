import Head from 'next/head'
import Hero from '../components/Hero'
import ServiceIntro from '../components/ServiceIntro'
import StyleGallery from '../components/StyleGallery'
import MenuSection from '../components/MenuSection'
import AccessSection from '../components/AccessSection'
import StaffSection from '../components/StaffSection'
import Footer from '../components/Footer'

// トップページ
export default function Home() {
  return (
    <>
      <Head>
        <title>いつもの散髪を特別なものに</title>
        {/* このページ固有のdescriptionを記載 */}
        <meta name="description" content="Hair Gebr Yokotaの公式サイト。地元で愛される理容室。" />
      </Head>
      <main>
        {/* 各セクションはcomponents配下で管理 */}
        <Hero />
        <ServiceIntro />
        <MenuSection />
        <StyleGallery />
        <StaffSection />
        <AccessSection />
        <Footer />
        {/* ここに今後各セクションを追加 */}
      </main>
    </>
  )
}