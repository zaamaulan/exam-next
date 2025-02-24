import React from 'react'

import { ExamForm } from '@/components/organisms/exam-form'
import { useExam } from '@/hooks/use-exam'

const ExamFormPage = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id

  return (
    <div className="mx-auto my-10 max-w-5xl">
      <ExamForm id={id} />
    </div>
  )
}

export default ExamFormPage
