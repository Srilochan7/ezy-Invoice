import React from 'react';

const Footer = () => {
  const letters = ['e', 'z', 'y', '-', 'I', 'n', 'v', 'o', 'i', 'c', 'e'];
  
  return (
    <footer className="bg-[#0A0A0A] py-8 md:py-12 px-3">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 md:mb-8 overflow-x-auto">
          <div className="flex">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="text-4xl md:text-8xl font-bold text-transparent transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-glow"
                style={{
                  letterSpacing: '0.1em',
                  WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                  textStroke: '1px rgba(255,255,255,0.1)',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} ezy Invoice INC. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(255,255,255,0); 
            color: transparent;
          }
          50% { 
            text-shadow: 0 0 20px rgba(255,255,255,0.8);
            color: white;
          }
        }

        .animate-glow {
          animation: glow 3s infinite;
          animation-fill-mode: both;
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

        @media (max-width: 768px) {
          .animate-glow {
            animation-duration: 2s;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;