import React, { useState } from "react";
import Project from "./Project";
import { VscProject } from "react-icons/vsc";
import { FaAirbnb, FaMapSigns } from "react-icons/fa";

function Projects({ handleClick }) {
<<<<<<< HEAD
	const project = [
		{
			title: 'Full-Stack Airbnb Clone',
			description:
				'Users can sign in, search for rentals with a custom date picker, and create their own listings.',
			tech: 'Next.js Node Express MongoDB AWS S3 Google Maps API TailwindCSS Vercel Axios',
			link: 'https://airbnbnextclone.vercel.app',
			github: 'https://github.com/coscoaj1/airbnbnextclone',
			image: '/images/91374dark.jpg',
			icon: <FaAirbnb className="w-10 h-10 text-left text-gray-300" />,
			video: true,
		},
		{
			title: 'Remote Destinations',
			description:
				'A simple landing page with a parallax scrolling background image',
			tech: 'React React-Router-Dom TailwindCSS Netlify',
			link: 'https://remote-destinations.netlify.app/',
			github: 'https://github.com/coscoaj1/landing_page',
			image: '/images/remote.jpg',
			icon: <FaMapSigns className="w-10 h-10 text-left text-gray-300" />,
			video: false,
		},
		{
			title: 'Catlify',
			description:
				'Users can sign in, submit their favorite blogs for review, and like/comment on existing blog submissions.',
			tech: 'React Material-UI Node.js Express MongoDB Heroku',
			link: 'https://airbnbnextclone.vercel.app',
			github: 'https://github.com/coscoaj1/bloglist-frontend',
			image: '/images/91374dark.jpg',
			icon: <FaMapSigns />,
			video: false,
		},
	];
=======
  const project = [
    {
      title: "Full-Stack Airbnb Clone",
      description:
        "Users can sign in, search for rentals with a custom date picker, and create their own listings.",
      tech: "Next.js Node Express MongoDB AWS S3 Google Maps API TailwindCSS",
      link: "https://airbnbnextclone.vercel.app",
      github: "https://github.com/coscoaj1/airbnbnextclone",
      image: "/images/91374dark.jpg",
      icon: <FaAirbnb className="w-10 h-10 text-left text-gray-300" />,
      video: true,
    },
    {
      title: "Remote Destinations",
      description:
        "A simple landing page with a parallax scrolling background image",
      tech: "React React-Router-Dom TailwindCSS Netlify",
      link: "https://remote-destinations.netlify.app/",
      github: "https://github.com/coscoaj1/landing_page",
      image: "/images/remote.jpg",
      icon: <FaMapSigns className="w-10 h-10 text-left text-gray-300" />,
      video: false,
    },
    {
      title: "Catlify",
      description:
        "Users can sign in, submit their favorite blogs for review, and like/comment on existing blog submissions.",
      tech: "React MUI 5 Node.js Express MongoDB React-Router-Dom Vercel",
      link: "https://airbnbnextclone.vercel.app",
      github: "https://github.com/coscoaj1/bloglist-frontend",
      image: "/images/Catlify.jpg",
      icon: <FaMapSigns />,
      video: false,
    },
  ];
>>>>>>> 628688ca84934aa99ab6bfa1eef5a9c5480b5973

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
              icon={item.icon}
              video={item.video}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Projects;
