import Layout from '../components/Layout'
import Link from 'next/link'

const faqs = [
  {
    q: '連線後速度會受影響嗎？',
    a: 'Magic Door 只代理必要的 AI 工具流量，其他網站（Gmail、Google Drive 等）仍直接連線，速度不受影響。',
  },
  {
    q: '連線時間到了會怎樣？',
    a: '時限屆滿後，AI 工具頁面會顯示地區不支援的提示，您的其他瀏覽不受影響。重新點擊 Magic Door 切換開關即可再次連線。',
  },
  {
    q: '只支援電腦嗎？',
    a: '目前 Magic Door 僅支援電腦版 Chrome 瀏覽器，未能在手機或平板電腦上使用。',
  },
]

export default function Faq() {
  return (
    <Layout
      title="常見問題 — Magic Door"
      description="Magic Door 常見問題解答。"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">首頁</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">常見問題</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <h1 className="text-4xl font-black text-gray-900 mb-4">常見問題</h1>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 flex gap-5">
              <span className="flex-shrink-0 text-sm font-bold text-indigo-600 w-6 pt-0.5">{i + 1}.</span>
              <div>
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-10 border-t border-gray-100">
          <Link href="/guides/end-user" className="text-sm text-indigo-600 hover:underline">
            ← 返回使用說明
          </Link>
        </div>

      </div>
    </Layout>
  )
}
