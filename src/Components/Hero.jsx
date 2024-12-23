import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[900px] bg-cover bg-center flex justify-center items-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: 'url("Hero.jpeg")',
      }}
    >
      {/* Text Overlay */}
      <div className="absolute bg-black/50 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Welcome to Bl🌼ssom</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          Connecting farmers and buyers worldwide with trust and reliability.
        </p>
      </div>
    </div>
  );
};

export default Hero;
