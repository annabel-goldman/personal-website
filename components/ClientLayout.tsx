'use client'

import React from 'react'
import StarTrail from './StarTrail'
import CustomCursor from './CustomCursor'
import Navigation from './Navigation'
import { useCursor } from '@/hooks/useCursor'

/**
 * ClientLayout Component
 * Client-side wrapper for interactive elements that require state
 * This allows the root layout to remain a server component
 */
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { cursorEnabled, toggleCursor } = useCursor(true)

  return (
    <body className={cursorEnabled ? 'custom-cursor-enabled' : ''}>
      <CustomCursor isEnabled={cursorEnabled} />
      <StarTrail isEnabled={cursorEnabled} />
      <Navigation cursorEnabled={cursorEnabled} onCursorToggle={toggleCursor} />
      {children}
    </body>
  )
}

