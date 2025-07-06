/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-neutral-600/25 backdrop-blur-xl shadow-lg shadow-green-500/5 border-b border-green-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="group flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-green-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="/logo.jpg"
                    alt="logo"
                    className="relative w-12 h-12 rounded-full border border-green-500/20 group-hover:border-green-500/40 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-xl lg:text-2xl font-light tracking-tight transition-colors duration-500 ${
                      isScrolled ? "text-green-700" : "text-white"
                    }`}
                  >
                    Spark House
                  </span>
                  <span
                    className={`text-sm font-light tracking-wider transition-colors duration-500 ${
                      isScrolled ? "text-green-600" : "text-white/80"
                    }`}
                  >
                    LIMITED
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative group text-base font-light tracking-wide transition-colors duration-500 ${
                    isScrolled
                      ? "text-gray-700 hover:text-green-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-500 group-hover:w-full transition-all duration-500"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative p-3 rounded-lg transition-all duration-500 ${
                isScrolled
                  ? "text-green-600 hover:bg-green-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <div className="flex flex-col space-y-1.5 w-6">
                <div
                  className={`h-0.5 w-full rounded-full transition-all duration-500 ${
                    isMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "rotate-0 translate-y-0"
                  } ${isScrolled ? "bg-green-600" : "bg-white"}`}
                ></div>
                <div
                  className={`h-0.5 w-full rounded-full transition-all duration-500 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  } ${isScrolled ? "bg-green-600" : "bg-white"}`}
                ></div>
                <div
                  className={`h-0.5 w-full rounded-full transition-all duration-500 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : "rotate-0 translate-y-0"
                  } ${isScrolled ? "bg-green-600" : "bg-white"}`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ease-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/95 via-green-700/95 to-green-800/95 backdrop-blur-xl"></div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 12}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="w-16 h-16 border border-white/30 transform rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Menu Content - Fixed for mobile viewport */}
        <div className="relative z-10 h-full overflow-y-auto">
          <div className="flex flex-col min-h-full px-6 py-20">
            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <div
                    key={item.name}
                    className={`transition-all duration-700 ease-out ${
                      isMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="group block py-3 border-b border-white/10 hover:border-white/30 transition-all duration-500"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-light text-white group-hover:text-green-200 transition-colors duration-500">
                          {item.name}
                        </span>
                        <div className="w-6 h-6 rounded-full border border-white/30 group-hover:border-white group-hover:bg-white/10 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`mt-12 pt-6 border-t border-white/10 transition-all duration-700 ease-out ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
                  <span className="text-sm font-medium text-white/70 tracking-wider uppercase">
                    Get in Touch
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-white/90 font-light text-sm">
                    info@sparkhouselimited.ng
                  </p>
                  <p className="text-white/90 font-light text-sm">
                    08088035933
                  </p>
                  <p className="text-white/80 font-light text-sm leading-relaxed">
                    No.5 Plus Uchendu Street,
                    <br />
                    NTA Road, Port Harcourt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
