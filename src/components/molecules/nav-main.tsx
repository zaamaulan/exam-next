'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { DashboardIcon, DocumentValidationIcon, LicenseDraftIcon, SettingsIcon } from '@/components/ui/icons'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/libs/utils'

const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: DashboardIcon,
  },
  {
    title: 'Exams',
    url: '/exams',
    icon: LicenseDraftIcon,
  },
  {
    title: 'Results',
    url: '/results',
    icon: DocumentValidationIcon,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: SettingsIcon,
  },
]

export const NavMain = () => {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className={cn('!h-9 px-4 py-2', active && 'bg-muted')}>
                    <item.icon className="text-foreground" />
                    <span className="">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
