import React from "react";
import HeroSection from "../components/consultingPage/HeroSection";
import ServicesOffered from "../components/consultingPage/ServicesOffered";
import IndustriesServed from "../components/consultingPage/IndustriesServed";
import OurExperties from "../components/consultingPage/OurExperties";
import ClientTestimonials from "../components/consultingPage/ClientTestimonials";
import SuccessStories from "../components/consultingPage/SuccessStories";

const Consulting = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOffered />
      <IndustriesServed />
      <OurExperties />
      <ClientTestimonials />
      <SuccessStories />
    </div>
  );
};

export default Consulting;
