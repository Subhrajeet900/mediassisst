"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Pill } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Doctor uses ClinicXpert",
      description: "Generates E-prescriptions and monitors vitals remotely.",
    },
    {
      id: 2,
      icon: <HeartPulse className="w-8 h-8 text-[#00a86b]" />,
      title: "Patient uses HealthBuddy",
      description: "Receives prescriptions instantly and tracks health progress.",
    },
    {
      id: 3,
      icon: <Pill className="w-8 h-8 text-[#1a7a4a]" />,
      title: "Pharmacy via PharmaMate",
      description: "Fulfills the order and delivers medicines directly to the door.",
    },
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background soft green gradient blob */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none will-change-filter"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="section-tag">How it Works</div>
          <h2 className="text-4xl md:text-[56px] font-bold font-heading text-text mb-4 leading-none tracking-tight">
            One Ecosystem <br />
            <em>Three Touchpoints.</em>
          </h2>
          <p className="text-lg text-sub font-body max-w-2xl mt-4 font-light">Seamlessly connected for optimal care delivery.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between relative mt-12 md:max-w-5xl md:mx-auto">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px]">
            <svg width="100%" height="2" className="absolute top-0 left-0">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(0,200,150,0.3)" strokeWidth="2" strokeDasharray="8 8" />
              <motion.line
                x1="0" y1="1" x2="100%" y2="1" stroke="#00C896" strokeWidth="2" strokeDasharray="8 8"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="will-change-stroke"
              />
            </svg>
          </div>

          {/* Animated Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-[40px] bottom-[40px] left-[40px] w-[2px]">
            <svg width="2" height="100%" className="absolute top-0 left-0">
              <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(0,200,150,0.3)" strokeWidth="2" strokeDasharray="8 8" />
              <motion.line
                x1="1" y1="0" x2="1" y2="100%" stroke="#00C896" strokeWidth="2" strokeDasharray="8 8"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center w-full md:w-1/3 px-4 mb-12 md:mb-0"
            >
              <div className="w-20 h-20 rounded-full bg-surface border-2 border-primary/40 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,200,150,0.2)]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">{step.title}</h3>
              <p className="text-muted text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
