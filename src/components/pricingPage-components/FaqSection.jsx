import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Safety Chat ensure privacy and security?",
      answer:
        "Safety Chat uses end-to-end encryption to ensure that your messages remain private and secure. We also follow industry-leading security protocols.",
    },
    {
      question: "Is Safety Chat free to use?",
      answer:
        "Safety Chat offers essential and full-suite plans. The essential version includes all basic features, while the full-suite plan provides enhanced security options and additional functionalities.",
    },
    {
      question: "Can I use Safety Chat on multiple devices?",
      answer:
        "Yes, Safety Chat is available on mobile and desktop platforms, allowing you to sync your conversations across devices seamlessly.",
    },
    {
      question: "What happens if I lose my account credentials?",
      answer:
        "You can easily recover your account through our password reset process. If you encounter any issues, our support team is available to assist.",
    },
  ];

  return (
    <section>
      <div className="mx-auto flex w-full max-w-[81rem] flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <p className="font-inter mb-2 bg-green-600 text-white p-2 px-4 rounded-xl text-center text-sm font-medium">
            FAQs
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="font-inter mt-4 max-w-xl px-5 text-base font-light text-gray-500 lg:max-w-lg">
            Our goal at Safety Chat is to provide a secure and user-friendly
            communication platform. Below you'll find answers to some of the
            most frequently asked questions, from privacy measures to using the
            app's features.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col">
          {faqs.map((faq, index) => (
            <>
              <div
                key={index}
                className="relative my-3 w-full rounded-md px-12 py-8"
              >
                <div className="max-w-2xl">
                  <h2
                    className="text-xl font-bold text-black cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </h2>
                  <div
                    className={`font-inter mt-4 text-base font-light text-gray-500 overflow-hidden transition-all ease-in-out`}
                    style={{
                      maxHeight: openFAQ === index ? "1000px" : "0px",
                      transitionDuration: "1s",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
                <button
                  className="absolute right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white"></circle>
                    <path
                      d="M7.04688 11.9999H16.9469"
                      className="stroke-green-600"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    {openFAQ !== index && (
                      <path
                        d="M12 7.05005V16.95"
                        className="stroke-green-600"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <div className="mr-4 ml-8 border border-gray-200"></div>
            </>
          ))}
        </div>
        <p className="font-inter mx-auto mt-12 text-center text-base text-gray-500">
          Can’t find the answer you’re looking for?
          <Link to="/contact" href="#" className="text-green-600 font-bold">
            {" "}
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
