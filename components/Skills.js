import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div className="w-full h-auto bg-[#010b13]">
      <p className="mt-3 text-xl text-gray-500">{"<skills />"}</p>
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center max-w-screen mt-8 mb-24 sm:w-full h-auto w-full gap-8">
        <div className="flex justify-around p-9 text-left bg-white shadow-md w-96 h-60 flex-[basis:33%] py-2 rounded-xl transition hover:shadow-lg duration-250 hover:cursor-pointer">
          <Image
            src="/icons/12340106921551942641.svg"
            width={110}
            height={110}
          />
          <Image
            src="/icons/8905768601551941711 (1).svg"
            width={125}
            height={125}
          />
        </div>
        <div className="flex-[basis:33%]">
          <div className="grid place-items-center bg-white border shadow-md w-96 h-60 rounded-xl">
            <div className="p-4">
              <Image
                src="/icons/PinClipart.com_eclipse-swt-plugin_3368555.png"
                width={310}
                height={150}
              />
            </div>
          </div>
        </div>
        <div className="flex-[basis:33%]">
          <div>
            <div className=" flex flex-col justify-center items-center gap-4 text-left bg-white shadow-md w-96 h-60 mb-6 rounded-xl">
              <div className="h-36 px-2">
                <Image
                  src="/icons/nodejs-logo-svgrepo-com.svg"
                  width={200}
                  height={200}
                />
              </div>
              <Image src="/icons/mongodb-ar21.svg" width={232} height={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
