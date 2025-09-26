"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className={`bg-slate-50 border-b border-slate-200 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "shadow-sm" : ""
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="group flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-violet-700 group-hover:to-fuchsia-700">
              Mariam Kanj
            </h1>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-4 xl:gap-6 2xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-700 hover:text-violet-600 font-medium transition-all duration-300 relative py-2 group/nav text-sm xl:text-base"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover/nav:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="hidden md:block lg:hidden">
            <ul className="flex gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-700 hover:text-violet-600 font-medium transition-all duration-300 relative py-2 group/nav text-sm"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover/nav:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-all duration-200 border border-slate-200 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-full bg-violet-500 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-violet-500 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-violet-500 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-slate-700 hover:text-violet-600 hover:bg-slate-100 rounded-lg font-medium transition-all duration-200 border border-slate-200 hover:border-violet-200 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}