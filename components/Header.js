import React, { useState, useEffect } from "react";
import MobileDropdownMenu from "./MobileDropdownMenu";
import Link from "next/link";

function Header() {
  return (
    <header className="relative top-0 z-10 max-w-full flex w-full p-3 text-[#fafafa] font-light">
      <div className="flex-grow">
        <button className="font-medium sm:text-3xl md:text-4xl text-xl text-[#03d8c5]">
          {"</>"}
        </button>
      </div>
      <div className="flex justify-end text-lg gap-6 w-screen pr-12">
        <MobileDropdownMenu />
        <Link href="/#projects" passHref>
          <button className="hidden sm:block">PROJECTS</button>
        </Link>
        <Link href="/#about" passHref>
          <button className="hidden sm:block">ABOUT</button>
        </Link>
        <Link href="/#contact" passHref>
          <button className="hidden sm:block mr-6">CONTACT</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
