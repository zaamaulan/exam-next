import { ExamHistory } from '@/components/molecules/exam-history'
import { ExamPerformanceChart } from '@/components/molecules/exam-performance-chart'
import { OngoingExamCard } from '@/components/molecules/ongoing-exam-card'
import { StatCard } from '@/components/molecules/stat-card'
import { UpcomingExam } from '@/components/molecules/upcoming-exam'
import { MainTemplate } from '@/components/templates/main-template'
import { ChartHeightProvider } from '@/contexts/chart-height-context'
import { cn } from '@/libs/utils'

const exam = {
  id: 'exam_123',
  name: 'Ujian Matematika Semester 2',
  subject: 'Matematika',
  remainingTime: '25 minutes',
  currentScore: 78.5,
  progress: 65,
}

const Home = () => {
  const isTheExamOngoing = true

  return (
    <MainTemplate topbar={{ title: 'Welcome back, Reza!' }} className="flex flex-col gap-5">
      <div className={cn('grid grid-cols-1 gap-3 md:gap-5', isTheExamOngoing ? 'md:grid-cols-9' : 'md:grid-cols-4')}>
        {isTheExamOngoing && <OngoingExamCard className="md:col-span-3" {...exam} />}
        <StatCard
          title="Average Score"
          description="Average of all scores in all exams"
          value={78.5}
          variant={isTheExamOngoing ? 'default' : 'secondary'}
          className={cn(isTheExamOngoing && 'md:col-span-2')}
        />
        <StatCard
          title="Best Score"
          description="Subjects with the best score"
          value={78.5}
          variant={isTheExamOngoing ? 'default' : 'secondary'}
          className={cn(isTheExamOngoing && 'md:col-span-2')}
        />
        <StatCard
          title="Worst Score"
          description="Subjects with the worst score"
          value={78.5}
          variant={isTheExamOngoing ? 'default' : 'secondary'}
          className={cn(isTheExamOngoing && 'md:col-span-2')}
        />
      </div>
      <ChartHeightProvider>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
          <ExamPerformanceChart className="md:col-span-2" />
          <UpcomingExam />
        </div>
      </ChartHeightProvider>
      <ExamHistory />
    </MainTemplate>
  )
}

export default Home
