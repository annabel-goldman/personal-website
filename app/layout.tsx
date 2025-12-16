import React from 'react'
import type { Metadata } from 'next'
import '@/styles/globals.css'
import ClientLayout from '@/components/ClientLayout'

/**
 * Next.js Metadata Configuration
 * Using the App Router metadata API for better SEO
 */
export const metadata: Metadata = {
  title: 'Annabel Goldman',
  description: 'Software Engineer & Developer Portfolio',
  icons: {
    icon: '/cursor-icon.png',
  },
}

/**
 * Root Layout Component
 * Server component that wraps the entire application
 * Client-side interactivity is handled by ClientLayout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClientLayout>
        {children}
      </ClientLayout>
    </html>
  )
}
