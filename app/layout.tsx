'use client'
import React, { useState } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import StarTrail from '../components/StarTrail'
import CustomCursor from '../components/CustomCursor'
import Navigation from '../components/Navigation'

// export const metadata: Metadata = {
//   title: 'Annabel Goldman',
//   description: 'Software Engineer & Developer Portfolio',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [cursorEnabled, setCursorEnabled] = useState(true)

  const toggleCursor = () => {
    setCursorEnabled(!cursorEnabled)
  }

  return (
    <html lang="en">
      <head>
        <title>Annabel Goldman</title>
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