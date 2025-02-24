'use client'

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { useChartHeight } from '@/contexts/chart-height-context'
import { cn } from '@/libs/utils'

const chartData = [
  {
    examDate: 'Semester 1 - 2023',
    Mathematics: 98,
    BahasaIndonesia: 100,
    BahasaInggris: 95,
    IPA: 90,
  },
  {
    examDate: 'Semester 2 - 2023',
    Mathematics: 60,
    BahasaIndonesia: 70,
    BahasaInggris: 65,
    IPA: 75,
  },
  {
    examDate: 'Semester 1 - 2024',
    Mathematics: 80,
    BahasaIndonesia: 85,
    BahasaInggris: 80,
    IPA: 85,
  },
  {
    examDate: 'Semester 2 - 2024',
    Mathematics: 40,
    BahasaIndonesia: 50,
    BahasaInggris: 45,
    IPA: 55,
  },
  {
    examDate: 'Semester 1 - 2025',
    Mathematics: 70,
    BahasaIndonesia: 75,
    BahasaInggris: 70,
    IPA: 75,
  },
]

type Subject = 'Mathematics' | 'BahasaIndonesia' | 'BahasaInggris' | 'IPA'

const chartConfig: Record<Subject, { label: string; color: string }> = {
  Mathematics: { label: 'Mathematics', color: '#64de1a' },
  BahasaIndonesia: { label: 'Bahasa Indonesia', color: '#ff9800' },
  BahasaInggris: { label: 'Bahasa Inggris', color: '#0bb2ee' },
  IPA: { label: 'IPA', color: '#d32f2f' },
}

export const ExamPerformanceChart = ({ className }: { className?: string }) => {
  const { ref } = useChartHeight()

  return (
    <Card className={cn('max-md:border-none', className)} ref={ref}>
      <CardHeader className="max-md:px-0">
        <CardTitle>Exam Performance</CardTitle>
        <CardDescription>Track your score trends over time.</CardDescription>
      </CardHeader>
      <CardContent className="max-md:px-0">
        <ChartContainer className="max-h-[400px] min-h-[200px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="examDate"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            {(Object.keys(chartConfig) as Subject[]).map((subject) => (
              <Line
                key={subject}
                dataKey={subject}
                type="monotone"
                stroke={chartConfig[subject].color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="max-md:px-0">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Score improved by 7.4% this semester <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Your latest exam performance trends
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
