import React from "react";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full justify-center items-center bg-[#202124]"
    >
      <div className="font-medium text-4xl text-left text-white w-96 mt-12">
        About<span className="text-[#818cf8]">Me</span>
      </div>
      <div className="text-left text-xl w-96 my-12 text-gray-300">
        I am a self-taught <span className="text-[#818cf8]">developer</span>{" "}
        with a primary focus in{" "}
        <span className="text-[#818cf8]">frontend engineering</span>, and an
        interest in backend as well. I love{" "}
        <span className="text-[#818cf8]">solving</span> complex problems, and
        look forward to growing in my developer career.
      </div>
    </div>
  );
}

export default About;
