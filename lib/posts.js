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

      return {
        slug,
        title: data.title || slug,
        date: data.date ? String(data.date) : '',
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        published: data.published !== false, // default true if field is absent
      }
    })
    .filter((post) => post.published)

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const { remark } = await import('remark')
  const { default: remarkGfm } = await import('remark-gfm')
  const { default: remarkHtml } = await import('remark-html')

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    title: data.title || slug,
    date: data.date ? String(data.date) : '',
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || '',
    contentHtml,
  }
}
