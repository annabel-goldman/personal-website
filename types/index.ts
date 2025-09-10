/**
 * Global type definitions for the Portfolio application
 * Centralizes all interfaces and types for better maintainability
 */

// Project-related types
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: readonly string[];
  image: string;
  link: string;
  github: string;
  demo: string;
}

// Research-related types
export interface ResearchProject {
  id: number;
  title: string;
  description: string;
  organization: string;
  period: string;
  image: string;
  link: string;
  category: string;
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

// Layout types
export interface LayoutProps {
  children: React.ReactNode;
}

// Carousel types
export interface CarouselImage {
  src: string;
  alt: string;
} 