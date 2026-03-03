import Layout from '../../components/Layout'
import ImagePlaceholder from '../../components/ImagePlaceholder'
import Link from 'next/link'

const steps = [
  {
    title: '登入 Google Workspace 管理控制台',
    description: '前往 admin.google.com，以 Google Workspace 管理員帳號登入。',
    image: { filename: 'guides/admin-01-console.png', description: 'Google Workspace 管理控制台首頁' },
  },
  {
    title: '進入 Chrome 應用程式管理',
    description: '在左側選單依次點擊「裝置」→「Chrome」→「應用程式及擴充功能」。',
    image: { filename: 'guides/admin-02-chrome-apps.png', description: '左側選單：裝置 > Chrome > 應用程式及擴充功能' },
  },
  {
    title: '選擇目標組織單位',
    description: '在左側組織架構中，選擇您希望部署擴充功能的組織單位（OU），例如全校老師的群組。',
    image: { filename: 'guides/admin-03-select-ou.png', description: '選擇對應的組織單位（OU）' },
  },
  {
    title: '新增 Magic Door 擴充功能',
    description: '點擊右下角「+」按鈕，選擇「從 Chrome 線上應用程式商店新增」。在搜尋欄輸入「Magic Door」，找到擴充功能後點擊「選取」。',
    image: { filename: 'guides/admin-04-add-extension.png', description: '在 Chrome 線上應用程式商店搜尋 Magic Door' },
  },
  {
    title: '設定強制安裝',
    description: '在擴充功能列表中找到 Magic Door，將安裝政策由「允許安裝」改為「強制安裝」，然後點擊右上角「儲存」。',
    image: { filename: 'guides/admin-05-force-install.png', description: '安裝政策下拉選單設定為「強制安裝」' },
  },
  {
    title: '確認安裝成功',
    description: '老師重新啟動 Chrome 後，Magic Door 圖示應自動出現於瀏覽器右上角工具列，無需任何手動操作。',
    image: { filename: 'guides/admin-06-result.png', description: 'Magic Door 圖示出現於 Chrome 工具列' },
  },
]

export default function ItAdminGuide() {
  return (
    <Layout
      title="IT管理員安裝指南 — Magic Door"
      description="透過 Google Workspace Admin 為全校強制安裝 Magic Door Chrome 擴充功能的完整步驟。"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">首頁</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">IT管理員安裝指南</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">IT管理員</p>
          <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
            透過 Google Workspace<br />為全校安裝 Magic Door
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            只需在 Google Workspace 管理控制台設定一次，Magic Door 即會自動安裝至指定組織單位的所有 Chrome 瀏覽器，老師毋須任何操作。
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

        {/* Next steps */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">安裝完成後</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/guides/subscription"
              className="flex-1 p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm text-gray-400 mb-1">下一步</p>
              <p className="font-semibold text-gray-900">訂閱管理：新增或移除成員 →</p>
            </Link>
            <Link
              href="/guides/end-user"
              className="flex-1 p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm text-gray-400 mb-1">老師參考</p>
              <p className="font-semibold text-gray-900">老師如何使用 Magic Door →</p>
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  )
}
