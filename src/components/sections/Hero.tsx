"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Flutter Mobile Developer",
  "Frontend Developer",
  "React Developer",
  "TypeScript Enthusiast",
];

// 터미널 명령어 시퀀스
const terminalLines = [
  { type: "command", text: "whoami" },
  { type: "output", text: "김선우 (Kim Sunwoo)" },
  { type: "command", text: "cat role.txt" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 터미널 타이핑 상태
  const [terminalState, setTerminalState] = useState<{
    lineIndex: number;
    charIndex: number;
    lines: { type: string; text: string; displayed: string }[];
    isComplete: boolean;
  }>({
    lineIndex: 0,
    charIndex: 0,
    lines: terminalLines.map(line => ({ ...line, displayed: "" })),
    isComplete: false,
  });

  // 터미널 타이핑 효과
  useEffect(() => {
    if (terminalState.isComplete) return;

    const { lineIndex, charIndex } = terminalState;
    const currentLine = terminalLines[lineIndex];

    if (!currentLine) {
      setTerminalState(prev => ({ ...prev, isComplete: true }));
      return;
    }

    const typingSpeed = currentLine.type === "command" ? 80 : 30;
    const lineDelay = currentLine.type === "output" ? 300 : 500;

    const timeout = setTimeout(() => {
      if (charIndex < currentLine.text.length) {
        // 현재 줄 타이핑 중
        setTerminalState(prev => ({
          ...prev,
          charIndex: charIndex + 1,
          lines: prev.lines.map((line, idx) =>
            idx === lineIndex
              ? { ...line, displayed: currentLine.text.slice(0, charIndex + 1) }
              : line
          ),
        }));
      } else {
        // 다음 줄로 이동
        if (lineIndex < terminalLines.length - 1) {
          setTimeout(() => {
            setTerminalState(prev => ({
              ...prev,
              lineIndex: lineIndex + 1,
              charIndex: 0,
            }));
          }, lineDelay);
        } else {
          setTerminalState(prev => ({ ...prev, isComplete: true }));
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [terminalState]);

  // Role 타이핑 효과 (터미널 완료 후 시작)
  useEffect(() => {
    if (!terminalState.isComplete) return;

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
  }, [displayText, isDeleting, currentRole, terminalState.isComplete]);

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
            {/* whoami 명령어 */}
            <p>
              <span className="text-green-400">guest@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$</span>
              <span className="text-white ml-2">
                {terminalState.lines[0].displayed}
                {terminalState.lineIndex === 0 && !terminalState.isComplete && (
                  <span className="cursor-blink">|</span>
                )}
              </span>
            </p>
            {/* whoami 출력 */}
            {terminalState.lineIndex >= 1 && (
              <p className="text-green-300">
                {terminalState.lines[1].displayed}
                {terminalState.lineIndex === 1 && !terminalState.isComplete && (
                  <span className="cursor-blink">|</span>
                )}
              </p>
            )}
            {/* cat role.txt 명령어 */}
            {terminalState.lineIndex >= 2 && (
              <p className="mt-4">
                <span className="text-green-400">guest@portfolio</span>
                <span className="text-gray-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-500">$</span>
                <span className="text-white ml-2">
                  {terminalState.lines[2].displayed}
                  {terminalState.lineIndex === 2 && !terminalState.isComplete && (
                    <span className="cursor-blink">|</span>
                  )}
                </span>
              </p>
            )}
            {/* role 출력 (타이핑 효과) */}
            {terminalState.isComplete && (
              <p className="text-green-300 h-6">
                {displayText}
                <span className="cursor-blink">|</span>
              </p>
            )}
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
