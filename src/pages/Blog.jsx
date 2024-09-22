import React from "react";
import TopSection from "../components/blogPage/TopSection";
import MiddleSection from "../components/blogPage/MiddleSection";
import LatestNews from "../components/blogPage/LatestNews";

const Blog = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <TopSection />
      <MiddleSection />
      <LatestNews />
    </div>
  );
};

export default Blog;
