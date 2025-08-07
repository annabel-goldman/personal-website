'use client'

import React, { useState, useEffect } from 'react'
import { TypewriterTextProps } from '@/types'

/**
 * TypewriterText Component
 * Creates a typewriter animation effect for text
 * 
 * @param text - The text to animate
 * @param className - Additional CSS classes
 * @param delay - Delay before animation starts (ms)
 * @param speed - Speed of typing animation (ms per character)
 */
const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  speed = 80 
}) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const startTyping = () => {
      let currentIndex = 0
      const timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(timer)
        }
      }, speed)

      return () => clearInterval(timer)
    }

    const delayTimer = setTimeout(startTyping, delay)
    return () => clearTimeout(delayTimer)
  }, [text, delay, speed])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypewriterText 