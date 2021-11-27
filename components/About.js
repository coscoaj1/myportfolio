import React from "react";
import { DiStackoverflow, DiDatabase, DiGitPullRequest } from "react-icons/di";
import Contact from "./Contact";
import { BsPersonLinesFill } from "react-icons/bs";

function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center justify-center gap-24 bg-aboutbg"
    >
      <div className="absolute inset-0 bg-black opacity-[83%] w-full h-[auto]"></div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="z-10 mt-24 text-5xl font-medium text-white">
            About<span className="text-[#808af9]">Me</span>
          </div>
          <BsPersonLinesFill className="z-10 w-8 h-8 text-center text-gray-400" />
        </div>
        <div className="z-10 flex flex-col">
          <div className="px-2 my-8 text-xl text-center text-gray-100 w-96">
            I am a self-taught <span className="text-[#808af9]">developer</span>{" "}
            with a love for <span className="text-[#808af9]">frontend</span>{" "}
            engineering in React and
            <span className="text-[#808af9]"> Next.js.</span> My homebase is
            Asheville, NC. I can help{" "}
            <span className="text-[#808af9]">solve complex problems</span> for
            your company, and am willing and eager to learn{" "}
            <span className="text-[#808af9]">new technologies </span>
            to expand my developer career.
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <DiStackoverflow className="w-8 h-8 text-gray-400" />
            <DiDatabase className="w-8 h-8 text-gray-400" />
            <DiGitPullRequest className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
      <Contact passHref />
    </div>
  );
}

export default About;
