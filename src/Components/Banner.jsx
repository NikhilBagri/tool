import React from "react";
import images from "../constants/images";

const Banner = () => {
  return (
    <section className="bg-[#17213A] h-screen  flex items-center justify-center">
      <div
        className="relative bg-gray-800 md:rounded-xl  py-10 px-8 md:py-16 md:px-12  "
        data-aos="zoom-y-out"
      >
        <div className="relative flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left lg:max-w-xl space-y-4 ">
            <h3 className="w-fit text-white text-left text-[4rem]">
              Try it out for Free
            </h3>
            <p className="text-gray-300 max-w-lg md:max-w-xl text-sm md:text-md text-left text-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit nemo
              expedita voluptas culpa sapiente.
            </p>
            <div className="flex flex-col sm:flex-row justify-start max-w-xs sm:max-w-md lg:mx-0">
              <a
                className="btn text-white bg-green-400 hover:bg-green-500 w-fit px-2 py-2 rounded-lg"
                href="#0"
              >
                Get Started
              </a>
            </div>
            <p className="text-sm text-gray-300 mt-3 text-left text-[1rem]">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div>
            <img src={images.test1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
