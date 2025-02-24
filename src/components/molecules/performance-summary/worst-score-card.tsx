import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/@/components/ui/card'
import { cn } from '@/libs/utils'

export const WorstScoreCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn('flex flex-row max-md:items-center md:flex-col md:justify-between', className)}>
      <CardHeader className="max-md:order-2 max-md:pl-0">
        <CardTitle>Worst Score</CardTitle>
        <CardDescription>Subjects with the worst score</CardDescription>
      </CardHeader>
      <CardContent className="max-md:p-5">
        <span className="text-2xl font-semibold">53.1</span>
      </CardContent>
    </Card>
  )
}
