import React from 'react'

export default function Header() {
  return (
    <nav className="w-full bg-gray-800 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-extrabold text-white tracking-wide uppercase">
          meal search
        </span>
        <div className="flex items-center space-x-6">
          {/* Placeholder for future nav items */}
        </div>
      </div>
    </nav>
  )
}
