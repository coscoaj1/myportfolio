import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="w-full h-auto bg-[#111828] py-6 mt-6">
      <p className="w-full text-2xl text-center text-gray-200">{"skills"}</p>
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center max-w-screen mt-8 mb-24 sm:w-full h-auto w-full gap-8">
        <div className="flex justify-around p-9 text-left bg-[#fafafa] shadow-md w-96 h-60 flex-[basis:33%] py-2 rounded-xl transition hover:shadow-lg duration-250 hover:cursor-pointer">
          <Image
            src="/icons/12340106921551942641.svg"
            width={110}
            height={125}
          />
          <Image
            src="/icons/8905768601551941711 (1).svg"
            width={130}
            height={145}
          />
        </div>
        <div className="grid place-items-center bg-[#fafafa] border w-96 h-72 rounded-xl">
          <div className="p-4">
            <Image
              src="/icons/PinClipart.com_eclipse-swt-plugin_3368555.png"
              width={310}
              height={150}
            />
          </div>
        </div>
        <div>
          <div className=" flex flex-col items-center justify-center bg-[#fafafa] w-96 h-80 rounded-xl">
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
