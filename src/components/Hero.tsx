"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const BackgroundOverlay = dynamic(() => import("./BackgroundOverlay"), {
  ssr: false,
});

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
      <BackgroundOverlay />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="will-change-opacity"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-wider text-accent uppercase">Welcome to the Ecosystem</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-heading">
            The Future of Healthcare, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#00C896] to-[#7FFFD4] bg-clip-text text-transparent">
              In Your Pocket
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted mb-10 leading-relaxed">
            MediaSsisst connects doctors, patients, and pharmacies into one seamless digital healthcare ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#apps" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-accent text-dark font-bold transition-all shadow-[0_0_20px_rgba(0,200,150,0.4)] hover:shadow-[0_0_30px_rgba(127,255,212,0.6)]">
              Discover Our Apps
            </a>
            <a href="#about" className="w-full sm:w-auto px-8 py-4 rounded-full border border-primary text-primary hover:bg-primary/10 font-bold transition-all">
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
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface/80 backdrop-blur-md border border-primary/20 text-foreground shadow-lg">
            <span>🩺</span> <span className="font-semibold">ClinXpert</span>
          </motion.div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface/80 backdrop-blur-md border border-primary/20 text-foreground shadow-lg">
            <span>💊</span> <span className="font-semibold">PharmaMate</span>
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface/80 backdrop-blur-md border border-primary/20 text-foreground shadow-lg">
            <span>❤️</span> <span className="font-semibold">HealthBuddy</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs mb-2 tracking-widest uppercase opacity-70">Scroll</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </motion.div>
    </section>
  );
}
