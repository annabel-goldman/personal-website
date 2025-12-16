'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ASSETS } from '@/constants/config'
import { RESUME_CONTENT } from '@/content/resume'
import { downloadFile } from '@/utils/helpers'
import { DownloadIcon } from '@/components/ui/Icons'

/**
 * Resume Component
 * Interactive resume viewer with download functionality
 * Displays multi-page resume as a continuous scrollable document
 */
export default function Resume() {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    downloadFile(ASSETS.RESUME_PDF, 'Annabel_Goldman_Resume.pdf')
  }

  return (
    <section className="resume-section w-full flex items-center justify-center pt-20 pb-8 px-4 bg-cream-50">
      {/* Resume Container - pages side by side, height fills viewport minus header/footer */}
      <div 
        className="resume-container relative flex gap-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Resume Pages */}
        {ASSETS.RESUME_PAGES.map((pageSrc, index) => (
          <div 
            key={index}
            className="resume-page relative h-full shadow-2xl bg-white"
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

        {/* Download Button Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300">
            <button
              onClick={handleDownload}
              className="bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
            >
              <DownloadIcon className="w-5 h-5" />
              <span>{RESUME_CONTENT.DOWNLOAD_BUTTON}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
