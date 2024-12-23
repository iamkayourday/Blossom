import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a navigation link is clicked (for mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="p-4 bg-[#0e2207] text-white">
      {/* Header Wrapper */}
      <div
        className="flex items-center justify-between gap-4 px-6 py-3 rounded-3xl border border-[#fbc91a] mx-auto w-full max-w-6xl"
        style={{
          borderTopWidth: '2px',
          borderBottomWidth: '4px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Logo Text (left side) */}
        <h1 className="text-xl md:text-2xl font-serif italic text-[#fbc91a]">
          Blossom
        </h1>

        {/* Menu Toggle Icon (for mobile) */}
        <div className="flex items-center gap-3 md:hidden">
          {isMenuOpen ? (
            <MdClose
              className="text-lg hover:text-[#fbc91a] cursor-pointer"
              onClick={toggleMenu}
              title="Close Menu"
            />
          ) : (
            <MdMenu
              className="text-lg hover:text-[#fbc91a] cursor-pointer"
              onClick={toggleMenu}
              title="Open Menu"
            />
          )}
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="hover:text-[#fbc91a] transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#fbc91a] transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#gallery"
            className="hover:text-[#fbc91a] transition-colors cursor-pointer"
          >
            Gallery
          </a>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`mt-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul
          className="flex flex-col justify-center items-center gap-4 px-6 py-3 rounded-3xl border border-[#fbc91a] mx-auto w-full max-w-6xl"
          style={{
            borderTopWidth: '2px',
            borderBottomWidth: '4px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <li>
            <a
              href="#home"
              className="hover:text-[#fbc91a] transition-colors cursor-pointer"
              onClick={closeMenu} // Close the menu when this link is clicked
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#fbc91a] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:text-[#fbc91a] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
