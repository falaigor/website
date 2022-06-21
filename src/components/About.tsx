import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export const About = () => {
  return (
    <section id="about" className="max-w-6xl m-auto my-24 px-8 xl:px-0">
      <div className="grid grid-flow-row-dense grid-cols-3">
        <div className="flex flex-col">
          <h2 className="font-Blenny text-5xl">
            About
            <br />
            Igor Santos
          </h2>

          <div className="flex gap-2 mt-4">
            <Link href="https://github.com/falaigor/" target="_blank" passHref>
              <span className="cursor-pointer bg-white hover:bg-orange p-2 text-dark hover:text-white text-2xl transition-all">
                <GithubLogo />
              </span>
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/falaigors/"
              passHref
            >
              <span className="cursor-pointer bg-white hover:bg-orange p-2 text-dark hover:text-white text-2xl transition-all">
                <InstagramLogo />
              </span>
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/falaigor/"
              passHref
            >
              <span className="cursor-pointer bg-white hover:bg-orange p-2 text-dark hover:text-white text-2xl transition-all">
                <LinkedinLogo />
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            lacus facilisis, dapibus eros laoreet, pharetra libero. Aliquam
            lacinia semper metus ac porta. Nullam in erat imperdiet, tincidunt
            leo eu, tempor dui. Vivamus volutpat tristique mauris, ac vulputate
            massa cursus finibus. Proin eu tortor risus. Nullam lobortis nulla
            eu sem vehicula, vitae tincidunt ex mollis. Proin finibus, nunc a
            rutrum hendrerit, quam mi porttitor felis, sit amet fermentum
            volutpat tristique mauris, ac vulputate massa cursus finibus. Proin
            eu tortor risus. Nullam lobortis nulla eu sem vehicula, vitae
            tincidunt ex mollis. Proin finibus, nunc a rutrum hendrerit, quam mi
            porttitor felis, sit amet fermentum
          </p>
        </div>
      </div>
    </section>
  );
};
