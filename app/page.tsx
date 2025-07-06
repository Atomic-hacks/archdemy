import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import React from "react";

const home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
};

export default home;
