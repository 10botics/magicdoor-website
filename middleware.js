import { NextResponse } from 'next/server'

export function middleware(req) {
  const { pathname } = req.nextUrl

  // Only protect guide pages
  if (pathname.startsWith('/guides')) {
    const authHeader = req.headers.get('authorization')

    if (!authHeader) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Magic Door Guides"',
        },
      })
    }

    const auth = authHeader.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    // Use environment variables for credentials on Vercel
    const validUser = process.env.BASIC_AUTH_USER || 'admin'
    const validPwd = process.env.BASIC_AUTH_PASSWORD || 'magicdoor2026'

    if (user !== validUser || pwd !== validPwd) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Magic Door Guides"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/guides/:path*'],
}
