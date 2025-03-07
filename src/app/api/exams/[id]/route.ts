import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { NextResponse } from 'next/server'

import { prisma } from '@/libs/prisma'
import { examSchema } from '@/libs/schema'
import { parseQueryParams } from '@/libs/utils'

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const id = (await params).id
    const query = parseQueryParams(request)

    const result = await prisma.exam.findUnique({
      where: { id },
      include:
        query.include === 'true'
          ? {
              questions: {
                include: {
                  options: true,
                },
              },
              subject: true,
              teacher: true,
            }
          : undefined,
    })
    return NextResponse.json({
      status: 'success',
      message: 'Exam retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log('Failed to retrieve exam', error)
    return NextResponse.json({
      status: 'error',
      message: 'Failed to retrieve exam',
      error,
    })
  }
}
export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const id = (await params).id
    const body = await request.json()
    const parsed = examSchema.optional().safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() })
    }

    const result = await prisma.exam.update({
      where: { id },
      data: body,
    })
    return NextResponse.json({
      status: 'success',
      message: 'Exam updated successfully',
      data: result,
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json({ error: 'Exam already exists' })
      }
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Exam not found' })
      }
    }
    console.log('Failed to update exam', error)
    return NextResponse.json({
      status: 'error',
      message: 'Failed to update exam',
      error,
    })
  }
}
export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const id = (await params).id
    const result = await prisma.exam.delete({ where: { id } })
    return NextResponse.json({
      status: 'success',
      message: 'Exam deleted successfully',
      data: result,
    })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json({ error: 'Exam not found' })
      }
    }
    console.log('Failed to delete exam', error)
    return NextResponse.json({
      status: 'error',
      message: 'Failed to delete exam',
      error,
    })
  }
}
