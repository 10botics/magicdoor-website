import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/posts'

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-HK', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndex({ posts }) {
  return (
    <Layout
      title="網誌 — Magic Door"
      description="Magic Door 最新消息、使用心得與 AI 教學資源。"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">網誌</p>
          <h1 className="text-4xl font-black text-gray-900 leading-tight">最新消息</h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-400">暫未有文章。</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group p-7 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                {post.coverImage && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-gray-100">
                    <img
                      src={post.coverImage}
                      alt={`${post.title} preview`}
                      className="w-full aspect-[16/9] object-cover group-hover:scale-[1.01] transition-transform"
                    />
                  </div>
                )}
                <p className="text-sm text-gray-400 mb-2">{formatDate(post.date)}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                )}
                <span className="inline-block mt-4 text-sm font-semibold text-indigo-600">
                  閱讀全文 →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}
