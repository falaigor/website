import Image from "next/image";
import { About } from "../components/About";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl m-auto">
        <div className="flex justify-between items-center py-8 px-8 xl:px-0">
          <Image
            src="/logo-white.svg"
            alt="Logo Igor Santos"
            width="160px"
            height="30px"
          />
          <nav className="">
            <ul className="flex">
              <li className="p-2 text-sm font-semibold">ABOUT</li>
              <li className="p-2 text-sm font-semibold">PROJECTS</li>
              <li className="p-2 text-sm font-semibold">EXPERIENCES</li>
              <li className="p-2 text-sm font-semibold">CONTACT</li>
            </ul>
          </nav>
        </div>

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

      <div className="bg-white p-8 flex">
        <div className="text-dark font-extrabold flex items-center">
          <Image
            src="/simbol.svg"
            alt="Logo Igor Santos"
            width="30px"
            height="30px"
          />
          <span className="ml-4 mr-4">REACTJS</span>
        </div>

        <div className="text-dark font-extrabold flex items-center">
          <Image
            src="/simbol.svg"
            alt="Logo Igor Santos"
            width="30px"
            height="30px"
          />
          <span className="ml-4 mr-4">REACTJS</span>
        </div>
      </div>

      <About />
    </>
  );
}
