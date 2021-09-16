import Image from "next/image";
import Tilt from "react-parallax-tilt";

function MediumCard({ img, title }) {
  return (
    //global styles at styles/global.css
    <main className="flex items-center justify-center	h-full w-full">
      <Tilt options={{ max: 25 }} className="relative h-80 w-80">
        <div className="overflow-hidden relative justify-end cursor-pointer capitalize flex flex-col rounded-md w-60 h-80 z-50 object-cover text-white">
          <Image src={img} alt={title} layout="fill" />
          <div className="absolute p-3 flex flex-col">
            <span>{title}</span>
          </div>
        </div>
      </Tilt>
    </main>
  );
}

export default MediumCard;

{
  /* <div className="medium-card">
  <Tilt options={{ max: 25 }} className="relative h-80 w-80">
    <Image src={img} layout="fill" className="rounded-xl" />
  </Tilt>
  <h3 className="text-2xl mt-3">{title}</h3>
</div>; */
}
