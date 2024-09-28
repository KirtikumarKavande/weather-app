"use client";
import React, { useState } from "react";
import TodayWeather from "./leftPanel/TodayWeather";
import SearchLocation from "./leftPanel/SearchLocation";
import { MapPin } from "lucide-react";

const LeftPanel = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const convertTemp = (temp: number) =>
    isCelsius ? temp : Math.round((temp * 9) / 5 + 32);

  return (
    <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0  p-4 sm:p-6 md:p-8">
    <SearchLocation />

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
