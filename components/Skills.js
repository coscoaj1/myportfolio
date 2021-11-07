import React from "react";
import Image from "next/image";
import { GiSkills } from "react-icons/gi";

function Skills() {
  return (
    <div className="relative w-full h-autopy-6">
      <div>
        <div className="flex flex-col w-full items-center justify-center gap-2">
          <p className="w-full text-4xl text-center font-medium text-[#828cf8]">
            Skills
          </p>
          <GiSkills className="w-12 h-12 text-gray-300" />
        </div>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center max-w-screen  mt-8 mb-24 sm:w-full h-auto w-full gap-8">
        <div className="flex justify-around p-9 text-left shadow-md w-96 h-60 py-2 rounded-xl transition hover:shadow-lg duration-250 hover:cursor-pointer ">
          <Image
            src="/icons/12340106921551942641.svg"
            width={110}
            height={125}
          />
          <Image
            src="/icons/8905768601551941711 (1).svg"
            width={130}
            height={145}
            className="fill-current text-gray-300"
          />
        </div>
        <div className="grid place-items-center w-96 h-72 rounded-xl">
          <div className="p-4">
            <Image
              src="/icons/PinClipart.com_eclipse-swt-plugin_3368555.png"
              width={310}
              height={150}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center w-96 h-96 rounded-xl mx-4">
            <div className="pt-8">
              <Image src="/icons/nodejs-1.svg" width={160} height={112} />
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
