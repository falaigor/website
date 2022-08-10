import Image from "next/image";
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="bg-white p-8 flex" data-testid="footer">
      <div className="flex max-w-7xl w-full m-auto justify-between items-center py-8 px-8 xl:px-0">
        <Image
          src="/logo-dark.svg"
          alt="Logo Igor Santos"
          width="160px"
          height="30px"
        />

        <div className="flex gap-2 mt-4">
          <Link href="https://github.com/falaigor/" target="_blank" passHref>
            <span className="cursor-pointer bg-dark hover:bg-blue p-2 text-white hover:text-white text-2xl transition-all">
              <GithubLogo />
            </span>
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/falaigors/"
            passHref
          >
            <span className="cursor-pointer bg-dark hover:bg-blue p-2 text-white hover:text-white text-2xl transition-all">
              <InstagramLogo />
            </span>
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/falaigor/"
            passHref
          >
            <span className="cursor-pointer bg-dark hover:bg-blue p-2 text-white hover:text-white text-2xl transition-all">
              <LinkedinLogo />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
