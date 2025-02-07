import React, { useEffect, useState } from 'react';

const Footer = () => {
  const letters = ['e', 'z', 'y', '-', 'I', 'n', 'v', 'o', 'i', 'c', 'e'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animate glow effect on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % letters.length);
      }, 300); // Adjust timing as needed
      return () => clearInterval(interval);
    }
  }, [isMobile, letters.length]);

  return (
    <footer className="bg-[#0A0A0A] py-8 md:py-12 px-3">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 md:mb-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`
                text-4xl md:text-8xl font-bold text-transparent transition-all duration-300
                ${!isMobile ? 'hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : ''}
                ${isMobile && activeIndex === index ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : ''}
              `}
              style={{
                letterSpacing: isMobile ? '0.1em' : '0.2em',
                WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                textStroke: '1px rgba(255,255,255,0.1)'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} ezy Invoice INC. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.8); }
          100% { text-shadow: 0 0 5px rgba(255,255,255,0.5); }
        }
        footer {
          background: linear-gradient(to bottom, #0A0A0A, #121212);
          position: relative;
        }
        footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
