type ExamStatus = 'UPCOMING' | 'ONGOING' | 'COMPLETED' | 'RESULT_AVAILABLE'

type Exam = {
  id: string
  title: string
  description: string
  duration: number
  startTime: Date
  endTime: Date
  status: ExamStatus
  teacherId: User['id']
  subjectId: Subject['id']
  publishedAt: Date
  createdAt: Date
  updatedAt: Date

  teacher: User
  subject: Subject
  questions: Question[]
}

type Question = {
  id: string
  examId: Exam['id']
  content: string
  options: string[]
  correctAnswer: string
}
