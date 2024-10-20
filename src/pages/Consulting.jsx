import React from "react";
import HeroSection from "../components/consultingPage/HeroSection";
import ServicesOffered from "../components/consultingPage/ServicesOffered";
import IndustriesServed from "../components/consultingPage/IndustriesServed";
import OurExperties from "../components/consultingPage/OurExperties";
import ClientTestimonials from "../components/consultingPage/ClientTestimonials";

const Consulting = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOffered />
      <IndustriesServed />
      <OurExperties />
      <ClientTestimonials />
    </div>
  );
};

export default Consulting;
