"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function Connect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="connect" className="py-24 bg-dark relative overflow-hidden">
      {/* Floating orbs background */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-64 h-64 bg-primary/10 blur-[100px] rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-80 h-80 bg-accent/10 blur-[120px] rounded-full"
      ></motion.div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="section-tag">Contact</div>
          <h2 className="text-4xl md:text-[56px] font-bold font-heading text-text mb-4 leading-none tracking-tight">
            Get In <br />
            <em>Touch.</em>
          </h2>
          <p className="text-lg text-sub font-body max-w-2xl mt-4 font-light">Want to know more? Reach out and we&apos;ll get back to you.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[11px] uppercase tracking-widest font-mono text-muted">Full Name</label>
                <input required type="text" id="name" className="w-full bg-dark border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-text font-body outline-none transition-colors cursor-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[11px] uppercase tracking-widest font-mono text-muted">Email Address</label>
                <input required type="email" id="email" className="w-full bg-dark border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-text font-body outline-none transition-colors cursor-none" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="text-[11px] uppercase tracking-widest font-mono text-muted">Your Role</label>
              <select id="role" className="w-full bg-dark border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-text font-body outline-none transition-colors appearance-none cursor-none">
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="investor">Investor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[11px] uppercase tracking-widest font-mono text-muted">Message</label>
              <textarea required id="message" rows={4} className="w-full bg-dark border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-text font-body outline-none transition-colors resize-none cursor-none" placeholder="Tell us how we can help..."></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-p w-full rounded-xl mt-4"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Send Message <span>→</span>
                </span>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 flex items-center gap-3 bg-surface border border-primary px-6 py-4 rounded-full shadow-[0_0_20px_rgba(0,200,150,0.3)]"
          >
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <span className="text-white font-medium">Thanks! We&apos;ll reach out shortly.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
