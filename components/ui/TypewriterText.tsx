'use client'

import React, { useState, useEffect, useRef } from 'react'
import { TypewriterTextProps } from '@/types/types'

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let currentIndex = 0
    
    const startTyping = () => {
      intervalRef.current = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex))
          currentIndex++
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
        }
      }, speed)
    }

    const delayTimer = setTimeout(startTyping, delay)
    
    // Cleanup: clear both the delay timeout and the typing interval
    return () => {
      clearTimeout(delayTimer)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [text, delay, speed])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypewriterText 