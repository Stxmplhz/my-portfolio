"use client";

export function About() {
  return (
    <section className="border-b-8 border-[#60a5fa] bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <h2
            className="font-space mb-4 text-5xl font-black text-white md:text-8xl"
            style={{ textShadow: "6px 6px 0px #60a5fa" }}
          >
            ABOUT ME
          </h2>
          <div className="h-2 w-64 bg-[#60a5fa]" />
        </div>

        {/* About Me Img */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div
              className="overflow-hidden border-8 border-[#E10098]"
              style={{
                boxShadow: "16px 16px 0px #E10098",
                clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)",
              }}
            >
              <img
                src="/me.jpg"
                alt="Chanya Suedao"
                className="aspect-square w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
            <div className="absolute -top-4 -left-4 border-4 border-black bg-[#E10098] px-6 py-3">
              <span className="font-mono text-2xl font-bold text-black">{"<DEVELOPER/>"}</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-4 border-[#60a5fa] bg-black p-8">
              <p className="mb-6 font-mono text-lg leading-relaxed text-white">
                <span className="font-bold text-[#60a5fa]">{">"}</span> Hi, I’m Chanya Suedao, a
                Computer Engineering student with a passion for building efficient and scalable
                digital solutions.
              </p>
              <p className="mb-6 font-mono text-lg leading-relaxed text-white/80">
                I specialize in building scalable web applications while exploring the intersection
                of Software Engineering and Data Analytics. With experience in backend systems and a
                passion for data-driven problem solving, I am looking for an internship opportunity
                to challenge my skills and grow within a professional development team.
              </p>
              <p className="font-mono text-lg leading-relaxed text-white/80">
                I bring an athlete’s discipline to my code—always learning, adapting, and pushing
                for new personal bests in every technical challenge I face.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-[#a78bfa] bg-black p-6 text-center">
                <div className="font-space mb-2 text-4xl font-black text-[#a78bfa]">3.46</div>
                <div className="font-mono text-sm text-white">GPAX</div>
              </div>
              <div className="border-4 border-[#a78bfa] bg-black p-6 text-center">
                <div className="font-space mb-2 text-4xl font-black text-[#a78bfa]">C2</div>
                <div className="font-mono text-sm text-white">ENG LEVEL</div>
              </div>
              {/*
              <div className="border-4 border-[#a78bfa] bg-black p-6 text-center">
                <div className="font-space mb-2 text-4xl font-black text-[#a78bfa]">0</div>
                <div className="font-mono text-sm text-white">YEARS EXP</div>
              </div>
              <div className="border-4 border-[#a78bfa] bg-black p-6 text-center">
                <div className="font-space mb-2 text-4xl font-black text-[##a78bfa]">0</div>
                <div className="font-mono text-sm text-white">PROJECTS</div>
              </div>
              <div className="border-4 border-[#a78bfa] bg-black p-6 text-center">
                <div className="font-space mb-2 text-4xl font-black text-[#a78bfa]">0</div>
                <div className="font-mono text-sm text-white">CLIENTS</div>
              </div>
              <div className="border-4 border-[#a78bfa] bg-black p-6 text-center">
                <div className="font-space mb-2 text-4xl font-black text-[#a78bfa]">0</div>
                <div className="font-mono text-sm text-white">COMMITS</div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
