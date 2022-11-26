import Link from "next/link";

export type ProjectProps = {
  slug?: string;
  title?: string;
  excerpt?: string;
  cover?: string;
  url?: string;
  highlight?: boolean;
};

export function Projects(projects: ProjectProps[]) {
  return (
    <section
      data-testid="projects"
      id="projects"
      className="max-w-7xl m-auto my-24 p-6"
    >
      <h2 className="font-Jost font-bold text-3xl mb-10">Projetos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
        {Object.values(projects).map((p: ProjectProps) => {
          return (
            <div
              key={p.slug}
              data-testid="item"
              className="flex flex-col px-7 py-8 items-start 
              justify-between hover:bg-light-dark 
              border-[1px] border-dark-blue 
              border-l-8 pl-10 border-l-blue 
              rounded-md transition-colors"
            >
              <div className="flex flex-col py-4">
                <h3
                  data-testid="item-title"
                  className="font-medium font-Jost text-2xl py-4"
                >
                  {p.title}
                </h3>

                <div className="max-h-xs h-full w-full py-4">
                  <img
                    src={p.cover}
                    alt=""
                    width="100%"
                    className="rounded-xl object-cover h-96"
                  />
                </div>

                <p data-testid="item-desc" className="py-4">
                  {p.excerpt}
                </p>
              </div>

              <Link href={p.url} passHref>
                <a
                  data-testid="item-button"
                  target="_blank"
                  className="py-2 px-6 text-zinc-300 border-2 border-dark-blue rounded-lg hover:text-zinc-100 hover:bg-dark-blue text-lg transition-all font-Blenny"
                >
                  Ver projeto
                </a>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center">
        <Link href="/projects">
          <a
            data-testid="item-button"
            className="py-4 px-8 mt-6 text-zinc-300 border-2 border-blue rounded-lg hover:text-zinc-100 hover:bg-dark-blue text-lg transition-all font-Blenny"
          >
            Ver todos os projeto
          </a>
        </Link>
      </div>
    </section>
  );
}
