import { NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'

export const POST = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const id = (await params).id
    const body: Record<string, string> = await req.json()
    // const result = await prisma.exam.update({ where: { id }, data: body })
    const questions = await prisma.question.findMany({
      where: {
        examId: id,
      },
      select: {
        id: true,
        correctAnswer: true,
      },
    })
    // const answers = Object.entries(body).map(([questionId, answer]) => {
    //   const question = questions.find((q) => q.id === questionId)
    //   const isCorrect = question?.correctAnswer === answer
    //   return { questionId, answer, isCorrect }
    // })
    let score = 0
    console.log(body)

    questions.forEach((question) => {
      const userAnswer = body[question.id]
      console.log(userAnswer[0])
      const correctAnswer = question.correctAnswer

      if (userAnswer === correctAnswer) {
        score++
      }
    })

    const finalScore = (score / questions.length) * 100

    return NextResponse.json({
      status: 'success',
      message: 'Exam submitted successfully',
      data: finalScore,
    })
  } catch (error) {
    console.log('Failed to submit exam', error)
    return NextResponse.json({
      status: 'error',
      message: 'Failed to submit exam',
      error,
    })
  }
}
