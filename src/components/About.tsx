"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Activity, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";

const BackgroundOverlay = dynamic(() => import("./BackgroundOverlay"), {
  ssr: false,
});

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Activity className="w-6 h-6 text-primary" />, value: "500+", label: "Doctors" },
    { icon: <Users className="w-6 h-6 text-primary" />, value: "10K+", label: "Patients" },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, value: "99.9%", label: "Uptime" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark border-t border-surface">
      <BackgroundOverlay />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-heading inline-block relative will-change-transform"
          >
            What is MediaSsisst?
            <span className="absolute -bottom-4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></span>
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
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform -translate-x-4 translate-y-4"></div>
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_40px_rgba(0,200,150,0.15)] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
                alt="Doctor consulting with a patient"
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="will-change-transform"
          >
            <p className="text-xl text-foreground font-body leading-relaxed mb-10">
              Mediassisst is a next-generation digital health platform designed to bridge the gap between healthcare providers, patients, and pharmacies. Built for the modern world, our ecosystem empowers every stakeholder — from the doctor's clinic to the patient's home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-surface/50 backdrop-blur-md rounded-xl p-6 border border-primary/10 flex flex-col items-center sm:items-start group hover:border-primary/40 transition-colors"
                >
                  <div className="p-3 bg-dark rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold font-heading text-white">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
