import Layout from '../../components/Layout'
import Link from 'next/link'
import { getWhatsAppLink } from '../../utils/contact'

const guides = [
  {
    title: 'IT 管理員安裝指南',
    description: '透過 Google Workspace 為全校強制安裝 Magic Door 擴充功能。',
    href: '/guides/it-admin',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tag: 'IT 管理員',
  },
  {
    title: '訂閱管理指南',
    description: '管理訂閱成員，新增或移除使用者名單。',
    href: '/guides/subscription',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    tag: '訂閱管理員',
  },
  {
    title: '使用者指南',
    description: '老師及一般成員如何連線及使用 AI 工具。',
    href: '/guides/end-user',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    tag: '一般使用者',
  },
]

export default function GuidesIndex() {
  return (
    <Layout
      title="用戶專區 — Magic Door"
      description="Magic Door 使用及管理指南，包括 IT 部署、訂閱管理及使用者說明。"
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-gray-600 transition-colors">首頁</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">用戶專區</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <h1 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
            用戶專區
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            歡迎來到 Magic Door 用戶專區。這裡提供完整的安裝、管理及使用指南，協助您快速上手。
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {guide.icon}
              </div>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
                {guide.tag}
              </p>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {guide.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {guide.description}
              </p>
              <div className="flex items-center text-sm font-bold text-gray-900 group-hover:translate-x-1 transition-transform">
                查看指南 <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-20 p-10 rounded-3xl bg-gray-900 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">需要進一步協助？</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              如果您在安裝或使用過程中遇到任何問題，請隨時聯絡我們的支援團隊。
            </p>
            <a
              href={getWhatsAppLink('你好，我在使用 Magic Door 時遇到問題，需要協助。')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-gray-900 font-bold hover:bg-indigo-50 transition-colors"
            >
              聯絡我們
            </a>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </Layout>
  )
}
