import { api } from '../api'

export const getExams = async (params?: Record<string, string>) => {
  try {
    return await api
      .get('/exams', {
        params,
      })
      .then((res) => res.data.data)
  } catch (error) {
    console.log('Failed to get exams', error)
    return error
  }
}
export const getExam = async ({ id, include }: { id: string; include?: boolean }) => {
  try {
    return await api.get(`/exams/${id}`, { params: { include } }).then((res) => res.data.data)
  } catch (error) {
    console.log('Failed to get exam', error)
    return error
  }
}
export const createExam = async (exam: Exam) => {
  try {
    return await api.post('/exams', exam).then((res) => res.data.data)
  } catch (error) {
    console.log('Failed to create exam', error)
    return error
  }
}
export const updateExam = async (id: string, exam: Exam) => {
  try {
    return await api.put(`/exams/${id}`, exam).then((res) => res.data.data)
  } catch (error) {
    console.log('Failed to update exam', error)
    return error
  }
}
export const deleteExam = async (id: string) => {
  try {
    return await api.delete(`/exams/${id}`).then((res) => res.data.data)
  } catch (error) {
    console.log('Failed to delete exam', error)
    return error
  }
}
