import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/@/components/ui/card'
import { cn } from '@/libs/utils'

export const AverageScoreCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('flex flex-row max-md:items-center md:flex-col md:justify-between', className)}>
      <CardHeader className="max-md:order-2 max-md:pl-0">
        <CardTitle>Average Score</CardTitle>
        <CardDescription>Average of all scores in all exams</CardDescription>
      </CardHeader>
      <CardContent className="max-md:p-5">
        <span className="text-2xl font-semibold">78.5</span>
      </CardContent>
    </Card>
  )
}
