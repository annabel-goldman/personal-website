'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationProps } from '@/types/types'
import { NAVIGATION, PERSONAL_INFO, ACCESSIBILITY } from '@/content/site-content'
import { ANIMATION } from '@/constants/config'
import { isActivePath } from '@/utils/helpers'
import { MenuIcon } from '@/components/ui/Icons'

/**
 * Navigation Component
 * Responsive navigation bar with cursor toggle functionality
 */
export default function Navigation({ cursorEnabled, onCursorToggle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > ANIMATION.SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg border-navy-800/30' 
        : 'bg-white/60 backdrop-blur-sm border-navy-800/20'
    }`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center h-16 w-full">
        {/* Left section: Only title - 60% width to match text content */}
        <div className="nav-left-section flex items-center pl-16">
          {/* Title/Logo on far left */}
          <div className="text-xl font-bold text-navy-800">
            {PERSONAL_INFO.BRAND_NAME}
          </div>
        </div>
        
        {/* Right section: All nav buttons evenly spaced above carousel - 40% width */}
        <div className="nav-right-section flex items-center justify-evenly">
          <Link
            href="/"
            className={`font-medium px-2 py-1 transition-colors ${
              isActivePath(pathname, '/')
                ? 'text-navy-800'
                : 'text-navy-800/70 hover:text-navy-800'
            }`}
          >
            {NAVIGATION.ITEMS[0].label}
          </Link>
          {NAVIGATION.ITEMS.filter(item => item.href !== '/').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium px-2 py-1 transition-colors ${
                isActivePath(pathname, item.href)
                  ? 'text-navy-800'
                  : 'text-navy-800/70 hover:text-navy-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Cursor Toggle */}
          <button
            onClick={onCursorToggle}
            className={`font-medium px-2 py-1 transition-colors ${
              cursorEnabled
                ? 'text-navy-800'
                : 'text-navy-800/70 hover:text-navy-800'
            }`}
            aria-label={ACCESSIBILITY.TOGGLE_CURSOR}
          >
            {cursorEnabled ? NAVIGATION.CURSOR_TOGGLE.ON : NAVIGATION.CURSOR_TOGGLE.OFF}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      <div className="lg:hidden max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-navy-800 hover:text-navy-800 transition-colors">
              {PERSONAL_INFO.BRAND_NAME}
            </Link>
          </div>
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-navy-800 hover:text-navy-800 transition-colors duration-200"
              aria-label={ACCESSIBILITY.TOGGLE_MOBILE_MENU}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-navy-800/20 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION.ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActivePath(pathname, item.href)
                      ? 'text-navy-800'
                      : 'text-navy-800/70 hover:text-navy-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Cursor Toggle */}
              <button
                onClick={() => {
                  onCursorToggle();
                  closeMobileMenu();
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  cursorEnabled
                    ? 'text-navy-800'
                    : 'text-navy-800/70 hover:text-navy-800'
                }`}
              >
                {cursorEnabled ? NAVIGATION.CURSOR_TOGGLE.ON : NAVIGATION.CURSOR_TOGGLE.OFF}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
