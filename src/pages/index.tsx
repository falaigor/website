import { GetStaticProps } from "next";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experiences } from "../components/Experiences";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Tricker } from "../components/Tricker";

import { RichText } from "prismic-dom";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";

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
      <Hero />
      <Tricker />
      <About />
      <Projects {...projects} />
      <Experiences />
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
