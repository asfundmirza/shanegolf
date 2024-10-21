import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const testimonialList = [
  {
    author: {
      fullName: "John Mitchell",
      picture: "https://via.placeholder.com/150",
      designation: "Operations Manager, TechWave Inc.",
    },
    rating: 4.5,
    description:
      "Partnering with this company has transformed our project timelines and efficiency. Their innovative approach helped us streamline workflows, saving us countless hours and resources. We couldn’t have achieved this level of success without their support.",
  },
  {
    author: {
      fullName: "Emily Carter",
      picture: "https://via.placeholder.com/150",
      designation: "CEO, Green Energy Solutions",
    },
    rating: 5,
    description:
      "Their team played a critical role in helping us optimize our energy solutions. From day one, they understood our vision and provided us with the tools and insights needed to scale efficiently. We’ve seen remarkable growth thanks to their commitment.",
  },
  // {
  //   author: {
  //     fullName: "David Thompson",
  //     picture: "https://via.placeholder.com/150",
  //     designation: "Project Lead, Innovate Builders Co.",
  //   },
  //   rating: 4.8,
  //   description:
  //     "We’ve never worked with a more dedicated and knowledgeable team. They not only met but exceeded our expectations in every way. Our project timelines have improved significantly, and we’re thrilled with the results. A true game-changer for our company!",
  // },
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={"mb-6"} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon icon={faStar} className="text-yellow-200 " />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

const TestimonialItem = ({ testimonial, index }) => (
  <div className="grid grid-cols-12">
    <div
      className={`col-span-12 lg:col-span-5 order-2 ${
        index % 2 === 0 ? "lg:order-1" : "lg:col-start-8"
      } text-center`}
    >
      <img
        src={testimonial.author.picture}
        alt={testimonial.author.fullName}
        className={`w-full rounded-full border-[30px]  border-green-600`}
      />
    </div>

    <div
      className={`col-span-12 lg:col-span-7 xl:col-span-6 ${
        index % 2 === 0 ? "order-1 lg:order-2" : "xl:col-start-2"
      }   mt-4 lg:mt-0 p-6 lg:px-12`}
    >
      <div className="flex flex-col h-full justify-center text-center lg:text-start lg:pr-12 lg:py-12">
        <h4 className="text-2xl font-medium mb-1">
          {testimonial.author.fullName}
        </h4>
        <p className="mb-1">{testimonial.author.designation}</p>
        <Rating rating={testimonial.rating} showLabel={false} />

        <p className="opacity-50">{testimonial.description}</p>
      </div>
    </div>
  </div>
);

const SuccessStories = () => {
  return (
    <section className=" py-14 bg-white  text-gray-900 ">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-md">
            <h2 className="text-3xl leading-none md:text-6xl font-bold mb-6">
              <span className="text-green-600">Success</span> Stories
            </h2>
            <p className="">
              Our clients have transformed their operations and achieved
              remarkable results with our innovative solutions. Discover how
              we've helped businesses overcome challenges and drive success
              through expertise and dedication.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-6 mt-12">
          {testimonialList.map((testimonial, i) => (
            <div
              className="bg-green-600 bg-opacity-20 mt-12 mb-5 rounded-t-[100px] rounded-b-full lg:rounded-full"
              key={i}
            >
              <TestimonialItem testimonial={testimonial} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SuccessStories;
