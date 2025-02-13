import React from 'react';

const AuthenticatedHero = () => {
    return (
        <div className="relative min-h-screen">
          <div className="mx-auto max-w-7xl text-center py-24 md:py-27">
            {/* Top Tag */}
            <button className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 md:px-4 py-2 text-xs md:text-sm text-white backdrop-blur-sm hover:bg-white/20">
              <span>🎉</span>
              Welcome Back!
              <span className="ml-1">→</span>
            </button>
      
            {/* Main Heading */}
            <h1 className="mb-4 md:mb-6 text-4xl md:text-6xl font-bold tracking-tight text-white px-4 md:px-0">
              Ready to create your next{" "}
              <span className="text-violet-500">invoice</span>?
            </h1>
      
            {/* Description */}
            <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-300 px-4 md:px-0">
              Your dashboard is ready. Start creating and managing your invoices right away.
            </p>
      
            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="relative inline-flex overflow-hidden rounded-lg bg-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-black shadow-lg transition-all duration-300 ease-in-out hover:text-white disabled:opacity-50 disabled:cursor-not-allowed after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-violet-500 after:transition-all after:duration-300 after:ease-in-out hover:bg-violet-500 hover:after:w-full"
              >
                <span className="relative z-10">Go to Dashboard</span>
              </button>
              <button
                onClick={() => window.location.href = '/create-invoice'}
                className="relative inline-flex overflow-hidden rounded-lg bg-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-black shadow-lg transition-all duration-300 ease-in-out hover:text-white disabled:opacity-50 disabled:cursor-not-allowed after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-violet-500 after:transition-all after:duration-300 after:ease-in-out hover:bg-violet-500 hover:after:w-full"
              >
                Create New Invoice
              </button>
            </div>
          </div>
        </div>
      );
      
};

export default AuthenticatedHero;