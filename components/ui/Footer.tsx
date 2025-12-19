import React from 'react'
import { SITE_INFO, UI_LABELS } from '@/content/shared'

/**
 * Footer Component
 * Simple footer with copyright information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-white text-sm text-center">
          {UI_LABELS.FOOTER_COPYRIGHT.replace('{year}', currentYear.toString()).replace('{name}', SITE_INFO.COPYRIGHT_NAME)}
        </p>
      </div>
    </footer>
  )
}

