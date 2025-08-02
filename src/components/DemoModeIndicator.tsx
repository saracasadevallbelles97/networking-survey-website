'use client'

import { useState, useEffect } from 'react'

export default function DemoModeIndicator() {
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const demoMode = !process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    setIsDemoMode(demoMode)
  }, [])

  // Don't render anything until the component is mounted on the client
  if (!mounted) return null
  if (!isDemoMode) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 px-3 py-2 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Demo Mode</span>
        </div>
        <p className="text-xs mt-1 opacity-75">
          Data not being saved to database
        </p>
      </div>
    </div>
  )
} 