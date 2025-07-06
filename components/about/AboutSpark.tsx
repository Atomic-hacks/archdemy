import React from "react";
import { Check } from "lucide-react";

interface OurStoryProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  features?: Array<{
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  containerClassName?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  title = "Our Story",
  subtitle = "What Sets Us Apart",
  description = "Welcome to Spark House Limited, where innovation meets excellence in construction and project management. Founded with a vision to redefine the industry standards, we are a dynamic firm dedicated to delivering exceptional results for our clients. With a focus on quality, efficiency, and client satisfaction, we have established ourselves as a trusted partner in the construction and project management sector.",
  image = "/house1.jpg",
  features = [
    { title: "Expertise" },
    { title: "Innovation" },
    { title: "Quality Assurance" },
    { title: "Client-Centric Approach" },
  ],
  containerClassName = "",
}) => {
  return (
    <section
      className={`relative py-16 sm:py-24 md:py-32 lg:py-48 bg-gradient-to-br bg-white overflow-hidden ${containerClassName}`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-2xl" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Green accent border */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt="Our Story"
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-green-900/20 to-black/50" />
              </div>

              {/* Decorative corner element */}
              <div className="absolute -top-4 -right-4 w-8 h-8">
                <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-500 mb-2" />
                <div className="w-1 h-full bg-gradient-to-b from-green-400 to-green-500" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative order-1 lg:order-2 space-y-8">
            {/* Section Header */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-500" />
                <span className="text-sm font-medium text-green-400 tracking-[0.15em] uppercase">
                  About Us
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500" />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed font-light bg-gradient-to-r from-neutral-900 via-green-800 to-neutral-900 bg-clip-text text-transparent">
                {description}
              </p>
            </div>

            {/* What Sets Us Apart */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                {subtitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {feature.icon ? (
                        <feature.icon className="w-3 h-3 text-black" />
                      ) : (
                        <Check className="w-3 h-3 text-black" />
                      )}
                    </div>
                    <span className="text-base md:text-lg font-medium bg-gradient-to-r from-neutral-900 via-green-800 to-neutral-900 bg-clip-text text-transparent group-hover:from-green-300 group-hover:to-green-400 transition-all duration-200">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="pt-8">
              <div className="flex items-center space-x-4 opacity-70">
                <div className="w-8 h-px bg-gradient-to-r from-green-400 to-green-500" />
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
