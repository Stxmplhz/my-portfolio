import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <footer className="bg-[#FF5F15] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-['Space_Grotesk'] font-black text-4xl md:text-6xl text-black mb-4">
              ALEX CHEN
            </h3>
            <p className="font-['JetBrains_Mono'] text-lg text-black/80">
              Full-Stack Web Developer
            </p>
          </div>

          <div>
            <h4 className="font-['Space_Grotesk'] font-black text-2xl text-black mb-4">
              CONNECT
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-4 border-black p-4 hover:bg-white transition-colors"
              >
                <Github className="w-8 h-8 text-[#FF5F15]" strokeWidth={3} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-4 border-black p-4 hover:bg-white transition-colors"
              >
                <Linkedin className="w-8 h-8 text-[#FF5F15]" strokeWidth={3} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-4 border-black p-4 hover:bg-white transition-colors"
              >
                <Twitter className="w-8 h-8 text-[#FF5F15]" strokeWidth={3} />
              </a>
              <a
                href="mailto:alex.chen@devmail.com"
                className="bg-black border-4 border-black p-4 hover:bg-white transition-colors"
              >
                <Mail className="w-8 h-8 text-[#FF5F15]" strokeWidth={3} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-['Space_Grotesk'] font-black text-2xl text-black mb-4">
              SYSTEM TIME
            </h4>
            <div className="bg-black border-4 border-black p-6">
              <div className="font-['JetBrains_Mono'] font-bold text-3xl text-[#FF5F15] mb-2 tabular-nums">
                {formatTime(time)}
              </div>
              <div className="font-['JetBrains_Mono'] text-sm text-[#FF5F15]/70">
                {formatDate(time)}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-black pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['JetBrains_Mono'] text-black">
              © 2026 ALEX CHEN. ALL RIGHTS RESERVED.
            </p>
            <p className="font-['JetBrains_Mono'] text-black/70">
              BUILT WITH REACT + TAILWIND + BRUTALISM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}