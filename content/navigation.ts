/**
 * Navigation Content
 * Menu items and navigation-related content
 */

export const NAVIGATION = {
  // Brand name shown in nav bar
  BRAND_NAME: 'Annabel',

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
