import React from "react";
import {
  Construction,
  Factory,
  HeartPulse,
  Zap,
  Package,
  Utensils,
} from "lucide-react";

const IndustriesServed = () => {
  const data = [
    {
      title: "Construction",
      description:
        "Building and construction management services to ensure project success.",
      icon: <Construction className="md:size-8 size-4 text-white  " />,
    },
    {
      title: "Manufacturing",
      description:
        "Streamlined processes to enhance productivity and quality in manufacturing.",
      icon: <Factory className="md:size-8 size-4 text-white" />,
    },
    {
      title: "Healthcare",
      description:
        "Innovative healthcare solutions for better patient outcomes and efficiency.",
      icon: <HeartPulse className="md:size-8 size-4 text-white" />,
    },
    {
      title: "Energy & Utilities",
      description:
        "Sustainable energy solutions and efficient utility management services.",
      icon: <Zap className="md:size-8 size-4 text-white" />,
    },
    {
      title: "Warehousing & Logistics",
      description:
        "Optimized storage and logistics solutions for efficient supply chain management.",
      icon: <Package className="md:size-8 size-4 text-white" />,
    },
    {
      title: "Food & Beverage",
      description:
        "Comprehensive solutions to enhance food and beverage production and distribution.",
      icon: <Utensils className="md:size-8 size-4 text-white" />,
    },
  ];
  return (
    <div class="flex flex-col md:gap-[100px] gap-9 max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-800">
            <span className="text-green-600">Industries</span> Served
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="hidden md:block text-neutral-400">
            At Safety Chat, we specialize in providing safety consulting
            services across a variety of industries. Our deep understanding of
            industry-specific safety challenges allows us to deliver tailored
            solutions that ensure compliance and enhance operational efficiency.
          </p>
          <p className="block md:hidden text-neutral-400">
            At Safety Chat, we specialize in providing safety consulting
            services across a variety of industries.
          </p>
        </div>
      </div>
      <div class="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-6 lg:gap-12">
          {data.map((item, index) => (
            <div key={index} className="space-y-6 lg:space-y-10">
              <div className="flex gap-x-5 items-center md:items-start sm:gap-x-8">
                <div className="shrink-0 p-2 bg-green-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="grow">
                  <h3 className="text-base sm:text-lg md:font-semibold font-medium text-gray-800">
                    {item.title}
                  </h3>
                  <p className=" hidden md:block mt-1 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
