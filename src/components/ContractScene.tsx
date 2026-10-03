"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

// Pre-defined static coordinates to avoid hydration mismatches from Math.random()
const particleData = [
  { left: "22%", top: "18%", duration: 4.2 },
  { left: "78%", top: "25%", duration: 5.5 },
  { left: "15%", top: "65%", duration: 3.8 },
  { left: "82%", top: "72%", duration: 6.1 },
  { left: "45%", top: "15%", duration: 4.9 },
  { left: "60%", top: "85%", duration: 5.2 },
  { left: "32%", top: "82%", duration: 4.5 },
  { left: "85%", top: "45%", duration: 5.8 },
  { left: "28%", top: "35%", duration: 3.5 },
  { left: "55%", top: "22%", duration: 6.5 },
  { left: "38%", top: "58%", duration: 4.1 },
  { left: "72%", top: "60%", duration: 5.4 },
];

export default function ContractScene() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[640px] items-center justify-center overflow-visible">
      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-[#4169E1]/20 blur-[120px]" />

      {/* Orbital Rings */}
      <motion.div
        className="absolute h-[430px] w-[430px] rounded-full border border-white/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[520px] w-[520px] rounded-full border border-[#4169E1]/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[470px] w-[470px] rounded-full border border-dashed border-[#4169E1]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      />

      {/* Spoke Connection Lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 640 640"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#4169E1" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#7EA1FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4169E1" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="320" y1="160" x2="320" y2="90" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="220" y1="210" x2="140" y2="160" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="420" y1="210" x2="500" y2="160" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="190" y1="320" x2="110" y2="320" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="450" y1="320" x2="530" y2="320" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="230" y1="430" x2="160" y2="500" stroke="url(#lineGrad)" strokeWidth="2" />
        <line x1="410" y1="430" x2="480" y2="500" stroke="url(#lineGrad)" strokeWidth="2" />
      </svg>

      {/* Central Contract */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotateY: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute z-30 h-[380px] w-[280px] rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex flex-col p-8"
      >
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-[#4169E1]/20 p-2">
            <FileText size={20} className="text-[#7EA1FF]" />
          </div>
          <span className="font-semibold text-white tracking-widest text-sm">
            CONTRACT
          </span>
        </div>

        {/* Structured Content */}
        <div className="space-y-4 flex-1">
          <div className="h-2 rounded-full bg-slate-700/60" />
          <div className="h-2 w-4/5 rounded-full bg-slate-700/60" />
          <div className="h-2 rounded-full bg-slate-700/60" />
          <div className="h-2 w-3/4 rounded-full bg-slate-700/60" />

          {/* Unique 3D Animated Text Component */}
          <div className="pt-4">
             <AnimatedTaskBadge />
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm font-medium text-red-300">
              <AlertTriangle size={16} />
              ⚠ High Risk Clause
            </div>
          </div>
        </div>

        {/* Scanner Line */}
        <motion.div
          animate={{
            top: ["10%", "90%", "10%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#7EA1FF] to-transparent blur-[1px]"
        />
      </motion.div>

      {/* Floating Assets */}
      <FloatingAsset src="/assets/pen.png" alt="Pen" size={95} top="2%" left="42%" delay={0} />
      <FloatingAsset src="/assets/weigh.png" alt="Scale" size={105} top="12%" left="7%" delay={1} />
      <FloatingAsset src="/assets/magnifier.png" alt="Magnifier" size={115} top="12%" right="7%" delay={2} />
      <FloatingAsset src="/assets/nda.png" alt="NDA" size={110} top="44%" left="-1%" delay={3} />
      <FloatingAsset src="/assets/shield.png" alt="Shield" size={105} top="44%" right="-1%" delay={4} />
      <FloatingAsset src="/assets/order.png" alt="Order" size={100} bottom="10%" left="12%" delay={5} />
      <FloatingAsset src="/assets/tag.png" alt="Tag" size={90} bottom="10%" right="12%" delay={6} />

      {/* Elegant Particles (Hydration Safe) */}
      {particleData.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#7EA1FF]/70"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ------------------------------
// Animated 3D Text Badge Component
// ------------------------------
function AnimatedTaskBadge() {
  const texts = [
    "1. Sign.",
    "2. Review Employment Contracts.",
    "3. Review Rental Agreements."
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-14 w-full" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateX: 90, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, rotateX: -90, y: -15, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 250, 
            damping: 20 
          }}
          className="absolute inset-0 flex items-center justify-center rounded-xl border border-[#4169E1]/40 bg-gradient-to-r from-[#4169E1]/10 to-[#7EA1FF]/5 px-4 shadow-[0_0_15px_rgba(65,105,225,0.15)]"
        >
          <span className="text-center text-[13px] font-semibold tracking-wide text-[#7EA1FF]">
            {texts[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ------------------------------
// Floating Asset Component
// ------------------------------
type FloatingProps = {
  src: string;
  alt: string;
  size?: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: number;
};

function FloatingAsset({
  src,
  alt,
  size = 90,
  top,
  bottom,
  left,
  right,
  delay,
}: FloatingProps) {
  return (
    <motion.div
      style={{ top, bottom, left, right }}
      className="absolute z-40" 
      animate={{
        y: [-12, 12, -12],
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 4 + delay * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        draggable={false}
        className="h-auto select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)] transition-all hover:scale-105"
        style={{ width: `${size}px` }} 
      />
    </motion.div>
  );
}