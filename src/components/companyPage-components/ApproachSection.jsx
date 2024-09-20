import React from "react";
import pic2 from "../../assets/featureNav-pic2.webp";
import { Link } from "react-router-dom";
const ApproachSection = () => {
  return (
    <div class="bg-white">
      <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
        <div class="max-w-3xl mb-10 lg:mb-14">
          <h2 class=" font-semibold text-3xl md:text-6xl md:leading-tight">
            Our <span className="text-green-600">Approach</span>
          </h2>
          <p class="mt-1 text-neutral-400">
            We prioritize safety and compliance in every aspect of our
            process—driven by in-depth research, strategic planning, and
            flawless execution. From developing cutting-edge safety tools to
            creating intuitive user experiences, our approach ensures seamless
            integration of compliance and worker engagement across all
            platforms.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div class="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              class="w-full object-cover rounded-xl"
              src={pic2}
              alt="Image Description"
            />
          </div>

          <div>
            <div class="mb-4">
              <h3 class="text-xs font-medium uppercase ">Steps</h3>
            </div>

            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800  font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm lg:text-base text-neutral-400">
                  <span class="text-green-600">Research & Planning:</span>
                  We start by deeply analyzing OSHA regulations and workplace
                  safety needs to shape a clear strategy for tool development
                  and compliance integration.
                </p>
              </div>
            </div>

            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800  font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm lg:text-base text-neutral-400">
                  <span class="text-green-600">Development:</span>
                  Our expert team builds intuitive, user-friendly tools,
                  ensuring that safety compliance features like AI Chat, Near
                  Miss Tracker, and Hazard Input are seamlessly integrated.
                </p>
              </div>
            </div>

            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800  font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm md:text-base text-neutral-400">
                  <span class="text-green-600">Testing & Optimization:</span>
                  We rigorously test each feature for functionality, user
                  experience, and performance, refining the tools for maximum
                  efficiency and reliability.
                </p>
              </div>
            </div>

            <div class="flex gap-x-5 ms-1">
              <div class="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div class="relative z-10 size-8 flex justify-center items-center">
                  <span class="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800  font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>

              <div class="grow pt-0.5 pb-8 sm:pb-12">
                <p class="text-sm md:text-base text-neutral-400">
                  <span class="text-green-600">Deployment & Support:</span>
                  After launch, we offer continuous support and updates,
                  ensuring the tools remain aligned with the latest safety
                  standards and user feedback.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              class="group inline-flex items-center gap-x-2 py-2 px-3 bg-green-600 text-white font-medium text-sm  rounded-full focus:outline-none"
              href="#"
            >
              <svg
                class="flex-shrink-0 size-4"
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path
                  class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                  d="M14.05 2a9 9 0 0 1 8 7.94"
                ></path>
                <path
                  class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                  d="M14.05 6A5 5 0 0 1 18 10"
                ></path>
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
