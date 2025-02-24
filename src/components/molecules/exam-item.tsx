import { format } from 'date-fns'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarIcon } from '@/components/ui/icons'
import { cn } from '@/libs/utils'

interface ExamItemProps extends Exam {
  className?: string
}

export const ExamItem = ({ className, ...exam }: ExamItemProps) => {
  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <CardTitle>{exam.title}</CardTitle>
        <CardDescription>{exam.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1.5">
        <p className="text-sm">{exam.duration} minutes</p>
        <div className="inline-flex items-center gap-2">
          <CalendarIcon className="size-4 text-foreground" />
          <span className="text-sm">{format(new Date(exam.startTime), 'PPP')}</span>
        </div>
      </CardContent>
    </Card>
  )
}
