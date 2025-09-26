'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Flutter", "ASP.NET", "Python"];

  useEffect(() => {
    setMounted(true);
    
    // Technology rotation effect
    const techInterval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(techInterval);
  }, [technologies.length]);

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
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          .typewriter {
            overflow: hidden;
            border-right: 2px solid violet;
            white-space: nowrap;
            animation: typewriter 3s steps(40) infinite alternate;
          }
        `}
      </style>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float animation-delay-4000"></div>

      <div className="container mx-auto max-w-4xl w-full text-center relative z-10">
        <div
          className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-slate-900 cursor-pointer">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent cursor-pointer">
              Mariam Kanj
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-medium tracking-wide cursor-pointer">
            Full-Stack Developer
          </h2>
          <p className="max-w-prose mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed cursor-pointer">
            I specialize in building elegant and scalable web applications with a focus on modern technologies and exceptional user experiences.
          </p>

          {/* Animated technology highlight */}
          <div className="py-4">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm border border-slate-200 cursor-pointer">
              <span className="text-slate-500 text-sm font-medium cursor-pointer">Currently working with:</span>
              <span className="text-violet-600 font-semibold text-lg typewriter cursor-pointer">
                {technologies[currentTech]}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center items-center">
            <Link href="/projects" className="flex-1 max-w-xs w-full">
              <button className="w-full bg-violet-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-violet-700 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-base sm:text-lg cursor-pointer">
                View My Work
              </button>
            </Link>

            <Link href="/contact" className="flex-1 max-w-xs w-full">
              <button className="w-full border-2 border-violet-600 text-violet-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 active:scale-95 text-base sm:text-lg cursor-pointer">
                Get In Touch
              </button>
            </Link>
          </div>

          <div className="pt-8">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-slate-700 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 hover:bg-violet-100 hover:text-violet-700 cursor-pointer ${
                    index === currentTech 
                      ? "border-violet-400 bg-violet-50 text-violet-700 scale-110" 
                      : "border-slate-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}