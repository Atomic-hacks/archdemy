import React from "react";

const ConstructionServicesPage = () => {
  const services = [
    {
      number: "01.",
      title: "Building Construction Services",
      description:
        "Our building construction services are at the core of what we do. We specialize in bringing architectural designs to life with precision and craftsmanship. Whether it's a residential, commercial, or industrial project, we handle every aspect of construction from start to finish.",
      image: "/api/placeholder/600/400",
    },
    {
      number: "02.",
      title: "Building Renovation Services",
      description:
        "Revitalizing existing structures requires a blend of creativity and expertise. Our renovation services breathe new life into outdated buildings, enhancing their functionality and aesthetics.",
      image: "/api/placeholder/600/400",
    },
    {
      number: "03.",
      title: "Project Documentation",
      description:
        "Transparency and documentation are integral parts of our process. Our project documentation services provide clients with a comprehensive record of their project's progress, from initial plans to final construction. This documentation ensures clear communication and accountability throughout the project.",
      image: "/api/placeholder/600/400",
    },
    {
      number: "04.",
      title: "Residential Transformation",
      description:
        "Our residential transformation service is designed for homeowners looking to elevate their living spaces. Whether it's a complete home renovation or a sophisticated redesign, we provide innovative design solutions and expert craftsmanship to create homes that reflect our clients' refined taste and lifestyle.",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-3"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-700/20 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-24 md:py-32 lg:py-40 text-center">
          <div className="space-y-8">
            {/* Section indicator */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-green-300 to-green-400" />
              <span className="text-sm font-medium text-green-300 tracking-[0.15em] uppercase">
                What We Offer
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-300" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide">
              <span className="bg-gradient-to-r from-green-200 via-green-300 to-green-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-green-400 mx-auto" />

            <p className="text-lg md:text-xl text-green-100/90 max-w-4xl mx-auto leading-relaxed font-light">
              Excellence in construction, renovation, and design solutions
              crafted with timeless precision and unwavering commitment to
              quality
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-500" />
            <span className="text-sm font-medium text-green-500 tracking-[0.15em] uppercase">
              Our Expertise
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
            <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto mb-6" />

          <p className="text-lg bg-gradient-to-r from-neutral-900 via-green-800 to-neutral-900 bg-clip-text text-transparent font-light max-w-2xl mx-auto leading-relaxed">
            Four pillars of excellence defining our commitment to exceptional
            craftsmanship
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center group ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="flex-1 relative">
                <div className="relative">
                  {/* Green accent border */}
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600" />

                  <div className="relative overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-green-900/20 to-black/50" />

                    {/* Service Number Overlay */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg">
                        <span className="text-xl font-light bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                          {service.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute -top-4 -right-4 w-8 h-8">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-500 mb-2" />
                    <div className="w-1 h-full bg-gradient-to-b from-green-400 to-green-500" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight">
                    <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500" />
                </div>

                <p className="text-lg leading-relaxed font-light bg-gradient-to-r from-neutral-900 via-green-800 to-neutral-900 bg-clip-text text-transparent">
                  {service.description}
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="group/btn relative overflow-hidden border border-green-500 text-green-600 px-6 py-3 transition-all duration-500 hover:text-white font-light tracking-wide">
                    <span className="relative z-10">Discover More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </button>
                </div>

                {/* Decorative element */}
                <div className="pt-6">
                  <div className="flex items-center space-x-4 opacity-60">
                    <div className="w-8 h-px bg-gradient-to-r from-green-400 to-green-500" />
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial/Quote Section */}
      <div className="relative z-10 bg-gradient-to-r from-slate-50/80 to-green-50/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-green-400 to-green-500" />
            <span className="text-sm font-medium text-green-500 tracking-[0.15em] uppercase">
              Our Philosophy
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-green-500 to-green-400" />
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed mb-8">
            <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
              &quot;Excellence is never an accident. It is always the result of
              high intention, sincere effort, and intelligent execution.&quot;
            </span>
          </blockquote>

          <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-500 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ConstructionServicesPage;
