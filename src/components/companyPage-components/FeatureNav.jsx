import React, { useState } from "react";
import { Shield } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { ToyBrick } from "lucide-react";

const FeatureNav = () => {
  const [activeTab, setActiveTab] = useState("tabs-with-card-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl ">
              <span className=" font-bold md:text-6xl  text-4xl text-green-600">
                Features
              </span>{" "}
              to match your unique needs
            </h2>

            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral0  active"
                id="tabs-with-card-item-1"
                aria-selected="true"
                data-hs-tab="#tabs-with-card-1"
                aria-controls="tabs-with-card-1"
                onClick={() => handleTabClick("tabs-with-card-1")}
                role="tab"
              >
                <span className="flex gap-x-6">
                  <LayoutGrid className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue- " />
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue- ">
                      Advanced tools
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray- ">
                      Leverage AI-powered safety tools like OSHA-trained chat
                      and toolbox talk generators to streamline workplace safety
                      management.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral0 "
                id="tabs-with-card-item-2"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-2"
                aria-controls="tabs-with-card-2"
                onClick={() => handleTabClick("tabs-with-card-2")}
                role="tab"
              >
                <span className="flex gap-x-6">
                  <ToyBrick className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue- " />
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue- ">
                      Smart dashboards
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 ">
                      Monitor safety metrics in real-time with intuitive
                      dashboards, ensuring quick access to critical data and
                      insights.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 "
                id="tabs-with-card-item-3"
                aria-selected="false"
                data-hs-tab="#tabs-with-card-3"
                aria-controls="tabs-with-card-3"
                onClick={() => handleTabClick("tabs-with-card-3")}
                role="tab"
              >
                <span className="flex gap-x-6">
                  <Shield className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 " />
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue- ">
                      {" "}
                      Powerful features
                    </span>
                    <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray- ">
                      {" "}
                      Automate safety reporting with features like near-miss
                      tracking and OSHA log inputs, reducing time and enhancing
                      compliance.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                {activeTab === "tabs-with-card-1" && (
                  <div
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                    />
                  </div>
                )}

                {activeTab === "tabs-with-card-2" && (
                  <div
                    id="tabs-with-card-2"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                    />
                  </div>
                )}

                {activeTab === "tabs-with-card-3" && (
                  <div
                    id="tabs-with-card-3"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
                      alt="Features Image"
                    />
                  </div>
                )}
              </div>

              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-green-600"
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
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-50 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full "></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureNav;
