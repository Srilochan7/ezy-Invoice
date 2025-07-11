import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(transparent 98%, rgba(255, 255, 255, 0.03) 50%),
                              linear-gradient(90deg, transparent 98%, rgba(255, 255, 255, 0.03) 50%)`,
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      {/* Side Gradients */}
      <div className="absolute inset-y-0 left-0 w-[400px] bg-gradient-to-r from-black via-black/50 to-transparent hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-[400px] bg-gradient-to-l from-black via-black/50 to-transparent hidden md:block" />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-900/30 to-purple-900/30 blur-[100px]" />

      {/* Hero Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mx-auto max-w-7xl text-center py-24 md:py-27">
          {/* Welcome Tag */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 md:px-4 py-2 text-xs md:text-sm text-white backdrop-blur-sm hover:bg-white/20"
          >
            <span>🎉</span>
            Welcome Back!
            <span className="ml-1">→</span>
          </motion.button>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 md:mb-6 text-4xl md:text-6xl font-bold tracking-tight text-white px-4 md:px-0"
          >
            Ready to create your next <span className="text-violet-500">invoice</span>?
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-2xl text-base md:text-lg text-gray-300 px-4 md:px-0"
          >
            Your dashboard is ready. Start creating and managing your invoices right away.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 mt-8"
          >
            <button
              // onClick={() => (window.location.href = "/dashboard")}
              // className="relative inline-flex overflow-hidden rounded-lg bg-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-black shadow-lg transition-all duration-300 ease-in-out hover:text-white after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-violet-500 after:transition-all after:duration-300 after:ease-in-out hover:bg-violet-500 hover:after:w-full"
            >
              <span className="relative z-10">Go to Dashboard</span>
            </button>
            <button
              onClick={() => (window.location.href = "/generate-invoice")}
              className="relative inline-flex overflow-hidden rounded-lg bg-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-black shadow-lg transition-all duration-300 ease-in-out hover:text-white after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-violet-500 after:transition-all after:duration-300 after:ease-in-out hover:bg-violet-500 hover:after:w-full"
            >
              <span className="relative z-10">Create New Invoice</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
