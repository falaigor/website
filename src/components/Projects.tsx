import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <section
      data-testid="projects"
      id="projects"
      className="max-w-6xl m-auto my-24 px-8 xl:px-0"
    >
      <h2 className="font-Blenny text-5xl text-center mb-10">Projects</h2>

      <div
        data-testid="project-item"
        className="grid grid-cols-2 justify-between border-2 border-white items-center my-4"
      >
        <Image
          data-testid="project-item-image"
          src="/project.png"
          alt="Logo Igor Santos"
          width="400px"
          height="370px"
        />
        <div className="px-7 flex flex-col items-start">
          <h3
            data-testid="project-item-title"
            className="font-extrabold text-xl my-4"
          >
            HTML Tag Memory Test
          </h3>
          <p data-testid="project-item-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            lacus facilisis, dapibus eros laoreet, pharetra libero. Aliquam
            lacinia semper metus ac porta. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed luctus lacus facilisis, dapibus
            eros laoreet, pharetra libero. Aliquam lacinia semper metus ac
            porta.
          </p>

          <Link href="https://tag-memory-test.vercel.app/" passHref>
            <a
              data-testid="project-item-button"
              target="_blank"
              className="bg-white hover:bg-orange p-2 my-4 text-dark hover:text-white text-2xl transition-all font-Blenny"
            >
              View Project
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
