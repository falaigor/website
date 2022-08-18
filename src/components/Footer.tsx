import Image from "next/image";
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="p-8 flex">
      <div className="flex flex-col sm:flex-row max-w-7xl w-full m-auto justify-between items-center py-8 px-8 xl:px-0">
        <Image
          src="/logo-white.svg"
          alt="Logo Igor Santos"
          width="160px"
          height="30px"
        />

        <div className="flex py-4 gap-2 mt-4">
          <Link href="https://github.com/falaigor/" passHref>
            <a
              target="_blank"
              className="cursor-pointer border-2 border-dark-blue rounded-md hover:bg-dark-blue p-2 text-white text-2xl transition-all"
            >
              <GithubLogo />
            </a>
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/falaigors/"
            passHref
          >
            <a
              target="_blank"
              className="cursor-pointer border-2 border-dark-blue rounded-md hover:bg-dark-blue p-2 text-white text-2xl transition-all"
            >
              <InstagramLogo />
            </a>
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/falaigor/"
            passHref
          >
            <a
              target="_blank"
              className="cursor-pointer border-2 border-dark-blue rounded-md hover:bg-dark-blue p-2 text-white text-2xl transition-all"
            >
              <LinkedinLogo />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
