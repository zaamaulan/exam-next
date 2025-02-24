import React from 'react'

import { ExamList } from '@/components/organisms/exam-list'
import { MainTemplate } from '@/components/templates/main-template'

const ResultsPage = () => {
  return (
    <MainTemplate topbar={{ title: 'Results' }}>
      <ExamList />
    </MainTemplate>
  )
}

export default ResultsPage
