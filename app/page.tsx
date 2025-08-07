import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <div className="w-full h-px bg-cream-50" />
      <Footer />
    </main>
  )
} 