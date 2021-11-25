import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Modal from "../components/Modal";
import About from "../components/About";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-screen">
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        Hello from the modal!
      </Modal>
      <div className=" max-w-screen">
        <Hero passHref />
      </div>
      <div>
        <Projects passHref handleClick={handleClick} />
        <About passHref />
      </div>
    </div>
  );
}
