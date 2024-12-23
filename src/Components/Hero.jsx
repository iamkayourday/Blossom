import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative w-full h-[900px] bg-cover bg-center flex justify-center items-center text-white text-center"
      style={{
        backgroundImage: 'url("Hero.jpeg")',
      }}
    >
      {/* Text Overlay */}
      <div className="absolute bg-black/50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold">Welcome to Bl🌼ssom</h1>
        <p className="text-lg mt-4">
          Connecting farmers and buyers worldwide with trust and reliability.
        </p>
      </div>
    </div>
  );
};

export default Hero;
