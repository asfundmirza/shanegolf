import React from "react";
import TopSection from "../components/blogPage/TopSection";
import MiddleSection from "../components/blogPage/MiddleSection";
import LatestNews from "../components/blogPage/LatestNews";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        variants={{
          initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
      >
        <TopSection />
        <MiddleSection />
        <LatestNews />
      </motion.div>
    </div>
  );
};

export default Blog;
