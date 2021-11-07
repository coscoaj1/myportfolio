import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function Project({ onClick, projectTitle, projectDescription, projectTech }) {
  return (
    <div className="p-6 sm: mt-6 flex flex-col sm:flex-row items-center justify-around gap-12 bg-[#202124] border-b border-gray-800 w-full h-auto">
      <a
        className="rounded-lg "
        target="_blank"
        href="https://airbnbnextclone.vercel.app"
      >
        <button>
          <Image src="/images/91374dark.jpg" width={600} height={500} />
        </button>
      </a>
      <div className="flex flex-col gap-5 w-96 bg-[#121212] shadow-md p-6 items-center justify-center rounded-lg">
        <div className="text-4xl px-2 py-4 font-bold text-[#818cf8] text-center bg-[#1e1e1e] rounded-md">
          {projectTitle}
        </div>
        <div className="text-gray-300 p-2 text-center w-72 bg-[#1e1e1e] rounded-md">
          {projectDescription}
        </div>
        <div className="flex justify-center gap-8 bg-[#1e1e1e] text-gray-300 p-2 rounded-md">
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
        <div className="italic text-center font-light text-gray-300 w-72 text-sm bg-[#1e1e1e] rounded-md">
          {projectTech}
        </div>
      </div>
    </div>
  );
}

export default Project;
