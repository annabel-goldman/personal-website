'use client'
import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import StarTrail from '../components/StarTrail'
import CustomCursor from '../components/CustomCursor'
import Navigation from '../components/Navigation'
import { useCursor } from '@/hooks/useCursor'
import { PERSONAL_INFO } from '@/content'

// export const metadata: Metadata = {
//   title: 'Annabel Goldman',
//   description: 'Software Engineer & Developer Portfolio',
// }

/**
 * Root Layout Component
 * Main layout wrapper with global navigation and cursor functionality
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { cursorEnabled, toggleCursor } = useCursor(true)

  return (
    <html lang="en">
      <head>
        <title>{PERSONAL_INFO.COPYRIGHT_NAME}</title>
        <meta name="description" content="Software Engineer & Developer Portfolio" />
        <link rel="icon" href="/image.png" type="image/png" />
      </head>
      <body className={cursorEnabled ? 'custom-cursor-enabled' : ''}>
        <CustomCursor isEnabled={cursorEnabled} />
        <StarTrail isEnabled={cursorEnabled} />
        <Navigation cursorEnabled={cursorEnabled} onCursorToggle={toggleCursor} />
        {children}
      </body>
    </html>
  )
} 