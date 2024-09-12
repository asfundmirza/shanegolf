import React from "react";

const VideoScrollCard = ({ card }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full p-6 gap-20  ">
        <div className="flex w-full justify-center">
          <h2 className="text-white font-bold text-[80px]">{card.title}</h2>
        </div>

        <div className="flex md:flex-row  flex-col">
          <div className="flex w-[30%] p-4 gap-[50px] justify-center items-center flex-col">
            <p className=" max-w-[250px] text-xl border border-green-600 text-gray-400 shadow-sm shadow-white rounded-3xl p-8">
              {card.content}
            </p>
            <button className="flex items-center justify-center w-fit bg-green-600 hover:bg-green-500 text-white  py-3 px-8 rounded-xl">
              {card.buttonText}
            </button>
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
        </div>
      </div>
    </>
  );
};

export default VideoScrollCard;
