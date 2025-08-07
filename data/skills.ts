import { SkillGroup } from '@/types';

/**
 * Technical skills data
 * Organized by category for easy maintenance and updates
 */
export const skillGroups: SkillGroup[] = [
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
]; 