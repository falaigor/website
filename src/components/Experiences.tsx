export const Experiences = () => {
  return (
    <section
      data-testid="experiences"
      id="experiences"
      className="max-w-6xl m-auto my-24 px-8 xl:px-0"
    >
      <h2 className="font-Blenny text-5xl text-center mb-10">Experiences</h2>

      <div
        data-testid="item"
        className="flex justify-between border-2 border-white py-10 px-6 items-center my-4"
      >
        <div className="flex items-center">
          <span
            data-testid="item-number"
            className="bg-white hover:bg-orange p-2 text-orange hover:text-white text-2xl transition-all font-Blenny w-10 h-10 text-center items-center justify-center flex"
          >
            1
          </span>

          <div className="ml-6">
            <h3 data-testid="item-title" className="font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus lacus
            </h3>
            <p data-testid="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus lacus
            </p>
          </div>
        </div>

        <p data-testid="item-date">2020 - Actual</p>
      </div>
    </section>
  );
};
