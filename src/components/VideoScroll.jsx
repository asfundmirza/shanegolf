import React, { useState, useEffect, useRef } from "react";
import Video1 from "../assets/videos/2nd video.mp4";
import Video2 from "../assets/videos/3rd video.mp4";
import Video3 from "../assets/videos/4th video.mp4";
import Video4 from "../assets/videos/5th video.mp4";

import { motion, useTransform, useScroll } from "framer-motion";
import VideoScrollCard from "./VideoScrollCard";

const VideoScroll = () => {
  const cards = [
    {
      url: Video1,
      title: "Tired of writing/updating SOPs? ",
      id: 1,
      content:
        "Streamline your safety program with our innovative Advanced SOP Generator. This generator will write up to 25 pages and 20 sections within minutes saving you valuable time and resources.",
      buttonText: "See it on our Pro Plan",
    },
    {
      url: Video2,
      title: "Toolbox Talks ",
      id: 2,
      content:
        "Check out our library of Toolbox Talks consisting of a variety of different topics.  If you can’t find the topic you are looking for, or have already used the existing topics, use the Toolbox Talk Generator!  You can create your own customized talk.",
      buttonText: "Toolbox Talk",
    },
    {
      url: Video3,
      title: "Industrial Hygiene Calculators ",
      id: 3,
      content:
        "No longer do you need to remember tricky formulas, our Industrial Hygiene Calculators will do it all for you.  Easily input the information you have, and let us do the work for you.",
      buttonText: "Try Now",
    },
    {
      url: Video4,
      title: "Hazard Identifier Tool ",
      id: 4,
      content:
        "Easily enhance safety with our Hazard Identifier Tool! Simply capture a photo with your phone and upload it to receive precise hazard identification, relevant regulatory citations, and tailored solutions for each identified hazard. ",
      buttonText: "Use Now",
    },
  ];
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  return (
    <section
      ref={targetRef}
      className="relative md:h-[300vh] h-fit bg-gray-900 rounded-[20px]"
    >
      <div className="sticky top-0  flex md:h-screen h-fit items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return (
              <motion.div
                key={card.id}
                className="w-full h-full flex-shrink-0 flex justify-center items-center "
                style={{ width: "100vw" }} // Ensuring each card takes the full view width
              >
                <VideoScrollCard card={card} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoScroll;
