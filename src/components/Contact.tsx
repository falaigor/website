import Link from "next/link";
import { Chat } from "phosphor-react";

export function Contact() {
  return (
    <section data-testid="contact" id="contact" className="bg-light-dark p-6">
      <div className="max-w-6xl m-auto py-24 text-center flex flex-col">
        <h2 className="font-Miligram font-bold text-5xl text-blue drop-shadow-custom shadow-red-400/100">
          Bora bater um papo?
        </h2>

        <p className="text-lg max-w-2xl m-auto py-4">
          Vamos conversar! Eu adoraria ouvir sobre o que você está trabalhando e
          encontrar uma maneira de trabalhar em conjunto.
        </p>

        <Link href="https://www.linkedin.com/in/falaigor/" passHref>
          <a
            data-testid="chat-button"
            target="_blank"
            className="w-32 m-auto flex justify-between items-center py-2 px-6 text-zinc-300 border-2 border-dark-blue rounded-lg hover:text-zinc-100 hover:bg-dark-blue text-lg transition-all"
          >
            <Chat size={24} /> Chat
          </a>
        </Link>
      </div>
    </section>
  );
}
