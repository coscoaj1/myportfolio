import React, { useState, useEffect } from "react";
import MobileDropdownMenu from "./MobileDropdownMenu";
import Link from "next/link";

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
        <button className="font-medium sm:text-5xl md:6xl text-3xl text-[#0891b2]">
          {"<>"}
        </button>
      </div>
      <div className="flex justify-end text-xl gap-6 w-screen">
        <MobileDropdownMenu />
        <Link href="/#projects" passHref>
          <button className="hidden sm:block">PROJECTS</button>
        </Link>
        <Link href="/#about" passHref>
          <button className="hidden sm:block">ABOUT</button>
        </Link>
        {/* <Link href="/#contact" passHref>
          <button className="hidden sm:block mr-6">CONTACT</button>
        </Link> */}
      </div>
    </header>
  );
}

export default Header;
