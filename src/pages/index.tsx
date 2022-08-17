import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../services/prismic";

import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Header } from "../components/Header";

type Project = {
  slug?: string;
  title?: string;
  excerpt?: string;
  cover?: string;
  url?: string;
};

interface ProjectsProps {
  projects: Project[];
}

export default function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Header />
      <Hero />
      <Projects {...projects} />
      <Contact />
      <Footer />
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
