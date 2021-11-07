import React from "react";
import Header from "./Header";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Skills from "./Skills";

function Hero() {
  return (
    <div className="relative max-w-full h-[auto] bg-herobg">
      <div className="absolute inset-0 bg-[#212124] opacity-70 h-[auto]"></div>
      <Header />
      <div className="flex flex-col">
        <div className="flex items-center justify-center flex-row h-[80vh] text-gray-300">
          <div className="z-10 flex-col items-center justify-center hidden w-24 h-full gap-2 sm:flex">
            <div className="flex flex-col w-12 gap-4 ml-3">
              <a href="https://github.com/coscoaj1" target="_blank">
                <button className="w-12 h-12">
                  <AiFillGithub className="z-10 w-6 h-6 text-gray-300" />
                </button>
              </a>
              <button>
                <AiFillLinkedin className="w-6 h-6 text-gray-300" />
              </button>
            </div>
            <div className="flex flex-col w-12 mt-4 ml-8 border-l border-gray-500 h-36"></div>
          </div>
          <div className="flex flex-col items-center justify-center w-screen h-full sm:w-full">
            <section className="z-10 flex flex-col w-full text-gray-300">
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center gap-2 font-bold text-gray-300 sm:items-start sm:justify-start sm:gap-5 sm:pl-4">
                  <div className="text-xl italic text-center md:text-2xl sm:text-left">
                    Hi, I'm{" "}
                    <span className="text-[#03d8c5] text-3xl">Anthony.</span>
                  </div>
                  <div className="flex flex-row justify-center text-4xl sm:text-6xl lg:text-7xl xl:text-8xl sm:justify-start">
                    <div>Frontend </div>{" "}
                    <div className="text-[#818cf8]">Developer</div>
                  </div>
                  <div className="my-2 text-3xl font-medium text-center text-gray-300 md:text-4xl sm:text-left">
                    and <span className="text-[#03d8c5]">Javascript </span>
                    enthusiast.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default Hero;
