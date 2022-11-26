import Head from "next/head";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../services/prismic";

import { HeroProjects } from "../components/Projects/Hero";
import { ProjectItem } from "../components/Projects/ProjectItem";
import { ProjectType } from "../types/Project";

interface ProjectsProps {
  projects: ProjectType[];
}

export default function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Igor Santos | Desenvolvedor FullStack</title>
      </Head>

      <HeroProjects />

      <section
        data-testid="projects"
        id="projects"
        className="max-w-7xl m-auto my-24 p-6"
      >
        <h2 className="font-Jost font-bold text-3xl mb-10">Projetos</h2>
        {projects.map((project) => (
          <ProjectItem key={project.slug} {...project} />
        ))}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "portifolio")],
    {
      fetch: ["portifolio"],
      pageSize: 100,
    }
  );

  const projects = response.results.map((project) => {
    return {
      slug: project.uid,
      title: RichText.asText(project.data.title),
      excerpt:
        project.data.description.find((content) => content.type === "paragraph")
          ?.text ?? "",
      cover: project.data.img.url,
      url: project.data.url,
    };
  });

  return {
    props: {
      projects,
    },
  };
};
