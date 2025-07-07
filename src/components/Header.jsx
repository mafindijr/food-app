import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <nav className="w-full bg-gray-800 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-extrabold text-white tracking-wide uppercase">
          meal search
        </span>
        <div className="flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-indigo-600 p-2' : 'text-white p-2' }>Home</NavLink>
          <NavLink to="/ingredients" className={({ isActive }) => isActive ? 'text-indigo-600 p-2' : 'text-white p-2'}>Ingredients</NavLink>
        </div>
      </div>
    </nav>
  )
}
