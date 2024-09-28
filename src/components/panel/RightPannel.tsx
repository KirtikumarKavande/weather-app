"use client";
import React, { useEffect, useState } from "react";
import { Search, MapPin } from "lucide-react";
import Image from "next/image";
import DayWiseCards from "./rightPanel/DayWiseCards";
import CelsiusFahrenheitToggle from "./rightPanel/UnitToggle";
import { weatherUnits } from "@/utilitis/contsant";
import TodaysHighlights from "./rightPanel/TodaysHighlights";
const RightPanel = () => {
  const [isCelsius, setIsCelsius] = useState(true);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const temperatures = [15, 12, 9, 8, 5, 4, 3];
  const weatherIcons = ["☀️", "🌤️", "🌧️", "🌧️", "❄️", "☀️", "☀️"];
  const convertTemp = (temp: number) =>
    isCelsius ? temp : Math.round((temp * 9) / 5 + 32);

  return (
    <div className="lg:w-2/3 lg:pl-8 bg-[#F6F6F8] rounded-r-3xl p-4 sm:p-6 md:p-8 ">
      <div className="flex justify-between items-center mb-8">
        <div className="space-x-2">
          <button className="px-4 py-1.5 text-gray-400 rounded-full text-sm">
            Today
          </button>
          <button className="px-4 py-1.5 text-black font-bold text-lg underline ">
            Week
          </button>
        </div>

        <CelsiusFahrenheitToggle units={weatherUnits} />
      </div>
      <DayWiseCards />
      <TodaysHighlights />
    </div>
  );
};

export default RightPanel;
