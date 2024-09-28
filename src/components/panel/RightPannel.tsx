"use client";
import DayWiseCards from "./rightPanel/DayWiseCards";
import CelsiusFahrenheitToggle from "./rightPanel/UnitToggle";
import { weatherUnits } from "@/utilitis/contsant";
import TodaysHighlights from "./rightPanel/TodaysHighlights";
const RightPanel = () => {
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
