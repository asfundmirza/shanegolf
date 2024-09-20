import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
        <h1 className="font-semibold text-3xl md:text-5xl">
          <span className="text-green-600 md:text-6xl text-5xl">
            Safety Chat:
          </span>{" "}
          Your Safety Companion for Secure, Efficient Workplace Communication
        </h1>

        <div className="max-w-4xl">
          <p className="mt-5 text-lg text-neutral-400">
            Safety Chat is a cutting-edge platform designed to enhance workplace
            safety by equipping workers with essential safety tools. With
            features like an AI Chat trained on OSHA regulations, a Toolbox Talk
            Generator, a Near Miss Tracker, Hazard Input & Follow-up, and OSHA
            300 Log Input & Reporting, Safety Chat empowers workers to stay
            compliant and improve safety outcomes in real-time. This app
            transforms safety management into an intuitive process, ensuring
            that safety protocols are followed seamlessly, and hazards are
            addressed efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
