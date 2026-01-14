"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "@/components/ui/IntroAnimation";
import MatrixRain from "@/components/ui/MatrixRain";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if user has seen intro in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
    setIsLoaded(true);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-green-500 text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!showIntro && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen"
        >
          {/* Matrix Rain Background */}
          <MatrixRain opacity={0.15} />

          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-green-500/20">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <a href="#hero" className="text-green-400 font-bold text-lg hover:text-glow-sm transition-all">
                  {"<KSW />"}
                </a>
                <div className="flex gap-6 text-sm">
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#projects">Projects</NavLink>
                  <NavLink href="#contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </motion.main>
      )}
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-green-400 transition-colors relative group"
    >
      <span className="text-green-500/50 mr-1">#</span>
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}
