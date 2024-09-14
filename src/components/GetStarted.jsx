import React from "react";

const Gallery = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[60vh] lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Understand Safety Tools.
          <strong className="font-extrabold text-green-600 sm:block">
            {" "}
            Every Professional Needs.{" "}
          </strong>
        </h1>

        <p className="mt-4 text-gray-500 sm:text-xl/relaxed">
          Discover the essential tools to ensure workplace safety and
          compliance. Empower your team with the knowledge and resources to
          succeed.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded-xl bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-500 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            href="#"
          >
            Get Started
          </a>

          <a
            className="block w-full rounded-xl px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-500 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
