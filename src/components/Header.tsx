import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div
      data-testid="header"
      className="flex justify-between items-center py-8 px-8 xl:px-0"
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
          <li className="p-2 text-sm font-semibold">
            <Link data-testid="about-button" href="#about">
              ABOUT
            </Link>
          </li>
          <li
            data-testid="projects-button"
            className="p-2 text-sm font-semibold"
          >
            <Link href="#projects">PROJECTS</Link>
          </li>
          <li
            data-testid="experiences-button"
            className="p-2 text-sm font-semibold"
          >
            <Link href="#experiences">EXPERIENCES</Link>
          </li>
          <li
            data-testid="contact-button"
            className="p-2 text-sm font-semibold"
          >
            <Link href="#contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
