import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading phase (e.g., waiting for the hero image to load)
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Skeleton loader aligned with Hero content
    return (
      <div
        className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[900px] bg-gray-200 animate-pulse flex justify-center items-center text-center"
      >
        {/* Text Skeleton Overlay */}
        <div className="absolute bg-gray-300/50 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg z-10">
          <div className="h-8 sm:h-10 md:h-12 lg:h-14 w-2/3 sm:w-1/2 bg-gray-400 rounded mb-4 mx-auto"></div>
          <div className="h-6 sm:h-8 w-1/2 sm:w-1/3 bg-gray-400 rounded mx-auto"></div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 w-full px-6 max-w-lg z-10">
          <div className="flex justify-center">
            <div className="w-full h-12 sm:h-14 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

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
