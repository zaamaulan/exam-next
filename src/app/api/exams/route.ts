import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'
import { examSchema } from '@/libs/schema'
import { getExamStatus, parseQueryParams } from '@/libs/utils'

export const GET = async (request: Request) => {
  try {
    const query = parseQueryParams(request)

    const result = await prisma.exam.findMany({
      where: {
        title: {
          contains: query.title,
          mode: 'insensitive',
        },
      },
    })

    const examsWithStatus = result.map((exam) => {
      if (!exam.startTime || !exam.endTime) return

      const status = getExamStatus(exam.startTime, exam.endTime)

      return {
        ...exam,
        status,
      }
    })

    if (query.status) {
      const filteredExams = examsWithStatus.filter((exam) => exam?.status === query.status.toUpperCase())

      return NextResponse.json({
        status: 'success',
        message: 'Exams retrieved successfully',
        data: filteredExams,
      })
    }

    return NextResponse.json({
      status: 'success',
      message: 'Exams retrieved successfully',
      data: examsWithStatus,
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to retrieve exams',
      error,
    })
  }
}
export const POST = async (req: Request) => {
  try {
    const body = await req.json()
    const parsed = examSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() })
    }

    const result = await prisma.exam.create({ data: body })
    return NextResponse.json({
      status: 'success',
      message: 'Exam created successfully',
      data: result,
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json({ error: 'Exam already exists' })
      }
    }
    return NextResponse.json({
      status: 'error',
      message: 'Failed to create exam',
      error,
    })
  }
}
