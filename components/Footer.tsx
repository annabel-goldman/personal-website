import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-white text-sm text-center">
          © {currentYear} Annabel Goldman. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 