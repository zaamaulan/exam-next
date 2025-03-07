'use client'

import { useSession } from 'next-auth/react'
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

const studentLinks = [
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
const adminLinks = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: DashboardIcon,
  },
  {
    title: 'Recap',
    url: '/admin/recap',
    icon: DashboardIcon,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: SettingsIcon,
  },
]

export const NavMain = () => {
  const pathname = usePathname()
  const { data: session } = useSession()

  const isAdmin = session?.user.role === 'ADMIN'

  return (
    <SidebarGroup>
      <SidebarGroupLabel>General</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {(isAdmin ? adminLinks : studentLinks).map((item) => {
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
