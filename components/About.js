import React from "react";
import { DiStackoverflow, DiDatabase, DiGitPullRequest } from "react-icons/di";
import Contact from "./Contact";

function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col w-screen justify-center items-center bg-shapes gap-24"
    >
      <div className="absolute inset-0 bg-black opacity-90 h-[auto]"></div>

      <div className="flex flex-col items-center justify-center w-full border border-red-500">
        <div className="font-medium text-4xl text-white full mt-24 z-10">
          About<span className="text-[#818cf8]">Me</span>
        </div>
        <div className="flex gap-2 z-10">
          <div className="text-xl w-96 my-12 text-gray-300">
            I am a self-taught <span className="text-[#818cf8]">developer</span>{" "}
            with a primary focus in{" "}
            <span className="text-[#818cf8]">frontend engineering</span>, and an
            interest in backend as well. I love{" "}
            <span className="text-[#818cf8]">solving</span> complex problems,
            and look forward to growing in my developer career.
          </div>
          <div className="flex flex-col gap-4 pt-8">
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
