import { setActiveUnit } from "@/store/slices/unitToggleSlice";
import { ToggleProps } from "@/types/forecast";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const DynamicUnitToggle: React.FC<ToggleProps> = ({ units }) => {
  const { weatherUnit } = useSelector((state: any) => state.unitToggle);
  const dispatch = useDispatch();
  const handleToggle = (unit: string) => {
    dispatch(setActiveUnit(unit));
  };
  return (
    <div className="flex items-center space-x-2">
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
    </div>
  );
};

export default DynamicUnitToggle;
