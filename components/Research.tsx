import React from 'react'
import ResearchCard from '@/components/ui/ResearchCard'
import { researchProjects } from '@/data/research'
import { PAGE_CONTENT } from '@/content'

/**
 * Research Component
 * Displays research experience and lab work
 */
export default function Research() {
  return (
    <section className="py-20 bg-cream-50" id="lab-work">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        {/* Header - Clear Visual Hierarchy */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-navy-900 mb-6 font-serif">
            {PAGE_CONTENT.RESEARCH.TITLE}
          </h1>
          <div className="w-24 h-1 bg-navy-900 mb-8"></div>
          <p className="text-xl text-navy-700 max-w-3xl leading-relaxed font-serif">
            {PAGE_CONTENT.RESEARCH.SUBTITLE}
          </p>
        </div>

        {/* Research Projects - Clean Grid Layout */}
        <div className="space-y-12">
          {researchProjects.map((project) => (
            <ResearchCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
} 