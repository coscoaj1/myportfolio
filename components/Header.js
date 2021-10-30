import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    <header className="top-0 flex w-full p-1 text-white font-light">
      <div className="flex-grow">
        <button className="font-medium text-xl">Anthony Cosco</button>
      </div>
      <div className="flex text-xl gap-6">
        <button className="sm:hidden">
          <Image src="/icons/icons8-menu.svg" width={24} height={20} />
        </button>
        <button className="hidden sm:block font-light">SKILLS</button>
        <button className="hidden sm:block font-light">PROJECTS</button>
        <button className="hidden sm:block font-light">CONTACT</button>
      </div>
    </header>
  );
}

export default Header;
