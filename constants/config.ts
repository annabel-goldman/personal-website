/**
 * Application constants
 * Centralized configuration values for easy maintenance
 */

// Asset paths
export const ASSETS = {
  CURSOR_IMAGE: '/image.png',
  STAR_IMAGE: '/image.png',
  LOGO_PINK: '/logo-pink.png',
  RESUME_PDF: '/resume/Annabel_Goldman_Resume.pdf',
  RESUME_IMAGE: '/resume/Annabel_Goldman_Resume.png',
  CAROUSEL_IMAGES: [
    '/home-carosel/1.jpg',
    '/home-carosel/2.jpeg',
    '/home-carosel/3.jpg',
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

// Note: Personal information and navigation items are in /content/site-content.ts
// Import them from there: import { PERSONAL_INFO, NAVIGATION } from '@/content/site-content' 