/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans TC"', '"PingFang TC"', '"Microsoft JhengHei"', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#4f46e5',
          primaryDark: '#312e81',
          primarySoft: '#e0e7ff',
          bg: '#f8fafc',
          text: '#111827',
          muted: '#6b7280',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
