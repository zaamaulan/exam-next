import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/libs/utils'

interface StatCardProps {
  title: string
  description?: string
  value: number | string
  className?: string
  variant?: 'default' | 'secondary'
}

export const StatCard = ({ className, title, value, description, variant = 'default' }: StatCardProps) => {
  return (
    <Card
      className={cn(
        'flex flex-row max-md:items-center md:flex-col md:justify-between',
        variant === 'secondary' && '!flex-row items-center !justify-normal',
        className,
      )}
    >
      <CardHeader className={cn('max-md:order-2 max-md:pl-0', variant === 'secondary' && 'order-2 pl-0')}>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn('max-md:p-5', variant === 'secondary' && 'p-5')}>
        <span className="text-2xl font-semibold">{value}</span>
      </CardContent>
    </Card>
  )
}
