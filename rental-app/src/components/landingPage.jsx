import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-blue-50">
      {/* Grainy Background Effect */}
      <div className="absolute inset-0 z-0 backdrop-blur-sm bg-gradient-to-r from-blue-200/50 to-blue-400/50 mix-blend-multiply pointer-events-none"></div>

      {/* Navbar */}
      <div className="relative z-10 w-full bg-white flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-blue-500">MyLogo</div>
        <div className="flex gap-6 font-medium">
          <Link
            to="/hostpage"
            className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transition"
          >
            Be a host
          </Link>
          <Link
            to="/getapp"
            className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transition"
          >
            Get app
          </Link>
          <div className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transition">
            <Link to="/auth" className="hover:text-gray-700">Login</Link> /{" "}
            <Link to="/signup" className="hover:text-gray-700">SignUp</Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex px-10 mt-10 h-[80vh] items-center justify-between">
        {/* Form Container */}
        <div className="w-[40vw] bg-white text-black p-6 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Looking for best rental car?</h2>
          <p className="font-semibold mb-4">
            Book Self-Drive Cars in <span className="text-blue-400">Bangalore</span>?
          </p>
          <form>
            <div className="mb-3">
              <label className="text-gray-400">Location</label>
              <input
                className="w-full text-lg pl-4 py-2 rounded border border-gray-300"
                type="text"
              />
            </div>
            <div className="flex gap-4 mb-3">
              <div className="flex-1">
                <label className="text-gray-400">Trip starts</label>
                <input
                  className="w-full py-2 px-2 rounded border border-gray-300"
                  type="datetime-local"
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-400">Trip ends</label>
                <input
                  className="w-full py-2 px-2 rounded border border-gray-300"
                  type="datetime-local"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Delivery & Pick-up, from anywhere
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-400 text-white font-semibold rounded"
            >
              Search
            </button>
          </form>
        </div>

        {/* Image + Heading */}
        <div className="relative w-[50%] text-white ml-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
            What would you like <br />
            <span className="text-5xl md:text-6xl text-blue-600">Drive?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-md">
            Experience hassle-free car rentals with flexible options, instant booking, and doorstep delivery—all at your fingertips.
          </p>
{/* 
          <img
            src="src/assets/Untitled_design__9_-removebg-preview.png"
            alt="cars"
            className="absolute bottom-0 top-8  rotate-90 transform scale-x-[1] scale-y-[-1] w-[400px] max-w-full object-contain z-0"
          /> */}
        </div>
      </div>
</div>
      {/* Bottom Section Placeholder */}
      <div className="mt-10 bg-black">hello</div>
    </div>
  );
};

export default LandingPage;
