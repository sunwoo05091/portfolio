"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Flutter Mobile Developer",
  "Frontend Developer",
  "React Developer",
  "TypeScript Enthusiast",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* ASCII Art Logo */}
        <motion.pre
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm md:text-base text-green-500 mb-8 hidden sm:block"
          style={{ fontFamily: "monospace" }}
        >
          {`
  ██╗  ██╗██╗███╗   ███╗    ███████╗██╗   ██╗███╗   ██╗██╗    ██╗ ██████╗  ██████╗
  ██║ ██╔╝██║████╗ ████║    ██╔════╝██║   ██║████╗  ██║██║    ██║██╔═══██╗██╔═══██╗
  █████╔╝ ██║██╔████╔██║    ███████╗██║   ██║██╔██╗ ██║██║ █╗ ██║██║   ██║██║   ██║
  ██╔═██╗ ██║██║╚██╔╝██║    ╚════██║██║   ██║██║╚██╗██║██║███╗██║██║   ██║██║   ██║
  ██║  ██╗██║██║ ╚═╝ ██║    ███████║╚██████╔╝██║ ╚████║╚███╔███╔╝╚██████╔╝╚██████╔╝
  ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝    ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚══╝╚══╝  ╚═════╝  ╚═════╝
          `}
        </motion.pre>

        {/* Mobile Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-glow mb-4 sm:hidden"
          style={{ color: "#00ff00" }}
        >
          김선우
        </motion.h1>

        {/* Terminal-style intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-left bg-black/50 border border-green-500/30 rounded-lg p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-500/20">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-gray-500 text-sm">terminal</span>
          </div>
          <div className="space-y-2 text-sm md:text-base">
            <p>
              <span className="text-green-400">guest@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$</span>
              <span className="text-white ml-2">whoami</span>
            </p>
            <p className="text-green-300">김선우 (Kim Sunwoo)</p>
            <p className="mt-4">
              <span className="text-green-400">guest@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$</span>
              <span className="text-white ml-2">cat role.txt</span>
            </p>
            <p className="text-green-300 h-6">
              {displayText}
              <span className="cursor-blink">|</span>
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-green-500 text-black font-semibold rounded hover:bg-green-400 transition-colors glitch"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-green-500 text-green-500 rounded hover:bg-green-500/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-green-500/50 text-sm"
          >
            <span className="block text-center mb-2">scroll down</span>
            <span className="block text-center text-2xl">↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
