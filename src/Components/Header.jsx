import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import images from "../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className=" w-full flex flex-wrap items-center justify-between p-4 bg-[#17213A] text-white z-[100]  ">
      <div className="flex justify-start items-center lg:ml-10">
        <img src={images.logo} alt="app__logo" className="" />
      </div>
      <ul className="hidden sm:flex justify-center items-center space-x-10 tracking-widest">
        <li className="hover:text-green-400">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-green-400">
          <a href="#features">Features</a>
        </li>
        <li className="hover:text-green-400">
          <a href="#tools">Tools</a>
        </li>
        <li className="hover:text-green-400">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-end items-center lg:mr-10">
        <button className="bg-green-500  hover:bg-green-700 py-2 px-5 rounded-lg hidden sm:block">
          <a href="/contact" className="p-2 font-sans ">
            Sign In
          </a>
        </button>
      </div>
      <div className="sm:hidden">
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-screen transition duration-500 flex flex-col text-center items-center bg-[#17213A]">
            <AiOutlineClose
              fontSize={27}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="space-y-10 m-auto text-2xl tracking-widest">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" onClick={() => setToggleMenu(false)}>
                  Features
                </a>
              </li>
              <li>
                <a href="#tools" onClick={() => setToggleMenu(false)}>
                  Tools
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="bg-green-500 py-1 px-3 rounded-lg"
                  href="#contact"
                  onClick={() => setToggleMenu(false)}
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
