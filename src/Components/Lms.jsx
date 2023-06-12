import React from "react";
import lms from '../Assets/lms.svg'

const Lms = () => {
  return (
    <div id="contact" className="bg-[#FCF6F5] h-[700px] w-full flex flex-col md:flex-row items-center justify-center space-y-0 md:space-y-0">
      <div className="w-fit md:w-[700px] mb-28 px-4 md:px-12 ">
        <h1 className=" text-2xl md:text-6xl font-medium mb-4">
        Looking for Another LMS?
        </h1>
        <p className="text-gray-500 max-w-lg md:max-w-xl text-sm md:text-md">
          We provide teachers with a range of tools that help them be more
          creative, develop their skills, and plan lessons that suit their
          students. Our platform also makes it easier to find and access
          educational resources in a new and efficient way.
        </p>
        <button className="text-white font-bold bg-green-500 hover:bg-green-600 mt-6 text-center py-2 px-6 ">
          Contact Us
        </button>
      </div>
      <div className="h-fit w-full md:w-[800px] mt-20 ">
        <img src={lms} alt="header_img" />
      </div>
    </div>
  );
};

export default Lms;
