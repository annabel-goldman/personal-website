/**
 * Shared Content
 * Content used across multiple pages/components
 */

// Site-wide information
export const SITE_INFO = {
  // Name used in copyright notices and page titles
  COPYRIGHT_NAME: 'Annabel Goldman',
  
  // Meta description for SEO
  META_DESCRIPTION: 'Software Engineer & Developer Portfolio'
} as const;

// UI Labels used in multiple places
export const UI_LABELS = {
  // Project/Item buttons
  VIEW_PROJECT: 'View Project',
  GITHUB: 'GitHub',
  
  // Project/Item modal headings
  TECHNOLOGIES_USED: 'Technologies Used',
  
  // Technology tags
  MORE_TECHNOLOGIES: '+{count} more',
  
  // Footer
  FOOTER_COPYRIGHT: '© {year} {name}. All rights reserved.'
} as const;

// Accessibility & ARIA labels
export const ACCESSIBILITY = {
  // Screen reader labels
  TOGGLE_CURSOR: 'Toggle custom cursor',
  TOGGLE_MOBILE_MENU: 'Toggle mobile menu',
  CLOSE_MODAL: 'Close modal',
  
  // Image alt texts
  LOGO_ALT: 'Annabel Goldman Logo',
  STAR_IMAGE_ALT: 'Decorative star'
} as const;
