import Image from "next/image";
import Link from "next/link";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experiences } from "../components/Experiences";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Tricker } from "../components/Tricker";

export default function Home() {
  return (
    <>
      <Hero />
      <Tricker />
      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </>
  );
}
