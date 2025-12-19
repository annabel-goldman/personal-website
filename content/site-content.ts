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
  CHILDHOOD_BLOG: 'Read about my childhood',
  
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
