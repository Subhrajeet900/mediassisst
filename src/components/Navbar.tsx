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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-dark/90 backdrop-blur-xl shadow-lg border-b border-primary/20" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center">
              <Activity className="text-primary w-6 h-6" />
              <div className="absolute w-2 h-2 rounded-full bg-accent -top-1 -right-1 animate-ping"></div>
              <div className="absolute w-2 h-2 rounded-full bg-primary -top-1 -right-1"></div>
            </div>
            <span className="font-heading text-xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Media</span>
              <span className="text-foreground">Ssisst</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#apps"
              className="relative group p-[1px] rounded-full overflow-hidden bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x"
            >
              <div className="bg-dark/90 px-6 py-2 rounded-full group-hover:bg-dark/60 transition-colors">
                <span className="font-semibold text-sm bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
                  Explore Ecosystem <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
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
            className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-primary/20 overflow-hidden"
          >
            <div className="px-4 pt-8 pb-3 space-y-4 flex flex-col items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-3 py-4 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-surface/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 w-full px-4">
                <a
                  href="#apps"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-primary hover:bg-accent text-dark font-bold py-3 px-4 rounded-full transition-colors"
                >
                  Explore Ecosystem →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
