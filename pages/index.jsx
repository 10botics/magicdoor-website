import Layout from '../components/Layout'

const benefits = [
  {
    char: '隨意',
    title: '暢用AI無限制',
    description: '全面善用AI工具，減省備課時間，精進教學內容。',
  },
  {
    char: '隨地',
    title: '原地接通免翻牆',
    description: '保留香港IP，以非VPN形式，輕鬆接通全球 AI 工具。',
  },
  {
    char: '隨時',
    title: 'AI隨身自主工時',
    description: '只要電腦在手，不論課間、課後都可以處理工作，效率翻倍。',
  },
  {
    char: '隨心',
    title: '100%操作私隱',
    description: '絕不記錄對話內容，嚴格保障學術私隱，安心使用AI工具。',
  },
]


export default function Home() {
  return (
    <Layout title="Magic Door — AI工具 一門即達">

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <img src="/icon2.svg" alt="Magic Door" className="w-40 h-40 md:w-52 md:h-52" />
          </div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#00bbde] uppercase mb-6">全港首創AI解放方案</p>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tight">
            AI工具 一門直達
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            非VPN方式，接通熱門AI工具<sup className="text-sm">*</sup>
          </p>
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
            * 客戶請在購買前先行測試並確認 Magic Door 是否支援所需之AI 工具
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12 md:mb-14" />
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">四大教學優勢</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.char}
                className={`rounded-2xl p-7 md:p-8 ${
                  idx === 0
                    ? 'bg-[#f8faff]'
                    : idx === 1
                    ? 'bg-[#f7fbff]'
                    : idx === 2
                    ? 'bg-[#f9f9ff]'
                    : 'bg-[#f7f8fb]'
                }`}
              >
                <div className="flex items-stretch gap-4">
                  <div
                    className="w-12 md:w-14 text-indigo-600 font-black text-3xl md:text-4xl flex items-center justify-center"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'upright', letterSpacing: '0.08em' }}
                  >
                    {benefit.char}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#1f1b5c] via-brand-primaryDark to-[#2b2673] text-white">
        <div className="py-10 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-black italic text-white tracking-tight leading-tight">
              建立教學優勢，只需<span className="text-[#00bbde] text-4xl md:text-6xl align-middle">「一鍵」</span>事
            </p>
          </div>
        </div>
      

      {/* Easy operation showcase */}
      <section className="py-20 px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-[#00bbde]/20 border border-[#00bbde]/60 px-4 py-2.5 mb-5 rounded-xl shadow-lg shadow-cyan-900/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00bbde]" />
              <span className="text-sm md:text-base font-black text-white tracking-wide">
                操作者友善設計
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-[#00bbde]">一鍵</span>切換 連接狀態
            </h2>
            <p className="text-indigo-50 text-lg leading-relaxed max-w-xl">
              點開 Magic Door Chrome Extension 後，只需一鍵切換，清晰直觀，輕鬆上手。
            </p>
          </div>

          <div className="text-white p-0 md:p-0">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-0">
                <img src="/panel-off.png" alt="Magic Door 未連線面板示意" className="w-full max-w-[180px] mx-auto rounded-xl" />
                <p className="text-xs font-semibold text-indigo-100 mt-2 text-center">未接通狀態</p>
              </div>
              <div className="p-0">
                <img src="/panel-on.png" alt="Magic Door 已連線面板示意" className="w-full max-w-[180px] mx-auto rounded-xl" />
                <p className="text-xs font-semibold text-indigo-100 mt-2 text-center">接通狀態</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anytime deployment */}
      <section id="anytime" className="py-24 px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-[#00bbde]/20 border border-[#00bbde]/60 px-4 py-2.5 mb-5 rounded-xl shadow-lg shadow-cyan-900/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00bbde]" />
              <span className="text-sm md:text-base font-black text-white tracking-wide">
                學校 Admin 友善設計
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">全校<span className="text-[#00bbde]">一鍵</span>安裝</span>
            </h2>
            <p className="text-indigo-50 text-lg leading-relaxed mb-7 max-w-xl">
              透過 <span className="text-brand-primarySoft font-extrabold">Google Workspace Admin</span>，學校管理員即可將
              <span className="text-brand-primarySoft font-extrabold"> Magic Door </span>
              分發至全校用家，<span className="text-[#00bbde] font-black">免逐台安裝</span>，
              <span className="text-[#00bbde] font-black">免重複設定</span>。
            </p>

            <ul className="space-y-3 max-w-xl">
              {[
                { text: '絕無繁鎖操作，一click全校安裝', dot: 'bg-lime-400/20 text-lime-300' },
                { text: '自動更新插件，無需手動維護', dot: 'bg-lime-400/20 text-lime-300' },
                { text: '隨時按需增加授權名額', dot: 'bg-lime-400/20 text-lime-300' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-sm font-black ring-2 ring-lime-300/70 ${item.dot}`}>✓</span>
                  <span className="font-medium text-white/95">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-white text-gray-900 rounded-3xl border border-white/30 shadow-2xl p-7 md:p-9">
            <h3 className="text-2xl font-black mb-5 pb-3 border-b border-gray-100">Admin Dashboard</h3>
            <div className="space-y-3">
              <div className="relative flex items-center justify-between p-4 rounded-2xl border-2 border-brand-primary bg-brand-primarySoft">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white text-brand-primaryDark flex items-center justify-center font-bold shadow-sm">MD</span>
                  <span className="font-semibold">Magic Door Ext</span>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-brand-primary text-white font-bold tracking-wide">
                  Force Installed
                </span>
                <span className="absolute left-[calc(72%-36px)] top-[58%] -translate-y-1/2 drop-shadow-lg" aria-hidden="true">
                  <svg className="w-8 h-8 text-brand-primaryDark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 3l13.5 7.2-6 1.7 2.6 5.9-2.8 1.2-2.6-5.9-4.7 4.1z" />
                  </svg>
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-gray-50 opacity-60">
                <span className="font-medium">Other Plugin</span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-gray-200 text-gray-600 font-bold tracking-wide">
                  Standard
                </span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 bg-gray-50 opacity-60">
                <span className="font-medium">Other Plugin</span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-gray-200 text-gray-600 font-bold tracking-wide">
                  Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
            距離AI工具自由，只剩一門之隔
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            立即使用 Magic Door
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@magicdoor.cc"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              查詢報價
            </a>
          </div>
        </div>
      </section>

    </Layout>
  )
}
