"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  CheckCircle2,
  ShieldCheck,
  TriangleAlert,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const rotatingTexts = [
  "Explains difficult legal terms.",
  "Highlights important risks before you sign.",
  "Creates simple summaries in seconds.",
  "Helps you make confident decisions.",
];

const steps = [
  "Reading your document...",
  "Finding important clauses...",
  "Checking for possible risks...",
  "Preparing your summary...",
];

// Pre-defined static coordinates to prevent hydration errors
const particleData = [
  { left: "12%", top: "18%", duration: 4.2 },
  { left: "78%", top: "15%", duration: 5.5 },
  { left: "18%", top: "75%", duration: 3.8 },
  { left: "82%", top: "72%", duration: 6.1 },
  { left: "45%", top: "10%", duration: 4.9 },
  { left: "60%", top: "85%", duration: 5.2 },
  { left: "8%", top: "45%", duration: 4.5 },
  { left: "88%", top: "52%", duration: 5.8 },
];

export default function AboutSection() {
  const [currentText, setCurrentText] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const values = [25, 50, 75, 100];
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % steps.length;
        setProgress(values[next]);
        return next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      // Precise 20:60:20 Black-Blue-Black Gradient
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-12 lg:py-16 bg-[linear-gradient(to_bottom,#000000_0%,#000000_20%,#0B1A42_50%,#000000_80%,#000000_100%)]"
    >
      {/* Background Radiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#4169E1]/10 blur-[150px]" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#7EA1FF]/5 blur-[100px]" />
        <div className="absolute -right-32 top-16 h-64 w-64 rounded-full bg-[#4169E1]/5 blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
        `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating Particles (Hydration Safe) */}
      {particleData.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#7EA1FF]/60 blur-[0.5px] pointer-events-none"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4169E1]/30 bg-[#4169E1]/10 px-4 py-1.5 backdrop-blur-xl">
              <FileText size={14} className="text-[#7EA1FF]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AFC5FF]">
                About RechtLens
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            Understand Contracts,
            <span className="mt-1 block bg-gradient-to-r from-[#7EA1FF] via-white to-[#7EA1FF] bg-clip-text text-transparent">
              Not Legal Jargon.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              RechtLens helps you understand contracts in plain language,
              highlights important details, and warns you about possible
              risks—so you know exactly what you're signing.
            </p>

            <div className="mt-3 h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-medium text-[#7EA1FF]"
                >
                  {rotatingTexts[currentText]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Main Grid */}
        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold leading-tight text-white lg:text-3xl">
              Upload your contract.<br /> Let AI explain everything.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Whether it's a rental agreement, employment contract, NDA, or business document,
              RechtLens reads every page, highlights what matters, and creates a simple summary.
            </p>

            <div className="mt-6 space-y-3.5">
              {[
                "Easy-to-understand explanations",
                "Important clauses highlighted instantly",
                "Clear contract summaries",
                "Know what you're agreeing to",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4169E1]/15 ring-1 ring-[#4169E1]/25">
                    <CheckCircle2 size={12} className="text-[#7EA1FF]" />
                  </div>
                  <span className="text-sm text-slate-200">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/analyze">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#4169E1] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#5D82F3] shadow-[0_0_20px_rgba(65,105,225,0.3)]"
                >
                  Try RechtLens
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>

              <Link href="#features">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 backdrop-blur-xl transition hover:border-[#4169E1]/40 hover:bg-white/10"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[28px] bg-[#4169E1]/10 blur-2xl" />
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0f172a]/80 p-5 lg:p-6 backdrop-blur-2xl shadow-2xl"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                    Processing Document
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4169E1]/20">
                      <FileText size={18} className="text-[#7EA1FF]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Employment_Agreement.pdf</h4>
                      <p className="text-xs text-slate-400">2.4 MB • PDF</p>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-[11px] font-medium text-emerald-400 border border-emerald-500/20"
                >
                  AI Active
                </motion.div>
              </div>

              <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Analysis Steps */}
              <div className="space-y-4">
                {steps.map((step, index) => {
                  const completed = index < activeStep;
                  const current = index === activeStep;
                  return (
                    <div key={step} className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: current ? [1, 1.15, 1] : 1 }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          completed
                            ? "bg-emerald-500/15"
                            : current
                            ? "bg-[#4169E1]/20 border border-[#4169E1]/30"
                            : "bg-white/5 border border-white/5"
                        }`}
                      >
                        {completed ? (
                          <CheckCircle2 size={12} className="text-emerald-400" />
                        ) : (
                          <div
                            className={`h-1.5 w-1.5 rounded-full ${
                              current ? "bg-[#7EA1FF]" : "bg-slate-600"
                            }`}
                          />
                        )}
                      </motion.div>
                      <span
                        className={`text-xs ${
                          current
                            ? "text-white font-medium"
                            : completed
                            ? "text-slate-300"
                            : "text-slate-500"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-300">Analysis Progress</span>
                  <span className="text-[11px] font-bold text-[#7EA1FF]">{progress}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#4169E1] to-[#7EA1FF]"
                  />
                </div>
              </div>

              {/* AI Summary */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-4"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#7EA1FF]" />
                  <h5 className="text-xs font-semibold text-white">Quick Summary</h5>
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
                  Standard terms detected. Two clauses need attention before signing, while the remaining sections follow common industry practices.
                </p>
              </motion.div>

              {/* Bottom Cards */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                  <ShieldCheck className="mx-auto text-emerald-400" size={16} />
                  <p className="mt-1.5 text-[10px] text-slate-400 uppercase tracking-wider">Clauses</p>
                  <h6 className="text-xs font-semibold text-white">18 Safe</h6>
                </motion.div>

                <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-rose-500/10 bg-rose-500/5 p-3 text-center">
                  <TriangleAlert className="mx-auto text-rose-400" size={16} />
                  <p className="mt-1.5 text-[10px] text-rose-500/70 uppercase tracking-wider">Risks</p>
                  <h6 className="text-xs font-semibold text-rose-200">2 Found</h6>
                </motion.div>

                <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                  <CalendarDays className="mx-auto text-[#7EA1FF]" size={16} />
                  <p className="mt-1.5 text-[10px] text-slate-400 uppercase tracking-wider">Dates</p>
                  <h6 className="text-xs font-semibold text-white">3 Listed</h6>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
