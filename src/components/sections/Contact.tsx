"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "gh" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "in" },
  { name: "Email", url: "mailto:sunwoo05091@naver.com", icon: "@" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const email = "sunwoo05091@naver.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-6 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-glow mb-2" style={{ color: "#00ff00" }}>
            {"<Contact />"}
          </h2>
          <p className="text-gray-500">// 연락처</p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-black/50 border border-green-500/30 rounded-lg overflow-hidden"
        >
          <div className="flex items-center gap-2 p-3 border-b border-green-500/20">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-gray-500 text-sm">contact.sh</span>
          </div>

          <div className="p-6 space-y-6">
            {/* Message */}
            <div>
              <p className="text-green-400 mb-2">
                <span className="text-gray-500">$</span> echo &quot;Let&apos;s connect!&quot;
              </p>
              <div className="ml-4 text-green-300/80 space-y-2">
                <p>프로젝트 협업, 채용 문의, 또는 그냥 인사도 환영합니다!</p>
                <p className="text-gray-500 text-sm">
                  I&apos;m always open to new opportunities and interesting projects.
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-green-400 mb-2">
                <span className="text-gray-500">$</span> cat contact_info.txt
              </p>
              <div className="ml-4 space-y-4">
                <button
                  onClick={copyEmail}
                  className="group flex items-center gap-3 text-green-300 hover:text-green-100 transition-colors"
                >
                  <span className="text-xl">📧</span>
                  <span className="text-lg">{email}</span>
                  <span className="text-xs text-gray-500 group-hover:text-green-400 transition-colors">
                    {copied ? "(copied!)" : "(click to copy)"}
                  </span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-green-400 mb-4">
                <span className="text-gray-500">$</span> ls -la ./social_links/
              </p>
              <div className="ml-4 space-y-2">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                    className="flex items-center gap-4 text-green-300/80 hover:text-green-100 transition-colors group"
                  >
                    <span className="text-gray-500">drwxr-xr-x</span>
                    <span className="w-8 text-center text-green-400">[{link.icon}]</span>
                    <span className="group-hover:underline">{link.name}</span>
                    <span className="text-gray-500 text-sm">→ {link.url.replace("https://", "").replace("mailto:", "")}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="pt-4 border-t border-green-500/20">
              <p className="text-green-400 mb-2">
                <span className="text-gray-500">$</span> cat status.txt
              </p>
              <div className="ml-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-300">Currently available for new opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>
            <span className="text-green-400">{">"}</span> Built with Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="mt-2">
            <span className="text-green-400">{">"}</span> © 2025 김선우. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
