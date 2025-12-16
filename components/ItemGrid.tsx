'use client'

import React, { useState } from 'react'
import { GridItem } from '@/types/types'
import ItemDetailModal from '@/components/ui/ItemDetailModal'

interface ItemGridProps {
  items: readonly GridItem[];
  sectionId?: string;
}

/**
 * ItemGrid Component
 * Reusable grid component for displaying items with modal functionality
 * 
 * Usage:
 * <ItemGrid items={PROJECTS_CONTENT.PROJECTS} sectionId="projects" />
 */
export default function ItemGrid({ items, sectionId = 'items' }: ItemGridProps) {
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item: GridItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

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
                className={`project-card group relative flex flex-col justify-start items-start p-4 sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10 border-r border-cream-50 transition-all duration-300 ease-in-out hover:bg-navy-700/50 hover:shadow-2xl hover:shadow-black/20 cursor-pointer overflow-hidden
                  ${!isLastRowMobile ? 'border-b' : ''} 
                  ${!isLastRowTablet ? 'md:border-b' : 'md:border-b-0'} 
                  ${!isLastRowDesktop ? 'lg:border-b' : 'lg:border-b-0'}`}
                onClick={() => openModal(item)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg text-cream-100 leading-relaxed font-serif max-w-none">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={closeModal} />
      )}
    </section>
  )
}
