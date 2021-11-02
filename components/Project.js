import React from "react";
import Image from "next/image";

function Project({ onClick, projectTitle, projectDescription }) {
  return (
    <div className="p-6 sm: mt-6 flex flex-col sm:flex-row items-center justify-around gap-12 bg-[#fafafa] border-b border-gray-400 w-full h-auto">
      <a target="_blank" href="https://airbnbnextclone.vercel.app">
        <button>
          <Image src="/images/91374.jpg" width={600} height={500} />
        </button>
      </a>
      <div className="flex flex-col gap-5 w-96 bg-[#fafafa] ">
        <div className="text-3xl font-bold text-center">{projectTitle}</div>
        <div className="text-gray-400 text-center font-medium">
          {projectDescription}
        </div>
        <div className="flex justify-center gap-8">
          {" "}
          <button
            onClick={onClick}
            className="flex justify-center items-center w-32 px-5 bg-[#818cf8] transition duration-300 hover:bg-purple-500 active:scale-90 transform text-white font-medium rounded-3xl"
          >
            <Image src="/icons/preview-65 (1).svg" width={36} height={36} />
            <span>Preview</span>
          </button>
          <a href="https://github.com/coscoaj1/airbnbnextclone" target="_blank">
            <button className="flex justify-center items-center gap-1 w-32 px-5 py-1.5 border border-[#818cf8]  text-[#818cf8]  transition duration-300 active:scale-90 transform hover:scale-105 rounded-3xl">
              <Image
                src="/icons/iconmonstr-github-1 (1).svg"
                width={36}
                height={36}
              />
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
