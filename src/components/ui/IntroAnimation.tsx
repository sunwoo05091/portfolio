"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroAnimationProps {
  onComplete: () => void;
}

const introTexts = [
  { text: "안녕하세요", delay: 500 },
  { text: "프론트엔드 개발자", subText: "김선우입니다", delay: 800 },
];

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const showDuration = 2000;
    const fadeDuration = 500;

    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        if (currentIndex < introTexts.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setIsVisible(true);
        } else {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }
      }, fadeDuration);
    }, showDuration);

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  const currentText = introTexts[currentIndex];

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-light text-glow"
                  style={{ color: "#00ff00" }}
                >
                  <TypewriterText text={currentText.text} delay={currentText.delay} />
                </motion.h1>
                {currentText.subText && (
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="mt-4 text-3xl md:text-5xl lg:text-6xl font-light text-glow"
                    style={{ color: "#00ff00" }}
                  >
                    <TypewriterText text={currentText.subText} delay={currentText.delay + 800} />
                  </motion.h2>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={onComplete}
            className="absolute bottom-8 right-8 text-sm text-gray-500 hover:text-green-400 transition-colors"
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

function TypewriterText({ text, delay = 0 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 500);
        }
      }, 80);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="cursor-blink">|</span>}
    </span>
  );
}
