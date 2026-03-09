# 如何新增網誌文章

## 快速步驟

1. 在 `website/posts/` 目錄下建立一個新的 `.md` 檔案
2. 以 `YYYY-MM-slug.md` 格式命名，例如：`2026-04-ai-tips.md`
3. 在檔案頂部填寫 frontmatter，再寫正文
4. 儲存後 `git push`，Vercel 自動重新部署，文章即時上線

---

## 檔案格式範例

```markdown
---
title: 老師必學的 5 個 AI 提示技巧
date: 2026-04-15
excerpt: 一句話介紹這篇文章，會顯示在網誌列表頁。
---

## 第一個小標題

正文內容用 Markdown 格式撰寫。支援 **粗體**、*斜體*、
[連結](https://www.magicdoor.cc)、清單等。

## 第二個小標題

- 項目一
- 項目二
- 項目三
```

---

## Frontmatter 欄位說明

| 欄位      | 必填 | 說明                                     |
|-----------|------|------------------------------------------|
| `title`   | ✅   | 文章標題，顯示於列表和文章頁             |
| `date`    | ✅   | 發佈日期（`YYYY-MM-DD`），用於排序       |
| `excerpt` | ✅   | 文章摘要，顯示於列表卡片和 SEO 描述     |

---

## 命名規則

- 檔名即為文章的 URL slug
- 例如 `2026-04-ai-tips.md` → 網址為 `/blog/2026-04-ai-tips`
- 建議格式：`YYYY-MM-關鍵字.md`（英文 slug，中文不含空格）

---

## 常用 Markdown 語法

```markdown
## 大標題（h2）
### 小標題（h3）

**粗體文字**
*斜體文字*

- 無序清單項目
- 項目二

1. 有序清單
2. 第二項

[連結文字](https://example.com)

> 引用文字區塊
```

---

## 新增後確認

部署完成後，文章會出現在：
- 列表頁：`https://www.magicdoor.cc/blog`
- 文章頁：`https://www.magicdoor.cc/blog/你的-slug`
