'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ASSETS, ANIMATION } from '@/constants/config'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons'

/**
 * Carousel Component
 * Auto-advancing image carousel with navigation controls
 */

const images = ASSETS.CAROUSEL_IMAGES

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, ANIMATION.CAROUSEL_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-200 group">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Annabel Marie Goldman ${index + 1}`}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 z-10 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 