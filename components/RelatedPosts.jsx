import Link from 'next/link'

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-HK', { year: 'numeric', month: 'long', day: 'numeric' })
}

/**
 * @param {{ posts: Array<{ slug: string, title: string, date: string, excerpt: string, coverImage: string }> }} props
 */
export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="mt-14" aria-labelledby="related-posts-heading">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
      <h2 id="related-posts-heading" className="text-xl font-black text-gray-900 mb-6">
        相關文章
      </h2>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="block group rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all p-5 md:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:gap-5">
                {p.coverImage && (
                  <div className="shrink-0 mb-3 sm:mb-0 sm:w-40 md:w-44">
                    <div className="rounded-xl overflow-hidden border border-gray-100 aspect-[16/9] sm:aspect-[16/10]">
                      <img
                        src={p.coverImage}
                        alt={`${p.title} 預覽`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                      />
                    </div>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400 mb-1">{formatDate(p.date)}</p>
                  <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug mb-2">
                    {p.title}
                  </p>
                  {p.excerpt && (
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  )}
                  <span className="inline-block mt-2 text-sm font-semibold text-indigo-600">閱讀全文 →</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
