'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <button className="text-navy-800 hover:text-navy-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 