'use client'

import { RefObject, createContext, useContext } from 'react'

import { useElementSize } from '@/hooks/use-element-size'

interface ChartHeightContextType {
  ref: RefObject<HTMLDivElement | null>
  height: number
}

const ChartHeightContext = createContext<ChartHeightContextType | undefined>(undefined)

export function ChartHeightProvider({ children }: { children: React.ReactNode }) {
  const { ref, height } = useElementSize()

  return <ChartHeightContext.Provider value={{ ref, height }}>{children}</ChartHeightContext.Provider>
}

export function useChartHeight() {
  const context = useContext(ChartHeightContext)
  if (!context) {
    throw new Error('useChartHeight must be used within a ChartHeightProvider')
  }
  return context
}
