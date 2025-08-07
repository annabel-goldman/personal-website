import React from 'react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component
 * Displays individual project information in a card format
 * 
 * @param project - Project data to display
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, image, link, github, demo } = project

  return (
    <div className="bg-white border border-navy-200 p-6 hover:border-navy-400 transition-colors duration-300">
      {/* Project Image */}
      <div className="mb-6">
        <div className="bg-cream-100 p-4 border border-navy-200">
          <div className="aspect-video flex items-center justify-center">
            <img 
              src={image} 
              alt={title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-navy-900 font-serif">
          {title}
        </h3>
        
        <p className="text-navy-700 leading-relaxed font-serif">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-cream-100 text-navy-800 text-sm font-medium border border-navy-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-800 hover:text-navy-600 font-medium transition-colors duration-200"
            >
              View Project
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-800 hover:text-navy-600 font-medium transition-colors duration-200"
            >
              GitHub
            </a>
          )}
          {demo && demo !== link && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-800 hover:text-navy-600 font-medium transition-colors duration-200"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 