"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [glitchText, setGlitchText] = useState("CHANYA SUEDAO");
  const originalText = "CHANYA SUEDAO";
  const glitchChars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    const interval = setInterval(() => {
      const shouldGlitch = Math.random() > 0.85;
      if (shouldGlitch) {
        const glitched = originalText
          .split("")
          .map((char) =>
            Math.random() > 0.7
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : char,
          )
          .join("");
        setGlitchText(glitched);

        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b-8 border-[#60a5fa]">
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
                 0deg,
                 #60a5fa 0px,
                 transparent 1px,
                 transparent 2px,
                 #60a5fa 3px
               )`,
          }}
        />
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          <Terminal className="h-16 w-16 text-[#a78bfa] md:h-24 md:w-24" strokeWidth={3} />
          <span className="font-mono text-2xl font-bold text-[#a78bfa] md:text-4xl">
            ~/developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-space mb-6 text-6xl leading-none font-black text-white md:text-[6rem] lg:text-[10rem]"
          style={{
            textShadow: "8px 8px 0px #60a5fa",
            letterSpacing: "-0.05em",
          }}
        >
          {glitchText}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="font-mono text-xl font-bold tracking-wide text-[#60a5fa] md:text-3xl">
            {"<"} COMPUTER ENGINEERING STUDENT @KMUTT {"/>"}
          </p>
          <p className="font-mono text-lg text-white/80 md:text-2xl">
            Full-stack Developer | Software Development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <button
            className="border-4 border-black bg-[#a78bfa] px-12 py-6 font-mono text-xl font-black text-black transition-transform duration-100 hover:translate-x-2 hover:translate-y-2 md:text-2xl"
            style={{ boxShadow: "8px 8px 0px #000" }}
          >
            VIEW WORK →
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-16 w-1 bg-[#60a5fa]"
        />
      </div>
    </section>
  );
}
