import React from 'react'
import SkillSection from '@/components/ui/SkillSection'
import { skillGroups } from '@/data/skills'

/**
 * Skills Component
 * Displays technical skills organized by category
 */
export default function Skills() {
  return (
    <section className="py-20 bg-cream-50" id="skills">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-4 font-serif">
            Technical Skills
          </h2>
          <div className="w-24 h-0.5 bg-navy-800 mb-4"></div>
          <p className="text-lg text-navy-800 leading-relaxed font-serif">
            A comprehensive overview of my technical skills and tools I use in my work.
          </p>
        </div>
        
        <div className="space-y-16">
          {skillGroups.map((group) => (
            <SkillSection key={group.title} skillGroup={group} />
          ))}
        </div>
      </div>
    </section>
  )
} 