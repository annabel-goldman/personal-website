'use client'

import React from 'react'
import Image from 'next/image'
import { GridItem } from '@/types/types'
import { UI_LABELS } from '@/content/shared'
import { CloseIcon } from './Icons'

interface ItemDetailModalProps {
  item: GridItem;
  onClose: () => void;
}

/**
 * ItemDetailModal Component
 * Reusable modal for displaying detailed item information
 * 
 * Usage:
 * <ItemDetailModal item={selectedItem} onClose={handleClose} />
 */
const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  const hasLinks = item.link || item.github || item.demo;
  const hasTechnologies = item.technologies && item.technologies.length > 0;

  return (
    <div 
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-4xl w-full max-h-[80vh] overflow-y-auto relative" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Content - using grid layout for better space usage */}
          <div className={`grid grid-cols-1 ${item.image ? 'lg:grid-cols-2' : ''} gap-6`}>
            {/* Left column - Text content */}
            <div className="space-y-4">
              {/* Close button positioned in the text column to avoid overlap */}
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-navy-800 hover:text-navy-600 transition-colors duration-200 flex-shrink-0"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
              <p className="text-navy-700 leading-relaxed text-base">
                {item.description}
              </p>

              {/* Technologies - only show if present */}
              {hasTechnologies && (
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{UI_LABELS.TECHNOLOGIES_USED}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies!.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-cream-100 text-navy-800 text-xs font-medium border border-navy-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links - only show if present */}
              {hasLinks && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-navy-800 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700 transition-colors duration-200"
                    >
                      {UI_LABELS.VIEW_PROJECT}
                    </a>
                  )}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
                    >
                      {UI_LABELS.GITHUB}
                    </a>
                  )}
                  {item.demo && item.demo !== item.link && (
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
                    >
                      {UI_LABELS.DEMO}
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right column - Image (only if present) */}
            {item.image && (
              <div className="bg-cream-100 p-4 border border-navy-200 relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailModal
