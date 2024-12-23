import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <header className="bg-white/30 border border-white/20 shadow-md sticky top-0 w-full z-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center relative z-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-700 tracking-wide relative z-30">
          Bl<span className="inline-block text-[#fbc91a] transform scale-90">🌼</span>ssom
        </h1>

        <nav>
          {/* Mobile Menu Button */}
          <div className="lg:hidden z-30">
            <button onClick={toggleMenu} className="text-green-600">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`lg:flex lg:space-x-6 items-center fixed lg:relative top-0 right-0 w-full lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent z-50 transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? 'transform translate-x-0'
                : 'transform translate-x-full lg:transform-none'
            } ${isMenuOpen ? 'flex flex-col justify-center items-center' : ''}`}
          >
            {/* Menu Items */}
            <li className="p-4">
              <a
                href="#"
                className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="p-4">
              <a
                href="#"
                className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
              >
                Marketplace
              </a>
            </li>
            <li className="p-4">
              <a
                href="#"
                className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li className="p-4">
              <a
                href="#"
                className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
