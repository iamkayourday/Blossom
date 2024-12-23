import React from 'react';

const Header = () => {
  return (
    <header className="backdrop-blur-md bg-white/70 px-8 py-4 flex justify-between items-center shadow-lg rounded-md fixed top-0 w-full z-50">
      <h1 className="text-[#1f6306] font-bold text-xl">Bl🌼ssom</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-[#1f6306] font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#1f6306] font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
            >
              Marketplace
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#1f6306] font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#1f6306] font-semibold text-base hover:text-[#fbc91a] transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
