"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Facebook,
  Twitter,
  Linkedin,
  Home,
  Mail,
  Phone,
} from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  specialty: string;
  description: string;
}

interface TeamSectionProps {
  containerClassName?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  containerClassName = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alexandra Chen",
      position: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
      specialty: "Brand Strategy",
      description:
        "Leading creative vision with 8+ years of experience in architectural design and brand development.",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Lead Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      specialty: "Sustainable Design",
      description:
        "Specializes in eco-friendly architecture and innovative sustainable building solutions.",
    },
    {
      id: 3,
      name: "Sarah Kim",
      position: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      specialty: "Spatial Planning",
      description:
        "Expert in creating functional and aesthetically pleasing interior spaces that tell stories.",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      specialty: "Client Relations",
      description:
        "Ensures seamless project execution and maintains strong client relationships throughout.",
    },
    {
      id: 5,
      name: "Emily Johnson",
      position: "Senior Designer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      specialty: "Contemporary Design",
      description:
        "Passionate about modern aesthetics and innovative design solutions for residential spaces.",
    },
    {
      id: 6,
      name: "Michael Park",
      position: "Structural Engineer",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=500&fit=crop&crop=face",
      specialty: "Engineering Excellence",
      description:
        "Ensures structural integrity while maintaining design vision in all our projects.",
    },
    {
      id: 7,
      name: "Lisa Wang",
      position: "Landscape Architect",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
      specialty: "Outdoor Spaces",
      description:
        "Creates harmonious outdoor environments that complement our architectural designs.",
    },
    {
      id: 8,
      name: "James Mitchell",
      position: "Design Consultant",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
      specialty: "Luxury Interiors",
      description:
        "Specializes in high-end residential and commercial interior design with attention to detail.",
    },
  ];

  const socialLinks = [
    { icon: Home, label: "Houzz" },
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <div className={`relative min-h-screen bg-white ${containerClassName}`}>
      {/* Main Content */}
      <div className="relative z-10">
        {/* Team Header Section */}
        <section className="relative bg-neutral-50 py-24 overflow-hidden">
          {/* Background Text */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin text-neutral-100 whitespace-nowrap"
                style={{
                  letterSpacing: "0.05em",
                  fontWeight: "100",
                }}
              >
                OUR TEAM
              </h1>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center space-y-12">
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-px bg-amber-600 mx-auto"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-black tracking-tight">
                    Meet Our Team
                  </h2>
                </div>
              </div>

              <div
                className={`transform transition-all duration-1000 ease-out delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed">
                    Our diverse team of creative professionals brings together
                    expertise in architecture, design, and innovation to create
                    extraordinary spaces that inspire and endure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="relative bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div
              className={`transform transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`group cursor-pointer transition-all duration-500 ${
                      hoveredCard === member.id ? "transform scale-105" : ""
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    onMouseEnter={() => setHoveredCard(member.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() =>
                      setActiveCard(activeCard === member.id ? null : member.id)
                    }
                  >
                    <div className="relative overflow-hidden bg-white">
                      {/* Image Container */}
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Hover Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="text-white">
                            <p className="text-sm font-light mb-2 text-amber-300">
                              {member.specialty}
                            </p>
                            <p className="text-xs leading-relaxed opacity-90">
                              {member.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="p-6 space-y-3">
                        <div className="space-y-1">
                          <h3 className="text-xl font-light text-black tracking-tight">
                            {member.name}
                          </h3>
                          <p className="text-sm text-neutral-600 font-light tracking-wide uppercase">
                            {member.position}
                          </p>
                        </div>

                        {/* Decorative Line */}
                        <div
                          className={`h-px bg-amber-600 transition-all duration-300 ${
                            hoveredCard === member.id ? "w-full" : "w-8"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div
              className={`transform transition-all duration-1000 ease-out delay-900 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="text-center space-y-12">
                <div className="space-y-6">
                  <div className="w-16 h-px bg-amber-600 mx-auto"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight">
                    Let&apos;s Work Together
                  </h2>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-light text-neutral-300">
                    Ready to bring your vision to life?
                  </h3>

                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-3 text-amber-600 group cursor-pointer">
                      <Mail className="w-5 h-5" />
                      <span className="text-lg font-light tracking-wide">
                        hello@archademy.com
                      </span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>

                    <div className="flex items-center space-x-3 text-amber-600 group cursor-pointer">
                      <Phone className="w-5 h-5" />
                      <span className="text-lg font-light tracking-wide">
                        +1 (555) 123-4567
                      </span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-8 pt-8">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 border border-neutral-700 flex items-center justify-center hover:border-amber-600 transition-all duration-300 cursor-pointer group"
                    >
                      <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-amber-600 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamSection;
