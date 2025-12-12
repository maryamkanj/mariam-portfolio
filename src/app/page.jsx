import Link from "next/link";
import TechStack from "@/components/home/TechStack";
import PageTransition from "@/components/ui/PageTransition";

export const metadata = {
  title: 'Home | Mariam Kanj',
  description: 'Full Stack Developer Portfolio showcasing projects in Next.js, React, Node.js, and AI.',
};

// Portfolio Projects
const projects = [
  {
    id: 'proj-1',
    title: 'Nasab Translation',
    description: 'Professional translator portfolio website featuring services, contact information, and translator profile.',
    tech: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'Radix UI', 'Framer Motion', 'Class Variance Authority'],
    demoUrl: 'https://nassabtranslation.com/',
    category: 'Professional Services'
  },
  {
    id: 'proj-2',
    title: 'YoumaX AI',
    description: 'Full-stack AI chat app with Gemini 2.5 Flash for conversations and ImageKit for AI image generation.',
    tech: ['React 19', 'Node.js', 'Express 5', 'MongoDB', 'Gemini AI', 'ImageKit', 'JWT Auth', 'Vite'],
    repoUrl: 'https://github.com/maryamkanj/youmaX-ai.git',
    instagramDemoUrl: 'https://www.instagram.com/p/C-vrZzPtCOj/?img_index=1',
    category: 'AI Application'
  },
  {
    id: 'proj-3',
    title: 'AI/ML Learning Projects',
    description: 'Hands-on ML projects including Tic-Tac-Toe AI, spam detection, Titanic survival prediction & Fashion MNIST.',
    tech: ['Python', 'TensorFlow/Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Tkinter', 'OpenCV'],
    repoUrl: 'https://github.com/maryamkanj/ai-ml-course-projects.git',
    demoUrl: null,
    category: 'Machine Learning'
  },
];

export default function Home() {
  // Professional Statistics
  const stats = [
    { label: "Projects", value: "7+" },
    { label: "Technologies", value: "15+" },
    { label: "Years Experience", value: "1.5+" },
  ];

  return (
    <>
      {/* SEO Meta Tags for Home Page - Handled by Metadata API now, keeping semantic logical h1 invisible if needed or just relying on visible one */}
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
              </div>

              {/* Enhanced Stats */}
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

        {/* Featured Projects Section */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
              {/* Project 1: Nasab Translation - Only Demo Button */}
              <article
                key="proj-1"
                className="group relative glass rounded-2xl overflow-hidden border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 fade-in-up"
                style={{ animationDelay: '100ms' }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                  <span className="text-xs text-primary font-semibold">Professional Services</span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    Nasab Translation
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed min-h-[72px] line-clamp-3">
                    Professional translator portfolio website featuring services, contact information, and translator profile.
                  </p>

                  {/* Only Demo Button - Centered */}
                  <div className="flex justify-center mt-8">
                    <a
                      href="https://nassabtranslation.com/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      aria-label="View Nasab Translation live demo"
                      className="group/btn relative overflow-hidden w-full max-w-xs"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <div className="relative py-3 px-4 bg-primary/10 text-primary text-center rounded-full hover:text-white transition-all duration-300 text-sm font-semibold border border-primary/20 group-hover/btn:border-transparent hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          View Live Demo
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
              </article>

              {/* Project 2: YoumaX AI - GitHub and Instagram Demo */}
              <article
                key="proj-2"
                className="group relative glass rounded-2xl overflow-hidden border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 fade-in-up"
                style={{ animationDelay: '200ms' }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                  <span className="text-xs text-primary font-semibold">AI Application</span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    YoumaX AI
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed min-h-[72px] line-clamp-3">
                    Full-stack AI chat app with Gemini 2.5 Flash for conversations and ImageKit for AI image generation.
                  </p>

                  {/* GitHub and Instagram Buttons */}
                  <div className="flex gap-3 mt-8">
                    <a
                      href="https://github.com/maryamkanj/youmaX-ai.git"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      aria-label="View YoumaX AI source code on GitHub"
                      className="flex-1 group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <div className="relative py-3 px-4 bg-primary/10 text-primary text-center rounded-full hover:text-white transition-all duration-300 text-sm font-semibold border border-primary/20 group-hover/btn:border-transparent hover:scale-105">
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </span>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/posts/mariamkanj_meet-youma-x-my-ai-integrated-mern-chatbot-activity-7402291220561154048-PK5N?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAExV-D4BmqTdfEVMHRMh8rjOjbQRs5fHSOU"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      aria-label="View YoumaX AI demo on LinkedIn"
                      className="flex-1 group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <div className="relative py-3 px-4 bg-purple-500/10 text-purple-400 text-center rounded-full hover:text-white transition-all duration-300 text-sm font-semibold border border-purple-500/20 group-hover/btn:border-transparent hover:scale-105">
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                          Demo Video
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
              </article>

              {/* Project 3: AI/ML Projects - Smaller Title, Only GitHub */}
              <article
                key="proj-3"
                className="group relative glass rounded-2xl overflow-hidden border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 fade-in-up"
                style={{ animationDelay: '300ms' }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                  <span className="text-xs text-primary font-semibold">Machine Learning</span>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Smaller Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    AI/ML Learning Projects
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed min-h-[72px] line-clamp-3">
                    Hands-on ML projects including Tic-Tac-Toe AI, spam detection, Titanic survival prediction & Fashion MNIST.
                  </p>

                  {/* Only GitHub Button - Centered */}
                  <div className="flex justify-center mt-8">
                    <a
                      href="https://github.com/maryamkanj/ai-ml-course-projects.git"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      aria-label="View AI/ML projects source code on GitHub"
                      className="group/btn relative overflow-hidden w-full max-w-xs"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
                      <div className="relative py-3 px-4 bg-primary/10 text-primary text-center rounded-full hover:text-white transition-all duration-300 text-sm font-semibold border border-primary/20 group-hover/btn:border-transparent hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View on GitHub
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
              </article>
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