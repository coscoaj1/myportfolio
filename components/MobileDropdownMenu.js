import { Menu } from "@headlessui/react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useState } from "react";

function MobileDropdownMenu() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Menu as="div" className="sm:hidden w-full">
      <Menu.Button className="absolute right-5">
        <Image src="/icons/icons8-menu.svg" width={35} height={35} />
      </Menu.Button>
      <Transition
        className="w-screen absolute left-0"
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <Menu.Items
          className="pt-12 flex flex-col items-center gap-4 w-full border border-purple-500
                h-screen top-14 mt-14 bg-white text-black text-3xl font-bold"
        >
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "text-black"}`}
                href="/account-settings"
              >
                Projects
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                About
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="">Contact</span>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileDropdownMenu;
