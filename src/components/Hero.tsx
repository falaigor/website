export const Hero = () => {
  return (
    <div data-testid="hero" className="max-w-7xl m-auto">
      <div className="flex flex-col mt-14 p-6 gap-5 max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-Jost font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue to-light-blue drop-shadow-custom shadow-red-400/100">
          Eu sou Igor Santos, desenvolvedor front-end.
        </h1>
        <p className="text-base">
          Sou especializado no desenvolvimento de website e aplicações web.
        </p>
      </div>
    </div>
  );
};
