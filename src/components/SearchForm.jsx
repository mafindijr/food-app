import React from 'react'

export default function SearchForm({ onSubmit }) {
  return (
    <form
      className="flex items-center space-x-2"
      onSubmit={e => {
        e.preventDefault()
        if (onSubmit) {
          const value = e.target.elements.search.value
          onSubmit(value)
        }
      }}
    >
      <input
        type="text"
        name="search"
        placeholder="Search meals..."
        className="px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-md hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </form>
  )
}
