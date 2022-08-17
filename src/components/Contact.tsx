import Link from "next/link";
import { Chat } from "phosphor-react";

export const Contact = () => {
  return (
    <section data-testid="contact" id="contact" className="bg-light-dark">
      <div className="max-w-6xl m-auto py-24 text-center flex flex-col gap-4">
        <h2 className="font-Jost font-bold text-5xl text-blue drop-shadow-custom shadow-red-400/100">
          Fancy a chat?
        </h2>

        <p className="text-lg max-w-2xl m-auto">
          Let’s have a conversation! I’d love to hear about what you’re working
          on and find a way to work together.
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
};
