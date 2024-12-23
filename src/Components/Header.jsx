import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa'; // Importing the sign-up icon

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
    <header className="sticky top-0 z-50 p-4 bg-[#0e2207] text-white">
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
        <h1 className="text-3xl md:text-4xl font-serif italic text-white flex items-center">
          <span>Bl</span>
          <span className="text-4xl text-[#fbc91a]">🌼</span>
          <span>ssom</span>
        </h1>

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
            About Us
          </a>
          <a
            href="#contact"
            className="hover:text-[#fbc91a] transition-colors cursor-pointer"
          >
            Contact Us
          </a>
          <a
            href="#faqs"
            className="hover:text-[#fbc91a] transition-colors cursor-pointer"
          >
            FAQs
          </a>

          {/* Sign Up Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 bg-[#1f6306] text-white rounded-lg hover:bg-[#fbc91a] transition-all"
            title="Sign Up"
          >
            <FaUserPlus className="text-lg" />
            <span>Sign Up</span>
          </button>
        </nav>

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
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#fbc91a] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#faqs"
              className="hover:text-[#fbc91a] transition-colors cursor-pointer"
              onClick={closeMenu}
            >
              FAQs
            </a>
          </li>
          <li>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-[#1f6306] text-white rounded-lg hover:bg-[#fbc91a] transition-all"
              title="Sign Up"
            >
              <FaUserPlus className="text-lg" />
              <span>Sign Up</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
