import React from "react";
import { DiStackoverflow, DiDatabase, DiGitPullRequest } from "react-icons/di";
import Contact from "./Contact";
import { BsPersonLinesFill } from "react-icons/bs";

function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col w-screen justify-center items-center bg-shapes gap-24"
    >
      <div className="absolute inset-0 bg-black opacity-90 h-[auto]"></div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex flex-col gap-4 items-center justify-center">
          <div className="font-medium text-5xl text-white mt-24 z-10">
            About<span className="text-[#818cf8]">Me</span>
          </div>
          <BsPersonLinesFill className="w-20 h-20 text-gray-300 text-center z-10" />
        </div>
        <div className="flex flex-col z-10">
          <div className="text-xl w-96 my-8 text-gray-300">
            I am a self-taught <span className="text-[#818cf8]">developer</span>{" "}
            with a primary focus in{" "}
            <span className="text-[#818cf8]">frontend</span> engineering, and an
            interest in backend as well. I love{" "}
            <span className="text-[#818cf8]">solving complex problems</span>,
            and look forward to growing in my developer career.
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <DiStackoverflow className="text-gray-300 w-12 h-12" />
            <DiDatabase className="text-gray-300 w-12 h-12" />
            <DiGitPullRequest className="text-gray-300 w-12 h-12" />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default About;
