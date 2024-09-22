import React from "react";
import img1 from "../../assets/featureNav-pic1.webp";
import img2 from "../../assets/featureNav-pic3.webp";

const MiddleSection = () => {
  const cardContent = [
    {
      img: img1,
      topName: "Peter",
      date: "Sep 23, 2024",
      bottomTitle: "Enhancing Workplace Safety with Real-Time Communication",
      bottomSubtitle:
        "Discover how Safety Chat transforms workplace safety through instant communication.",
    },
    {
      img: img2,
      topName: "Shane",
      date: "Sep 24, 2024",
      bottomTitle: "Streamline Incident Reporting with Safety Chat",
      bottomSubtitle:
        "Simplify safety reporting and response with real-time alerts and updates.",
    },
  ];
  return (
    <div className="max-w-7xl px-5 py-10 sm:px-6 md:px-10  lg:pt-5 lg:pb-14 mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        {cardContent.map((card, index) => (
          <a
            className="group relative block rounded-xl focus:outline-none"
            href="#"
          >
            <div className="shrink-0 relative rounded-xl h-[450px] overflow-hidden ">
              <img
                className="size-full  object-cover"
                src={card.img}
                alt="Blog Image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 z-[1]"></div>
            </div>
            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex items-center">
                <div className="shrink-0">
                  <div className="w-[46px] h-[46px] border-2 border-green-600 bg-gray-300 rounded-full"></div>
                </div>
                <div className="ml-2.5 sm:ml-4">
                  <h4 className="font-semibold text-white">{card.topName}</h4>
                  <p className="text-xs text-white/80">{card.date}</p>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
                  {card.bottomTitle}
                </h3>
                <p className="mt-2 text-white/80">{card.bottomSubtitle}</p>
              </div>
            </div>
          </a>
        ))}

        {/* <div className="absolute top-0 inset-x-0 z-10">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="size-[46px] border-2 border-white rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                </div>
                <div className="ms-2.5 sm:ms-4">
                  <h4 className="font-semibold text-white">Gloria</h4>
                  <p className="text-xs text-white/80">Jan 09, 2021</p>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                Facebook is creating a news section in Watch to feature breaking
                news
              </h3>
              <p className="mt-2 text-white/80">
                Facebook launched the Watch platform in August
              </p>
            </div>
          </div>
        </a> */}

        {/* <a className="group relative block rounded-xl focus:outline-none" href="#">
          <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>

          <div className="absolute top-0 inset-x-0 z-10">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    className="size-[46px] border-2 border-white rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                </div>
                <div className="ms-2.5 sm:ms-4">
                  <h4 className="font-semibold text-white">Gloria</h4>
                  <p className="text-xs text-white/80">May 30, 2021</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
              <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                What CFR (Conversations, Feedback, Recognition) really is about
              </h3>
              <p className="mt-2 text-white/80">
                For a lot of people these days, Measure What Matters.
              </p>
            </div>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default MiddleSection;
