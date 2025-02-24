'use client'

import { Fragment } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useChartHeight } from '@/contexts/chart-height-context'
import { useElementSize } from '@/hooks/use-element-size'

const items = [
  { id: 1, subject: 'Mathematics', date: 'March 10, 2025' },
  { id: 2, subject: 'Physics', date: 'March 15, 2025' },
  { id: 3, subject: 'Chemistry', date: 'March 20, 2025' },
  { id: 4, subject: 'Biology', date: 'March 25, 2025' },
  { id: 5, subject: 'English', date: 'March 22, 2025' },
  { id: 6, subject: 'History', date: 'March 27, 2025' },
  { id: 7, subject: 'Geography', date: 'March 29, 2025' },
  { id: 8, subject: 'Computer Science', date: 'March 30, 2025' },
  { id: 9, subject: 'Psychology', date: 'March 31, 2025' },
  { id: 10, subject: 'Sociology', date: 'April 1, 2025' },
  { id: 11, subject: 'Economics', date: 'April 2, 2025' },
  { id: 12, subject: 'Political Science', date: 'April 3, 2025' },
  { id: 13, subject: 'Philosophy', date: 'April 4, 2025' },
  { id: 14, subject: 'Linguistics', date: 'April 5, 2025' },
  { id: 15, subject: 'Anthropology', date: 'April 6, 2025' },
  { id: 16, subject: 'Archaeology', date: 'April 7, 2025' },
  { id: 17, subject: 'Art History', date: 'April 8, 2025' },
  { id: 18, subject: 'Music Theory', date: 'April 9, 2025' },
]

export const UpcomingExam = () => {
  const { height } = useChartHeight()
  const { ref: headerRef, height: headerHeight } = useElementSize('border')

  return (
    <Card className="max-md:border-none" style={{ height: height }}>
      <CardHeader className="max-md:px-0" ref={headerRef}>
        <CardTitle>Upcoming Exams</CardTitle>
        <CardDescription>Stay prepared for your upcoming tests!</CardDescription>
      </CardHeader>
      <CardContent className="max-md:px-0">
        <ScrollArea
          style={{ height: height - headerHeight - 2 }} // 2px for border (top and bottom)
          withoutScrollbars
        >
          {items.length > 0 ? (
            <ul className="space-y-3">
              {items.map((item, index) => (
                <Fragment key={item.id}>
                  <li className="inline-flex items-center gap-3">
                    <div className="space-y-0.5">
                      <p className="text-sm">Tue, 11 Jul</p>
                      <p className="text-sm font-semibold">08:00 pm</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="group text-sm font-semibold">{item.subject}</p>
                      <p className="text-sm text-muted-foreground">3 hours to go</p>
                    </div>
                  </li>
                  {index < items.length - 1 && <Separator />}
                </Fragment>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No upcoming exams.</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
