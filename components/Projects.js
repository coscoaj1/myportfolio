import React, { useState } from "react";
import Image from "next/image";
import FirstProject from "./FirstProject";

function Projects({ show, onClose, children, title, handleClick }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-screen bg-[#fafafa]">
      <p className="mt-3 pt-3 text-2xl text-center text-gray-400 font-medium bg-[#fafafa]">
        projects
      </p>
      <section className="flex flex-col justify-center items-center sm:h-auto w-screen">
        <FirstProject onClick={handleClick} />
      </section>
    </div>
  );
}

export default Projects;
