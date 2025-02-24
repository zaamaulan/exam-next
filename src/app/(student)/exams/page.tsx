import React from 'react'

import { ExamList } from '@/components/organisms/exam-list'
import { MainTemplate } from '@/components/templates/main-template'

const ExamsPage = () => {
  return (
    <MainTemplate topbar={{ title: 'Exams' }}>
      <ExamList />
    </MainTemplate>
  )
}

export default ExamsPage
