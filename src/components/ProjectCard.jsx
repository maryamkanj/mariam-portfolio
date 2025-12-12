'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Check if description is long enough to need truncation
  const isLongDescription = project.description.length > 120;

  // Check which buttons to show
  const hasDemo = project.demoUrl || project.linkedinDemoUrl;
  const hasRepo = project.repoUrl;

  // Determine which demo URL to use (prefer demoUrl, fallback to linkedinDemoUrl)
  const demoUrl = project.demoUrl || project.linkedinDemoUrl;

  return (
    <div className="group bg-black rounded-xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
        </div>
      )}
      <div className={`p-6 flex-grow ${project.image ? '' : ''}`}>
        {/* Category Badge */}
        {project.category && (
          <div className="mb-4 inline-block px-3 py-1 bg-pink-900/30 text-pink-400 text-xs font-semibold rounded-full border border-pink-800/50">
            {project.category}
          </div>
        )}

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-600 transition-colors">
          {project.title}
        </h3>

        {/* Description with View More/Less functionality */}
        <div className="mb-4">
          <p className={`text-gray-300 ${showFullDescription ? '' : 'line-clamp-3'}`}>
            {project.description}
          </p>
          {isLongDescription && (
            <button
              onClick={toggleDescription}
              className="text-sm text-pink-600 font-medium hover:text-white transition-colors mt-1 flex items-center"
            >
              {showFullDescription ? (
                <>
                  <span className="mr-1">↑</span> Show less
                </>
              ) : (
                <>
                  <span className="mr-1">↓</span> Read more
                </>
              )}
            </button>
          )}
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-900 text-white border border-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.features && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-pink-500">Key Features:</span>
            </div>
            <ul className="space-y-2">
              {project.features.slice(0, showAllFeatures ? project.features.length : 2).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-300">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {project.features.length > 2 && (
              <button
                onClick={toggleFeatures}
                className="text-sm text-pink-600 font-medium hover:text-white transition-colors mt-2 flex items-center"
              >
                {showAllFeatures ? (
                  <>
                    <span className="mr-1">↑</span> Show less features
                  </>
                ) : (
                  <>
                    <span className="mr-1">↓</span> +{project.features.length - 2} more features
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Sub-projects for AI/ML Projects */}
        {project.subProjects && (
          <div className="mb-4 pt-4 border-t border-gray-800">
            <span className="text-sm font-semibold text-pink-500 mb-2 block">Projects included:</span>
            <div className="flex flex-wrap gap-2">
              {project.subProjects.map((sub, index) => (
                <div key={index} className="px-3 py-1 bg-gray-900/50 text-gray-300 text-xs rounded-full border border-gray-700">
                  {sub.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Buttons Section - Always at bottom of card */}
      <div className="p-6 pt-0 mt-auto">
        {/* Conditional Button Rendering */}
        <div className={`flex gap-3 ${!hasDemo && hasRepo ? 'justify-center' : ''}`}>
          {/* Demo Button - Only show if demoUrl exists */}
          {hasDemo && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}

          {/* Code Button - Only show if repoUrl exists */}
          {hasRepo && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-1 text-center py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-900 hover:to-black shadow-sm hover:shadow-md border border-gray-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>Code</span>
            </a>
          )}

          {/* Special case: Show only one button centered if only one type exists */}
          {!hasDemo && !hasRepo && (
            <div className="text-center text-gray-500 text-sm py-2 w-full">
              Links coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}