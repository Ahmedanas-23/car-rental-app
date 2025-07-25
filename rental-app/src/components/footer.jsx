import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left - Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Never Stop Driving</h2>
          <p className="text-gray-400 mt-2 text-sm">
            DRIVO - Bringing smarter car rentals to your city. Ride local. Drive smarter.
          </p>
          
        </div>

        {/* Center - Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Services</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-5">
          <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} DRIVO. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer