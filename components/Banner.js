import Image from "next/image";

function Banner() {
  return (
    //global styles at styles/global.css
    <div className="relative h-[300px] sm:h-[400px] lg:h[500px] xl:h-[600px] 2xl:h-[800px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold text-gray-500">
          Not sure where to go? Perfect.
        </p>
        <button className="button-banner">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
