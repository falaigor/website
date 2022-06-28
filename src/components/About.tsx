import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export const About = () => {
  return (
    <section
      data-testid="about"
      id="about"
      className="max-w-6xl m-auto my-24 px-8 xl:px-0"
    >
      <div className="grid grid-flow-row-dense grid-cols-3">
        <div className="flex flex-col">
          <h2 className="font-Blenny text-5xl">
            About
            <br />
            Igor Santos
          </h2>

          <div className="flex gap-2 mt-4">
            <Link href="https://github.com/falaigor" passHref>
              <a
                data-testid="github-button"
                target="_blank"
                className="cursor-pointer bg-white hover:bg-orange p-2 text-dark hover:text-white text-2xl transition-all"
              >
                <GithubLogo />
              </a>
            </Link>

            <Link href="https://www.instagram.com/falaigors" passHref>
              <a
                data-testid="instagram-button"
                target="_blank"
                className="cursor-pointer bg-white hover:bg-orange p-2 text-dark hover:text-white text-2xl transition-all"
              >
                <InstagramLogo />
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/falaigor" passHref>
              <a
                data-testid="linkedin-button"
                target="_blank"
                className="cursor-pointer bg-white hover:bg-orange p-2 text-dark hover:text-white text-2xl transition-all"
              >
                <LinkedinLogo />
              </a>
            </Link>
          </div>
        </div>
        <div data-testid="about-text" className="col-span-2">
          <p>
            Entusiasta das melhores tecnologias de desenvolvimento web & mobile.
          </p>
          <p>
            Comecei a minha jornada profissional por volta do ano de 2015,
            quando trabalhava em um loja de informatica e um amigo disse pro meu
            chefe "ele sabe fazer sites!" desde então nunca mais parei de fazer
            sites (na época era só o carinha do HTML e CSS, mas eu pirava em
            fazer coisas em Flash com AS3 e JavaScript haha).
          </p>
          <p>
            Hoje estou focado no desenvolvimento web com as tecnologias:
            Javascript, Typescript, ReactJS, NextJS e NodeJS
          </p>
        </div>
      </div>
    </section>
  );
};
