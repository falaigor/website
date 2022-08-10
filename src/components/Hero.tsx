import Image from "next/image";

export const Hero = () => {
  return (
    <div data-testid="hero" className="max-w-7xl m-auto">
      <div className="flex flex-col mt-14 p-6 font-Jost gap-5">
        <h1 className="text-7xl font-bold text-blue">
          I’m Igor Santos,front-end developer.
        </h1>
        <p className="text-xl">
          I specialize in website and web application development.
        </p>
      </div>
    </div>
  );
};
