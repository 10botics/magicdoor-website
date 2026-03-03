import Layout from '../components/Layout'
import Link from 'next/link'

const sections = [
  {
    title: '服務說明',
    content: 'Magic Door（「本服務」）由 10botics 提供，旨在協助香港學校以非 VPN 方式接通受地區限制的 AI 工具，包括但不限於 Google NotebookLM、ChatGPT 及 Suno。本服務透過 Chrome 擴充功能及代理伺服器提供，僅供持有有效訂閱的學校及其成員使用。',
  },
  {
    title: '使用資格',
    content: '本服務僅限持有有效訂閱的學校用戶使用。用戶必須使用學校核准的 Google 帳號（學校電郵地址）登入，且須已獲訂閱管理員加入成員名單。10botics 保留拒絕或終止任何用戶使用本服務的權利。',
  },
  {
    title: '禁止行為',
    content: '用戶不得：（1）與他人共享帳號或連線；（2）將本服務用於商業牟利用途；（3）嘗試繞過本服務的安全措施或使用限制；（4）利用本服務從事任何違法或侵害他人權益的行為；（5）對本服務進行逆向工程或未授權存取。違反上述規定者，10botics 有權立即終止其使用權限。',
  },
  {
    title: '隱私政策',
    content: '本服務僅收集提供服務所需的最少量資料，包括用戶的學校電郵地址及連線時的 IP 地址。上述資料僅用於驗證身份及管理連線，不會出售或提供予第三方。連線記錄及流量內容均經端對端加密處理，10botics 不會記錄或審閱用戶在 AI 工具上的操作內容。',
  },
  {
    title: '服務可用性及免責聲明',
    content: '本服務按「現狀」提供，10botics 不保證服務的持續可用性或零中斷。服務可能因維護、技術問題或第三方 AI 工具的更改而暫時中斷。10botics 對因使用或無法使用本服務而造成的任何直接或間接損失概不負責。',
  },
  {
    title: '訂閱與費用',
    content: '訂閱費用、計費周期及退款政策以雙方簽署之訂閱協議為準。10botics 保留調整訂閱費用的權利，並將提前通知訂閱管理員。',
  },
  {
    title: '條款修改',
    content: '10botics 保留隨時修改本條款的權利。條款更新後，我們將透過電郵通知訂閱管理員。繼續使用本服務即表示您接受修改後的條款。建議用戶定期查閱本頁以了解最新條款。',
  },
  {
    title: '聯絡我們',
    content: '如對本條款有任何疑問，請電郵至 info@magicdoor.cc 與我們聯絡。',
  },
]

export default function Terms() {
  return (
    <Layout
      title="服務條款 — Magic Door"
      description="Magic Door 服務條款及隱私政策。"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">首頁</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">服務條款</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <h1 className="text-4xl font-black text-gray-900 mb-4">服務條款</h1>
          <p className="text-gray-400 text-sm">最後更新：2026 年 3 月</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                {index + 1}. {section.title}
              </h2>
              <p className="text-gray-500 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            如有查詢，請{' '}
            <a href="mailto:info@magicdoor.cc" className="text-indigo-600 hover:underline">
              電郵聯絡我們
            </a>
            。
          </p>
        </div>

      </div>
    </Layout>
  )
}
