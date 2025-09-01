import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-1.png';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="DSA-Algorithm" className="h-16 w-auto object-contain" />
            </Link>
          <div className="hidden sm:flex sm:items-center">
            <Link to="/Algorithm" className="text-sky-100 text-lg font-bold hover:text-sky-400 mr-4">Algorithm</Link>
            <Link to="/sorting" className="text-sky-100 text-lg font-bold hover:text-sky-400 mr-4">Visualization</Link>
          </div>

          <div className="sm:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              <Link to="/Algorithm" className="text-gray-800 text-sm font-semibold hover:text-sky-600 mb-1">Algorithm</Link>
              <Link to="/sorting" className="text-gray-800 text-sm font-semibold hover:text-sky-600 mb-1">Visualization</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
