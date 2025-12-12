import Link from "next/link";
import TechStack from "@/components/home/TechStack";
import PageTransition from "@/components/ui/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export const metadata = {
  title: 'Home | Mariam Kanj',
  description: 'Full Stack Developer Portfolio showcasing projects in Next.js, React, Node.js, and AI.',
};

export default function Home() {
  // Get featured projects - first 3 projects from the data source
  const featuredProjects = projects.slice(0, 3);

  // Calculate dynamic statistics from the data source
  const stats = [
    { label: "Projects", value: `${projects.length}` },
    { label: "Technologies", value: "15+" },
    { label: "Years Experience", value: "1.5+" },
  ];

  return (
    <>
      {/* SEO Meta Tags for Home Page */}
      <div className="sr-only" aria-hidden="true">
        <h1>Mariam Kanj - Full Stack Developer Portfolio</h1>
        <p>Professional full stack developer specializing in MERN stack, Next.js, React, and modern web technologies. Delivering scalable, performant web applications with exceptional user experiences.</p>
      </div>

      <div className="flex-grow bg-black-main min-h-screen relative overflow-hidden w-full">
        {/* Sophisticated Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/3 via-transparent to-pink-500/3 opacity-50"></div>
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-gradient-to-tr from-pink-500/8 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-slow delay-1500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-pink-500/5 rounded-full blur-3xl opacity-10"></div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-[90vh] flex items-center pt-8 sm:pt-12 w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <PageTransition className="w-full max-w-6xl mx-auto">

              {/* Premium Introduction */}
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase">Available for Opportunities</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 tracking-tight">
                  <span className="block">Mariam Kanj</span>
                  <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-10 font-light">
                  Crafting exceptional digital experiences through innovative technology,
                  elegant design, and scalable architecture that drives real-world impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a
                    href="/pdfs/Mariam_Kanj_CV.pdf"
                    download="Mariam_Kanj_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-3 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Download CV</span>
                    <svg className="w-5 h-5 relative z-10 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </a>

                  <Link href="/contact" className="group px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-2">
                    <span>Contact Me</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Enhanced Stats - Now Dynamic */}
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-default fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm sm:text-base uppercase tracking-widest font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* MERN Stack Expertise */}
              <TechStack />

            </PageTransition>
          </div>
        </section>

        {/* Featured Projects Section - Now uses ProjectCard Component */}
        <section aria-labelledby="featured-projects-title" className="relative z-10 py-12 sm:py-16 lg:py-20 w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4">
                <span className="text-primary text-sm sm:text-base font-semibold tracking-[0.2em] uppercase">
                  Featured Work
                </span>
              </div>
              <h2 id="featured-projects-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Selected <span className="gradient-text-animated">Projects</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
                Showcasing innovative solutions that blend cutting-edge technology with exceptional user experiences
              </p>
            </div>

            {/* Use ProjectCard Component - DRY Implementation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-16">
              <Link href="/projects" aria-label="View all projects">
                <div className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-white/5 to-white/10 text-white rounded-full hover:from-primary/20 hover:to-pink-500/20 border border-white/10 hover:border-primary/30 transition-all duration-500 text-base font-semibold hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer">
                  Explore All Projects
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Premium Contact CTA */}
        <section aria-labelledby="contact-title" className="relative z-10 py-12 sm:py-16 lg:py-20 w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 glass">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black-main/50 to-pink-500/10"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>

                <div className="relative p-8 sm:p-12 lg:p-16 text-center">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-black-main/50 backdrop-blur-sm rounded-full border border-primary/30">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary text-sm font-semibold tracking-wider uppercase">Open to Collaborate</span>
                  </div>

                  <h2 id="contact-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Let&apos;s Build Something <span className="gradient-text-animated">Extraordinary</span>
                  </h2>

                  <p className="text-white/60 mb-10 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
                    Whether you have an innovative project in mind or wish to explore collaboration opportunities,
                    I&apos;m excited to connect and bring your vision to life.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                    <Link href="/contact" className="sm:w-auto w-full" aria-label="Get in touch through contact form">
                      <div className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-primary to-pink-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 text-base overflow-hidden hover:scale-105 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" aria-hidden="true"></div>
                        <span className="relative flex items-center gap-2 justify-center">
                          Get in Touch
                          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </div>
                    </Link>

                    <a
                      href="https://github.com/maryamkanj"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="sm:w-auto w-full"
                      aria-label="Visit GitHub profile"
                    >
                      <div className="group w-full sm:w-auto px-8 sm:px-10 py-4 border-2 border-white/20 text-white rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-500 text-base font-bold backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer">
                        <span className="flex items-center gap-2 justify-center">
                          View GitHub Profile
                          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}