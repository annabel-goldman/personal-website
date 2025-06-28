import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Smart Closet',
    description: 'AI wardrobe tool using OpenAI/Gemini and AWS infrastructure',
    technologies: ['React', 'OpenAI', 'Gemini', 'AWS', 'AI/ML'],
    image: '/smart-closet/SmartCloset1.jpg',
    link: 'https://github.com/annabel-goldman/smart-closet-submission',
    github: 'https://github.com/annabel-goldman/smart-closet-submission',
    demo: 'https://github.com/annabel-goldman/smart-closet-submission'
  },
  {
    id: 3,
    title: 'Family Cookbook',
    description: 'Static HTML recipe archive enhanced with AI-generated images',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI Generated Images'],
    image: '/family-cookbook/Cookbook1.jpg',
    link: 'http://goldmanfamilycookbook.com/',
    github: 'http://goldmanfamilycookbook.com/',
    demo: 'http://goldmanfamilycookbook.com/'
  },
  {
    id: 4,
    title: 'Fairytales 4 Kids',
    description: 'Interactive storybook site with GPT-4 and DALL·E-generated content',
    technologies: ['React', 'GPT-4', 'DALL·E', 'AI Generated Content'],
    image: '/fairytales4kids/Fairytales1.jpg',
    link: 'http://fairytales4kids.com/',
    github: 'http://fairytales4kids.com/',
    demo: 'http://fairytales4kids.com/'
  },
  {
    id: 5,
    title: 'Start Small: Master CS Algorithms',
    description: 'A blog for students learning CS algorithms, with approachable explanations and problem breakdowns.',
    technologies: ['Next.js', 'React', 'Blog', 'Algorithms'],
    image: '/start-small/start-small.jpeg',
    link: 'https://startsmall.vercel.app/',
    github: 'https://startsmall.vercel.app/',
    demo: 'https://startsmall.vercel.app/'
  }
]

export default function Projects() {
  return (
    <section className="bg-navy-800" id="projects">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-cream-50">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-center items-start p-12 min-h-[22rem] border-b border-r border-cream-50 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-navy-700/50 hover:shadow-2xl hover:shadow-black/20 cursor-pointer overflow-hidden"
              style={{ borderRadius: 0 }}
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
                {/* Project Description */}
                <p className="text-cream-100/90 leading-relaxed font-serif text-base mb-4 text-left transition-all duration-300 group-hover:text-cream-100 group-hover:translate-x-1">
                  {project.description}
                </p>
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
                {/* Links */}
                <div className="flex gap-4 pt-2 justify-start">
                  {/* Only show 'View Live' if not Smart Closet */}
                  {project.title !== 'Smart Closet' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-50 hover:text-cream-200 font-serif underline text-sm transition-all duration-300 hover:scale-110 hover:translate-x-1"
                    >
                      View Live →
                    </a>
                  )}
                  {/* Only show 'View Code' if not Crosswordr */}
                  {project.title !== 'Crosswordr' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-50 hover:text-cream-200 font-serif underline text-sm transition-all duration-300 hover:scale-110 hover:translate-x-1"
                    >
                      View Code →
                    </a>
                  )}
                </div>
              </div>
              
              {/* Subtle border animation on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cream-50/20 transition-all duration-300 ease-in-out pointer-events-none z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 