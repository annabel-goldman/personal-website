import { Project } from '@/types';

/**
 * Portfolio projects data
 * Centralized project information for easy maintenance and updates
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Closet',
    description: 'AI wardrobe tool using OpenAI/Gemini and AWS infrastructure. My Submission for wildhacks 2025.',
    technologies: ['React', 'OpenAI', 'Gemini', 'AWS', 'AI/ML'],
    image: '/smart-closet/SmartCloset1.jpg',
    link: '',
    github: 'https://github.com/annabel-goldman/smart-closet-submission',
    demo: ''
  },
  {
    id: 3,
    title: 'Family Cookbook',
    description: 'A static HTML archive for family recipes, built to improve my AWS skills. I hosted the site on S3 and managed the domain with Route 53. If I redid it, I\'d use a modern tech stack for more flexibility.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AWS'],
    image: '/family-cookbook/Cookbook1.jpg',
    link: 'http://goldmanfamilycookbook.com/',
    github: '',
    demo: 'http://goldmanfamilycookbook.com/'
  },
  {
    id: 4,
    title: 'Fairytales 4 Kids',
    description: 'Simple HTML site with ChatGPT-4 generated stories and DALL·E-generated content. Made for kids who want to hear a story but don\'t have a book nearby.',
    technologies: ['React', 'GPT-4', 'DALL·E', 'AI Generated Content'],
    image: '/fairytales4kids/Fairytales1.jpg',
    link: 'https://fairytales4kids.com/',
    github: 'https://github.com/annabel-goldman/fairytales4kids',
    demo: 'https://fairytales4kids.com/'
  },
  {
    id: 5,
    title: 'Start Small: Master CS Algorithms',
    description: 'Complete course website I designed and built for a CS algorithms course. Features interactive lessons, progress tracking, and comprehensive algorithm explanations.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/start-small/start-small.jpeg',
    link: 'https://annabel-goldman.github.io/cs-algorithms/',
    github: 'https://github.com/annabel-goldman/cs-algorithms',
    demo: 'https://annabel-goldman.github.io/cs-algorithms/'
  },
  {
    id: 6,
    title: 'Visual Art Gallery',
    description: 'A curated showcase of my visual art and design work, featuring digital illustrations, traditional media, and experimental pieces.',
    technologies: ['React', 'Next.js', 'CSS', 'Design'],
    image: '/visual-art/visual-art-gallery.png',
    link: 'https://annabel-goldman.github.io/visual-art/',
    github: 'https://github.com/annabel-goldman/visual-art',
    demo: 'https://annabel-goldman.github.io/visual-art/'
  },
  {
    id: 7,
    title: 'Chic Shit',
    description: 'My fashion blog. Filled with my opinions on fashion and photos to go along with them. Made for fun in my free time.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'WebP Optimization'],
    image: '/chic-shit-blog/chic-shit-blog.jpg',
    link: 'https://annabel-goldman.github.io/chic-shit-blog/',
    github: 'https://github.com/annabel-goldman/chic-shit-blog',
    demo: 'https://annabel-goldman.github.io/chic-shit-blog/'
  }
]; 