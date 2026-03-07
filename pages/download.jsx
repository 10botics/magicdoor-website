import { useEffect } from 'react'
import Head from 'next/head'

const CWS_URL = 'https://chromewebstore.google.com/detail/magicdoor/akcaimdafkmgjlldooglonhapahdjapl'

export default function Download() {
  useEffect(() => {
    window.location.replace(CWS_URL)
  }, [])

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${CWS_URL}`} />
      </Head>
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center', paddingTop: '80px', color: '#555' }}>
        <p>正在跳轉至 Chrome 線上應用程式商店…</p>
        <p style={{ marginTop: '12px', fontSize: '14px' }}>
          如未自動跳轉，請<a href={CWS_URL} style={{ color: '#000' }}>點擊此處</a>。
        </p>
      </div>
    </>
  )
}
