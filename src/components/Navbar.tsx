"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Apps", href: "#apps" },
  { name: "About", href: "#about" },
  { name: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-[20px] bg-dark/85 border-b cursor-none",
        scrolled ? "border-white/10 shadow-lg py-4" : "border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group cursor-none">
            <span className="font-heading text-2xl font-bold tracking-tight text-text">
              Media<span className="text-primary italic font-normal">Ssisst</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sub hover:text-primary transition-colors text-xs tracking-widest uppercase font-mono cursor-none"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center">
             <a
              href="#apps"
              className="text-primary border border-primary/20 bg-primary/5 px-4 py-1.5 text-[11px] tracking-[2px] uppercase font-mono hover:bg-primary/10 transition-colors cursor-none"
            >
              Ecosystem
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2 cursor-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/10 overflow-hidden cursor-none"
          >
            <div className="px-4 pt-8 pb-3 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-3 py-4 text-sm font-mono tracking-widest uppercase text-text hover:text-primary cursor-none"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
