import React from "react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Backpack } from "lucide-react";
import { ArrowRight } from "lucide-react";
const ContactForm = () => {
  return (
    <div className="bg-white">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-10 mx-auto">
        <div className="flex flex-col items-center w-full   mb-10 lg:mb-14">
          <h2 className=" font-semibold text-3xl md:text-6xl md:leading-tight">
            Contact us
          </h2>
          <p className="mt-1 text-neutral-400">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Name"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Phone"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Company"
                  />
                </div>

                <div className="relative">
                  <textarea
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Tell us about yourself"
                  ></textarea>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  All fields are required
                </p>

                <p className="mt-5">
                  <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-green-600 font-medium text-sm text-white rounded-xl focus:outline-none"
                    href="#"
                  >
                    Submit
                    <ArrowRight className="shrink-0 size-4 transition group-hover:translate-x-0.5  group-focus:translate-x-0.5 " />
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="space-y-14">
            <div className="flex gap-x-5">
              <MapPin className="shrink-0 size-6 text-green-600" />

              <div className="grow">
                <h4 className=" font-semibold">Our address:</h4>

                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  300 Bath Street, Washington DC.
                </address>
              </div>
            </div>

            <div className="flex gap-x-5">
              <Mail className="shrink-0 size-6 text-green-600" />
              <div className="grow">
                <h4 className=" font-semibold">Email us:</h4>

                <a
                  className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200"
                  href="#mailto:example@site.co"
                  target="_blank"
                >
                  hello@safetychat.com
                </a>
              </div>
            </div>

            <div className="flex gap-x-5">
              <Backpack className="shrink-0 size-6 text-green-600" />
              <div className="grow">
                <h4 className=" font-semibold">We're hiring</h4>
                <p className="mt-1 text-neutral-400">
                  We're thrilled to announce that we're expanding our team and
                  looking for talented individuals like you to join us.
                </p>
                <p className="mt-2">
                  <a
                    className="group inline-flex items-center gap-x-2 font-medium text-sm text-green-600 decoration-2 hover:underline focus:outline-none focus:underline"
                    href="#"
                  >
                    Job openings
                    <ArrowRight className="shrink-0 size-4 transition group-hover:translate-x-0.5  group-focus:translate-x-0.5 " />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
