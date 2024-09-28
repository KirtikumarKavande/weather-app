import { setActiveUnit } from "@/store/slices/unitToggleSlice";
import { ToggleProps } from "@/types/forecast";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const DynamicUnitToggle: React.FC<ToggleProps> = ({ units }) => {
  const { weatherUnit } = useSelector((state: any) => state.weatherSettings);
  const dispatch = useDispatch();
  const handleToggle = (unit: string) => {
    dispatch(setActiveUnit(unit));
  };
  return (
    <div>
    <div className="flex items-center space-x-4">
      {units.map((unit, index) => (
        <button
          key={index}
          className={`px-2 py-1 rounded-full text-sm ${
            weatherUnit === unit
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => handleToggle(unit)}
        >
          {unit}
        </button>
      ))}
    <div className="h-10 w-10 bg-gray-500 rounded-sm "></div>

    </div>

    </div>
  );
};

export default DynamicUnitToggle;
