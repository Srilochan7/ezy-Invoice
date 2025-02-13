import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth, useClerk, SignUpButton } from "@clerk/clerk-react";
import { Settings, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 py-1">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold cursor-pointer">
          <img 
            src="../assets/nav.png" 
            alt="Ezy Invoice Logo" 
            className="w-15 h-auto transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => navigate('/')}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 animate__animated animate__fadeIn">
          {/* Main Navigation Links */}
          {!isSignedIn && (
            <button 
              onClick={() => scrollToSection('section1')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Features
            </button>
          )}

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <>
                <button
                  onClick={() => navigate('/features')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </button>
                <button
                  onClick={() => navigate('/clients')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Enterprise
                </button>
                <button
                  onClick={() => navigate('/clients')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Resources
                </button>
                {/* Settings Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none"
                  >
                    <Settings size={20} />
                    <ChevronDown size={16} />
                  </button>
                  
                  {/* Settings Menu */}
                  {isSettingsOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div 
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          role="menuitem"
                        >
                          <LogOut size={16} />
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <SignUpButton mode="modal">
                <button
                  className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Started
                  <span className="text-lg">⚡️</span>
                </button>
              </SignUpButton>
            )}
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
              {/* Same links as desktop menu */}
              {!isSignedIn && (
                <button
                  onClick={() => scrollToSection('section1')}
                  className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  Features
                </button>
              )}
              {isSignedIn ? (
                <>
                  <button
                    onClick={() => {
                      navigate('/features');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => {
                      navigate('/pricing');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => {
                      navigate('/clients');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Enterprise
                  </button>
                  <button
                    onClick={() => {
                      navigate('/clients');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Resources
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <SignUpButton mode="modal">
                  <button 
                    className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Get Started
                  </button>
                </SignUpButton>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
