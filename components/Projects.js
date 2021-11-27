import React, { useState } from "react";
import Project from "./Project";
import { VscProject } from "react-icons/vsc";
import { FaAirbnb, FaRegFileCode } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

function Projects({ handleClick }) {
  const project = [
    {
      title: "Full-Stack Airbnb Clone",
      description:
        "Users can sign in, search for rentals with a custom date picker, and create their own listings.",
      tech: "Next.js Node Express MongoDB AWS S3 Google Maps API TailwindCSS Vercel Axios",
      link: "https://airbnbnextclone.vercel.app",
      github: "https://github.com/coscoaj1/airbnbnextclone",
      image: "/images/Airbnb.webp",
      framework: "React.js",
      video: true,
    },
    {
      title: "Portfolio",
      description:
        "My custom built Portfolio Website. Features a dark theme and a video preview of the featured project.",
      tech: " Next.js React TailwindCSS Vercel ",
      link: "https://anthonycosco.dev",
      github: "https://github.com/coscoaj1/myportfolio",
      image: "/images/portfolio.webp",
      framework: "React.js",
      video: false,
    },
    {
      title: "BlogReviews",
      description:
        "Users can sign in, submit their favorite blogs for review, and like/comment on existing blog submissions.",
      tech: "React Material-UI Node.js Express MongoDB Heroku",
      link: "https://blogreviews.netlify.app/",
      github: "https://github.com/coscoaj1/bloglist-frontend",
      image: "/images/Blog.webp",
      framework: "React.js",
      video: false,
    },
  ];

  return (
    <div className="max-w-screen bg-[#121212]">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div
          id="projects"
          className="mt-3 pt-3 text-6xl text-center text-[#808af9] font-bold"
        >
          Projects
        </div>
      </div>
      <section className="flex flex-col items-center justify-center w-screen sm:h-auto">
        {project.map((item) => {
          return (
            <Project
              onClick={handleClick}
              projectTitle={item.title}
              projectDescription={item.description}
              projectTech={item.tech}
              projectLink={item.link}
              projectGithub={item.github}
              projectImage={item.image}
              framework={item.framework}
              video={item.video}
              key={item.title}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
