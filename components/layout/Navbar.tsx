"use client";
import Link from "next/link";
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
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="group flex items-center space-x-3">
                <img src="/logo.png" alt="logo" className="w-20 h-12" />
                <div className="flex flex-col">
                  <span
                    className={`text-lg lg:text-xl font-light tracking-tight transition-colors duration-500 ${
                      isScrolled ? "text-stone-900" : "text-white"
                    }`}
                    style={{
                      fontWeight: "300",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Archademy
                  </span>
                  <span
                    className={`text-xs font-light tracking-wider transition-colors duration-500 ${
                      isScrolled ? "text-amber-600" : "text-white/80"
                    }`}
                    style={{
                      letterSpacing: "0.1em",
                    }}
                  >
                    LIMITED
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative group text-sm font-light tracking-wide transition-colors duration-500 ${
                    isScrolled
                      ? "text-stone-700 hover:text-amber-600"
                      : "text-white/90 hover:text-white"
                  }`}
                  style={{
                    fontWeight: "300",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative p-2 transition-all duration-300 ${
                isScrolled ? "text-stone-700" : "text-white"
              }`}
            >
              <div className="flex flex-col space-y-1 w-5">
                <div
                  className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                    isMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "rotate-0 translate-y-0"
                  } ${isScrolled ? "bg-stone-700" : "bg-white"}`}
                ></div>
                <div
                  className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  } ${isScrolled ? "bg-stone-700" : "bg-white"}`}
                ></div>
                <div
                  className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "rotate-0 translate-y-0"
                  } ${isScrolled ? "bg-stone-700" : "bg-white"}`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Clean background */}
        <div className="absolute inset-0 bg-stone-900/95 backdrop-blur-sm"></div>

        {/* Menu Content */}
        <div className="relative z-10 h-full">
          <div className="flex flex-col justify-center min-h-full px-8 py-20">
            {/* Menu Items */}
            <div className="space-y-8">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`transition-all duration-500 ease-out ${
                    isMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group block py-2 border-b border-stone-700/30 hover:border-amber-600/50 transition-all duration-300"
                  >
                    <span
                      className="text-2xl font-light text-white group-hover:text-amber-300 transition-colors duration-300"
                      style={{
                        fontWeight: "300",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
