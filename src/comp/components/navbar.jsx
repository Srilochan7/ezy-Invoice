import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="relative z-10 px-6 py-4 w-full">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold cursor-pointer">
          <img 
            src="../assets/nav.png" 
            alt="Ezy Invoice Logo" 
            className="w-25 h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 animate__animated animate__fadeIn">
          {/* Main Navigation Links */}
          <button 
            onClick={() => scrollToSection('section1')}
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Features
          </button>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {/* <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Generate Invoice
            </button> */}
            <button
              // onClick={() => navigate('/generate')}
              className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
              <span className="text-lg">⚡️</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 bottom-0 left-0 bg-black shadow-lg menu-animation">
          <style>
            {`
              @keyframes slideIn {
                from {
                  transform: translateX(100%);
                }
                to {
                  transform: translateX(0);
                }
              }
              
              .menu-animation {
                animation: slideIn 0.3s ease forwards;
              }
            `}
          </style>
          <div className="container mx-auto">
            <div className="py-2">
              <button
                onClick={() => scrollToSection('section1')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-gray-50 transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('section2')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-gray-50 transition-colors duration-200"
              >
                Generte <br/> Invoice
              </button>
              <button 
                // onClick={() => navigate('/generate')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-gray-50 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;