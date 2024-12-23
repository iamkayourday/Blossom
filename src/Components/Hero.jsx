import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[900px] bg-cover bg-center flex justify-center items-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: 'url("Hero.jpeg")',
      }}
    >
      {/* Text Overlay */}
      <div className="absolute bg-black/50 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Welcome to Bl🌼ssom</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          Connecting farmers and buyers worldwide with trust and reliability.
        </p>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 w-full px-6 max-w-lg z-10">
        <div className="flex justify-center relative">
          <input
            type="text"
            placeholder="I am looking for..."
            className="w-full p-3 sm:p-4 md:p-4 rounded-xl text-black placeholder-gray-500 pl-12 focus:outline-none focus:ring-2 focus:ring-[#fbc91a] transition-all"
          />
          {/* Search Icon inside the input */}
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
