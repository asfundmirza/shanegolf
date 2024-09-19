import React from "react";
import PricingCards from "../components/pricingPage-components/PricingCards";
import TrustedClients from "../components/pricingPage-components/TrustedClients";
import FaqSection from "../components/pricingPage-components/FaqSection";

const PricingPage = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <PricingCards />
      <TrustedClients />
      <FaqSection />
    </div>
  );
};

export default PricingPage;
