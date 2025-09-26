'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
      <div className="relative h-48 bg-gradient-to-br from-violet-50 to-fuchsia-50 overflow-hidden cursor-pointer">
        {!imageError && project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center cursor-pointer">
            <div className="text-4xl text-violet-300 cursor-pointer">💫</div>
          </div>
        )}
      </div>

      <div className="p-6 cursor-pointer">
        <h3 className="text-xl font-bold text-violet-900 mb-2 group-hover:text-violet-700 transition-colors cursor-pointer">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 cursor-pointer">
          {project.description}
        </p>

        <div className="mb-4 cursor-pointer">
          <div className="flex flex-wrap gap-2 cursor-pointer">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border border-violet-200 rounded-full text-sm cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.features && (
          <div className="mb-4 cursor-pointer">
            <ul className="space-y-2 cursor-pointer">
              {project.features.slice(0, showAllFeatures ? project.features.length : 2).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600 cursor-pointer">
                  <span className="text-violet-500 mr-2 cursor-pointer">•</span>
                  <span className="cursor-pointer">{feature}</span>
                </li>
              ))}
            </ul>
            {project.features.length > 2 && (
              <button
                onClick={toggleFeatures}
                className="text-sm text-violet-600 font-medium hover:text-violet-800 transition-colors mt-2 flex items-center cursor-pointer"
              >
                {showAllFeatures ? (
                  <>
                    <span className="mr-1 cursor-pointer">↑</span> Show less
                  </>
                ) : (
                  <>
                    <span className="mr-1 cursor-pointer">↓</span> +{project.features.length - 2} more features
                  </>
                )}
              </button>
            )}
          </div>
        )}

        <div className="flex gap-3 mt-6 cursor-pointer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center cursor-pointer"
            >
              <span className="cursor-pointer">Live Demo</span>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 border border-violet-200 text-violet-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-violet-50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              !project.liveUrl ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700' : ''
            }`}
          >
            <svg className="w-4 h-4 cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="cursor-pointer">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}