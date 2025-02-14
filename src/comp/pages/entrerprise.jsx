import React from 'react';
import { Briefcase } from 'lucide-react'; // Using the Briefcase icon for relevance

function Enterprise() {
  return (
    <div className="h-[80vh] bg-black text-white pt-24 pb-8 relative">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, black, transparent 15%, transparent 85%, black),
            linear-gradient(to bottom, black, transparent 15%, transparent 85%, black),
            linear-gradient(to right, rgba(75, 75, 75, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(75, 75, 75, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
          opacity: 0.6
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Title with icon */}
          <h1 className="text-4xl font-bold flex items-center space-x-4  text-white">
            <Briefcase className="text-4xl text-purple-500" />
            <span>Enterprise</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <p className="text-gray-300">
            Get in touch with us to learn more about our enterprise solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
