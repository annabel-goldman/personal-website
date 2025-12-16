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
 */
export default function Resume() {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    downloadFile(ASSETS.RESUME_PDF, 'Annabel_Goldman_Resume.pdf')
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center pt-20 pb-8 px-4 bg-cream-50">
      {/* Resume Container - sized to match letter paper aspect ratio (8.5:11) */}
      <div 
        className="relative shadow-2xl bg-white"
        style={{ 
          width: 'min(90vw, 650px)',
          aspectRatio: '8.5 / 11'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={ASSETS.RESUME_IMAGE}
          alt={RESUME_CONTENT.ALT_TEXT}
          fill
          className="object-contain"
          priority
        />

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
