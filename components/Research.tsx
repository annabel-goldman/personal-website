import React from 'react'

const researchProjects = [
  {
    id: 1,
    title: 'C3 Lab – Elizabeth Project',
    description: 'Built backend logic and front-end interactions for a real-time AI avatar',
    organization: 'Northwestern University',
    period: 'January 2025 - Present',
    image: '/C3.svg',
    link: 'https://c3lab.northwestern.edu/',
    category: 'AI & HCI'
  },
  {
    id: 2,
    title: 'Knight Lab',
    description: 'Researching AI personas and their role in social media storytelling',
    organization: 'Northwestern University',
    period: 'March 2025 - Present',
    image: '/Knight.svg',
    link: 'https://knightlab.northwestern.edu/projects/',
    category: 'Digital Media'
  },
  {
    id: 3,
    title: 'MU Collective - Harvestor',
    description: 'Developing tools for AI-assisted test creation in partnership with educators',
    organization: 'Northwestern University',
    period: 'March 2025 - Present',
    image: '/MU.svg',
    link: 'https://mucollective.northwestern.edu/',
    category: 'EdTech'
  }
]

export default function Research() {
  return (
    <section className="py-20 bg-cream-50" id="lab-work">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        {/* Header - Clear Visual Hierarchy */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-navy-900 mb-6 font-serif">
            Research Experience
          </h1>
          <div className="w-24 h-1 bg-navy-900 mb-8"></div>
          <p className="text-xl text-navy-700 max-w-3xl leading-relaxed font-serif">
            Exploring the intersection of AI, human-computer interaction, and educational technology 
            through cutting-edge research at Northwestern University.
          </p>
        </div>

        {/* Research Projects - Clean Grid Layout */}
        <div className="space-y-12">
          {researchProjects.map((project, index) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-navy-200 p-8 hover:border-navy-400 transition-colors duration-300"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Image Section */}
                <div className="md:col-span-1">
                  <div className="bg-cream-100 p-6 border border-navy-200">
                    <div className="flex items-center justify-center h-32">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-navy-600 font-medium">
                      {project.period}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-navy-900 font-serif">
                    {project.title}
                  </h2>
                  
                  <p className="text-lg text-navy-700 font-medium">
                    {project.category}
                  </p>
                  
                  <p className="text-navy-700 leading-relaxed font-serif">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 