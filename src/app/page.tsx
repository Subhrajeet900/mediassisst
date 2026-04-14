"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import ClientOnly from "@/components/ClientOnly";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-foreground selection:bg-primary/30 selection:text-primary">
      <ClientOnly>
        <div className="bg-grain min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <AppShowcase />
          <HowItWorks />
          <Team />
          <Connect />
          <Footer />
        </div>
      </ClientOnly>
    </main>
  );
}
