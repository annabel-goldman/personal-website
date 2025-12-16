'use client'

import React, { useState } from 'react'
import { Project } from '@/types/types'
import { PROJECTS_CONTENT } from '@/content/site-content'
import ProjectModal from '@/components/ui/ProjectModal'

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
            const isLastRowMobile = idx === PROJECTS_CONTENT.PROJECTS.length - 1;
            const isLastRowTablet = idx >= PROJECTS_CONTENT.PROJECTS.length - (PROJECTS_CONTENT.PROJECTS.length % 2 || 2);
            const isLastRowDesktop = idx >= PROJECTS_CONTENT.PROJECTS.length - (PROJECTS_CONTENT.PROJECTS.length % 3 || 3);
            
            return (
              <div
                key={project.id}
                className={`project-card group relative flex flex-col justify-start items-start p-4 sm:p-4 md:p-4 lg:p-6 xl:p-8 2xl:p-10 border-r border-cream-50 transition-all duration-300 ease-in-out hover:bg-navy-700/50 hover:shadow-2xl hover:shadow-black/20 cursor-pointer overflow-hidden
                  ${!isLastRowMobile ? 'border-b' : ''} 
                  ${!isLastRowTablet ? 'md:border-b' : 'md:border-b-0'} 
                  ${!isLastRowDesktop ? 'lg:border-b' : 'lg:border-b-0'}`}
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
                  <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg text-cream-100 leading-relaxed font-serif max-w-none">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal - Using the reusable ProjectModal component */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  )
}
