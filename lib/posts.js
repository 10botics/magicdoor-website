import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return []

  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))

  const posts = filenames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      const rawDate = data.date
      const isoDate =
        rawDate instanceof Date
          ? rawDate.toISOString().split('T')[0]
          : rawDate
          ? String(rawDate)
          : ''

      return {
        slug,
        title: data.title || slug,
        date: isoDate,
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        published: data.published !== false, // default true if field is absent
      }
    })
    .filter((post) => post.published)

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/**
 * Resolve frontmatter `related` slugs to published post summaries (order preserved).
 * Invalid or unpublished slugs are skipped.
 * @param {string[]|string|undefined} related
 * @returns {Array<{ slug: string, title: string, date: string, excerpt: string, coverImage: string }>}
 */
export function getRelatedPostsMeta(related) {
  if (!related) return []
  const slugs = Array.isArray(related) ? related : [related]
  if (slugs.length === 0) return []

  const all = getAllPosts()
  const bySlug = new Map(all.map((p) => [p.slug, p]))
  return slugs.map((s) => bySlug.get(s)).filter(Boolean)
}

function normalizeRelatedField(data) {
  const r = data.related
  if (!r) return []
  return Array.isArray(r) ? r : [r]
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { remark } = await import('remark')
  const { default: remarkGfm } = await import('remark-gfm')
  const { default: remarkHtml } = await import('remark-html')

  const processed = await remark().use(remarkGfm).use(remarkHtml, { allowDangerousHtml: true }).process(content)
  const contentHtml = processed
    .toString()
    .replace(
      /<p><a href="https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)">[^<]*<\/a><\/p>/g,
      (_, id) =>
        `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:1.5rem 0;">` +
        `<iframe src="https://www.youtube.com/embed/${id}" title="YouTube video" frameborder="0" ` +
        `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
        `allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`
    )

  const rawDate = data.date
  const isoDate =
    rawDate instanceof Date
      ? rawDate.toISOString().split('T')[0]
      : rawDate
      ? String(rawDate)
      : ''

  return {
    slug,
    title: data.title || slug,
    date: isoDate,
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || '',
    contentHtml,
    related: normalizeRelatedField(data),
  }
}
