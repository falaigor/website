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
      className="max-w-7xl m-auto my-24 p-6 "
    >
      <h2 className="font-Jost font-bold text-3xl mb-10">Projects</h2>

      <div className="grid grid-cols-2 gap-4">
        {Object.values(projects).map((p: Project) => {
          return (
            <div
              key={p.slug}
              data-testid="item"
              className="flex flex-col px-7 py-8 gap-4 items-start justify-between hover:bg-light-dark border-[1px] border-dark-blue hover:border-l-8 pl-10 hover:pl-[33px] hover:border-l-blue rounded-md cursor-pointer"
            >
              <div className="flex flex-col gap-4">
                <h3
                  data-testid="item-title"
                  className="font-medium font-Jost text-2xl"
                >
                  {p.title}
                </h3>

                <div className="max-w-xs">
                  <img
                    src={p.cover}
                    width="100%"
                    height="auto"
                    className="rounded-xl"
                    data-testid="item-image"
                  />
                </div>

                <p data-testid="item-desc">{p.excerpt}</p>
              </div>

              <Link href={p.url} passHref>
                <a
                  data-testid="item-button"
                  target="_blank"
                  className="py-2 px-6 text-zinc-300 border-2 border-dark-blue rounded-lg hover:text-zinc-100 hover:bg-dark-blue text-lg transition-all font-Blenny"
                >
                  View Project
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
