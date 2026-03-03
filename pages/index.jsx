import Layout from '../components/Layout'
import Link from 'next/link'

const benefits = [
  {
    char: '隨意',
    title: '完全版，無限制',
    description: '解鎖 NotebookLM 完整功能、ChatGPT 進階模型、Suno 音樂生成——不受地區限制，教學功能盡情發揮。',
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

const tools = [
  { name: 'Google NotebookLM', filename: 'logo-notebooklm.png' },
  { name: 'ChatGPT', filename: 'logo-chatgpt.png' },
  { name: 'Suno', filename: 'logo-suno.png' },
  { name: 'Google AI Studio', filename: 'logo-aistudio.png' },
]

export default function Home() {
  return (
    <Layout title="Magic Door — AI隨意門｜打破地區限制">

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-10">
            <div className="border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 flex flex-col items-center justify-center w-24 h-24">
              <p className="text-xs font-mono text-gray-400">logo.png</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
            AI工具自由，<br />一門即達。
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            非VPN方式打破地區界限，讓香港學校即時接通 NotebookLM、ChatGPT、Suno 完全版。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-base"
            >
              安裝 Chrome 擴充功能
            </a>
            <a
              href="mailto:info@magicdoor.cc"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-base"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </section>

      {/* Supported Tools */}
      <section className="py-14 px-6 border-y border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-gray-400 mb-8 uppercase tracking-widest font-medium">
            已支援 AI 工具
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-3">
                <div className="border-2 border-dashed border-gray-200 rounded-xl bg-white flex items-center justify-center w-full h-14">
                  <span className="text-xs font-mono text-gray-400">{tool.filename}</span>
                </div>
                <span className="text-sm text-gray-500 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
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
            距離AI工具自由，<br />只剩一門之隔。
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            立即為學校安裝 Magic Door，讓老師專注教學，AI 負責其餘。
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
