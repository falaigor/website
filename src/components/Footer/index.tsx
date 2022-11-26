import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer data-testid="footer" className="p-8 flex">
      <div className="flex flex-col sm:flex-row max-w-7xl w-full m-auto justify-between items-center py-8 px-8 xl:px-0">
        <img
          src="/logo-white.svg"
          alt="Logo Igor Santos"
          width="160px"
          height="30px"
        />

        <div className="flex py-4 gap-2 mt-4">
          <Link
            href="https://github.com/falaigor/"
            passHref
            target="_blank"
            className="cursor-pointer border-2 border-dark-blue rounded-md hover:bg-dark-blue p-2 text-white text-2xl transition-all"
          >
            <GithubLogo />
          </Link>

          <Link
            target="_blank"
            href="https://www.instagram.com/falaigors/"
            passHref
            className="cursor-pointer border-2 border-dark-blue rounded-md hover:bg-dark-blue p-2 text-white text-2xl transition-all"
          >
            <InstagramLogo />
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/falaigor/"
            passHref
            className="cursor-pointer border-2 border-dark-blue rounded-md hover:bg-dark-blue p-2 text-white text-2xl transition-all"
          >
            <LinkedinLogo />
          </Link>
        </div>
      </div>
    </footer>
  );
}
