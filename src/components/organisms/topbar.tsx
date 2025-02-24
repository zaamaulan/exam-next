'use client'

import { usePathname } from 'next/navigation'
import { Fragment } from 'react'

import { Search } from '@/components/molecules/search'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from '@/libs/utils'

import { NotificationSheet } from './notification-sheet'

export interface TopbarProps {
  title: string | React.ReactNode
  description?: string | React.ReactNode
  badge?: React.ReactNode
  className?: string
}

export const Topbar = ({ title, description, badge, className }: TopbarProps) => {
  const pathname = usePathname()
  const breadcrumbItems = pathname.split('/').slice(1)

  return (
    <header className={cn('flex flex-wrap-reverse items-center justify-between gap-8 md:gap-4', className)}>
      <div className="space-y-2">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((path, index) => {
              const active = index === breadcrumbItems.length - 1
              const Comp = active ? BreadcrumbPage : BreadcrumbLink

              return (
                <Fragment key={path}>
                  <BreadcrumbItem>
                    <Comp href={active ? undefined : `/${path}`} className="font-medium capitalize">
                      {path === '' ? 'dashboard' : path}
                    </Comp>
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="inline-flex items-center gap-2">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold capitalize">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          {badge}
        </div>
      </div>
      <div className="flex gap-3 max-md:w-full max-md:justify-between">
        <Search placeholder="Search exams..." />
        <NotificationSheet />
      </div>
    </header>
  )
}
