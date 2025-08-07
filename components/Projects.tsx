'use client'

import React, { useState } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { Project } from '@/types'

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
          {projects.map((project, idx) => {
            // Calculate number of columns (default 3 for desktop)
            const columns = 3;
            const lastRowStart = projects.length - (projects.length % columns || columns);
            const isLastRow = idx >= lastRowStart;
            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-center items-start p-12 min-h-[18rem] border-r border-cream-50 transition-all duration-300 ease-in-out hover:bg-navy-700/50 hover:shadow-2xl hover:shadow-black/20 cursor-pointer overflow-hidden${isLastRow ? '' : ' border-b'}`}
                style={{ borderRadius: 0 }}
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
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-cream-50 mb-4 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-cream-100/80 text-sm leading-relaxed mb-6 group-hover:text-cream-50 transition-colors duration-300 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies - Show first 3 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-cream-50/10 text-cream-50 text-xs font-medium rounded border border-cream-50/20 group-hover:bg-cream-50/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-cream-50/60 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center text-cream-50/70 text-sm group-hover:text-cream-50 transition-colors duration-300">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
                    <h3 className="text-lg font-bold text-navy-900 mb-2">Technologies Used</h3>
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
                        View Project
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
                      >
                        GitHub
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== selectedProject.link && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-navy-800 text-navy-800 px-4 py-2 text-sm font-medium hover:bg-navy-800 hover:text-white transition-colors duration-200"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right column - Image */}
                <div className="bg-cream-100 p-4 border border-navy-200">
                  <div className="aspect-video flex items-center justify-center">
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
        </div>
      )}
    </section>
  )
} 