import React from "react";
import HtmlCss from "../../assets/JobOppoutunities/htmlCSS.png";
import GraphicDesign from "../../assets/JobOppoutunities/digitalMarketing.png";
import DigitalMarketing from "../../assets/JobOppoutunities/flutterDevelopment.png";
import FlutterDevelopment from "../../assets/JobOppoutunities/graphicDesign.png";
import MachineLearning from "../../assets/JobOppoutunities/machineLearning.png";
import MernDevelopment from "../../assets/JobOppoutunities/mernDevelopment.png";
import { CircleUserRound } from "lucide-react";
import { Navigation } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CareerCards = () => {
  const navigate = useNavigate();
  const boxContent = [
    {
      src: HtmlCss,
      alt: "HtmlCss",
      name: "React Developer",
      employment: "Hybrid",
      Location: "USA",
      JobType: "Full Time",
    },
    {
      src: GraphicDesign,
      alt: "GraphicDesign",
      name: "Graphic Designing",
      employment: "Hybrid",
      Location: "USA",
      JobType: "Full Time",
    },
    {
      src: DigitalMarketing,
      alt: "DigitalMarketing",
      name: "Digital Marketing",
      employment: "Hybrid",
      Location: "USA",
      JobType: "Full Time",
    },
    {
      src: FlutterDevelopment,
      alt: "FlutterDevelopment",
      name: "Flutter Development",
      employment: "Hybrid",
      Location: "USA",
      JobType: "Full Time",
    },
    {
      src: MachineLearning,
      alt: "MachineLearning",
      name: "Machine Learning",
      employment: "Hybrid",
      Location: "USA",
      JobType: "Full Time",
    },
    {
      src: MernDevelopment,
      alt: "MernDevelopment",
      name: "MERN Development",
      employment: "Hybrid",
      Location: "USA",
      JobType: "Full Time",
    },
  ];
  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
        {boxContent.map((box, index) => (
          <div
            key={index}
            className="bg-white text-white flex flex-col shadow-lg rounded-lg pb-6 transition-transform transform hover:scale-105 duration-300 "
          >
            <div className="bg-green-600 rounded-t-lg shadow-lg text-white w-full p-6 flex justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="text-[20px] md:text-[32px] font-bold">
                  {box.name}
                </h1>
                <div className="w-[50%] border  bg-white "></div>
                <p>Safety-Chat Institute</p>
              </div>
              <div className="flex-shrink-0 ">
                <img
                  src={box.src}
                  alt={box.alt}
                  className="rounded-md h-auto w-[60px] md:w-[100px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col p-6 gap-4 text-black">
              <div className="flex gap-2 ">
                <CircleUserRound className="h-[20px] w-[20px]" />
                <h1>
                  Employement -{" "}
                  <span className="bg-gray-100 p-1 rounded-md">
                    {box.employment}
                  </span>
                </h1>
              </div>
              <div className="flex gap-2 ">
                <Navigation className="h-[20px] w-[20px]" />
                <h1>
                  Location -{" "}
                  <span className="bg-gray-100 p-1 rounded-md">
                    {box.Location}
                  </span>
                </h1>
              </div>
              <div className="flex gap-2 ">
                <BriefcaseBusiness className="h-[20px] w-[20px]" />
                <h1>
                  Job Type -{" "}
                  <span className="bg-gray-100 p-1 rounded-md">
                    {box.JobType}
                  </span>
                  <span className="bg-gray-100 p-1 ml-1 rounded-md">
                    Part-Time
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <button
                className="bg-green-600 rounded-lg p-2 px-6 text-center"
                onClick={() => navigate(`/careers/${slugify(box.name)}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerCards;
