import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import { PrismicRichText } from "@prismicio/react";
import { getPrismicClient } from "../services/prismic";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import Head from "next/head";

type PageProps = {
  page: {
    slug: string;
    title: string;
    excerpt: [];
  };
};

export default function Page({ page }: PageProps) {
  return (
    <>
      <Head>
        <title>Igor Santos | Sobre Mim</title>
      </Head>

      <Header />
      <div data-testid="hero" className="max-w-4xl m-auto">
        <div className="flex flex-col p-6 mb-12 gap-5">
          <h1 className="text-5xl font-Jost font-bold text-zinc-300 drop-shadow-custom shadow-red-400/100">
            {page.title}
          </h1>

          <PrismicRichText
            field={page.excerpt}
            components={{
              paragraph: ({ children }) => (
                <p className="text-base py-1 text-zinc-300">{children}</p>
              ),
            }}
          />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const prismic = getPrismicClient();

  const response = await prismic.getByUID("page", params.uid, {});

  const page = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    excerpt: response.data.description,
  };

  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
