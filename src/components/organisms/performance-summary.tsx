import React from 'react'

import { AverageScoreCard } from '@/components/molecules/performance-summary/average-score-card'
import { BestScoreCard } from '@/components/molecules/performance-summary/best-score-card'
import { WorstScoreCard } from '@/components/molecules/performance-summary/worst-score-card'

export const PerformanceSummary = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:col-span-2 md:grid-cols-3 md:gap-5">
      <AverageScoreCard />
      <BestScoreCard />
      <WorstScoreCard />
    </div>
  )
}
