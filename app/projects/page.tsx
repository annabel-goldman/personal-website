import React from 'react'
import ItemGrid from '@/components/ItemGrid'
import Footer from '@/components/Footer'
import { PROJECTS_CONTENT } from '@/content/projects'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-16">
        <ItemGrid items={PROJECTS_CONTENT.PROJECTS} sectionId="projects" />
      </section>
      <div className="w-full h-px bg-white" />
      <Footer />
    </main>
  )
}
