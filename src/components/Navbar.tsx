"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
            <nav className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 lg:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setMenuOpen(false)}
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4169E1]">
                        <Scale size={20} className="text-white" />
                    </div>

                    <span className="font-[family:var(--font-bonanova)] text-3xl font-bold tracking-[0.03em] text-white">
  Recht<span className="text-[#4169E1]">Lens</span>
</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <a
                        href="#features"
                        className="text-[15px] font-medium text-slate-300 transition duration-200 hover:text-white"
                    >
                        Features
                    </a>

                    <a
                        href="#how-it-works"
                        className="text-[15px] font-medium text-slate-300 transition duration-200 hover:text-white"
                    >
                        How It Works
                    </a>

                   <Link
  href="/login"
  className="rounded-md border border-[#4169E1] px-5 py-2.5 text-[15px] font-semibold text-[#4169E1] transition-all duration-200 hover:bg-[#4169E1] hover:text-white"
>
  Login
</Link>

                  <Link
  href="/signup"
  className="rounded-md bg-[#4169E1] px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#5A7BFF]"
>
  Sign Up
</Link>

                </div>

                {/* Hamburger */}
                <button
                    className="rounded-md p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">

                    <a
                        href="#features"
                        className="block px-5 py-4 text-slate-300 transition hover:bg-white/5 hover:text-white"
                        onClick={() => setMenuOpen(false)}
                    >
                        Features
                    </a>

                    <a
                        href="#how-it-works"
                        className="block px-5 py-4 text-slate-300 transition hover:bg-white/5 hover:text-white"
                        onClick={() => setMenuOpen(false)}
                    >
                        How It Works
                    </a>

                    <Link
                        href="/login"
                        className="block px-5 py-4 text-slate-300 transition hover:bg-white/5 hover:text-white"
                        onClick={() => setMenuOpen(false)}
                    >
                        Login
                    </Link>

                    <div className="px-5 pb-5 pt-2">
                        <Link
                            href="/signup"
                            className="block rounded-md bg-[#4169E1] py-3 text-center font-semibold text-white transition hover:bg-[#5A7BFF]"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}