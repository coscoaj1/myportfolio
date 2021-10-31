import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import MobileDropdownMenu from "./MobileDropdownMenu";

function Header() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => window.removeEventListener("scroll", changeHeader);
  });

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <header className="absolute top-0 z-10 max-w-7xl flex w-full p-4 text-[#fafafa] font-light">
      <div className="flex-grow">
        <button className="font-medium sm:text-7xl text-3xl text-[#0891b2]">
          {"<>"}
        </button>
      </div>
      <div className="flex justify-end text-xl gap-6 w-screen">
        <MobileDropdownMenu />
        <button className="hidden sm:block">PROJECTS</button>
        <button className="hidden sm:block">ABOUT</button>
        <button className="hidden sm:block mr-6">CONTACT</button>
      </div>
    </header>
  );
}

export default Header;
