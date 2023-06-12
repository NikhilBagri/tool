import React from "react";
import main from "../Assets/main.svg";

const Main = () => {
  return (
    <div
      id="home"
      className=" min-h-screen bg-[#17213A] w-full flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 md:space-y-0 px-4"
    >
      <div className="w-full md:w-[700px] mt-0 md:mt-32 mb-20 md:mb-0">
        <h1 className="text-white text-2xl md:text-7xl font-medium mb-6 md:mb-10 mt-20 md:mt-0">
          AI-Assisted Lesson Development
        </h1>
        <p className="text-gray-300 max-w-lg md:max-w-xl text-sm md:text-md">
          We provide teachers with a range of tools that help them be more
          creative, develop their skills, and plan lessons that suit their
          students. Our platform also makes it easier to find and access
          educational resources in a new and efficient way.
        </p>
        <button className="text-white font-bold bg-green-500  hover:bg-green-700 mt-8 md:mt-10 text-center py-2 px-6 rounded-lg">
          Try for Free
        </button>
      </div>
      <div className=" max-w-lg">
        <img src={main} alt="header_img " className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Main;
