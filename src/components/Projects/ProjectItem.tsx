import Link from "next/link";
import { ProjectType } from "../../types/Project";

export function ProjectItem(project: ProjectType) {
  return (
    <div
      data-testid="item"
      className="flex flex-col px-7 py-4 items-start 
                  justify-between hover:bg-light-dark 
                  border-[1px] border-dark-blue 
                  border-l-8 pl-10 border-l-blue 
                  rounded-md transition-colors my-4"
    >
      <div className="flex flex-col sm:flex-row py-4 items-center">
        <div className="max-w-xs w-auto py-4">
          <img
            src={project.cover}
            alt={project.title}
            width="100%"
            className="rounded-xl object-cover"
          />
        </div>

        <div className="px-6 w-full">
          <h3
            data-testid="item-title"
            className="font-medium font-Jost text-2xl"
          >
            {project.title}
          </h3>

          <p data-testid="item-desc" className="py-4">
            {project.excerpt}
          </p>
          <Link
            href={project.url}
            passHref
            data-testid="item-button"
            target="_blank"
            className="py-2 px-6 text-zinc-300 border-2 border-dark-blue rounded-lg hover:text-zinc-100 hover:bg-dark-blue text-lg transition-all font-Blenny"
          >
            Ver projeto
          </Link>
        </div>
      </div>
    </div>
  );
}
