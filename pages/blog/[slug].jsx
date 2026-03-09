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
          className="prose prose-gray max-w-none
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
            prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-gray-200 prose-td:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="mt-14 pt-10 border-t border-gray-100">
          <Link href="/blog" className="text-sm font-semibold text-indigo-600 hover:underline">
            ← 返回網誌
          </Link>
        </div>
      </div>
    </Layout>
  )
}
