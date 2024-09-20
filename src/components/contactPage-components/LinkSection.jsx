import React from "react";
import { Circle, MessagesSquare } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { FolderCode } from "lucide-react";
import { ArrowRight } from "lucide-react";

const LinkSection = () => {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
        <a
          className="group flex flex-col h-full text-center rounded-lg hover:bg-green-50 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 "
          href="#"
        >
          <CircleHelp className="size-9 text-gray-800 mx-auto " />

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 ">News</h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              We're here to give you latest news about Safety Chat.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-green-600">
              Visit Blog
              <ArrowRight className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" />
            </p>
          </div>
        </a>

        <a
          className="group flex flex-col h-full text-center rounded-lg hover:bg-green-50 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 "
          href="#"
        >
          <MessagesSquare className="size-9 text-gray-800 mx-auto " />

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 ">FAQ</h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Search our FAQ for answers to anything you might ask.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-green-600">
              Visit FAQ
              <ArrowRight className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" />
            </p>
          </div>
        </a>

        <a
          className="group flex flex-col h-full text-center rounded-lg hover:bg-green-50 focus:outline-none focus:bg-gray-100 p-4 sm:p-6 "
          href="#"
        >
          <FolderCode className="size-9 text-gray-800 mx-auto " />

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-800 ">
              Developer APIs
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-500">
              Check out our development quickstart guide.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-green-600">
              Contact sales
              <ArrowRight className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" />
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LinkSection;
