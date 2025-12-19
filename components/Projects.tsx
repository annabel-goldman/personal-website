'use client'

import React, { useState } from 'react'
import { GridItem } from '@/types/types'
import { PROJECTS_CONTENT } from '@/content/projects'
import ItemGrid from '@/components/ui/ItemGrid'
import ItemDetailModal from '@/components/ui/ItemDetailModal'

/**
 * Projects Component
 * Page-specific implementation using reusable ItemGrid and ItemDetailModal
 * Feeds projects content into the reusable grid/modal building blocks
 */
export default function Projects() {
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null)

  const handleItemClick = (item: GridItem) => {
    setSelectedItem(item)
  }

  const handleCloseModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <ItemGrid 
        items={PROJECTS_CONTENT.PROJECTS} 
        sectionId="projects"
        onItemClick={handleItemClick}
      />

      {selectedItem && (
        <ItemDetailModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </>
  )
}
