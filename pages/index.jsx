import Layout from '../components/Layout'
import Link from 'next/link'

const benefits = [
  {
    char: '隨意',
    title: '完全版，無限制',
    description: '接通各大 AI 工具完整功能——不受地區限制，教學功能盡情發揮。',
  },
  {
    char: '隨地',
    title: '非VPN，隨地接通',
    description: '無需 VPN 設定，無需 IT 技術知識。安裝後一鍵連線，在任何網絡環境下即可使用。',
  },
  {
    char: '隨時',
    title: 'AI隨時應援',
    description: '只要電腦在手，AI助教如影隨形。課堂備課、批改作業，工作時間由你話事。',
  },
  {
    char: '隨心',
    title: '安全可靠，私隱有保',
    description: '內容全經端對端加密，不記錄瀏覽活動，擁有 100% 私隱保障。',
  },
]


export default function Home() {
  return (
    <Layout title="Magic Door AI隨意門 — AI工具 一門即達">

      {/* Hero */}
      <section className="pt-16 pb-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img src="/icon2.svg" alt="Magic Door" className="w-24 h-24" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
            AI工具<br />一門即達
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            非VPN方式<br />即時接通熱門AI工具<sup className="text-sm">*</sup>
          </p>
          <p className="text-xs text-gray-400 mt-6 max-w-sm mx-auto leading-relaxed">
            * 客戶請在購買前先行測試並確認 Magic Door 是否支援所需之AI 工具
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.char}
                className="p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="text-3xl font-black text-indigo-600 mb-3">{benefit.char}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            距離AI工具自由<br />只剩一門之隔
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            立即使用 Magic Door
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/guides/it-admin"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              IT管理員安裝指南 →
            </Link>
            <a
              href="mailto:info@magicdoor.cc"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-white font-semibold rounded-xl hover:border-gray-500 transition-colors"
            >
              查詢及報價
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}
