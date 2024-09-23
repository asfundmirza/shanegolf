import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import img1 from "../assets/blogImg1.webp";
import img2 from "../assets/blogImg2.webp";
import img3 from "../assets/blogImg3.webp";
import img4 from "../assets/blogImg1.webp";
import { UserPlus } from "lucide-react";

const BlogDescription = () => {
  const { blogTitle } = useParams();
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white">
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
          <div className="lg:col-span-2">
            <div className="py-8 lg:pe-8">
              <div className="space-y-5 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline"
                  to="/blog"
                >
                  <ChevronLeft className="shrink-0 size-4 text-green-600" />
                  Back to Blog
                </Link>

                <h2 className="text-3xl font-bold lg:text-5xl">{blogTitle}</h2>

                <div className="flex items-center gap-x-5">
                  <p className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm hover:cursor-pointer bg-green-600 text-white hover:bg-green-500 ">
                    Safety Chat Updates
                  </p>
                  <p className="text-xs sm:text-sm text-gray-800">
                    Sep 23, 2024
                  </p>
                </div>

                <p className="text-lg text-gray-800">
                  At Safety Chat, our mission is to provide seamless
                  communication and real-time updates in critical situations.
                  Whether it's a workplace emergency or everyday team safety
                  check-ins, our platform ensures you're always connected.
                </p>

                <p className="text-lg text-gray-800">
                  We're committed to helping teams stay safe through reliable,
                  secure, and instant communication tools designed specifically
                  for safety professionals and emergency responders.
                </p>

                <div className="text-center">
                  <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure className="relative w-full h-60">
                        <img
                          className="size-full absolute top-0 start-0 object-cover rounded-xl"
                          src={img1}
                          alt="Safety App Feature Image"
                        />
                      </figure>
                      <figure className="relative w-full h-60">
                        <img
                          className="size-full absolute top-0 start-0 object-cover rounded-xl"
                          src={img2}
                          alt="Safety Chat Interface"
                        />
                      </figure>
                    </div>
                    <figure className="relative w-full h-72 sm:h-96 lg:h-full">
                      <img
                        className="size-full absolute top-0 start-0 object-cover rounded-xl"
                        src={img3}
                        alt="Safety Chat In Action"
                      />
                    </figure>
                  </div>

                  <span className="mt-3 block text-sm text-center text-gray-500">
                    Safety Chat in Action
                  </span>
                </div>

                <p className="text-lg text-gray-800">
                  As more organizations adopt Safety Chat, we are proud to be
                  part of a movement that prioritizes team safety and effective
                  crisis management. Companies using our platform have reported
                  faster response times, better communication, and overall
                  improved safety protocols.
                </p>

                <p className="text-lg text-gray-800">
                  We're excited to introduce new features, like group safety
                  alerts and incident reporting, which will make it easier for
                  teams to collaborate during high-pressure situations.
                </p>

                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal">
                    "Since using Safety Chat, our emergency response times have
                    been cut in half, and our team feels more connected during
                    critical incidents."
                  </p>
                  <p className="mt-5 text-gray-800">
                    Sarah Johnson, Safety Officer
                  </p>
                </blockquote>

                <figure>
                  <img
                    className="w-full object-cover rounded-xl"
                    src={img1}
                    alt="Safety Chat App"
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500">
                    Real-time communication with Safety Chat.
                  </figcaption>
                </figure>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">
                    Driving Innovation in Workplace Safety
                  </h3>

                  <p className="text-lg text-gray-800">
                    At Safety Chat, we believe that the future of workplace
                    safety is rooted in open, instant communication. Our
                    platform empowers teams to coordinate and manage safety
                    protocols in real-time, creating a safer, more efficient
                    work environment.
                  </p>
                </div>

                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                  <li className="ps-2">
                    "Safety Chat has transformed how we handle emergency
                    situations. It's now our go-to tool for all safety-related
                    communication,"{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                      href="#"
                    >
                      said
                    </a>{" "}
                    Kevin Walker, Head of Operations.
                  </li>
                  <li className="ps-2">
                    "The ability to quickly notify our team of safety updates
                    and receive instant responses has been a game-changer," said
                    Lisa Thompson, Safety Coordinator at{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                      href="#"
                    >
                      GlobalTech.
                    </a>
                  </li>
                </ul>

                <p className="text-lg text-gray-800">
                  Whether you're managing a small team or a large organization,
                  Safety Chat ensures that your safety communications are fast,
                  clear, and reliable. Join the growing list of companies that
                  trust Safety Chat to keep their teams safe.
                </p>

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                  <div>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                      href="#"
                    >
                      Team
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                      href="#"
                    >
                      Resources
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                      href="#"
                    >
                      Safety
                    </a>
                    <a
                      className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                      href="#"
                    >
                      Time Managment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent">
            <div className="sticky top-0 start-0 py-8 lg:ps-8">
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8">
                <div className="block shrink-0 focus:outline-none" href="#">
                  <p className="size-10 rounded-full bg-gray-300" />
                </div>

                <a className="group grow block focus:outline-none" href="">
                  <h5 className="group-hover:text-gray-600 group-focus:text-gray-600 text-sm font-semibold text-gray-800">
                    Shane Golf
                  </h5>
                  <p className="text-sm text-gray-500">Director</p>
                </a>

                <div className="grow">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-400 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <UserPlus className="shrink-0 size-4" />
                      Follow
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <a
                  className="group flex items-center gap-x-6 focus:outline-none"
                  href="#"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-green-600 group-focus:text-green-600">
                      5 Reasons to Not start a UX Designer Career in 2022/2023
                    </span>
                  </div>

                  <div className="shrink-0 relative rounded-lg overflow-hidden size-20">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-lg"
                      src={img2}
                      alt="Blog Image"
                    />
                  </div>
                </a>

                <a
                  className="group flex items-center gap-x-6 focus:outline-none"
                  href="#"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-green-600 group-focus:text-green-600">
                      If your UX Portfolio has this 20% Well Done, it Will Give
                      You an 80% Result
                    </span>
                  </div>

                  <div className="shrink-0 relative rounded-lg overflow-hidden size-20">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-lg"
                      src={img2}
                      alt="Blog Image"
                    />
                  </div>
                </a>

                <a
                  className="group flex items-center gap-x-6 focus:outline-none"
                  href="#"
                >
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-green-600 group-focus:text-green-600">
                      7 Principles of Icon Design
                    </span>
                  </div>

                  <div className="shrink-0 relative rounded-lg overflow-hidden size-20">
                    <img
                      className="size-full absolute top-0 start-0 object-cover rounded-lg"
                      src={img2}
                      alt="Blog Image"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
