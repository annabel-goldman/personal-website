'use client'

import React, { useState, useEffect } from 'react'
import TypewriterText from '@/components/ui/TypewriterText'
import { EmailIcon, GitHubIcon, LinkedInIcon, BookIcon } from '@/components/ui/Icons'
import { PERSONAL_INFO, UI_LABELS } from '@/content/site-content'
import { ANIMATION, LINKS } from '@/constants/config'
import Carousel from './Carousel'

/**
 * Hero Component
 * Landing section with personal information and typewriter animation
 */
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, ANIMATION.HERO_LOAD_DELAY)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-section h-screen pt-16 bg-cream-50 relative overflow-hidden w-full flex">
      {/* Left: Text Content */}
      <div className="hero-text-content flex flex-col justify-center h-full px-6 sm:px-8 lg:pl-16 lg:pr-8 relative z-10 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-navy-800 mb-4 sm:mb-6 leading-tight">
          {isLoaded ? (
            <TypewriterText 
              text={PERSONAL_INFO.NAME}
              className="text-navy-800"
              delay={ANIMATION.TYPEWRITER_DELAY}
              speed={ANIMATION.TYPEWRITER_SPEED}
            />
          ) : (
            <span className="text-navy-800">{PERSONAL_INFO.NAME}</span>
          )}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-navy-800 mb-2 sm:mb-3 font-medium">
          {PERSONAL_INFO.TITLE}
        </p>
        <p className="text-base sm:text-lg text-navy-800 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
          {PERSONAL_INFO.DESCRIPTION}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center lg:items-start text-navy-800/70">
          <a href={`mailto:${LINKS.EMAIL}`} className="flex items-center gap-2 hover:text-navy-800 transition-colors text-sm sm:text-base">
            <EmailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            {UI_LABELS.CONTACT_ME}
          </a>
          <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors text-sm sm:text-base">
            <GitHubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            {UI_LABELS.GITHUB}
          </a>
          <a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors text-sm sm:text-base">
            <LinkedInIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            {UI_LABELS.LINKEDIN}
          </a>
          <a href={LINKS.CHILDHOOD_BLOG} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors text-sm sm:text-base">
            <BookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            {UI_LABELS.CHILDHOOD_BLOG}
          </a>
        </div>
      </div>
      {/* Right: Carousel */}
      <div className="hero-carousel hidden lg:block h-full">
        <Carousel />
      </div>
    </section>
  )
}
