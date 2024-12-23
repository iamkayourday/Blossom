import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/30 border border-white/20 shadow-md sticky top-0 w-full z-50 backdrop-filter backdrop-blur-lg">
      {/* Header content constrained to max width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center relative z-20">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-green-700 tracking-wide relative z-30">
          Bl<span className="inline-block text-[#fbc91a] transform scale-90">🌼</span>ssom
        </h1>

        <nav>
          {/* Mobile menu toggle */}
          <div className="lg:hidden z-30">
            <button onClick={toggleMenu} className="text-green-600">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop and Mobile Menu */}
          <ul
            className={`lg:flex lg:space-x-6 items-center absolute lg:relative top-0 right-0 lg:top-auto lg:right-auto w-full lg:w-auto h-screen lg:h-auto bg-white lg:bg-transparent z-50 transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? 'transform translate-x-0'
                : 'transform translate-x-full lg:transform-none'
            } ${
              isMenuOpen ? 'flex flex-col justify-center items-center' : ''
            }`}
          >
            {/* Mobile close button */}
            {isMenuOpen && (
              <div className="absolute top-4 right-4 lg:hidden z-20">
                <button onClick={toggleMenu} className="text-green-600">
                  <FaTimes size={24} />
                </button>
              </div>
            )}

            {/* Menu items */}
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto px-4 lg:px-0">
              <li>
                <a
                  href="#"
                  className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-green-600 font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
