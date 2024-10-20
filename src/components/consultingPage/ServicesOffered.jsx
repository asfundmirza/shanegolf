import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";

const serviceList = [
  {
    icon: faCannabis,
    title: "Safety Audits & Inspections",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations",
  },
  {
    icon: faRandom,
    title: "Safety Program Development",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations",
  },
  {
    icon: faCamera,
    title: "Incident Investigation & Reporting",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations",
  },
  {
    icon: faAsymmetrik,
    title: "Safety Training & Education",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations",
  },
  {
    icon: faAsymmetrik,
    title: "Compliance Assistance",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations",
  },
  {
    icon: faAsymmetrik,
    title: "Specialized Services",
    description:
      "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws vary in various nations",
  },
];

const ServiceItem = ({ service }) => (
  <div className="bg-white  shadow h-full p-3 md:mt-4">
    <div className="p-4 lg:p-8">
      <div className="text-[40px] text-blue-600 mb-2">
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <h5 className="text-xl font-medium my-6">{service.title}</h5>
      <p className="opacity-75 mt-4">{service.description}</p>
    </div>
  </div>
);

function ShapeOne() {
  return (
    <svg
      className="absolute -bottom-[20%] left-0 -z-[1]"
      width="405"
      height="626"
      viewBox="0 0 405 626"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-302.65"
        y="296.986"
        width="433.92"
        height="140"
        rx="73.8464"
        transform="rotate(-33.796 -302.65 296.986)"
        fill="#7434F8"
        fillOpacity="0.5"
      />
      <rect
        x="-315"
        y="502.403"
        width="666.584"
        height="140"
        rx="73.8464"
        transform="rotate(-33.796 -315 502.403)"
        fill="#FAA515"
        fillOpacity="0.5"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute -top-[20%] right-0 -z-[1]"
      width="340"
      height="658"
      viewBox="0 0 495 778"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="389" cy="389" r="389" fill="#0d6efd" fillOpacity="0.19" />
    </svg>
  );
}

const Service20 = () => {
  return (
    <section className=" py-14 md:py-24 bg-gray-50  text-zinc-900  relative z-[1] overflow-hidden">
      <ShapeOne />
      <ShapeTwo />

      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8  mx-auto">
        <div className="flex w-full justify-center md:mb-14 ">
          <h1 className="block md:text-5xl font-bold text-gray-800 text-4xl lg:text-6xl lg:leading-tight">
            <span className="text-green-600">Services</span> We Provide
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="col-span-2 md:col-span-1 space-y-6">
                {serviceList.slice(0, 2).map((service, i) => (
                  <div key={i}>
                    <ServiceItem service={service} />
                  </div>
                ))}
              </div>

              <div className="col-span-2 md:col-span-1 md:mt-12 space-y-6">
                {serviceList.slice(2, 4).map((service, i) => (
                  <div key={i}>
                    <ServiceItem service={service} />
                  </div>
                ))}
              </div>
              <div className="col-span-2 md:col-span-1 md:mt-24 space-y-6">
                {serviceList.slice(4, 6).map((service, i) => (
                  <div key={i}>
                    <ServiceItem service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service20;

// For typescripts

// interface Service {
//   icon: any;
//   title: string;
//   description: string;
// }

// const ServiceItem: React.FC<{ service: Service }> = ({ service }) => (
//   // component code remains the same
// );
