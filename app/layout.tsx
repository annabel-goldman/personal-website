import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import StarTrail from '../components/StarTrail'
import CustomCursor from '../components/CustomCursor'

export const metadata: Metadata = {
  title: 'Annabel Goldman',
  description: 'Software Engineer & Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image.png" type="image/png" />
      </head>
      <body>
        <CustomCursor />
        <StarTrail />
        {children}
      </body>
    </html>
  )
} 