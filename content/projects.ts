/**
 * Projects Content
 * All project data for the portfolio
 */

// ===========================
// TECHNOLOGIES DATABASE
// ===========================
// 
// 🎯 SUPER EASY TECHNOLOGY MANAGEMENT!
// 
// How to add a new technology:
// 1. Add it here: NEW_TECH: 'Display Name',
// 2. Use it in projects: technologies: [TECHNOLOGIES.NEW_TECH, ...]
// 
// How to rename a technology everywhere:
// 1. Change the display name here
// 2. It updates automatically across all projects!
// 
// How to delete a technology:
// 1. Remove it from here
// 2. Remove it from any project's technologies array
// 
// Available technologies:
export const TECHNOLOGIES = {
  // Programming Languages
  REACT: 'React',
  TYPESCRIPT: 'TypeScript',
  JAVASCRIPT: 'JavaScript',
  HTML: 'HTML',
  CSS: 'CSS',
  
  // Frameworks & Libraries
  NEXTJS: 'Next.js',
  
  // AI & Machine Learning
  OPENAI: 'OpenAI',
  GEMINI: 'Gemini',
  
  // Cloud & Infrastructure
  AWS: 'AWS'
} as const;

// ===========================
// PROJECTS CONTENT
// ===========================
// 
// 🚀 SUPER EASY PROJECT MANAGEMENT!
// 
// How to add a new project:
// 1. Copy an existing project object
// 2. Update id, title, description, technologies, image, links
// 3. Use TECHNOLOGIES constants for technologies array
// 
// How to edit project text:
// 1. Update title or description directly
// 2. Changes appear immediately on your website!
// 
// How to add/remove technologies from a project:
// 1. Add: technologies: [...existing, TECHNOLOGIES.NEW_TECH]
// 2. Remove: Just delete the technology from the array
// 
// Projects data:
export const PROJECTS_CONTENT = {
  // Individual project data
  PROJECTS: [
    {
      id: 1,
      title: 'Family Cookbook',
      description: 'A digital cookbook of family recipes I collected, formatted, and put on a website to share with my family.',
      technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
      image: '/projects/family-cookbook.jpg',
      link: 'http://goldmanfamilycookbook.com/',
      github: ''
    },
    {
      id: 2,
      title: 'My Virtual Aquarium',
      description: 'Very simple website where you can own and add fish to your virtual aquarium.',
      technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TYPESCRIPT],
      image: '/projects/aquarium.jpg',
      link: 'https://aquarium.annabelgoldman.com/',
      github: 'https://github.com/annabel-goldman/aquarium'
    },
    {
      id: 3,
      title: 'Fairytales 4 Kids',
      description: 'Simple HTML site with ChatGPT generated stories and DALL·E-generated content.',
      technologies: [TECHNOLOGIES.REACT],
      image: '/projects/fairytales-4-kids.jpg',
      link: 'https://fairytales4kids.com/',
      github: 'https://github.com/annabel-goldman/fairytales4kids'
    },
    {
      id: 4,
      title: 'Visual Art Gallery',
      description: 'A website to hold all of the art work I made in high school. Hopefully I will be able to add to the collection when I have more free time!',
      technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.NEXTJS, TECHNOLOGIES.CSS],
      image: '/projects/visual-art-gallery.png',
      link: 'https://annabel-goldman.github.io/visual-art/',
      github: 'https://github.com/annabel-goldman/visual-art'
    },
    {
      id: 5,
      title: 'Smart Closet',
      description: 'AI wardrobe tool using OpenAI/Gemini and AWS infrastructure. My Submission for wildhacks 2025.',
      technologies: [TECHNOLOGIES.AWS, TECHNOLOGIES.OPENAI, TECHNOLOGIES.GEMINI],
      image: '/projects/smart-closet.jpg',
      link: 'https://github.com/annabel-goldman/smart-closet-submission',
      github: 'https://github.com/annabel-goldman/smart-closet-submission'
    },
    {
      id: 6,
      title: 'Chic Shit',
      description: 'My fashion blog. Filled with my opinions on fashion and photos to go along with them.',
      technologies: [TECHNOLOGIES.JAVASCRIPT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS],
      image: '/projects/chic-shit-blog.jpg',
      link: 'https://annabel-goldman.github.io/chic-shit-blog/',
      github: 'https://github.com/annabel-goldman/chic-shit-blog'
    }
  ]
} as const;

/*
{
      id: 5,
      title: 'Start Small: Master CS Algorithms',
      description: 'Website I designed and built for a CS students taking a CS algorithms course.',
      technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.NEXTJS, TECHNOLOGIES.TYPESCRIPT],
      image: '/projects/start-small.jpeg',
      link: 'https://annabel-goldman.github.io/cs-algorithms/',
      github: 'https://github.com/annabel-goldman/cs-algorithms',
      demo: 'https://annabel-goldman.github.io/cs-algorithms/'
    },

*/
