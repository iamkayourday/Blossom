import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; // Updated icons
import AuthHeader from "./AuthHeader"; // Import the Header component

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }
    setError(""); // Clear any previous errors
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/"); // Navigate to the home page ("/")
    }, 2000);
  };

  return (
    <>
      <AuthHeader isSignUpPage={false} /> {/* Include header */}
      <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5]">
        {/* Left Side: Form Section */}
        <div className="flex-1 bg-white flex items-center justify-center p-6 md:p-16">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border-2 border-[#0e2207]">
            {/* Tagline */}
            <h1 className="text-3xl font-bold text-center text-[#0e2207] mb-4">
              Welcome Back!
            </h1>
            <p className="text-center text-lg text-[#0e2207] mb-8">
              Please sign in to continue.
            </p>

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#0e2207] mb-2"
                >
                  Email
                </label>
                <div className="flex items-center border border-[#0e2207] rounded-md p-3">
                  <AiOutlineMail className="text-[#0e2207] text-xl mr-2" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#0e2207] mb-2"
                >
                  Password
                </label>
                <div className="flex items-center border border-[#0e2207] rounded-md p-3">
                  <AiOutlineLock className="text-[#0e2207] text-xl mr-2" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="flex-1 focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-[#0e2207] text-white rounded-md hover:bg-[#fbc91a] focus:outline-none focus:ring-2 focus:ring-[#fbc91a]"
              >
                {isLoading ? "Loading..." : "Sign In"}
              </button>
              <div className="mt-4 text-center">
                <Link
                  to="#forgot-password" // Update to correct route if needed
                  className="text-sm text-[#0e2207] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#0e2207]">
                  Don't have an account?{" "}
                  <Link
                    to="/sign-up" // Link to the Sign Up page
                    className="text-[#fbc91a] font-semibold hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="flex justify-center items-center md:flex-1 md:block flex-col">
          <img
            src="sign_in.jpg"
            alt="Sign In Illustration"
            className="object-cover w-full h-full md:w-auto md:h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
