import React from "react";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full justify-center items-center bg-[#111828]"
    >
      <div className="font-bold text-4xl text-left text-white w-96 mt-12">
        About<span className="text-[#0891b2]">Me</span>
      </div>
      <div className="text-left w-96 my-12 text-gray-400">
        I am a self-taught <span className="text-[#0891b2]">developer</span>{" "}
        with a primary focus in{" "}
        <span className="text-[#0891b2]">frontend engineering</span>, and an
        interest in backend as well. I love{" "}
        <span className="text-[#0891b2]">solving</span> complex problems, and
        look forward to growing in my developer career.
      </div>
    </div>
  );
}

export default About;
