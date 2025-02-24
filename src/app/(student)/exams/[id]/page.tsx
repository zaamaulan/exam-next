import React from 'react'

import { ExamDetails } from '@/components/organisms/exam-details'

const ExamDetailsPage = async ({ params }: { params: { id: string } }) => {
  const id = (await params).id

  return (
    <div className="mx-auto my-10 max-w-5xl">
      <ExamDetails id={id} />
    </div>
  )
}

export default ExamDetailsPage
