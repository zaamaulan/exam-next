import React from 'react'

import { Topbar, TopbarProps } from '@/components/organisms/topbar'
import { cn } from '@/libs/utils'

interface MainTemplateProps {
  children: React.ReactNode
  topbar?: TopbarProps
  className?: string
}

export const MainTemplate = ({ children, topbar, className }: MainTemplateProps) => {
  return (
    <div className="m-3 flex flex-col gap-4 md:m-5">
      {topbar && <Topbar {...topbar} />}
      <main className={cn(className)}>{children}</main>
    </div>
  )
}
