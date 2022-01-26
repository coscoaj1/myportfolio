import React from "react";
import Project from "./Project";

function Projects({ handleClick }) {
  const project = [
    {
      title: "Airbnb Clone",
      description:
        "Features include custom search bar with date range picker and location autocomplete, create new listing functionality, and authentication.",
      tech: "Next.js Node Express MongoDB Amazon S3 Google Maps API TailwindCSS Vercel",
      link: "https://airbnbnextclone.vercel.app",
      github: "https://github.com/coscoaj1/airbnbnextclone",
      image: "/images/Airbnb.webp",
      framework: "Next.js + Node.js",
      video: true,
    },
    {
      title: "Vital Gear Shop",
      description:
        "Headless E-Commerce Website with Shopify Storefront API integration and a Nordic theme",
      tech: " Next.js React Shopify Storefront API TailwindCSS",
      link: "https://vital-gearshop.vercel.app/",
      github: "https://github.com/coscoaj1/shopify_headless",
      image: "/images/portfolio.webp",
      framework: "Next.js",
      video: false,
    },
    {
      title: "Inventory Tracker",
      description:
        "Full-stack inventory tracking CRUD app, including thumbnail image upload with Amazon S3 storage and auto resizing with Sharp.",
      tech: "React ChakraUI Node.js Express MySQL Amazon S3/RDS Heroku Netlify",
      link: "https://inventory-crud.netlify.app/",
      github: "https://github.com/coscoaj1/inventory_tracker",
      image: "/images/inventory-screenshot.webp",
      framework: "Node.js + React.js",
      video: false,
    },
    {
      title: "My Spacebook",
      description:
        "Image gallery driven by the NASA Astronomy Picture of the day API.",
      tech: "React NASA-APOD-API TailwindCSS ",
      link: "https://nasa-api-project.vercel.app/",
      github: "https://github.com/coscoaj1/nasa-api-project",
      image: "/images/nasa-api-screenshot.webp",
      framework: "React",
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
      framework: "Node.js + React",
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
