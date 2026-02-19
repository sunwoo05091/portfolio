"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;

  const resolveImage = (path: string) => (basePath ? `${basePath}${path}` : path);

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="h-full bg-black/95 border border-green-500/30 rounded-lg overflow-hidden flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-green-500/20 bg-black/50 shrink-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-gray-500 text-sm">
                    {project.title.toLowerCase().replace(/\s/g, "_")}.md
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-green-400 transition-colors text-sm"
                >
                  [ESC] Close
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Title */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-glow mb-2" style={{ color: "#00ff00" }}>
                      # {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-500">$</span> cat README.md
                    </p>
                  </div>

                  {/* Image Gallery */}
                  {hasImages && (
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-green-400 mb-4">
                        ## 스크린샷
                      </h3>
                      <div className="relative bg-black/50 border border-green-500/20 rounded-lg overflow-hidden">
                        {/* Image Container */}
                        <div className="relative aspect-video md:aspect-[16/9] w-full">
                          <Image
                            src={resolveImage(project.images![currentImageIndex])}
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                          />
                        </div>

                        {/* Navigation Arrows */}
                        {project.images!.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all"
                            >
                              ←
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all"
                            >
                              →
                            </button>
                          </>
                        )}

                        {/* Image Counter */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 border border-green-500/30 rounded-full text-xs text-green-400">
                          {currentImageIndex + 1} / {project.images!.length}
                        </div>
                      </div>

                      {/* Thumbnail Navigation */}
                      {project.images!.length > 1 && (
                        <div className="flex gap-2 mt-4 justify-center">
                          {project.images!.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`relative w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                                idx === currentImageIndex
                                  ? "border-green-500"
                                  : "border-green-500/30 opacity-50 hover:opacity-100"
                              }`}
                            >
                              <Image
                                src={resolveImage(img)}
                                alt={`Thumbnail ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Summary */}
                  <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                    <p className="text-green-300/90 leading-relaxed">
                      {project.details.summary}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-gray-500 text-sm">
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">role</span> =
                      </p>
                      <p className="text-green-300 ml-4">&quot;{project.details.role}&quot;</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-500 text-sm">
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">team</span> =
                      </p>
                      <p className="text-green-300 ml-4">&quot;{project.details.team}&quot;</p>
                    </div>
                    {project.details.period && (
                      <div className="space-y-2">
                        <p className="text-gray-500 text-sm">
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-blue-400">period</span> =
                        </p>
                        <p className="text-green-300 ml-4">&quot;{project.details.period}&quot;</p>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-4">
                      ## 기술 스택
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm bg-green-500/10 border border-green-500/30 rounded text-green-300 hover:bg-green-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {project.details.achievements.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-4">
                        ## 주요 성과
                      </h3>
                      <ul className="space-y-3">
                        {project.details.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-green-500 mt-1">→</span>
                            <span className="text-green-300/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Features */}
                  {project.details.features.map((feature, featureIdx) => (
                    <div key={featureIdx}>
                      <h3 className="text-xl font-semibold text-green-400 mb-4">
                        ## {feature.title}
                      </h3>
                      <div className="bg-black/50 border border-green-500/20 rounded-lg p-4">
                        <ul className="space-y-2">
                          {feature.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-sm">
                              <span className="text-green-500 shrink-0">$</span>
                              <span className="text-green-300/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}

                  {/* External Links */}
                  {project.externalLinks && project.externalLinks.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-green-400 mb-4">
                        ## 관련 링크
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {project.externalLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all text-sm"
                          >
                            <span>→</span>
                            <span>{link.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="pt-6 border-t border-green-500/20">
                    <div className="flex flex-wrap gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all"
                        >
                          <span>→</span>
                          <span>View on GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded font-semibold hover:bg-green-400 transition-all"
                        >
                          <span>→</span>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
