'use client'

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Resume() {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume/Annabel_Goldman_Resume (1).pdf'
    link.download = 'Annabel_Goldman_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="relative w-full h-screen flex items-center justify-center pt-16">
        {/* Resume Image */}
        <div className="w-full h-full flex items-center justify-center">
          <div 
            className="shadow-2xl overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="/resume/Screenshot 2025-06-27 at 5.56.57 PM.png"
              alt="Annabel Goldman Resume"
              className="w-full h-full object-contain"
              style={{ maxHeight: 'calc(100vh - 4rem)' }}
            />

            {/* Download Button Overlay */}
            {isHovered && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300">
                <button
                  onClick={handleDownload}
                  className="bg-navy-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <span>Download Resume</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-cream-50" />
      <Footer />
    </main>
  )
} 