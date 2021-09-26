import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-4 px-28 py-14  max-w-7xl mx-auto">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How AirBnb works</p>
          <p>NewsRoom</p>
          <p>Investors</p>
          <p>Airbnb plus</p>
          <p>Airbnb lux</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How AirBnb works</p>
          <p>NewsRoom</p>
          <p>Investors</p>
          <p>Airbnb plus</p>
          <p>Airbnb lux</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How AirBnb works</p>
          <p>NewsRoom</p>
          <p>Investors</p>
          <p>Airbnb plus</p>
          <p>Airbnb lux</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How AirBnb works</p>
          <p>NewsRoom</p>
          <p>Investors</p>
          <p>Airbnb plus</p>
          <p>Airbnb lux</p>
        </div>
      </div>
      <h5 className="text-gray-500 p-5 flex items-center justify-center bg-gray-100 rounded-lg cursor-pointer hover:underline">
        {`Copyright by ${new Date().getFullYear()} Arsim Sejdiu`}
      </h5>
    </div>
  );
}

export default Footer;
