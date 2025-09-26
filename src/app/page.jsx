'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
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
        `}
      </style>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>

      <div className="container mx-auto max-w-4xl w-full text-center relative z-10">
        <div
          className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-slate-900">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Mariam Kanj
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-medium tracking-wide">
            Full-Stack Developer
          </h2>
          <p className="max-w-prose mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
            I specialize in building elegant and scalable web applications with a focus on modern technologies and exceptional user experiences.
          </p>

          <div className="flex flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center items-center">
            <Link href="/projects" className="flex-1 max-w-xs">
              <button className="w-full bg-violet-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:bg-violet-700 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-base sm:text-lg">
                View My Work
              </button>
            </Link>

            <Link href="/contact" className="flex-1 max-w-xs">
              <button className="w-full border-2 border-violet-600 text-violet-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 active:scale-95 text-base sm:text-lg">
                Get In Touch
              </button>
            </Link>
          </div>

          <div className="pt-8">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {["React", "Next.js", "TypeScript", "Node.js", "Flutter", "ASP.NET", "python"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-slate-700 rounded-full text-xs sm:text-sm font-medium border border-slate-200 transition-all duration-300 hover:bg-violet-100 hover:text-violet-700"
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