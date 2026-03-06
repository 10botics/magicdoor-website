import Layout from '../components/Layout'
import Link from 'next/link'

const groups = [
  {
    title: '使用說明',
    faqs: [
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
    ],
  },
  {
    title: '帳號與使用政策',
    faqs: [
      {
        q: '可以將帳號登入電腦室的公用電腦，讓學生共用嗎？',
        a: '不可以。每個帳號僅限其本人（老師或學生）使用。學校不得將帳號登入電腦室、AI Lab 等公用電腦，供多人共享。如需多人使用，每位用戶須擁有獨立帳號。',
      },
      {
        q: '同一帳號可以在多部裝置同時連線嗎？',
        a: '每個帳號同一時間只能在一部裝置上使用（Basic 及 Plus 計劃）。如需多部裝置同時連線，MAX 計劃支援最多 10 個裝置同時連線。如在其他裝置上登入，現有連線將自動中斷。',
      },
    ],
  },
  {
    title: '訂閱與收費',
    faqs: [
      {
        q: '購買後能否增加使用人數？',
        a: '可以。如需增加使用人數，您需要為新增的成員訂閱一份新的計劃。新訂閱的到期日將根據購買當天起計一年。詳情請聯絡我們的銷售團隊。',
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
        q: '如果 AI 工具日後解除了地區限制，可以申請退款嗎？',
        a: '不可以。Magic Door 的角色是在 AI 工具存在地區限制時，為您提供連線途徑。若某 AI 工具日後解除地區限制，讓您可直接訪問，這屬於第三方平台自行調整政策，並非 Magic Door 服務出現問題，因此不符合退款條件。在此情況下，您的訂閱仍然有效，可繼續用於其他受地區限制的 AI 工具。',
      },
    ],
  },
  {
    title: '兼容性',
    faqs: [
      {
        q: '我如何知道 Magic Door 是否支援我想要使用的 AI 工具？',
        a: '如欲進行測試，請聯絡我們的銷售團隊（sales@10botics.com）。',
      },
    ],
  },
  {
    title: '安全與私隱',
    faqs: [
      {
        q: '使用 Magic Door 安全嗎？你們會看到我的資料嗎？',
        a: '由於您與 AI 工具之間的連線已由服務提供商進行端對端加密，我們無法看到、記錄或儲存您在 AI 工具上的具體操作內容或對話數據（如您的提問或 AI 的回覆）。我們僅收集最少量的必要資料以維持服務運作，詳情請參閱我們的服務條款。',
      },
      {
        q: '使用 Magic Door 會否讓用戶繞過學校或公司的網絡防火牆，訪問不相關的網站？',
        a: '不會。Magic Door 僅針對指定的 AI 工具提供優化。它並非全域 VPN，不會取代或干擾學校/機構原有的網絡安全管控政策（如網頁過濾、防火牆等）。所有非 Magic Door 支援的網站訪問，仍會受您原有的網絡政策約束。',
      },
    ],
  },
]

export default function Faq() {
  let counter = 0

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

        {/* Grouped FAQ list */}
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {group.title}
              </h2>
              <div className="space-y-4">
                {group.faqs.map((faq) => {
                  counter++
                  const num = counter
                  const id = `faq-${num}`
                  return (
                    <div 
                      key={num} 
                      id={id}
                      className="p-6 rounded-2xl border border-gray-100 flex gap-5 scroll-mt-24 hover:border-indigo-100 hover:shadow-sm transition-all group target:border-indigo-300 target:bg-indigo-50/30"
                    >
                      <span className="flex-shrink-0 text-sm font-bold text-indigo-600 w-6 pt-0.5">{num}.</span>
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <p className="font-semibold text-gray-900">{faq.q}</p>
                          <a 
                            href={`#${id}`}
                            className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-indigo-600 transition-all"
                            title="直接連結至此問題"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </a>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  )
}
