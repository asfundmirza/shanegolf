import React from "react";
import HeroSection from "../components/companyPage-components/HeroSection";
import ClientSection from "../components/companyPage-components/ClientSection";
import SuccessStories from "../components/companyPage-components/SuccessStories";
import Testimonials from "../components/companyPage-components/Testimonials";
import FeatureNav from "../components/companyPage-components/FeatureNav";
import ApproachSection from "../components/companyPage-components/ApproachSection";

const Company = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <HeroSection />
      <ClientSection />
      <SuccessStories />
      <FeatureNav />
      <ApproachSection />
      <Testimonials />
    </div>
  );
};

export default Company;
