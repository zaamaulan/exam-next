import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    username: string
    role: string
    majorId: string | null
  }
  interface Session {
    user: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    username: string
    role: string
    majorId: string | null
  }
}
