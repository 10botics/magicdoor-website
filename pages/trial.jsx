import { useState } from 'react'
import Layout from '../components/Layout'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://app.magicdoor.cc'

const BLOCKED_DOMAINS = ['gmail.com', 'googlemail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'live.com']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getEmailDomain(email) {
  const parts = email.split('@')
  return parts.length === 2 ? parts[1].toLowerCase() : ''
}

export default function TrialPage() {
  const [email, setEmail] = useState('')
  const [checks, setChecks] = useState([false, false])
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [emailError, setEmailError] = useState('')

  const domain = getEmailDomain(email)
  const isBlockedLocally = EMAIL_RE.test(email) && BLOCKED_DOMAINS.includes(domain)
  const allChecked = checks.every(Boolean)
  const emailValid = EMAIL_RE.test(email) && !isBlockedLocally
  const canSubmit = emailValid && allChecked && status !== 'loading'

  function handleEmailChange(e) {
    const val = e.target.value
    setEmail(val)
    setEmailError('')
    const d = getEmailDomain(val)
    if (val.length > 0 && !EMAIL_RE.test(val)) {
      setEmailError('請輸入有效的電郵地址。')
    } else if (EMAIL_RE.test(val) && BLOCKED_DOMAINS.includes(d)) {
      setEmailError('Gmail 及個人電郵帳號不受支援，請使用學校電郵。')
    }
  }

  function toggleCheck(i) {
    setChecks(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${BACKEND_URL}/api/request-trial`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
      } else if (data.status === 'domain_not_allowed') {
        setStatus('error')
        setErrorMsg('此電郵域名不受支援，請使用學校電郵帳號。')
      } else {
        setStatus('error')
        setErrorMsg(data.error || '發送失敗，請稍後再試。')
      }
    } catch {
      setStatus('error')
      setErrorMsg('網絡錯誤，請稍後再試。')
    }
  }

  if (status === 'success') {
    return (
      <Layout>
        <div className="max-w-lg mx-auto px-6 py-24 text-center">
          <div className="text-5xl mb-6">📬</div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">請檢查您的電郵信箱</h1>
          <p className="text-gray-500 leading-relaxed">
            我們已將 Magic Door 的安裝連結發送至<br />
            <span className="font-medium text-gray-800">{email}</span>
          </p>
          <p className="text-gray-400 text-sm mt-6">
            如未收到，請檢查垃圾郵件資料夾，或聯絡我們的支援團隊。
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">免費試用 Magic Door</h1>
          <p className="text-gray-500 leading-relaxed">
            填寫您的學校電郵，我們將向您發送試用連結。
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-8">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              學校電郵地址
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="yourname@school.edu.hk"
              required
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-colors ${
                isBlockedLocally
                  ? 'border-red-300 focus:ring-red-200 bg-red-50'
                  : 'border-gray-200 focus:ring-gray-200 bg-white'
              }`}
            />
            {emailError && (
              <p className="mt-2 text-sm text-red-500">{emailError}</p>
            )}
          </div>

          {/* Declarations */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-700">聲明</p>
            {[
              '本人為香港教育局認可的中學或小學教學人員',
              '本人承諾不會將 Magic Door 分享予機構以外的人士',
            ].map((label, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={checks[i]}
                    onChange={() => toggleCheck(i)}
                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-400 cursor-pointer"
                  />
                </div>
                <span className={`text-sm leading-relaxed ${checks[i] ? 'text-gray-900' : 'text-gray-500'}`}>
                  {label}
                </span>
              </label>
            ))}
          </div>

          {/* Error message */}
          {status === 'error' && errorMsg && (
            <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
              {errorMsg}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full py-3 rounded-xl text-sm font-medium transition-all ${
              canSubmit
                ? 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {status === 'loading' ? '發送中…' : '發送安裝連結'}
          </button>

          <p className="text-xs text-gray-400 text-center">
            提交即表示您同意我們的{' '}
            <a href="/terms" className="underline hover:text-gray-600">服務條款</a>。
          </p>
        </form>
      </div>
    </Layout>
  )
}
