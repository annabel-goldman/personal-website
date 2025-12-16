import React from 'react'
import Image from 'next/image'
import { ResearchProject } from '@/types/types'

interface ResearchCardProps {
  project: ResearchProject;
}

/**
 * ResearchCard Component
 * Displays individual research project information in a card format
 * 
 * @param project - Research project data to display
 */
const ResearchCard: React.FC<ResearchCardProps> = ({ project }) => {
  const { title, description, period, image, link, category } = project

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-navy-200 p-8 hover:border-navy-400 transition-colors duration-300"
    >
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Image Section */}
        <div className="md:col-span-1">
          <div className="bg-cream-100 p-6 border border-navy-200">
            <div className="relative flex items-center justify-center h-32">
              <Image 
                src={image} 
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-navy-600 font-medium">
              {period}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-navy-900 font-serif">
            {title}
          </h2>
          
          <p className="text-lg text-navy-700 font-medium">
            {category}
          </p>
          
          <p className="text-navy-700 leading-relaxed font-serif">
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}

export default ResearchCard 