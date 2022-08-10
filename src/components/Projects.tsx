import Image from "next/image";
import Link from "next/link";

type Project = {
  slug?: string;
  title?: string;
  excerpt?: string;
  cover?: string;
  url?: string;
};

export const Projects = (projects) => {
  return (
    <section
      data-testid="projects"
      id="projects"
      className="max-w-6xl m-auto my-24 px-8 xl:px-0"
    >
      <h2 className="font-Blenny text-5xl text-center mb-10">Projects</h2>

      {Object.values(projects).map((v: Project) => {
        return (
          <div
            key={v.slug}
            data-testid="item"
            className="grid grid-cols-2 justify-between border-2 border-white items-center my-4"
          >
            <Image
              data-testid="item-image"
              src={v.cover}
              alt="Logo Igor Santos"
              width="400px"
              height="370px"
            />
            <div className="px-7 flex flex-col items-start">
              <h3
                data-testid="item-title"
                className="font-extrabold text-xl my-4"
              >
                {v.title}
              </h3>
              <p data-testid="item-desc">{v.excerpt}</p>

              <Link href={v.url} passHref>
                <a
                  data-testid="item-button"
                  target="_blank"
                  className="bg-white hover:bg-blue p-2 my-4 text-dark hover:text-white text-2xl transition-all font-Blenny"
                >
                  View Project
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};
