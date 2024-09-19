import React from "react";
import { Shuffle } from "lucide-react";
import { School } from "lucide-react";
import { Target } from "lucide-react";

const SuccessStories = () => {
  const cardContent = [
    {
      percentage: "43%",
      image: <Shuffle />,
      title: "Enhancement in Customer Engagement",
      description:
        "By leveraging real-time communication and AI-powered chat features, our safety chat app enables seamless interactions between workers and safety personnel. This boosts engagement, ensuring safety concerns are addressed promptly, fostering a proactive safety culture.",
    },
    {
      percentage: "35%",
      image: <School />,

      title: "Improved Customer Satisfaction",
      description:
        "With efficient hazard reporting, incident tracking, and access to up-to-date safety protocols, the app ensures that workers feel supported and valued. This leads to increased trust and satisfaction as safety issues are resolved quickly and effectively.",
    },
    {
      percentage: "29%",
      image: <Target />,

      title: "Increased Brand Awareness",
      description:
        "Our safety chat app helps organizations demonstrate their commitment to workplace safety, which can enhance their reputation. By promoting safety initiatives and transparency, companies build stronger relationships with employees and stakeholders, leading to greater brand recognition.",
    },
  ];

  return (
    <div className="bg-green-600 bg-gradient-to-b from-green-50 to-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-neutral-900 font-semibold text-2xl md:text-6xl md:leading-tight">
            Success stories
          </h2>
          <p className="mt-1 text-neutral-400">
            Global brands see measurable success when they collaborate with us.
            From higher conversion and payment approval rates to faster
            processing speeds. Discover their stories here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center  divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 rounded-xl">
          {cardContent.map((card, index) => (
            <a
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col  text-black bg-white first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-neutral-200 before:via-80% before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100"
              href="#"
            >
              <div className="mb-5">
                <div className="flex-shrink-0 w-8 h-8 text-green-600">
                  {card.image}
                </div>

                <div className="mt-5">
                  <p className="font-semibold text-5xl ">{card.percentage}</p>
                  <h3 className="mt-5 font-medium text-lg ">{card.title}</h3>
                  <p className="mt-1 text-neutral-400">{card.description}</p>
                </div>
              </div>

              <p className="mt-auto">
                <span className="font-medium text-sm text-neutral-500 pb-1 border-b-2 border-neutral-700 group-hover:border-neutral-500 transition focus:outline-none group-focus:border-neutral-500">
                  Get Started
                </span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
