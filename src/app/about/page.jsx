'use client';

import { useState, useEffect } from "react";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-grow bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 min-h-screen relative overflow-hidden">
      <style>
        {`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
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
          box-shadow: 0 4px 6px-1px rgba(0, 0, 0, 0.1), 0 2px 4px-1px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .section-divider {
          background: linear-gradient(to right, #8b5cf6, #d946ef);
        }
        `}
      </style>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          <header className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg text-slate-600 mb-2">Full-Stack Developer & AI Enthusiast</p>
            <div className="w-24 h-1 section-divider mx-auto rounded-full"></div>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Professional Journey</h2>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              I'm a passionate full-stack developer with expertise in building scalable web and mobile applications 
              that deliver exceptional user experiences. My journey in technology combines strong technical skills 
              with a creative approach to problem-solving.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              With experience across various tech stacks and development methodologies, I specialize in creating 
              seamless digital solutions that bridge the gap between innovative ideas and practical implementation.
            </p>
          </section>

          <hr className="my-8 border-t border-gray-200" />

          <div className="space-y-8">
            <section className="w-full p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">What I Do</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-violet-800 mb-3">Full-Stack Development</h4>
                  <ul className="list-disc ml-5 text-slate-700 space-y-2">
                    <li>Build responsive web applications using modern frameworks</li>
                    <li>Develop RESTful APIs and backend services</li>
                    <li>Create seamless user interfaces with focus on UX</li>
                    <li>Implement database design and optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-800 mb-3">Mobile Development</h4>
                  <ul className="list-disc ml-5 text-slate-700 space-y-2">
                    <li>Cross-platform mobile app development</li>
                    <li>Native-like experiences for iOS and Android</li>
                    <li>Performance optimization and smooth animations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="w-full p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover-lift">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Technical Expertise</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-violet-800 mb-2">Frontend Development</h4>
                    <p className="text-slate-700 text-sm">
                      React, Next.js, Angular, TypeScript, Tailwind CSS, responsive design, and modern UI/UX principles
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800 mb-2">Backend Development</h4>
                    <p className="text-slate-700 text-sm">
                      Node.js, ASP.NET, PHP/Laravel, RESTful APIs, database management, and server-side architecture
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800 mb-2">Mobile & Tools</h4>
                    <p className="text-slate-700 text-sm">
                      Flutter, Dart, Git, Agile methodologies, Figma, and cross-platform development
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover-lift">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Approach & Values</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-violet-800">Collaborative Development</h4>
                    <p className="text-slate-700 text-sm mt-1">
                      Experience working in Agile teams, collaborating with developers, designers, and stakeholders to deliver quality products.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800">Continuous Learning</h4>
                    <p className="text-slate-700 text-sm mt-1">
                      Passionate about staying current with emerging technologies, particularly in AI and machine learning applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-violet-800">Problem-Solving Focus</h4>
                    <p className="text-slate-700 text-sm mt-1">
                      Strong analytical skills with emphasis on debugging, optimization, and creating efficient, scalable solutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full p-6 sm:p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Beyond Coding</h3>
              <div className="text-center">
                <p className="text-slate-700 leading-relaxed">
                  When I'm not coding, I'm actively involved in the tech community, sharing knowledge and mentoring aspiring developers. 
                  I believe in the power of technology to create positive change and enjoy working on projects that make a real impact.
                </p>
                <p className="text-slate-700 leading-relaxed mt-4">
                  Currently expanding my expertise in artificial intelligence and its practical applications in software development.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}