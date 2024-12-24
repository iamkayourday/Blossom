import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa'; // Sign Up icon

const AuthHeader = ({ isSignUpPage }) => {
  return (
    <header className="sticky top-0 z-50 p-4 bg-[#0e2207] text-white">
      <div className="flex items-center justify-between px-6 py-3 rounded-3xl border border-[#fbc91a] mx-auto w-full max-w-6xl">
        {/* Logo Text (left side) */}
        <h1 className="text-3xl md:text-4xl font-serif italic text-white flex items-center">
          <span>Bl</span>
          <span className="text-4xl text-[#fbc91a]">🌼</span>
          <span>ssom</span>
        </h1>

        {/* Conditionally Render Button */}
        <div className="flex items-center gap-3">
          <Link
            to={isSignUpPage ? "/sign-in" : "/sign-up"}
            className="flex items-center gap-2 px-4 py-2 bg-[#1f6306] text-white rounded-lg hover:bg-[#fbc91a] transition-all"
          >
            {/* Icon for the button */}
            <FaUserPlus className="text-xl" />
            {isSignUpPage ? "Sign In" : "Sign Up"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
