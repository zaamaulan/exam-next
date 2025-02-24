import { useQuery } from '@tanstack/react-query'
import { useQueryState } from 'nuqs'

import { getExam, getExams } from '@/services/queries/exam-query'

export const useExams = () => {
  const [status] = useQueryState('status')
  const [title] = useQueryState('title')

  const queryParams = {
    ...(status ? { status } : {}),
    ...(title ? { title } : {}),
  }

  return useQuery<Exam[]>({
    queryKey: ['exams', queryParams],
    queryFn: () => getExams(queryParams),
  })
}
export const useExam = ({ id, include }: { id: string; include?: boolean }) => {
  return useQuery<Exam>({
    queryKey: ['exam', id, include],
    queryFn: () => getExam({ id, include }),
    enabled: !!id,
  })
}
