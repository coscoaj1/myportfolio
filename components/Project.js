import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function Project({ onClick, projectTitle, projectDescription, projectTech }) {
  return (
    <div className="p-6 sm: mt-6 flex flex-col sm:flex-row items-center justify-around gap-12 bg-[#e5e7eb] border-b border-gray-400 w-full h-auto">
      <a target="_blank" href="https://airbnbnextclone.vercel.app">
        <button>
          <Image src="/images/91374gray.jpg" width={600} height={500} />
        </button>
      </a>
      <div className="flex flex-col gap-5 w-96 bg-[#fafafa] shadow-md p-4 items-center justify-center rounded-2xl">
        <div className="text-4xl font-bold text-[#818cf8] text-center">
          {projectTitle}
        </div>
        <div className="text-gray-600 text-center w-72">
          {projectDescription}
        </div>
        <div className="flex justify-center gap-8">
          <button title="Preview" onClick={onClick}>
            <MdOndemandVideo className="w-6 h-6" />
          </button>
          <a href="https://github.com/coscoaj1/airbnbnextclone" target="_blank">
            <button title="Github">
              {" "}
              <AiFillGithub className="w-6 h-6" />
            </button>
          </a>
          <a target="_blank" href="https://airbnbnextclone.vercel.app">
            <button title="External Link">
              <FiExternalLink className="w-6 h-6" />
            </button>
          </a>
        </div>
        <div className="italic text-center font-light text-black w-72 text-sm">
          {projectTech}
        </div>
      </div>
    </div>
  );
}

export default Project;
