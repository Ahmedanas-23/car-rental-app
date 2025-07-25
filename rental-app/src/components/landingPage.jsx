import React, { useState } from "react";
import { Link } from "react-router-dom";
// The user's code uses react-router-dom, but for a self-contained example,
// we'll simulate the Link component. In a real app, you'd use the library.

const LandingPage = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main container: min-h-screen ensures it takes at least the full screen height
    // but can grow if content overflows on small mobile screens.
    <div className="w-full overflow-hidden min-h-screen bg-blue-50">
      {/* Relative container for the background and content */}
      <div className="relative w-full min-h-screen">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0">
          {/* The image now uses object-cover to fill the space without distortion */}
          <img
            src="public/assets/photo-1511919884226-fd3cad34687c.avif"
            alt="Woman next to a red car"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 backdrop-blur-sm bg-gradient-to-r from-blue-200/50 to-blue-400/50 mix-blend-multiply"></div>
        </div>

        {/* Content Wrapper: Sits on top of the background */}
        <div className="relative z-20 flex flex-col min-h-screen">
          {/* Navbar */}
          {/* FIXED: Added z-30 to ensure the nav bar is on a higher layer than the hero section */}
          <nav className="w-full fixed bg-blue-50/80 backdrop-blur-sm z-30">
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
               {/* Logo */}
              <div className="mt-[-10px] p-0 scale-90 md:scale-100 md:ml-5">
                <span className="font-bold text-5xl text-blue-400">D</span>
                <div className="w-[90px] mt-[-12px] ml-1 h-[8px] bg-blue-400"></div>
                <div className="font-bold text-2xl mt-[-33px] ml-10">rivo</div>
              </div>

              {/* Desktop Navigation Links */}
              {/* Hidden on mobile (hidden), visible on medium screens and up (md:flex) */}
              <div className="hidden md:flex gap-4 font-medium md:gap-6">
                <Link
                  to="/hostpage"
                  className="border border-gray-300 px-4 py-2 md:px-6 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  Be a host
                </Link>
                <Link
                  to="/getapp"
                  className="border border-gray-300 px-4 py-2 md:px-6 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  Get app
                </Link>
                <div className="border border-gray-300 px-4 py-2 md:px-6 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition">
                  <Link to="/login">Login</Link>
                </div>
              </div>

              {/* Hamburger Menu Button */}
              {/* Visible only on mobile (md:hidden) */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-blue-500 focus:outline-none"
                >
                  {/* Conditionally render hamburger or close icon */}
                  {isMenuOpen ? (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {/* This div is the dropdown menu. It uses absolute positioning and transitions for a smooth effect. */}
            <div
              className={`md:hidden absolute top-full left-0 w-full bg-blue-50/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? "max-h-screen py-4" : "max-h-0"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <Link
                  to="/hostpage"
                  className="w-4/5 text-center border border-gray-300 px-6 py-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  Be a host
                </Link>
                <Link
                  to="/getapp"
                  className="w-4/5 text-center border border-gray-300 px-6 py-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
                >
                  Get app
                </Link>

                <Link
                className="w-4/5 text-center border border-gray-300 px-6 py-2 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition"
                to="/login"
                >Login
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative flex-grow flex flex-col md:flex-row px-4 py-8 md:px-10 items-center justify-center md:justify-center gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-white text-center md:text-left mt-20 md:ml-10">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-50">
                What would you like <br />
                <span className="text-5xl md:text-6xl text-blue-50">Drive?</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-blue-50 font-semibold max-w-md mx-auto md:mx-0">
                Experience hassle-free car rentals with Drivo, instant
                booking, and doorstep delivery all at your fingertips.
              </p>
            </div>

            {/* Form Container */}
            <div className="w-full max-w-md md:w-[45vw] bg-black/30 backdrop-blur-lg mt-5 md:mt-20 text-white p-4 md:p-6 rounded-lg shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Looking for the best rental car?
              </h2>
              <p className="font-semibold mb-4">
                Book Self-Drive Cars in{" "}
                <span className="text-blue-400">Bangalore</span>
              </p>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-200 mb-1">Location</label>
                  <input
                    className="w-full text-lg pl-4 py-2 rounded border border-gray-400 bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    type="text"
                    placeholder="Enter a city or airport"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-gray-200 mb-1">Trip starts</label>
                    <input
                      className="py-2 md:w-47 w-full px-2 rounded border border-gray-400 bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      type="datetime-local"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-200 mb-1">Trip ends</label>
                    <input
                      className="md:w-47 py-2 px-2 w-full rounded border border-gray-400 bg-gray-50 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      type="datetime-local"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="flex items-center hover:cursor-pointer">
                    <input type="checkbox" className="mr-2 h-4 w-4 accent-blue-400" />
                    Delivery & Pick-up, from anywhere
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;