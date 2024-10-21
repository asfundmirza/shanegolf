import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const FaqSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does a safety audit take?",
      answer:
        "The duration of a safety audit varies depending on the size and complexity of your site, but typically, it can take anywhere from a few hours to a couple of days.",
    },
    {
      question: "What certifications do your consultants hold?",
      answer:
        "Our consultants are certified in various safety standards, including OSHA, NEBOSH, and ISO 45001, ensuring top-tier expertise in safety compliance and risk management.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in multiple industries such as construction, manufacturing, healthcare, and energy, tailoring safety solutions to meet specific industry needs.",
    },
    {
      question:
        "What are your pricing models (retainers, hourly, project-based)?",
      answer:
        "We offer flexible pricing models, including retainers for ongoing support, hourly rates for short-term engagements, and project-based pricing for specific audits or assessments.",
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
            Find answers to common questions about our safety solutions,
            AI-powered tools, and how Safety-Chat can help streamline hazard
            identification, incident reporting, and compliance management. We're
            here to help keep your workplace safe and efficient.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-col">
          {faqs.map((faq, index) => (
            <div key={index}>
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
                      transitionDuration: "0.5s",
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
                <button
                  className="absolute right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <FontAwesomeIcon
                    icon={openFAQ !== index ? faChevronDown : faChevronUp}
                  />
                </button>
              </div>
              <div className="mr-4 ml-8 border border-gray-200"></div>
            </div>
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
