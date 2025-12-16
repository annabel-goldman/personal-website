'use client'

import React from 'react'
import Image from 'next/image'
import { Project } from '@/types/types'
import { UI_LABELS } from '@/content/site-content'
import { CloseIcon } from './Icons'

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/**
 * ProjectModal Component
 * Modal displaying detailed project information
 */
const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
          {/* Project content - using grid layout for better space usage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left column - Text content */}
            <div className="space-y-4">
              {/* Close button positioned in the text column to avoid overlap */}
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-navy-900 mb-3">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-navy-800 hover:text-navy-600 transition-colors duration-200 flex-shrink-0"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
              <p className="text-navy-700 leading-relaxed text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{UI_LABELS.TECHNOLOGIES_USED}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-cream-100 text-navy-800 text-xs font-medium border border-navy-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-800 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700 transition-colors duration-200"
                  >
                    {UI_LABELS.VIEW_PROJECT}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
                  >
                    {UI_LABELS.GITHUB}
                  </a>
                )}
                {project.demo && project.demo !== project.link && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
                  >
                    {UI_LABELS.DEMO}
                  </a>
                )}
              </div>
            </div>

            {/* Right column - Image */}
            <div className="bg-cream-100 p-4 border border-navy-200 relative min-h-[300px]">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

