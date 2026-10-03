"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContractScene from "./ContractScene"; // Adjust path if needed

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto px-6 py-12 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      
      {/* Left Column: Text & CTAs */}
      <div className="flex-1 flex flex-col items-start z-10 w-full">
        
        {/* Top Badge */}
        <div className="mb-6 rounded-full border border-[#4169E1]/30 bg-[#4169E1]/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="text-xs font-medium text-[#7EA1FF] tracking-wide">
            AI Contract Intelligence
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
          Understand <br />
          Before You
        </h1>

        {/* Animated Completion Text */}
        <div className="mt-2 mb-8 h-[60px] md:h-[80px] w-full">
          <AnimatedHeroText />
        </div>

        {/* Subtitle/Description */}
        <p className="mb-10 max-w-[480px] text-base md:text-lg text-slate-400 leading-relaxed">
          RechtLens uses AI to simplify contracts, highlight hidden risks, explain
          complex clauses in plain English, and help you make confident decisions
          before signing.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-lg bg-[#4169E1] hover:bg-[#3154b5] transition-colors px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(65,105,225,0.4)]">
            Analyze Contract
          </button>
          <button className="rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors px-6 py-3.5 text-sm font-semibold text-slate-300">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right Column: 3D Contract Scene */}
      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <ContractScene />
      </div>

    </section>
  );
}

// ------------------------------
// Animated Hero Text Component
// ------------------------------
function AnimatedHeroText() {
  const texts = [
    "Sign.",
    "Review Employment Contracts.",
    "Review Rental Agreements.",
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // Slightly slower than the badge for better readability on large text
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateX: 90, y: 20, transformOrigin: "left center" }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: -90, y: -20 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
          }}
          className="absolute inset-0 flex items-start justify-start"
        >
          <span className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-[#a3bfff] leading-[1.1]">
            {texts[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
