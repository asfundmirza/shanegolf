import React from "react";
import { ArrowRight } from "lucide-react";
import pic2 from "../../assets/featureNav-pic2.webp";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-14 py-10">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="block md:text-5xl font-bold text-gray-800 text-4xl lg:text-6xl lg:leading-tight">
            Custom Safety Solutions to Keep Your{" "}
            <span className="text-green-600">Workforce Safe.</span>
          </h1>
          <p className="mt-3 md:text-lg text-sm text-neutral-400">
            Offering comprehensive safety solutions, compliance assistance, and
            expert training for businesses of all sizes.
          </p>

          <div className="mt-7 w-full md:inline-flex">
            <button
              className="group inline-flex items-center  w-fit gap-x-2 py-2 px-3 bg-green-600 font-medium text-sm text-white rounded-xl focus:outline-none"
              href="#"
            >
              Contact Us
              <ArrowRight className="shrink-0 size-4 transition group-hover:translate-x-0.5  group-focus:translate-x-0.5 " />
            </button>
          </div>
        </div>

        <div className="relative ms-4">
          <img
            className="w-full rounded-md object-cover max-h-[700px]"
            src={pic2}
            alt="Hero Image"
          />
          <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-green-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
