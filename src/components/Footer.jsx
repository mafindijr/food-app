import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-4 mt-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Meal Search. All rights reserved.
      </div>
    </footer>
  )
}
