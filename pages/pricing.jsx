import Layout from '../components/Layout'
import Link from 'next/link'

const individualPlans = [
  {
    name: '基礎',
    connectionLimit: '1 小時',
    dailyLimit: '3 小時',
    teacherPrice: 'HK$150',
    studentPrice: 'HK$60',
    featured: false,
  },
  {
    name: '進階',
    connectionLimit: '2 小時',
    dailyLimit: '6 小時',
    teacherPrice: 'HK$225',
    studentPrice: 'HK$90',
    featured: true,
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
            為學校與機構提供清晰、易管理的年度方案。歡迎聯絡我們安排報價與部署。
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6 mb-16">
          {individualPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.featured
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black">{plan.name}</h2>
                {plan.featured && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primarySoft">
                    進階首選
                  </span>
                )}
              </div>

              <div className={`space-y-3 text-sm ${plan.featured ? 'text-gray-200' : 'text-gray-600'}`}>
                <div className="flex items-center justify-between border-b border-current/10 pb-2">
                  <span>連線時限</span>
                  <span className="font-bold">{plan.connectionLimit}</span>
                </div>
                <div className="flex items-center justify-between border-b border-current/10 pb-2">
                  <span>每日上限</span>
                  <span className="font-bold">{plan.dailyLimit}</span>
                </div>
              </div>

              <div className={`mt-8 mb-8 rounded-2xl border p-4 ${plan.featured ? 'border-white/15 bg-white/5' : 'border-gray-100 bg-gray-50'}`}>
                <div className="flex items-center justify-between py-2 border-b border-current/10">
                  <span className={plan.featured ? 'text-gray-300' : 'text-gray-500'}>老師</span>
                  <span className={`font-bold ${plan.featured ? 'text-white' : 'text-brand-primaryDark'}`}>
                    {plan.teacherPrice}
                    <span className={`ml-1 text-xs font-medium ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>/ 人 / 年</span>
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className={plan.featured ? 'text-gray-300' : 'text-gray-500'}>學生</span>
                  <span className={`font-bold ${plan.featured ? 'text-white' : 'text-brand-primaryDark'}`}>
                    {plan.studentPrice}
                    <span className={`ml-1 text-xs font-medium ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>/ 人 / 年</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="flex justify-center">
          <a
            href="mailto:info@magicdoor.cc?subject=Magic%20Door%20%E6%8A%A5%E5%83%B9%E6%9F%A5%E8%A9%A2"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-primaryDark hover:bg-brand-primary text-white font-semibold transition-colors"
          >
            查詢及報價
          </a>
        </div>
      </div>
    </Layout>
  )
}
