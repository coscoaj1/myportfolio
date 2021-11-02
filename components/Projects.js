import React, { useState } from "react";
import Project from "./Project";

function Projects({ handleClick }) {
  const project = {
    first: {
      title: "Full Stack Airbnb Clone",
      description: "Created with Next.js/React, and Node.js/MongoDB",
    },
    second: {},
  };

  return (
    <div className="max-w-screen bg-[#fafafa]">
      <div
        id="projects"
        className="mt-3 pt-3 text-2xl text-center text-gray-400 font-medium bg-[#fafafa]"
      >
        projects
      </div>
      <section className="flex flex-col justify-center items-center sm:h-auto w-screen">
        <Project
          onClick={handleClick}
          projectTitle={project.first.title}
          projectDescription={project.first.description}
        />
      </section>
    </div>
  );
}

export default Projects;
