import React from "react";
import HeroSection from "../components/consultingPage/HeroSection";
import ServicesOffered from "../components/consultingPage/ServicesOffered";
import IndustriesServed from "../components/consultingPage/IndustriesServed";
import OurExperties from "../components/consultingPage/OurExperties";
import ClientTestimonials from "../components/consultingPage/ClientTestimonials";
import SuccessStories from "../components/consultingPage/SuccessStories";
import ToolsIntegration from "../components/consultingPage/ToolsIntegration";
import FAQ from "../components/consultingPage/FAQ";

const Consulting = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOffered />
      <IndustriesServed />
      <OurExperties />
      <ClientTestimonials />
      <SuccessStories />
      <ToolsIntegration />
      <FAQ />
    </div>
  );
};

export default Consulting;
