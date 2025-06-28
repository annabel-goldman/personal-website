import React from 'react'

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', link: 'https://www.java.com/en/' },
      { name: 'Python', link: 'https://www.python.org/' },
      { name: 'C++', link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
      { name: 'C#', link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
      { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', link: 'https://en.wikipedia.org/wiki/JavaScript' }
    ]
  },
  {
    title: 'Development Tools',
    skills: [
      { name: 'GitHub', link: 'https://github.com/annabel-goldman' },
      { name: 'Docker', link: 'https://www.docker.com/' },
      { name: 'VS Code', link: 'https://code.visualstudio.com/' },
      { name: 'Unix', link: 'https://en.wikipedia.org/wiki/Unix' },
      { name: 'AWS', link: 'https://aws.amazon.com/' },
      { name: 'React', link: 'https://reactjs.org/' }
    ]
  },
  {
    title: 'Design & Tools',
    skills: [
      { name: 'Photoshop', link: 'https://www.adobe.com/products/photoshop.html' },
      { name: 'Adobe CC', link: 'https://www.adobe.com/creativecloud.html' },
      { name: 'Illustration', link: 'https://en.wikipedia.org/wiki/Illustration' },
      { name: 'Laser Cutting', link: 'https://en.wikipedia.org/wiki/Laser_cutting' },
      { name: 'Microsoft Office', link: 'https://www.microsoft.com/en-us/microsoft-365' },
      { name: 'Google Suite', link: 'https://workspace.google.com/' }
    ]
  }
]

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
            <div key={group.title}>
              <h3 className="text-2xl font-bold text-navy-800 mb-8 font-serif">{group.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-800 hover:text-navy-800 font-serif"
                  >
                    {skill.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 