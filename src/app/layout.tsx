// import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/providers/auth-provider'
import { ReactQueryProvider } from '@/providers/react-query-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import './globals.css'

const geist = Geist({ subsets: ['latin'] })

// const satoshi = localFont({
//   src: './fonts/Satoshi-Variable.ttf',
// })

export const metadata: Metadata = {
  title: 'Exam Next App',
  description: 'Generated by create next app',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <AuthProvider>
          <NuqsAdapter>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              storageKey="theme"
              enableSystem
              disableTransitionOnChange
            >
              <ReactQueryProvider>
                {children}
                <Toaster />
              </ReactQueryProvider>
            </ThemeProvider>
          </NuqsAdapter>
        </AuthProvider>
      </body>
    </html>
  )
}
export default RootLayout
