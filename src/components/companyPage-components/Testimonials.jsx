import React from "react";

const Testimonials = () => {
  <section>
    {/* Container */}
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
      {/* Component */}
      <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
        {/* Heading Div */}
        <div className="max-w-3xl">
          <h3 className="mb-6 pb-4 text-xl md:text-3xl font-bold">
            At adipiscing adipiscing, condimentum in tempor tristique et egestas
            quis.
          </h3>
          <div className="h-11 mb-6 w-1 py-2 border-r bg-gray-300"></div>
          {/* Author */}
          <div className="flex items-center mb-10">
            <p className="font-bold mr-3">David James</p>
            <p className="text-gray-500">CEO of Flowspark Design Studio. Inc</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-xl">
            <div className="flex items-center justify-center">
              <div className="flex flex-col md:flex-row justify-center">
                <a
                  href="#"
                  className="text-sm mb-10 md:mb-0  md:text-base md:mr-5 inline-block h-auto rounded-md bg-black px-6 py-4 text-center font-bold text-white lg:mr-8"
                >
                  Read More
                </a>
                <div className="flex items-center justify-center">
                  <button className="mr-3  h-14 md:h-14">
                    <svg
                      className=" h-full"
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="1"
                        width="71"
                        height="71"
                        rx="35.5"
                        stroke="#E2E2E2"
                      />
                      <g clipPath="url(#clip0_3799_19567)">
                        <path
                          d="M44 35.5H31.83L37.42 29.91L36 28.5L28 36.5L36 44.5L37.41 43.09L31.83 37.5H44V35.5Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3799_19567">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(24 24.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button className="h-14 md:h-14">
                    <svg
                      className="h-full"
                      width="72"
                      height="73"
                      viewBox="0 0 72 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="1"
                        width="71"
                        height="71"
                        rx="35.5"
                        stroke="#E2E2E2"
                      />
                      <g clipPath="url(#clip0_3799_19610)">
                        <path
                          d="M36 28.5L34.59 29.91L40.17 35.5H28V37.5H40.17L34.59 43.09L36 44.5L44 36.5L36 28.5Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3799_19610">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(24 24.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex mt-10 md:mt-0 gap-2 justify-center items-center">
              <div className="h-2.5 w-2.5 bg-gray-300 rounded-full object-cover"></div>
              <div className="h-2.5 w-2.5 bg-gray-300 rounded-full object-cover"></div>
              <div className="h-2.5 w-2.5 bg-gray-300 rounded-full object-cover"></div>
            </div>
          </div>
        </div>
        {/* Image Div */}
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="mx-auto inline-block h-96 w-full md:max-w-xl object-cover"
          />
        </div>
      </div>
    </div>
  </section>;
  //   return (
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
