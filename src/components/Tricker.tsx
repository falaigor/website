import Image from "next/image";

export const Tricker = () => {
  return (
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
  );
};
