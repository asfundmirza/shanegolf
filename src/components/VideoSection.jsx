import React, { useState, useEffect } from "react";
import Video1 from "../assets/videos/1st Video.mp4";
import { useInView } from "react-intersection-observer";

const VideoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [displayText, setDisplayText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false); // Track typing completion
  const [buttonAnimating, setButtonAnimating] = useState(false);
  const fullText = ` Safety-chat is a specialized chatbot designed exclusively for
      answering safety-related questions, ensuring accuracy by eliminating
      hallucinations. Unlike other models, it is trained solely on
      regulations and provides precise information with citations. Users
      can swiftly obtain answers to OSHA, MSHA, and EPA queries, with
      tailored responses guiding them effectively.`;

  useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTypingComplete(true); // Mark typing as complete
        }
      }, 10);
      return () => clearInterval(typingInterval);
    }
  }, [inView]);

  useEffect(() => {
    if (typingComplete) {
      setButtonAnimating(true);
      // After a few seconds, revert the button color back to transparent
      const timeout = setTimeout(() => {
        setButtonAnimating(false); // Stop the button animation
      }, 3000); // Change color for 3 seconds
      return () => clearTimeout(timeout);
    }
  }, [typingComplete]);
  return (
    <div className="flex flex-col md:flex-row w-full md:gap-[80px] p-4 items-center bg-gradient-to-b from-green-100 via-green-200 to-green-300">
      {/* Video - 70% of the width */}
      <div className="w-full md:w-[70%]  shadow-2xl shadow-black rounded-2xl">
        <video
          src={Video1}
          controls
          className="w-full h-auto rounded-2xl"
        ></video>
      </div>

      {/* Text Content - 30% of the width */}
      <div className="w-full md:w-[30%] h-full  p-8 px-[80px] flex  gap-8  flex-col md:ml-6 text-white bg-green-700 rounded-2xl ">
        <h1 className=" font-bold text-4xl">
          Get the answers you need, without the hallucinations.
        </h1>
        <div className="flex flex-col gap-4 ">
          <div ref={ref} className="text-lg text-gray-200">
            {displayText}
          </div>
          <button
            className={`flex w-fit px-4 py-2 rounded-lg border ${
              buttonAnimating
                ? "animate-bounceOnce bg-green-500 border-green-500"
                : "bg-transparent border-white"
            } transition-colors duration-500`}
          >
            Try it for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
