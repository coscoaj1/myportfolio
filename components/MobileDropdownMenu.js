import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

function MobileDropdownMenu() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Menu as="div" className="z-50 w-full sm:hidden">
      <Menu.Button
        aria-label="mobile dropdown menu"
        className="absolute right-6 top-6"
      >
        <Image
          alt="hamburger menu"
          src="/icons/icons8-menu.svg"
          width={30}
          height={30}
        />
      </Menu.Button>
      <Transition
        className="absolute left-0 z-50 w-screen"
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Menu.Items className="z-50 flex flex-col items-center w-full h-screen gap-4 pt-12 text-3xl font-bold text-black bg-white border border-purple-500 top-14 mt-14">
          <Menu.Item>
            {({ active }) => (
              <Link href="/#projects" passHref>
                Projects
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/#about" passHref>
                About
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link href="/#contact" passHref>
                Contact
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileDropdownMenu;
