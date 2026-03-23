# Magic Door — Website

Marketing website for [Magic Door](https://www.magicdoor.cc), built with **Next.js 14** and **Tailwind CSS**, deployed on **Vercel**.

### Repository root (for humans and tooling)

- **This folder (`website/`) is the Git repository root** — `.git` lives here, not in a parent directory such as `magic-door/`.
- Run **`git status`**, **`git commit`**, and **`git push`** from **`website/`** (or use paths relative to this root). Sibling or parent folders may hold non-repo files (e.g. `business/marketing/`).
- **Vercel** deploys from this repo; changes outside `website/` are not part of the deploy unless you use a different setup.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

---

## Local Development

### 1. Clone the repo and enter this directory

```bash
git clone <repo-url>
cd <repo-name>   # repo root = this website folder (same directory as package.json)
```

If you keep the site inside a larger tree (e.g. `magic-door/website`), **`cd`** into the folder that contains **`.git`** — that is the directory this README describes.

### 2. Set up local environment variables

Copy the example below into a new file named `.env.local` in the `website/` directory.  
This file is **git-ignored** and must be created manually on each machine.

```bash
# website/.env.local
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

> **Note:** Without this file, the trial registration form will POST to the production backend (`https://app.magicdoor.cc`) instead of your local server.

### 3. Start the dev server

```bash
./start_dev.sh
```

`start_dev.sh` will:
1. Check whether `node_modules/` exists — if not, run `npm install` automatically
2. Detect if `package.json` has changed since the last install and reinstall if needed
3. Load environment variables from `.env.local`
4. Start the Next.js dev server at **http://localhost:3000**

You do **not** need to run `npm install` manually before the first run.

---

## Project Structure

```
website/
├── components/       # Shared React components (Header, Footer, Layout…)
├── lib/
│   └── posts.js      # Markdown blog post helpers (getAllPosts, getPostBySlug)
├── pages/            # Next.js pages (file-based routing)
│   ├── index.jsx     # Homepage
│   ├── blog/         # Blog index + individual post pages
│   ├── guides/       # User guide pages (IT admin, subscription, end-user)
│   ├── faq.jsx
│   ├── pricing.jsx
│   ├── trial.jsx
│   └── terms.jsx
├── posts/            # Markdown blog post files (one .md per article)
├── public/           # Static assets (images, SVGs, PDF)
├── styles/           # Global CSS
├── utils/            # Utility functions (e.g. WhatsApp link generator)
├── .env.local        # Local env vars — git-ignored, create manually
├── .env.production   # Production env vars — committed, used by Vercel
├── start_dev.sh      # Dev startup script (auto-installs deps)
├── BLOG.md           # Guide: how to write and publish a blog post
├── FAQ.md            # Source of truth for FAQ content
└── TERMS.md          # Source of truth for Terms content
```

---

## Writing a Blog Post

See **[BLOG.md](./BLOG.md)** for the full guide.

**Quick version:**
1. Create `posts/YYYY-MM-your-slug.md` with frontmatter (`title`, `date`, `excerpt`)
2. Write the body in Markdown (tables, bold, links all supported)
3. `git push` → Vercel rebuilds → post is live at `/blog/your-slug`

---

## Deployment

Pushes to `main` trigger an automatic Vercel deployment.  
Production URL: **https://www.magicdoor.cc**

Environment variables for production are set in Vercel's project dashboard (not in `.env.production` for secrets).

---

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework with static export |
| `tailwindcss` | Utility-first CSS |
| `@tailwindcss/typography` | Prose styling for blog post bodies |
| `gray-matter` | Parse frontmatter from `.md` files |
| `remark` + `remark-html` + `remark-gfm` | Convert Markdown to HTML (with table support) |
