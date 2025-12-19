import React from 'react'
import Home from '@/components/Home'
import Footer from '@/components/ui/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Home />
      </section>
      <div className="w-full h-px bg-cream-50" />
      <Footer />
    </main>
  )
} 