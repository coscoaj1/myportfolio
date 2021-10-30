import React from "react";
import Image from "next/image";
import Header from "./Header";

function Hero() {
  return (
    <div className="relative w-screen h-screen bg-[#111828]">
      <div className="absolute top-10 left-10 rounded-full h-96 w-96 bg-[#8447ff]"></div>
      <Header />
      <section className="text-white w-full flex flex-col items-center justify-center absolute top-1/2">
        <h4 className="text xl sm:text-2xl font-thin uppercase">
          Hi, I'm Anthony
        </h4>
        <div className="text-4xl sm:text-5xl font-medium uppercase">
          Frontend Developer
        </div>
      </section>
    </div>
  );
}

export default Hero;

{
  /* <Image
				src="/images/mountains-2021-08-26-18-34-26-utc.jpg"
				layout="fill"
				objectFit="cover"
			/> */
}
