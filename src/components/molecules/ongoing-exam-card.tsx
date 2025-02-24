import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/libs/utils'

interface OngoingExamCardProps {
  id: string
  name: string
  subject: string
  remainingTime: string
  currentScore: number
  progress: number
  className?: string
}

export const OngoingExamCard = ({ className, ...exam }: OngoingExamCardProps) => {
  if (!exam) return null

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <div className="relative">
          <span className="absolute -right-1 -top-1 size-3 animate-ping rounded-full border border-green-500 opacity-75"></span>
          <span className="absolute -right-1 -top-1 size-3 rounded-full bg-green-500"></span>
        </div>

        <CardTitle className="">{exam.name} </CardTitle>
        <CardDescription>
          {exam.subject} - Remaining time: {exam.remainingTime}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button size={'sm'}>Continue</Button>
      </CardContent>
    </Card>
  )
}
