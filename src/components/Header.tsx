import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header
      data-testid="header"
      className="flex justify-between items-center max-w-7xl m-auto py-8 px-8 xl:px-0"
    >
      <Image
        data-testid="logo"
        src="/logo-white.svg"
        alt="Logo Igor Santos"
        width="160px"
        height="30px"
      />

      <nav className="">
        <ul className="flex">
          <li className="p-6 text-base font-Jost font-medium">
            <Link data-testid="about-button" href="#projects">
              Projects
            </Link>
          </li>

          <li
            data-testid="projects-button"
            className="p-6 text-base font-Jost font-medium"
          >
            <Link href="/about">About</Link>
          </li>

          <li
            data-testid="contact-button"
            className="p-6 text-base font-Jost font-medium"
          >
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
