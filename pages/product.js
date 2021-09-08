import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

function product() {
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Technical Specifications
              </h2>
            </div>

            <p className="text-indigo-500 font-semibold text-base mt-2">
              #Science #Education
            </p>

            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Designed by Good Goods, Inc.
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Solid walnut base with rare earth magnets and powder coated
                  steel card cover
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Dimensions</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  6.25&quot; x 3.55&quot; x 1.15&quot;
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Finish</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Hand sanded and finished with natural oil
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Includes</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Wood card tray and 3 refill packs
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Considerations</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Made from natural materials. Grain and color vary with each
                  item.
                </dd>
              </div>

              <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out"
              >
                Write to the Owner
              </button>
            </dl>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 sm:gap-6 lg:gap-8 relative w-[600px] h-[700px]">
            <Image
              src="https://links.papareact.com/2io"
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
