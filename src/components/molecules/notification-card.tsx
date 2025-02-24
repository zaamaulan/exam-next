import React from 'react'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/libs/utils'

interface NotificationCardProps {
  id: string
  title: string
  message: string
  isRead: boolean
  createdAt: Date
}

export const NotificationCard = ({ title, message, isRead }: NotificationCardProps) => {
  return (
    <Card className={cn('flex items-start justify-between border-none py-4', !isRead && '')}>
      <CardHeader className="p-0">
        {/* <div className='inline-flex items-center gap-2'>
          <span className={cn('size-1.5 rounded-full bg-foreground', isRead && 'hidden')}></span>
          <CardTitle>{title}</CardTitle>
        </div> */}
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">{message}</CardDescription>
      </CardHeader>
      <span className={cn('size-2 flex-shrink-0 rounded-full bg-foreground', isRead && 'hidden')}></span>
    </Card>
  )
}
