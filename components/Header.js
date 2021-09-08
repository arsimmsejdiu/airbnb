import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import mont from '../public/mont.png';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    //global styles at styles/global.css
    <header className="header">
      {/* left section logo */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center justify-center xs:w-40 w-60 h-10 cursor-pointer my-auto animate-bounce"
      >
        <Image
          src={mont}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
        <h3 className="hidden lg:inline-flex xl:inline-flex text-blue-400 font-bold animate-pulse text-xl">Alpine Hotels</h3>
      </div>
      {/* middle section search bar */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-gray-400 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="search" />
      </div>
      {/* right section menu */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className=" flex items-center border-2 rounded-full space-x-2 p-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-5">
            <h2 className="text-2xl flex-grow font-semibold">
              Number Of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow font-semibold text-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow font-semibold text-red-400 "
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
