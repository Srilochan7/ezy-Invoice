import React from 'react';
import Navbar from './navbar';

const CurrencySymbol = ({ symbol }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative cursor-pointer transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`text-6xl font-bold text-blue-500 transition-all duration-300 
        ${isHovered ? 'translate-y-[-10px] scale-110' : ''}`}
      >
        {symbol}
      </div>
      {isHovered && (
        <div className="absolute inset-x-0 bottom-[-30px] text-sm text-white opacity-75 text-center">
          {symbol === '$' ? 'USD' : symbol === '₹' ? 'INR' : 'EUR'}
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full" 
          style={{
            backgroundImage: `linear-gradient(transparent 98%, rgba(255, 255, 255, 0.03) 50%), 
                            linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.03) 50%)`,
            backgroundSize: '4rem 4rem'
          }}>
        </div>
      </div>

      {/* Side Gradients - Hidden on mobile */}
      <div className="absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-black via-black/50 to-transparent hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-[400px] bg-gradient-to-l from-black via-black/50 to-transparent hidden md:block" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-900/30 to-purple-900/30 blur-[100px]" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 px-4 md:px-6 pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl text-center">
          {/* Smart Links Button */}
          <button className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 md:px-4 py-2 text-xs md:text-sm text-white backdrop-blur-sm hover:bg-white/20">
            <span>✨</span>
            Manage Invoices "ezy"ly
            <span className="ml-1">→</span>
          </button>

          {/* Main Heading */}
          <h1 className="mb-4 md:mb-6 text-4xl md:text-6xl font-bold tracking-tight text-white px-4 md:px-0">
            Generate and manage{" "}
            <span className="text-violet-500">invoices</span> in minutes,
            <br className="hidden md:block" />
            <span className="text-violet-500">Track</span> payments effortlessly.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-300 px-4 md:px-0">
            Effortlessly manage your invoices with Ezy Invoice.
            <br className="hidden md:block" />
            Generate, track, and organize your payments in one place.
          </p>

          {/* CTA Button */}
          <button className="relative inline-flex overflow-hidden rounded-lg bg-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-black shadow-lg transition-all duration-300 ease-in-out hover:text-white disabled:opacity-50 disabled:cursor-not-allowed after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-violet-500 after:transition-all after:duration-300 after:ease-in-out hover:bg-violet-500 hover:after:w-full mt-6 md:mt-8">
            <span className="relative z-10">
              Get Started
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Hero;