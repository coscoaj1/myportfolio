import React, { useState, useEffect } from "react";
import MobileDropdownMenu from "./MobileDropdownMenu";
import Link from "next/link";

function Header() {
  return (
    <header className="top-0 z-10 max-w-full flex w-full p-3 text-[#fafafa] font-light">
      <div className="flex-grow">
        <div className="font-medium sm:text-3xl md:text-4xl text-xl text-[#03d8c5]"></div>
      </div>
      <div className="z-50 flex justify-end w-screen gap-6 pr-12 text-lg">
        <MobileDropdownMenu className="z-50" />
        <Link href="/#projects" passHref>
          <button className="relative hidden sm:block group hover:text-gray-300">
            <span>PROJECTS</span>
            <div className="absolute w-2 mt-1 transition duration-200 ease-in border-b-2 border-gray-800 delay-50 group-hover:border-white left-10"></div>
          </button>
        </Link>
        <Link href="/#about" passHref>
          <button className="relative hidden sm:block group hover:text-gray-300">
            <span>ABOUT</span>
            <div className="absolute w-2 mt-1 transition duration-200 ease-in border-b-2 border-gray-800 delay-50 group-hover:border-white left-7"></div>
          </button>
        </Link>
        <Link href="/#contact" passHref>
          <button className="relative hidden sm:block group hover:text-gray-300">
            <span>CONTACT</span>
            <div className="absolute w-2 mt-1 transition duration-200 ease-in border-b-2 border-gray-800 delay-50 group-hover:border-white left-9"></div>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
