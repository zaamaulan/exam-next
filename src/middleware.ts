import withAuth from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const url = req.nextUrl
    const { token } = req.nextauth

    if (!!token && url.pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }

    if (token?.role === 'ADMIN' && !url.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }
    if (token?.role === 'STUDENT' && url.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/', req.nextUrl))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/auth/signin',
    },
  },
)

export const config = {
  matcher: '/((?!api|_next/static|_next/image|icon.svg).*)',
}
