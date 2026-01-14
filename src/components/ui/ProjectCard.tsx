"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group cursor-pointer glitch-card"
      onClick={onClick}
    >
      <div className="bg-black/50 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 h-full">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 p-3 border-b border-green-500/20 bg-black/30">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-gray-500 text-sm truncate">
            {project.title.toLowerCase().replace(/\s/g, "_")}.md
          </span>
          {project.featured && (
            <span className="ml-auto text-xs text-yellow-400 border border-yellow-400/50 px-2 py-0.5 rounded">
              featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Title */}
          <div>
            <p className="text-gray-500 text-xs mb-1">
              {"// " + (project.category === "mobile" ? "Mobile App" : project.category === "web" ? "Web App" : "Simulation")}
            </p>
            <h3 className="text-xl font-semibold text-green-400 group-hover:text-glow-sm transition-all glitch-text">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <div className="text-sm">
            <p className="text-gray-500">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">description</span> ={" "}
            </p>
            <p className="text-green-300/80 ml-4 mt-1 line-clamp-2">
              {`"${project.description}"`}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-gray-500 text-sm mb-2">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">techStack</span> = [
            </p>
            <div className="flex flex-wrap gap-2 ml-4">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-green-500/10 border border-green-500/30 rounded text-green-300"
                >
                  {`"${tech}"`}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-1 text-xs text-gray-500">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
            <p className="text-gray-500 text-sm mt-2">];</p>
          </div>

          {/* Click hint */}
          <div className="pt-4 border-t border-green-500/20">
            <p className="text-sm text-gray-500 group-hover:text-green-400 transition-colors">
              <span className="text-green-500">$</span> click to view details →
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
