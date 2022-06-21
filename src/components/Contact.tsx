import Link from "next/link";

export const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl m-auto my-24 px-8 xl:px-0">
      <h2 className="font-Blenny text-5xl ">Fancy a chat?</h2>

      <p className="text-xl max-w-2xl">
        I'd love to connect — let's have a cup of coffee, whether it’s for your
        exciting new project, an upcoming talk or just for fun. Feel free to
        send me an{" "}
        <Link href="/as">
          <span className="cursor-pointer underline underline-offset-2">
            email
          </span>
        </Link>{" "}
        or{" "}
        <Link href="/as">
          <span className="cursor-pointer underline underline-offset-2">
            reach out
          </span>
        </Link>
      </p>
    </section>
  );
};
