'use client'

import { useState, useCallback, useEffect } from 'react'

/**
 * Detects if the device is mobile/touch-based
 * Uses pointer: coarse media query which detects touch-primary devices
 */
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(pointer: coarse)').matches
}

/**
 * Custom hook for managing cursor state
 * Provides cursor enable/disable functionality with toggle
 * Automatically disables custom cursor on mobile/touch devices
 * 
 * @param initialState - Initial cursor enabled state (default: true)
 * @returns Object with cursor state and toggle function
 */
export const useCursor = (initialState: boolean = true) => {
  const [cursorEnabled, setCursorEnabled] = useState(false)

  // Check for mobile device on mount
  useEffect(() => {
    const isMobile = isMobileDevice()
    setCursorEnabled(isMobile ? false : initialState)
  }, [initialState])

  const toggleCursor = useCallback(() => {
    // Only allow toggling on non-mobile devices
    if (!isMobileDevice()) {
      setCursorEnabled(prev => !prev)
    }
  }, [])

  return {
    cursorEnabled,
    toggleCursor
  }
}
