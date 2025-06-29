'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-navy-800 hover:text-navy-800 transition-colors">
              Annabel
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`font-medium px-2 py-1 border-2 ring-2 ${
                pathname === '/'
                  ? 'text-navy-800 border-navy-800 ring-navy-200'
                  : 'text-navy-800/70 hover:text-navy-800 border-transparent ring-transparent'
              }`}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`font-medium px-2 py-1 border-2 ring-2 ${
                pathname.startsWith('/projects')
                  ? 'text-navy-800 border-navy-800 ring-navy-200'
                  : 'text-navy-800/70 hover:text-navy-800 border-transparent ring-transparent'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className={`font-medium px-2 py-1 border-2 ring-2 ${
                pathname.startsWith('/resume')
                  ? 'text-navy-800 border-navy-800 ring-navy-200'
                  : 'text-navy-800/70 hover:text-navy-800 border-transparent ring-transparent'
              }`}
            >
              Resume
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-navy-800 hover:text-navy-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-navy-800/20 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === '/'
                    ? 'text-navy-800 bg-navy-50 border border-navy-200'
                    : 'text-navy-800/70 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                Home
              </Link>
              <Link
                href="/projects"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname.startsWith('/projects')
                    ? 'text-navy-800 bg-navy-50 border border-navy-200'
                    : 'text-navy-800/70 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/resume"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname.startsWith('/resume')
                    ? 'text-navy-800 bg-navy-50 border border-navy-200'
                    : 'text-navy-800/70 hover:text-navy-800 hover:bg-navy-50'
                }`}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 