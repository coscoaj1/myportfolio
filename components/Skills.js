import React from "react";
import Image from "next/image";
import { GiSkills } from "react-icons/gi";

function Skills() {
  return (
    <div className="relative w-screen py-6">
      <div>
        <div className="flex flex-col items-center justify-center w-full gap-2">
          <p className="z-10 w-full text-4xl text-center font-medium text-[#828cf8]">
            Skills
          </p>
          <GiSkills className="w-12 h-12 text-gray-300" />
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center w-full h-auto gap-8 mt-8 mb-24 md:flex-row max-w-screen sm:w-full">
        <div className="bg-[#2a2a2e] z-10 flex justify-around p-9 text-left shadow-md w-96 h-60 py-2 rounded-xl transition hover:scale-110 duration-400 hover:cursor-pointer ">
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
        <div className="bg-[#2a2a2e] grid place-items-center w-96 h-72 rounded-xl transition hover:scale-110 duration-400 transform hover:cursor-pointer">
          <div className="p-4">
            <Image
              src="/icons/PinClipart.com_eclipse-swt-plugin_3368555.png"
              width={310}
              height={150}
            />
          </div>
        </div>
        <div>
          <div className="bg-[#2a2a2e] flex flex-col items-center justify-center w-96 h-96 rounded-xl mx-4 transition hover:scale-110 transform duration-400 hover:cursor-pointer">
            <div className="pt-8">
              <Image
                src="/icons/nodejs-1.svg"
                width={160}
                height={112}
                className="text-gray-300 fill-current"
              />
            </div>
            <div>
              <Image src="/icons/mongodb-ar21.svg" width={232} height={100} />
            </div>
            <div>
              <Image src="/icons/git.svg" width={160} height={112} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
