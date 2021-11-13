import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

function Skills() {
  return (
    <div className="relative w-screen py-6">
      <div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <p className="z-10 w-full text-5xl text-center font-bold text-[#828cf8]">
            Skills
          </p>
          <FaCode className="w-20 h-20 text-gray-300" />
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center w-full h-auto gap-8 mt-8 mb-24 md:flex-row max-w-screen sm:w-full">
        <div className="z-10 flex justify-around py-2 text-left border border-gray-300 p-9 w-96 h-60 rounded-xl ">
          <Image
            src="/icons/12340106921551942641.svg"
            width={110}
            height={125}
          />
          <Image
            src="/icons/8905768601551941711 (1).svg"
            width={130}
            height={145}
            className="text-gray-300 fill-current"
          />
        </div>
        <div className="grid border border-gray-300 place-items-center w-96 h-72 rounded-xl">
          <div className="p-4">
            <Image
              src="/icons/PinClipart.com_eclipse-swt-plugin_3368555.png"
              width={310}
              height={150}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-around mx-4 border border-gray-300 w-96 h-96 rounded-xl">
            <div className="pt-8">
              <Image
                src="/icons/node-js-icon-11.jpg"
                width={130}
                height={130}
              />
            </div>
            <div>
              <Image src="/icons/mongodb.svg" width={232} height={100} />
            </div>
            <div>
              <FaGit className="w-16 h-16 text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
