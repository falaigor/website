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
      <h2 className="font-Jost font-bold text-3xl mb-10">Projects</h2>

      {Object.values(projects).map((v: Project) => {
        return (
          <div
            key={v.slug}
            data-testid="item"
            className="flex flex-col gap-3 px-7 bg-light-dark items-start justify-between border-l-8 border-white rounded-md py-8 my-4"
          >
            <h3
              data-testid="item-title"
              className="font-medium font-Jost text-2xl"
            >
              {v.title}
            </h3>

            <Image
              data-testid="item-image"
              src={v.cover}
              alt="Logo Igor Santos"
              width="400px"
              height="370px"
            />

            <p data-testid="item-desc font-Jost">{v.excerpt}</p>

            <Link href={v.url} passHref>
              <a
                data-testid="item-button"
                target="_blank"
                className="py-2 px-6  text-zinc-300 border-2 border-[#7CC9FF41] rounded-lg hover:text-blue text-lg transition-all font-Blenny"
              >
                View Project
              </a>
            </Link>
          </div>
        );
      })}
    </section>
  );
};
