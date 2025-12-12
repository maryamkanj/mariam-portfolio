'use client';

import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects';
import { useState, useEffect } from "react";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex-grow bg-black-main min-h-screen px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">
      {/* Background effects matching homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-7xl w-full relative z-10">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto items-stretch">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-2xl font-bold text-white/80 mb-2">Projects Coming Soon</h3>
              <p className="text-white/60">I'm currently working on some exciting projects. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}