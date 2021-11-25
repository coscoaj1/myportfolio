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
  icon,
  video,
}) {
  return (
    <div className="p-4 sm:mt-4 flex flex-col sm:flex-row items-center justify-around gap-12 bg-[#171719]  w-full h-auto border-b border-gray-700">
      <a
        className="rounded-lg "
        target="_blank"
        href={projectLink}
        aria-label="project link"
      >
        <button aria-label="link to project">
          <Image
            src={projectImage}
            width={600}
            height={500}
            alt="project image"
          />
        </button>
      </a>
      <div className="flex flex-col gap-1 w-96 py-4 bg-[#272727] shadow-lg p-2 items-center justify-center rounded-lg">
        <div className="text-gray-300">{icon}</div>
        <div className="w-full text-center text-2xl pt-2 mb-4 font-medium text-[#818cf8] rounded-md">
          {projectTitle}
        </div>
        <div className="w-full p-4 text-center text-gray-400 rounded-md">
          {projectDescription}
        </div>
        <div className="flex items-center justify-center w-full gap-8 p-2 text-gray-300 rounded-md">
          <button title="Preview" onClick={onClick}>
            {video ? <MdOndemandVideo className="w-6 h-6" /> : null}
          </button>
          <a href={projectGithub} target="_blank" aria-label="github link">
            <button title="Github">
              {" "}
              <AiFillGithub className="w-6 h-6" />
            </button>
          </a>
          <a target="_blank" href={projectLink} aria-label="project link">
            <button title="External Link">
              <FiExternalLink className="w-6 h-6" />
            </button>
          </a>
        </div>
        <div className="italic text-center font-light text-[#818cf8] w-60 text-sm rounded-md">
          {projectTech}
        </div>
      </div>
    </div>
  );
}

export default Project;
