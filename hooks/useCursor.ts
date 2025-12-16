'use client'

import { useState, useCallback } from 'react'

/**
 * Custom hook for managing cursor state
 * Provides cursor enable/disable functionality with toggle
 * 
 * @param initialState - Initial cursor enabled state (default: true)
 * @returns Object with cursor state and toggle function
 */
export const useCursor = (initialState: boolean = true) => {
  const [cursorEnabled, setCursorEnabled] = useState(initialState)

  const toggleCursor = useCallback(() => {
    setCursorEnabled(prev => !prev)
  }, [])

  return {
    cursorEnabled,
    toggleCursor
  }
}
