import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/pricing', label: '方案與收費' },
  { href: '/faq', label: '常見問題' },
  { href: '/terms', label: '服務條款' },
]

const guideLinks = [
  { href: '/guides', label: '用戶專區首頁' },
  { href: '/guides/it-admin', label: 'IT管理指南' },
  { href: '/guides/subscription', label: '訂閱管理' },
  { href: '/guides/end-user', label: '使用說明' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo_wide.svg" alt="Magic Door" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gray-900 transition-colors">
              {link.label}
            </Link>
          ))}

          <div 
            className="relative group py-4"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              用戶專區
              <svg className={`w-4 h-4 transition-transform ${guidesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`absolute top-full right-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 transition-all ${guidesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              {guideLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  prefetch={false}
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <button
          className="md:hidden text-gray-500 hover:text-gray-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="選單"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-gray-900">
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-1"></div>
            <div className="font-medium text-gray-400 uppercase tracking-widest text-[10px] mb-1">用戶專區</div>
            {guideLinks.map((link) => (
              <Link key={link.href} href={link.href} prefetch={false} onClick={() => setMenuOpen(false)} className="hover:text-gray-900 pl-2">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
