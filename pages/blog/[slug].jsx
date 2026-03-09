import Link from 'next/link'
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

  return (
    <Layout title={`${post.title} — Magic Door`} description={post.excerpt}>
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

        {isInfographicPost && (
          <section className="mt-12">
            <div className="rounded-3xl border border-cyan-100/80 bg-gradient-to-br from-[#f8feff] via-white to-[#f1f9ff] p-8 md:p-10 shadow-sm">
              <p className="text-sm font-bold tracking-[0.14em] uppercase text-[#00bbde] mb-3">Magic Door</p>
              <h2 className="text-3xl md:text-3xl font-black text-gray-900 tracking-tight mb-4 md:whitespace-nowrap">
                告別長篇大論，用 infographic 收服學生！
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                一鍵接通最強 AI 視覺化能力，讓學生更易理解重點，老師更快完成教材整理與課堂準備。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-[#00bbde] text-white text-lg font-bold hover:bg-cyan-500 transition-colors"
                >
                  立即查詢報價
                </Link>
                <Link
                  href="/trial"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-2xl border border-cyan-200 text-cyan-700 font-semibold hover:bg-cyan-50 transition-colors"
                >
                  先睇試用方案
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
