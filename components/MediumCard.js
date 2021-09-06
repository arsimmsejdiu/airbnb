import Image from "next/image";
import Tilt from 'react-parallax-tilt';

function MediumCard({ img, title }) {
  return (
    //global styles at styles/global.css
    <div className="medium-card">
      <Tilt options={{ max : 25 }} className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </Tilt>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
