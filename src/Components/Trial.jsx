import React from "react";
import images from "../constants/images";

const Trial = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center space-x-20">
      <div className="h-fit w-fit mb-12 ">
        <img
          className="h-[400px] w-[600px]"
          src={images.trial}
          alt="header_img"
        />
      </div>
      <div className="h-fit w-[600px]">
        <h1 className="text-[#17213A] text-[90px] font-medium tracking-wider ">
          START A FREE TRIAL TODAY
        </h1>
        <p className="text-gray-400">No credit card required.</p>
        <button className="text-white font-bold bg-[#63BF77] mt-10 text-center p-3 px-16 hover:scale-110 ease-in duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Trial;
