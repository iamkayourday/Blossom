import React from "react";
import Header from "../Components/Header";

const About = () => {
  return (
    <>
    <Header />
      {/* Hero Section */}
      <section>
        <div
          className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[900px] bg-cover bg-center flex justify-center items-center text-white text-center overflow-hidden"
          style={{
            backgroundImage: 'url("Hero.jpeg")',
          }}
        >
          {/* Text Overlay */}
          <div className="absolute bg-black/50 p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">About Bl🌼ssom</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
              Connecting farmers and buyers worldwide with trust and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Connecting buyers and sellers worldwide to revolutionize the
              agricultural marketplace with secure and seamless transactions.
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
            {/* Left Side: Text */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h3 className="text-3xl font-semibold text-green-800 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We aim to bridge the gap between agricultural buyers and sellers
                worldwide, offering a platform that ensures secure payments,
                trustworthy transactions, and real-time delivery tracking. Our
                goal is to empower farmers, distributors, and businesses by
                creating a reliable and accessible marketplace.
              </p>

              <h3 className="text-3xl font-semibold text-green-800 mb-6">
                Why Choose Us
              </h3>
              <ul className="list-disc pl-5 space-y-4 text-gray-700 text-lg">
                <li>Advanced product search and filtering.</li>
                <li>Secure payment processing with escrow protection.</li>
                <li>Real-time delivery tracking for peace of mind.</li>
                <li>Ratings and reviews to promote trust and transparency.</li>
              </ul>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2">
              <img
                src="Hero.jpeg"
                alt="About Us"
                className="w-full rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold text-green-800 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Join our platform today and experience a new way to connect,
              transact, and thrive in the agricultural industry.
            </p>
            <button className="bg-green-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-green-800 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
