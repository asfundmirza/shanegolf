import React, { useState, useRef, useEffect } from "react";
import CoveredImage from "../assets/heroSection mob.png";

const InstantAccess = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Request animation frame ID for smooth movement
  const animationFrame = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - container.left;
      const mouseY = e.clientY - container.top;

      const moveX = (mouseX / container.width - 0.5) * -40; // -40 for more movement
      const moveY = (mouseY / container.height - 0.5) * -40;

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      // Update image position with requestAnimationFrame for smoother animation
      animationFrame.current = requestAnimationFrame(() => {
        setImagePosition({ x: moveX, y: moveY });
      });
    }
  };

  const handleMouseLeave = () => {
    // Reset image position when mouse leaves the container
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    setImagePosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    // Clean up any pending animation frame requests when component unmounts
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="flex w-full container mx-auto p-8">
      <div className="flex md:flex-row flex-col w-full justify-between items-center">
        <div className="flex flex-1 flex-col md:items-start items-center gap-8">
          <div className="lg:text-5xl md:text-4xl flex flex-col md:gap-4 gap-2  text-3xl md:text-left text-center font-semibold text-gray-900">
            <span>Instant Access to</span>
            <span className="bg-green-600 p-4 w-fit lg:text-7xl md:text-6xl text-4xl text-white rounded-[25px]">
              Regulatory
            </span>
            <span>Resources</span>
          </div>
          <div className="text-gray-500 md:max-w-[450px]">
            With Safety Chat, you'll have access to the latest regulatory
            materials, toolbox talks, and industry hygiene calculators at your
            fingertips.
          </div>
        </div>
        <div
          ref={containerRef}
          className="flex flex-1 justify-end md:overflow-hidden md:relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={CoveredImage}
            alt="hero image"
            className="w-full object-cover md:transition-transform md:ease-linear"
            style={{
              transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InstantAccess;
