type Subject = {
  id: string
  name: string
  majorId?: Major['id']
  exams: Exam[]
  createdAt: Date
  updatedAt: Date
}
