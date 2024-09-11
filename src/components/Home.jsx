import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Handshake } from "lucide-react";
import { Package2 } from "lucide-react";
import { UserPen } from "lucide-react";
import { Factory } from "lucide-react";
import { Calculator } from "lucide-react";
import { BotMessageSquare } from "lucide-react";
import HeroSectionImage from "../assets/heroSection_image_copy.png";
import Footer from "./Footer";
import VideoSection from "./VideoSection";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  const boxContent = [
    {
      src: <Handshake size={40} color="white" />,
      alt: "img",
      heading: "Quick Answers to Regulatory Questions",
      content:
        "Safety Chat offers a one-stop platform for safety professionals, providing instant answers to OSHA, EPA, and MSHA regulation questions.",
    },
    {
      src: <Package2 size={40} color="white" />,
      alt: "img",
      heading: "Toolbox Talks",
      content:
        "Safety Chat introduces a library of ready-to-use toolbox talks. If they don't fit your needs, our toolbox talk generator can quickly craft or suggest a customized topic, saving you valuable time.",
    },
    {
      src: <UserPen size={40} color="white" />,
      alt: "img",
      heading: "Advanced Standards Generator",
      content:
        "Need a fall protection standard but don't know where to start? Use our Advanced Standard Operating Procedure Generator to customize your own standard (up to 25 pages); saving you months of headache, writing, and research.",
    },
    {
      src: <Factory size={40} color="white" />,
      alt: "img",
      heading: "Hazard Identifier",
      content:
        "Don't know all the hazards? Our brand new Hazard Identifier makes it easy for you to identify hazards along with OSHA citations. Not only that, it will give you solutions to the hazards as well! Simply take a picture, upload it to the chat, and let the Hazard Identifier Tool do the work.",
    },
    {
      src: <Calculator size={40} color="white" />,
      alt: "img",
      heading: "Industrial Hydiene Calculators",
      content:
        "We introduced Industrial Hygiene calculators covering topics like noise, ventilation, and sampling. These tools are designed to simplify your tasks, eliminating the need to recall complex formulas by providing them at your fingertips.",
    },
    {
      src: <BotMessageSquare size={40} color="white" />,
      alt: "img",
      heading: "Custom Chatbot",
      content:
        "Do you get a lot of safety questions from other employees? Have your own personalized chatbot that is trained using your own data. This chatbot can help answer questions about your policies among many other capabilities.",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <header className="container mx-auto p-4 flex justify-between">
        <h1 className="text-xl">Welcome to the Home Page!</h1>
        <button
          className=" bg-green-600 text-white p-2 px-4 rounded-full"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </header>
      <div className=" flex w-full flex-col ">
        {/* Hero Section */}
        <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white gap-[60px]">
          <div className="flex w-full bg-gradient-to-b items-center from-green-100 via-green-200 to-green-300 md:p-0 p-6 lg:min-h-screen min-h-fit md:rounded-br-[120px]">
            <div className="container mx-auto max-w-[1500px] md:px-0 px-2 flex md:justify-between justify-center items-center  ">
              <div className="flex  flex-col gap-4 lg:pl-2 pl-4">
                <div className="flex flex-col  md:text-5xl text-4xl text-center md:text-left   lg:text-7xl font-semibold  gap-4">
                  <span>Harnessing AI to</span>
                  <span>Empower</span>
                  <span>Workplace</span>
                  <span>Safety.</span>
                </div>

                <button className=" bg-green-600 hover:bg-green-500 text-white p-2 px-6 rounded-xl w-fit text-md">
                  Try for free, No credit card required{" "}
                </button>
              </div>

              <div className="hidden md:flex flex-1  w-full     ">
                <div className="flex flex-1  items-center justify-center object-fill">
                  <img src={HeroSectionImage} alt="img " className="w-full " />
                </div>
              </div>
            </div>
          </div>

          {/* Novice Section */}

          <div className="flex flex-col  w-full items-center px-4">
            <div className="flex flex-col gap-10 max-w-[1200px]">
              <div className="flex flex-col gap-4 items-center text-center text-4xl">
                <span className="md:flex hidden">From Novice to Veteran</span>
                <span>
                  Safety Tools for{" "}
                  <span className=" font-bold text-green-600">
                    Every Professional
                  </span>{" "}
                  at Any Stage
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                {boxContent.map((box, index) => (
                  <div
                    key={index}
                    className="bg-white border border-transparent hover:border-green-600 flex flex-col shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300"
                  >
                    <div className="flex flex-col justify-between p-6 gap-6">
                      <div className=" bg-green-600 p-2 rounded-full w-fit   ">
                        {box.src}
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">{box.heading}</h3>
                        <p className="text-sm text-gray-500">{box.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <VideoSection />
          </div>
        </div>
        <div className="lg:fixed lg:z-10 lg:bottom-0 w-full lg:h-[710px] ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
