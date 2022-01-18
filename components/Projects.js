import React, { useState } from "react";
import Project from "./Project";
import { VscProject } from "react-icons/vsc";
import { FaAirbnb, FaRegFileCode } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

function Projects({ handleClick }) {
  const project = [
    {
      title: "Airbnb Clone",
      description:
        "Users can sign in, search for rentals with a custom date picker, and create their own listings.",
      tech: "Next.js Node Express MongoDB AWS S3 Google Maps API TailwindCSS Vercel",
      link: "https://airbnbnextclone.vercel.app",
      github: "https://github.com/coscoaj1/airbnbnextclone",
      image: "/images/Airbnb.webp",
      framework: "Next.js",
      video: true,
    },
    {
      title: "Vital Gear Shop",
      description: "Headless Shopify E-Commerce Website",
      tech: " Next.js React Shopify TailwindCSS  ",
      link: "https://vital-gearshop.vercel.app/",
      github: "https://github.com/coscoaj1/shopify_headless",
      image: "/images/portfolio.webp",
      framework: "Next.js",
      video: false,
    },
    {
      title: "Inventory Tracker",
      description:
        "Simple inventory tracking full-stack CRUD app including thumbnail image uploads",
      tech: "React ChakraUI Node.js Express MySQL AWS S3 Heroku",
      link: "https://inventory-crud.netlify.app/",
      github: "https://github.com/coscoaj1/inventory_tracker",
      image: "/images/inventory-screenshot.webp",
      framework: "Node.js + React.js",
      video: false,
    },
    // {
    //   title: "NASA Image Gallery",
    //   description:
    //     "Image gallery driven by NASA Image of the day API",
    //   tech: "React Node.js Express MySQL AWS S3 Heroku",
    //   link: "https://inventory-crud.netlify.app/",
    //   github: "https://github.com/coscoaj1/inventory_tracker",
    //   image: "/images/inventory-screenshot.webp",
    //   framework: "Node.js + React.js",
    //   video: false,
    // },
    {
      title: "BlogReviews",
      description:
        "Users can sign in, submit their favorite blogs for review, and like/comment on existing blog submissions.",
      tech: "React Material-UI Node.js Express MongoDB Heroku",
      link: "https://blogreviews.netlify.app/",
      github: "https://github.com/coscoaj1/bloglist-frontend",
      image: "/images/Blog.webp",
      framework: "Node.js + React.js",
      video: false,
    },
  ];

  return (
    <div className="max-w-screen bg-[#121212]">
      <div className="flex flex-col items-center justify-center w-full">
        <h2
          id="projects"
          className="mt-3 py-3 text-6xl text-center text-[#808af9] font-bold"
        >
          Projects
        </h2>
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
