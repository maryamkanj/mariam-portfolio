"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-black-main/95 backdrop-blur-lg border-b border-pink-500/30 fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-xl shadow-pink-900/10" : ""
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="group flex-shrink-0 outline-none focus:outline-none"
            onClick={handleLinkClick}
          >
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-primary transition-all duration-300 group-hover:text-pink-400 hover:scale-105">
              Mariam Kanj
            </h1>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex gap-6 xl:gap-8 2xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`font-medium transition-all duration-300 relative py-2 text-base xl:text-lg outline-none focus:outline-none ${pathname === link.href
                      ? "text-primary font-semibold"
                      : "text-white/90 hover:text-primary"
                      }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${pathname === link.href
                      ? "w-full bg-gradient-to-r from-primary to-pink-400"
                      : "w-0 bg-primary group-hover:w-full"
                      }`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="hidden md:block lg:hidden">
            <ul className="flex gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`font-medium transition-all duration-300 relative py-2 text-sm outline-none focus:outline-none ${pathname === link.href
                      ? "text-primary font-semibold"
                      : "text-white/90 hover:text-primary"
                      }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${pathname === link.href
                      ? "w-full bg-gradient-to-r from-primary to-pink-400"
                      : "w-0 bg-primary group-hover:w-full"
                      }`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden p-3 rounded-lg hover:bg-pink-900/20 transition-all duration-200 border border-pink-500/30 flex-shrink-0 group outline-none focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${isMenuOpen
                  ? "rotate-45 translate-y-2 bg-primary"
                  : "bg-white group-hover:bg-primary"
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${isMenuOpen
                  ? "opacity-0"
                  : "opacity-100 bg-white group-hover:bg-primary"
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${isMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-primary"
                  : "bg-white group-hover:bg-primary"
                  }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="py-3 bg-black-main/90 backdrop-blur-lg rounded-xl border border-pink-500/30 shadow-xl">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block py-4 px-6 rounded-lg font-medium transition-all duration-200 border outline-none focus:outline-none ${pathname === link.href
                      ? "text-primary bg-pink-900/20 border-primary/50 font-semibold"
                      : "text-white/90 hover:text-primary hover:bg-pink-900/10 border-transparent hover:border-pink-500/30"
                      } text-lg`}
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