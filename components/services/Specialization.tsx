import React from "react";
import { Building2, Clipboard, Users, Home } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Construction Services",
      description:
        "From ground-breaking to final touches, we excel in building new structures that meet and exceed expectations. Our experienced team ensures every detail is meticulously executed.",
      features: [
        "New Construction",
        "Project Management",
        "Project Contracting",
      ],
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Remodeling Services",
      description:
        "Transforming spaces is our specialty. Whether modernizing facades or creating stunning interiors, we bring your vision to life with skill and creativity.",
      features: ["Interior Design", "Exterior Renovation", "Landscape Design"],
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Project Management",
      description:
        "Effective project management streamlines the construction process, ensuring projects are delivered on time, within budget, and to the highest quality standards.",
      features: ["Timeline Management", "Budget Control", "Quality Assurance"],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Consulting Services",
      description:
        "From permits to facility management, our consulting services provide expert guidance throughout your project lifecycle and beyond.",
      features: [
        "Permits & Approvals",
        "Facility Management",
        "Real Estate Development",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white relative py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-green-600 tracking-wider uppercase">
                What We Offer
              </p>
              <h1 className="text-5xl lg:text-6xl font-light tracking-tight">
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Our Specialization
                </span>
              </h1>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-green-400 to-green-600 mx-auto" />

            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Our mission is simple yet powerful: to deliver outstanding
              construction and project management services that transform
              visions into reality. We are driven by a passion for creativity, a
              dedication to precision, and a relentless pursuit of excellence.
              Every project, regardless of scale or complexity, is approached
              with meticulous attention to detail and a focus on exceeding our
              clients’ expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative">
                  {/* Subtle border accent */}
                  <div className="absolute -left-4 top-0 w-px h-16 bg-gradient-to-b from-green-400 to-green-600" />

                  <div className="bg-white/80 backdrop-blur-sm border border-gray-100  p-8 hover:border-green-200 hover:shadow-lg transition-all duration-500">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-green-50 p-3  text-green-600 group-hover:bg-green-100 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-light">
                        <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                          {service.title}
                        </span>
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-sm text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <button className="group/btn relative overflow-hidden text-green-600 border border-green-200 px-6 py-2.5 hover:text-white transition-colors duration-300 font-medium text-sm tracking-wide">
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 transform translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="space-y-8">
            <p className="text-sm font-medium text-green-300 tracking-wider uppercase">
              Get Started
            </p>

            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              <span className="bg-gradient-to-r from-green-200 to-green-300 bg-clip-text text-transparent">
                Ready to Begin Your Project?
              </span>
            </h2>

            <div className="w-16 h-px bg-gradient-to-r from-green-300 to-green-400 mx-auto" />

            <p className="text-lg text-green-100/90 font-light max-w-2xl mx-auto leading-relaxed">
              Let us transform your vision into reality with our expertise,
              dedication, and unwavering commitment to excellence.
            </p>

            <button className="group relative overflow-hidden bg-white/95 text-green-800 px-8 py-4 hover:text-white transition-colors duration-300 font-medium tracking-wide shadow-lg">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
