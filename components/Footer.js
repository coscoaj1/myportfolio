import React from "react";
import Image from "next/image";
import { CgCoffee } from "react-icons/cg";

function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t bg-[#121212] text-gray-300">
      <button className="flex items-center justify-center gap-2">
        Powered by <CgCoffee className="w-8 h-8" />
      </button>
    </footer>
  );
}

export default Footer;
