/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Send,
  User,
  MessageSquare,
  Building,
  Calendar,
} from "lucide-react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    budget: "",
    timeline: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  {
    /*const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };*/
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-12">
                <div
                  className={`transform transition-all duration-1000 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="space-y-8">
                    {/* Minimal accent line */}
                    <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-amber-700"></div>

                    <div className="space-y-6">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-black leading-[0.9] tracking-tight">
                        GET IN
                        <br />
                        <span className="font-light">TOUCH</span>
                      </h1>

                      <p className="text-lg md:text-xl text-neutral-600 font-light tracking-wide">
                        Ready to Transform Your Vision
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-1000 ease-out delay-300 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="space-y-8 max-w-2xl">
                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">
                      Ready to transform your vision into reality? Let&apos;s
                      discuss your project and explore how we can bring
                      exceptional design to life.
                    </p>

                    <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-light">
                      At ADCL, we believe every project tells a unique story.
                      Share your vision with us and let&apos;s create something
                      extraordinary together.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Contact Info */}
              <div className="lg:col-span-5">
                <div
                  className={`transform transition-all duration-1000 ease-out delay-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="relative space-y-8">
                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-light text-black tracking-wide">
                          Call Us
                        </h3>
                        <p className="text-base text-neutral-600 font-light">
                          08088035933
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-light text-black tracking-wide">
                          Our Email
                        </h3>
                        <p className="text-base text-neutral-600 font-light">
                          info@Archademylimited.ng
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-light text-black tracking-wide">
                          Our Location
                        </h3>
                        <p className="text-base text-neutral-600 font-light leading-relaxed">
                          No.5 Pius Uchendu Street,
                          <br />
                          NTA Road, Port Harcourt,
                          <br />
                          Port Harcourt, Nigeria
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-light text-black tracking-wide">
                          Working Hours
                        </h3>
                        <p className="text-base text-neutral-600 font-light">
                          Mon-Fri: 10AM-5PM
                        </p>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="pt-8 border-t border-neutral-200">
                      <div className="space-y-4">
                        <h3 className="text-lg font-light text-black tracking-wide">
                          Follow Us
                        </h3>
                        <div className="flex items-center space-x-3">
                          <a
                            href="#"
                            className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="relative bg-neutral-50 py-24">
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
                CONTACT FORM
              </h1>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <div className="w-16 h-px bg-amber-600 mx-auto"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-black tracking-tight">
                  Send Us A Message
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-neutral-200">
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-light text-black mb-4 tracking-wide">
                      Archademy Lead Capture Questionnaire
                    </h3>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      Thank you for your interest in working with us! Please
                      provide your details below so we can understand your needs
                      and how we can assist you.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-light text-black tracking-wide flex items-center space-x-2">
                          <User className="w-4 h-4 text-amber-600" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Please enter your full name"
                          className="w-full px-4 py-3 bg-white/80 border border-neutral-200 focus:outline-none focus:border-amber-600 transition-all duration-300 text-black placeholder-neutral-400 font-light"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-light text-black tracking-wide flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-amber-600" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-white/80 border border-neutral-200 focus:outline-none focus:border-amber-600 transition-all duration-300 text-black placeholder-neutral-400 font-light"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-light text-black tracking-wide flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-amber-600" />
                          <span>Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+234 808 803 5933"
                          className="w-full px-4 py-3 bg-white/80 border border-neutral-200 focus:outline-none focus:border-amber-600 transition-all duration-300 text-black placeholder-neutral-400 font-light"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-light text-black tracking-wide flex items-center space-x-2">
                          <Building className="w-4 h-4 text-amber-600" />
                          <span>Project Type *</span>
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/80 border border-neutral-200 focus:outline-none focus:border-amber-600 transition-all duration-300 text-black font-light"
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="residential">
                            Residential Building
                          </option>
                          <option value="commercial">
                            Commercial Property
                          </option>
                          <option value="hotel">Hotel/Hospitality</option>
                          <option value="renovation">Renovation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-light text-black tracking-wide">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/80 border border-neutral-200 focus:outline-none focus:border-amber-600 transition-all duration-300 text-black font-light"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50m">Under ₦50M</option>
                          <option value="50m-100m">₦50M - ₦100M</option>
                          <option value="100m-200m">₦100M - ₦200M</option>
                          <option value="over-200m">Over ₦200M</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-light text-black tracking-wide flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-amber-600" />
                          <span>Timeline</span>
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/80 border border-neutral-200 focus:outline-none focus:border-amber-600 transition-all duration-300 text-black font-light"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">As soon as possible</option>
                          <option value="3-months">Within 3 months</option>
                          <option value="6-months">Within 6 months</option>
                          <option value="1-year">Within 1 year</option>
                          <option value="planning">Just planning</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-light text-black tracking-wide flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-amber-600" />
                        <span>Project Details *</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project vision, requirements, and any specific details..."
                        rows={6}
                        className="w-full px-4 py-3 bg-white/80 border border-neutral-200 focus:outline-none focus:border-amber-600 transition-all duration-300 text-black placeholder-neutral-400 resize-none font-light"
                        required
                      />
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="group relative px-12 py-4 bg-amber-600 text-white font-light text-sm tracking-widest uppercase hover:bg-amber-700 transition-all duration-500"
                      >
                        <span className="relative z-10 flex items-center space-x-3">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="w-16 h-px bg-amber-600"></div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight">
                    Ready to Start?
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                    Let&apos;s discuss your vision and create something
                    extraordinary together.
                  </p>

                  <button className="group relative px-8 py-3 border border-amber-600 text-amber-600 font-light text-sm tracking-widest uppercase hover:bg-amber-600 hover:text-white transition-all duration-500">
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Schedule a Consultation</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right - Image placeholder */}
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-800">
                  <img
                    src="/const1.jpg"
                    alt="Architectural Vision"
                    className="w-full h-full object-cover filter brightness-75 contrast-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
