import Layout from '../components/Layout'
import { APP_DOWNLOAD_PATH } from '../utils/app'

const sellingPoints = [
  {
    title: 'iPad在手，師生即場互動',
    description:
      '老師邊教，學生邊學，課堂由單向講授，升級成即時互動與實操。',
  },
  {
    title: '熱門 AI 工具，盡在指間',
    description:
      '一 App 打通 NotebookLM、AI Studio、ChatGPT 等，思路不中斷，掌握流暢教學節奏。',
  },
  {
    title: '無需逐一安裝，裝備馬上就位',
    description:
      '告別繁瑣安裝流程，真正「開門即用」，AI 支援隨手可得。',
  },
]

export default function AppLandingPage() {
  return (
    <Layout
      title="Magic Door App 正式登場｜老師可教，學生可用"
      description="支援 iPad、iPhone版，一個 App 直達 NotebookLM、AI Studio、ChatGPT，讓 AI 教學在課堂即時落地。"
    >
      <section className="px-6 pt-16 pb-10 bg-gradient-to-br from-[#eef8ff] via-white to-[#f4f9ff]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-base md:text-lg font-bold tracking-[0.1em] uppercase text-[#00bbde] mb-5">
              Magic Door App
            </p>
            <h1 className="font-black text-gray-900 tracking-tight leading-[1.08]">
              <span className="block whitespace-nowrap text-[clamp(2.1rem,8vw,4.5rem)]">
                打開{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#00bbde] via-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
                    AI 兵器庫
                  </span>
                  <span className="absolute -inset-x-1 bottom-0.5 h-3 rounded-full bg-cyan-200/50 -z-10" aria-hidden="true" />
                </span>
                之門
              </span>
              <span className="block whitespace-nowrap text-[clamp(1.35rem,4.8vw,2.2rem)] text-gray-900 mt-3">
                引領
                <span className="mx-1 relative inline-block px-0.5 text-[#6366f1]">
                  教、學並進
                  <span className="absolute left-0 right-0 -bottom-0.5 h-2 rounded-sm bg-[#c7d2fe]/80 -z-10" aria-hidden="true" />
                </span>
                新課堂
              </span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
              支援 iPad 靈活操作，教與學同步升級；
              <br />
              頂尖工具一站接通，最強裝備隨手可得
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-base font-bold ring-1 ring-cyan-200/80">
                支援 iPad 版
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-base font-bold ring-1 ring-indigo-200/80">
                學生即場使用
              </span>
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-base font-bold ring-1 ring-slate-200/80">
                接通熱門 AI 免切換
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={APP_DOWNLOAD_PATH}
                className="inline-flex items-center justify-center px-11 py-5 rounded-3xl bg-[#00bbde] text-white text-xl font-bold hover:bg-cyan-500 transition-colors"
              >
                立即下載
              </a>
            </div>
          </div>

          <div className="relative pt-8">
            <div
              className="absolute -top-2 right-6 z-20 inline-flex items-center justify-center rounded-full bg-white/95 border border-cyan-100 p-2 shadow-md"
              aria-label="Magic Door App logo badge"
            >
              <img src="/icon2.svg" alt="Magic Door logo" className="w-14 h-14" />
            </div>

            <div className="absolute inset-x-8 -top-2 h-16 rounded-full bg-gradient-to-r from-cyan-300/50 via-indigo-300/40 to-cyan-300/50 blur-2xl" aria-hidden="true" />

            <div className="relative rounded-[2rem] border border-cyan-100 bg-white p-3 md:p-4 shadow-xl shadow-cyan-100/70">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.22),transparent_40%)]" />

              <div className="pointer-events-none absolute inset-x-8 top-4 h-8 rounded-full border border-cyan-200/70" />
              <div className="pointer-events-none absolute inset-x-12 top-6 h-8 rounded-full border border-indigo-200/70" />

              <img
                src="/app-interface-showcase.png"
                alt="Magic Door App 介面，顯示可直達多個熱門 AI 工具"
                className="relative z-10 w-full rounded-[1.5rem] border border-gray-100"
              />

              <div className="pointer-events-none absolute -right-8 top-[24%] z-20 rounded-full bg-indigo-100/95 px-3.5 py-1.5 text-xs font-bold text-indigo-700 shadow-lg rotate-6">
                AI Studio
              </div>
              <div className="pointer-events-none absolute -left-10 top-[24%] z-20 rounded-full bg-cyan-100/95 px-3.5 py-1.5 text-xs font-bold text-cyan-700 shadow-lg -rotate-6">
                NotebookLM
              </div>
              <div className="pointer-events-none absolute -left-8 bottom-[18%] z-20 rounded-full bg-emerald-100/95 px-3.5 py-1.5 text-xs font-bold text-emerald-700 shadow-lg -rotate-3">
                ChatGPT
              </div>
              <div className="pointer-events-none absolute -right-7 bottom-[18%] z-20 rounded-full bg-amber-100/95 px-3.5 py-1.5 text-xs font-bold text-amber-700 shadow-lg rotate-6">
                Suno
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black tracking-tight text-gray-900 mb-3 leading-tight text-center">
            <span className="block text-2xl md:text-3xl text-gray-900">技術再突破！</span>
            <span className="mt-1 block text-4xl md:text-5xl text-gray-900">
              解鎖 AI 課堂
              <span className="relative inline-block bg-gradient-to-r from-[#00bbde] via-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
                3大必備功能
                <span className="absolute left-0 right-0 -bottom-1 h-2 rounded-sm bg-cyan-200/60 -z-10" aria-hidden="true" />
              </span>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {sellingPoints.map((point) => (
              <article key={point.title} className="rounded-2xl bg-[#f8fbff] border border-[#e5f3ff] p-6">
                <h3 className="text-xl font-black text-gray-900 leading-tight">{point.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">極簡操作，直達 AI 兵器庫</h2>
            <span className="text-xs md:text-sm font-semibold text-cyan-600 uppercase tracking-[0.15em]">
              App Experience
            </span>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            介面清晰直觀，開啟後只需幾個步驟，即可投入課堂，教學節奏一氣呵成。
          </p>
          <p className="text-xs text-gray-400 mb-3">建議使用全螢幕播放，以獲最佳畫質。</p>
          <div className="max-w-4xl mx-auto">
            <video
              className="w-full rounded-2xl border border-gray-100 bg-black"
              controls
              playsInline
              preload="metadata"
              src="/magicdoor-app-demo.mp4"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gray-900 text-white p-8 md:p-12 text-center">
          <p className="text-cyan-300 font-bold uppercase tracking-[0.15em] text-sm mb-3">One App. Elevate Teaching & Learning.</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            一 App 升級
            <span className="relative inline-block text-[#6366f1]">
              師
              <span className="absolute left-0 right-0 -bottom-1 h-2 rounded-sm bg-indigo-200/70 -z-10" aria-hidden="true" />
            </span>
            <span className="relative inline-block text-[#6366f1]">
              生
              <span className="absolute left-0 right-0 -bottom-1 h-2 rounded-sm bg-indigo-200/70 -z-10" aria-hidden="true" />
            </span>
            AI 戰力。
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            立即下載 Magic Door App，一站式打通 AI
            <span className="mx-1 text-white font-semibold underline decoration-cyan-300/80 decoration-2 underline-offset-4">教學</span>
            與
            <span className="mx-1 text-white font-semibold underline decoration-cyan-300/80 decoration-2 underline-offset-4">學習</span>
            ，讓最新科技走入課室，成為師生日常。
          </p>
          <a
            href={APP_DOWNLOAD_PATH}
            className="mt-8 inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            立即下載
          </a>
        </div>
      </section>
    </Layout>
  )
}
