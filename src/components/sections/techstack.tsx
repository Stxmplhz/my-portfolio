"use client";

import { motion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";

const programmerLanguage = [
  { name: "JAVASCRIPT", color: "#61DAFB" },
  { name: "TYPESCRIPT", color: "#339933" },
  { name: "SQL", color: "#3178C6" },
  { name: "PYTHON", color: "#000000" },
  { name: "C", color: "#06B6D4" },
  { name: "C++", color: "#E10098" },
  { name: "C#", color: "#4169E1" },
  { name: "JAVA", color: "#47A248" },
];

const techData = {
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "TanStack Query",
    "HTML/CSS",
  ],
  backend: ["Node.js", "Express", "Next.js", "MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  tools: ["Git", "Postman", "Docker", "Figma", "Tableau", "Jest"],
};

export function TechStack() {
  return (
    <section className="overflow-hidden border-b-8 border-[#60a5fa] bg-black py-20">
      <div className="mx-auto mb-12 max-w-7xl px-4">
        <h2
          className="mb-4 font-mono text-5xl font-black text-white md:text-8xl"
          style={{ textShadow: "6px 6px 0px #60a5fa" }}
        >
          TECH STACK
        </h2>
        <div className="h-2 w-64 bg-[#60a5fa]" />
      </div>

      {/* Language */}
      <div className="relative mb-6">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...programmerLanguage, ...programmerLanguage, ...programmerLanguage].map(
              (lang, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 border-8 border-black bg-white px-8 py-6 transition-colors duration-200 hover:border-[#E10098] hover:bg-[#E10098]"
                  style={{ boxShadow: "8px 8px 0px #E10098" }}
                >
                  <span className="font-mono text-3xl font-bold whitespace-nowrap text-black">
                    {lang.name}
                  </span>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* Tech Categories Grid */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 font-mono md:grid-cols-3">
          {/* Frontend */}
          <div className="border-8 border-[#60a5fa] bg-black/40 p-8 transition-transform hover:translate-x-2 hover:-translate-y-2">
            <div className="mb-8 flex items-center gap-4">
              <Code className="h-12 w-12 text-[#60a5fa]" strokeWidth={3} />
              <h3 className="text-3xl font-black tracking-wider text-[#60a5fa] uppercase">
                FRONTEND
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techData.frontend.map((tech, idx) => (
                <div
                  key={idx}
                  className="border-4 border-[#60a5fa] bg-[#60a5fa]/10 px-4 py-2 transition-colors hover:bg-[#60a5fa] hover:text-black"
                >
                  <span className="text-sm font-black tracking-wide text-white uppercase hover:text-black">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="border-8 border-[#a78bfa] bg-black/40 p-8 transition-transform hover:translate-x-2 hover:-translate-y-2">
            <div className="mb-8 flex items-center gap-4">
              <Database className="h-12 w-12 text-[#a78bfa]" strokeWidth={3} />
              <h3 className="text-3xl font-black tracking-wider text-[#a78bfa] uppercase">
                BACKEND
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techData.backend.map((tech, idx) => (
                <div
                  key={idx}
                  className="border-4 border-[#a78bfa] bg-[#a78bfa]/10 px-4 py-2 transition-colors hover:bg-[#a78bfa] hover:text-black"
                >
                  <span className="text-sm font-black tracking-wide text-white uppercase hover:text-black">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border-8 border-[#60a5fa] bg-black/40 p-8 transition-transform hover:translate-x-2 hover:-translate-y-2">
            <div className="mb-8 flex items-center gap-4">
              <Wrench className="h-12 w-12 text-[#60a5fa]" strokeWidth={3} />
              <h3 className="text-3xl font-black tracking-wider text-[#60a5fa] uppercase">TOOLS</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {techData.tools.map((tech, idx) => (
                <div
                  key={idx}
                  className="border-4 border-[#60a5fa] bg-[#60a5fa]/10 px-4 py-2 transition-colors hover:bg-[#60a5fa] hover:text-black"
                >
                  <span className="text-sm font-black tracking-wide text-white uppercase hover:text-black">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
