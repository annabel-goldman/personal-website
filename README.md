# Portfolio V3 - Annabel Goldman

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing research experience, projects, and technical skills.

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Static export for GitHub Pages
- **Architecture**: Modular component-based design

## 🏗️ Project Structure

### **Core Architecture**

```
Portfolio-V3/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with global state
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects showcase
│   ├── resume/            # Interactive resume viewer
│   └── globals.css        # Global styles & design system
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── Hero.tsx           # Landing section
│   ├── Navigation.tsx     # Responsive navigation
│   ├── Projects.tsx       # Project grid with modal
│   ├── Research.tsx       # Research experience
│   ├── Skills.tsx         # Technical skills
│   ├── Footer.tsx         # Site footer
│   ├── CustomCursor.tsx   # Interactive cursor
│   ├── StarTrail.tsx      # Mouse trail effects
│   └── Carousel.tsx       # Image carousel
├── data/                  # Centralized data management
│   ├── projects.ts        # Portfolio projects
│   ├── research.ts        # Research experience
│   └── skills.ts          # Technical skills
├── types/                 # TypeScript definitions
│   └── index.ts           # Global type definitions
├── constants/             # Configuration & constants
│   └── index.ts           # App constants & settings
├── utils/                 # Utility functions
│   └── index.ts           # Helper functions
├── hooks/                 # Custom React hooks
│   └── useCursor.ts       # Cursor state management
└── public/               # Static assets
    ├── home-carosel/     # Hero section images
    ├── smart-closet/     # Project screenshots
    ├── family-cookbook/  # Project assets
    ├── fairytales4kids/  # Project media
    ├── start-small/      # Project images
    ├── visual-art/       # Portfolio pieces
    ├── crosswordr/       # Project screenshots
    ├── mayfest/          # Event website assets
    └── resume/           # Resume files
```

### **Component Organization**

#### **Main Components**
- **Hero**: Landing section with typewriter animation and personal info
- **Navigation**: Responsive navigation with active state management
- **Projects**: Grid layout with modal overlays for detailed views
- **Research**: Academic and research experience showcase
- **Skills**: Categorized technical skills with external links
- **Footer**: Simple footer with copyright information

#### **UI Components** (`/components/ui/`)
- **TypewriterText**: Reusable typewriter animation component
- **ProjectCard**: Individual project display card
- **ResearchCard**: Research project presentation component
- **SkillSection**: Skill category display component

#### **Interactive Features**
- **CustomCursor**: Toggleable custom cursor with smooth tracking
- **StarTrail**: Mouse trail effect with animated stars
- **Carousel**: Auto-advancing image carousel with controls

### **Data Management**

All content is centralized in dedicated data files:

- **`data/projects.ts`**: Portfolio projects with metadata
- **`data/research.ts`**: Research experience and lab work
- **`data/skills.ts`**: Technical skills organized by category

### **Type Safety**

Comprehensive TypeScript definitions in `types/index.ts`:
- Component prop interfaces
- Data structure definitions
- Utility function types

### **Configuration Management**

Centralized constants in `constants/index.ts`:
- Asset paths and URLs
- Animation timing values
- UI measurements and z-indices
- Personal information
- Navigation items

### **Utility Functions**

Helper functions in `utils/index.ts`:
- File download handling
- Image error management
- Path matching utilities
- Class name construction

### **Custom Hooks**

React hooks for state management:
- **`useCursor`**: Cursor enable/disable functionality with callbacks

## 🎨 Design System

### **Color Palette**
- **Primary**: Navy tones (50-950) for text and UI elements
- **Secondary**: Cream tones (50-900) for backgrounds and accents
- **Typography**: Times New Roman enforced globally for academic aesthetic

### **Animation System**
- Smooth transitions and hover effects
- Configurable timing constants
- Interactive cursor and star trail effects
- Typewriter text animations

### **Responsive Design**
- Mobile-first approach with Tailwind breakpoints
- Collapsible navigation for mobile devices
- Adaptive layouts for different screen sizes

## 🚀 Features

### **Interactive Elements**
- **Custom Cursor**: Toggle-able custom cursor with star trail effects
- **Modal System**: Project detail overlays with smooth animations
- **Responsive Navigation**: Mobile-friendly with active state indicators
- **Image Carousel**: Auto-advancing with manual navigation controls

### **Content Sections**
1. **Hero Section**: Personal introduction with animated text
2. **Projects Portfolio**: Showcase of development work with technologies
3. **Research Experience**: Academic and lab work at Northwestern University
4. **Technical Skills**: Categorized skill sets with external links
5. **Resume Viewer**: Interactive PDF display with download functionality

### **Performance Optimizations**
- Static export for fast loading
- Optimized image handling
- Efficient component re-rendering
- Minimal bundle size

## 🔧 Development

### **Prerequisites**
- Node.js 18+ 
- npm or yarn package manager

### **Installation**
```bash
npm install
```

### **Development Server**
```bash
npm run dev
```

### **Production Build**
```bash
npm run build
```

### **Static Export**
```bash
npm run export
```

## 📁 File Organization Principles

### **Separation of Concerns**
- **Data**: Centralized in dedicated files for easy maintenance
- **Types**: Comprehensive TypeScript definitions for type safety
- **Constants**: Configuration values for consistent styling and behavior
- **Utils**: Reusable helper functions across components
- **Components**: Modular, single-responsibility components

### **Maintainability**
- Clear naming conventions
- Comprehensive component documentation
- Logical file grouping
- Minimal coupling between modules

### **Scalability**
- Modular architecture for easy feature additions
- Centralized data management for content updates
- Reusable UI components for consistent design
- Type-safe development for reduced bugs

## 🎯 Code Quality

### **TypeScript Integration**
- Strict type checking enabled
- Comprehensive interface definitions
- Type-safe utility functions

### **Component Design**
- Single responsibility principle
- Props interface definitions
- Clear component documentation
- Consistent naming patterns

### **Performance Considerations**
- Optimized re-rendering with React best practices
- Efficient state management
- Minimal external dependencies
- Static generation for fast loading

---

**Built with ❤️ for academic and professional showcase**
