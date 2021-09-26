import Image from "next/image";
import Tilt from "react-parallax-tilt";

function MediumCard({ img, title }) {
  return (
    //global styles at styles/global.css
    <main className="flex items-center justify-center	h-full w-full">
      <div options={{ max: 10 }} className="relative h-80 w-80 hover:scale-105 transition transform duration-200 ease-out">
        <div className="overflow-hidden relative justify-end cursor-pointer capitalize flex flex-col rounded-md w-60 h-80 z-50 object-cover text-white">
          <Image src={img} alt={title} layout="fill" />
          <div className="absolute p-3 flex flex-col">
            <span className="text-xs bg-gray-50 text-gray-700 w-28 p-1 opacity-75 hover:opacity-80 rounded-md text-center">{title}</span>
            <h1 className="text-xl font-bold">Independent luxury studio apartment</h1>
            <span className="flex justify-between">
              <p className="text-xs ">Anderson Pareira</p>
              <svg
                className="h-5 w-5 leading-none text-gray-50 hover:text-lg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MediumCard;
