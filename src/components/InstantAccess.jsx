import React from "react";
import CoveredImage from "../assets/heroSection mob.png";
const InstantAccess = () => {
  return (
    <div className="flex w-full container mx-auto p-8">
      <div className="flex md:flex-row flex-col w-full justify-between items-center">
        <div className="flex flex-1 flex-col md:items-start items-center gap-8">
          <div className="lg:text-5xl md:text-4xl flex flex-col md:gap-4 gap-2  text-3xl md:text-left text-center font-semibold text-gray-900">
            <span>Instant Access to</span>
            <span className="bg-green-600   p-4 w-fit lg:text-7xl md:text-6xl  text-4xl text-white rounded-[25px]">
              Regulatory
            </span>
            <span>Resources</span>
          </div>
          <div className="text-gray-500 md:max-w-[450px]">
            With Safety Chat, you'll have access to the latest regulatory
            materials, toolbox talks, and industry hygiene calculators at your
            fingertips.
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <img
            src={CoveredImage}
            alt="hero image"
            className="w-full object-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default InstantAccess;
