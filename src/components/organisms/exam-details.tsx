'use client'

import Link from 'next/link'
import React from 'react'

import { MainTemplate } from '@/components/templates/main-template'
import { Skeleton } from '@/components/ui/skeleton'
import { useExam } from '@/hooks/use-exam'
import { cn } from '@/libs/utils'

import { Badge } from '../ui/badge'
import { Button, buttonVariants } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { BookIcon, CalendarIcon, FileIcon, MortarboardIcon, TimerIcon, UserMultipleIcon } from '../ui/icons'
import { Separator } from '../ui/separator'

interface ExamDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  id: Exam['id']
}

export const ExamDetails = ({ id, className, ...props }: ExamDetailsProps) => {
  const { data: exam, isLoading } = useExam({ id, include: true })
  console.log(exam)

  return (
    <MainTemplate
    // topbar={{
    //   title: <span>{exam?.title ? exam.title : <Skeleton className="h-6 w-60" />}</span>,
    // }}
    >
      <div className={cn('flex flex-col gap-5', className)} {...props}>
        <div className="space-y-3">
          {exam?.title ? (
            <h1 className="text-2xl font-semibold capitalize">{exam.title}</h1>
          ) : (
            <Skeleton className="h-6 w-60" />
          )}
          <Badge>ONGOING</Badge>
        </div>
        <Separator />
        <div className="space-y-3">
          <h2 className="font-medium">Details</h2>
          <div className="flex flex-col gap-3 md:w-3/4">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex gap-2">
                <BookIcon className="mt-0.5 size-4 flex-shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Subject</p>
              </div>
              <Link href={`#`} className="text-sm underline-offset-4 hover:underline">
                Mathematics
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex gap-2">
                <TimerIcon className="mt-0.5 size-4 flex-shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Duration</p>
              </div>
              <p className="text-sm">{exam?.duration} (mins)</p>
            </div>
            {exam?.startTime && (
              <div className="grid grid-cols-2 gap-5">
                <div className="flex gap-2">
                  <CalendarIcon className="mt-0.5 size-4 flex-shrink-0 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Start date</p>
                </div>
                <p className="text-sm">
                  {Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                    new Date(exam?.startTime),
                  )}
                </p>
              </div>
            )}
            {exam?.teacher && (
              <div className="grid grid-cols-2 gap-5">
                <div className="flex gap-2">
                  <UserMultipleIcon className="mt-0.5 size-4 flex-shrink-0 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Created by</p>
                </div>
                <Link href={`#`} className="text-sm underline-offset-4 hover:underline">
                  {exam?.teacher.name}
                </Link>
              </div>
            )}
            <div className="grid grid-cols-2 gap-5">
              <div className="flex gap-2">
                <MortarboardIcon className="mt-0.5 size-4 flex-shrink-0 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">For majors</p>
              </div>
              <p className="text-sm">Rekayasa Perangkat Lunak, Teknologi Informasi</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <FileIcon className="size-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Description</p>
            </div>
            <p className="max-w-2xl text-sm">{exam?.description}</p>
          </div>
        </div>
        {!isLoading && (
          <div className="flex flex-col gap-1.5">
            <Link href={`/exams/${id}/form`} className={cn('w-full md:w-fit', buttonVariants())}>
              Start Exam
            </Link>
            <Link href={'/exams'} className={cn('w-full md:hidden', buttonVariants({ variant: 'outline' }))}>
              Back to Exams List
            </Link>
          </div>
        )}
      </div>
    </MainTemplate>
  )
}
