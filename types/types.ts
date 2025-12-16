/**
 * Global type definitions for the Portfolio application
 * Centralizes all interfaces and types for better maintainability
 */

// Generic grid item type - used by ItemGrid and ItemDetailModal
export interface GridItem {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies?: readonly string[];
  link?: string;
  github?: string;
  demo?: string;
}

// Navigation-related types
export interface NavigationProps {
  cursorEnabled: boolean;
  onCursorToggle: () => void;
}

// Component prop types
export interface CustomCursorProps {
  isEnabled: boolean;
}

export interface StarTrailProps {
  isEnabled: boolean;
}

export interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}
