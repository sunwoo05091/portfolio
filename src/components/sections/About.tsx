"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  Mobile: ["Flutter", "Dart", "iOS", "Android"],
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript"],
  Styling: ["Tailwind CSS", "CSS3", "Styled Components"],
  Simulation: ["Unreal Engine 5", "C++", "Blueprint"],
  Cloud: ["AWS", "EC2", "Cognito", "CodePipeline"],
  Tools: ["Git", "VS Code", "Figma", "Firebase"],
};

const experiences = [
  {
    command: "whoami",
    output: ["김선우 (Sunwoo Kim)", "Frontend & Mobile Developer"],
  },
  {
    command: "cat skills.txt",
    output: ["Flutter, React, Next.js, TypeScript", "Unreal Engine 5, C++, AWS"],
  },
  {
    command: "ls projects/",
    output: ["Journeye/", "퀘스트스쿨/", "엄지/", "소방조법시뮬레이션/"],
  },
];

const careers = [
  {
    company: "뉴로플로우",
    period: "2025.01 - 현재",
    role: "Frontend Developer",
    tasks: ["재직중"],
    current: true,
  },
  {
    company: "바이브포지",
    period: "2024.10 - 2025.01",
    role: "Frontend Developer",
    tasks: [
      "퀘스트스쿨 AI 진로진학 플랫폼 개발",
      "Journeye 호텔 컨시어지 서비스 플랫폼 개발",
    ],
    current: false,
  },
  {
    company: "라임프렌즈",
    period: "2024.05 - 2024.07",
    role: "Planner",
    tasks: ["서비스 기획 및 사업 기획"],
    current: false,
  },
  {
    company: "트라이텍",
    period: "2022.08 - 2024.03",
    role: "Simulation Developer",
    tasks: [
      "소방조법 시뮬레이션 개발",
      "사용자 요구사항에 따른 제품 개선",
      "현대 에버다임 납품",
    ],
    current: false,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-glow mb-2" style={{ color: "#00ff00" }}>
            {"<About />"}
          </h2>
          <p className="text-gray-500">// 개발자 정보</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Terminal Window */}
            <div className="bg-black/50 border border-green-500/30 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 p-3 border-b border-green-500/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-500 text-sm">about.sh</span>
              </div>
              <div className="p-4 text-sm space-y-4">
                {experiences.map((exp, idx) => (
                  <div key={idx}>
                    <p className="text-green-400 mb-2">
                      <span className="text-gray-500">$</span> {exp.command}
                    </p>
                    {exp.output.map((line, lineIdx) => (
                      <p key={lineIdx} className="text-green-300/80 ml-4">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}

                <div className="mt-6 pt-4 border-t border-green-500/20">
                  <p className="text-green-400 mb-2">
                    <span className="text-gray-500">$</span> cat intro.txt
                  </p>
                  <div className="text-green-300/80 ml-4 space-y-2">
                    <p>
                      안녕하세요! 저는 Flutter와 React를 사용하여
                    </p>
                    <p>
                      사용자 경험을 중시하는 애플리케이션을 만드는
                    </p>
                    <p>
                      프론트엔드 개발자 김선우입니다.
                    </p>
                    <p className="mt-4 text-gray-500">
                      항상 새로운 기술을 배우고 도전하는 것을 좋아합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              {"// Skills & Technologies"}
            </h3>

            {Object.entries(skills).map(([category, items], categoryIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + categoryIdx * 0.1, duration: 0.3 }}
              >
                <h4 className="text-green-500 mb-2 text-sm">
                  <span className="text-gray-500">const</span> {category.toLowerCase()} <span className="text-gray-500">=</span> [
                </h4>
                <div className="flex flex-wrap gap-2 ml-4 mb-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-green-500/10 border border-green-500/30 rounded text-green-300 hover:bg-green-500/20 hover:border-green-500/50 transition-colors cursor-default"
                    >
                      {`"${skill}"`}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">];</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Career Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-green-400 mb-8">
            {"// Career History"}
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-green-500/30" />

            {careers.map((career, idx) => (
              <motion.div
                key={career.company}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + idx * 0.1, duration: 0.3 }}
                className={`relative flex items-start mb-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-green-500 z-10">
                  {career.current && (
                    <div className="absolute inset-0.5 rounded-full bg-green-500 animate-pulse" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-black/50 border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-green-400">
                        {career.company}
                      </h4>
                      {career.current && (
                        <span className="px-2 py-0.5 text-xs bg-green-500/20 border border-green-500/50 rounded text-green-400">
                          현재
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{career.period}</p>
                    <p className="text-blue-400 text-sm mb-3">{career.role}</p>
                    <ul className="space-y-1">
                      {career.tasks.map((task, taskIdx) => (
                        <li key={taskIdx} className="text-green-300/80 text-sm flex items-start gap-2">
                          <span className="text-green-500 mt-1">→</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
