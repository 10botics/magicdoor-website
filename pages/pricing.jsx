import Layout from '../components/Layout'
import Link from 'next/link'
import { getWhatsAppLink } from '../utils/contact'

const individualPlans = [
  {
    name: '基礎',
    englishName: 'Basic',
    connectionLimit: '1 小時',
    dailyLimit: '3 小時',
    deviceLimit: '1 個',
    teacherPrice: 'HK$150',
    teacherOriginal: 'HK$215',
    studentPrice: 'HK$60',
    studentOriginal: 'HK$88',
    featured: false,
  },
  {
    name: '進階',
    englishName: 'Plus',
    connectionLimit: '2 小時',
    dailyLimit: '6 小時',
    deviceLimit: '1 個',
    teacherPrice: 'HK$225',
    teacherOriginal: 'HK$320',
    studentPrice: 'HK$90',
    studentOriginal: 'HK$128',
    featured: false,
  },
  {
    name: '終極',
    englishName: 'Max',
    connectionLimit: '2 小時',
    dailyLimit: '20 小時',
    deviceLimit: '5 個',
    unifiedPrice: 'HK$699',
    unifiedOriginal: 'HK$999',
    featured: false,
    badge: '高用量首選',
  },
]

export default function Pricing() {
  return (
    <Layout
      title="方案與收費 — Magic Door"
      description="Magic Door 版本與費用，包括基礎與進階計劃。"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-16">
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">首頁</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">方案與收費</span>
        </nav>

        <section className="mb-14">
          <h1 className="text-4xl font-black text-brand-text mb-3">方案與收費</h1>
          <p className="text-brand-muted leading-relaxed max-w-2xl">
            為學校與機構提供清晰易明、方便管理的年度方案，歡迎聯絡我們安排報價與部署。
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1.4fr] gap-6 mb-16 items-stretch">
          {individualPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border ${
                plan.name === '基礎'
                  ? 'bg-slate-50 border-slate-200 p-6 md:p-7 text-slate-800'
                  : plan.name === '進階'
                  ? 'bg-indigo-900 border-indigo-900 p-6 md:p-7 text-white'
                  : 'bg-gradient-to-br from-cyan-600 to-indigo-700 border-cyan-400/70 p-9 md:p-10 text-white shadow-2xl lg:scale-[1.03]'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className={`${plan.name === '終極' ? 'text-3xl' : 'text-2xl'} font-black`}>
                  {plan.name}
                  <span className={`ml-2 align-middle font-semibold ${plan.name === '基礎' ? 'text-slate-500' : 'text-gray-200'} ${plan.name === '終極' ? 'text-xl' : 'text-lg'}`}>
                    {plan.englishName}
                  </span>
                </h2>
                {plan.badge && (
                  <span className={`font-semibold rounded-full ${
                    plan.name === '基礎'
                      ? 'text-xs px-3 py-1 bg-white text-slate-600'
                      : plan.name === '進階'
                      ? 'text-xs px-3 py-1 bg-brand-primary/20 text-brand-primarySoft'
                      : 'text-sm px-4 py-1.5 bg-white/20 text-white'
                  }`}>
                    {plan.badge}
                  </span>
                )}
              </div>

              <div className={`space-y-3 ${plan.name === '終極' ? 'text-base' : 'text-sm'} ${plan.name === '基礎' ? 'text-slate-600' : 'text-gray-200'}`}>
                <div className="flex items-center justify-between border-b border-current/10 pb-2">
                  <span>連線時限</span>
                  <span className="font-bold">{plan.connectionLimit}</span>
                </div>
                <div className="flex items-center justify-between border-b border-current/10 pb-2">
                  <span>每日上限</span>
                  <span className="font-bold">{plan.dailyLimit}</span>
                </div>
                <div className="flex items-center justify-between border-b border-current/10 pb-2">
                  <span>同時連線設備上限</span>
                  <span className="font-bold">{plan.deviceLimit}</span>
                </div>
              </div>

              <div className={`mt-8 mb-2 rounded-2xl border p-4 ${plan.name === '基礎' ? 'border-slate-200 bg-white' : 'border-white/20 bg-white/10'}`}>
                <div className={`text-center mb-2`}>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${plan.name === '基礎' ? 'bg-rose-100 text-rose-600' : 'bg-white/20 text-white'}`}>
                    限時優惠 7折
                  </span>
                </div>
                {plan.unifiedPrice ? (
                  <div className="py-2 text-center">
                    <div className={`text-sm line-through mb-1 ${plan.name === '基礎' ? 'text-slate-400' : 'text-white/50'}`}>
                      劃一{plan.unifiedOriginal}/ 年
                    </div>
                    <span className={`font-black text-3xl md:text-4xl leading-none whitespace-nowrap ${plan.name === '基礎' ? 'text-brand-primaryDark' : 'text-white'}`}>
                      劃一{plan.unifiedPrice}/ 年
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between py-2 border-b border-current/10">
                      <span className={plan.name === '基礎' ? 'text-slate-500' : 'text-gray-300'}>老師</span>
                      <div className="text-right">
                        <div className={`text-xs line-through ${plan.name === '基礎' ? 'text-slate-400' : 'text-white/50'}`}>
                          {plan.teacherOriginal} / 人 / 年
                        </div>
                        <span className={`font-bold ${plan.name === '基礎' ? 'text-brand-primaryDark' : 'text-white'}`}>
                          {plan.teacherPrice}
                          <span className={`ml-1 text-xs font-medium ${plan.name === '基礎' ? 'text-slate-500' : 'text-gray-300'}`}>/ 人 / 年</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className={plan.name === '基礎' ? 'text-slate-500' : 'text-gray-300'}>學生</span>
                      <div className="text-right">
                        <div className={`text-xs line-through ${plan.name === '基礎' ? 'text-slate-400' : 'text-white/50'}`}>
                          {plan.studentOriginal} / 人 / 年
                        </div>
                        <span className={`font-bold ${plan.name === '基礎' ? 'text-brand-primaryDark' : 'text-white'}`}>
                          {plan.studentPrice}
                          <span className={`ml-1 text-xs font-medium ${plan.name === '基礎' ? 'text-slate-500' : 'text-gray-300'}`}>/ 人 / 年</span>
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {plan.name === '終極' && (
                <p className="mt-3 text-xs text-white/80">
                  *最適合電腦室或學校圖書館等公用電腦環境
                </p>
              )}
            </div>
          ))}
        </section>

        <div className="flex justify-center">
          <a
            href={getWhatsAppLink('你好，我想查詢 Magic Door 報價。')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 text-xl rounded-xl bg-brand-primaryDark hover:bg-brand-primary text-white font-semibold transition-colors"
          >
            查詢報價
          </a>
        </div>
      </div>
    </Layout>
  )
}
