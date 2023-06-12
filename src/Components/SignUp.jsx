import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center py-10 md:py-32 bg-[#17213A]">
      <div className="py-10 px-6 md:px-12 bg-gray-200 rounded-lg">
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-20 rounded-lg w-full md:w-auto flex items-center">
            <FcGoogle size={30} />{" "}
            <span className="ml-4">Login With Google</span>
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-b border-gray-300"></div>
          <p className="text-center font-medium text-gray-600 mx-3 mb-0">Or</p>
          <div className="flex-grow border-b border-gray-300"></div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-input w-full bg-gray-300 bg-opacity-70 rounded py-2 outline-none"
            // placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input w-full bg-gray-300 bg-opacity-70 rounded py-2 outline-none"
            // placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="form-checkbox mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-600">
              Remember me
            </label>
          </div>
        </div>

        <div className="text-center md:text-left">
          <button className="bg-[#17213A] hover:bg-[#111840] text-white font-medium py-3 px-20 rounded-lg w-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
