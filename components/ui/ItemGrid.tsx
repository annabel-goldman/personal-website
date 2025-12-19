'use client'

import React from 'react'
import Image from 'next/image'
import { GridItem } from '@/types/types'
import { UI_LABELS } from '@/content/shared'

interface ItemGridProps {
  items: readonly GridItem[];
  sectionId?: string;
  onItemClick?: (item: GridItem) => void;
}

/**
 * ItemGrid Component
 * Reusable grid component for displaying items with hover effects
 * 
 * Usage:
 * <ItemGrid items={PROJECTS_CONTENT.PROJECTS} sectionId="projects" />
 */
export default function ItemGrid({ items, sectionId = 'items', onItemClick }: ItemGridProps) {
  return (
    <section className="bg-navy-800" id={sectionId}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-cream-50">
          {items.map((item, idx) => {
            // Calculate if this item is in the last row for different breakpoints
            const isLastRowMobile = idx === items.length - 1;
            const isLastRowTablet = idx >= items.length - (items.length % 2 || 2);
            const isLastRowDesktop = idx >= items.length - (items.length % 3 || 3);
            
            return (
              <div
                key={item.id}
                className={`project-card group relative flex flex-col justify-between items-start p-4 sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10 border-r border-cream-50 transition-all duration-300 ease-in-out overflow-hidden
                  ${!isLastRowMobile ? 'border-b' : ''} 
                  ${!isLastRowTablet ? 'md:border-b' : 'md:border-b-0'} 
                  ${!isLastRowDesktop ? 'lg:border-b' : 'lg:border-b-0'}
                  ${onItemClick ? 'cursor-pointer hover:bg-navy-700/50 hover:shadow-2xl hover:shadow-black/20' : ''}`}
                onClick={onItemClick ? () => onItemClick(item) : undefined}
              >
                {/* Background Image - shows on hover */}
                {item.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 ease-in-out">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Background Pattern - fallback when no image */}
                {!item.image && (
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg text-cream-100 leading-relaxed font-serif max-w-none">
                    {item.description}
                  </p>
                </div>

                {/* View Project Button */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-4 sm:mt-6 inline-flex items-center gap-2 px-4 py-2 bg-cream-50 text-navy-800 text-sm font-medium hover:bg-white transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {UI_LABELS.VIEW_PROJECT}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

