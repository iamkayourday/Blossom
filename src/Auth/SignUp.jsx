import React, { useState } from 'react';
import AuthHeader from './AuthHeader'; // Import Header component
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing and useNavigate for redirection

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/'); // Redirects to the home page ("/")
    }, 2000);
  };

  return (
    <>
      <AuthHeader isSignUpPage={true} />
      <div className="flex flex-col md:flex-row min-h-screen bg-[#f5f5f5]">
        {/* Main Sign Up Form */}
        <div className="flex-1 bg-white flex items-center justify-center p-6 md:p-16 order-last md:order-last">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border-2 border-[#0e2207]">
            <h1 className="text-3xl font-bold text-center text-[#0e2207] mb-4">
              Create Your Account
            </h1>
            <p className="text-center text-lg text-[#0e2207] mb-8">
              Join us today and start your journey with ease.
            </p>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#0e2207] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 border border-[#0e2207] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fbc91a]"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#0e2207] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-[#0e2207] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fbc91a]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#0e2207] mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 border border-[#0e2207] rounded-md focus:outline-none focus:ring-2 focus:ring-[#fbc91a]"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-[#0e2207] text-white rounded-md hover:bg-[#fbc91a] focus:outline-none focus:ring-2 focus:ring-[#fbc91a]"
              >
                {isLoading ? 'Loading...' : 'Sign Up'}
              </button>
              <div className="mt-6 text-center">
                <p className="text-sm text-[#0e2207]">
                  Already have an account?{' '}
                  <Link to="sign-in" className="text-[#fbc91a] font-semibold hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center md:flex-1 md:block order-last md:order-last">
          <img
            src="sign_up.jpg"
            alt="Sign Up Illustration"
            className="object-cover w-full h-64 md:h-full rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
