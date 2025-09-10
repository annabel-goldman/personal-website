'use client'

import React, { useState } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import { Project } from '@/types'
import { UI_LABELS, ACCESSIBILITY, PROJECTS_CONTENT } from '@/content'

/**
 * Projects Component
 * Displays a grid of portfolio projects with modal functionality
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section className="bg-navy-800" id="projects">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-cream-50">
          {PROJECTS_CONTENT.PROJECTS.map((project, idx) => {
            // Calculate if this item is in the last row for different breakpoints
            const isLastRowMobile = idx === PROJECTS_CONTENT.PROJECTS.length - 1; // 1 column: only last item
            const isLastRowTablet = idx >= PROJECTS_CONTENT.PROJECTS.length - (PROJECTS_CONTENT.PROJECTS.length % 2 || 2); // 2 columns: last 1-2 items
            const isLastRowDesktop = idx >= PROJECTS_CONTENT.PROJECTS.length - (PROJECTS_CONTENT.PROJECTS.length % 3 || 3); // 3 columns: last 1-3 items
            
            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-start items-start p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 border-r border-cream-50 transition-all duration-300 ease-in-out hover:bg-navy-700/50 hover:shadow-2xl hover:shadow-black/20 cursor-pointer overflow-hidden
                  ${!isLastRowMobile ? 'border-b' : ''} 
                  ${!isLastRowTablet ? 'md:border-b' : 'md:border-b-0'} 
                  ${!isLastRowDesktop ? 'lg:border-b' : 'lg:border-b-0'}`}
                style={{ 
                  borderRadius: 0,
                  height: 'calc((100vh - 128px) / 2)' // Half viewport height minus header (64px) and footer (64px)
                }}
                onClick={() => openModal(project)}
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
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg text-cream-100 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-relaxed font-serif max-w-none">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                    {project.technologies.slice(0, 3).map((tech, techIdx) => (
                      <span 
                        key={techIdx}
                        className="px-1.5 sm:px-2 md:px-3 lg:px-3 xl:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-1.5 xl:py-2 bg-white/10 text-white text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm font-medium border border-white/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 sm:px-2 md:px-3 lg:px-3 xl:px-4 py-0.5 sm:py-1 md:py-1.5 lg:py-1.5 xl:py-2 bg-white/10 text-white text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm font-medium border border-white/20 backdrop-blur-sm">
                        {UI_LABELS.MORE_TECHNOLOGIES.replace('{count}', (project.technologies.length - 3).toString())}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white max-w-4xl w-full max-h-[80vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              {/* Project content - using grid layout for better space usage */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left column - Text content */}
                <div className="space-y-4">
                  {/* Close button positioned in the text column to avoid overlap */}
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-navy-900 mb-3">
                      {selectedProject.title}
                    </h2>
                    <button
                      onClick={closeModal}
                      className="text-navy-800 hover:text-navy-600 transition-colors duration-200 flex-shrink-0"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-navy-700 leading-relaxed text-base">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{UI_LABELS.TECHNOLOGIES_USED}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
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
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-navy-800 text-white px-4 py-2 text-sm font-medium hover:bg-navy-700 transition-colors duration-200"
                      >
                        {UI_LABELS.VIEW_PROJECT}
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
                      >
                        {UI_LABELS.GITHUB}
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== selectedProject.link && (
                      <a
                        href={selectedProject.demo}
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
                <div className="bg-cream-100 p-4 border border-navy-200 flex items-center justify-center">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 