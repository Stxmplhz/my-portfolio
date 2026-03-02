"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Star, Zap, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    title: "1st Runner-up at MU(x) Gamification Hackathon (2024)",
    description:
      "Improving MUx Learning Engagement Via Gamification to develop Mahidol University's online learning management system.",
    icon: Trophy,
    images: [
      "/achievement/mux/1.png",
      "/achievement/mux/2.png",
      "/achievement/mux/3.png",
      "/achievement/mux/4.png",
    ],
  },
  {
    title: "Outstanding Activities Award (2025)",
    description:
      "Recognized by KMUTT for exceptional contributions and bringing prestige to the University and the Faculty of Engineering through distinguished student activities.",
    icon: Award,
    images: ["/achievement/OutstandingActivitiesAward.png"],
  },
  {
    title: "Pass Final round of START YOUNG, STAY STRONG Hackathon (2025)",
    description:
      "Develop mobile game to promote physical activity and sports among children and youth through the CCC platform.",
    icon: Zap,
    images: ["/achievement/ss-hackathon.jpg"],
  },
  {
    title: "Google Project Management Professional Certificate (2024)",
    description:
      "Mastered in project management, with a focus on executing complex projects through strategic planning and Agile.",
    icon: Star,
    images: [
      "https://shrilearning.com/wp-content/uploads/2026/01/Google-Project-Management-Certificate-vs.-PMP-The-2026-Career-Reality-Check-scaled.webp",
      "/achievement/google-project-management.jpg",
    ],
  },
];

export function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [selectedGallery, setSelectedGallery] = useState<{
    achievementIdx: number;
    imageIdx: number;
  } | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedGallery) return;
    const currentAchievement = achievements[selectedGallery.achievementIdx];
    setSelectedGallery({
      ...selectedGallery,
      imageIdx: (selectedGallery.imageIdx + 1) % currentAchievement.images.length,
    });
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedGallery) return;
    const currentAchievement = achievements[selectedGallery.achievementIdx];
    setSelectedGallery({
      ...selectedGallery,
      imageIdx:
        (selectedGallery.imageIdx - 1 + currentAchievement.images.length) %
        currentAchievement.images.length,
    });
  };

  return (
    <section className="overflow-hidden border-b-8 border-[#60a5fa] bg-black py-20 font-mono">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header Section */}
        <div className="mb-16">
          <h2
            className="mb-4 text-5xl font-black text-white md:text-8xl"
            style={{ textShadow: "6px 6px 0px #60a5fa" }}
          >
            ACHIEVEMENTS
          </h2>
          <div className="h-2 w-96 bg-[#60a5fa]" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedGallery({ achievementIdx: index, imageIdx: 0 })}
                className="relative cursor-pointer overflow-hidden border-8 border-[#ffffff] bg-white"
                style={{ boxShadow: "12px 12px 0px #a78bfa" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 overflow-hidden border-b-8 border-white">
                  <img
                    src={achievement.images[0]}
                    className="h-full w-full object-cover transition-all duration-500"
                    alt={achievement.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Badge */}
                  {achievement.images.length > 1 && (
                    <div className="absolute bottom-2 left-2 border-2 border-white bg-black px-2 py-1 text-xs text-white">
                      +{achievement.images.length - 1} PHOTOS
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0,
                    }}
                    className="absolute top-4 right-4"
                  >
                    <div className="border-4 border-black bg-[#60a5fa] px-4 py-2">
                      <Icon className="h-10 w-10 text-black" strokeWidth={3} />
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="font-space mb-3 text-2xl font-black text-black uppercase">
                    {achievement.title}
                  </h3>
                  <p className="font-mono text-base text-black/70">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedGallery !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedGallery(null)}
          >
            <button className="absolute top-6 right-6 z-[110] text-white/70 transition-colors hover:text-[#60a5fa]">
              <X className="h-12 w-12" strokeWidth={3} />
            </button>

            {/* Navigation */}
            {achievements[selectedGallery.achievementIdx].images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-4 z-[110] -translate-y-1/2 border-4 border-white bg-black p-2 text-white transition-all hover:bg-[#60a5fa] hover:text-black"
                >
                  <ChevronLeft className="h-8 w-8" strokeWidth={3} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 right-4 z-[110] -translate-y-1/2 border-4 border-white bg-black p-2 text-white transition-all hover:bg-[#60a5fa] hover:text-black"
                >
                  <ChevronRight className="h-8 w-8" strokeWidth={3} />
                </button>
              </>
            )}

            <div className="relative flex w-full max-w-5xl flex-col items-center">
              <motion.img
                key={selectedGallery.imageIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                src={achievements[selectedGallery.achievementIdx].images[selectedGallery.imageIdx]}
                className="max-h-[80vh] w-auto border-8 border-white object-contain shadow-[20px_20px_0px_#a78bfa]"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Caption under each picture in Modal */}
              <div className="mt-12 border-4 border-[#60a5fa] bg-white p-4 font-bold text-black">
                {selectedGallery.imageIdx + 1} /{" "}
                {achievements[selectedGallery.achievementIdx].images.length} :{" "}
                {achievements[selectedGallery.achievementIdx].title}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
