import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="max-w-[50rem] flex flex-col mx-auto size-full">
      <main id="content">
        <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl">
            Error
          </h1>
          <p class="mt-3 text-gray-600">Oops, something went wrong.</p>
          <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              to="/home"
              class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="../examples.html"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error;
