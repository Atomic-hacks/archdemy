"use client";

import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

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
    <footer className="relative min-h-screen bg-white overflow-hidden">
      {/* Dynamic Aurora Background - matching projects page */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 80% 20%, rgba(5, 150, 105, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 100% 70% at 40% 80%, rgba(6, 95, 70, 0.1) 0%, transparent 50%)
            `,
            animation: "aurora 20s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Floating Geometric Elements - matching projects page */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 10}%`,
              transform: `rotate(${i * 45}deg)`,
              animation: `float ${10 + (i % 3)}s ease-in-out infinite ${
                i * 0.8
              }s`,
            }}
          >
            <div
              className="w-20 h-20 border border-green-400/30 transform-gpu"
              style={{
                clipPath:
                  i % 3 === 0
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : i % 3 === 1
                    ? "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                    : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Particle System - matching projects page */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-teal-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `sparkle ${4 + Math.random() * 3}s linear infinite ${
                Math.random() * 2
              }s`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Cinematic Header - matching projects page style */}
        <div
          ref={footerRef}
          className={`text-center pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 transform transition-all duration-2000 ease-out ${
            isFooterVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-700/20 via-green-500/30 to-green-700/20 blur-2xl rounded-full animate-pulse"></div>
            <span className="relative text-sm font-light text-green-700 tracking-[0.3em] uppercase backdrop-blur-sm">
              Connect With Excellence
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-[0.9] mb-8 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-green-600 via-green-700 to-green-600 bg-clip-text text-transparent">
              Let&apos;s Build
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-green-600 via-green-800 to-green-600 bg-clip-text text-transparent font-light">
              Together
            </span>
          </h2>

          <div className="w-32 h-0.5 bg-gradient-to-r from-green-700 via-green-600 to-green-700 mx-auto mb-12" />

          <p className="text-lg md:text-xl text-gray-900 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to transform your vision into reality? Connect with Spark
            House Limited and experience the pinnacle of construction
            excellence.
          </p>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 md:pb-24">
          {/* Company Info */}
          <div
            className={`space-y-8 transform transition-all duration-1500 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-green-600 via-green-500 to-teal-400" />
                <span className="text-xs font-medium text-green-700 tracking-[0.2em] uppercase">
                  Our Company
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/logo.jpg"
                  alt="Spark House Limited"
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-2xl font-light bg-gradient-to-r from-green-700 via-green-800 to-green-700 bg-clip-text text-transparent">
                  Spark House Limited
                </h3>
              </div>

              <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 via-green-500 to-teal-400" />
            </div>

            <p className="text-gray-900 text-base leading-relaxed font-light">
              Where innovation meets excellence in construction and project
              management. Creating architectural masterpieces that stand the
              test of time.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, name: "Facebook" },
                { icon: Twitter, name: "Twitter" },
                { icon: Linkedin, name: "LinkedIn" },
                { icon: Instagram, name: "Instagram" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group/cta p-3 bg-transparent border border-green-600/30 text-green-600 hover:border-green-600 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                  <social.icon className="w-4 h-4 relative z-10 group-hover:text-white transition-colors duration-700" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div
            className={`space-y-8 transform transition-all duration-1500 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-teal-600 via-green-500 to-green-400" />
                <span className="text-xs font-medium text-green-700 tracking-[0.2em] uppercase">
                  Our Services
                </span>
              </div>

              <h3 className="text-2xl font-light bg-gradient-to-r from-green-700 via-green-800 to-green-700 bg-clip-text text-transparent">
                Expertise Areas
              </h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-600 via-green-500 to-green-400" />
            </div>

            <div className="space-y-4">
              {[
                "Architecture & Design",
                "Project Management",
                "Construction Services",
                "Site Planning",
                "Landscape Design",
                "Property Development",
              ].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="group block text-gray-900 hover:text-green-600 transition-all duration-300 font-light"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    <span>{service}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div
            className={`space-y-8 transform transition-all duration-1500 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-600 via-green-500 to-green-400" />
                <span className="text-xs font-medium text-green-700 tracking-[0.2em] uppercase">
                  Our Work
                </span>
              </div>

              <h3 className="text-2xl font-light bg-gradient-to-r from-green-700 via-green-800 to-green-700 bg-clip-text text-transparent">
                Featured Projects
              </h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-600 via-green-500 to-green-400" />
            </div>

            <div className="space-y-4">
              {[
                "Residential Duplex Eneka",
                "Shortlet Apartments",
                "Hotel Extension Project",
                "Workshop Development",
                "Commercial Properties",
              ].map((project) => (
                <a
                  key={project}
                  href="#"
                  className="group block text-gray-900 hover:text-green-600 transition-all duration-300 font-light"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    <span>{project}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`space-y-8 transform transition-all duration-1500 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-24 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-green-600 via-teal-500 to-green-400" />
                <span className="text-xs font-medium text-green-700 tracking-[0.2em] uppercase">
                  Get In Touch
                </span>
              </div>

              <h3 className="text-2xl font-light bg-gradient-to-r from-green-700 via-green-800 to-green-700 bg-clip-text text-transparent">
                Contact Details
              </h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 via-teal-500 to-green-400" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gradient-to-br from-green-600 via-green-500 to-teal-400 rounded-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-light leading-relaxed">
                    No.5 Plus Uchendu Street, NTA Road, Port Harcourt
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-to-br from-teal-600 via-green-500 to-green-400 rounded-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a
                  href="tel:08088035933"
                  className="text-gray-900 hover:text-green-600 transition-colors duration-300 font-light"
                >
                  08088035933
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-to-br from-cyan-600 via-green-500 to-green-400 rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a
                  href="mailto:info@sparkhouselimited.ng"
                  className="text-gray-900 hover:text-green-600 transition-colors duration-300 font-light"
                >
                  info@sparkhouselimited.ng
                </a>
              </div>
            </div>

            {/* CTA Button matching projects page style */}
            <div className="pt-4">
              <button className="group relative px-8 py-3 bg-transparent border border-green-600/30 text-green-600 font-light text-base hover:border-green-600 transition-all duration-500 overflow-hidden w-full">
                <div className="absolute inset-0 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
                <span
                  className="relative z-10 group-hover:text-white transition-colors duration-700"
                  style={{ fontWeight: "300", letterSpacing: "0.02em" }}
                >
                  Start Your Project
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-400/20 py-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transform transition-all duration-1500 ${
              isFooterVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex items-center space-x-4 opacity-60">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
              <div className="w-1 h-1 bg-green-300 rounded-full animate-pulse delay-500" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000" />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 font-light">
                Copyright © 2025 Spark House Limited. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-4 opacity-60">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
              <div className="w-1 h-1 bg-green-300 rounded-full animate-pulse delay-500" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes aurora {
          0% {
            transform: rotate(0deg) scale(1) translate(0, 0);
          }
          33% {
            transform: rotate(5deg) scale(1.1) translate(20px, -20px);
          }
          66% {
            transform: rotate(-3deg) scale(0.9) translate(-20px, 20px);
          }
          100% {
            transform: rotate(0deg) scale(1) translate(0, 0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </footer>
  );
}
