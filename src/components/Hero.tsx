import Image from "next/image";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <div className="max-w-7xl m-auto">
      <Header />

      <div className="mt-14">
        <span className="flex absolute flex-col max-w-screen-xl w-full z-0 mt-14">
          <Image
            src="/frontend.svg"
            alt="Logo Igor Santos"
            width="100vw"
            height="400px"
            className="w-screen"
          />
        </span>

        <span className="flex items-center justify-center z-10">
          <Image
            src="/igor.png"
            alt="Logo Igor Santos"
            width="620px"
            height="560px"
          />
        </span>
      </div>
    </div>
  );
};
