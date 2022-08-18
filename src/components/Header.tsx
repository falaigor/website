import { Disclosure } from "@headlessui/react";
import { X, List } from "phosphor-react";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const navigation = [
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      data-testid="header"
      className="sticky top-0 z-10 bg-gradient-to-tl from-[#141D23] to-[#111A20]"
    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="relative flex max-w-7xl m-auto py-8 px-8 xl:px-0">
              <div className="flex w-full items-center justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    data-testid="logo"
                    src="/logo-white.svg"
                    alt="Logo Igor Santos"
                    width="160px"
                    height="30px"
                    className="cursor-pointer"
                  />
                </div>

                <div className="hidden sm:block sm:ml-6">
                  <ul className="flex space-x-4">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        className="p-6 text-base font-Jost font-medium hover:text-light-blue transition-all"
                      >
                        <Link data-testid="project-button" href={item.href}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 pr-6 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <List className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="text-gray-300 font-Jost text-lg hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md "
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};
