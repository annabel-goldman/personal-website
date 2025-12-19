'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ASSETS } from '@/constants/config'
import { RESUME_CONTENT } from '@/content/resume'
import { downloadFile } from '@/utils/helpers'
import { DownloadIcon } from '@/components/ui/Icons'

/**
 * Resume Component
 * Interactive resume viewer with download functionality
 * Displays multi-page resume - stacked on mobile/tablet, side-by-side on desktop
 */
export default function Resume() {
  const [isHovered, setIsHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleDownload = () => {
    downloadFile(ASSETS.RESUME_PDF, 'Annabel_Goldman_Resume.pdf')
  }

  // Show download button on touch devices always, or on hover for desktop
  const showDownloadOverlay = isTouchDevice || isHovered

  return (
    <section className="resume-section w-full flex flex-col items-center justify-center pt-20 pb-8 px-4 bg-cream-50">
      {/* Resume Container - stacked on mobile/tablet, side-by-side on desktop */}
      <div 
        className="resume-container relative flex flex-col lg:flex-row items-center lg:items-start gap-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Resume Pages */}
        {ASSETS.RESUME_PAGES.map((pageSrc, index) => (
          <div 
            key={index}
            className="resume-page relative shadow-2xl bg-white"
          >
            <Image
              src={pageSrc}
              alt={`${RESUME_CONTENT.ALT_TEXT} - Page ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Desktop: Download Button Overlay on hover */}
        <div className={`hidden lg:flex absolute inset-0 bg-black/20 items-center justify-center transition-all duration-300 ${showDownloadOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            onClick={handleDownload}
            className="bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>{RESUME_CONTENT.DOWNLOAD_BUTTON}</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet: Always-visible download button at bottom */}
      <div className="lg:hidden mt-8">
        <button
          onClick={handleDownload}
          className="bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-700 active:bg-navy-900 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
        >
          <DownloadIcon className="w-5 h-5" />
          <span>{RESUME_CONTENT.DOWNLOAD_BUTTON}</span>
        </button>
      </div>
    </section>
  )
}
