import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© 2026 10botics. 版權所有。</p>
        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="/guides/it-admin" prefetch={false} className="hover:text-gray-700 transition-colors">IT管理指南</Link>
          <Link href="/guides/subscription" prefetch={false} className="hover:text-gray-700 transition-colors">訂閱管理</Link>
          <Link href="/guides/end-user" prefetch={false} className="hover:text-gray-700 transition-colors">使用說明</Link>
          <Link href="/faq" className="hover:text-gray-700 transition-colors">常見問題</Link>
          <Link href="/terms" className="hover:text-gray-700 transition-colors">服務條款</Link>
        </nav>
      </div>
    </footer>
  )
}
