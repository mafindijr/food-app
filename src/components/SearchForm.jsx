import { useEffect, useState, useRef } from 'react'

export default function SearchForm({search, setSearch, handleSearch}) {

    
    const inputRef = useRef(null);

    const onSearch = (e) => {
        e.preventDefault();
        handleSearch(search);
    }


    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);

  return (
    <form onSubmit={onSearch} className="flex items-center space-x-2">
      <input
        type="text"
        name="search"
        value={search}
        ref={inputRef}
        placeholder="Search meals..."
        onInput={(e) => {setSearch(e.target.value)}}
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
