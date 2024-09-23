import React, { useEffect } from "react";
import img1 from "../../assets/featureNav-pic1.webp";
import img2 from "../../assets/featureNav-pic2.webp";
import { Link } from "react-router-dom";

const TopSection = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "rgb(22, 163, 74)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(22, 163, 74)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(22, 163, 74)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "700";
        this.style.color = "rgb(0, 0, 0)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "700";
          leftNeighbor.style.color = "rgb(0, 0, 0)";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "700";
          rightNeighbor.style.color = "rgb(0, 0, 0)";
        }
      });
    });
  }, []);
  const sideCards = [
    {
      Title: "Instant Messaging for Safety Alerts",
      Content:
        "Stay connected and informed with real-time safety alerts on the go.",
      Author: "Shane Golf",
      Time: "4 mins read",
      Category: "Emergency Communication", // Added category
    },
    {
      Title: "Centralized Safety Documentation",
      Content:
        "Access all safety protocols and guidelines in one place with Safety Chat.",
      Author: "Shane Golf",
      Time: "5 mins read",
      Category: "Safety Resources", // Added category
    },
    {
      Title: "Collaborative Safety Incident Response",
      Content:
        "Coordinate team efforts seamlessly during emergencies with group chat",
      Author: "Shane Golf",
      Time: " 6 mins read",
      Category: "Team Collaboration", // Added category
    },
  ];
  const Text = ({ children }) => {
    return (
      <>
        {children.split("").map((child, idx) => (
          <span
            style={{
              transition: "0.35s font-weight, 0.35s color",
            }}
            key={idx}
          >
            {child}
          </span>
        ))}
      </>
    );
  };
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10  md:pt-20 md:pb-5">
        {/* Title */}
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="hover-text text-center text-3xl font-bold md:text-6xl ">
            <Text>Insights & Updates</Text>
          </h2>

          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
            Stay informed with the latest safety tips, app updates, and industry
            news to keep your workplace safe and secure.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto grid gap-8 lg:grid-cols-2">
          <Link
            to={`/blog/Automated Incident Reporting`}
            className="flex flex-col gap-4 rounded-md [grid-area:1/1/4/2] lg:pr-8"
          >
            <img
              src={img1}
              alt=""
              className="inline-block h-72 w-full rounded-xl object-cover"
            />
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-green-600 px-2 py-1.5">
                <p className="text-sm font-semibold text-white">
                  Task Managment
                </p>
              </div>
              <p className="mb-4 text-xl font-bold md:text-2xl">
                Automated Incident Reporting
              </p>
              <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                <p>Shane Golf</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>9 mins read</p>
              </div>
            </div>
          </Link>
          <div className="md:flex md:justify-between lg:flex-col">
            {sideCards.map((card, index) => (
              <Link
                key={index}
                to={`/blog/${card.Title}`}
                className="flex flex-col pb-5 lg:mb-3 lg:flex-row lg:border-b lg:border-gray-300"
              >
                <img
                  src={img2}
                  alt=""
                  className="inline-block h-60 w-full rounded-xl object-cover md:h-32 lg:h-32 lg:w-32"
                />
                <div className="flex flex-col items-start pt-4 lg:px-8">
                  <div className="mb-2 rounded-md bg-green-600 px-2 py-1.5">
                    <p className="text-sm font-semibold text-white">
                      {card.Category}
                    </p>
                  </div>
                  <p className="mb-2 text-sm font-bold sm:text-base">
                    {card.Title}
                  </p>
                  <div className="flex flex-col items-start">
                    <div className="flex flex-col text-sm text-gray-500 sm:text-base lg:flex-row lg:items-center">
                      <p>{card.Author}</p>
                      <p className="mx-2 hidden lg:block">-</p>
                      <p>{card.Time}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
