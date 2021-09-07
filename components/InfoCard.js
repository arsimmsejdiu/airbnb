import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="info-card">
      <div className="info-card-img">
        <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="text-sm pt-2 text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
              <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
              <p className="text-right font-extralight">{total}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default InfoCard;
