"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";

interface InProgressModalProps {
  project: Project | null;
  onClose: () => void;
}

const loadingMessages = [
  "Compiling awesome features...",
  "Debugging the matrix...",
  "Brewing coffee for developers...",
  "Pushing pixels...",
  "Optimizing user experience...",
];

export default function InProgressModal({ project, onClose }: InProgressModalProps) {
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!project) return;

    // 로딩 메시지 변경
    const messageInterval = setInterval(() => {
      setLoadingText(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    }, 1500);

    // 프로그레스 바 애니메이션
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 73) return 73; // 73%에서 멈춤 (진행중이니까!)
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [project]);

  // Reset on close
  useEffect(() => {
    if (!project) {
      setProgress(0);
      setLoadingText(loadingMessages[0]);
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-black border border-green-500/50 rounded-lg max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-3 border-b border-green-500/20 bg-black/50">
              <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:brightness-125" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-500 text-sm">work_in_progress.sh</span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Oops Message */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-6xl mb-4"
                >
                  🚧
                </motion.div>
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                  Oops!
                </h2>
                <p className="text-green-300 text-lg">
                  이 프로젝트는 현재 <span className="text-cyan-400 font-semibold">개발중</span>입니다!
                </p>
              </div>

              {/* Project Info */}
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">// Project</p>
                <p className="text-green-400 font-semibold text-lg">{project.title}</p>
                <p className="text-green-300/70 text-sm mt-2">{project.description}</p>
              </div>

              {/* Fake Loading */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{loadingText}</span>
                  <span className="text-cyan-400">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-green-500/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-gray-500 text-sm mb-2">// Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fun Message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-gray-500 text-sm"
              >
                조금만 기다려주세요! 곧 멋진 프로젝트로 찾아올게요 ✨
              </motion.p>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-full py-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all text-sm"
              >
                $ exit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
