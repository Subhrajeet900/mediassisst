"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] border-t-2 border-primary/20 relative w-full pt-16 pb-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column */}
          <div className="space-y-6 text-center md:text-left">
            <Link href="#home" className="flex items-center justify-center md:justify-start gap-2 group cursor-none">
              <span className="font-heading text-2xl font-bold tracking-tight text-text">
                Media<span className="text-primary italic font-normal">Ssisst</span>
              </span>
            </Link>
            <p className="text-muted text-sm max-w-xs mx-auto md:mx-0">
              Bridging healthcare, one app at a time.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          {/* Middle Column */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-muted hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-muted hover:text-primary transition-colors text-sm">About</a></li>
              <li><a href="#apps" className="text-muted hover:text-primary transition-colors text-sm">Our Apps</a></li>
              <li><a href="#connect" className="text-muted hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-heading font-bold mb-6 text-lg">Our Apps</h4>
            <ul className="space-y-4">
              <li><a href="#clinicxpert" className="text-muted hover:text-[#00c896] transition-colors text-sm flex items-center justify-center md:justify-start gap-2"><span>🩺</span> ClinicXpert</a></li>
              <li><a href="#healthbuddy" className="text-muted hover:text-[#00a86b] transition-colors text-sm flex items-center justify-center md:justify-start gap-2"><span>❤️</span> HealthBuddy</a></li>
              <li><a href="#pharmamate" className="text-muted hover:text-[#1a7a4a] transition-colors text-sm flex items-center justify-center md:justify-start gap-2"><span>💊</span> PharmaMate</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted/60">
          <p>© 2025 MediaSsisst. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Subtle bottom green gradient glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_2px_rgba(0,200,150,0.5)]"></div>
    </footer>
  );
}
