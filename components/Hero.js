import React from "react";
import Header from "./Header";
import { VscGithub } from "react-icons/vsc";
// import { AiFillLinkedin } from "react-icons/ai";

function Hero() {
  return (
    <div className="relative max-w-7xl h-[95vh] bg-[#111828] ">
      <Header />
      <div id="wrapper">
        <section className="text-white w-full flex flex-col absolute top-1/2">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col w-12 ml-3 gap-4">
                <a href="https://github.com/coscoaj1">
                  <button className="w-12 h-12 border border-red-500">
                    <VscGithub />
                  </button>
                </a>
                <button>{/* <AiFillLinkedin className="w-6 h-6" /> */}</button>
              </div>
              <div className="flex flex-col w-12 h-36 border-l ml-6 border-gray-500"></div>
            </div>
            <div className="flex flex-col gap-2 sm:gap-5 sm:pl-4 font-bold text-[#fafafa]">
              <div className="text-xl text-center sm:text-left">
                Hi, I'm Anthony
              </div>

              <div className=" flex flex-row text-4xl sm:text-7xl justify-center sm:justify-start">
                <div>Frontend </div>{" "}
                <div className="text-[#818cf8]">Developer</div>
              </div>
              <div className="italic text-3xl my-2 font-medium text-center sm:text-left">
                and Javascript enthusiast
              </div>
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 right-5">
          <div className="font-medium sm:text-4xl md:text-5xl text-2xl text-[#0891b2]">
            {"</>"}
          </div>
        </div>
        <div id="light" />
      </div>
    </div>
  );
}

export default Hero;
