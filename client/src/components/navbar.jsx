import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative z-10 px-6 py-4 w-full">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold cursor-pointer">
          Linkify
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Main Navigation Links */}
          <div className="flex items-center gap-4">
            <div className="group relative">
              <button className="text-gray-300 hover:text-white flex items-center gap-1">
                Features
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
            </div>
            <button className="text-gray-300 hover:text-white">
              Pricing
            </button>
            <button className="text-gray-300 hover:text-white">
              Enterprise
            </button>
            <div className="group relative">
              <button className="text-gray-300 hover:text-white flex items-center gap-1">
                Resources
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
            </div>
            <button className="text-gray-300 hover:text-white">
              Changelog
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white">
              Sign In
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
              Get Started
              <span className="text-lg">⚡️</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;