import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />

      <div className="w-screen">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
