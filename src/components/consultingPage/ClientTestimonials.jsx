import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const testimonialList = [
  [
    {
      photo: "https://via.placeholder.com/150",
      name: "Michal Allen",
      rating: 3.5,
      content:
        '"Using this safety chat app has completely transformed our emergency response procedures. We can now communicate instantly and effectively, ensuring everyone stays informed and safe."',
    },
    {
      photo: "https://via.placeholder.com/150",
      name: "Nobel",
      rating: 4.5,
      content:
        '"The app has streamlined our safety communications, making it easier for our team to address issues in real-time. I highly recommend it to any organization prioritizing safety!"',
    },
  ],
  [
    {
      photo: "https://via.placeholder.com/150",
      name: "Tim",
      rating: 5,
      content:
        '"This app has been a game-changer for our organization. The ability to send immediate alerts and get quick responses has significantly improved our safety protocols."',
    },
    {
      photo: "https://via.placeholder.com/150",
      name: "Shane",
      rating: 3.5,
      content:
        '"We’ve seen a marked improvement in how we handle safety incidents since implementing this app. It’s user-friendly and effective in fostering communication."',
    },
  ],
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={`flex flex-wrap gap-0.5 ${className || ""}`} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-[22px] text-yellow-500"
            />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              className="text-[22px] text-yellow-500"
            />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-[22px] text-yellow-200 "
            />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

const TestimonialItem = ({ item }) => {
  const { rating, content, photo, name } = item;
  return (
    <div className="bg-gray-50 shadow-md rounded-xl p-6 transform transition-transform duration-300 hover:-translate-y-2">
      <div className="mt-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <img
                src={photo}
                alt={name}
                className="max-w-full h-auto rounded-full border"
                width="47"
              />
            </div>
            <div>
              <h5 className="text-xl break-all font-medium">{name}</h5>
            </div>
          </div>
          <Rating rating={rating} showLabel={false} />
        </div>
        <p className="leading-[1.8] text-neutral-400 mb-6">{content}</p>
      </div>
    </div>
  );
};

const ClientTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const handleControl = (type) => {
    setDirection(type);

    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
    }
  };
  return (
    <section className=" py-14   text-gray-800 ">
      <div className="container px-4 mx-auto max-w-7xl relative">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-none md:text-6xl font-bold mb-6">
              What Our <span className="text-green-600">Clients</span> Say
            </h2>
            <p className="text-lg text-neutral-400">
              Clear and effective communication is vital in ensuring safety at
              every level. Hear from our clients about how our app has
              transformed their safety protocols and enhanced their ability to
              respond swiftly to incidents.
            </p>
          </div>
        </div>

        {/* Carousel wrapper */}
        <div className="relative overflow-hidden p-1">
          <div
            className={`flex transition-transform duration-700 ease-in-out space-x-4 ${
              direction === "next"
                ? "translate-x-[-100%]"
                : "translate-x-[100%]"
            }`}
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {testimonialList.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex-shrink-0 w-[calc(100%-0.5rem)]"
              >
                <div className="grid grid-cols-2 gap-6">
                  {group.map((item, i) => (
                    <div className="col-span-2 md:col-span-1" key={i}>
                      <TestimonialItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center my-12">
          <button
            className={`text-lg bg-green-600 shadow-2xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full mr-4 ${
              index === 0 ? "opacity-20 hover:opacity-20 " : ""
            }`}
            onClick={() => handleControl("prev")}
            disabled={index === 0}
          >
            <FontAwesomeIcon icon={faAngleLeft} className="text-white" />
          </button>
          <button
            className={`text-lg bg-green-600 shadow-2xl opacity-75 hover:opacity-100 w-12 h-12 flex justify-center items-center rounded-full ${
              index === testimonialList.length - 1
                ? "opacity-20 hover:opacity-20 "
                : ""
            }`}
            onClick={() => handleControl("next")}
            disabled={index === testimonialList.length - 1}
          >
            <FontAwesomeIcon icon={faAngleRight} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default ClientTestimonials;
