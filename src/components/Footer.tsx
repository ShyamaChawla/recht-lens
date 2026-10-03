"use client";

import Link from "next/link";
import { Scale } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#000000] pt-12 pb-8 overflow-hidden border-t border-white/5">
      
      {/* Subtle Top Glow Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-[#4169E1]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-1/2 bg-[#4169E1]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-4">
          
          {/* Left: Logo & Brand */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4169E1] to-[#2b4baf] shadow-lg shadow-[#4169E1]/20">
              <Scale size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide text-white">
              RechtLens
            </span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "#about" },
              { name: "Features", href: "#features" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-[#7EA1FF]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Copyright */}
          <div className="w-full md:w-auto text-center md:text-right text-sm text-slate-500">
            &copy; {currentYear} RechtLens. All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
}