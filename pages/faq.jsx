import Layout from '../components/Layout'
import Link from 'next/link'

const faqs = [
  {
    q: '連線時間到了會怎樣？',
    a: '時限屆滿後，AI 工具頁面會顯示地區不支援的提示，您的其他網頁瀏覽不受影響。您只需重新點擊 Magic Door 擴充功能內的切換開關，即可再次建立連線。',
  },
  {
    q: '如果用完了每日配額（Quota）怎麼辦？',
    a: '若您使用的是有配額限制的計劃並已用完當日配額，您將暫時無法建立新連線。配額會在每日香港時間凌晨 12:00 重置，屆時您可以再次使用。如需更長的使用時間，建議聯絡您的訂閱管理員升級計劃。',
  },
  {
    q: '是否適用於所有裝置？',
    a: '目前 Magic Door 僅支援電腦版 Chrome 瀏覽器。由於技術限制，暫時未能於手機、平板電腦或 Chrome 以外的瀏覽器上使用。',
  },
  {
    q: '購買後能否增加使用人數？',
    a: '可以。如需增加使用人數，您需要為新增的成員訂閱一份新的計劃。新訂閱的到期日將根據購買當天起計一年。詳情請聯絡我們的銷售團隊。',
  },
  {
    q: '我如何知道 Magic Door 是否支援我想要使用的 AI 工具？',
    a: '如欲進行測試，請聯絡我們的銷售團隊（sales@10botics.com）。',
  },
  {
    q: '能否隨時取消訂購？',
    a: 'Magic Door 採用年度訂閱制，一旦訂閱成功，恕不接受中途取消或退款（除非符合服務條款中提及的「服務不兼容」退款情況）。您的訂閱將維持有效直到該年度週期結束。',
  },
  {
    q: 'AI 工具一旦更新，Magic Door 不再適用時怎麼辦？',
    a: (
      <>
        我們會盡力維護 Magic Door 以兼容各大 AI 工具的更新。若因第三方工具的重大更改導致 Magic Door 暫時失效，我們的技術團隊會盡快進行修復。若該工具變得永久不兼容（定義為連續超過 7 個工作日無法修復），付費訂閱客戶可根據服務條款申請按比例退款。
        <br /><br />
        <strong>退款範例：</strong><br />
        若您的年度訂閱期為 365 天，而您在第 180 天因服務不兼容提出退款申請，退款金額將按剩餘的 185 天比例計算（即：185/365 × 訂閱總額）。退款計算由收到書面申請當日起計。
      </>
    ),
  },
  {
    q: '使用 Magic Door 安全嗎？你們會看到我的資料嗎？',
    a: '由於您與 AI 工具之間的連線已由服務提供商進行端對端加密，我們無法看到、記錄或儲存您在 AI 工具上的具體操作內容或對話數據（如您的提問或 AI 的回覆）。我們僅收集最少量的必要資料以維持服務運作，詳情請參閱我們的服務條款。',
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

      </div>
    </Layout>
  )
}
