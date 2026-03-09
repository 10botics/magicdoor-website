import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/Layout'
import { getAllPosts, getPostBySlug } from '../../lib/posts'

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)
  return { props: { post } }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-HK', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPost({ post }) {
  const isInfographicPost = post.slug === '2026-03-notebooklm-text-to-infographic'
  const isBreakingNewsPost = post.slug === '2026-03-notebooklm-custom-infographic-style-breaking-news'
  const [carouselIndex, setCarouselIndex] = useState(0)

  const comparisonRows = [
    {
      item: '視覺控制系統',
      before: '隨機排版，風格單一。',
      after: '10 種預設風格（如 Kawaii、Clay、Editorial）任選。',
    },
    {
      item: '品牌自訂',
      before: '無法指定色彩或調性。',
      after: '支援 Custom Prompt，可指定學校代表色或特定主題。',
    },
    {
      item: '版面靈活度',
      before: '尺寸固定。',
      after: '支援直向、橫向、正方形，適應 PPT 或手機閱讀。',
    },
    {
      item: '語言支援',
      before: '以英文為主。',
      after: '全面支援中文及多國語言輸出。',
    },
  ]

  const quickSteps = [
    { title: '上傳來源', detail: '上傳 PDF、網頁連結或筆記。' },
    { title: '選擇 Infographic', detail: '於 Studio 點擊 Infographic。' },
    { title: '自訂風格', detail: '揀版型並輸入 Prompt 指定重點。' },
    { title: '生成輸出', detail: '檢查結果後下載 PNG 或分享。' },
  ]

  const crossSubjectSlides = [
    {
      src: '/notebooklm-cross-subject-1.png',
      subject: '歷史科 / 常識科',
      learningHelp:
        '把工業革命中「童工議題」的時間線、事件因果與政策變化圖像化，學生可更快建立時序概念，減少只靠長文記憶的負擔。',
    },
    {
      src: '/notebooklm-cross-subject-2.png',
      subject: '生物科 / STEM',
      learningHelp:
        '用左右對照方式呈現自然光合作用與人工固碳技術差異，幫助學生清楚比較機制、效率與產物，提升概念理解與答題組織力。',
    },
    {
      src: '/notebooklm-cross-subject-3.png',
      subject: '德育 / 環保教育 / 小學常識',
      learningHelp:
        '以卡通情境拆解回收分類與日常實踐步驟，降低抽象度，增加低年級學生參與感，讓「看完即做」更容易發生。',
    },
  ]

  const goPrev = () => {
    setCarouselIndex((idx) => (idx === 0 ? crossSubjectSlides.length - 1 : idx - 1))
  }

  const goNext = () => {
    setCarouselIndex((idx) => (idx + 1) % crossSubjectSlides.length)
  }

  return (
    <Layout title={`${post.title} — Magic Door`} description={post.excerpt} image={post.coverImage || '/icon-1024.png'}>
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-10">
          <Link href="/blog" className="hover:text-gray-600 transition-colors">網誌</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 line-clamp-1">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-4">{formatDate(post.date)}</p>
          <h1 className="text-4xl font-black text-gray-900 leading-tight mb-4">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-gray-500 leading-relaxed">{post.excerpt}</p>
          )}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10" />

        {/* Body */}
        <div
          className={`prose prose-gray max-w-none
            prose-headings:font-black prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-li:text-gray-600
            prose-ol:leading-relaxed prose-ul:leading-relaxed
            prose-table:w-full prose-table:border-collapse
            prose-th:bg-gray-50 prose-th:text-gray-700 prose-th:font-semibold prose-th:text-left prose-th:px-4 prose-th:py-2 prose-th:border prose-th:border-gray-200
            prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-gray-200 prose-td:text-gray-600`}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {isBreakingNewsPost && (
          <>
            <section className="mt-10">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                🔍 前後對比：從「隨機生成」到「風格自主」
              </h2>

              <p className="text-xs text-gray-500 mb-2 md:hidden">可左右滑動查看完整對比表 →</p>
              <div className="rounded-3xl border border-cyan-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <div className="min-w-[760px]">
                    <div className="grid grid-cols-3">
                      <div className="bg-gray-50 px-5 py-4 font-bold text-gray-700 border-r border-gray-100">
                        功能項目
                      </div>
                      <div className="bg-rose-50 px-5 py-4 font-bold text-rose-700 border-r border-rose-100">
                        更新前（Before）
                      </div>
                      <div className="bg-cyan-50 px-5 py-4 font-bold text-cyan-700">更新後（After：Custom Styles）</div>
                    </div>

                    {comparisonRows.map((row) => (
                      <div key={row.item} className="grid grid-cols-3 border-t border-gray-100">
                        <div className="px-5 py-4 font-semibold text-gray-800 bg-white">{row.item}</div>
                        <div className="px-5 py-4 text-gray-600 bg-white border-l border-gray-100">{row.before}</div>
                        <div className="px-5 py-4 text-cyan-800 bg-cyan-50/60 border-l border-cyan-100 font-medium">
                          {row.after}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                ⚡ 精簡流程，最快3分鐘生成初稿
              </h2>
              <div className="mb-8 rounded-2xl overflow-hidden border border-cyan-100 bg-white">
                <img
                  src="/notebooklm-flow-screencap.png"
                  alt="NotebookLM 流程示範截圖"
                  className="w-full"
                />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {quickSteps.map((step, idx) => (
                  <div key={step.title} className="rounded-2xl border border-cyan-100 bg-white p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-cyan-100 text-cyan-700 text-sm font-black">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-cyan-100 overflow-hidden">
                <div className="bg-cyan-50 px-5 py-4 border-b border-cyan-100">
                  <h3 className="text-lg md:text-xl font-black text-cyan-800">🎨 可選風格一覽</h3>
                </div>
                <p className="text-xs text-gray-500 px-5 py-2 md:hidden">可左右滑動查看完整風格清單 →</p>
                <div className="overflow-x-auto">
                  <div className="min-w-[720px]">
                    <div className="grid grid-cols-2">
                      <div className="px-5 py-3 font-bold text-gray-700 bg-gray-50 border-b border-r border-gray-100">風格</div>
                      <div className="px-5 py-3 font-bold text-gray-700 bg-gray-50 border-b border-gray-100">適合用途</div>
                    </div>
                    {[
                      ['Professional（專業）', '商務報告、家長信、行政文件'],
                      ['Instructional（教學式）', '步驟指引、操作教程、學習流程'],
                      ['Scientific（科學式）', '學術內容、研究摘要、數據展示'],
                      ['Editorial（報章式）', '新聞式排版，帶復古報紙風格'],
                      ['Bento Grid（便當格）', '結構化內容，清晰分區呈現'],
                      ['Bricks（積木式）', '活潑動感，適合展示清單或步驟'],
                      ['Clay（黏土感）', '色彩鮮豔，現代風格'],
                      ['Anime（動漫風）', '角色驅動的創意視覺'],
                      ['Kawaii（可愛風）', '輕鬆有趣，適合非正式場合'],
                      ['Sketch（手繪風）', '手稿感設計，親切自然'],
                    ].map(([style, use]) => (
                      <div key={style} className="grid grid-cols-2 border-t border-gray-100">
                        <div className="px-5 py-3 text-gray-800 font-medium border-r border-gray-100">{style}</div>
                        <div className="px-5 py-3 text-gray-600">{use}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                📖 講多無謂，馬上實測
              </h2>
              <p className="text-gray-600 mb-5">
                我們利用 NotebookLM 的新功能，針對不同學科模擬了三款教材。這就是視覺化後的「懶人包」威力：
              </p>

              <div className="rounded-3xl border border-cyan-100 bg-white p-3 md:p-4 shadow-sm">
                <div className="relative">
                  <img
                    src={crossSubjectSlides[carouselIndex].src}
                    alt={`跨學科實測示例 ${carouselIndex + 1}`}
                    className="w-full rounded-2xl"
                  />

                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-200 text-gray-700 font-bold shadow hover:bg-white"
                    aria-label="上一張"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-200 text-gray-700 font-bold shadow hover:bg-white"
                    aria-label="下一張"
                  >
                    ›
                  </button>
                </div>

                <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50/40 p-4 md:p-5">
                  <p className="text-sm font-bold text-cyan-700 mb-2">
                    對應學科：{crossSubjectSlides[carouselIndex].subject}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {crossSubjectSlides[carouselIndex].learningHelp}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  {crossSubjectSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCarouselIndex(idx)}
                      aria-label={`切換至第 ${idx + 1} 張`}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === carouselIndex ? 'w-7 bg-cyan-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {(isInfographicPost || isBreakingNewsPost) && (
          <section className="mt-12">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />
            <div className="rounded-3xl border border-cyan-100/80 bg-gradient-to-br from-[#f8feff] via-white to-[#f1f9ff] p-8 md:p-10 shadow-sm">
              <p className="text-lg md:text-xl font-black text-gray-900 mb-3">渴望掌握如此強大功能？</p>
              <h2 className="text-3xl md:text-3xl font-black text-gray-900 tracking-tight mb-4">
                立即試用<span className="text-[#00bbde]">Magic Door</span>，成為教材設計大師！
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                以非VPN方式，接通熱門AI工具，確保您能即時應用最新、最全面的AI工具，從此不再受限，領先一步建立 AI 教學優勢。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/trial"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-[#00bbde] text-white font-semibold hover:bg-cyan-500 transition-colors"
                >
                  率先試用
                </Link>
              </div>
            </div>
          </section>
        )}

        <div className="mt-14 pt-10 border-t border-gray-100">
          <Link href="/blog" className="text-sm font-semibold text-indigo-600 hover:underline">
            ← 返回網誌
          </Link>
        </div>
      </div>
    </Layout>
  )
}
