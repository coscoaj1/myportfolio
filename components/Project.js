import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function Project({ onClick, projectTitle, projectDescription, projectTech }) {
  return (
    <div className="p-6 sm: mt-6 flex flex-col sm:flex-row items-center justify-around gap-12 bg-[#171719] border-b border-gray-800 w-full h-auto">
      <a
        className="rounded-lg "
        target="_blank"
        href="https://airbnbnextclone.vercel.app"
      >
        <button>
          <Image src="/images/91374dark.jpg" width={600} height={500} />
        </button>
      </a>
      <div className="flex flex-col gap-1 w-96 bg-[#121212] shadow-md p-2 items-center justify-center rounded-lg">
        <div className="text-3xl text-left px-8 py-8 mb-4 font-bold text-[#818cf8] rounded-md">
          {projectTitle}
        </div>
        <div className="text-gray-300 p-4 text-center w-full  bg-[#1e1e1e] rounded-md">
          {projectDescription}
        </div>
        <div className="flex justify-center gap-8 bg-[#1e1e1e] w-full text-gray-300 p-2 rounded-md">
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
        <div className="italic text-center font-light text-gray-300 w-full text-sm bg-[#1e1e1e] rounded-md">
          {projectTech}
        </div>
      </div>
    </div>
  );
}

export default Project;
