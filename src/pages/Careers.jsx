import React from "react";
import CareerCards from "../components/CarreresPage/CareerCards";
import TeamSection from "../components/CarreresPage/TeamSection";

const Careers = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white">
      <TeamSection />
      <CareerCards />
    </div>
  );
};

export default Careers;
