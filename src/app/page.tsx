import { Hero } from "../components/sections/hero";
import { TechStack } from "../components/sections/techstack";
import { About } from "../components/sections/about";
import { Footer } from "../components/sections/footer";
import { Projects } from "../components/sections/project";
import { Achievements } from "@/components/sections/achievements";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <TechStack />
      <Achievements />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
