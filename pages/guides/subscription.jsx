import Layout from '../../components/Layout'
import ImagePlaceholder from '../../components/ImagePlaceholder'
import Link from 'next/link'

const steps = [
  {
    title: '登入 Magic Door 管理入口',
    description: '前往 app.magicdoor.cc，點擊「以 Google 帳號登入」，使用訂閱管理員的學校 Google 帳號完成登入。',
    image: { filename: 'guides/sub-01-login.png', description: 'Magic Door 管理入口登入頁面' },
  },
  {
    title: '選擇訂閱項目',
    description: '登入後，如果您管理多個訂閱計劃，請在列表中點擊您想要管理的訂閱項目名稱。',
    image: { filename: 'guides/sub-02-select-subscription.png', description: '訂閱列表頁面，選擇要管理的訂閱' },
  },
  {
    title: '查看目前成員列表',
    description: '進入訂閱詳情頁後，您將看到目前所有已加入的成員、其電郵地址及使用狀況。',
    image: { filename: 'guides/sub-03-member-list.png', description: '成員列表頁面，顯示所有現有成員' },
  },
  {
    title: '新增成員',
    description: '點擊「新增成員」按鈕，在欄位中輸入成員的學校電郵地址（例如 teacher@school.edu.hk），然後點擊「確認」完成新增。每次可新增一位成員。',
    image: { filename: 'guides/sub-04-add-member.png', description: '新增成員表格，輸入學校電郵地址' },
  },
  {
    title: '移除成員',
    description: '在成員列表中找到對應成員，點擊右側的「移除」按鈕，確認後即完成移除。被移除的成員將立即失去訪問權限。',
    image: { filename: 'guides/sub-05-remove-member.png', description: '成員列表中的移除按鈕' },
  },
]

export default function SubscriptionGuide() {
  return (
    <Layout
      title="訂閱管理指南 — Magic Door"
      description="訂閱管理員如何登入管理入口，新增或移除成員的完整步驟。"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">首頁</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">訂閱管理指南</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">訂閱管理員</p>
          <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
            新增或移除<br />Magic Door 成員
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            訂閱管理員可透過 Magic Door 管理入口，靈活新增或移除有權使用服務的成員，即時生效。
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

        {/* Note */}
        <div className="mt-12 p-5 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-sm text-gray-500 leading-relaxed">
            <span className="font-semibold text-gray-700">注意：</span>
            新增成員後，成員須確保已在 Chrome 安裝 Magic Door 擴充功能，方可開始使用。如需批量安裝，請參閱
            {' '}<Link href="/guides/it-admin" className="text-indigo-600 hover:underline">IT管理員安裝指南</Link>。
          </p>
        </div>

        {/* Next steps */}
        <div className="mt-12 pt-10 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">相關指南</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/guides/it-admin"
              className="flex-1 p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm text-gray-400 mb-1">IT管理員</p>
              <p className="font-semibold text-gray-900">透過 Google Workspace 安裝擴充功能 →</p>
            </Link>
            <Link
              href="/guides/end-user"
              className="flex-1 p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <p className="text-sm text-gray-400 mb-1">老師使用指南</p>
              <p className="font-semibold text-gray-900">如何連線及使用 AI 工具 →</p>
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  )
}
