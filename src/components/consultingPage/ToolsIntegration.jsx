import React from "react";
import {
  faIndustry,
  faHandshake,
  faRobot,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colorClasses = {
  green: "bg-green-600 shadow-green-600",
  gray: "bg-gray-900 shadow-gray-900",
};

const contents = [
  {
    color: "green",
    icon: faIndustry,
    title: "Customizable Programs",
    text: "We provide industry-specific solutions, from safety assessments to ongoing program management tailored to your unique needs.",
  },
  {
    color: "gray",
    icon: faHandshake,
    title: "On-Site and Remote Services",
    text: "We offer flexible service delivery, with both on-site and remote consultations to meet your business requirements.",
  },
  {
    color: "green",
    icon: faRobot,
    title: "AI-Powered Solutions",
    text: "Safety-Chat's AI tools assist in hazard identification, incident reporting, and ensuring regulatory compliance.",
  },
  {
    color: "gray",
    icon: faLaptopCode,
    title: "Software Integration",
    text: "We integrate seamlessly with existing safety management systems, incident reporting tools, and OSHA recordkeeping software.",
  },
];

const ContentItem = ({ item, index }) => (
  <div
    className={`flex flex-col items-center justify-center shadow-lg text-white rounded-2xl text-center p-6 md:py-10 h-full ${
      colorClasses[item.color]
    } ${index % 2 === 1 ? "lg:mt-16" : ""}`}
  >
    <div className="text-5xl mb-6 text-white">
      <FontAwesomeIcon icon={item.icon} />
    </div>
    <h4 className="text-2xl font-medium mb-2 text-white">{item.title}</h4>
    <p className="opacity-75 mt-4 text-white">{item.text}</p>
  </div>
);

const ToolsIntegration = () => {
  return (
    <section className="md:py-24 py-10 text-gray-900  ">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-6xl leading-none font-bold tracking-wide  mb-6">
            Safety <span className="text-green-600">Solutions & Tools</span>{" "}
            Integration
          </h2>
          <p>
            We integrate seamlessly with existing safety management systems,
            incident reporting tools, and OSHA recordkeeping software. Our
            AI-powered solutions help you streamline communication, improve
            efficiency, and ensure compliance with regulatory requirements.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-12 md:mt-20">
          {contents.map((item, i) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
              <ContentItem index={i} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsIntegration;
