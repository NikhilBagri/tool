import React from "react";
import features from "../Assets/Features.svg";
import images from "../constants/images";

const Features = () => {
  return (
    <div className="py-12 bg-[#FCF6F5]" id="features ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-5xl">
            Features
          </p>
          <p className="mt-4 max-w-lg text-xl text-gray-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <img
            className="max-w-xs md:max-w-xl mt-4 md:mt-6"
            src={features}
            alt=""
          />
        </div>
        <div className=" md:ml-6 flex flex-col justify-between mt-10 space-y-10 ">
          <div className="max-w-md h-[200px] bg-[#17213A] rounded-xl">
            <div className="flex justify-between items-center">
              <h1 className="text-green-500 ml-6 mt-5 md:mt-8 h-fit text-xl">
                Chatbot
              </h1>
              <img className="mr-6 mt-5" src={images.feature1} alt="" />
            </div>
            <p className="text-gray-100 mx-6 mt-2 text-sm md:text-md">
              The OpenAI GPT-3 AI chatbot is a sophisticated language processing
              system that can understand the context of messages, generate
              coherent answers, translate texts, write code, and more.
            </p>
          </div>
          <div className="max-w-md h-[200px] bg-[#17213A] rounded-xl">
            <div className="flex justify-between items-center">
              <h1 className="text-green-400 ml-6 mt-5 md:mt-8 h-fit text-xl">
                Chatbot
              </h1>
              <img className="mr-6 mt-5" src={images.feature2} alt="" />
            </div>
            <p className="text-gray-100 mx-6 mt-2 text-sm md:text-md">
              The OpenAI GPT-3 AI chatbot is a sophisticated language processing
              system that can understand the context of messages, generate
              coherent answers, translate texts, write code, and more.
            </p>
          </div>
          <div className="max-w-md h-[200px] bg-[#17213A] rounded-xl">
            <div className="flex justify-between items-center">
              <h1 className="text-green-400 ml-6 mt-5 md:mt-8 h-fit text-xl">
                Chatbot
              </h1>
              <img className="mr-6 mt-5" src={images.feature3} alt="" />
            </div>
            <p className="text-gray-100 mx-6 mt-2 text-sm md:text-md">
              The OpenAI GPT-3 AI chatbot is a sophisticated language processing
              system that can understand the context of messages, generate
              coherent answers, translate texts, write code, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
