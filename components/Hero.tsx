'use client'

import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'

// TypewriterText component for typing animation
const TypewriterText = ({ text, className, delay = 0, speed = 50 }: { 
  text: string; 
  className: string; 
  delay?: number; 
  speed?: number; 
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        setIsTypingComplete(true)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed])

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setCurrentIndex(0)
      setDisplayText('')
      setIsTypingComplete(false)
    }, delay)

    return () => clearTimeout(initialTimer)
  }, [delay])

  return (
    <span className={className}>
      {displayText}
      {!isTypingComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="h-screen pt-16 flex flex-row items-stretch justify-start bg-cream-50 relative overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center max-w-4xl w-full h-full px-6 sm:px-8 md:pl-16 md:pr-16 relative z-10 carousel-text text-center md:text-left" style={{ flex: '0 0 60%' }}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-navy-800 mb-4 sm:mb-6 leading-tight w-full">
          {isLoaded ? (
            <TypewriterText 
              text="Annabel Marie Goldman" 
              className="text-navy-800"
              delay={0}
              speed={80}
            />
          ) : (
            <span className="text-navy-800">Annabel Marie Goldman</span>
          )}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-navy-800 mb-2 sm:mb-3 font-medium w-full">
          Masters Student in Computer Science, Northwestern University
        </p>
        <p className="text-base sm:text-lg text-navy-800 mb-8 sm:mb-12 max-w-2xl w-full leading-relaxed">
          My research interests span computer science education, human-computer interaction, 
          artificial intelligence, and web development.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center md:items-start w-full text-navy-800">
          <a href="mailto:annabel.m.goldman@gmail.com" className="flex items-center gap-2 hover:text-navy-800 transition-colors text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            annabel.m.goldman@gmail.com
          </a>
          <a href="https://github.com/annabel-goldman" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/annabel-goldman-43bba723a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      {/* Right: Carousel */}
      <div className="hidden lg:flex items-center justify-center h-full w-full md:w-[500px] md:pl-4" style={{ flex: '0 0 40%' }}>
        <Carousel />
      </div>
      <style jsx>{`
        @media (max-width: 1045px) {
          .carousel-text {
            flex: 0 0 100% !important;
          }
        }
      `}</style>
    </section>
  )
} 