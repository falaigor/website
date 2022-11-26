import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../services/prismic";
import Head from "next/head";

import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Home/Hero";
import { ProjectProps, Projects } from "../components/Home/Projects";
import { Header } from "../components/Header";

interface ProjectsProps {
  projects: ProjectProps[];
}

export default function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Igor Santos | Desenvolvedor FullStack</title>
      </Head>

      <Hero />
      <Projects {...projects} />
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

  const projects = response.results
    .filter((project) => project.data?.highlight)
    .map((project) => {
      return {
        slug: project.uid,
        title: RichText.asText(project.data.title),
        excerpt:
          project.data.description.find(
            (content) => content.type === "paragraph"
          )?.text ?? "",
        highlight: project.data.highlight,
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
