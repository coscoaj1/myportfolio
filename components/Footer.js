import React from "react";
import { CgCoffee } from "react-icons/cg";

function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16  bg-[#6161ff] text-white">
      <button className="flex items-center justify-center gap-2 font-medium text-white">
        Powered by <CgCoffee className="w-8 h-8 text-white" />
      </button>
    </footer>
  );
}

export default Footer;
