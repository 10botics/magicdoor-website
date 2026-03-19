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
      '一 App 直通多款頂尖 AI 工具，思路不中斷，掌握流暢教學節奏。',
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
      title="Magic Door App｜AI工具 一門直達，現已登陸 iPad"
      description="同一扇 Magic Door，現延伸至 iPad。師生共用，課堂隨開隨用，AI 工具即時到位。"
    >
      <section className="px-6 pt-16 pb-10 bg-gradient-to-br from-[#eef8ff] via-white to-[#f4f9ff]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-base md:text-lg font-bold tracking-[0.1em] uppercase text-[#00bbde] mb-5">
              Magic Door App · 現已登陸 iPad
            </p>
            <h1 className="font-black text-gray-900 tracking-tight leading-[1.08]">
              <span className="block whitespace-nowrap text-[clamp(2.1rem,8vw,4.5rem)]">
                AI工具
              </span>
              <span className="block whitespace-nowrap text-[clamp(2.1rem,8vw,4.5rem)]">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#00bbde] via-[#3b82f6] to-[#6366f1] bg-clip-text text-transparent">
                    一門直達
                  </span>
                  <span className="absolute -inset-x-1 bottom-0.5 h-3 rounded-full bg-cyan-200/50 -z-10" aria-hidden="true" />
                </span>
              </span>
              <span className="block whitespace-nowrap text-[clamp(1.35rem,4.8vw,2.2rem)] text-gray-500 mt-3 font-bold">
                師生共用，課堂隨開隨用
              </span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-2xl">
              同一扇門，現已延伸至 iPad —
              <br />
              老師教、學生學，AI 支援即時到位
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
                立即試用
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

      <section className="px-6 pt-16 pb-20">
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
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">極簡操作，即開即用</h2>
            <span className="text-xs md:text-sm font-semibold text-cyan-600 uppercase tracking-[0.15em]">
              App Experience
            </span>
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed">
            介面清晰直觀，開啟後只需幾個步驟，即可投入課堂，教學節奏一氣呵成。
          </p>
          {/* iPad landscape mockup */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#d1d1d6] rounded-[2.8rem] p-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.6)]">
              {/* Power button (right short edge — was top edge in portrait) */}
              <div className="absolute right-[-3px] top-[20%] w-[3px] h-10 rounded-r-full bg-[#b0b0b5]" aria-hidden="true" />
              {/* Camera dot (top long edge, right side — front camera in landscape) */}
              <div className="absolute top-[7px] right-[8%] w-2.5 h-2.5 rounded-full bg-[#b0b0b5] shadow-inner" aria-hidden="true" />
              {/* Screen */}
              <div className="rounded-[2rem] overflow-hidden bg-black ring-1 ring-black/10">
                <img
                  src="/ipad_screencap.jpg"
                  alt="Magic Door App 在 iPad 上的介面截圖"
                  className="w-full block"
                />
              </div>
              {/* Bottom shine */}
              <div className="pointer-events-none absolute inset-x-4 bottom-2 h-3 rounded-full bg-white/30 blur-sm" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gray-900 text-white p-8 md:p-12 text-center">
          <p className="text-cyan-300 font-bold uppercase tracking-[0.15em] text-sm mb-3">AI工具 一門直達</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            同一扇門，
            <span className="relative inline-block text-[#6366f1]">
              師生
              <span className="absolute left-0 right-0 -bottom-1 h-2 rounded-sm bg-indigo-200/70 -z-10" aria-hidden="true" />
            </span>
            皆達。
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Magic Door 現已登陸 iPad，師生共用同一平台，
            <span className="mx-1 text-white font-semibold underline decoration-cyan-300/80 decoration-2 underline-offset-4">課堂即開即用</span>
            ，AI 支援隨時到位。
          </p>
          <a
            href={APP_DOWNLOAD_PATH}
            className="mt-8 inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            立即試用
          </a>
        </div>
      </section>
    </Layout>
  )
}
