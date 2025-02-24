type Role = 'STUDENT' | 'TEACHER' | 'ADMIN'

type User = {
  id: string
  name: string
  username: string
  password: string
  role: Role
  majorId?: string
}
