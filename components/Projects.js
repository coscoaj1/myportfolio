import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <div className="max-w-screen">
      <p className="mt-3 pt-3 text-xl text-gray-600 border-t border-gray-400">
        projects
      </p>
      <section className="flex flex-col justify-center items-center sm:h-auto w-screen">
        <div className="p-6 mt-6 flex flex-col sm:flex-row items-center justify-around gap-12 border-b border-gray-400 w-full h-auto">
          <Image src="/images/91374.jpg" width={600} height={500} />
          <div className="flex flex-col gap-5 w-96">
            <div className="text-3xl font-bold"> Fullstack Airbnb Clone</div>
            <div className="text-gray-500">
              Created with a Next.js/TailwindCSS frontend, and a Node.js/MongoDB
              backened
            </div>
            <div className="flex justify-center gap-8">
              {" "}
              <button className="w-32 px-4 py-3  bg-purple-500 text-white rounded-3xl">
                Preview
              </button>
              <button className="w-32 px-4 py-3 border border-purple-500  text-purple-500 rounded-3xl">
                Visit Site
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
