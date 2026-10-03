"use client";

import { motion } from "framer-motion";
import { FileText, TriangleAlert, MessageSquare, ScanSearch } from "lucide-react";

const features = [
  {
    title: "Smart Contract Summary",
    description: "Understand long contracts in minutes with concise, AI-generated summaries that highlight the most important information.",
    icon: FileText,
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "Risk Detection",
    description: "Identify clauses that may require extra attention, including penalties, renewals, confidentiality, and termination conditions.",
    icon: TriangleAlert,
    color: "from-rose-500 to-red-500",
    shadow: "shadow-rose-500/20",
  },
  {
    title: "Simple Language Explanations",
    description: "Convert difficult legal terminology into clear, everyday language that's easy for anyone to understand.",
    icon: MessageSquare,
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20",
  },
  {
    title: "Key Information Extraction",
    description: "Automatically find important details like parties, dates, payment terms, notice periods, and contract duration without searching manually.",
    icon: ScanSearch,
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/20",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#000000] py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* 
        Inline CSS to handle responsive origin points. 
        This ensures they always stack exactly at Card 4's position 
        on both a 2x2 grid (Mobile) and a 4x1 grid (Desktop).
      */}
      <style>{`
        /* Mobile: 2x2 Grid. Origin is Bottom-Right (Card 3) */
        .card-origin-0 { --init-x: calc(100% + 1.5rem); --init-y: calc(100% + 1.5rem); }
        .card-origin-1 { --init-x: 0%; --init-y: calc(100% + 1.5rem); }
        .card-origin-2 { --init-x: calc(100% + 1.5rem); --init-y: 0%; }
        .card-origin-3 { --init-x: 0%; --init-y: 0%; }

        /* Desktop: 4x1 Grid. Origin is Far-Right (Card 3) */
        @media (min-width: 1024px) {
          .card-origin-0 { --init-x: calc(300% + 4.5rem); --init-y: 0%; }
          .card-origin-1 { --init-x: calc(200% + 3rem); --init-y: 0%; }
          .card-origin-2 { --init-x: calc(100% + 1.5rem); --init-y: 0%; }
          .card-origin-3 { --init-x: 0%; --init-y: 0%; }
        }
      `}</style>

      {/* Background Radiance */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-[#4169E1]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7EA1FF]">
                Core Features
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Everything you need to
            <span className="block mt-2 bg-gradient-to-r from-[#7EA1FF] to-[#b3c9ff] bg-clip-text text-transparent">
              sign with confidence.
            </span>
          </motion.h2>
        </div>

        {/* 3D Dealing Cards Grid (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                className={`card-origin-${index} group relative`}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  // Cards start at the variables defined in the CSS block above
                  x: "var(--init-x)",
                  y: "var(--init-y)",
                  // Rotate them increasingly to look like a messy stack
                  rotate: (3 - index) * 8, 
                  zIndex: 10 - index,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  zIndex: 1,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 14,
                  mass: 1,
                  // Deal them one by one: Leftmost (Card 0) flies out first!
                  delay: 0.1 + index * 0.15, 
                }}
              >
                {/* 3D Card Container */}
                <div className={`relative h-full flex flex-col rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#020617] p-6 lg:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:${feature.shadow}`}>
                  
                  {/* Top Bevel Highlight for 3D effect */}
                  <div className="absolute inset-0 rounded-3xl border-t border-white/20 pointer-events-none mix-blend-overlay" />
                  
                  {/* Icon Container */}
                  <div className={`mb-6 inline-flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg ring-1 ring-white/20`}>
                    <feature.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white drop-shadow-md" />
                  </div>

                  {/* Text Content */}
                  <h3 className="mb-3 text-lg lg:text-xl font-semibold text-white tracking-wide">
                    {feature.title}
                  </h3>
                  
                  <p className="text-xs lg:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Subtle decorative glow that appears on hover */}
                  <div className={`absolute -inset-px rounded-3xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-20 bg-gradient-to-br ${feature.color} pointer-events-none z-[-1]`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}