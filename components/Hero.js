import React from "react";
import Header from "./Header";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Hero() {
  return (
    <div className="relative max-w-full h-[95vh] bg-[#202124] ">
      <Header />
      <div className="absolute flex items-center justify-center flex-row h-[80vh] text-gray-300">
        <div className="hidden sm:flex flex-col justify-center items-center gap-2 h-full w-24">
          <div className="flex flex-col w-12 ml-3 gap-4">
            <a href="https://github.com/coscoaj1" target="_blank">
              <button className="w-12 h-12">
                <AiFillGithub className="w-6 h-6 z-10 text-gray-300" />
              </button>
            </a>
            <button>
              <AiFillLinkedin className="w-6 h-6 text-gray-300" />
            </button>
          </div>
          <div className="flex flex-col w-12 h-36 border-l ml-8 mt-4 border-gray-500"></div>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-screen sm:w-full">
          <section className="text-gray-300 w-full flex flex-col">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-5 sm:pl-4 font-bold text-gray-300">
                <div className="italic text-xl md:text-2xl text-center sm:text-left">
                  Hi, I'm <span className="text-[#03d8c5]">Anthony.</span>
                </div>
                <div className=" flex flex-row text-4xl sm:text-6xl lg:text-7xl xl:text-8xl justify-center sm:justify-start">
                  <div>Frontend </div>{" "}
                  <div className="text-[#818cf8]">Developer</div>
                </div>
                <div className="text-3xl md:text-4xl my-2 font-medium text-center text-gray-300 sm:text-left">
                  and <span className="text-[#03d8c5]">Javascript </span>
                  enthusiast.
                </div>
              </div>
            </div>
          </section>
          {/* <div className="absolute bottom-0 right-5">
						<div className="font-medium sm:text-4xl md:text-5xl text-2xl text-[#0891b2]">
							{'</>'}
						</div>
					</div> */}
          <div id="light" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
