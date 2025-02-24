import { NextRequest, NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone()
  console.log('Query Params:', url.searchParams.toString())

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/exams', '/exams/:id'],
}
