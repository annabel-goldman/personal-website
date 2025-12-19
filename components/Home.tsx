'use client'

import React, { useState, useEffect } from 'react'
import TypewriterText from '@/components/ui/TypewriterText'
import { EmailIcon, GitHubIcon, LinkedInIcon, BookIcon } from '@/components/ui/Icons'
import { HOME_CONTENT } from '@/content/home'
import { ANIMATION, LINKS } from '@/constants/config'
import Carousel from '@/components/ui/Carousel'

/**
 * Home Component
 * Landing section with personal information and typewriter animation
 */
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, ANIMATION.HOME_LOAD_DELAY)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="home-section h-screen pt-16 bg-cream-50 relative overflow-hidden w-full flex">
      {/* Left: Text Content */}
      <div className="home-text-content flex flex-col justify-center h-full px-6 sm:px-8 md:pl-12 md:pr-6 lg:pl-16 lg:pr-8 relative z-10 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-navy-800 mb-4 sm:mb-6 leading-tight">
          {isLoaded ? (
            <TypewriterText 
              text={HOME_CONTENT.NAME}
              className="text-navy-800"
              delay={ANIMATION.TYPEWRITER_DELAY}
              speed={ANIMATION.TYPEWRITER_SPEED}
            />
          ) : (
            <span className="text-navy-800">{HOME_CONTENT.NAME}</span>
          )}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-navy-800 mb-2 sm:mb-3 font-medium">
          {HOME_CONTENT.TITLE}
        </p>
        <p className="text-base sm:text-lg text-navy-800 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
          {HOME_CONTENT.DESCRIPTION}
        </p>
        <div className="flex flex-row gap-4 justify-center md:justify-start items-center text-navy-800/70 flex-nowrap">
          <a href={`mailto:${LINKS.EMAIL}`} className="flex items-center gap-2 hover:text-navy-800 transition-colors whitespace-nowrap" aria-label={HOME_CONTENT.BUTTONS.CONTACT_ME}>
            <EmailIcon className="w-5 h-5" />
            <span className="hidden lg:inline">{HOME_CONTENT.BUTTONS.CONTACT_ME}</span>
          </a>
          <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors whitespace-nowrap" aria-label={HOME_CONTENT.BUTTONS.GITHUB}>
            <GitHubIcon className="w-5 h-5" />
            <span className="hidden lg:inline">{HOME_CONTENT.BUTTONS.GITHUB}</span>
          </a>
          <a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors whitespace-nowrap" aria-label={HOME_CONTENT.BUTTONS.LINKEDIN}>
            <LinkedInIcon className="w-5 h-5" />
            <span className="hidden lg:inline">{HOME_CONTENT.BUTTONS.LINKEDIN}</span>
          </a>
          <a href={LINKS.CHILDHOOD_BLOG} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors whitespace-nowrap" aria-label={HOME_CONTENT.BUTTONS.CHILDHOOD_BLOG}>
            <BookIcon className="w-5 h-5" />
            <span className="hidden lg:inline">{HOME_CONTENT.BUTTONS.CHILDHOOD_BLOG}</span>
          </a>
        </div>
      </div>
      {/* Right: Carousel - visible on tablet and up */}
      <div className="home-carousel hidden md:block h-full">
        <Carousel />
      </div>
    </section>
  )
}

