"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Activity, ShieldCheck } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Activity className="w-6 h-6 text-primary" />, value: "500+", label: "Doctors" },
    { icon: <Users className="w-6 h-6 text-primary" />, value: "10K+", label: "Patients" },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, value: "99.9%", label: "Uptime" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-surface border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-start lg:items-center lg:text-center">
          <div className="section-tag">About Us</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[56px] font-bold font-heading relative will-change-transform text-text leading-none tracking-tight"
          >
            What is <br className="lg:hidden" /><em>MediaSsisst?</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative will-change-transform"
          >
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full transform -translate-x-4 translate-y-4"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                alt="Doctor consulting with a patient"
                className="object-cover w-full h-full grayscale-[30%] opacity-80 mix-blend-lighten"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="will-change-transform"
          >
            <p className="text-lg md:text-xl text-sub font-body leading-relaxed mb-10 font-light">
              MediaSsisst is a next-generation digital health platform designed to bridge the gap between healthcare providers, patients, and pharmacies. Built for the modern world, our ecosystem empowers every stakeholder — from the doctor's clinic to the patient's home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-surface-hover/50 backdrop-blur-md rounded-xl p-6 border border-white/5 flex flex-col items-center sm:items-start group hover:border-primary/40 transition-colors"
                >
                  <div className="p-3 bg-dark rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-text">{stat.value}</h3>
                  <p className="text-xs font-mono text-muted mt-2 tracking-widest uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
