import React from "react";

const Testimonials = () => {
  return (
    <div class="max-w-[66rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col max-w-3xl lg:justify-normal justify-center  py-14   md:items-start items-center ">
        <h2 className="font-bold md:text-5xl    text-3xl ">
          What our{" "}
          <span className="text-green-600 md:text-6xl text-4xl">Clients</span>{" "}
          are saying
        </h2>
        <p className="mt-4 text-neutral-400 ">
          Hear from our clients who have experienced enhanced safety, seamless
          communication, and improved compliance through our innovative Safety
          Chat app.
        </p>
      </div>

      <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
        <div class="lg:col-span-5 lg:col-start-1">
          <div class="mb-8">
            <h2 class="mb-2 text-3xl  font-bold lg:text-4xl ">
              It's all about speed
            </h2>
            <p class="text-gray-600 dark:text-neutral-400">
              We provide you with a test account that can be set up in seconds.
              Our main focus is getting responses to you as soon as we can.
            </p>
          </div>

          <blockquote class="relative">
            <svg
              class="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                fill="currentColor"
              />
            </svg>

            <div class="relative z-10">
              <p class="text-xl italic text-gray-800 ">
                Amazing people to work with. Very fast and professional partner.
              </p>
            </div>

            <footer class="mt-6">
              <div class="flex items-center gap-x-4">
                <div class="shrink-0">
                  <img
                    class="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                </div>
                <div class="grow">
                  <div class="font-semibold text-gray-800 ">Shane Golf</div>
                  <div class="text-xs text-gray-500 dark:text-neutral-500">
                    Director Safety-Chat
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

        <div class="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
          <div class="space-y-6 sm:space-y-8">
            <ul class="grid grid-cols-2  divide-y-2  divide-x-2 divide-gray-200 overflow-hidden dark:divide-neutral-700">
              <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2">
                  45k+
                </div>
                <p class="text-sm sm:text-base text-gray-600 ">
                  users - from new startups to public companies
                </p>
              </li>

              <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                  <svg
                    class="shrink-0 size-5 text-green-600 "
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
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                  23%
                </div>
                <p class="text-sm sm:text-base text-gray-600 ">
                  increase in traffic on webpages with Looms
                </p>
              </li>

              <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                  <svg
                    class="shrink-0 size-5 text-green-600"
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
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                  9.3%
                </div>
                <p class="text-sm sm:text-base text-gray-600">
                  boost in reply rates across sales outreach
                </p>
              </li>

              <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                <div class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold text-gray-800 mb-2 ">
                  2x
                </div>
                <p class="text-sm sm:text-base text-gray-600 ">
                  faster than previous Preline versions
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  //     <div class="bg-neutral-900">
  //       <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
  //         <div class="max-w-3xl mb-10 lg:mb-14">
  //           <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
  //             Preline reviews
  //           </h2>
  //           <p class="mt-1 text-neutral-400">
  //             With over 30 awards, and achievements, we proudly demonstrate our
  //             unwavering dedication to excellence and client success.
  //           </p>
  //         </div>

  //         <div class="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
  //           <div>
  //             <blockquote>
  //               <p class="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
  //                 To say that switching to Preline has been life-changing is an
  //                 understatement. My business has tripled since then.
  //               </p>

  //               <footer class="mt-6">
  //                 <div class="flex items-center">
  //                   <div class="md:hidden flex-shrink-0">
  //                     <img
  //                       class="size-12 rounded-full"
  //                       src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //                       alt="Image Description"
  //                     />
  //                   </div>
  //                   <div class="ms-4 md:ms-0">
  //                     <div class="text-base font-semibold text-white">
  //                       Nicole Grazioso
  //                     </div>
  //                     <div class="text-xs text-neutral-400">
  //                       Director Payments & Risk | Airbnb
  //                     </div>
  //                   </div>
  //                 </div>
  //               </footer>
  //             </blockquote>
  //           </div>

  //           <div class="hidden md:block mb-24 md:mb-0">
  //             <img
  //               class="rounded-xl"
  //               src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //               alt="Image Description"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Testimonials;
