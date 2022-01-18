import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function Project({
  onClick,
  projectTitle,
  projectDescription,
  projectTech,
  projectVideo,
  projectLink,
  projectImage,
  projectGithub,
  framework,
  video,
}) {
  return (
    <div className="p-4 flex flex-col sm:flex-row items-center justify-around sm:gap-2 bg-[#121212]  w-full h-auto border-b border-gray-700">
      <a
        rel="noopener"
        className="rounded-lg "
        target="_blank"
        href={projectLink}
        aria-label="project link"
      >
        <button aria-label="link to project">
          <Image
            src={projectImage}
            width={550}
            height={450}
            alt="project image"
          />
        </button>
      </a>
      <div className="sm:mr-12 flex flex-col gap-1 w-80 h-96 py-4 bg-[#202020] p-2 items-center justify-center mb-24 sm:mb-0">
        <h1 className="text-sm font-bold tracking-widest text-white text-opacity-[87%] uppercase">
          {framework}
        </h1>
        <div className="w-full text-center text-3xl pt-2 mb-4 font-medium text-[#808af9] rounded-md">
          {projectTitle}
        </div>
        <div className="w-[85%] p-4 text-center text-white rounded-md text-opacity-60 mx-1">
          {projectDescription}
        </div>
        <div className="flex items-center justify-center w-full gap-8 p-2 text-gray-400 rounded-md">
          <button title="Preview" onClick={onClick}>
            {video ? <MdOndemandVideo className="w-6 h-6" /> : null}
          </button>
          <a
            rel="noopener"
            href={projectGithub}
            target="_blank"
            aria-label="github link"
          >
            <button title="Github">
              {" "}
              <AiFillGithub className="w-6 h-6" />
            </button>
          </a>
          <a
            rel="noopener"
            target="_blank"
            href={projectLink}
            aria-label="project link"
          >
            <button title="External Link">
              <FiExternalLink className="w-6 h-6" />
            </button>
          </a>
        </div>
        <div className="italic text-center font-light text-[#808af9] w-60 text-sm rounded-md">
          {projectTech}
        </div>
      </div>
    </div>
  );
}

export default Project;
