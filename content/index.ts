/**
 * Website Content Configuration
 * Centralized text content for easy updates and maintenance
 * 
 * This file contains all user-facing text content that appears on the website.
 * Update these values to change the text displayed throughout the site.
 */

// ===========================
// PERSONAL INFORMATION
// ===========================
export const PERSONAL_INFO = {
  // Main name displayed in hero section and title
  NAME: 'Annabel Marie Goldman',
  
  // Job title/current position shown under name
  TITLE: 'Masters Student in Computer Science, Northwestern University',
  
  // Main description paragraph in hero section
  DESCRIPTION: 'My research interests span computer science education, human-computer interaction, artificial intelligence, and web development. I made this website myself!',
  
  // Name used in copyright notices and page titles
  COPYRIGHT_NAME: 'Annabel Goldman',
  
  // Short name for navigation brand
  BRAND_NAME: 'Annabel'
} as const;

// ===========================
// NAVIGATION & MENU
// ===========================
export const NAVIGATION = {
  // Main navigation menu items
  ITEMS: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/resume', label: 'Resume' }
  ],
  
  // Cursor toggle button text
  CURSOR_TOGGLE: {
    ON: 'Cursor: ON',
    OFF: 'Cursor: OFF'
  }
} as const;


// ===========================
// PAGE TITLES & HEADINGS
// ===========================
export const PAGE_CONTENT = {
  // Research section
  RESEARCH: {
    TITLE: 'Research Experience',
    SUBTITLE: 'Exploring the intersection of AI, human-computer interaction, and educational technology through cutting-edge research at Northwestern University.'
  },
  
  // Resume page
  RESUME: {
    ALT_TEXT: 'Annabel Goldman Resume',
    DOWNLOAD_BUTTON: 'Download Resume'
  }
} as const;

// ===========================
// BUTTON & UI LABELS
// ===========================
export const UI_LABELS = {
  // Contact section buttons
  CONTACT_ME: 'Contact Me',
  GITHUB: 'GitHub',
  LINKEDIN: 'LinkedIn',
  
  // Project modal buttons
  VIEW_PROJECT: 'View Project',
  DEMO: 'Demo',
  
  // Project modal headings
  TECHNOLOGIES_USED: 'Technologies Used',
  
  // Technology tags in project cards
  MORE_TECHNOLOGIES: '+{count} more', // {count} will be replaced with the actual number
  
  // Footer
  FOOTER_COPYRIGHT: '© {year} {name}. All rights reserved.', // {year} and {name} will be replaced
  
  // Meta description for SEO
  META_DESCRIPTION: 'Software Engineer & Developer Portfolio'
} as const;

// ===========================
// ACCESSIBILITY & ARIA LABELS
// ===========================
export const ACCESSIBILITY = {
  // Screen reader labels
  TOGGLE_CURSOR: 'Toggle custom cursor',
  TOGGLE_MOBILE_MENU: 'Toggle mobile menu',
  CLOSE_MODAL: 'Close modal',
  
  // Image alt texts that aren't dynamic
  LOGO_ALT: 'Annabel Goldman Logo',
  STAR_IMAGE_ALT: 'Decorative star'
} as const;

// ===========================
// PLACEHOLDER & DEFAULT TEXT
// ===========================
export const PLACEHOLDERS = {
  // Used when content is loading or unavailable
  LOADING: 'Loading...',
  NO_DESCRIPTION: 'No description available',
  COMING_SOON: 'Coming Soon',
  
  // Default text for empty states
  NO_PROJECTS: 'No projects available',
  NO_RESEARCH: 'No research projects available'
} as const;

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
  PYTHON: 'Python',
  JAVA: 'Java',
  CPP: 'C++',
  
  // Frameworks & Libraries
  NEXTJS: 'Next.js',
  TAILWIND: 'Tailwind CSS',
  
  // AI & Machine Learning
  OPENAI: 'OpenAI',
  GEMINI: 'Gemini',
  GPT4: 'GPT-4',
  DALLE: 'DALL·E',
  AI_ML: 'AI/ML',
  AI_GENERATED: 'AI Generated Content',
  
  // Cloud & Infrastructure
  AWS: 'AWS',
  
  // Design & Media
  DESIGN: 'Design',
  WEBP_OPTIMIZATION: 'WebP Optimization'
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
      title: 'Smart Closet',
      description: 'AI wardrobe tool using OpenAI/Gemini and AWS infrastructure. My Submission for wildhacks 2025.',
      technologies: [TECHNOLOGIES.AWS, TECHNOLOGIES.OPENAI, TECHNOLOGIES.GEMINI],
      image: '/projects/SmartCloset1.jpg',
      link: '',
      github: 'https://github.com/annabel-goldman/smart-closet-submission',
      demo: ''
    },
    {
      id: 3,
      title: 'Family Cookbook',
      description: 'A digital cookbook of family recipes I collected, formatted, and put on a website to share with my family.',
      technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
      image: '/projects/Cookbook1.jpg',
      link: 'http://goldmanfamilycookbook.com/',
      github: '',
      demo: 'http://goldmanfamilycookbook.com/'
    },
    {
      id: 4,
      title: 'Fairytales 4 Kids',
      description: 'Simple HTML site with ChatGPT generated stories and DALL·E-generated content.',
      technologies: [TECHNOLOGIES.REACT],
      image: '/projects/Fairytales1.jpg',
      link: 'https://fairytales4kids.com/',
      github: 'https://github.com/annabel-goldman/fairytales4kids',
      demo: 'https://fairytales4kids.com/'
    },
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
    {
      id: 6,
      title: 'Visual Art Gallery',
      description: 'A website that shows you some artwork I made.',
      technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.NEXTJS, TECHNOLOGIES.CSS],
      image: '/projects/visual-art-gallery.png',
      link: 'https://annabel-goldman.github.io/visual-art/',
      github: 'https://github.com/annabel-goldman/visual-art',
      demo: 'https://annabel-goldman.github.io/visual-art/'
    },
    {
      id: 7,
      title: 'Chic Shit',
      description: 'My fashion blog. Filled with my opinions on fashion and photos to go along with them.',
      technologies: [TECHNOLOGIES.JAVASCRIPT, TECHNOLOGIES.HTML, TECHNOLOGIES.CSS],
      image: '/projects/chic-shit-blog.jpg',
      link: 'https://annabel-goldman.github.io/chic-shit-blog/',
      github: 'https://github.com/annabel-goldman/chic-shit-blog',
      demo: 'https://annabel-goldman.github.io/chic-shit-blog/'
    }
  ]
} as const;


// ===========================
// EXPORT ALL CONTENT
// ===========================
// Re-export for backward compatibility and easy imports
export {
  PERSONAL_INFO as PERSONAL,
  NAVIGATION as NAV,
  PAGE_CONTENT as PAGES,
  UI_LABELS as LABELS,
  ACCESSIBILITY as A11Y,
  TECHNOLOGIES as TECH,
  PROJECTS_CONTENT as PROJECTS
};

// Default export for the entire content configuration
export default {
  PERSONAL_INFO,
  NAVIGATION,
  PAGE_CONTENT,
  UI_LABELS,
  ACCESSIBILITY,
  PLACEHOLDERS,
  TECHNOLOGIES,
  PROJECTS_CONTENT
};
