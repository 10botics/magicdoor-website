import Layout from '../components/Layout'
import { APP_STORE_URL } from '../utils/app'

const CWS_URL = 'https://chromewebstore.google.com/detail/magicdoor/akcaimdafkmgjlldooglonhapahdjapl'

export default function Download() {
  return (
    <Layout
      title="下載 Magic Door｜Chrome 擴充功能 & iPhone / iPad App"
      description="選擇最適合您的版本：Chrome 擴充功能（電腦版）或 iPhone / iPad App，一站接通熱門 AI 工具。"
    >
      <section className="px-6 pt-16 pb-24 bg-gradient-to-br from-[#eef8ff] via-white to-[#f4f9ff] min-h-[60vh]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-base font-bold tracking-[0.1em] uppercase text-[#00bbde] mb-4">
            下載 Magic Door
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            選擇您的平台
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            Magic Door 支援電腦及 iPhone / iPad，選擇最適合您的版本開始使用。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Chrome extension */}
            <a
              href={CWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 rounded-3xl border border-cyan-100 bg-white p-8 shadow-md hover:shadow-lg hover:border-cyan-300 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center">
                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="#00bbde" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" fill="#00bbde" />
                  <path d="M12 8h8.5M5.5 18.5l4-7M18.5 18.5l-4-7" stroke="#00bbde" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-black text-gray-900 mb-1">Chrome 擴充功能</h2>
                <p className="text-sm text-gray-500 mb-1">電腦版 · Windows / macOS</p>
                <p className="text-sm text-gray-400">於 Chrome 線上應用程式商店安裝</p>
              </div>
              <span className="mt-auto inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-[#00bbde] text-white font-bold text-base group-hover:bg-cyan-500 transition-colors">
                前往安裝
              </span>
            </a>

            {/* iOS App */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 rounded-3xl border border-indigo-100 bg-white p-8 shadow-md hover:shadow-lg hover:border-indigo-300 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="3" stroke="#6366f1" strokeWidth="1.8" />
                  <circle cx="12" cy="18.5" r="1" fill="#6366f1" />
                  <path d="M9 6h6" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-black text-gray-900 mb-1">iPhone / iPad App</h2>
                <p className="text-sm text-gray-500 mb-1">iOS / iPadOS 17.0 或以上</p>
                <p className="text-sm text-gray-400">於 App Store 免費下載</p>
              </div>
              <span className="mt-auto inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-[#6366f1] text-white font-bold text-base group-hover:bg-indigo-500 transition-colors">
                前往 App Store
              </span>
            </a>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            ⚠️ 使用前請確保已關閉 VPN，Magic Door 僅適用於香港網絡。
          </p>
        </div>
      </section>
    </Layout>
  )
}
