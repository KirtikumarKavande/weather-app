"use client";
import React, { useState } from "react";
import { Search, MapPin, Locate, LocateIcon } from "lucide-react";
import TodayWeather from "./leftPanel/TodayWeather";

const LeftPanel = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const convertTemp = (temp: number) =>
    isCelsius ? temp : Math.round((temp * 9) / 5 + 32);

  return (
    <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0  p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-full max-w-xs flex items-center">
          <input
            type="text"
            placeholder="Search for places ..."
            className="w-full pl-10 pr-4 py-2  rounded-full text-sm placeholder:text-black font-semibold"
          />
          <div>
            <Search className="absolute left-3 top-2.5 text-black " size={17} />
          </div>
        </div>
        <button className="p-2 bg-gray-100 rounded-full">
          <LocateIcon size={20} className="text-black" />
        </button>
      </div>

      <TodayWeather />

      <div className="bg-gray-100 rounded-2xl p-4">
        <img
          src="/api/placeholder/300/150"
          alt="City skyline"
          className="w-full h-28 object-cover rounded-xl mb-4"
        />
        <div className="flex items-center justify-center text-sm text-gray-800">
          <MapPin className="mr-2" size={16} />
          <span>New York, NY, USA</span>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
