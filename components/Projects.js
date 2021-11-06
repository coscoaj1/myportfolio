import React, { useState } from "react";
import Project from "./Project";
import { VscProject } from "react-icons/vsc";

function Projects({ handleClick }) {
  const project = [
    {
      title: "Full-Stack Airbnb Clone",
      description:
        "Users can sign in, search for rentals with a custom date picker, and create their own listings.",
      tech: "Next.js Node/Express MongoDB AWS S3 Google Maps API, TailwindCSS",
    },
    {},
  ];

  return (
    <div className="max-w-screen bg-[#202124]">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <div
          id="projects"
          className="mt-3 pt-3 text-4xl text-center text-[#828cf8] font-medium"
        >
          Projects
        </div>
        <div className="text-center">
          <VscProject className="h-12 w-12 text-center text-gray-300" />
        </div>
      </div>
      <section className="flex flex-col justify-center items-center sm:h-auto w-screen">
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
