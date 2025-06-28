'use client'

import React, { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  github: string
  demo: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Closet',
    description: 'AI wardrobe tool using OpenAI/Gemini and AWS infrastructure. This project leverages advanced AI models to help users organize and style their wardrobe intelligently.',
    technologies: ['React', 'OpenAI', 'Gemini', 'AWS', 'AI/ML'],
    image: '/smart-closet/SmartCloset1.jpg',
    link: 'https://github.com/annabel-goldman/smart-closet-submission',
    github: 'https://github.com/annabel-goldman/smart-closet-submission',
    demo: 'https://github.com/annabel-goldman/smart-closet-submission'
  },
  {
    id: 3,
    title: 'Family Cookbook',
    description: 'Static HTML recipe archive enhanced with AI-generated images. A personal family project that preserves culinary traditions with modern technology.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI Generated Images'],
    image: '/family-cookbook/Cookbook1.jpg',
    link: 'http://goldmanfamilycookbook.com/',
    github: 'http://goldmanfamilycookbook.com/',
    demo: 'http://goldmanfamilycookbook.com/'
  },
  {
    id: 4,
    title: 'Fairytales 4 Kids',
    description: 'Interactive storybook site with GPT-4 and DALL·E-generated content. Creates personalized, AI-generated fairy tales for children with unique illustrations.',
    technologies: ['React', 'GPT-4', 'DALL·E', 'AI Generated Content'],
    image: '/fairytales4kids/Fairytales1.jpg',
    link: 'http://fairytales4kids.com/',
    github: 'http://fairytales4kids.com/',
    demo: 'http://fairytales4kids.com/'
  },
  {
    id: 5,
    title: 'Start Small: Master CS Algorithms',
    description: 'A blog for students learning CS algorithms, with approachable explanations and problem breakdowns. Designed to make complex algorithms accessible to beginners.',
    technologies: ['Next.js', 'React', 'Blog', 'Algorithms'],
    image: '/start-small/start-small.jpeg',
    link: 'https://annabel-goldman.github.io/CsComm/',
    github: 'https://github.com/annabel-goldman/CsComm',
    demo: 'https://annabel-goldman.github.io/CsComm/'
  }
]

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
                className={`group relative flex flex-col justify-center items-start p-12 min-h-[18rem] border-r border-cream-50 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-navy-700/50 hover:shadow-2xl hover:shadow-black/20 cursor-pointer overflow-hidden${isLastRow ? '' : ' border-b'}`}
                style={{ borderRadius: 0 }}
                onClick={() => openModal(project)}
              >
                {/* Background image that appears on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out pointer-events-none"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    filter: 'blur(2px)'
                  }}
                />
                
                {/* Background overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream-50/0 to-cream-50/0 group-hover:from-cream-50/5 group-hover:to-cream-50/10 transition-all duration-300 ease-in-out pointer-events-none" />
                
                {/* Content container with relative positioning */}
                <div className="relative z-10 w-full">
                  {/* Project Title */}
                  <h3 className="text-2xl font-bold font-serif text-cream-50 mb-2 text-left transition-all duration-300 group-hover:text-cream-100 group-hover:scale-105 origin-left">
                    {project.title}
                  </h3>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 justify-start mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={tech}
                        className="text-xs text-cream-50 font-serif px-2 py-1 rounded-sm"
                        style={{ borderRadius: 0 }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Click indicator */}
                  <div className="text-cream-50/70 font-serif text-sm transition-all duration-300 group-hover:text-cream-100">
                    Click to view details →
                  </div>
                </div>
                
                {/* Subtle border animation on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cream-50/20 transition-all duration-300 ease-in-out pointer-events-none z-20" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-navy-800 border border-cream-50 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-cream-50">
              <h2 className="text-3xl font-bold text-cream-50 font-serif">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-cream-50 hover:text-cream-200 transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="space-y-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover border border-cream-50/20"
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col h-64">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cream-50 font-serif mb-3">
                      About this project
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm text-cream-50/70 font-serif"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-cream-100/90 leading-relaxed font-serif text-base">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-auto">
                    {selectedProject.title !== 'Smart Closet' && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cream-50 text-navy-800 px-6 py-3 font-serif font-medium hover:bg-cream-100 transition-colors duration-200 text-center"
                      >
                        View Live Site
                      </a>
                    )}
                    {selectedProject.title !== 'Crosswordr' && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-cream-50 text-cream-50 px-6 py-3 font-serif font-medium hover:bg-cream-50 hover:text-navy-800 transition-colors duration-200 text-center"
                      >
                        View Code
                      </a>
                    )}
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