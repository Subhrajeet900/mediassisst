"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="app-pill">
            <span className="pulse-dot"></span> Welcome to the Ecosystem
          </div>
          
          <h1 className="text-5xl md:text-[84px] font-bold tracking-tight mb-6 font-heading leading-none">
            The Future of Healthcare, <br className="hidden md:block" />
            <em>In Your Pocket.</em>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-sub mb-10 leading-relaxed font-light">
            MediaSsisst connects doctors, patients, and pharmacies into one seamless digital healthcare ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#apps" className="btn-p">
              Discover Our Apps →
            </a>
            <a href="#about" className="btn-g">
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Floating Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface hover:bg-surface-hover border border-border text-foreground shadow-lg transition-colors cursor-none">
            <span>🩺</span> <span className="font-semibold">ClinicXpert</span>
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface hover:bg-surface-hover border border-border text-foreground shadow-lg transition-colors cursor-none">
            <span>💊</span> <span className="font-semibold">PharmaMate</span>
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface hover:bg-surface-hover border border-border text-foreground shadow-lg transition-colors cursor-none">
            <span>❤️</span> <span className="font-semibold">HealthBuddy</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted cursor-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[3px] uppercase opacity-70 mb-2 font-mono">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </motion.div>
    </section>
  );
}
