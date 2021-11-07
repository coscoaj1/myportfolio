import React, { useState } from "react";
import Project from "./Project";
import { VscProject } from "react-icons/vsc";

function Projects({ handleClick }) {
  const project = [
    {
      title: "Full-Stack Airbnb Clone",
      description:
        "Users can sign in, search for rentals with a custom date picker, and create their own listings.",
      tech: "Next.js Node Express MongoDB AWS S3 Google Maps API TailwindCSS",
    },
    {},
  ];

  return (
    <div className="max-w-screen bg-[#171719]">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div
          id="projects"
          className="mt-3 pt-3 text-5xl text-center text-[#828cf8] font-bold"
        >
          Projects
        </div>
        <div className="text-center">
          <VscProject className="w-20 h-20 text-center text-gray-300" />
        </div>
      </div>
      <section className="flex flex-col items-center justify-center w-screen sm:h-auto">
        <Project
          onClick={handleClick}
          projectTitle={project[0].title}
          projectDescription={project[0].description}
          projectTech={project[0].tech}
        />
      </section>
    </div>
  );
}

export default Projects;
