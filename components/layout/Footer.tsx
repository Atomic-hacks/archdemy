"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFooterVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) footerObserver.observe(footerRef.current);

    return () => {
      footerObserver.disconnect();
    };
  }, []);

  return (
    <footer className="bg-white border-t border-stone-200/50">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div
          ref={footerRef}
          className={`text-center py-16 md:py-20 transform transition-all duration-1000 ease-out ${
            isFooterVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/logo.png"
              alt="Archademy"
              className="w-20 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span
                className="text-xl font-light tracking-tight text-stone-900"
                style={{
                  fontWeight: "300",
                  letterSpacing: "-0.01em",
                }}
              >
                Archademy
              </span>
              <span
                className="text-xs font-light tracking-wider text-amber-600"
                style={{
                  letterSpacing: "0.1em",
                }}
              >
                LIMITED
              </span>
            </div>
          </div>

          <p
            className="text-stone-600 font-light text-sm"
            style={{
              fontWeight: "300",
              letterSpacing: "0.02em",
            }}
          >
            more than design
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 md:pb-20">
          {/* Our Company */}
          <div
            className={`transform transition-all duration-1000 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3
              className="text-stone-900 font-light text-lg mb-6"
              style={{
                fontWeight: "300",
                letterSpacing: "-0.01em",
              }}
            >
              Our Company
            </h3>

            <div className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-stone-600 hover:text-amber-600 transition-colors duration-300 font-light text-sm"
                  style={{
                    fontWeight: "300",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div
            className={`transform transition-all duration-1000 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3
              className="text-stone-900 font-light text-lg mb-6"
              style={{
                fontWeight: "300",
                letterSpacing: "-0.01em",
              }}
            >
              Get In Touch
            </h3>

            <div className="flex space-x-4">
              {[
                { icon: Linkedin, name: "LinkedIn", href: "#" },
                { icon: Facebook, name: "Facebook", href: "#" },
                { icon: Instagram, name: "Instagram", href: "#" },
                { icon: Mail, name: "Pinterest", href: "#" }, // Using Mail icon as placeholder for Pinterest
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-stone-600 hover:text-amber-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3
              className="text-stone-900 font-light text-lg mb-6"
              style={{
                fontWeight: "300",
                letterSpacing: "-0.01em",
              }}
            >
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />
                <p
                  className="text-stone-600 font-light text-sm leading-relaxed"
                  style={{
                    fontWeight: "300",
                    letterSpacing: "0.02em",
                  }}
                >
                  No.5 Pius Wuchendu Street, NTA Road, Port Harcourt
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-stone-400 flex-shrink-0" />
                <a
                  href="mailto:info@archademyltd.com"
                  className="text-stone-600 hover:text-amber-600 transition-colors duration-300 font-light text-sm"
                  style={{
                    fontWeight: "300",
                    letterSpacing: "0.02em",
                  }}
                >
                  info@archademyltd.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-200/50 py-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transform transition-all duration-1000 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <p
              className="text-stone-500 font-light text-sm"
              style={{
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              Copyright © 2025 Archademy
            </p>

            <p
              className="text-stone-500 font-light text-sm"
              style={{
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              Powered by Archademy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
