import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

const SITE_URL = 'https://www.magicdoor.cc'

export default function Layout({ children, title = 'Magic Door — AI工具 一門即達', description = '非VPN方式，即時接通熱門AI工具' }) {
  const { asPath } = useRouter()
  const canonicalUrl = `${SITE_URL}${asPath === '/' ? '' : asPath}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content="Magic Door" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.magicdoor.cc/icon-1024.png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://www.magicdoor.cc/icon-1024.png" />
        <link rel="icon" href="/icon2.svg" type="image/svg+xml" />
      </Head>
      <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900 overflow-x-hidden">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
