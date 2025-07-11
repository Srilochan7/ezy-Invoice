import React, { useState, useEffect } from 'react';
import { Settings, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'pricing', 'enterprise', 'resources'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 py-1">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-bold cursor-pointer">
          <img
            src="../assets/nav.png"
            alt="Ezy Invoice Logo"
            className="w-15 h-auto transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => scrollToSection('home')}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 animate__animated animate__fadeIn">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('features')}
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${activeSection === 'features' ? 'text-white border-b-2 border-white' : ''}`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${activeSection === 'pricing' ? 'text-white border-b-2 border-white' : ''}`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('enterprise')}
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${activeSection === 'enterprise' ? 'text-white border-b-2 border-white' : ''}`}
            >
              Enterprise
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className={`text-gray-300 hover:text-white transition-colors duration-200 ${activeSection === 'resources' ? 'text-white border-b-2 border-white' : ''}`}
            >
              Resources
            </button>
            <button
              className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started <span className="text-lg">⚡️</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 bottom-0 left-0 bg-black shadow-lg menu-animation">
          <style>
            {`
              @keyframes slideIn {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
              .menu-animation {
                animation: slideIn 0.3s ease forwards;
              }
            `}
          </style>
          <div className="container mx-auto">
            <div className="py-2">
              <button
                onClick={() => scrollToSection('features')}
                className={`block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200 ${activeSection === 'features' ? 'bg-gray-800' : ''}`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className={`block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200 ${activeSection === 'pricing' ? 'bg-gray-800' : ''}`}
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('enterprise')}
                className={`block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200 ${activeSection === 'enterprise' ? 'bg-gray-800' : ''}`}
              >
                Enterprise
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className={`block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200 ${activeSection === 'resources' ? 'bg-gray-800' : ''}`}
              >
                Resources
              </button>
              <button
                className="block w-full text-left px-4 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
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
