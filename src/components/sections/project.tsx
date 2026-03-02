"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Hotel Booking Platform",
    category: "WEB",
    description: "Full-featured hotel booking web application",
    image: "/projects/HotelBooking.png",
    tags: ["React", "Node.js", "Typescript", "MongoDB"],
    color: "#60a5fa",
    liveUrl: "https://hotel-booking-bice-mu.vercel.app/",
    githubUrl: "https://github.com/Stxmplhz/Hotel-Booking",
  },
  {
    title: "Student Event Planner Web Application",
    category: "WEB",
    description:
      "A full-stack web application designed to empower student teams in planning, organizing, and tracking academic events efficiently. It unifies event management, task delegation, and real-time team communication.",
    image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?w=1080",
    tags: ["Next.js", "TypeScript", "PostgreSQL (Supabase)", "TanStack Query"],
    color: "#60a5fa",
    githubUrl: "https://github.com/Stxmplhz/jas39-event-planner",
  },
  {
    title: "Ta Fight World",
    category: "GAME",
    description:
      "A 2D mobile game developed with Unity and MediaPipe for kids to do exercise poses to win each stage in each level for START YOUNG, STAY STRONG Hackathon (2025)",
    image: "/projects/TaFightWorld-Game.png",
    tags: ["C++", "Unity"],
    color: "#FF5F15",
    liveUrl: "https://drive.google.com/file/d/1fTMcLr5IweId_sst3hHOf1OhpY4zY1fi/view?usp=sharing",
    githubUrl: "https://github.com/Stxmplhz/TaFightWorld_NewHealthNearMe",
  },
  {
    title: "Film Analytics: Genre Trends, Budget & Revenue Prediction",
    category: "DATA",
    description:
      "A comprehensive data science project that analyzes historical film data to uncover genre trends and utilizes advanced machine learning models to predict movie budgets and box office revenue.",
    image: "/projects/FlimAnalytics.jpeg",
    tags: ["Python"],
    color: "#E10098",
    githubUrl: "https://github.com/Stxmplhz/Genre-Budget-Revenue-Movie-Insights",
  },
  {
    title: "Flight Reservation Database Management Web Application",
    category: "WEB",
    description:
      "Web-based system that bridges the gap between customer booking requests and airline backend operations.",
    image: "/projects/FlightReservation.png",
    tags: ["Vue.js", "Node.js", "Express.js", "MySQL", "JavaScript"],
    color: "#60a5fa",
    githubUrl: "https://github.com/Stxmplhz/Flight-Reservation-Management-Website-for-Admin ",
  },
  {
    title: "Nicode",
    category: "MOBILE",
    description:
      "An application for helping cigarette consumers stop smoking or reduce smoking with the concept of motivation through rewards, community, and recommendation.",
    image: "/projects/Nicode.png",
    tags: ["Java", "NoSQL (Firebase)", "Android Studio"],
    color: "#a78bfa",
    githubUrl: "https://github.com/Stxmplhz/Nicode",
  },
];

const categories = ["ALL", "WEB", "GAME", "MOBILE", "DATA"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredProjects =
    activeFilter === "ALL" ? projects : projects.filter((p) => p.category === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  return (
    <section className="overflow-hidden border-b-8 border-[#60a5fa] bg-black px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
        <div className="mb-12">
          <h2
            className="mb-4 font-mono text-5xl font-black text-white md:text-8xl"
            style={{ textShadow: "6px 6px 0px #60a5fa" }}
          >
            PROJECTS
          </h2>
          <div className="h-2 w-64 bg-[#60a5fa]" />
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-4 font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`border-4 px-8 py-3 text-xl font-black transition-all active:translate-y-1 ${
                activeFilter === cat
                  ? "border-white bg-[#60a5fa] text-black shadow-[4px_4px_0px_0px_#fff]"
                  : "border-[#60a5fa] bg-black text-white hover:bg-[#60a5fa]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden border-8 bg-black"
                style={{ borderColor: project.color }}
              >
                {/* Industrial frame corners */}
                <div className="pointer-events-none absolute inset-0 z-10">
                  <div
                    className="absolute top-0 left-0 h-8 w-8 border-t-4 border-l-4"
                    style={{ borderColor: project.color }}
                  ></div>
                  <div
                    className="absolute top-0 right-0 h-8 w-8 border-t-4 border-r-4"
                    style={{ borderColor: project.color }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4"
                    style={{ borderColor: project.color }}
                  ></div>
                  <div
                    className="absolute right-0 bottom-0 h-8 w-8 border-r-4 border-b-4"
                    style={{ borderColor: project.color }}
                  ></div>
                </div>

                <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 text-xs font-black text-black">
                  {project.category}
                </div>

                <div className="relative h-48 w-full overflow-hidden md:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-black text-white uppercase md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 font-mono text-sm text-gray-300">
                    {project.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 px-3 py-1 text-[10px] font-black uppercase"
                        style={{
                          borderColor: project.color,
                          color: project.color,
                          backgroundColor: `${project.color}15`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center gap-2 border-4 px-4 py-2 text-sm font-black tracking-wider uppercase transition-all hover:-translate-y-1 md:px-6 md:py-3 md:text-base"
                        style={{
                          borderColor: project.color,
                          backgroundColor: project.color,
                          color: "black",
                          clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
                        }}
                      >
                        <ExternalLink className="h-4 w-4" strokeWidth={3} />
                        LIVE
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center gap-2 border-4 px-4 py-2 text-sm font-black tracking-wider uppercase transition-all hover:-translate-y-1 md:px-6 md:py-3 md:text-base"
                        style={{
                          borderColor: project.color,
                          backgroundColor: "transparent",
                          color: project.color,
                          clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%)",
                        }}
                      >
                        <Github className="h-4 w-4" strokeWidth={3} />
                        CODE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-8 font-mono">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 border-4 px-6 py-3 font-black transition-all ${
                currentPage === 1
                  ? "cursor-not-allowed border-gray-800 text-gray-800"
                  : "border-[#60a5fa] text-white shadow-[4px_4px_0px_0px_#60a5fa] hover:bg-[#60a5fa] hover:text-black"
              }`}
            >
              <ChevronLeft /> PREV
            </button>

            <span className="text-2xl font-black text-white">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 border-4 px-6 py-3 font-black transition-all ${
                currentPage === totalPages
                  ? "cursor-not-allowed border-gray-800 text-gray-800"
                  : "border-[#60a5fa] text-white shadow-[4px_4px_0px_0px_#60a5fa] hover:bg-[#60a5fa] hover:text-black"
              }`}
            >
              NEXT <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
