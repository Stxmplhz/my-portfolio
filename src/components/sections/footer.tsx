"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "GITHUB",
      icon: Github,
      url: "https://github.com/Stxmplhz",
      color: "#60a5fa",
    },
    {
      name: "LINKEDIN",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/chanya-suedao-054b5b282/",
      color: "#a78bfa",
    },
    {
      name: "EMAIL",
      icon: Mail,
      url: "mailto:stampsuedao@gmail.com",
      color: "#60a5fa",
    },
  ];

  return (
    <footer className="border-t-8 border-[#60a5fa] bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Massive social links */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-6 font-mono">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.url}
                className="group min-w-[280px] border-8 bg-black p-8 transition-all hover:-translate-y-2 hover:scale-105 active:translate-y-0"
                style={{ borderColor: link.color }}
              >
                <div className="flex flex-col items-center gap-4">
                  <Icon
                    className="h-16 w-16 transition-colors"
                    strokeWidth={2}
                    style={{ color: link.color }}
                  />
                  <span
                    className="text-4xl font-black tracking-wider uppercase"
                    style={{ color: link.color }}
                  >
                    {link.name}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Copyright section */}
        <div className="border-t-4 border-[#a78bfa] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-2 text-3xl font-black tracking-wider text-white uppercase">
                CHANYA SUEDAO
              </p>
              <p className="font-mono text-[#a78bfa]">Computer Engineering Student © 2026</p>
            </div>

            {/* 
            <div className="flex gap-6 text-sm font-black uppercase">
              <a
                href="#"
                className="border-b-4 border-transparent pb-1 text-[#60a5fa] transition-colors hover:border-[#60a5fa] hover:text-white"
              >
                PRIVACY
              </a>
              <a
                href="#"
                className="border-b-4 border-transparent pb-1 text-[#a78bfa] transition-colors hover:border-[#a78bfa] hover:text-white"
              >
                TERMS
              </a>
              <a
                href="#"
                className="border-b-4 border-transparent pb-1 text-[#60a5fa] transition-colors hover:border-[#60a5fa] hover:text-white"
              >
                SITEMAP
              </a>
            </div>
            */}
          </div>

          {/* Brutalist accent */}
          <div className="mt-12 flex gap-4">
            <div className="h-4 w-32 bg-[#60a5fa]"></div>
            <div className="h-4 w-24 bg-[#a78bfa]"></div>
            <div className="h-4 w-16 bg-[#60a5fa]"></div>
            <div className="h-4 flex-1 bg-[#a78bfa]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
