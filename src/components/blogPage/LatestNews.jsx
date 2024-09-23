import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import img1 from "../../assets/featureNav-pic1.webp";
import img2 from "../../assets/featureNav-pic2.webp";
import img3 from "../../assets/blogImg1.webp";
import img4 from "../../assets/blogImg2.webp";
import img5 from "../../assets/blogImg3.webp";
import { Link, useNavigate } from "react-router-dom";

const LatestNews = () => {
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState("Product Updates");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonClass = (button) => {
    return activeButton === button
      ? "px-4 py-2 bg-green-600 text-white font-semibold rounded-xl"
      : "px-4 py-2 bg-gray-100 text-black font-semibold rounded-xl";
  };
  const bigCardsData = [
    {
      img: img2,

      category: activeButton,
      bottomTitle: "Enhancing Workplace Safety with Real-Time Communication",
      bottomSubtitle:
        "Discover how Safety Chat transforms workplace safety through instant communication.",
    },
    {
      img: img1,
      category: activeButton,
      bottomTitle: "Enhancing Workplace Safety with Real-Time Communication",
      bottomSubtitle:
        "Discover how Safety Chat transforms workplace safety through instant communication.",
    },
  ];
  const smallCardsData = [
    {
      img: img3,

      category: activeButton,
      bottomTitle: "Enhancing Workplace Safety with Real-Time Communication",
      bottomSubtitle:
        "Discover how Safety Chat transforms workplace safety through instant communication.",
    },
    {
      img: img4,
      category: activeButton,
      bottomTitle: "Enhancing Workplace Safety with Real-Time Communication",
      bottomSubtitle:
        "Discover how Safety Chat transforms workplace safety through instant communication.",
    },
    {
      img: img5,
      category: activeButton,
      bottomTitle: "Enhancing Workplace Safety with Real-Time Communication",
      bottomSubtitle:
        "Discover how Safety Chat transforms workplace safety through instant communication.",
    },
  ];
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="text-center mb-12">
          <h2 className="mb-4 mt-6 text-3xl font-bold md:text-6xl">
            The latest and greatest news
          </h2>
          <p className="text-gray-500 mt-2">Latest News</p>
          <div className="my-10 md:my-20 flex flex-col md:flex-row justify-center gap-3">
            <button
              className={buttonClass("Engaging Articles")}
              onClick={() => handleButtonClick("Engaging Articles")}
            >
              Engaging Articles
            </button>
            <button
              className={buttonClass("Product Updates")}
              onClick={() => handleButtonClick("Product Updates")}
            >
              Product Updates
            </button>
            <button
              className={buttonClass("Reflex Workflows")}
              onClick={() => handleButtonClick("Reflex Workflows")}
            >
              Reflex Workflows
            </button>
            <button
              className={buttonClass("Artificial Intelligence")}
              onClick={() => handleButtonClick("Artificial Intelligence")}
            >
              Artificial Intelligence
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {bigCardsData.map((card, index) => (
              <div
                key={index}
                className=" bg-gray-50 rounded-xl overflow-hidden"
              >
                <div className="relative h-80">
                  <img
                    className="h-80 w-full object-cover"
                    src={card.img}
                    alt="img"
                  />
                  <span className="absolute bottom-5 right-5 bg-green-600 text-white text-sm font-semibold px-2.5 py-2 rounded-xl">
                    {card.category}
                  </span>
                </div>
                <div className="p-4 flex justify-between gap-2 items-center">
                  <div>
                    <h2 className="text-lg font-semibold mt-2">
                      {card.bottomTitle}
                    </h2>
                    <p>{card.bottomSubtitle}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/blog/${card.bottomTitle}`)}
                    className="cursor-pointer bg-green-600 rounded-full text-white p-2"
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallCardsData.map((card, index) => (
              <Link to={`/blog/${card.bottomTitle}`}>
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <div className="relative h-72">
                    <img
                      className="h-72 w-full object-cover"
                      src={card.img}
                      alt="img"
                    />
                    <span className="absolute bottom-5 right-5 bg-green-600 text-white text-sm font-semibold px-2.5 py-2 rounded-xl">
                      {card.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mt-2">
                      {card.bottomTitle}
                    </h2>
                    <p className="text-gray-500">{card.bottomSubtitle}</p>
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

export default LatestNews;
