import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function product() {
  const router = useRouter();
  const {
    img,
    location,
    title,
    description,
    star,
    price,
    total,
    range,
    noOfGuests,
    placeholder,
  } = router.query;

  return (
    <div>
      <Header placeholder={placeholder}/>
      <div className="bg-white">
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a
              onClick={() => router.back()}
              className="hover:underline hover:text-gray-600 cursor-pointer"
            >
              Listings
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
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
            <span>{title}</span>
          </div>
        </div>
        <div className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <div className="flex justify-between">
              <p>{location}</p>
              <HeartIcon className="h-7 cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
            </div>

            <p className="mt-4 text-gray-500">{description}</p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Start Date - End Date</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {range}
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Number of Guests</dt>
                <dd className="mt-2 text-sm text-gray-500">{noOfGuests}</dd>
              </div>
            </dl>

            <div className="flex justify-between items-end pt-5">
              <p className="flex items-center">
                <StarIcon className="h-5 text-red-400" />
                {star}
              </p>
              <div>
                <p className="text-lg lg:text-2xl font-semibold pb-2">
                  {price}
                </p>
                <p className="text-right font-extralight">{total}</p>
              </div>
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 mt-10 hover:bg-blue-600 transition duration-200 each-in-out"
            >
              Book it now
            </button>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 sm:gap-6 lg:gap-8 relative w-[600px] h-[500px]">
            <Image
              src={img}
              layout="fill"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default product;
