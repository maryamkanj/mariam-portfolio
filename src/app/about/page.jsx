import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: 'About | Mariam Kanj',
  description: 'Learn about my journey as a full-stack developer, my technical expertise, and my passion for AI and innovation.',
};

export default function About() {
  return (
    <div className="flex-grow bg-black-main flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 min-h-screen relative overflow-hidden w-full">
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .section-divider {
          background: linear-gradient(to right, #E60073, #FF4DA6);
        }
        `}
      </style>

      {/* Background effects matching homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <PageTransition>
          <header className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 gradient-text">
              About Me
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-2">Full-Stack Developer & AI Enthusiast</p>
            <div className="w-20 h-0.5 sm:w-24 sm:h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full"></div>
          </header>

          <section className="mb-6 sm:mb-8 bg-black-main/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-white/5 w-full">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-3 sm:mb-4">Professional Journey</h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                I'm a passionate full-stack developer with expertise in building scalable web and mobile applications
                that deliver exceptional user experiences. My journey in technology combines strong technical skills
                with a creative approach to problem-solving.
              </p>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                With experience across various tech stacks and development methodologies, I specialize in creating
                seamless digital solutions that bridge the gap between innovative ideas and practical implementation.
              </p>
            </div>
          </section>

          <hr className="my-4 sm:my-6 border-t border-white/10" />

          <div className="space-y-4 sm:space-y-6">
            <section className="w-full p-4 sm:p-6 bg-black-main/50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-sm border border-white/5 hover:border-primary/20 hover-lift transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center gradient-text">What I Do</h3>
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-black-main/30 rounded-lg border border-white/5">
                  <h4 className="font-semibold text-primary mb-2 sm:mb-3 text-base sm:text-lg">Full-Stack Development</h4>
                  <ul className="list-disc ml-4 sm:ml-5 text-white/70 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Responsive web applications</li>
                    <li>RESTful APIs & backend services</li>
                    <li>UI/UX focused interfaces</li>
                    <li>Database design & optimization</li>
                  </ul>
                </div>
                <div className="p-3 sm:p-4 bg-black-main/30 rounded-lg border border-white/5">
                  <h4 className="font-semibold text-primary mb-2 sm:mb-3 text-base sm:text-lg">Mobile Development</h4>
                  <ul className="list-disc ml-4 sm:ml-5 text-white/70 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Cross-platform apps</li>
                    <li>Native-like experiences</li>
                    <li>Performance optimization</li>
                    <li>Mobile-first design</li>
                  </ul>
                </div>
                <div className="p-3 sm:p-4 bg-black-main/30 rounded-lg border border-white/5">
                  <h4 className="font-semibold text-primary mb-2 sm:mb-3 text-base sm:text-lg">AI & Innovation</h4>
                  <ul className="list-disc ml-4 sm:ml-5 text-white/70 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>AI-powered applications</li>
                    <li>Machine learning integration</li>
                    <li>Data analysis & visualization</li>
                    <li>Emerging tech exploration</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="w-full p-4 sm:p-6 bg-black-main/50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-sm border border-white/5 hover:border-primary/20 hover-lift transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">Technical Expertise</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Frontend Development</h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      React, Next.js, TypeScript, Tailwind CSS, responsive design, modern UI/UX principles
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Backend Development</h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Node.js, Express.js, MongoDB, PostgreSQL, RESTful APIs, server-side development
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1 sm:mb-2 text-sm sm:text-base">Performance & Optimization</h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      Caching, database optimization, scalable architecture design, modern tooling
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full p-4 sm:p-6 bg-black-main/50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-sm border border-white/5 hover:border-primary/20 hover-lift transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">Approach & Values</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary text-sm sm:text-base">Collaborative Development</h4>
                    <p className="text-white/70 text-xs sm:text-sm mt-1">
                      Experience working in Agile teams, collaborating with developers and stakeholders
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm sm:text-base">Continuous Learning</h4>
                    <p className="text-white/70 text-xs sm:text-sm mt-1">
                      Staying current with emerging technologies, AI and machine learning applications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm sm:text-base">Problem-Solving Focus</h4>
                    <p className="text-white/70 text-xs sm:text-sm mt-1">
                      Strong analytical skills with emphasis on debugging and optimization
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full p-4 sm:p-6 bg-black-main/50 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-sm border border-white/5 hover:border-primary/20 hover-lift transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center gradient-text">Beyond Coding</h3>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-white/70 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                  When I'm not coding, I'm involved in the tech community, sharing knowledge and mentoring aspiring developers.
                  I believe in the power of technology to create positive change through impactful projects.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="p-3 bg-black-main/30 rounded-lg border border-white/5">
                    <div className="text-primary font-semibold mb-1 text-sm">Community</div>
                    <div className="text-white/70 text-xs">Knowledge sharing & mentorship</div>
                  </div>
                  <div className="p-3 bg-black-main/30 rounded-lg border border-white/5">
                    <div className="text-primary font-semibold mb-1 text-sm">Learning</div>
                    <div className="text-white/70 text-xs">Emerging tech & AI research</div>
                  </div>
                  <div className="p-3 bg-black-main/30 rounded-lg border border-white/5">
                    <div className="text-primary font-semibold mb-1 text-sm">Impact</div>
                    <div className="text-white/70 text-xs">Meaningful project development</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Skills Visualization */}
          <section className="mt-6 sm:mt-8 w-full p-4 sm:p-6 bg-black-main/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/5">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center gradient-text">Skills & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { name: "React", color: "bg-cyan-500/10 text-cyan-400" },
                { name: "Next.js", color: "bg-white/10 text-white" },
                { name: "TypeScript", color: "bg-blue-500/10 text-blue-400" },
                { name: "Node.js", color: "bg-green-600/10 text-green-500" },
                { name: "MongoDB", color: "bg-green-500/10 text-green-400" },
                { name: "Express.js", color: "bg-gray-500/10 text-gray-300" },
                { name: "Tailwind", color: "bg-teal-500/10 text-teal-400" },
                { name: "Git", color: "bg-orange-500/10 text-orange-400" },
                { name: "Flutter", color: "bg-yellow-500/10 text-yellow-400" },
                { name: "ASP.NET", color: "bg-blue-500/10 text-blue-400" },
                { name: "Python", color: "bg-yellow-500/10 text-yellow-300" },
                { name: "AI/ML", color: "bg-purple-500/10 text-purple-400" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`${skill.color} p-2 sm:p-3 rounded-lg text-center text-xs sm:text-sm font-medium border border-white/5 hover:scale-105 transition-all duration-300`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </section>
        </PageTransition>
      </div>
    </div>
  );
}