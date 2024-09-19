import React from "react";
import TrustedClients from "./TrustedClients";

const PricingCards = () => {
  const essentialsFeatures = [
    "AI Chat Trained on OSHA & Regulations",
    "Toolbox Talk Generator",
    "Near Miss Tracker",
    "Hazard Input & Follow-up",
    "OSHA 300 Log Input & Reporting",
  ];
  const addOns = [
    {
      name: "Hazard Identifier",
      price: 15,
      description:
        "Easily identify hazards with OSHA citations and get solutions.",
    },
    {
      name: "Full Safety SOP Generator",
      price: 10,
      description:
        "Generate comprehensive Safety Standard Operating Procedures.",
    },
    {
      name: "Email Helper",
      price: 5,
      description:
        "Assist with drafting safety-related emails and communications.",
    },
    {
      name: "IH Sampling Tool & Report Generator",
      price: 20,
      description: "Conduct and report on Industrial Hygiene sampling.",
    },
    {
      name: "Risk Analysis Generator",
      price: 15,
      description: "Create detailed risk analyses for various scenarios.",
    },
    {
      name: "Inventory Tracker",
      price: 10,
      description: "Keep track of safety equipment and supplies inventory.",
    },
    {
      name: "Sampling Questions Chatbot",
      price: 5,
      description:
        "Get answers to questions about sampling procedures and techniques.",
    },
    {
      name: "Training Module Creator",
      price: 15,
      description: "Design custom safety training modules for your team.",
    },
    {
      name: "Incident Reporting and Analysis Tool",
      price: 10,
      description: "Report and analyze safety incidents in detail.",
    },
    {
      name: "Compliance Calendar",
      price: 5,
      description:
        "Stay on top of important safety compliance dates and deadlines.",
    },
    {
      name: "Safety Audit Checklist Generator",
      price: 10,
      description: "Generate comprehensive safety audit checklists.",
    },
    {
      name: "Equipment Maintenance Tracker",
      price: 10,
      description: "Monitor and schedule equipment maintenance for safety.",
    },
    {
      name: "Chemical Safety Data Sheet (SDS) Management",
      price: 10,
      description: "Manage and access Safety Data Sheets for chemicals.",
    },
    {
      name: "Ergonomics Assessment Tool",
      price: 10,
      description: "Conduct ergonomic assessments and get recommendations.",
    },
    {
      name: "Emergency Response Plan Generator",
      price: 15,
      description:
        "Create detailed emergency response plans for various scenarios.",
    },
    {
      name: "Policy and Procedure Library",
      price: 5,
      description:
        "Access a comprehensive library of safety policies and procedures.",
    },
    {
      name: "Regulatory Updates Feed",
      price: 5,
      description:
        "Stay informed about the latest safety regulations and updates.",
    },
    {
      name: "Safety Culture Survey Tool",
      price: 5,
      description: "Assess and improve your organization's safety culture.",
    },
    {
      name: "Personal Protective Equipment (PPE) Management",
      price: 10,
      description: "Manage PPE inventory, assignments, and training.",
    },
    {
      name: "Contractor Management Tool",
      price: 10,
      description: "Oversee contractor safety compliance and documentation.",
    },
    {
      name: "Mobile App Integration",
      price: 5,
      description:
        "Access safety tools and information on-the-go with mobile integration.",
    },
    {
      name: "Dashboard and Analytics",
      price: 10,
      description: "Visualize safety data and generate insightful reports.",
    },
    {
      name: "E-Learning Platform Integration",
      price: 15,
      description:
        "Integrate safety training with popular e-learning platforms.",
    },
  ];
  return (
    <div className=" lg:gap-[60px] gap-[20px]">
      <div className="overflow-hidden">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
            <h2 className="text-3xl lg:text-6xl text-gray-800 font-bold">
              Pricing and Plans
            </h2>
          </div>

          <div className="relative xl:w-10/12 xl:mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <div className="p-4 relative z-10  border bg-white rounded-xl md:p-10 hover:border-green-600 transition-transform transform hover:scale-105 duration-300">
                  <h3 className="text-xl font-bold text-gray-800">Essential</h3>
                  <div className="text-sm text-gray-500">
                    Essential Features you need.
                  </div>

                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800">
                      $20
                    </span>
                    <span className="text-lg font-bold text-gray-800">.00</span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                    <span className="ms-3 text-black font-bold">+ Add-Ons</span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 py-4 first:pt-0 last:pb-0">
                    <div className="space-y-2 text-sm sm:text-base">
                      {essentialsFeatures.map((feature, index) => (
                        <div key={index} className="flex gap-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-white text-black border border-black">
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-gray-500">You can find</p>
                      <p className="text-sm text-gray-500">Add-Ons below.</p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg  bg-green-600 text-white shadow-sm hover:bg-green-500"
                      >
                        Start Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-4 relative z-10 bg-gradient-to-b  from-green-200 via-green-300 to-green-500  rounded-xl md:p-10 hover:border-green-600 transition-transform transform hover:scale-105 duration-300">
                  <h3 className="text-xl font-bold text-gray-800">
                    Full Suite
                  </h3>
                  <div className="text-sm text-gray-500">
                    A complete suite of safety tools and services.
                  </div>
                  <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-white text-black py-1.5 px-3">
                    Most popular
                  </span>

                  <div className="mt-5">
                    <span className="text-6xl font-bold text-gray-800">
                      $150
                    </span>
                    <span className="text-lg font-bold text-gray-800">.00</span>
                    <span className="ms-3 text-gray-500">USD / monthly</span>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 py-4 first:pt-0 last:pb-0">
                    <div className="space-y-2 text-sm sm:text-base">
                      {essentialsFeatures.map((feature, index) => (
                        <div key={index} className="flex gap-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-white text-black border border-black">
                            <svg
                              className="shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-gray-800">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm text-white">All Add-Ons</p>
                      <p className="text-sm text-white">are included.</p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-xl border   bg-white text-green-600 hover:text-green-500 "
                      >
                        Start Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-16">
              <svg
                className="w-16 h-auto text-orange-500"
                width="121"
                height="135"
                viewBox="0 0 121 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
                <path
                  d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                  stroke="currentColor"
                  stroke-width="10"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <div className="hidden md:block absolute  bottom-0 start-0 translate-y-16 -translate-x-16">
              <svg
                className="w-56 h-auto text-cyan-500"
                width="347"
                height="188"
                viewBox="0 0 347 188"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="mt-7 text-center">
            <p className="text-xs text-gray-400">
              Prices in USD. Taxes may apply.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-3xl font-bold lg:text-6xl md:leading-tight">
              Add-Ons
            </h2>
          </div>

          <div className="grid grid-cols-4 lg:gap-[90px] gap-[50px]">
            <div className="hidden lg:block col-span-2 ">
              <div className="font-semibold text-2xl mb-[50px]   ">
                Features
              </div>
              {addOns.map((addOn, index) => (
                <div key={index} className=" flex flex-col gap-1 mt-9  text-sm">
                  <p className=" font-bold ">{addOn.name}</p>
                  <p className="text-gray-500 text-xs">{addOn.description}</p>
                </div>
              ))}
              <div className="font-semibold text-2xl mt-[50px]   ">Total</div>
            </div>

            <div className="lg:col-span-1 md:col-span-2 col-span-full lg:border-none border border-gray-200 rounded-xl lg:py-0 py-8">
              <span className="flex w-full justify-center font-semibold text-2xl lg:mb-2 mb-[50px]   ">
                Essential
              </span>

              {addOns.map((addOn, index) => (
                <div className="flex flex-col gap-4 w-full justify-center lg:mt-0 mt-6 items-center">
                  <div className="block lg:hidden font-semibold text-sm">
                    {addOn.name}
                  </div>
                  <div className="flex  w-full justify-center border-b border-gray-200  lg:mt-[45.5px] gap-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        className="w-6 h-6 appearance-none border border-gray-500 rounded-md checked:bg-green-600 checked:border-transparent focus:outline-none transition duration-200"
                      />
                      <svg
                        className="absolute top-0 left-0 w-6 h-6 text-white opacity-100 transition-opacity duration-200 pointer-events-none checked-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>+</div>
                    <div className="min-w-[35px] lg:font-bold text-center">
                      {addOn.price}$
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-4 w-full justify-center lg:mt-0 mt-6 items-center">
                <div className="block lg:hidden font-semibold text-sm">
                  Total
                </div>
                <div className="flex w-full justify-center font-semibold border-b border-gray-200 text-lg lg:mt-[48px]   ">
                  20$ + Add-Ons
                </div>
              </div>
              <div className="lg:col-span-1 flex w-full justify-center">
                <a
                  className="lg:w-full w-fit py-3 px-4 inline-flex justify-center mt-[30px] items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-green-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                  href="#"
                >
                  Get started
                </a>
              </div>
            </div>

            <div className="lg:col-span-1 md:col-span-2 col-span-full lg:border-none border border-gray-200 rounded-xl lg:py-0 py-8">
              <span className="flex w-full justify-center font-semibold text-2xl lg:mb-2 mb-[50px]   ">
                Full Suite
              </span>

              {addOns.map((addOn, index) => (
                <div className="flex flex-col gap-4 w-full justify-center lg:mt-0 mt-6 items-center">
                  <div className="block lg:hidden font-semibold text-sm">
                    {addOn.name}
                  </div>
                  <div className="flex  w-full justify-center border-b border-gray-200 lg:mt-[45.5px] gap-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked
                        disabled
                        id={`checkbox-${index}`}
                        className="w-6 h-6 appearance-none border border-gray-500 rounded-md checked:bg-green-600 checked:border-transparent focus:outline-none transition duration-200"
                      />
                      <svg
                        className="absolute top-0 left-0 w-6 h-6 text-white opacity-100 transition-opacity duration-200 pointer-events-none checked-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-4 w-full justify-center lg:mt-0 mt-6 items-center">
                <div className="block lg:hidden font-semibold text-sm">
                  Total
                </div>
                <div className="flex w-full justify-center font-semibold border-b border-gray-200 text-lg lg:mt-[48px]   ">
                  150$
                </div>
              </div>
              <div className="lg:col-span-1 flex w-full justify-center">
                <a
                  className="lg:w-full w-fit py-3 px-4 inline-flex justify-center mt-[30px] items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-green-600 text-white shadow-sm hover:bg-green-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-green-500"
                  href="#"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
// <section>
//   <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white gap-[60px]">
//     {/* Container */}
//     <div className="mx-auto max-w-8xl px-5 py-16 md:px-10  md:py-20">
//       {/* Heading Container */}
//       <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold md:text-5xl">
//           Simple &amp; Affordable Pricing
//         </h2>
//         {/* Subheading */}
//         <p className="mt-4 text-sm text-gray-500 sm:text-base">
//           Simple &amp; fixed pricing. 30 days money-back guarantee
//         </p>
//       </div>

//       {/* Price Container */}
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-0 rounded-xl bg-green-50">
//         {/* Price */}

//         <div className="mx-auto flex w-full max-w-md flex-col items-start bg-green-50 rounded-md p-8">
//           <div className="mb-4 rounded-md   py-1.5">
//             <p className="md:text-4xl font-bold text-black sm:text-sm">
//               Free
//             </p>
//           </div>
//           <p className="mb-6 text-base font-light text-gray-500 md:mb-6 lg:mb-6">
//             Create an Account and explore.
//           </p>{" "}
//           <p className="mb-6 text-base font-light text-gray-500 md:mb-10 lg:mb-10">
//             Get access to free, powerful safety tools and explore the Safety
//             Chat app
//           </p>
//           {/* <h2 className="mb-5 text-3xl font-bold md:text-5xl lg:mb-8">
//             $99<span className="text-sm font-light sm:text-sm">/year</span>
//           </h2> */}
//           {essentialsFeatures.map((feature, index) => {
//             return (
//               <div key={index} className="mt-2 flex items-center">
//                 <img
//                   src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
//                   alt=""
//                   className="mr-2 inline-block w-4"
//                 />
//                 <p className="text-base">{feature}</p>
//               </div>
//             );
//           })}
//           <a
//             href="#"
//             className=" w-full rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white lg:mb-8"
//           >
//             Get started
//           </a>
//         </div>
//         {/* Price */}
//         <div className="mx-auto flex w-full max-w-md md:relative md:-mt-10 flex-col items-start rounded-xl bg-green-600 text-white  p-8">
//           <div className="mb-4 rounded-md   py-1.5">
//             <p className="md:text-4xl font-bold text-white sm:text-sm">
//               Essentials
//             </p>
//           </div>
//           <p className="mb-6 text-base font-light text-white md:mb-6 lg:mb-6">
//             You can select the add-ons you want to.
//           </p>
//           <p className="mb-2">From</p>
//           <h2 className="mb-5 text-3xl font-bold md:text-6xl lg:mb-8">
//             $149<span className="text-sm font-light sm:text-sm">/year</span>
//           </h2>

//           <div className="flex w-full justify-center">
//             <p className=" text-xl font-bold mb-4">Essential Features</p>
//           </div>
//           {essentialsFeatures.map((feature, index) => {
//             return (
//               <div key={index} className="mt-2 flex items-center">
//                 <img
//                   src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
//                   alt=""
//                   className="mr-2 inline-block w-4"
//                 />
//                 <p className="text-base">{feature}</p>
//               </div>
//             );
//           })}
//           <div className="flex w-full justify-center">
//             <p className=" text-xl font-bold mb-4 mt-6">Add Ons</p>
//           </div>
//           {addOns.map((addOn, index) => {
//             return (
//               <div key={index} className="mt-2 flex items-center">
//                 <img
//                   src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
//                   alt=""
//                   className="mr-2 inline-block w-4"
//                 />
//                 <p className="text-base">{addOn.name}</p>
//               </div>
//             );
//           })}

//           <a
//             href="#"
//             className=" w-full rounded-xl bg-white px-6 py-3 text-center font-semibold text-green-600 md:mb-6 lg:mb-8"
//           >
//             Get started
//           </a>
//         </div>
//         {/* Price */}
//         <div className="mx-auto flex w-full max-w-md flex-col items-start rounded-md  p-8">
//           <div className="mb-4 rounded-md   py-1.5">
//             <p className="md:text-4xl font-bold text-black sm:text-sm">
//               Full Suite
//             </p>
//           </div>
//           <p className="mb-6 text-base font-light text-gray-500 md:mb-6 lg:mb-6">
//             You can have all features in this suite.
//           </p>
//           <h2 className="mb-5 text-3xl font-bold md:text-5xl lg:mb-8">
//             $299<span className="text-sm font-light sm:text-sm">/year</span>
//           </h2>

//           <div className="mt-2 flex items-center">
//             <img
//               src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
//               alt=""
//               className="mr-2 inline-block w-4"
//             />
//             <p className="text-base">Premium Designs</p>
//           </div>
//           <div className="mt-2 flex items-center">
//             <img
//               src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
//               alt=""
//               className="mr-2 inline-block w-4"
//             />
//             <p className="text-base">Exclusive Freebies</p>
//           </div>
//           <div className="mt-2 flex items-center">
//             <img
//               src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
//               alt=""
//               className="mr-2 inline-block w-4"
//             />
//             <p className="text-base">Monthly Free Exclusive</p>
//           </div>
//           <div className="mt-2 mb-5 flex items-center">
//             <img
//               src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
//               alt=""
//               className="mr-2 inline-block w-4"
//             />
//             <p className="text-base">Customer Support</p>
//           </div>
//           <a
//             href="#"
//             className=" w-full rounded-xl bg-green-600 px-6 py-3 text-center font-semibold text-white lg:mb-8"
//           >
//             Get started
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
