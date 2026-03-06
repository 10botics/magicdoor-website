import Layout from '../../components/Layout'
import ImagePlaceholder from '../../components/ImagePlaceholder'
import Link from 'next/link'

const steps = [
  {
    title: '登入 Chrome 瀏覽器',
    description: '確保您已在 Chrome 瀏覽器登入您的學校 Google 帳號（例如 teacher@school.edu.hk），並開啟「同步功能」。這是確保 Magic Door 能正確識別您身份的首要步驟。',
    image: { filename: 'guides/user-01-chrome-login.png', description: '在 Chrome 瀏覽器登入學校帳號' },
  },
  {
    title: '確認 Magic Door 已安裝',
    description: '查看 Chrome 瀏覽器右上角工具列，應看到 Magic Door 圖示。如未看到，請聯絡學校 IT 管理員。',
    image: { filename: 'guides/user-02-toolbar.png', description: 'Chrome 工具列顯示 Magic Door 圖示' },
  },
  {
    title: '查看擴充功能介面',
    description: '點擊 Magic Door 圖示即可看到主介面。如果您尚未登入，介面底部會顯示服務條款提示。',
    image: { filename: 'guides/user-03-ui.png', description: 'Magic Door 擴充功能未登入介面' },
  },
  {
    title: '首次登入擴充功能（只需一次）',
    description: '點擊連線開關，系統會自動彈出 Google 登入視窗。請使用您的學校電郵帳號完成授權。登入成功後，介面將顯示您的帳號資訊及連線狀態。',
    image: { filename: 'guides/user-04-signin.png', description: '登入成功後的主介面' },
  },
  {
    title: '點擊切換開關，開始連線',
    description: '點擊視窗內的切換開關以建立連線。圖示徽章會變為綠色「ON」並顯示本次連線的剩餘時間，表示連線已建立。',
    image: { filename: 'guides/user-05-connected.png', description: '擴充功能圖示顯示綠色「ON」徽章及倒數計時' },
  },
  {
    title: '前往 AI 工具正常使用',
    description: '連線後，直接在瀏覽器開啟所需的 AI 工具網址，即可正常使用完全版功能。',
    image: { filename: 'guides/user-06-using.png', description: 'AI 工具在連線後正常載入的畫面' },
  },
  {
    title: '使用完畢後中斷連線',
    description: '使用完畢後，點擊 Magic Door 圖示，然後點擊「中斷連線」以結束本次連線。連線亦會在時限屆滿時自動結束。',
    image: { filename: 'guides/user-07-disconnect.png', description: '擴充功能視窗顯示「中斷連線」按鈕' },
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
          <Link href="/guides" className="hover:text-gray-600 transition-colors">用戶專區</Link>
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
            Magic Door 安裝後，只需簡單幾步即可接通各大 AI 工具的完全版。
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

        {/* FAQ link */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <Link href="/faq" className="text-sm text-indigo-600 hover:underline">
            常見問題 →
          </Link>
        </div>

      </div>
    </Layout>
  )
}
