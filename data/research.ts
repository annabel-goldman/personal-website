import { ResearchProject } from '@/types';

/**
 * Research projects data
 * Centralized research experience information
 */
export const researchProjects: ResearchProject[] = [
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
]; 