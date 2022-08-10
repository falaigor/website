import Image from "next/image";

export const Hero = () => {
  return (
    <div data-testid="hero" className="max-w-7xl m-auto">
      <div className="flex flex-col mt-14 p-6 gap-5">
        <h1 className="text-7xl font-Jost font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue to-light-blue drop-shadow-custom shadow-red-400/100">
          I’m Igor Santos, front-end developer.
        </h1>
        <p className="text-base">
          I specialize in website and web application development.
        </p>
      </div>
    </div>
  );
};
