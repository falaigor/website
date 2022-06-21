import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-8 px-8 xl:px-0">
      <Image
        src="/logo-white.svg"
        alt="Logo Igor Santos"
        width="160px"
        height="30px"
      />
      <nav className="">
        <ul className="flex">
          <li className="p-2 text-sm font-semibold">
            <Link href="#about">ABOUT</Link>
          </li>
          <li className="p-2 text-sm font-semibold">
            <Link href="#projects">PROJECTS</Link>
          </li>
          <li className="p-2 text-sm font-semibold">
            <Link href="#experiences">EXPERIENCES</Link>
          </li>
          <li className="p-2 text-sm font-semibold">
            <Link href="#contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
