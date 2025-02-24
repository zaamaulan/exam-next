import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getExamStatus = (startTime: Date | string, endTime: Date | string): ExamStatus => {
  const now = new Date()
  let status: ExamStatus

  switch (true) {
    case endTime < now:
      status = 'COMPLETED'
      break
    case startTime > now:
      status = 'UPCOMING'
      break
    default:
      status = 'ONGOING'
  }
  return status
}

export const parseQueryParams = (req: Request) => {
  const { searchParams } = new URL(req.url)
  return Object.fromEntries(searchParams.entries())
}
