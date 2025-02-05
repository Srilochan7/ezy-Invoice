import React from 'react';
import Navbar from './navbar';

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

      {/* Side Gradients */}
      <div className="absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-black via-black/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[400px] bg-gradient-to-l from-black via-black/50 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-900/30 to-purple-900/30 blur-[100px]" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 px-6 pt-20">
        <div className="mx-auto max-w-7xl text-center">
          {/* Smart Links Button */}
          <button className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/20">
            <span>✨</span>
            Manage links smarter
            <span className="ml-1">→</span>
          </button>

          {/* Main Heading */}
          <h1 className="mb-6 text-6xl font-bold tracking-tight text-white">
            Smart Links
            <br />
            with{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Precision
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Effortlessly streamline your link management with Linkify.
            <br />
            Shorten, track, and organize all your links in one place.
          </p>

          {/* CTA Button */}
          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-black hover:bg-gray-100">
            Start creating for free
            <span className="ml-1">→</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Hero;