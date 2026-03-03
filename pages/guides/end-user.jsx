import Layout from '../../components/Layout'
import ImagePlaceholder from '../../components/ImagePlaceholder'
import Link from 'next/link'

const steps = [
  {
    title: '確認 Magic Door 已安裝',
    description: '查看 Chrome 瀏覽器右上角工具列，應看到 Magic Door 圖示。如未看到，請聯絡學校 IT 管理員。',
    image: { filename: 'guides/user-01-toolbar.png', description: 'Chrome 工具列顯示 Magic Door 圖示' },
  },
  {
    title: '首次登入（只需一次）',
    description: '點擊 Magic Door 圖示，在彈出視窗中點擊「以 Google 帳號登入」。使用學校電郵帳號完成授權後，日後無需再次登入。',
    image: { filename: 'guides/user-02-signin.png', description: '擴充功能彈出視窗，顯示「以 Google 帳號登入」按鈕' },
  },
  {
    title: '點擊切換開關，開始連線',
    description: '登入後，點擊視窗內的切換開關以建立連線。圖示徽章會顯示「...」表示正在連線中，請稍候片刻。',
    image: { filename: 'guides/user-03-connecting.png', description: '擴充功能圖示顯示「...」黃色徽章，表示正在連線' },
  },
  {
    title: '連線成功，即可使用',
    description: '圖示徽章變為綠色「ON」並顯示本次連線的剩餘時間，表示連線已建立。現在可以開啟任何已支援的 AI 工具。',
    image: { filename: 'guides/user-04-connected.png', description: '擴充功能圖示顯示綠色「ON」徽章及倒數計時' },
  },
  {
    title: '前往 AI 工具正常使用',
    description: '連線後，直接在瀏覽器開啟 notebooklm.google.com、chatgpt.com、suno.com 或 aistudio.google.com，即可正常使用完全版功能。',
    image: { filename: 'guides/user-05-using.png', description: 'NotebookLM 在連線後正常載入的畫面' },
  },
  {
    title: '使用完畢後中斷連線',
    description: '使用完畢後，點擊 Magic Door 圖示，然後點擊「中斷連線」以結束本次連線。連線亦會在時限屆滿時自動結束。',
    image: { filename: 'guides/user-06-disconnect.png', description: '擴充功能視窗顯示「中斷連線」按鈕' },
  },
]

export default function EndUserGuide() {
  return (
    <Layout
      title="使用說明 — Magic Door"
      description="老師如何使用 Magic Door 連線及接通 AI 工具的完整步驟。"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">首頁</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">使用說明</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">老師使用指南</p>
          <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
            連線及使用<br />AI 工具
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Magic Door 安裝後，只需簡單幾步即可接通 NotebookLM、ChatGPT、Suno 等 AI 工具的完全版。
          </p>
        </div>

        {/* Supported tools reminder */}
        <div className="mb-12 p-5 rounded-xl bg-indigo-50 border border-indigo-100">
          <p className="text-sm font-semibold text-indigo-700 mb-1">已支援 AI 工具</p>
          <p className="text-sm text-indigo-600">
            Google NotebookLM · ChatGPT · Suno · Google AI Studio
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-14">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
              <div className="ml-12">
                <ImagePlaceholder filename={step.image.filename} description={step.image.description} />
              </div>
            </div>
          ))}
        </div>

        {/* FAQ-style notes */}
        <div className="mt-14 space-y-4">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-6">常見問題</h3>
          {[
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
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  )
}
