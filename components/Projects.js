import React, { useState } from "react";
import Project from "./Project";

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
    <div className="max-w-screen bg-[#e5e7eb]">
      <div
        id="projects"
        className="mt-3 pt-3 text-5xl text-center font-medium bg-[#e5e7eb]"
      >
        Projects
      </div>
      <section className="bg-[#e5e7eb] flex flex-col justify-center items-center sm:h-auto w-screen">
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
