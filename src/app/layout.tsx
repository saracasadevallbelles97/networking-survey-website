import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DemoModeIndicator from '@/components/DemoModeIndicator'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Networking Survey - Help Us Improve Your Experience',
  description: 'Share your networking activities, challenges, and solutions to help us create better networking experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <DemoModeIndicator />
          {children}
        </div>
      </body>
    </html>
  )
} 