import React from "react";
import { motion } from "framer-motion";
import ScrollCardBackground from "./ScrollCardBackground";

const VideoScrollCard = ({ card }) => {
  return (
    <>
      <div className="flex flex-col justify-between items-center w-full h-full p-10 gap-9  ">
        <div className="flex w-full justify-center">
          <h2 className="text-white font-bold text-[60px]">{card.title}</h2>
        </div>

        <div
          key={card.id}
          className="group relative  md:h-[570px]  md:w-[1000px] overflow-hidden rounded-3xl bg-neutral-200"
        >
          <video
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            src={card.url}
            controls
            className="absolute inset-0 z-0  md:h-[570px]  md:w-[1000px] "
          ></video>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-full max-w-[900px] justify-center">
            <h2 className="text-gray-500 text-lg font-semibold ">
              {card.content}
            </h2>
          </div>
          <div className="flex w-full justify-center">
            <button className="bg-green-600 text-white p-2 px-4 rounded-lg w-fit">
              {card.buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoScrollCard;

{
  /* <div className="flex w-[30%] p-4  justify-center items-center flex-col">
            <div className="flex w-full flex-col gap-6 items-center max-w-[300px] text-xl  border  border-green-600 text-gray-400 shadow-sm shadow-white rounded-3xl p-8">
              <p>{card.content}</p>
              <button className="flex w-fit text-center  p-2 text-sm px-4 rounded-lg  bg-green-600 text-white">
                {card.buttonText}
              </button>
            </div>
          </div> */
}

{
  /* <div className="flex w-[30%] p-4  justify-center items-center flex-col">
            <motion.div
              whileHover="hover"
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              variants={{
                hover: {
                  scale: 1.05,
                },
              }}
              className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-transparent hover:bg-green-700 border border-green-600 p-8"
            >
              <div className="relative z-10 text-white">
                <motion.span
                  initial={{ scale: 0.85 }}
                  variants={{
                    hover: {
                      scale: 1,
                    },
                  }}
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                  className="my-2 block origin-top-left text-xl font-semibold "
                >
                  {card.content}
                </motion.span>
              </div>
              <button className="absolute bottom-4 left-4 right-4 z-20 rounded-lg  bg-green-600 py-2 text-center  uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white">
                Get it now
              </button>
              <ScrollCardBackground />
            </motion.div>
          </div> */
}
