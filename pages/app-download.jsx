import { useEffect } from 'react'
import Head from 'next/head'
import { APP_STORE_URL } from '../utils/app'

export default function AppDownload() {
  useEffect(() => {
    window.location.replace(APP_STORE_URL)
  }, [])

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${APP_STORE_URL}`} />
      </Head>
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center', paddingTop: '80px', color: '#555' }}>
        <p>正在跳轉至 App Store…</p>
        <p style={{ marginTop: '12px', fontSize: '14px' }}>
          如未自動跳轉，請<a href={APP_STORE_URL} style={{ color: '#000' }}>點擊此處</a>。
        </p>
      </div>
    </>
  )
}
