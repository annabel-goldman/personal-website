import React from 'react'
import Navigation from '@/components/Navigation'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-16">
        <Projects />
      </section>
      <div className="w-full h-px bg-white" />
      <Footer />
    </main>
  )
} 