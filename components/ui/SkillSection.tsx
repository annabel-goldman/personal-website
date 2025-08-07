import React from 'react'
import { SkillGroup } from '@/types'

interface SkillSectionProps {
  skillGroup: SkillGroup;
}

/**
 * SkillSection Component
 * Displays a group of skills with title and links
 * 
 * @param skillGroup - Group of skills to display
 */
const SkillSection: React.FC<SkillSectionProps> = ({ skillGroup }) => {
  const { title, skills } = skillGroup

  return (
    <div>
      <h3 className="text-2xl font-bold text-navy-800 mb-8 font-serif">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-800 hover:text-navy-600 font-serif transition-colors duration-200"
          >
            {skill.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SkillSection 