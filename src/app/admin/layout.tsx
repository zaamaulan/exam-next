import { ReactNode } from 'react'

import { AppSidebar } from '@/components/organisms/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  )
}

export default AdminLayout
