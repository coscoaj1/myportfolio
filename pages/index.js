import Head from "next/head";
import React, { useState } from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Modal from "../components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="w-screen bg-[#111828]" relative>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        Hello from the modal!
      </Modal>
      <div className="md:mx-auto max-w-7xl bg-[#111828]">
        <Head>
          <title>Anthony Cosco Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <Skills />
      </div>
      <div>
        <Projects handleClick={handleClick} />
        <Contact />
      </div>
    </div>
  );
}
