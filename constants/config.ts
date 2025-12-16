/**
 * Application constants
 * Centralized configuration values for easy maintenance
 */

// Asset paths
export const ASSETS = {
  CURSOR_IMAGE: '/cursor-icon.png',
  STAR_IMAGE: '/cursor-icon.png',
  RESUME_PDF: '/resume/resume.pdf',
  RESUME_PAGES: [
    '/resume/resume-page-1.jpg',
    '/resume/resume-page-2.jpg',
  ],
  CAROUSEL_IMAGES: [
    '/home-carousel/1.jpg',
    '/home-carousel/2.jpeg',
    '/home-carousel/3.jpg',
  ]
} as const;

// Animation and timing constants
export const ANIMATION = {
  TYPEWRITER_SPEED: 80,
  TYPEWRITER_DELAY: 0,
  CAROUSEL_INTERVAL: 5000,
  STAR_TRAIL_DURATION: 700,
  STAR_TRAIL_FADE_DELAY: 10,
  CURSOR_VISIBILITY_CHECK_INTERVAL: 100,
  SCROLL_THRESHOLD: 50,
  HERO_LOAD_DELAY: 100
} as const;

// External links
export const LINKS = {
  GITHUB: 'https://github.com/annabel-goldman',
  LINKEDIN: 'https://www.linkedin.com/in/annabel-goldman-43bba723a',
  EMAIL: 'annabel.m.goldman@gmail.com',
  NORTHWESTERN: 'https://northwestern.edu',
  CHILDHOOD_BLOG: 'https://annabelblog.blogspot.com/'
} as const;

// UI constants
export const UI = {
  CURSOR_SIZE: 30,
  CURSOR_OFFSET: 15,
  NAVIGATION_HEIGHT: 16, // h-16 in Tailwind (4rem)
  MAX_CONTENT_WIDTH: '6xl', // max-w-6xl in Tailwind
  STAR_TRAIL_Z_INDEX: 9999,
  CURSOR_Z_INDEX: 99999
} as const;

// Note: Content is organized by page in the /content folder:
// - home.ts: Home page content
// - projects.ts: Projects data
// - resume.ts: Resume page content
// - navigation.ts: Navigation menu items
// - shared.ts: Shared UI labels and accessibility text 