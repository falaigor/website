import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-gradient-to-tl from-[#141D23] to-[#111A20]">
      <header
        data-testid="header"
        className="flex justify-between items-center max-w-7xl m-auto py-8 px-8 xl:px-0"
      >
        <Link data-testid="home-button" href="/">
          <Image
            data-testid="logo"
            src="/logo-white.svg"
            alt="Logo Igor Santos"
            width="160px"
            height="30px"
            className="cursor-pointer"
          />
        </Link>

        <nav>
          <ul className="flex">
            <li className="p-6 text-base font-Jost font-medium hover:text-light-blue transition-all">
              <Link data-testid="project-button" href="/#projects">
                Projects
              </Link>
            </li>

            <li
              data-testid="about-button"
              className="p-6 text-base font-Jost font-medium hover:text-light-blue transition-all"
            >
              <Link href="/about">About</Link>
            </li>

            <li
              data-testid="contact-button"
              className="p-6 text-base font-Jost font-medium hover:text-light-blue transition-all"
            >
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
