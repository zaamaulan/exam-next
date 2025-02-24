import { z } from 'zod'

export const signInSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters'),
})
export const examSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  duration: z.number().min(1, 'Duration is required'),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  teacherId: z.string().min(1, 'Teacher is required'),
  subjectId: z.string().min(1, 'Subject is required'),
})
