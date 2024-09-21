import React from "react";
import CareerCards from "../components/CarreresPage/CareerCards";

const Careers = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white">
      <div className="max-w-6xl px-4 xl:px-0 py-14 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-neutral-900 font-semibold text-4xl md:text-6xl md:leading-tight">
            Job Oppourtunities for you
          </h2>
          <p className="mt-1 text-neutral-400">
            We are looking for talented individuals who want to make a
            difference in the world.
          </p>
        </div>
        <CareerCards />
      </div>
    </div>
  );
};

export default Careers;
