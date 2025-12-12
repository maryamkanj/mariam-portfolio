'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TechStack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    // MERN Stack Technologies
    const mernStack = [
        {
            name: "MongoDB",
            category: "Database",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
            color: "bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40",
            textColor: "text-emerald-400",
            glowColor: "shadow-emerald-500/20"
        },
        {
            name: "Express.js",
            category: "Backend Framework",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
            color: "bg-slate-500/5 border-slate-500/20 hover:border-slate-500/40",
            textColor: "text-slate-300",
            glowColor: "shadow-slate-500/20"
        },
        {
            name: "React",
            category: "Frontend Library",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
            color: "bg-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/40",
            textColor: "text-cyan-400",
            glowColor: "shadow-cyan-500/20"
        },
        {
            name: "Node.js",
            category: "Runtime Environment",
            logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
            color: "bg-green-500/5 border-green-500/20 hover:border-green-500/40",
            textColor: "text-green-500",
            glowColor: "shadow-green-500/20"
        },
    ];

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % mernStack.length);
        }, 3500);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [mernStack.length]);

    return (
        <div className="mb-16 sm:mb-20 w-full">
            <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
                <span className="text-white/40 text-sm sm:text-base lg:text-lg uppercase tracking-[0.2em] font-medium">
                    MERN Stack Expertise
                </span>
                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
                {mernStack.map((tech, index) => (
                    <div
                        key={tech.name}
                        className={`group relative p-5 sm:p-6 lg:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 ${activeIndex === index
                            ? `scale-105 ${tech.glowColor} shadow-2xl border-opacity-60`
                            : "hover:border-opacity-60"
                            } ${tech.color} fade-in`}
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        {/* Active Indicator */}
                        {activeIndex === index && (
                            <div className="absolute -top-2 -right-2 flex items-center justify-center">
                                <div className="absolute w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
                                <div className="relative w-3 h-3 bg-primary rounded-full"></div>
                            </div>
                        )}

                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-4 sm:mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={tech.logo}
                                    alt={`${tech.name} - ${tech.category}`}
                                    width={80}
                                    height={80}
                                    className="object-contain filter drop-shadow-lg"
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <h3 className={`font-bold text-sm sm:text-base lg:text-lg mb-2 ${tech.textColor}`}>
                                {tech.name}
                            </h3>
                            <span className="text-xs sm:text-sm text-white/40 font-medium">
                                {tech.category}
                            </span>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
