import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

function Smallcard({ img, location, distance }) {
  return (
    //global styles at styles/global.css
    <div className="small-cards">
      {/* left */}
      <Tilt options={{ max : 25 }} className="relative h-16 w-16">
          <Image src={img} layout="fill" className="rounded-lg" />
      </Tilt>
      {/* right */}
      <div>
          <h2>{location}</h2>
          <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default Smallcard;