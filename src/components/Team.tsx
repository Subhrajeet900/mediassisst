"use client";

import { motion } from "framer-motion";


export default function Team() {
  const team = [
    { name: "Adit Ghosh", role: "Backend Designer", initials: "AG" },
    { name: "Subhrajeet Dash", role: "Lead Marketing Developer", initials: "SD" },
    { name: "Harsh Panchal", role: "UI/UX Designer", initials: "HP" },
    { name: "Shailjanand", role: "UI/UX Designer", initials: "S" },
    { name: "Abhay Mundepi", role: "UI/UX Designer", initials: "AM" },
  ];

  return (
    <section className="py-24 bg-surface border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-white inline-block relative mb-4"
          >
            The Minds Behind Medi Assisst
            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></span>
          </motion.h2>
          <p className="text-xl text-muted font-body mt-4">A passionate team building the future of digital healthcare.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 justify-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-dark/60 backdrop-blur-md rounded-2xl p-8 border border-primary/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,200,150,0.15)] transition-all duration-300 flex flex-col items-center text-center group ${index === 3 ? "lg:col-start-1 lg:col-end-2 md:translate-x-1/2 lg:translate-x-1/2 lg:ml-auto" : ""} ${index === 4 ? "lg:col-start-2 lg:col-end-3 md:translate-x-1/2 lg:translate-x-1/2" : ""}`}
            >
              {/* Avatar with animated ring */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 blur-md"></div>
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-surface to-dark border-2 border-primary/30 flex items-center justify-center shadow-inner z-10 group-hover:border-primary transition-colors">
                  <span className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {member.initials}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 font-heading">{member.name}</h3>
              <p className="text-sm font-medium text-primary mb-6">{member.role}</p>

              <div className="flex gap-4 mt-auto">
                <a href="#" className="w-10 h-10 rounded-full bg-surface/80 flex items-center justify-center text-muted hover:text-white hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-surface/80 flex items-center justify-center text-muted hover:text-white hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
