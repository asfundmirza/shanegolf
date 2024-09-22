import React from "react";

const TeamSection = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-[95rem] px-5 py-8 md:px-10 md:py-8 md:pt-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Join Our <span className="text-green-600">Team</span>
        </h2>
        <p className="mx-auto mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Be part of a forward-thinking company where your contributions make a
          real impact.
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-20 w-20 rounded-full object-cover"
            />
            <p className="font-bold">John Robert</p>
            <p className="text-center text-sm text-gray-500">Web Developer</p>
          </div>
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-20 w-20 rounded-full object-cover "
            />
            <p className="font-bold">Annisyah Matah</p>
            <p className="text-center text-sm text-gray-500">Designer</p>
          </div>
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-20 w-20 rounded-full object-cover"
            />
            <p className="font-bold">Tamara Lind</p>
            <p className="text-center text-sm text-gray-500">
              UI//UX&nbsp;Designer
            </p>
          </div>
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-20 w-20 rounded-full object-cover"
            />
            <p className="font-bold">Kevin Mason</p>
            <p className="text-center text-sm text-gray-500">Product Manager</p>
          </div>
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-20 w-20 rounded-full object-cover"
            />
            <p className="font-bold">Amy Parker</p>
            <p className="text-center text-sm text-gray-500">React Developer</p>
          </div>
          <div className="mx-auto flex w-full flex-col items-center gap-4 py-8 text-center md:px-8 md:py-4 lg:px-12">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-20 w-20 rounded-full object-cover"
            />
            <p className="font-bold">Shane Golf</p>
            <p className="text-center text-sm text-gray-500">CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
